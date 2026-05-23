# VN Background Asset Bundle

These are project-native visual novel backgrounds tracked as baked raster PNG assets.

Source workflow:
- GitHub tool: https://github.com/0x0funky/agent-sprite-forge
- Installed in this repo at `.codex/skills/generate2dmap` and `.codex/skills/generate2dsprite`.
- Source commit: `fff651a89223b044ccfc0b75ed9f3754c6d739b1`.
- Visual source: built-in image generation, then project-local PNG import.
- generate2dmap axes: `baked_scene_mode` + `baked_raster` + `runtime_object_model: none` + `collision_model: none` + `engine_target: project-native`.

Runtime usage:
- Scenario BCG directives should reference `/assets/bg/<name>.png`.
- Every accepted background must keep a neighboring `/assets/bg/<name>.prompt.txt` prompt record.
- `agent-sprite-forge-manifest.json` records the original `$CODEX_HOME/generated_images/...` source file, output dimensions, byte size, and SHA-256 for each imported PNG.
- Do not add SVG background art for VN scenes; use PNG raster outputs from the installed Forge workflow.

Batch 1 Season 1 longform additions:
- `archive-club-room-evening.png` — Day 4 archive club room / student records hub.
- `school-courtyard-blue-hour.png` — Day 4 courtyard breathing-space beat after rain.
- `gym-corridor-evening.png` — Day 4 sports/gym corridor introduction for 상욱.
- music-room-late-afternoon.png — generated via image_gen, 1129x524, prompt/provenance recorded.
- convenience-store-night.png — generated via image_gen, 1129x524, prompt/provenance recorded.
- rooftop-after-rain.png — generated via image_gen, 1129x524, prompt/provenance recorded.

Longform dating-sim expansion pass:
- The cancelled direct-generation batch was recovered from `$CODEX_HOME/generated_images` and imported as 36 Day 6–9 route-specific PNG backgrounds.
- These files are direct generated sources, not `derivedFrom`/tint-only variants. Each accepted image keeps a `.prompt.txt` and manifest `sourceGeneratedImage`, dimensions, SHA-256, byte size, and intended scene use.
- The previously missing direct `day9-haeum-rumor` and `day9-yunho-rumor` assets are restored as direct generated PNGs with prompt sidecars, manifest `sourceGeneratedImage`, route binding, and no `derivedFrom` provenance.

Route-depth 2026-05 route-bound provenance catalog:
- Core routes 현겸/욱현/재성 use direct route-bound `day6-<route>-study.png`, `day7-<route>-rain.png`, `day8-<route>-festival.png`, `day9-<route>-rumor.png`, `day11-<route>-morning.png`, and `day13-<route>-truth.png` backgrounds.
- Club routes 상원/상욱/준혁 use the same six direct route-bound day/beat filename pattern.
- After-school routes 도훈/하음/윤호 use the same six direct route-bound day/beat filename pattern, including restored direct `day9-haeum-rumor.png` and `day9-yunho-rumor.png`.
- Every route-depth entry is bound in `agent-sprite-forge-manifest.json` with `routeId`, `expansionBatch: route-depth-2026-05`, `sourceGeneratedImage`, dimensions, SHA-256, byte size, prompt sidecar, and no `derivedFrom` provenance.
