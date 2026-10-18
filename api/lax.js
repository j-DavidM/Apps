// GET /api/lax — LAX-area aircraft, same response shape as lax-flights/server.mjs:
//   { source, fetchedAt, ageMs, cached, stale, count, ac: [adsb-v2-style objects], tried: [...] }
// No query parameters (any are ignored). 503 { error, tried } when every source failed and no snapshot < 60 s exists.
'use strict';
const R = require('./_lib/relay');

const LAT = 33.9425, LON = -118.4081;
// same box the app keeps (lax-flights src/geo.ts BBOX); upstream point query radius 80 nm as in server.mjs
const AREA = { lat: LAT, lon: LON, nm: 80, box: { lamin: 33.2, lamax: 34.5, lomin: -119.0, lomax: -117.5 } };

module.exports = async function handler(req, res) {
  if (R.preflight(req, res)) return;
  try {
    const body = await R.getArea('lax', AREA);
    R.stats.served++;
    res.setHeader('X-Relay-Source', body.source);
    res.setHeader('X-Relay-Cache', body.cached ? 'HIT' : 'MISS');
    R.send(res, 200, body, R.CDN_CACHE);
  } catch (e) {
    R.send(res, 503, { error: 'all live ADS-B sources failed', tried: (e && e.tried) || [] }, 'no-store');
  }
};
