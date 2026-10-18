// GET /api/route?callsign=UAL1 — the scheduled route (origin → destination) for one flight callsign.
// Primary: adsbdb (https://api.adsbdb.com/v0/callsign/<CS>); fallback: adsb.lol's routeset
// (POST https://api.adsb.lol/api/0/routeset, then its twin https://adsb.im/api/0/routeset, which serve the same VRS standing data).
//   200 { callsign, source: 'adsbdb' | 'adsb.lol', fetchedAt, ageMs, cached, stale,
//         route: { callsign, flight, airline, origin: Place, destination: Place } }   Place = { iata, icao, city, name, country }
//   400 bad / missing / repeated callsign (3–8 letters/digits, starting with a letter) or any other parameter;
//   404 neither source knows the callsign (cached 1 h); 503 every source failed and no last-good copy younger than ROUTE_STALE_MS (24 h).
// Same CORS allowlist + front door as /api/adsb (api/_lib/relay.js). Upstream URLs/bodies are built only from the validated callsign.
// In-memory cache 6 h (ROUTE_CACHE_MS) with in-flight coalescing; the CDN keeps it 6 h too.
'use strict';
const R = require('./_lib/relay');

const CS = /^[A-Z][A-Z0-9]{2,7}$/;
const MAX_ENTRIES = 2000;
const env = process.env; // read per request (tests shorten the timings)
const cacheMs = () => Number(env.ROUTE_CACHE_MS || 6 * 3600_000), missMs = () => Number(env.ROUTE_MISS_MS || 3600_000), staleMs = () => Number(env.ROUTE_STALE_MS || 24 * 3600_000);
const CDN = 's-maxage=21600, stale-while-revalidate=3600';
const cache = new Map(), misses = new Map(), inflight = new Map();
const stats = { upstreamRequests: 0, adsbdb: 0, routeset: 0 };

class BadRequest extends Error {}
class NotFound extends Error {}
function parse(sp) {
  for (const k of sp.keys()) if (k !== 'callsign') throw new BadRequest(`unknown parameter: ${String(k).slice(0, 20)}`);
  const v = sp.getAll('callsign');
  if (v.length !== 1) throw new BadRequest(v.length ? 'callsign given more than once' : 'callsign is required (e.g. UAL1, BAW117)');
  const cs = String(v[0]).trim().toUpperCase();
  if (!CS.test(cs)) throw new BadRequest('callsign must be 3–8 letters/digits starting with a letter (e.g. UAL1, BAW117)');
  return cs;
}
const str = (x) => (typeof x === 'string' ? x.slice(0, 80) : '');
const place = (iata, icao, city, name, country) => ({ iata: str(iata), icao: str(icao), city: str(city), name: str(name), country: str(country) });
const okPlace = (p) => !!(p && (p.iata || p.icao));

async function timed(url, opts) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(new Error(`timeout ${R.TIMEOUT_MS} ms`)), R.TIMEOUT_MS);
  stats.upstreamRequests++;
  try { return await fetch(url, { ...opts, signal: ctrl.signal, redirect: 'error' }); } finally { clearTimeout(t); }
}

/** adsbdb: { response: { flightroute: { callsign, callsign_iata, airline{name}, origin{iata_code, icao_code, municipality, name, country_name}, destination } } } */
async function fromAdsbdb(cs) {
  stats.adsbdb++;
  const r = await timed(`${env.ADSBDB_BASE || 'https://api.adsbdb.com'}/v0/callsign/${cs}`, { headers: { Accept: 'application/json', 'User-Agent': R.UA } });
  if (r.status === 404) throw new NotFound('unknown callsign');
  if (!r.ok) throw new Error(`adsbdb HTTP ${r.status}`);
  const fr = (await r.json())?.response?.flightroute;
  if (!fr || typeof fr !== 'object') throw new NotFound('unknown callsign');
  const p = (o) => (o ? place(o.iata_code, o.icao_code, o.municipality, o.name, o.country_name) : null);
  const route = { callsign: cs, flight: str(fr.callsign_iata), airline: str(fr.airline?.name), origin: p(fr.origin), destination: p(fr.destination) };
  if (!okPlace(route.origin) || !okPlace(route.destination)) throw new NotFound('incomplete route');
  return { source: 'adsbdb', route };
}

