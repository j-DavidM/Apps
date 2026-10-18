// /api/traffic tests: real Caltrans CWWP2 + CHP upstreams through the in-process harness, then a mocked upstream (fixtures in
// test/fixtures/traffic, trimmed copies of the real feeds from 2026-10-18) for parsing, partial failure, caching, last-good, 503.
//   node test/traffic.test.mjs  → PASS/FAIL lines, test/results-traffic.json      (SKIP_REAL=1 skips section 1)
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { createServer } from './harness.mjs';
const require = createRequire(import.meta.url);
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FIX = path.join(ROOT, 'test', 'fixtures', 'traffic');
const T = require('../api/traffic.js');

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
const MAIN = ['I-5', 'I-405', 'SR-91', 'SR-60', 'I-10', 'I-15', 'I-215', 'SR-55'];
const shapeOk = (j) => j && Array.isArray(j.incidents) && Array.isArray(j.travelTimes) && Array.isArray(j.sources) && MAIN.every((c) => j.corridors && j.corridors[c] && typeof j.corridors[c].level === 'number');

// ---------- 1. real upstreams
if (!process.env.SKIP_REAL) {
  for (const k of ['CWWP2_BASE', 'CHP_URL', 'TRAFFIC_CACHE_MS', 'TRAFFIC_STALE_MS', 'TRAFFIC_TIMEOUT_MS', 'TRAFFIC_CHP_RETRY_MS']) delete process.env[k];
  T._reset();
  const t0 = Date.now();
  let r = await get('/api/traffic', { origin: 'https://j-davidm.github.io' });
  const ms = Date.now() - t0;
  ok('real: 200 with all 8 corridors summarized', r.s === 200 && shapeOk(r.j), `${r.s} in ${ms} ms`);
  const src = Object.fromEntries((r.j?.sources || []).map((s) => [s.name, s]));
  for (const n of ['cwwp2-d7-lcs', 'cwwp2-d8-lcs', 'cwwp2-d11-lcs', 'cwwp2-d12-lcs', 'cwwp2-d7-cms', 'cwwp2-d8-cms', 'cwwp2-d11-cms', 'cwwp2-d12-cms', 'cwwp2-d12-tt', 'chp-cad'])
    ok(`real: source ${n} ok (keyless)`, src[n]?.ok, src[n] ? `${src[n].count} items, ${src[n].ms} ms${src[n].error ? ' ' + src[n].error : ''}` : 'missing');
  ok('real: only the 8 Yardline corridors in incidents', (r.j?.incidents || []).every((x) => MAIN.includes(x.corridor)), `${r.j?.incidents?.length} incidents`);
  ok('real: incidents in the SoCal box with finite lat/lon', (r.j?.incidents || []).every((x) => x.lat > 32.5 && x.lat < 35.2 && x.lon > -119.5 && x.lon < -114.4));
  ok('real: CORS echo github.io + Vary: Origin', r.h.get('access-control-allow-origin') === 'https://j-davidm.github.io' && /Origin/.test(r.h.get('vary') || ''));
  ok('real: CDN cache 3 min (s-maxage=180)', /s-maxage=180/.test(r.h.get('cache-control') || ''), r.h.get('cache-control'));
  ok('real: response well under 1 MB', JSON.stringify(r.j || {}).length < 1e6, `${JSON.stringify(r.j || {}).length} B`);
  const n0 = T.stats.upstreamRequests;
  const burst = await Promise.all(Array.from({ length: 6 }, () => get('/api/traffic')));
  ok('real: cached → HIT, no new upstream calls', burst.every((x) => x.s === 200 && x.h.get('x-relay-cache') === 'HIT') && T.stats.upstreamRequests === n0, `calls=${T.stats.upstreamRequests - n0}`);
  fs.writeFileSync(path.join(ROOT, 'test', 'results-traffic-real-sample.json'), JSON.stringify(r.j, null, 1));
}

// ---------- 2. validation + CORS (served from cache or mock; no upstream needed for 400/403/405)
for (const [q, why] of [['?url=https://evil.example', 'url param'], ['?district=7', 'unknown param'], ['?x=1&x=2', 'repeated']]) {
  const r = await get('/api/traffic' + q); ok(`400 ${why}`, r.s === 400 && r.j?.error && r.h.get('cache-control') === 'no-store', `${r.s} ${r.j?.error}`);
}
for (const o of ['https://evil.example', 'https://apps-abc.vercel.app', 'null', 'https://j-davidm.github.io.evil.example']) { const r = await get('/api/traffic', { origin: o }); ok(`cors deny ${o}`, r.s === 403 && !r.h.get('access-control-allow-origin')); }
let r = await get('/api/traffic', { origin: 'https://j-davidm.github.io', method: 'OPTIONS' }); ok('OPTIONS preflight → 204 + allow-origin', r.s === 204 && r.h.get('access-control-allow-origin') === 'https://j-davidm.github.io');
r = await get('/api/traffic', { method: 'POST' }); ok('POST → 405', r.s === 405);
process.env.VERCEL_ENV = 'production'; process.env.VERCEL_PROJECT_PRODUCTION_URL = 'apps-pi-sandy.vercel.app';
r = await get('/api/traffic', { origin: 'http://localhost:4183', method: 'OPTIONS' }); ok('production: localhost denied', r.s === 403, r.s);
r = await get('/api/traffic', { origin: 'https://apps-pi-sandy.vercel.app', method: 'OPTIONS' }); ok('production: own origin apps-pi-sandy.vercel.app allowed', r.s === 204 && r.h.get('access-control-allow-origin') === 'https://apps-pi-sandy.vercel.app', r.s);
delete process.env.VERCEL_ENV; delete process.env.VERCEL_PROJECT_PRODUCTION_URL;
r = await get('/api/traffic', { origin: 'http://localhost:4183', method: 'OPTIONS' }); ok('preview/dev: localhost allowed', r.s === 204);

