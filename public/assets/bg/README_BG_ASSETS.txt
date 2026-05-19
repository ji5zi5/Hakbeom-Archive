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

Route-depth 2026-05 cohort C provenance:
- `day6-dohun-study.png`, `day7-dohun-rain.png`, `day8-dohun-festival.png`, `day9-dohun-rumor.png`, `day11-dohun-morning.png`, `day13-dohun-truth.png` are direct route-bound 도훈 backgrounds.
- `day6-haeum-study.png`, `day7-haeum-rain.png`, `day8-haeum-festival.png`, `day9-haeum-rumor.png`, `day11-haeum-morning.png`, `day13-haeum-truth.png` are direct route-bound 하음 backgrounds.
- `day6-yunho-study.png`, `day7-yunho-rain.png`, `day8-yunho-festival.png`, `day9-yunho-rumor.png`, `day11-yunho-morning.png`, `day13-yunho-truth.png` are direct route-bound 윤호 backgrounds.
- These entries are bound in `agent-sprite-forge-manifest.json` with `routeId` and `expansionBatch: route-depth-2026-05` and remain direct raster imports, not derived or placeholder art.
