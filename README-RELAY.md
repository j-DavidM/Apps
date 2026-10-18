# ADS-B relay on Vercel (for j-DavidM/Apps)

GitHub Pages can't read live ADS-B: adsb.fi and adsb.lol send no CORS header, airplanes.live returns 403, and OpenSky only allows its own origin.
These two Vercel serverless functions fetch the data server-side, cache it, and return it with CORS headers for David's sites only.
The same repo keeps serving every app folder statically, on GitHub Pages and on Vercel.

## Files to add to the repo root (layout = repo root)
| Path | What it is |
|---|---|
| `api/lax.js` | `GET /api/lax`: LAX feed, same JSON as lax-flights `server.mjs` |
| `api/adsb.js` | `GET /api/adsb`: any point or box (Lofi Airports, future apps) |
| `api/_lib/relay.js` | shared logic (upstreams, cache, CORS, shape conversion). `_` folder = not a route |
| `vercel.json` | `maxDuration: 30` s for `api/*.js` (worst case 4 × 6 s timeouts) |
| `.vercelignore` | keeps `test/`, `shots/` and `PROGRESS.md` out of deployments |
| `lax-ramp/index.html` | **replaces** the current file: LAX Ramp single file with the relay feed order (RELAY_BASE placeholder) |
| `README-RELAY.md` | this file (optional) |

Not for the repo: `test/`, `shots/`, `PROGRESS.md`, `LOFI-PATCH.md`, `lofi-patch/`. They're the local harness, tests and evidence.
No `package.json` is needed. The functions are dependency-free CommonJS on Node 18+ (`fetch` is built in), and the repo root stays a plain static site.

## Endpoints
All endpoints are GET only. They answer OPTIONS with 204 and return 405 for other methods.
Successful answers carry `Cache-Control: s-maxage=8, stale-while-revalidate=30` and `Vary: Origin`, plus `X-Relay-Source` and `X-Relay-Cache: HIT|MISS`.
Errors carry `no-store`.

**`GET /api/lax`** takes no parameters (any are ignored) and returns
`{ source, fetchedAt, ageMs, cached, stale, count, ac: [adsb-v2 objects], tried }`, the same as `server.mjs`.
- Area: 80 nm point query around KLAX, trimmed to the app's box (33.2–34.5 N, 119.0–117.5 W).
- If every source fails, the last good snapshot is served marked `stale:true` for up to 60 s. After that it returns
  503 `{ error, tried }`, and the app shows SIM.

**`GET /api/adsb`**
- Circle: `lat` (−85..85), `lon` (−180..180), `radius` in nm (optional, default 40, clamped to 1..60).
- Or an OpenSky-style box: `lamin, lomin, lamax, lomax`. Each half-side is clamped to ≤ 60 nm, and the antimeridian isn't supported.
- `format=adsb` (default) returns `{ source, fetchedAt, ageMs, cached, stale, count, query, ac:[…], tried }`.
- `format=opensky` returns `{ time, states:[OpenSky extended 18-field rows], …same meta }`. This is the shape Lofi's
  `parseStates` / `parseTraffic` read unchanged.
- `extended=0|1` is accepted and ignored, so an OpenSky query string can be passed through as is.
- **400** for an unknown parameter (e.g. `url=`), a repeated parameter, a non-decimal number (`1e3`, `0x22`, `NaN`), an
  out-of-range lat/lon, circle and box mixed, or an inverted box.
- Coordinates are quantized to 0.01° (about 1 km), so nearby requests share one cache entry. The cache holds at most 64 areas.
- An area with no traffic returns 200 `count:0`, but only after every source was asked.

**Upstream order:** adsb.fi → adsb.lol → airplanes.live → OpenSky (anonymous). Each source gets a 6 s timeout, and an empty or
failed answer falls through to the next. There's an 8 s in-memory cache per instance, concurrent requests are coalesced, and the
Vercel CDN absorbs the rest. Requests carry `User-Agent: j-davidm-apps-adsb-relay/1.0 (+https://j-davidm.github.io/Apps/; …)`.
Upstream URLs are built only from validated numbers, so no caller-supplied URL is ever fetched and redirects are refused. No API keys are used.

**CORS** (allowlist in `api/_lib/relay.js`, env read on every request):
- Always allowed: `https://j-davidm.github.io`, and `http://localhost[:port]` / `http://127.0.0.1[:port]`.
- Always allowed: the deployment's own origins, built from Vercel's system env vars `VERCEL_URL`, `VERCEL_BRANCH_URL` and
  `VERCEL_PROJECT_PRODUCTION_URL`. Vercel sets these automatically, so same-origin `/lax-ramp/` works with no setup.
- Optional, from `RELAY_ALLOWED_ORIGINS`: exact origins, plus **one** wildcard pattern for the project's preview URLs (see below).
- **Every other origin gets 403 with no ACAO**. That includes anyone else's `*.vercel.app` site and `null` (`file://`), so other
  people's sites can't spend David's quota.
- Requests without an `Origin` (same-origin GETs, curl) are answered normally. A server-side caller can always do that;
  CORS only stops other people's *web pages* from using the relay.

## Vercel import (David, one time)
1. Go to https://vercel.com/signup → **Continue with GitHub** → authorize Vercel. That creates a free **Hobby** account.
2. **Add New… → Project** → under "Import Git Repository" pick **j-DavidM/Apps**. If it isn't listed, choose "Adjust GitHub App
   Permissions" and grant that repo.
