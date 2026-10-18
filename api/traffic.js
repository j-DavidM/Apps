// GET /api/traffic — live SoCal freeway conditions for Yardline (j-davidm.github.io/Apps/yardline/), from free, keyless feeds:
//   Caltrans CWWP2 (https://cwwp2.dot.ca.gov/data/d<N>/...) for Districts 7 (LA/Ventura), 8 (San Bernardino/Riverside),
//   11 (San Diego/Imperial), 12 (Orange):  lcs = lane closures, cms = changeable message signs, tt = travel times (D12 only;
//   D7 tt answers HTTP 500, D8 tt is empty, D11 tt is frozen in 2022, so they are not requested).
//   CHP CAD (https://media.chp.ca.gov/sa_xml/sa.xml, the public "CHP Traffic Incident Information" feed; no CORS header),
//   filtered to the SoCal communications centers.
// Everything is reduced to the 8 Yardline corridors: I-5, I-405, SR-91, SR-60, I-10, I-15, I-215, SR-55.
//   200 { source, fetchedAt, ageMs, cached, stale, sources:[{name, ok, ms, count, error?}], corridors:{ 'I-5': { closures, incidents,
//         signs, ttRatio|null, level } }, incidents:[{ id, src, corridor, dir, lat, lon, title, kind, sev, at }],
//         travelTimes:[{ corridor, dir, from, to, sec, freeSec, ratio }] }
//   400 any query parameter (the endpoint takes none); 503 every source failed and no last-good copy younger than TRAFFIC_STALE_MS.
// Same CORS allowlist + front door as the other endpoints (api/_lib/relay.js): j-davidm.github.io, this deployment's own
// origins, localhost only outside production. Upstream URLs are fixed constants (no caller input reaches them).
// In-memory cache 3 min (TRAFFIC_CACHE_MS) with in-flight coalescing; CDN s-maxage=180, stale-while-revalidate=300.
// One failing source never fails the answer: it is listed in `sources` with ok:false and the rest are still used.
'use strict';
const R = require('./_lib/relay');

const env = process.env; // read per request (tests shorten the timings / point at mocks)
const cacheMs = () => Number(env.TRAFFIC_CACHE_MS || 180_000);
const staleMs = () => Number(env.TRAFFIC_STALE_MS || 30 * 60_000);
const timeoutMs = () => Number(env.TRAFFIC_TIMEOUT_MS || 9000); // D7 lane closures are ~14 MB (≈3 s on a good day)
const chpRetryMs = () => Number(env.TRAFFIC_CHP_RETRY_MS || 1200);
const CDN = 's-maxage=180, stale-while-revalidate=300';
const CORRIDORS = ['I-5', 'I-405', 'SR-91', 'SR-60', 'I-10', 'I-15', 'I-215', 'SR-55'];
const DISTRICTS = [7, 8, 11, 12];
const CHP_SOCAL = new Set(['LACC', 'OCCC', 'INCC', 'BSCC', 'BCCC', 'VTCC', 'ICCC']); // LA, Orange, Inland, Barstow, Border, Ventura, Indio
const BBOX = { s: 32.5, n: 35.2, w: -119.5, e: -114.4 };
const MAX_INC = 400;
const stats = { upstreamRequests: 0 };
let cache = null; // { body, at }
let inflight = null;

const cwwpBase = () => env.CWWP2_BASE || 'https://cwwp2.dot.ca.gov';
const chpUrl = () => env.CHP_URL || 'https://media.chp.ca.gov/sa_xml/sa.xml';
const pad2 = (n) => String(n).padStart(2, '0');
const clip = (s, n = 120) => String(s == null ? '' : s).replace(/\s+/g, ' ').trim().slice(0, n);
const num = (v) => { const x = Number(v); return Number.isFinite(x) ? x : null; };
const inBox = (lat, lon) => lat != null && lon != null && lat >= BBOX.s && lat <= BBOX.n && lon >= BBOX.w && lon <= BBOX.e;
const truthy = (v) => String(v).toLowerCase() === 'true';

