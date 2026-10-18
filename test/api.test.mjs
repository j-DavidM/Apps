// API tests against the real handlers (in-process harness) with REAL upstream calls, plus mocked failover.
//   node test/api.test.mjs            → prints PASS/FAIL lines, writes test/results-api.json
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { createServer } from './harness.mjs';
const require = createRequire(import.meta.url);
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const R = require('../api/_lib/relay.js');

const results = [];
const ok = (name, pass, info = '') => { results.push({ name, pass: !!pass, info: String(info).slice(0, 300) }); console.log(`${pass ? 'PASS' : 'FAIL'}  ${name}${info ? '  — ' + String(info).slice(0, 200) : ''}`); };
const listen = (srv) => new Promise((r) => srv.listen(0, '127.0.0.1', () => r(srv.address().port)));
const srv = createServer(); const PORT = await listen(srv); const B = `http://127.0.0.1:${PORT}`;
async function get(p, { origin, method = 'GET' } = {}) {
  const h = {}; if (origin) h.Origin = origin;
  const r = await fetch(B + p, { method, headers: h });
  let j = null; const t = await r.text(); try { j = JSON.parse(t); } catch { /* empty */ }
  return { s: r.status, h: r.headers, j };
}
const LAXO = { lat: 33.9425, lon: -118.4081 };

// ---------- 1. real upstream: /api/lax
let r = await get('/api/lax', { origin: 'https://j-davidm.github.io' });
const shapeKeys = ['source', 'fetchedAt', 'ageMs', 'cached', 'stale', 'count', 'ac', 'tried'];
ok('lax: real upstream returns aircraft', r.s === 200 && r.j.count > 0 && r.j.ac.length === r.j.count, `${r.s} ${r.j?.source} count=${r.j?.count}`);
ok('lax: same top-level shape as server.mjs', shapeKeys.every((k) => k in r.j), Object.keys(r.j).join(','));
ok('lax: aircraft are adsb-v2 objects inside the LAX box', r.j.ac.every((a) => typeof a.hex === 'string' && a.lat >= 33.2 && a.lat <= 34.5 && a.lon >= -119 && a.lon <= -117.5), JSON.stringify(r.j.ac[0]));
ok('lax: first upstream tried is adsb.fi', r.j.tried[0]?.source === 'adsb.fi', JSON.stringify(r.j.tried));
ok('lax: Cache-Control s-maxage=8, stale-while-revalidate=30', r.h.get('cache-control') === 's-maxage=8, stale-while-revalidate=30', r.h.get('cache-control'));
ok('lax: Vary: Origin (CDN keeps per-origin copies)', /Origin/.test(r.h.get('vary') || ''), r.h.get('vary'));
ok('lax: X-Relay-Source / X-Relay-Cache MISS', r.h.get('x-relay-source') === r.j.source && r.h.get('x-relay-cache') === 'MISS', `${r.h.get('x-relay-source')} ${r.h.get('x-relay-cache')}`);
const upBefore = R.stats.upstreamRequests;
const r2 = await get('/api/lax');
ok('lax: 2nd call within 8 s is an in-memory cache HIT (no upstream call)', r2.j.cached === true && r2.h.get('x-relay-cache') === 'HIT' && R.stats.upstreamRequests === upBefore, `cached=${r2.j.cached} ageMs=${r2.j.ageMs}`);
const burst = await Promise.all(Array.from({ length: 20 }, () => get('/api/lax')));
ok('lax: 20 parallel requests → still no extra upstream call', burst.every((x) => x.s === 200) && R.stats.upstreamRequests === upBefore, `upstream=${R.stats.upstreamRequests}`);
ok('lax: query params are ignored (no way to steer the upstream)', (await get('/api/lax?url=https://evil.example/&lat=0')).j.count === r.j.count);

// ---------- 2. CORS (env-driven allowlist; env is read per request)
const OWN = 'https://apps-k3j2h1-j-davidms-projects.vercel.app';      // VERCEL_URL (this deployment)
const PROD = 'https://apps-xyz.vercel.app';                            // VERCEL_PROJECT_PRODUCTION_URL
const BRANCH = 'https://apps-git-main-j-davidms-projects.vercel.app';  // VERCEL_BRANCH_URL
const setEnv = (o) => { for (const k of ['VERCEL_URL', 'VERCEL_BRANCH_URL', 'VERCEL_PROJECT_PRODUCTION_URL', 'RELAY_ALLOWED_ORIGINS', 'VERCEL_ENV']) delete process.env[k]; Object.assign(process.env, o); };
const cors = async (label, o, want) => {
  const x = await get('/api/lax', { origin: o });
  const pass = want ? x.s === 200 && x.h.get('access-control-allow-origin') === o : x.s === 403 && !x.h.get('access-control-allow-origin');
  ok(`cors ${want ? 'allow' : 'deny'} ${label}${label ? ': ' : ''}${o}`, pass, `${x.s} ACAO=${x.h.get('access-control-allow-origin')}`);
};