// ---------- 3. parsers on fixtures
const now = Date.parse('2026-10-18T11:25:00Z');
const rd = (f) => JSON.parse(fs.readFileSync(path.join(FIX, f), 'utf8'));
const lcs = [7, 8, 11, 12].flatMap((d) => T.parseLcs(rd(`lcsStatusD${String(d).padStart(2, '0')}.json`), now));
ok('parse lcs: closures on main corridors only, US-101 dropped', lcs.length > 0 && lcs.every((x) => MAIN.includes(x.corridor)), `${lcs.length}`);
ok('parse lcs: severity 0..0.6 + confirmed flag', lcs.every((x) => x.sev > 0 && x.sev <= 0.6 && typeof x.confirmed === 'boolean'));
const cms = [7, 8, 11, 12].flatMap((d) => T.parseCms(rd(`cmsStatusD${String(d).padStart(2, '0')}.json`)));
ok('parse cms: blank signs dropped, text joined', cms.length > 0 && cms.every((x) => x.title && !/^\s*$/.test(x.title)), `${cms.length}`);
ok('parse cms: PSA ("SHARE THE ROAD", "MINUTES TO") gets sev 0', cms.filter((x) => /SHARE THE ROAD|MINUTES TO/.test(x.title)).every((x) => x.sev === 0));
const tt = T.parseTt(rd('ttStatusD12.json'));
ok('parse tt (D12): ratio vs 65 mph postmile free-flow', tt.length >= 5 && tt.every((x) => x.ratio >= 0.6 && x.ratio <= 8 && x.freeSec > 0), `${tt.length} · ${tt.slice(0, 3).map((x) => `${x.corridor}${x.dir} ${x.from}→${x.to} ${x.ratio}`).join(' | ')}`);
const chp = T.parseChp(fs.readFileSync(path.join(FIX, 'sa.xml'), 'utf8'), now);
ok('parse chp: SoCal centers only (Sacramento dropped)', chp.length > 0 && chp.every((x) => x.lat < 35.2), `${chp.length}`);
ok('parse chp: LATLON → negative lon, Pacific LogTime → epoch', chp.every((x) => x.lon < -114 && x.at && Math.abs(now - x.at) < 6 * 3600e3));
ok('parse chp: "No Inj" collision is lighter than injury', chp.filter((x) => /No Inj/.test(x.title)).every((x) => x.sev < 0.5));
ok('corridorOf: prefixes', T.corridorOf('I5 S') === 'I-5' && T.corridorOf('Sr91 E') === 'SR-91' && T.corridorOf('Tl91 W') === 'SR-91' && T.corridorOf('I405 N') === 'I-405' && T.corridorOf('SR-605') === null && T.corridorOf('I-55') === null && T.corridorOf('I-805') === null && T.corridorOf('Mm15 N Sbd') === null);
ok('chpTime: PDT and PST', T.chpTime('Oct 18 2026  4:12AM') === Date.parse('2026-10-18T11:12:00Z') && T.chpTime('Jan 5 2026 12:30PM') === Date.parse('2026-01-05T20:30:00Z'));

