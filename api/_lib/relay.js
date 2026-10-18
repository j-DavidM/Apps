// Shared ADS-B relay logic for the Vercel functions in /api (files under api/_lib are not routes).
// Ported from lax-flights/server.mjs: adsb.fi -> adsb.lol -> airplanes.live -> OpenSky, 6 s timeout per source,
// 8 s in-memory cache with in-flight coalescing, stale snapshot served for up to 60 s, then 503.
// CommonJS + Node >= 18 global fetch, no dependencies. No API keys. Never proxies a caller-supplied URL:
// every upstream URL is built here from numbers that were parsed, validated and clamped first.
'use strict';

const env = process.env;
const CACHE_MS = Number(env.RELAY_CACHE_MS || 8000);
const TIMEOUT_MS = Number(env.RELAY_TIMEOUT_MS || 6000);
const STALE_MS = Number(env.RELAY_STALE_MS || 60000);
const MAX_ENTRIES = 64; // bounded cache (one entry per quantized area)
const UA = 'j-davidm-apps-adsb-relay/1.0 (+https://j-davidm.github.io/Apps/; hobby ADS-B visualization; non-commercial)';
const NM_KM = 1.852, KM_PER_DEG = 111.32;
const CDN_CACHE = 's-maxage=8, stale-while-revalidate=30';

// ---------------------------------------------------------------- CORS
// Always allowed: David's GitHub Pages site, local testing (not in production, see below), and this deployment's own origins (from Vercel's system env
// vars VERCEL_URL / VERCEL_BRANCH_URL / VERCEL_PROJECT_PRODUCTION_URL, so same-origin /lax-ramp/ works with no setup).
// Extra origins: RELAY_ALLOWED_ORIGINS = comma-separated exact origins, plus at most ONE wildcard pattern whose single `*`
// stands for one DNS-label fragment, e.g. https://apps-*-j-davidms-projects.vercel.app. Every other origin, including
// any other *.vercel.app site, is refused with 403. Env is read per request (cheap) so tests and redeploys see changes.
// Local testing (http://localhost / 127.0.0.1, any port) is allowed only OUTSIDE production: on the production
// deployment (VERCEL_ENV === 'production') a localhost origin gets 403 like any other site (wx-r2). Previews and
// `vercel dev` / local harnesses (VERCEL_ENV preview, development or unset) still accept it.
const FIXED_ORIGIN_RES = [
  /^https:\/\/j-davidm\.github\.io$/,
];
const LOCAL_ORIGIN_RE = /^http:\/\/(?:localhost|127\.0\.0\.1)(?::\d{1,5})?$/;
const isProduction = (e = process.env) => String(e.VERCEL_ENV || '').toLowerCase() === 'production';
const ORIGIN_SHAPE = /^https?:\/\/[a-z0-9.-]+(?::\d{1,5})?$/;
const escapeRe = (x) => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** a bare host ("apps-abc.vercel.app") or URL from a Vercel env var → https origin, or null */
function hostToOrigin(v) {
  if (typeof v !== 'string' || !v.trim()) return null;
  const h = v.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/\/.*$/, '');
  const o = 'https://' + h;
  return ORIGIN_SHAPE.test(o) ? o : null;
}

/** { exact: Set<origin>, wildcard: RegExp|null } from the current env */
function originPolicy(e = process.env) {
  const exact = new Set();
  for (const k of ['VERCEL_URL', 'VERCEL_BRANCH_URL', 'VERCEL_PROJECT_PRODUCTION_URL']) { const o = hostToOrigin(e[k]); if (o) exact.add(o); }
  let wildcard = null;
  for (const raw of String(e.RELAY_ALLOWED_ORIGINS || '').split(',')) {
    const v = raw.trim().toLowerCase().replace(/\/+$/, '');
    if (!v) continue;
    const stars = (v.match(/\*/g) || []).length;
    if (stars === 0) { if (ORIGIN_SHAPE.test(v)) exact.add(v); continue; }
    // wildcard: only one pattern, one `*`, https, inside the host, never spanning a dot, never the whole label set
    if (wildcard || stars !== 1 || !/^https:\/\/[a-z0-9.*-]+$/.test(v)) continue;
    const host = v.slice('https://'.length);
    const label = host.split('.').find((l) => l.includes('*'));
    if (!label || label === '*' || host.split('.').length < 3) continue; // "*.vercel.app" or bare "*" would reopen everything
    wildcard = new RegExp('^' + escapeRe(v).replace('\\*', '[a-z0-9-]{1,63}') + '$');
  }
  return { exact, wildcard };
}

