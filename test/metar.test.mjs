// /api/metar tests: real aviationweather.gov upstream through the in-process harness, then a mocked upstream for
// validation, caching, last-good fallback, 404 and 503.   node test/metar.test.mjs  → PASS/FAIL lines, test/results-metar.json
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { createServer } from './harness.mjs';
const require = createRequire(import.meta.url);
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const M = require('../api/metar.js');

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

// ---------- 1. real upstream
delete process.env.AWC_BASE; M._reset();
let r = await get('/api/metar?icao=KJFK', { origin: 'https://j-davidm.github.io' });
ok('real: KJFK → 200 with a METAR from aviationweather.gov', r.s === 200 && r.j.icao === 'KJFK' && r.j.source === 'aviationweather.gov' && /^(METAR|SPECI) KJFK /.test(r.j.metar?.rawOb || ''), `${r.s} ${r.j?.metar?.rawOb}`);
ok('real: decoded fields kept (wdir/wspd/visib/clouds/obsTime)', r.j && 'wspd' in r.j.metar && 'visib' in r.j.metar && Array.isArray(r.j.metar.clouds) && Number.isFinite(r.j.metar.obsTime), Object.keys(r.j?.metar || {}).join(','));
ok('real: only whitelisted fields', r.j && Object.keys(r.j.metar).every((k) => ['icaoId', 'obsTime', 'reportTime', 'rawOb', 'metarType', 'wdir', 'wspd', 'wgst', 'visib', 'wxString', 'cover', 'clouds', 'temp', 'dewp', 'altim', 'fltCat', 'name', 'lat', 'lon', 'elev'].includes(k)));
ok('real: CORS echo for github.io + Vary: Origin', r.h.get('access-control-allow-origin') === 'https://j-davidm.github.io' && /Origin/.test(r.h.get('vary') || ''), r.h.get('access-control-allow-origin'));
ok('real: Cache-Control s-maxage=300 (5 min CDN)', /s-maxage=300/.test(r.h.get('cache-control') || ''), r.h.get('cache-control'));
ok('real: X-Relay-Cache MISS then HIT, no 2nd upstream call', r.h.get('x-relay-cache') === 'MISS' && await (async () => { const n = M.stats.upstreamRequests; const r2 = await get('/api/metar?icao=kjfk'); return r2.j.cached && r2.h.get('x-relay-cache') === 'HIT' && M.stats.upstreamRequests === n; })());
const intl = await Promise.all(['EGLL', 'RJTT', 'YSSY'].map((i) => get(`/api/metar?icao=${i}`)));
ok('real: international stations (EGLL, RJTT, YSSY)', intl.every((x, k) => x.s === 200 && x.j.icao === ['EGLL', 'RJTT', 'YSSY'][k]), intl.map((x) => `${x.s}:${x.j?.metar?.rawOb?.slice(0, 22)}`).join(' | '));
r = await get('/api/metar?icao=ZZZZ');
ok('real: unknown station ZZZZ → 404', r.s === 404, `${r.s} ${JSON.stringify(r.j)}`);
const n0 = M.stats.upstreamRequests;
const burst = await Promise.all(Array.from({ length: 10 }, () => get('/api/metar?icao=KLAX')));
ok('real: 10 parallel KLAX → 1 upstream call (coalesced)', burst.every((x) => x.s === 200) && M.stats.upstreamRequests - n0 === 1, `upstream calls=${M.stats.upstreamRequests - n0}`);