/** "I-5", "I5 S", "Sr91 E", "SR-55", "Tl91" … → one of CORRIDORS, else null */
function corridorOf(...texts) {
  for (const t of texts) {
    if (!t) continue;
    const m = /\b(I|SR|TL|US)[\s-]?(5|405|91|60|10|15|215|55)\b(?![\d.])/i.exec(String(t));
    if (!m) continue;
    const n = m[2];
    const c = (n === '5' || n === '405' || n === '10' || n === '15' || n === '215') ? `I-${n}` : `SR-${n}`;
    // I-91/I-60/I-55 don't exist and SR-5/SR-10… aren't freeways: only accept the right prefix
    if (m[1].toUpperCase() === 'I' && c.startsWith('SR')) continue;
    if (m[1].toUpperCase() !== 'I' && c.startsWith('I-')) continue;
    return c;
  }
  return null;
}
const dirOf = (s) => { const m = /\b(North|South|East|West|[NSEW]B?)\b/i.exec(String(s || '')); return m ? m[1][0].toUpperCase() : ''; };

async function getText(url, name) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(new Error(`timeout ${timeoutMs()} ms`)), timeoutMs());
  stats.upstreamRequests++;
  try {
    const r = await fetch(url, { signal: ctrl.signal, redirect: 'error', headers: { Accept: 'application/json, text/xml;q=0.9', 'User-Agent': R.UA.replace('adsb-relay', 'traffic-relay') } });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return await r.text();
  } catch (e) {
    throw new Error(`${name}: ${String((e && e.cause && e.cause.code) || (e && e.message) || e).slice(0, 100)}`);
  } finally { clearTimeout(t); }
}
const getJson = async (url, name) => { const txt = await getText(url, name); try { return JSON.parse(txt); } catch { throw new Error(`${name}: bad JSON`); } };

// ---------------------------------------------------------------- parsers (exported for tests)
/** CWWP2 lcsStatusDxx.json → closures in effect now on the 8 corridors */
function parseLcs(j, nowMs = Date.now()) {
  const now = nowMs / 1000, out = [];
  for (const row of (j && Array.isArray(j.data) ? j.data : [])) {
    const x = row && row.lcs; if (!x || !x.closure || !x.location) continue;
    const c = x.closure, ts = c.closureTimestamp || {}, b = x.location.begin || {};
    const corridor = corridorOf(b.beginRoute); if (!corridor) continue;
    if (truthy(c.code1098 && c.code1098.isCode1098) || truthy(c.code1022 && c.code1022.isCode1022)) continue; // picked up / cancelled
    const s = num(ts.closureStartEpoch), e = truthy(ts.isClosureEndIndefinite) ? Infinity : num(ts.closureEndEpoch);
    const confirmed = truthy(c.code1097 && c.code1097.isCode1097);              // 10-97: crew on scene, closure is in place
    const scheduledNow = s != null && s <= now && (e == null || now <= e);
    if (!confirmed && !scheduledNow) continue;
    const lat = num(b.beginLatitude), lon = num(b.beginLongitude); if (!inBox(lat, lon)) continue;
    const closed = num(c.lanesClosed) || 0, total = Math.max(1, num(c.totalExistingLanes) || 1);
    const full = /full|total/i.test(c.typeOfClosure || '') || closed >= total;
    const ramp = /ramp|connector/i.test(`${c.facility} ${c.typeOfClosure}`);
    out.push({
      id: `LCS-${clip(x.index, 40)}`, src: 'caltrans-lcs', corridor, dir: dirOf(x.location.travelFlowDirection), lat, lon,
      title: clip(`${c.typeOfClosure || 'Lane'} closure${closed ? ` (${closed}/${total} lanes)` : ''} · ${c.typeOfWork || 'work'} · ${b.beginLocationName || ''}`),
      kind: 'closure', confirmed,
      sev: +(ramp ? 0.12 : full ? 0.6 : Math.min(0.5, 0.12 + 0.4 * (closed / total))).toFixed(2),
      at: (s || now) * 1000, until: Number.isFinite(e) ? e * 1000 : null,
    });
  }
  return out;
}