// 2a. no env at all (local / before import): only the fixed origins
setEnv({});
for (const o of ['https://j-davidm.github.io', 'http://localhost', 'http://localhost:5173', 'http://127.0.0.1:4300']) await cors('fixed', o, true);
for (const o of ['https://apps-abc123.vercel.app', 'https://evil.vercel.app', OWN]) await cors('no env, any *.vercel.app', o, false);
const denied = ['https://evil.example', 'https://j-davidm.github.io.evil.example', 'https://evil-j-davidm.github.io', 'http://j-davidm.github.io', 'https://vercel.app', 'https://a.b.vercel.app', 'https://x.vercel.app.evil.example', 'http://x.vercel.app', 'https://localhost', 'http://localhost.evil.example', 'http://192.168.1.5:3000', 'null', 'https://other.github.io'];
for (const o of denied) await cors('', o, false);

// 2a'. wx-r2: localhost only outside production
for (const env of ['preview', 'development']) { setEnv({ VERCEL_ENV: env }); await cors(`VERCEL_ENV=${env} localhost`, 'http://localhost:5173', true); }
setEnv({ VERCEL_ENV: 'production', VERCEL_PROJECT_PRODUCTION_URL: PROD.slice(8) });
for (const o of ['http://localhost', 'http://localhost:5173', 'http://127.0.0.1:4300']) await cors('VERCEL_ENV=production', o, false);
await cors('VERCEL_ENV=production github.io', 'https://j-davidm.github.io', true);
await cors('VERCEL_ENV=production own production URL', PROD, true);
{ const y = await get('/api/lax', { origin: 'http://localhost:5173', method: 'OPTIONS' }); ok('production: localhost preflight refused', y.s === 403 && !y.h.get('access-control-allow-origin'), `${y.s}`); }
setEnv({});

// 2b. Vercel system env only (RELAY_ALLOWED_ORIGINS unset): the deployment's own origins are allowed, nothing else on vercel.app
setEnv({ VERCEL_URL: OWN.slice(8), VERCEL_BRANCH_URL: BRANCH.slice(8), VERCEL_PROJECT_PRODUCTION_URL: PROD.slice(8) });
await cors('own VERCEL_URL', OWN, true);
await cors('own VERCEL_BRANCH_URL', BRANCH, true);
await cors('own VERCEL_PROJECT_PRODUCTION_URL', PROD, true);
await cors('foreign *.vercel.app', 'https://someone-elses-app.vercel.app', false);
await cors('foreign *.vercel.app look-alike', 'https://apps-xyz-evil.vercel.app', false);
await cors('other preview of same team, not listed', 'https://apps-zzz999-j-davidms-projects.vercel.app', false);
await cors('own host over http', 'http://' + OWN.slice(8), false);
await cors('fixed origins still allowed with env', 'https://j-davidm.github.io', true);