/** adsb.lol routeset: POST { planes: [{ callsign, lat, lng }] } -> [{ callsign, airline_code, _airports: [{ iata, icao, location, name, countryiso2 }], plausible }] */
async function fromRouteset(cs) {
  const bases = (env.ROUTESET_URLS || 'https://api.adsb.lol/api/0/routeset,https://adsb.im/api/0/routeset').split(',').map((s) => s.trim()).filter(Boolean);
  let lastErr = new NotFound('unknown callsign');
  for (const url of bases) {
    stats.routeset++;
    try {
      const r = await timed(url, { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json', 'User-Agent': R.UA }, body: JSON.stringify({ planes: [{ callsign: cs, lat: 0, lng: 0 }] }) });
      if (!r.ok) throw new Error(`routeset HTTP ${r.status}`);
      const txt = await r.text();
      if (!txt.trim()) throw new Error('routeset empty body'); // api.adsb.lol sometimes answers 201 with nothing: try the twin
      const arr = JSON.parse(txt);
      const hit = Array.isArray(arr) ? arr.find((x) => x && String(x.callsign).toUpperCase() === cs) : null;
      const ap = hit && Array.isArray(hit._airports) ? hit._airports : [];
      if (ap.length < 2) { lastErr = new NotFound('unknown callsign'); continue; }
      const p = (o) => place(o.iata, o.icao, o.location, o.name, o.countryiso2);
      const route = { callsign: cs, flight: '', airline: '', origin: p(ap[0]), destination: p(ap[ap.length - 1]) };
      if (!okPlace(route.origin) || !okPlace(route.destination)) { lastErr = new NotFound('incomplete route'); continue; }
      return { source: 'adsb.lol', route };
    } catch (e) { if (!(e instanceof NotFound)) lastErr = e; }
  }
  throw lastErr;
}

async function upstream(cs) {
  let first;
  try { return { ...(await fromAdsbdb(cs)), fetchedAt: Date.now() }; } catch (e) { first = e; }
  try { return { ...(await fromRouteset(cs)), fetchedAt: Date.now() }; } catch (e) {
    if (first instanceof NotFound && e instanceof NotFound) throw e; // both answered: nobody knows it
    if (first instanceof NotFound) throw e; // adsbdb doesn't know it and the fallback is down: an outage
    throw first;
  }
}

async function getRoute(cs) {
  const now = Date.now(), c = cache.get(cs);
  if (c && now - c.at < cacheMs()) return { ...c.body, cached: true, stale: false, ageMs: now - c.at };
  const m = misses.get(cs);
  if (m && now - m < missMs()) throw new NotFound('unknown callsign (cached)');
  let p = inflight.get(cs);
  if (!p) {
    p = upstream(cs).then((body) => {
      cache.delete(cs); cache.set(cs, { body, at: Date.now() }); misses.delete(cs);
      while (cache.size > MAX_ENTRIES) cache.delete(cache.keys().next().value);
      return body;
    }, (e) => {
      if (e instanceof NotFound) { misses.set(cs, Date.now()); while (misses.size > MAX_ENTRIES) misses.delete(misses.keys().next().value); }
      throw e;
    }).finally(() => inflight.delete(cs));
    inflight.set(cs, p);
  }
  try {
    const body = await p;
    return { ...body, cached: false, stale: false, ageMs: Date.now() - cache.get(cs).at };
  } catch (e) {
    const s = cache.get(cs);
    if (!(e instanceof NotFound) && s && Date.now() - s.at < staleMs()) return { ...s.body, cached: true, stale: true, ageMs: Date.now() - s.at, error: String(e && e.message || e).slice(0, 80) };
    throw e;
  }
}

module.exports = async function handler(req, res) {
  if (R.preflight(req, res)) return;
  let cs;
  try { cs = parse(R.queryOf(req)); } catch (e) { return R.send(res, 400, { error: e instanceof BadRequest ? e.message : 'bad request' }, 'no-store'); }
  try {
    const body = await getRoute(cs);
    res.setHeader('X-Relay-Source', body.source);
    res.setHeader('X-Relay-Cache', body.cached ? 'HIT' : 'MISS');
    R.send(res, 200, { callsign: cs, ...body }, body.stale ? 'no-store' : CDN);
  } catch (e) {
    if (e instanceof NotFound) return R.send(res, 404, { error: `no known route for ${cs}` }, 's-maxage=3600');
    R.send(res, 503, { error: 'route sources unavailable', detail: String(e && e.message || e).slice(0, 120) }, 'no-store');
  }
};
module.exports.parse = parse;
module.exports.stats = stats;
module.exports._reset = () => { cache.clear(); misses.clear(); inflight.clear(); Object.assign(stats, { upstreamRequests: 0, adsbdb: 0, routeset: 0 }); };