// ---------- 4. mocked upstreams: full answer, partial failure, cache, last-good, 503
let down = new Set(), hits = 0, slowMs = 0, truncChp = false;
const mock = http.createServer(async (req, res) => {
  hits++;
  const name = req.url.endsWith('sa.xml') ? 'sa.xml' : path.basename(req.url);
  if (slowMs) await sleep(slowMs);
  if (down.has('all') || down.has(name)) { res.writeHead(502); return res.end(); }
  const f = path.join(FIX, name);
  if (!fs.existsSync(f)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': name.endsWith('.xml') ? 'text/xml' : 'application/json' });
  const buf = fs.readFileSync(f);
  res.end(truncChp && name === 'sa.xml' ? buf.subarray(0, Math.floor(buf.length * 0.6)) : buf); // like CHP's occasional cut-off sa.xml
});
const MB = `http://127.0.0.1:${await listen(mock)}`;
Object.assign(process.env, { CWWP2_BASE: MB, CHP_URL: `${MB}/sa_xml/sa.xml`, TRAFFIC_CACHE_MS: '300', TRAFFIC_STALE_MS: '1500', TRAFFIC_TIMEOUT_MS: '400', TRAFFIC_CHP_RETRY_MS: '20' }); T._reset();
r = await get('/api/traffic');
ok('mock: 200, 10 sources all ok, 10 upstream calls', r.s === 200 && shapeOk(r.j) && r.j.sources.length === 10 && r.j.sources.every((s) => s.ok) && hits === 10, `${r.s} hits=${hits}`);
ok('mock: corridor levels 0..1, counts add up', MAIN.every((c) => { const x = r.j.corridors[c]; return x.level >= 0 && x.level <= 1 && x.closures + x.incidents <= r.j.incidents.length; }));
ok('mock: incidents sorted by severity', r.j.incidents.every((x, i, a) => i === 0 || a[i - 1].sev >= x.sev));
ok('mock: no unexpected fields', r.j.incidents.every((x) => Object.keys(x).every((k) => ['id', 'src', 'corridor', 'dir', 'lat', 'lon', 'title', 'kind', 'sev', 'at', 'until', 'confirmed'].includes(k))));
await sleep(350); down = new Set(['lcsStatusD07.json', 'sa.xml']);
r = await get('/api/traffic');
ok('mock: one district + CHP down → still 200, failures listed', r.s === 200 && !r.j.stale && r.j.sources.filter((s) => !s.ok).map((s) => s.name).sort().join() === 'chp-cad,cwwp2-d7-lcs', r.j?.sources?.filter((s) => !s.ok).map((s) => `${s.name}:${s.error}`).join(' '));
await sleep(350); down = new Set(); slowMs = 700;
r = await get('/api/traffic');
ok('mock: every upstream times out (400 ms) → last good, stale:true, no-store', r.s === 200 && r.j.stale === true && r.h.get('cache-control') === 'no-store', `${r.s} stale=${r.j?.stale}`);
slowMs = 0; down = new Set(['all']); await sleep(1600);
r = await get('/api/traffic');
ok('mock: all down and last good too old → 503 with source list', r.s === 503 && r.j.sources?.length === 10 && r.h.get('cache-control') === 'no-store', `${r.s}`);
down = new Set(); r = await get('/api/traffic'); ok('mock: recovers', r.s === 200 && !r.j.stale);
// r2: truncated CHP file → chp-cad failed ('truncated feed'), its last good incidents kept; without a last good → 0, still listed
await sleep(350); const chpBefore = r.j.incidents.filter((x) => x.src === 'chp-cad').length; truncChp = true;
r = await get('/api/traffic');
const chpS = r.j?.sources?.find((s) => s.name === 'chp-cad');
ok('mock: truncated CHP sa.xml → source failed "truncated feed", last good CHP incidents kept', r.s === 200 && chpS && !chpS.ok && /truncated/.test(chpS.error) && chpS.lastGoodAgeMs >= 0 && chpBefore > 0 && r.j.incidents.filter((x) => x.src === 'chp-cad').length === chpBefore, JSON.stringify({ chpS, chpBefore }));
T._reset(); r = await get('/api/traffic');
const chpS2 = r.j?.sources?.find((s) => s.name === 'chp-cad');
ok('mock: truncated CHP with no last good → 0 CHP incidents, failure listed (other sources fine)', r.s === 200 && !chpS2.ok && chpS2.count === 0 && r.j.incidents.every((x) => x.src !== 'chp-cad') && r.j.sources.filter((s) => s.ok).length === 9, JSON.stringify(chpS2));
truncChp = false; await sleep(350); r = await get('/api/traffic');
ok('mock: CHP recovers after the truncated copy', r.j.sources.find((s) => s.name === 'chp-cad').ok && r.j.incidents.some((x) => x.src === 'chp-cad'));
hits = 0; const many = await Promise.all(Array.from({ length: 8 }, () => get('/api/traffic')));
ok('mock: within cache → no upstream call', many.every((x) => x.s === 200) && hits === 0, `hits=${hits}`);
await sleep(350); hits = 0; const co = await Promise.all(Array.from({ length: 8 }, () => get('/api/traffic')));
ok('mock: 8 parallel after expiry → coalesced to one refresh (10 calls)', co.every((x) => x.s === 200) && hits === 10, `hits=${hits}`);

srv.close(); mock.close();
fs.writeFileSync(path.join(ROOT, 'test', 'results-traffic.json'), JSON.stringify({ at: new Date().toISOString(), passed: results.filter((x) => x.pass).length, total: results.length, results }, null, 1));
console.log(`${results.filter((x) => x.pass).length}/${results.length} passed`);
process.exit(results.every((x) => x.pass) ? 0 : 1);