function allowedOrigin(origin, e = process.env) {
  if (typeof origin !== 'string' || origin.length > 120) return null;
  const o = origin.toLowerCase();
  if (!ORIGIN_SHAPE.test(o)) return null;
  if (FIXED_ORIGIN_RES.some((re) => re.test(o))) return origin;
  if (LOCAL_ORIGIN_RE.test(o) && !isProduction(e)) return origin;
  const { exact, wildcard } = originPolicy(e);
  if (exact.has(o)) return origin;
  if (wildcard && wildcard.test(o)) return origin;
  return null;
}

/** sets CORS headers; returns false when the request carries a disallowed Origin */
function cors(req, res) {
  const origin = req.headers.origin;
  res.setHeader('Vary', 'Origin'); // the CDN keys cached copies by Origin (Vercel honours Vary)
  if (!origin) return true; // same-origin / curl / server-to-server: no CORS headers needed
  const ok = allowedOrigin(origin);
  if (!ok) return false;
  res.setHeader('Access-Control-Allow-Origin', ok);
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Accept, Content-Type');
  res.setHeader('Access-Control-Expose-Headers', 'X-Relay-Source, X-Relay-Cache');
  res.setHeader('Access-Control-Max-Age', '86400');
  return true;
}

function send(res, code, obj, cacheControl) {
  res.statusCode = code;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', cacheControl || 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.end(JSON.stringify(obj));
}

/** common front door: method + CORS + OPTIONS. Returns true when the request was fully answered. */
function preflight(req, res) {
  const okOrigin = cors(req, res);
  if (!okOrigin) { send(res, 403, { error: 'origin not allowed' }); return true; }
  if (req.method === 'OPTIONS') { res.statusCode = 204; res.setHeader('Cache-Control', 'no-store'); res.end(); return true; }
  if (req.method !== 'GET' && req.method !== 'HEAD') { res.setHeader('Allow', 'GET, OPTIONS'); send(res, 405, { error: 'method not allowed' }); return true; }
  return false;
}

function queryOf(req) {
  const u = new URL(req.url || '/', 'http://relay.local');
  return u.searchParams;
}

// ---------------------------------------------------------------- shapes
const KEEP = ['hex', 'flight', 'r', 't', 'lat', 'lon', 'alt_baro', 'alt_geom', 'gs', 'track', 'true_heading', 'baro_rate', 'geom_rate', 'category', 'squawk', 'seen_pos', 'seen'];
const slim = (a) => Object.fromEntries(KEEP.filter((k) => a[k] !== undefined).map((k) => [k, a[k]]));

/** ADS-B emitter category ("A3") -> OpenSky extended category number (0 none, 1 no info, A1..A7 = 2..8, B1..B7 = 9..15, C1..C5 = 16..20) */
function osCategory(c) {
  if (typeof c !== 'string' || !/^[A-C][0-7]$/.test(c)) return 0;
  const n = Number(c[1]);
  if (c[0] === 'A') return n === 0 ? 1 : n + 1;         // A1 light = 2 ... A6 high perf = 7, A7 rotorcraft = 8
  if (c[0] === 'B') return n === 0 ? 1 : n + 8;         // B1 glider = 9 ... B7 space = 15
  return n === 0 ? 1 : n + 15;                          // C1 emergency vehicle = 16 ... C5 line obstacle = 20
}
function adsbCategory(n) {
  if (!Number.isInteger(n) || n < 2) return undefined;
  if (n <= 8) return 'A' + (n - 1);
  if (n <= 15) return 'B' + (n - 8);
  if (n <= 20) return 'C' + (n - 15);
  return undefined;
}