// 2c. RELAY_ALLOWED_ORIGINS: exact origins + one wildcard for the project's preview URLs
setEnv({ VERCEL_URL: OWN.slice(8), RELAY_ALLOWED_ORIGINS: ' https://apps.example.org , https://Custom-Domain.dev/, https://apps-*-j-davidms-projects.vercel.app,https://*.vercel.app, https://second-*.vercel.app' });
await cors('env exact', 'https://apps.example.org', true);
await cors('env exact (case / trailing slash normalised)', 'https://custom-domain.dev', true);
await cors('env exact is exact (no subdomains)', 'https://x.apps.example.org', false);
await cors('env wildcard', 'https://apps-zzz999-j-davidms-projects.vercel.app', true);
await cors('env wildcard (git branch preview)', 'https://apps-git-feature-x-j-davidms-projects.vercel.app', true);
await cors('env wildcard never spans a dot', 'https://apps-a.evil-j-davidms-projects.vercel.app', false);
await cors('env wildcard needs >= 1 char', 'https://apps--j-davidms-projects.vercel.app', false);
await cors('env wildcard other team', 'https://apps-zzz999-someone-else.vercel.app', false);
await cors('"https://*.vercel.app" in env is ignored (would reopen all)', 'https://evil.vercel.app', false);
await cors('only ONE wildcard honoured (2nd ignored)', 'https://second-x.vercel.app', false);
await cors('own VERCEL_URL still allowed', OWN, true);
const pol = R.originPolicy();
ok('originPolicy(): exact set + single wildcard parsed as documented', pol.exact.has(OWN) && pol.exact.has('https://apps.example.org') && pol.exact.has('https://custom-domain.dev') && String(pol.wildcard) === String(/^https:\/\/apps-[a-z0-9-]{1,63}-j-davidms-projects\.vercel\.app$/), `${[...pol.exact].join(',')} ${pol.wildcard}`);
{
  const y = await get('/api/lax', { method: 'OPTIONS', origin: 'https://apps-zzz999-j-davidms-projects.vercel.app' });
  ok('OPTIONS preflight from env-wildcard origin → 204', y.s === 204 && y.h.get('access-control-allow-origin') === 'https://apps-zzz999-j-davidms-projects.vercel.app', y.s);
  const z = await get('/api/adsb?lat=34&lon=-118', { origin: 'https://someone-elses-app.vercel.app' });
  ok('foreign *.vercel.app → 403 on /api/adsb too', z.s === 403 && !z.h.get('access-control-allow-origin'), z.s);
}
setEnv({ VERCEL_URL: OWN.slice(8) });
let x = await get('/api/adsb?lat=34&lon=-118', { origin: 'https://evil.example' });
ok('cors deny on /api/adsb too', x.s === 403 && !x.h.get('access-control-allow-origin'), x.s);
x = await get('/api/lax', { method: 'OPTIONS', origin: 'https://j-davidm.github.io' });
ok('OPTIONS preflight (allowed) → 204 + methods', x.s === 204 && x.h.get('access-control-allow-origin') === 'https://j-davidm.github.io' && /GET/.test(x.h.get('access-control-allow-methods')), `${x.s} ${x.h.get('access-control-allow-methods')}`);
x = await get('/api/adsb', { method: 'OPTIONS', origin: OWN });
ok('OPTIONS preflight on /api/adsb (own origin) → 204', x.s === 204 && x.h.get('access-control-allow-origin') === OWN, x.s);
x = await get('/api/lax', { method: 'OPTIONS', origin: 'https://someone-elses-app.vercel.app' });
ok('OPTIONS preflight from foreign *.vercel.app → 403', x.s === 403 && !x.h.get('access-control-allow-origin'), x.s);
x = await get('/api/lax', { method: 'OPTIONS', origin: 'https://evil.example' });
ok('OPTIONS preflight (disallowed) → 403, no ACAO', x.s === 403 && !x.h.get('access-control-allow-origin'), x.s);
x = await get('/api/lax', { method: 'POST', origin: 'https://j-davidm.github.io' });
ok('POST → 405', x.s === 405, x.s);
x = await get('/api/lax');
ok('no Origin (curl / same-origin) → 200 without ACAO', x.s === 200 && !x.h.get('access-control-allow-origin'), x.s);
x = await get('/api/whatever');
ok('unknown /api route → 404 (only lax/adsb exist; api/_lib is not routable)', x.s === 404 && (await get('/api/_lib')).s === 404);

// ---------- 3. bad params on /api/adsb
const bad = {
  'missing all': '', 'lat only': '?lat=34', 'lat not a number': '?lat=abc&lon=-118', 'lat out of range': '?lat=91&lon=-118',
  'lon out of range': '?lat=34&lon=200', 'exponent notation': '?lat=3e1&lon=-118', 'hex number': '?lat=0x22&lon=-118', 'NaN': '?lat=NaN&lon=-118',
  'Infinity': '?lat=34&lon=Infinity', 'too many decimals': '?lat=34.1234567891&lon=-118', 'negative radius': '?lat=34&lon=-118&radius=-5',
  'radius not a number': '?lat=34&lon=-118&radius=far', 'unknown param url=': '?lat=34&lon=-118&url=https://evil.example/', 'unknown param host=': '?lat=34&lon=-118&host=evil',
  'duplicate lat': '?lat=34&lat=35&lon=-118', 'circle + box mixed': '?lat=34&lon=-118&lamin=33', 'box incomplete': '?lamin=33&lamax=34&lomin=-119',
  'box inverted': '?lamin=34&lamax=33&lomin=-119&lomax=-118', 'box across antimeridian': '?lamin=10&lamax=11&lomin=179&lomax=-179',
  'format=xml': '?lat=34&lon=-118&format=xml', 'extended=yes': '?lat=34&lon=-118&extended=yes', 'path traversal value': '?lat=../../etc&lon=-118',
};
for (const [n, q] of Object.entries(bad)) {
  const y = await get('/api/adsb' + q, { origin: 'http://localhost:5173' });
  ok(`bad params rejected: ${n}`, y.s === 400 && typeof y.j?.error === 'string' && y.h.get('cache-control') === 'no-store' && y.h.get('access-control-allow-origin') === 'http://localhost:5173', `${y.s} ${y.j?.error}`);
}