3. Configure:
   - **Project Name**: e.g. `apps` (this decides the URL: `https://apps.vercel.app` if free, otherwise something like
     `apps-xyz.vercel.app`).
   - **Framework Preset: Other**.
   - **Root Directory**: `./`.
   - Build & Output Settings: **Build Command** = override → empty; **Output Directory** = override → `.` (the repo root);
     **Install Command** = override → empty.
   - No environment variables are needed for the first deploy.
4. **Deploy.** Then check:
   - `https://<project>.vercel.app/api/lax` → JSON with `count` > 0.
   - `https://<project>.vercel.app/lax-ramp/` → the badge says `LIVE · adsb.fi`. This is the same-origin path, which needs no RELAY_BASE.
5. Every push to `main` redeploys automatically. GitHub Pages keeps working unchanged.
6. **Optional, after the import: `RELAY_ALLOWED_ORIGINS`.** Skip this if only github.io and the project's own URLs need
   the relay; those work without it. Set it to let *other* preview deployments or a custom domain call the relay:
   - Vercel → the project → **Settings → Environment Variables** → **Add**.
   - Key: `RELAY_ALLOWED_ORIGINS`.
   - Value: comma-separated; for example
     `https://apps-*-j-davidms-projects.vercel.app, https://apps.example.com`.
   - Environments: Production + Preview → **Save**.
   - Then **Deployments → ⋯ → Redeploy**. Env changes only apply to new deployments.
   - Rules:
     - Exact origins are `scheme://host[:port]` with no path; case and a trailing `/` are ignored.
     - At most one wildcard, which must contain exactly one `*`. The `*` matches one or more of `a-z 0-9 -` inside a single
       DNS label and never crosses a dot.
     - Use the team-suffixed preview pattern Vercel shows on a preview deployment (`<project>-<hash>-<team-slug>.vercel.app`),
       e.g. `https://apps-*-j-davidms-projects.vercel.app`; copy the exact team slug from a preview URL.
     - Patterns that would reopen everything (`https://*.vercel.app`, a bare `*`) are ignored, as is any second wildcard.

**Hobby limits (Vercel docs, checked 2026-10-17):**
- 1,000,000 function invocations, 4 active-CPU-hours, 360 GB-hrs memory, 1M CDN requests, 100 GB transfer per month.
- Function max duration is 300 s; we cap it at 30 s.
- Hobby is personal / non-commercial only, which fits.

Rough load: with the CDN caching 8 s per URL+Origin, one LAX viewer polling every 10 s costs at most 1 invocation per 8 s per
region. Even 24/7 that's about 324k/month. Many viewers share the same cached answer, and active CPU per call is milliseconds
(waiting on the upstream isn't billed as CPU). If a limit is ever hit, Hobby pauses the feature until the 30-day window resets.
The apps then show SIM, and nothing is billed.

## Set RELAY_BASE once the URL is known
- **LAX Ramp on GitHub Pages:** `lax-ramp/index.html` contains the literal `https://apps-REPLACE.vercel.app` exactly once.
  Replace it in the built file, no rebuild needed:
  `sed -i 's#https://apps-REPLACE\.vercel\.app#https://<project>.vercel.app#' lax-ramp/index.html`.
  The source line is in `/workspace/lax-flights-relay/src/feed.ts`, the `CONFIG: Vercel relay` block
  (`export const RELAY_BASE = …`); change it there too for future builds (`npm run build:single`).
- No edit is needed to test: open `https://j-davidm.github.io/Apps/lax-ramp/?relay=https://<project>.vercel.app`.
- **Lofi Airports:** see `LOFI-PATCH.md`. Same placeholder, replaced in 2 spots in `src/live.ts`.

LAX feed order in the new single file:
1. `?feed=` (or `window.LAX_FEED_URL`)
2. `?relay=`
3. same-origin `/api/lax`, when not on github.io or `file:` (i.e. on Vercel or the local `server.mjs`)
4. `RELAY_BASE`, on github.io, if not the placeholder
5. the Vite-dev per-host proxies
6. last good snapshot
7. SIM, with an honest banner. With the placeholder on github.io it reads "no live relay is configured for this page yet".

## Known limits / risks
- **Datacenter IPs:** the upstreams may treat Vercel's AWS IPs differently from this box. From the box, airplanes.live returns
  403 and adsb.lol sometimes timed out; adsb.fi answered every LAX call. If adsb.fi rate-limits Vercel (it publishes about
  1 req/s), the chain falls through and the CDN cache keeps the call rate low. Check `tried` in `/api/lax` after deploying.
- The function region defaults to `iad1` (US East), which adds ~70 ms to US-West upstream round trips; that doesn't matter at 10 s polling.
- The in-memory cache is per instance; the CDN does the real fan-in.
- The `file://` single file + `?feed=<relay>` doesn't work against the relay, because `Origin: null` is refused by design.
  It still works against the local `server.mjs` (CORS `*`).

## Local testing (no Vercel login)
`npx vercel dev` needs a login, so `test/harness.mjs` stands in. It routes `/api/<name>` → `api/<name>.js` like Vercel and
serves everything else statically from the root.
- `PORT=3999 node test/harness.mjs`
- `node test/api.test.mjs` → `test/results-api.json` (real upstreams + mocked failover)
- `RELAY_CACHE_MS=300 RELAY_STALE_MS=1500 node test/stale.test.mjs`
- `node test/browser.test.mjs` → `test/results-browser.json`. Needs the harness on :3999 and
  `python3 -m http.server 4300 --bind 0.0.0.0` in this folder.