/** adsb-v2 object -> OpenSky state vector (extended, 18 fields), so OpenSky-parsing clients work unchanged */
function toStateVector(a, nowS) {
  const ground = a.alt_baro === 'ground';
  const baroFt = typeof a.alt_baro === 'number' ? a.alt_baro : null;
  const geomFt = typeof a.alt_geom === 'number' ? a.alt_geom : null;
  const seen = Number.isFinite(a.seen) ? a.seen : Number.isFinite(a.seen_pos) ? a.seen_pos : 0;
  const seenPos = Number.isFinite(a.seen_pos) ? a.seen_pos : seen;
  const rate = Number.isFinite(a.baro_rate) ? a.baro_rate : Number.isFinite(a.geom_rate) ? a.geom_rate : null;
  const flight = typeof a.flight === 'string' ? a.flight.trim() : '';
  return [
    String(a.hex || '').replace(/^~/, '').toLowerCase(),          // 0 icao24
    flight ? flight.padEnd(8, ' ') : null,                         // 1 callsign
    typeof a.country === 'string' ? a.country : '',                // 2 origin_country (only known when OpenSky was the source)
    Math.floor(nowS - seenPos),                                    // 3 time_position
    Math.floor(nowS - seen),                                       // 4 last_contact
    a.lon, a.lat,                                                  // 5 lon, 6 lat
    ground ? null : baroFt === null ? null : +(baroFt / 3.28084).toFixed(1), // 7 baro_altitude (m)
    ground,                                                        // 8 on_ground
    Number.isFinite(a.gs) ? +(a.gs / 1.943844).toFixed(2) : null, // 9 velocity (m/s)
    Number.isFinite(a.track) ? a.track : Number.isFinite(a.true_heading) ? a.true_heading : null, // 10 true_track
    rate === null ? null : +(rate / 196.8504).toFixed(2),          // 11 vertical_rate (m/s)
    null,                                                          // 12 sensors
    geomFt === null ? null : +(geomFt / 3.28084).toFixed(1),       // 13 geo_altitude (m)
    typeof a.squawk === 'string' ? a.squawk : null,                // 14 squawk
    false,                                                         // 15 spi
    0,                                                             // 16 position_source (ADS-B)
    osCategory(a.category),                                        // 17 category
  ];
}

/** OpenSky state vector -> adsb-v2-style object (same mapping server.mjs used, plus category / squawk / seen) */
function fromStateVector(s, nowS) {
  const o = {
    hex: String(s[0] ?? '').toLowerCase(), flight: s[1] ?? '', lon: s[5], lat: s[6],
    alt_baro: s[8] ? 'ground' : Number.isFinite(s[7]) ? Math.round(s[7] * 3.28084) : 0,
    gs: Number.isFinite(s[9]) ? +(s[9] * 1.94384).toFixed(1) : 0, track: s[10] ?? 0,
  };
  if (Number.isFinite(s[11])) o.baro_rate = Math.round(s[11] * 196.85);
  if (Number.isFinite(s[13])) o.alt_geom = Math.round(s[13] * 3.28084);
  if (typeof s[14] === 'string') o.squawk = s[14];
  if (typeof s[2] === 'string' && s[2]) o.country = s[2];
  const cat = adsbCategory(s[17]); if (cat) o.category = cat;
  if (Number.isFinite(s[4])) o.seen = Math.max(0, Math.round(nowS - s[4]));
  if (Number.isFinite(s[3])) o.seen_pos = Math.max(0, Math.round(nowS - s[3]));
  return o;
}

// ---------------------------------------------------------------- area
/** area = { lat, lon, nm (radius for the adsb-v2 point query), box: {lamin,lamax,lomin,lomax} (filter + OpenSky query) } */
function areaFromCenter(lat, lon, nm) {
  const km = nm * NM_KM, dLat = km / KM_PER_DEG, dLon = km / (KM_PER_DEG * Math.max(0.05, Math.cos(lat * Math.PI / 180)));
  return { lat, lon, nm, box: { lamin: lat - dLat, lamax: lat + dLat, lomin: lon - dLon, lomax: lon + dLon } };
}
function inBox(box) {
  return (a) => Number.isFinite(a.lat) && Number.isFinite(a.lon) && a.lat >= box.lamin && a.lat <= box.lamax && a.lon >= box.lomin && a.lon <= box.lomax;
}
const f4 = (x) => +x.toFixed(4);

