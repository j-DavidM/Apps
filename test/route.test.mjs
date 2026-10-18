// /api/route tests: real adsbdb + adsb.lol-routeset upstreams through the in-process harness, then mocked upstreams for
// validation, the fallback chain, caching, negative caching, last-good fallback, 404 and 503.
//   node test/route.test.mjs  → PASS/FAIL lines, test/results-route.json
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { createServer } from './harness.mjs';
const require = createRequire(import.meta.url);
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const M = require('../api/route.js');

const results = [];
const ok = (name, pass, info = '') => { results.push({ name, pass: !!pass, info: String(info).slice(0, 300) }); console.log(`${pass ? 'PASS' : 'FAIL'}  ${name}${info ? '  — ' + String(info).slice(0, 200) : ''}`); };
const listen = (s) => new Promise((r) => s.listen(0, '127.0.0.1', () => r(s.address().port)));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const srv = createServer(); const B = `http://127.0.0.1:${await listen(srv)}`;
async function get(p, { origin, method = 'GET' } = {}) {
  const h = {}; if (origin) h.Origin = origin;
  const r = await fetch(B + p, { method, headers: h });
  let j = null; const t = await r.text(); try { j = JSON.parse(t); } catch { /* empty */ }
  return { s: r.status, h: r.headers, j };
}
const PLACE = ['iata', 'icao', 'city', 'name', 'country'];

// ---------- 1. real upstreams
for (const k of ['ADSBDB_BASE', 'ROUTESET_URLS', 'ROUTE_CACHE_MS', 'ROUTE_MISS_MS', 'ROUTE_STALE_MS']) delete process.env[k];
M._reset();
let r = await get('/api/route?callsign=UAL1', { origin: 'https://j-davidm.github.io' });
ok('real: UAL1 → 200 SFO San Francisco → SIN Singapore from adsbdb', r.s === 200 && r.j.source === 'adsbdb' && r.j.route?.origin?.iata === 'SFO' && r.j.route.origin.city === 'San Francisco' && r.j.route.destination?.iata === 'SIN', `${r.s} ${JSON.stringify(r.j?.route)}`);
ok('real: places carry exactly iata/icao/city/name/country', r.j && [r.j.route.origin, r.j.route.destination].every((p) => Object.keys(p).sort().join() === [...PLACE].sort().join()));
ok('real: airline + IATA flight number', r.j?.route?.airline === 'United Airlines' && r.j.route.flight === 'UA1', `${r.j?.route?.airline} ${r.j?.route?.flight}`);
ok('real: CORS echo for github.io + Vary: Origin', r.h.get('access-control-allow-origin') === 'https://j-davidm.github.io' && /Origin/.test(r.h.get('vary') || ''));
ok('real: Cache-Control s-maxage=21600 (6 h CDN)', /s-maxage=21600/.test(r.h.get('cache-control') || ''), r.h.get('cache-control'));
ok('real: lower-case callsign → cache HIT, no 2nd upstream call', r.h.get('x-relay-cache') === 'MISS' && await (async () => { const n = M.stats.upstreamRequests; const r2 = await get('/api/route?callsign=ual1'); return r2.s === 200 && r2.j.cached && r2.h.get('x-relay-cache') === 'HIT' && M.stats.upstreamRequests === n; })());
const intl = await Promise.all(['BAW117', 'AFR6', 'DLH400'].map((c) => get(`/api/route?callsign=${c}`)));
ok('real: international callsigns resolve (BAW117, AFR6, DLH400)', intl.filter((x) => x.s === 200 && x.j.route.origin.iata && x.j.route.destination.iata).length >= 2, intl.map((x) => `${x.s}:${x.j?.route?.origin?.iata}-${x.j?.route?.destination?.iata}`).join(' '));
r = await get('/api/route?callsign=ZZZ9999');
ok('real: unknown callsign ZZZ9999 → 404 (both sources asked)', r.s === 404 && M.stats.routeset >= 1, `${r.s} routeset=${M.stats.routeset}`);
let n0 = M.stats.upstreamRequests; r = await get('/api/route?callsign=ZZZ9999');
ok('real: the miss is cached (no upstream call the 2nd time)', r.s === 404 && M.stats.upstreamRequests === n0);
n0 = M.stats.upstreamRequests;
const burst = await Promise.all(Array.from({ length: 10 }, () => get('/api/route?callsign=AAL100')));
ok('real: 10 parallel AAL100 → 1 adsbdb call (coalesced)', burst.every((x) => x.s === burst[0].s) && M.stats.upstreamRequests - n0 === 1, `status ${burst[0].s} upstream=${M.stats.upstreamRequests - n0}`);