const SIGN_ALERT = /CRASH|COLLISION|ACCIDENT|INCIDENT|CLOSED|CLOSURE|LANES?\b|BLOCKED|STALL|SIG ?ALERT|DEBRIS|FIRE|SLOW|DELAY|CONGEST|EXPECT/i;
/** CWWP2 cmsStatusDxx.json → non-blank signs on the 8 corridors (alerting ones get a small severity) */
function parseCms(j) {
  const out = [];
  for (const row of (j && Array.isArray(j.data) ? j.data : [])) {
    const x = row && row.cms; if (!x || !x.location || !x.message) continue;
    if (String(x.inService).toLowerCase() !== 'true' || /blank/i.test(x.message.display || 'Blank')) continue;
    const corridor = corridorOf(x.location.route); if (!corridor) continue;
    const lat = num(x.location.latitude), lon = num(x.location.longitude); if (!inBox(lat, lon)) continue;
    const p1 = x.message.phase1 || {}, p2 = x.message.phase2 || {};
    const text = clip([p1.phase1Line1, p1.phase1Line2, p1.phase1Line3, p2.phase2Line1, p2.phase2Line2, p2.phase2Line3].filter(Boolean).join(' / '), 140);
    if (!text) continue;
    const alerting = SIGN_ALERT.test(text) && !/MINUTES TO|SHARE THE ROAD|LOOK TWICE|BUCKLE|ZERO|SPEEDING|DRIVE SOBER|AMBER|CLICK IT/i.test(text);
    out.push({ id: `CMS-${x.location.district}-${clip(x.index, 12)}`, src: 'caltrans-cms', corridor, dir: dirOf(x.location.direction), lat, lon, title: text, kind: 'sign', sev: alerting ? 0.2 : 0, at: Date.parse(`${(x.message.messageTimestamp || {}).messageDate}T${(x.message.messageTimestamp || {}).messageTime}-07:00`) || null });
  }
  return out;
}

/** CWWP2 ttStatusD12.json → travel times with a free-flow estimate (postmile distance at 65 mph) */
function parseTt(j) {
  const out = [];
  for (const row of (j && Array.isArray(j.data) ? j.data : [])) {
    const x = row && row.tt; if (!x || !x.location || !x.traveltime) continue;
    const b = x.location.begin || {}, e = x.location.end || {};
    const corridor = corridorOf(b.beginRoute); if (!corridor) continue;
    const sec = num(x.traveltime.calculatedTraveltime), pm0 = num(b.beginPostmile), pm1 = num(e.endPostmile);
    if (!sec || pm0 == null || pm1 == null) continue;
    const miles = Math.abs(pm1 - pm0); if (miles < 1) continue;
    const freeSec = Math.round((miles / 65) * 3600), ratio = +(sec / freeSec).toFixed(2);
    if (ratio < 0.6 || ratio > 8) continue; // feed glitch
    out.push({ corridor, dir: dirOf(x.location.travelFlowDirection), from: clip(b.beginLocationName, 40), to: clip(e.endLocationName, 40), pm0, pm1, sec, freeSec, ratio, at: (num(x.traveltime.traveltimeTimestamp && x.traveltime.traveltimeTimestamp.traveltimeEpoch) || 0) * 1000 || null });
  }
  return out;
}