// ---------- 2. validation + CORS (no upstream)
for (const [q, why] of [['', 'missing'], ['?icao=', 'empty'], ['?icao=KJF', '3 letters'], ['?icao=KJFKX', '5 letters'], ['?icao=K1FK', 'digit'], ['?icao=KJ%20K', 'space'], ['?icao=KJFK&icao=KLAX', 'repeated'], ['?icao=KJFK&url=https://evil.example', 'extra param'], ['?ids=KJFK', 'other name'], ['?icao=../../x', 'path']]) {
  r = await get('/api/metar' + q); ok(`400 ${why} (${q || 'no query'})`, r.s === 400 && r.j?.error && r.h.get('cache-control') === 'no-store', `${r.s} ${r.j?.error}`);
}
for (const o of ['https://evil.example', 'https://apps-abc.vercel.app', 'null']) { r = await get('/api/metar?icao=KJFK', { origin: o }); ok(`cors deny ${o}`, r.s === 403 && !r.h.get('access-control-allow-origin')); }
for (const o of ['http://localhost:4212', 'http://127.0.0.1:5173']) { r = await get('/api/metar?icao=KJFK', { origin: o }); ok(`cors allow ${o}`, r.s === 200 && r.h.get('access-control-allow-origin') === o); }
process.env.VERCEL_ENV = 'production';
for (const o of ['http://localhost:4212', 'http://127.0.0.1:5173']) { r = await get('/api/metar?icao=KJFK', { origin: o }); ok(`production: cors deny ${o}`, r.s === 403 && !r.h.get('access-control-allow-origin'), `${r.s}`); }
r = await get('/api/metar?icao=KJFK', { origin: 'https://j-davidm.github.io' }); ok('production: github.io still allowed', r.s === 200 && r.h.get('access-control-allow-origin') === 'https://j-davidm.github.io', `${r.s}`);
delete process.env.VERCEL_ENV;
r = await get('/api/metar?icao=KJFK', { origin: 'https://j-davidm.github.io', method: 'OPTIONS' }); ok('OPTIONS preflight → 204', r.s === 204);
r = await get('/api/metar?icao=KJFK', { method: 'POST' }); ok('POST → 405', r.s === 405);

// ---------- 3. mocked upstream: caching, last-good, 404, 503
let mode = 'ok', hits = 0, lastUrl = '';
const mock = http.createServer((req, res) => {
  hits++; lastUrl = req.url;
  if (mode === 'down') { res.writeHead(502); return res.end(); }
  if (mode === 'empty') { res.writeHead(204); return res.end(); }
  if (mode === 'junk') { res.writeHead(200, { 'Content-Type': 'application/json' }); return res.end('[{"icaoId":"KTST"}]'); }
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify([{ icaoId: 'KTST', obsTime: 1792300000, rawOb: 'METAR KTST 180551Z 24012G20KT 3SM -RA BR OVC008 12/11 A2990', wdir: 240, wspd: 12, wgst: 20, visib: 3, wxString: '-RA BR', cover: 'OVC', clouds: [{ cover: 'OVC', base: 800 }], secret: 'drop me' }]));
});
const MB = `http://127.0.0.1:${await listen(mock)}`;
Object.assign(process.env, { AWC_BASE: MB, METAR_CACHE_MS: '300', METAR_STALE_MS: '1500' }); M._reset();
r = await get('/api/metar?icao=ktst');
ok('mock: fresh 200, upstream URL built from the validated ICAO only', r.s === 200 && r.j.stale === false && lastUrl === '/api/data/metar?ids=KTST&format=json', `${r.s} ${lastUrl}`);
ok('mock: unknown upstream fields dropped', r.j && !('secret' in r.j.metar) && r.j.metar.wgst === 20);
mode = 'down'; await sleep(400);
r = await get('/api/metar?icao=KTST');
ok('mock: upstream down → last good METAR, stale:true, no-store', r.s === 200 && r.j.stale === true && r.j.metar.wspd === 12 && r.h.get('cache-control') === 'no-store', `${r.s} stale=${r.j?.stale}`);
await sleep(1300);
r = await get('/api/metar?icao=KTST');
ok('mock: last good older than METAR_STALE_MS → 503', r.s === 503 && r.h.get('cache-control') === 'no-store', `${r.s} ${JSON.stringify(r.j)}`);
mode = 'empty'; r = await get('/api/metar?icao=KXXX'); ok('mock: 204 from upstream → 404', r.s === 404, r.s);
mode = 'junk'; r = await get('/api/metar?icao=KTST'); ok('mock: malformed upstream (no rawOb) → 503', r.s === 503, r.s);
mode = 'ok'; r = await get('/api/metar?icao=KTST'); ok('mock: recovers', r.s === 200 && r.j.stale === false);
hits = 0; const many = await Promise.all(Array.from({ length: 8 }, () => get('/api/metar?icao=KTST')));
ok('mock: cached within METAR_CACHE_MS → no upstream call', many.every((x) => x.s === 200) && hits === 0, `hits=${hits}`);

srv.close(); mock.close();
fs.writeFileSync(path.join(ROOT, 'test', 'results-metar.json'), JSON.stringify({ at: new Date().toISOString(), passed: results.filter((x) => x.pass).length, total: results.length, results }, null, 1));
console.log(`${results.filter((x) => x.pass).length}/${results.length} passed`);
process.exit(results.every((x) => x.pass) ? 0 : 1);