// ---------- 2. validation + CORS (no upstream)
for (const [q, why] of [['', 'missing'], ['?callsign=', 'empty'], ['?callsign=UA', '2 chars'], ['?callsign=UAL123456', '9 chars'], ['?callsign=1UAL', 'leading digit'], ['?callsign=UA%201', 'space'], ['?callsign=UAL-1', 'dash'], ['?callsign=UAL1&callsign=BAW1', 'repeated'], ['?callsign=UAL1&url=https://evil.example', 'extra param'], ['?cs=UAL1', 'other name'], ['?callsign=../x', 'path']]) {
  r = await get('/api/route' + q); ok(`400 ${why} (${q || 'no query'})`, r.s === 400 && r.j?.error && r.h.get('cache-control') === 'no-store', `${r.s} ${r.j?.error}`);
}
for (const o of ['https://evil.example', 'https://apps-abc.vercel.app', 'null']) { r = await get('/api/route?callsign=UAL1', { origin: o }); ok(`cors deny ${o}`, r.s === 403 && !r.h.get('access-control-allow-origin')); }
for (const o of ['http://localhost:4212', 'http://127.0.0.1:5173']) { r = await get('/api/route?callsign=UAL1', { origin: o }); ok(`cors allow ${o}`, r.s === 200 && r.h.get('access-control-allow-origin') === o); }
process.env.VERCEL_ENV = 'production';
for (const o of ['http://localhost:4212', 'http://127.0.0.1:5173']) { r = await get('/api/route?callsign=UAL1', { origin: o }); ok(`production: cors deny ${o}`, r.s === 403 && !r.h.get('access-control-allow-origin'), `${r.s}`); }
r = await get('/api/route?callsign=UAL1', { origin: 'https://j-davidm.github.io' }); ok('production: github.io still allowed', r.s === 200 && r.h.get('access-control-allow-origin') === 'https://j-davidm.github.io', `${r.s}`);
delete process.env.VERCEL_ENV;
r = await get('/api/route?callsign=UAL1', { origin: 'https://j-davidm.github.io', method: 'OPTIONS' }); ok('OPTIONS preflight → 204', r.s === 204);
r = await get('/api/route?callsign=UAL1', { method: 'POST' }); ok('POST → 405', r.s === 405);