/** upstreams for an area, in order; base URLs overridable by env (tests simulate dead / hanging sources) */
function upstreams(area) {
  const { lat, lon, box } = area;
  const nm = Math.max(1, Math.ceil(area.nm));
  const keep = inBox(box);
  const adsbV2 = (name, base, p) => ({ name, url: base + p, parse: (j) => (j.ac ?? j.aircraft ?? []).map(slim).filter(keep) });
  const la = f4(lat), lo = f4(lon);
  return [
    adsbV2('adsb.fi', env.ADSBFI_BASE || 'https://opendata.adsb.fi', `/api/v2/lat/${la}/lon/${lo}/dist/${nm}`),
    adsbV2('adsb.lol', env.ADSBLOL_BASE || 'https://api.adsb.lol', `/v2/lat/${la}/lon/${lo}/dist/${nm}`),
    adsbV2('airplanes.live', env.AIRPLANES_BASE || 'https://api.airplanes.live', `/v2/point/${la}/${lo}/${Math.min(nm, 250)}`),
    {
      name: 'OpenSky Network',
      url: (env.OPENSKY_BASE || 'https://opensky-network.org') +
        `/api/states/all?lamin=${f4(box.lamin)}&lomin=${f4(box.lomin)}&lamax=${f4(box.lamax)}&lomax=${f4(box.lomax)}&extended=1`,
      parse: (j) => { const now = Number(j.time) || Date.now() / 1000; return (j.states ?? []).filter(Array.isArray).map((s) => fromStateVector(s, now)).filter(keep); },
    },
  ];
}

async function getJson(url) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(new Error(`timeout ${TIMEOUT_MS} ms`)), TIMEOUT_MS);
  try {
    const r = await fetch(url, { signal: ctrl.signal, redirect: 'error', headers: { Accept: 'application/json', 'User-Agent': UA } });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return await r.json();
  } finally { clearTimeout(t); }
}

const stats = { upstreamRequests: 0, served: 0 };
const cache = new Map();    // key -> { body, at }
const inflight = new Map(); // key -> Promise<body>

async function refresh(area, allowEmpty) {
  const tried = [];
  let firstEmpty = null; // a source that answered properly but had no aircraft in the area
  for (const u of upstreams(area)) {
    const t0 = Date.now();
    try {
      stats.upstreamRequests++;
      const ac = u.parse(await getJson(u.url));
      if (!ac.length) { firstEmpty = firstEmpty || u.name; throw new Error('empty'); }
      tried.push({ source: u.name, ok: true, ms: Date.now() - t0 });
      return { source: u.name, fetchedAt: Date.now(), count: ac.length, ac, tried };
    } catch (e) {
      tried.push({ source: u.name, ok: false, ms: Date.now() - t0, error: String((e && e.cause && e.cause.code) || (e && e.message) || e).slice(0, 120) });
    }
  }
  // general endpoint: an empty sky is a valid answer once every source agreed or failed (never for /api/lax)
  if (allowEmpty && firstEmpty) return { source: firstEmpty, fetchedAt: Date.now(), count: 0, ac: [], tried };
  const err = new Error('all upstreams failed');
  err.tried = tried;
  throw err;
}

/** cached + coalesced fetch for an area; key must be derived from the clamped, quantized area only */
async function getArea(key, area, allowEmpty = false) {
  const now = Date.now();
  const c = cache.get(key);
  if (c && now - c.at < CACHE_MS) return { ...c.body, cached: true, stale: false, ageMs: now - c.at };
  let p = inflight.get(key);
  if (!p) {
    p = refresh(area, allowEmpty).then((body) => {
      cache.delete(key); cache.set(key, { body, at: Date.now() });
      while (cache.size > MAX_ENTRIES) cache.delete(cache.keys().next().value); // oldest first
      return body;
    }).finally(() => inflight.delete(key));
    inflight.set(key, p);
  }
  try {
    const body = await p;
    return { ...body, cached: false, stale: false, ageMs: Date.now() - cache.get(key).at };
  } catch (e) {
    const s = cache.get(key);
    if (s && now - s.at < STALE_MS) return { ...s.body, cached: true, stale: true, ageMs: now - s.at, tried: e.tried };
    throw e;
  }
}

function _reset() { cache.clear(); inflight.clear(); stats.upstreamRequests = 0; stats.served = 0; }

module.exports = {
  CACHE_MS, TIMEOUT_MS, STALE_MS, UA, CDN_CACHE, NM_KM, KM_PER_DEG,
  allowedOrigin, originPolicy, isProduction, cors, preflight, send, queryOf,
  areaFromCenter, upstreams, getArea, toStateVector, fromStateVector, osCategory, stats, _reset,
};