// ---------- 4. real upstream: /api/adsb
x = await get(`/api/adsb?lat=${LAXO.lat}&lon=${LAXO.lon}&radius=20`, { origin: 'https://j-davidm.github.io' });
ok('adsb circle @LAX r=20 → aircraft (adsb shape)', x.s === 200 && x.j.count > 0 && Array.isArray(x.j.ac) && x.j.query.radiusNm === 20, `${x.s} ${x.j?.source} count=${x.j?.count} q=${JSON.stringify(x.j?.query)}`);
ok('adsb: cache headers', x.h.get('cache-control') === 's-maxage=8, stale-while-revalidate=30' && /Origin/.test(x.h.get('vary')), x.h.get('cache-control'));
const maxKm = Math.max(...x.j.ac.map((a) => Math.hypot((a.lat - 33.94) * 111.32, (a.lon + 118.41) * 111.32 * Math.cos(33.94 * Math.PI / 180))));
ok('adsb: results trimmed to the requested area (≤ 20 nm box)', maxKm <= 20 * 1.852 * Math.SQRT2 + 2, `max ${maxKm.toFixed(1)} km`);
x = await get(`/api/adsb?lat=${LAXO.lat}&lon=${LAXO.lon}&radius=500`);
ok('adsb: radius 500 clamped to 60 nm', x.s === 200 && x.j.query.radiusNm === 60 && x.j.query.clamped === true, JSON.stringify(x.j?.query));
x = await get(`/api/adsb?lat=${LAXO.lat}&lon=${LAXO.lon}&radius=0`);
ok('adsb: radius 0 clamped to 1 nm', x.s === 200 && x.j.query.radiusNm === 1, JSON.stringify(x.j?.query));
x = await get(`/api/adsb?lat=33.94251&lon=-118.40809&radius=20`);
ok('adsb: nearby coordinates share the quantized cache entry', x.j.cached === true, `cached=${x.j?.cached}`);
x = await get('/api/adsb?lat=20&lon=-135&radius=10');
ok('adsb: empty sky (open Pacific) → 200 count 0 after all sources were asked', x.s === 200 && x.j.count === 0 && x.j.tried.length === 4, `${x.s} count=${x.j?.count} tried=${x.j?.tried?.map((t) => t.source + ':' + (t.ok ? 'ok' : t.error)).join(' > ')}`);
x = await get('/api/adsb?lamin=30&lamax=38&lomin=-125&lomax=-112');
ok('adsb: huge box clamped to ≤ 60 nm half-side', x.s === 200 && x.j.query.clamped === true && (x.j.query.box.lamax - x.j.query.box.lamin) <= 2 * 60 * 1.852 / 111.32 + 0.03, JSON.stringify(x.j?.query));

// Lofi Airports' exact r14 request (OpenSky query string, 55 km box) with format=opensky
const lofiQ = (lat, lon) => { const BOX = 55, dLat = BOX / 111.32, dLon = BOX / (111.32 * Math.cos(lat * Math.PI / 180)); return `?lamin=${(lat - dLat).toFixed(3)}&lomin=${(lon - dLon).toFixed(3)}&lamax=${(lat + dLat).toFixed(3)}&lomax=${(lon + dLon).toFixed(3)}&extended=1`; };
x = await get('/api/adsb' + lofiQ(LAXO.lat, LAXO.lon) + '&format=opensky', { origin: 'https://j-davidm.github.io' });
const st = x.j?.states || [];
ok('adsb format=opensky (Lofi query @LAX) → OpenSky states', x.s === 200 && st.length > 0 && st.every((s) => s.length === 18 && typeof s[0] === 'string' && typeof s[5] === 'number' && typeof s[6] === 'number') && Number.isInteger(x.j.time), `${x.j?.source} states=${st.length} time=${x.j?.time}`);
ok('adsb format=opensky: last_contact ≤ time, categories mapped', st.every((s) => s[4] <= x.j.time && s[3] <= x.j.time) && st.some((s) => s[17] >= 2), `cats=${[...new Set(st.map((s) => s[17]))].join(',')}`);