// ---------- 3. mocked upstreams
let dbMode = 'ok', rsMode = 'ok', rs2Mode = 'ok', dbHits = 0, rsHits = 0, rs2Hits = 0, dbUrl = '', rsBody = '';
const AP = (iata, icao, loc) => ({ iata, icao, location: loc, name: loc + ' Intl', countryiso2: 'US' });
const db = http.createServer((req, res) => {
  dbHits++; dbUrl = req.url;
  if (dbMode === 'down') { res.writeHead(502); return res.end(); }
  if (dbMode === '404') { res.writeHead(404, { 'Content-Type': 'application/json' }); return res.end('{"response":"unknown callsign"}'); }
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ response: { flightroute: { callsign: 'TST1', callsign_iata: 'TS1', airline: { name: 'Test Air', secret: 'x' }, origin: { iata_code: 'LAX', icao_code: 'KLAX', municipality: 'Los Angeles', name: 'Los Angeles International Airport', country_name: 'United States', latitude: 33.9 }, destination: { iata_code: 'JFK', icao_code: 'KJFK', municipality: 'New York', name: 'John F Kennedy International Airport', country_name: 'United States' } } } }));
});
const rsServer = (which) => http.createServer((req, res) => {
  let b = ''; req.on('data', (c) => { b += c; }); req.on('end', () => {
    const m = which === 1 ? rsMode : rs2Mode; if (which === 1) { rsHits++; rsBody = b; } else rs2Hits++;
    if (m === 'down') { res.writeHead(500); return res.end(); }
    if (m === 'blank') { res.writeHead(201, { 'Content-Type': 'text/html' }); return res.end(); }
    const cs = JSON.parse(b).planes[0].callsign;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(m === 'unknown' ? [{ callsign: cs, _airports: [], plausible: 0 }] : [{ callsign: cs, airline_code: 'TST', _airports: [AP('SEA', 'KSEA', 'Seattle'), AP('BOS', 'KBOS', 'Boston')], plausible: 1 }]));
  });
});
const rs1 = rsServer(1), rs2 = rsServer(2);
const DB = `http://127.0.0.1:${await listen(db)}`, RS1 = `http://127.0.0.1:${await listen(rs1)}/api/0/routeset`, RS2 = `http://127.0.0.1:${await listen(rs2)}/api/0/routeset`;
Object.assign(process.env, { ADSBDB_BASE: DB, ROUTESET_URLS: `${RS1},${RS2}`, ROUTE_CACHE_MS: '300', ROUTE_MISS_MS: '300', ROUTE_STALE_MS: '1500' }); M._reset();
r = await get('/api/route?callsign=tst1');
ok('mock: adsbdb hit → LAX Los Angeles → JFK New York, URL built from the validated callsign only', r.s === 200 && r.j.source === 'adsbdb' && r.j.route.origin.iata === 'LAX' && r.j.route.origin.city === 'Los Angeles' && r.j.route.destination.city === 'New York' && dbUrl === '/v0/callsign/TST1', `${r.s} ${dbUrl}`);
ok('mock: unknown upstream fields dropped', r.j && !('latitude' in r.j.route.origin) && JSON.stringify(r.j).indexOf('secret') < 0);
ok('mock: routeset not asked when adsbdb answers', rsHits === 0 && rs2Hits === 0);
dbMode = '404'; r = await get('/api/route?callsign=TST2');
ok('mock: adsbdb 404 → adsb.lol routeset (SEA Seattle → BOS Boston), source adsb.lol', r.s === 200 && r.j.source === 'adsb.lol' && r.j.route.origin.iata === 'SEA' && r.j.route.destination.city === 'Boston', `${r.s} ${r.j?.source}`);
ok('mock: routeset body carries only the validated callsign', (() => { try { const b = JSON.parse(rsBody); return b.planes.length === 1 && b.planes[0].callsign === 'TST2'; } catch { return false; } })(), rsBody);
rsMode = 'blank'; rsHits = rs2Hits = 0; r = await get('/api/route?callsign=TST3');
ok('mock: api.adsb.lol empty 201 → its twin (adsb.im) answers', r.s === 200 && r.j.source === 'adsb.lol' && rsHits === 1 && rs2Hits === 1, `${r.s} ${rsHits}/${rs2Hits}`);
rsMode = 'unknown'; rs2Mode = 'unknown'; r = await get('/api/route?callsign=TST4');
ok('mock: nobody knows it → 404, s-maxage=3600', r.s === 404 && /s-maxage=3600/.test(r.h.get('cache-control') || ''), `${r.s} ${r.h.get('cache-control')}`);
dbHits = 0; r = await get('/api/route?callsign=TST4'); ok('mock: the miss is cached (ROUTE_MISS_MS)', r.s === 404 && dbHits === 0);
await sleep(350); dbMode = 'ok'; r = await get('/api/route?callsign=TST4'); ok('mock: after ROUTE_MISS_MS it is asked again', r.s === 200 && dbHits === 1);
dbMode = 'down'; rsMode = 'down'; rs2Mode = 'down'; await sleep(350);
r = await get('/api/route?callsign=TST1');
ok('mock: every source down → last good route, stale:true, no-store', r.s === 200 && r.j.stale === true && r.j.route.origin.iata === 'LAX' && r.h.get('cache-control') === 'no-store', `${r.s} stale=${r.j?.stale}`);
await sleep(1300);
r = await get('/api/route?callsign=TST1'); ok('mock: last good older than ROUTE_STALE_MS → 503', r.s === 503 && r.h.get('cache-control') === 'no-store', `${r.s}`);
r = await get('/api/route?callsign=NEW1'); ok('mock: all down, never seen → 503 (not a false 404)', r.s === 503, r.s);
dbMode = '404'; r = await get('/api/route?callsign=NEW2'); ok('mock: adsbdb unknown + routeset down → 503 (an outage, not cached as a miss)', r.s === 503, r.s);
dbMode = 'ok'; r = await get('/api/route?callsign=NEW2'); ok('mock: recovers', r.s === 200 && r.j.stale === false);
dbHits = 0; const many = await Promise.all(Array.from({ length: 8 }, () => get('/api/route?callsign=NEW2')));
ok('mock: cached within ROUTE_CACHE_MS → no upstream call', many.every((x) => x.s === 200) && dbHits === 0, `hits=${dbHits}`);

srv.close(); db.close(); rs1.close(); rs2.close();
fs.writeFileSync(path.join(ROOT, 'test', 'results-route.json'), JSON.stringify({ at: new Date().toISOString(), passed: results.filter((x) => x.pass).length, total: results.length, results }, null, 1));
console.log(`${results.filter((x) => x.pass).length}/${results.length} passed`);
process.exit(results.every((x) => x.pass) ? 0 : 1);