const xmlVal = (s) => clip(String(s || '').replace(/^"|"$/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'"), 120);
function chpKind(type) {
  const t = String(type);
  if (/SIG ?ALERT/i.test(t)) return ['sigalert', 0.7];
  if (/CLOSURE/i.test(t)) return ['closure', 0.6];
  if (/No Inj|^1182/i.test(t) && /Collision/i.test(t)) return ['crash', 0.3];
  if (/^11(79|80|81|83)|Collision.*(Inj|1141|Fatal)/i.test(t)) return ['crash', 0.5];
  if (/Collision/i.test(t)) return ['crash', 0.35];
  if (/Fire/i.test(t)) return ['fire', 0.4];
  if (/1125|Hazard|Debris|Animal|Pedestrian/i.test(t)) return ['hazard', 0.2];
  if (/1166|Defective|Stall|Disabled|1182|Breakdown|Spinout/i.test(t)) return ['stall', 0.15];
  return [null, 0];
}
/** "Oct 18 2026  4:12AM" (Pacific) → epoch ms; the offset (PDT/PST) is taken from Intl for that date */
function chpTime(s) {
  const m = /^([A-Z][a-z]{2}) (\d{1,2}) (\d{4}) +(\d{1,2}):(\d{2})([AP])M$/.exec(String(s).trim());
  if (!m) return null;
  const mon = 'JanFebMarAprMayJunJulAugSepOctNovDec'.indexOf(m[1]) / 3;
  if (mon < 0) return null;
  const h = (Number(m[4]) % 12) + (m[6] === 'P' ? 12 : 0);
  const guess = Date.UTC(Number(m[3]), mon, Number(m[2]), h + 8, Number(m[5])); // as if PST
  const pdt = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Los_Angeles', timeZoneName: 'short' }).format(guess).includes('PDT');
  return pdt ? guess - 3600e3 : guess;
}
/** CHP CAD sa.xml → SoCal incidents on the 8 corridors (assists, BOLOs, etc. dropped) */
function parseChp(xml, nowMs = Date.now()) {
  const out = [];
  const disp = /<Dispatch ID\s*=\s*"(\w+)">([\s\S]*?)<\/Dispatch>/g;
  let d;
  while ((d = disp.exec(String(xml || '')))) {
    if (!CHP_SOCAL.has(d[1])) continue;
    const logs = /<Log ID\s*=\s*"(\w+)">([\s\S]*?)<\/Log>/g;
    let l;
    while ((l = logs.exec(d[2]))) {
      const body = l[2];
      const tag = (n) => { const m = new RegExp(`<${n}>([\\s\\S]*?)</${n}>`).exec(body); return m ? xmlVal(m[1]) : ''; };
      const type = tag('LogType'), loc = tag('Location'), desc = tag('LocationDesc'), area = tag('Area');
      const [kind, sev] = chpKind(type); if (!kind) continue;
      const corridor = corridorOf(loc, desc); if (!corridor) continue;
      const ll = /^(\d{7,9}):(\d{7,10})$/.exec(tag('LATLON'));
      const lat = ll ? Number(ll[1]) / 1e6 : null, lon = ll ? -Number(ll[2]) / 1e6 : null;
      if (!inBox(lat, lon)) continue;
      const at = chpTime(tag('LogTime'));
      if (at && nowMs - at > 6 * 3600e3) continue; // stale log entries
      out.push({ id: `CHP-${clip(l[1], 20)}`, src: 'chp-cad', corridor, dir: dirOf(loc.replace(/^\S+\s/, '')), lat, lon, title: clip(`${type.replace(/^\d+-/, '')} · ${loc}${area ? ` (${area})` : ''}`), kind, sev, at });
    }
  }
  return out;
}

/** corridor summary: counts + a 0..1 congestion level from travel times and incident severities (no speed feed exists keyless) */
function summarize(incidents, travelTimes) {
  const out = {};
  for (const c of CORRIDORS) {
    const inc = incidents.filter((x) => x.corridor === c);
    const tt = travelTimes.filter((x) => x.corridor === c);
    const ttRatio = tt.length ? +(tt.reduce((a, x) => a + x.ratio, 0) / tt.length).toFixed(2) : null;
    const ttLevel = ttRatio == null ? 0 : Math.max(0, Math.min(1, (ttRatio - 1) / 1.4));
    const sevs = inc.map((x) => x.sev * (x.kind === 'closure' && !x.confirmed ? 0.4 : 1)).filter((v) => v > 0).sort((a, b) => b - a);
    const evLevel = sevs.length ? Math.min(0.9, sevs[0] * 0.8 + 0.03 * (sevs.length - 1)) : 0; // worst event + a little per extra event
    out[c] = {
      closures: inc.filter((x) => x.kind === 'closure').length,
      incidents: inc.filter((x) => x.src === 'chp-cad').length,
      signs: inc.filter((x) => x.kind === 'sign' && x.sev > 0).length,
      ttRatio, level: +Math.max(ttLevel, evLevel).toFixed(2),
    };
  }
  return out;
}

async function refresh() {
  const now = Date.now();
  const jobs = [];
  for (const d of DISTRICTS) {
    jobs.push({ name: `cwwp2-d${d}-lcs`, run: () => getJson(`${cwwpBase()}/data/d${d}/lcs/lcsStatusD${pad2(d)}.json`, `d${d} lcs`).then((j) => parseLcs(j, now)) });
    jobs.push({ name: `cwwp2-d${d}-cms`, run: () => getJson(`${cwwpBase()}/data/d${d}/cms/cmsStatusD${pad2(d)}.json`, `d${d} cms`).then(parseCms) });
  }
  jobs.push({ name: 'cwwp2-d12-tt', tt: true, run: () => getJson(`${cwwpBase()}/data/d12/tt/ttStatusD12.json`, 'd12 tt').then(parseTt) });
  // CHP's server sometimes hands out a truncated, hours-old copy of sa.xml (seen 2026-10-18: 233,472 B, no </State>,
  // Oct 17 logs). Treat that as a failed source, so the last good CHP set is kept instead of silently reporting 0.
  // The file is rewritten every few seconds and a read during the write gets the partial file, so retry up to 3 times, 1.2 s apart (one CHP backend also serves a stale cut-off copy for minutes at a time; the per-source last good covers that).
  const chpWhole = (x) => /<\/State>\s*$/.test(String(x));
  jobs.push({ name: 'chp-cad', run: async () => {
    let x = await getText(chpUrl(), 'chp');
    for (let k = 0; k < 3 && !chpWhole(x); k++) { await new Promise((r) => setTimeout(r, chpRetryMs())); x = await getText(chpUrl(), 'chp'); }
    if (!chpWhole(x)) throw new Error('chp: truncated feed');
    return parseChp(x, now);
  } });
  const res = await Promise.all(jobs.map(async (j) => {
    const t0 = Date.now();
    try {
      const items = await j.run();
      lastGood[j.name] = { items, at: Date.now() };
      return { j, items, s: { name: j.name, ok: true, ms: Date.now() - t0, count: items.length } };
    } catch (e) {
      const s = { name: j.name, ok: false, ms: Date.now() - t0, count: 0, error: String(e && e.message || e).slice(0, 120) };
      // per-source last good copy (≤ TRAFFIC_STALE_MS): one flaky feed doesn't blank its incidents; the source stays ok:false
      const lg = lastGood[j.name];
      if (lg && Date.now() - lg.at < staleMs()) return { j, items: lg.items, s: { ...s, count: lg.items.length, lastGoodAgeMs: Date.now() - lg.at } };
      return { j, items: [], s };
    }
  }));
  if (!res.some((r) => r.s.ok)) { const err = new Error('all traffic sources failed'); err.sources = res.map((r) => r.s); throw err; }
  const travelTimes = res.filter((r) => r.j.tt).flatMap((r) => r.items);
  const incidents = res.filter((r) => !r.j.tt).flatMap((r) => r.items)
    .sort((a, b) => b.sev - a.sev || (b.at || 0) - (a.at || 0)).slice(0, MAX_INC);
  return {
    source: 'caltrans-cwwp2+chp-cad', fetchedAt: Date.now(), sources: res.map((r) => r.s),
    corridors: summarize(incidents, travelTimes), incidents, travelTimes,
    note: 'Caltrans CWWP2 (lane closures, CMS, D12 travel times) + CHP CAD. No keyless speed/detector feed; level is derived from travel times and incidents.',
  };
}

const lastGood = {};
async function getTraffic() {
  const now = Date.now();
  if (cache && now - cache.at < cacheMs()) return { ...cache.body, cached: true, stale: false, ageMs: now - cache.at };
  if (!inflight) inflight = refresh().then((body) => { cache = { body, at: Date.now() }; return body; }).finally(() => { inflight = null; });
  try {
    const body = await inflight;
    return { ...body, cached: false, stale: false, ageMs: Date.now() - cache.at };
  } catch (e) {
    if (cache && Date.now() - cache.at < staleMs()) return { ...cache.body, cached: true, stale: true, ageMs: Date.now() - cache.at, error: String(e && e.message || e).slice(0, 80) };
    throw e;
  }
}

module.exports = async function handler(req, res) {
  if (R.preflight(req, res)) return;
  const sp = R.queryOf(req);
  for (const k of sp.keys()) return R.send(res, 400, { error: `unknown parameter: ${String(k).slice(0, 20)} (this endpoint takes none)` }, 'no-store');
  try {
    const body = await getTraffic();
    res.setHeader('X-Relay-Source', body.source);
    res.setHeader('X-Relay-Cache', body.cached ? 'HIT' : 'MISS');
    R.send(res, 200, body, body.stale ? 'no-store' : CDN);
  } catch (e) {
    R.send(res, 503, { error: 'traffic sources unavailable', sources: e.sources || [] }, 'no-store');
  }
};
Object.assign(module.exports, { parseLcs, parseCms, parseTt, parseChp, corridorOf, summarize, chpTime, stats, CORRIDORS, _reset: () => { cache = null; inflight = null; stats.upstreamRequests = 0; for (const k of Object.keys(lastGood)) delete lastGood[k]; } });
