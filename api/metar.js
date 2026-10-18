// GET /api/metar?icao=KJFK — the latest METAR for one airport, from aviationweather.gov's data API
// (https://aviationweather.gov/api/data/metar?ids=<ICAO>&format=json, which sends no CORS headers, so browsers can't call it).
//   200 { icao, source: 'aviationweather.gov', fetchedAt, ageMs, cached, stale, metar: { icaoId, obsTime, rawOb, wdir, wspd, wgst,
//         visib, wxString, cover, clouds, temp, dewp, altim, fltCat, name, lat, lon, elev } }
//   400 bad / missing / repeated icao (exactly 4 letters) or any other parameter; 404 the station has no current METAR;
//   503 { error } upstream failed and no last-good copy younger than METAR_STALE_MS (default 3 h).
// Same CORS allowlist + front door as /api/adsb (api/_lib/relay.js). The upstream URL is built only from the validated ICAO.
// In-memory cache 5 min (METAR_CACHE_MS) with in-flight coalescing; the CDN keeps it 5 min too (s-maxage=300).
'use strict';
const R = require('./_lib/relay');

const ICAO = /^[A-Z]{4}$/;
const KEEP = ['icaoId', 'obsTime', 'reportTime', 'rawOb', 'metarType', 'wdir', 'wspd', 'wgst', 'visib', 'wxString', 'cover', 'clouds', 'temp', 'dewp', 'altim', 'fltCat', 'name', 'lat', 'lon', 'elev'];
const MAX_ENTRIES = 256;
const env = process.env; // read per request (tests shorten the timings)
const cacheMs = () => Number(env.METAR_CACHE_MS || 300_000), staleMs = () => Number(env.METAR_STALE_MS || 3 * 3600_000);
const CDN = 's-maxage=300, stale-while-revalidate=600';
const cache = new Map(), inflight = new Map();
const stats = { upstreamRequests: 0 };

class BadRequest extends Error {}
class NotFound extends Error {}
function parse(sp) {
  for (const k of sp.keys()) if (k !== 'icao') throw new BadRequest(`unknown parameter: ${String(k).slice(0, 20)}`);
  const v = sp.getAll('icao');
  if (v.length !== 1) throw new BadRequest(v.length ? 'icao given more than once' : 'icao is required (4 letters, e.g. KJFK)');
  const icao = String(v[0]).trim().toUpperCase();
  if (!ICAO.test(icao)) throw new BadRequest('icao must be exactly 4 letters (e.g. KJFK, EGLL)');
  return icao;
}
const slim = (m) => Object.fromEntries(KEEP.filter((k) => m[k] !== undefined && m[k] !== null).map((k) => [k, m[k]]));

async function upstream(icao) {
  const url = `${env.AWC_BASE || 'https://aviationweather.gov'}/api/data/metar?ids=${icao}&format=json`;
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(new Error(`timeout ${R.TIMEOUT_MS} ms`)), R.TIMEOUT_MS);
  stats.upstreamRequests++;
  try {
    const r = await fetch(url, { signal: ctrl.signal, redirect: 'error', headers: { Accept: 'application/json', 'User-Agent': R.UA } });
    if (r.status === 204) throw new NotFound('no METAR'); // AWC answers 204 for a station with nothing current
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const txt = await r.text();
    const arr = txt.trim() ? JSON.parse(txt) : [];
    const m = Array.isArray(arr) ? arr.find((x) => x && String(x.icaoId).toUpperCase() === icao) : null;
    if (!m) throw new NotFound('no METAR');
    if (typeof m.rawOb !== 'string') throw new Error('malformed METAR');
    return { icao, source: 'aviationweather.gov', fetchedAt: Date.now(), metar: slim(m) };
  } finally { clearTimeout(t); }
}

async function getMetar(icao) {
  const now = Date.now(), c = cache.get(icao);
  if (c && now - c.at < cacheMs()) return { ...c.body, cached: true, stale: false, ageMs: now - c.at };
  let p = inflight.get(icao);
  if (!p) {
    p = upstream(icao).then((body) => {
      cache.delete(icao); cache.set(icao, { body, at: Date.now() });
      while (cache.size > MAX_ENTRIES) cache.delete(cache.keys().next().value);
      return body;
    }).finally(() => inflight.delete(icao));
    inflight.set(icao, p);
  }
  try {
    const body = await p;
    return { ...body, cached: false, stale: false, ageMs: Date.now() - cache.get(icao).at };
  } catch (e) {
    const s = cache.get(icao); // the last good METAR, while it is not too old
    if (s && Date.now() - s.at < staleMs()) return { ...s.body, cached: true, stale: true, ageMs: Date.now() - s.at, error: String(e && e.message || e).slice(0, 80) };
    throw e;
  }
}

module.exports = async function handler(req, res) {
  if (R.preflight(req, res)) return;
  let icao;
  try { icao = parse(R.queryOf(req)); } catch (e) { return R.send(res, 400, { error: e instanceof BadRequest ? e.message : 'bad request' }, 'no-store'); }
  try {
    const body = await getMetar(icao);
    res.setHeader('X-Relay-Source', body.source);
    res.setHeader('X-Relay-Cache', body.cached ? 'HIT' : 'MISS');
    R.send(res, 200, body, body.stale ? 'no-store' : CDN);
  } catch (e) {
    if (e instanceof NotFound) return R.send(res, 404, { error: `no current METAR for ${icao}` }, 's-maxage=300');
    R.send(res, 503, { error: 'aviationweather.gov unavailable', detail: String(e && e.message || e).slice(0, 120) }, 'no-store');
  }
};
module.exports.parse = parse;
module.exports.stats = stats;
module.exports._reset = () => { cache.clear(); inflight.clear(); stats.upstreamRequests = 0; };