// compatibility: run Lofi's OWN parsers (bundled read-only from /workspace/lofi-airports/src/live.ts) on the relay output
try {
  const out = '/tmp/lofi-live-test';
  execFileSync(path.join('/workspace/lax-flights-relay/node_modules/.bin/esbuild'), ['/workspace/lofi-airports/src/live.ts', '/workspace/lofi-airports/src/airports.ts', '--bundle', '--format=esm', '--platform=neutral', `--outdir=${out}`, '--out-extension:.js=.mjs', '--log-level=error']);
  const live = await import(out + '/live.mjs'); const { AIRPORTS } = await import(out + '/airports.mjs');
  for (const id of ['lax', 'jfk', 'lhr', 'hnd']) {
    const def = AIRPORTS.find((a) => a.id === id); if (!def) { ok(`lofi parsers @${id}`, false, 'airport not in list'); continue; }
    const y = await get('/api/adsb' + lofiQ(def.lat, def.lon) + '&format=opensky', { origin: 'https://j-davidm.github.io' });
    const traffic = live.parseTraffic(def, y.j), list = live.parseStates(def, y.j);
    ok(`lofi's parseTraffic/parseStates accept relay output @${def.icao}`, y.s === 200 && traffic.length > 0, `${y.j?.source}: states=${y.j?.states?.length} traffic=${traffic.length} pairable=${list.length}`);
  }
} catch (e) { ok('lofi parser compatibility', false, e.message); }

// ---------- 5. failover (mock upstreams; env base overrides are read per request)
const mock = http.createServer((req, res) => {
  const u = req.url;
  if (u.startsWith('/fi/')) { res.writeHead(500); return res.end('boom'); }
  if (u.startsWith('/lol/')) return; // hang → timeout
  if (u.startsWith('/al/')) { res.writeHead(200, { 'Content-Type': 'application/json' }); return res.end('{"ac":[]}'); }
  if (u.startsWith('/os/')) {
    if (mock.osDown) { res.writeHead(503); return res.end(); }
    const t = Math.floor(Date.now() / 1000);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ time: t, states: [['a1b2c3', 'UAL123  ', 'United States', t - 1, t, -118.41, 33.95, 300, false, 70, 250, -4, null, 320, '1234', false, 0, 4], ['ffffff', 'FAR1', 'X', t, t, -100, 10, 1000, false, 1, 1, 0, null, 0, null, false, 0, 0]] }));
  }
  res.writeHead(404); res.end();
});
const MP = await listen(mock); const MB = `http://127.0.0.1:${MP}`;
Object.assign(process.env, { ADSBFI_BASE: MB + '/fi', ADSBLOL_BASE: MB + '/lol', AIRPLANES_BASE: MB + '/al', OPENSKY_BASE: MB + '/os' });
R._reset();
const t0 = Date.now();
x = await get('/api/adsb?lat=33.94&lon=-118.41&radius=30');
const tr = x.j?.tried || [];
ok('failover: 500 → timeout → empty → OpenSky, in order', x.s === 200 && x.j.source === 'OpenSky Network' && tr.map((t) => t.source).join('>') === 'adsb.fi>adsb.lol>airplanes.live>OpenSky Network', tr.map((t) => `${t.source}:${t.ok ? 'ok' : t.error}`).join(' > '));
ok(`failover: hanging source cut by the ${R.TIMEOUT_MS} ms timeout`, /timeout/.test(tr[1]?.error || '') && tr[1].ms < R.TIMEOUT_MS + 1500, `${tr[1]?.ms} ms, total ${Date.now() - t0} ms`);
ok('failover: OpenSky rows converted to adsb-v2 + trimmed to the area', x.j.count === 1 && x.j.ac[0].hex === 'a1b2c3' && x.j.ac[0].alt_baro === 984 && x.j.ac[0].category === 'A3' && x.j.ac[0].country === 'United States', JSON.stringify(x.j.ac));
x = await get('/api/adsb?lat=33.94&lon=-118.41&radius=30&format=opensky');
ok('failover: OpenSky → format=opensky round-trips (country, category, altitude)', x.j.states[0][2] === 'United States' && x.j.states[0][17] === 4 && Math.abs(x.j.states[0][7] - 300) < 1, JSON.stringify(x.j.states[0]));
fs.writeFileSync('/tmp/relay-mock-port', String(MP));
await new Promise((res) => mock.close(res) || res());
srv.close();

const pass = results.filter((r) => r.pass).length;
console.log(`\n${pass}/${results.length} passed`);
fs.writeFileSync(path.join(ROOT, 'test/results-api.json'), JSON.stringify({ at: new Date().toString(), pass, total: results.length, results }, null, 1));
process.exit(pass === results.length ? 0 : 1);
