// GET /api/adsb — live aircraft around any point (general endpoint for Lofi Airports and other apps).
//
// Area, one of:
//   ?lat=<-85..85>&lon=<-180..180>[&radius=<nm, 1..60, default 40>]      circle (radius clamped to 1..60 nm)
//   ?lamin=&lomin=&lamax=&lomax=                                            OpenSky-style box (each half-side clamped to <= 60 nm)
// Output:
//   &format=adsb    (default) { source, fetchedAt, ageMs, cached, stale, count, query, ac: [adsb-v2-style objects], tried }
//   &format=opensky           { time, states: [OpenSky extended state vectors, 18 fields], source, fetchedAt, ageMs, cached, stale, count, query, tried }
//   &extended=1     accepted and ignored (states are always extended), so OpenSky query strings work unchanged.
// Any other parameter, a malformed number, an out-of-range lat/lon or a mixed circle + box query -> 400.
// An area with no aircraft returns 200 with count 0 (only after every source was asked: empty answers fall through).
// 503 { error, tried } when every source failed and no snapshot < 60 s exists for that (quantized) area.
'use strict';
const R = require('./_lib/relay');

const MAX_NM = 60, MIN_NM = 1, DEFAULT_NM = 40;
const ALLOWED = new Set(['lat', 'lon', 'radius', 'lamin', 'lomin', 'lamax', 'lomax', 'format', 'extended']);
const NUM = /^-?\d{1,3}(?:\.\d{1,8})?$/;

class BadRequest extends Error {}
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const q2 = (x) => Math.round(x * 100) / 100; // ~1.1 km grid: keeps the cache key space small

function num(sp, name, lo, hi, required) {
  const vs = sp.getAll(name);
  if (vs.length > 1) throw new BadRequest(`${name} given more than once`);
  if (!vs.length || vs[0] === '') { if (required) throw new BadRequest(`${name} is required`); return null; }
  if (!NUM.test(vs[0])) throw new BadRequest(`${name} must be a decimal number`);
  const v = Number(vs[0]);
  if (!Number.isFinite(v) || v < lo || v > hi) throw new BadRequest(`${name} must be between ${lo} and ${hi}`);
  return v;
}

/** parse + validate + clamp; returns { key, area, format, query } */
function parse(sp) {
  for (const k of sp.keys()) if (!ALLOWED.has(k)) throw new BadRequest(`unknown parameter: ${String(k).slice(0, 20)}`);
  const fmt = sp.get('format') || 'adsb';
  if (fmt !== 'adsb' && fmt !== 'opensky') throw new BadRequest('format must be adsb or opensky');
  const ext = sp.get('extended');
  if (ext !== null && ext !== '0' && ext !== '1') throw new BadRequest('extended must be 0 or 1');
  const hasBox = ['lamin', 'lomin', 'lamax', 'lomax'].some((k) => sp.has(k));
  const hasCircle = ['lat', 'lon', 'radius'].some((k) => sp.has(k));
  if (hasBox && hasCircle) throw new BadRequest('use either lat/lon/radius or lamin/lomin/lamax/lomax, not both');
  if (!hasBox && !hasCircle) throw new BadRequest('lat and lon (or lamin/lomin/lamax/lomax) are required');

  let area, query;
  if (hasCircle) {
    const lat = q2(num(sp, 'lat', -85, 85, true)), lon = q2(num(sp, 'lon', -180, 180, true));
    const r = num(sp, 'radius', 0, 10000, false);
    const nm = Math.round(clamp(r === null ? DEFAULT_NM : r, MIN_NM, MAX_NM));
    area = R.areaFromCenter(lat, lon, nm);
    query = { lat, lon, radiusNm: nm, clamped: r !== null && Math.round(r) !== nm };
  } else {
    const lamin = num(sp, 'lamin', -85, 85, true), lamax = num(sp, 'lamax', -85, 85, true);
    const lomin = num(sp, 'lomin', -180, 180, true), lomax = num(sp, 'lomax', -180, 180, true);
    if (!(lamin < lamax)) throw new BadRequest('lamin must be < lamax');
    if (!(lomin < lomax)) throw new BadRequest('lomin must be < lomax (boxes across the antimeridian are not supported)');
    const lat = q2((lamin + lamax) / 2), lon = q2((lomin + lomax) / 2);
    const kmLon = R.KM_PER_DEG * Math.max(0.05, Math.cos(lat * Math.PI / 180));
    const maxDLat = MAX_NM * R.NM_KM / R.KM_PER_DEG, maxDLon = MAX_NM * R.NM_KM / kmLon;
    const dLat = Math.max(0.01, Math.min(maxDLat, (lamax - lamin) / 2)), dLon = Math.max(0.01, Math.min(maxDLon, (lomax - lomin) / 2));
    const clamped = dLat < (lamax - lamin) / 2 - 1e-9 || dLon < (lomax - lomin) / 2 - 1e-9;
    // quantize outward to the 0.01 deg grid
    const box = { lamin: Math.floor((lat - dLat) * 100) / 100, lamax: Math.ceil((lat + dLat) * 100) / 100, lomin: Math.floor((lon - dLon) * 100) / 100, lomax: Math.ceil((lon + dLon) * 100) / 100 };
    const halfLatNm = (box.lamax - box.lamin) / 2 * R.KM_PER_DEG / R.NM_KM, halfLonNm = (box.lomax - box.lomin) / 2 * kmLon / R.NM_KM;
    const nm = Math.ceil(Math.hypot(halfLatNm, halfLonNm)); // point query reaching the box corners (<= ~86 nm)
    area = { lat, lon, nm, box };
    query = { box, radiusNm: nm, clamped };
  }
  const b = area.box;
  const key = `${area.lat},${area.lon},${area.nm},${b.lamin.toFixed(2)},${b.lamax.toFixed(2)},${b.lomin.toFixed(2)},${b.lomax.toFixed(2)}`;
  if (query.box) query.box = { lamin: +b.lamin.toFixed(2), lomin: +b.lomin.toFixed(2), lamax: +b.lamax.toFixed(2), lomax: +b.lomax.toFixed(2) };
  return { key, area, format: fmt, query };
}

module.exports = async function handler(req, res) {
  if (R.preflight(req, res)) return;
  let p;
  try { p = parse(R.queryOf(req)); } catch (e) {
    if (e instanceof BadRequest) return R.send(res, 400, { error: e.message }, 'no-store');
    return R.send(res, 400, { error: 'bad request' }, 'no-store');
  }
  try {
    const body = await R.getArea(p.key, p.area, true);
    R.stats.served++;
    res.setHeader('X-Relay-Source', body.source);
    res.setHeader('X-Relay-Cache', body.cached ? 'HIT' : 'MISS');
    const meta = { source: body.source, fetchedAt: body.fetchedAt, ageMs: body.ageMs, cached: body.cached, stale: body.stale, count: body.count, query: p.query, tried: body.tried };
    if (p.format === 'opensky') {
      const t = body.fetchedAt / 1000;
      R.send(res, 200, { time: Math.floor(t), states: body.ac.map((a) => R.toStateVector(a, t)), ...meta }, R.CDN_CACHE);
    } else {
      R.send(res, 200, { ...meta, ac: body.ac }, R.CDN_CACHE);
    }
  } catch (e) {
    R.send(res, 503, { error: 'all live ADS-B sources failed', tried: (e && e.tried) || [] }, 'no-store');
  }
};
module.exports.parse = parse;
