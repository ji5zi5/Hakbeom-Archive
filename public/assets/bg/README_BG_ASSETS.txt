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
