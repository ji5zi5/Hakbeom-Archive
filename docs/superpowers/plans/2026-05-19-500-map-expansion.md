# 500-Map Background Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand Hakbeom Archive from a small reused VN background set into a 500-map/location pool that supports a much longer dating-sim story without obvious repetition.

**Architecture:** Story demand drives background production, not the other way around. Build a catalog of 500 direct-generated map/background targets, split image generation into five parallel lanes, then import only assets with direct agent-sprite-forge/generate2dmap provenance. No `derivedFrom`, tint-only, SVG, or flat-color placeholder backgrounds are accepted.

**Tech Stack:** Vite + React VN, ES module scenario data, `agent-sprite-forge/generate2dmap`, `image_gen`, PNG assets under `public/assets/bg/`, Node `assert` contract tests.

---

## Scope and success criteria

- “맵” means VN background/location assets: school rooms, corridors, route rooms, festival spaces, streets, weather/time variants, CG-like empty locations, and transition cards.
- The next execution phase must not generate 500 images blindly. It first creates a scene-to-background demand map, then generates in batches of 50.
- Final production target: 500 direct PNG backgrounds at 1129×524, each with `.prompt.txt` and manifest `sourceGeneratedImage`.
- At least 350 backgrounds should be referenced by Season 1/route story scenes; the rest may be reserved in a documented catalog for planned future scenes.
- Temporary Day 6–9 derived backgrounds stay deleted. The available cancelled direct-generation outputs are recovered as 34 accepted route backgrounds; `day9-haeum-rumor` and `day9-yunho-rumor` remain in the future generation backlog.

## Five parallel generation lanes

1. **Lane A — Common school life (100 assets):** gates, halls, classrooms, cafeteria, infirmary, staff-room-adjacent spaces, empty classrooms, morning/evening/rain variants.
2. **Lane B — Existing core routes (100 assets):** 현겸/욱현/재성 route rooms, library/broadcast/study/date spaces, promise locations, jealousy/reconciliation variants.
3. **Lane C — New route block 1 (100 assets):** 상원/상욱/준혁 focused archive, council, gym, map-room, corridor, training, and strategy spaces.
4. **Lane D — New route block 2 (100 assets):** 도훈/하음/윤호 focused convenience store, music room, rooftop, after-school streets, senior-junior spaces.
5. **Lane E — Event/endgame/specials (100 assets):** culture festival, confession stages, rain nights, phone/SNS background plates, CG-like empty scene plates, ending variants.

Each lane owns unique filenames and prompt themes to prevent merge conflicts. Lanes may run image generation in parallel, but integration happens batch-by-batch after QA.

## Asset naming rules

- Common: `common-<location>-<time>-<mood>.png`, e.g. `common-classroom-morning-soft.png`.
- Route: `route-<routeId>-<location>-<beat>.png`, e.g. `route-yunho-rooftop-after-rain.png`.
- Event: `event-<arc>-<location>-<beat>.png`, e.g. `event-festival-stage-confession-bluehour.png`.
- Day-specific names such as `day6-<route>-study.png` are allowed only when the story truly needs a day-locked shot.
- Every prompt must include: “visual novel background, Blue Archive-inspired clean anime background, no characters, no UI, no text, 1129x524 composition”.

## Target distribution

| Category | Count | Purpose |
| --- | ---: | --- |
| Common school/common route | 100 | Prevent early-story repetition and support free-action hubs. |
| Nine route-specific daily spaces | 180 | 20 per route for relationship beats, jealousy, dates, reconciliation. |
| Festival/rehearsal/endgame | 90 | Day 8–14 payoff, confession, route-lock scenes. |
| City/after-school locations | 60 | Convenience store, streets, bus stop, cafe-like spaces, night walk scenes. |
| Phone/SNS/transition/CG-like empty plates | 40 | Break up dialogue walls and support gallery/recollection. |
| Weather/time/mood alternates | 30 | Rain, night, blue-hour, sunset, quiet morning variants. |

Total: 500.

## Task 1: Replace image-first planning with story-demand planning

**Files:**
- Create: `docs/assets/500-map-background-catalog.md`
- Modify: `docs/story-expansion-plan.md`

- [ ] List every existing Day 1–14 chapter, route, and free-action hub.
- [ ] For each story beat, assign one of these map roles: `required-now`, `route-payoff`, `event-payoff`, `reserve`.
- [ ] Write `docs/assets/500-map-background-catalog.md` with columns: `id`, `lane`, `route`, `chapterRange`, `location`, `time`, `mood`, `storyUse`, `filename`, `promptSummary`, `status`.
- [ ] Mark the first 50 assets as Batch 01 and make sure they cover active scenario references before reserve art.
- [ ] Commit catalog planning before any image generation.

## Task 2: Add catalog and manifest validation

**Files:**
- Create: `scripts/check-background-catalog.mjs`
- Modify: `tests/ui-contract.test.mjs`
- Modify: `package.json`

- [ ] Add a Node script that reads `docs/assets/500-map-background-catalog.md` and checks that every non-header row has exactly 11 columns.
- [ ] The script should fail if any `status=accepted` row points to a missing PNG or missing `.prompt.txt`.
- [ ] The script should fail if `agent-sprite-forge-manifest.json` contains `derivedFrom`.
- [ ] Add `npm run test:background-catalog` to package scripts.
- [ ] Add a contract assertion that the catalog exists before the 500-map execution branch starts.

## Task 3: Run five image-generation lanes in batches of 10 per lane

**Files:**
- Create/modify: `public/assets/bg/*.png`
- Create/modify: `public/assets/bg/*.prompt.txt`
- Modify: `public/assets/bg/agent-sprite-forge-manifest.json`
- Modify: `docs/assets/500-map-background-catalog.md`

- [ ] For Batch 01, each lane generates 10 direct backgrounds with agent-sprite-forge/generate2dmap or the repo-local `image_gen` flow.
- [ ] Copy each accepted PNG into `public/assets/bg/` at 1129×524.
- [ ] Save the exact prompt beside it as `<filename>.prompt.txt`.
- [ ] Add manifest entries with `id`, `tool`, `sourceGeneratedImage`, `outputPath`, `promptPath`, `width`, `height`, `sha256`, and `storyUse`.
- [ ] Reject and regenerate any image with characters, UI, text, unreadable artifacts, wrong aspect ratio, or style mismatch.

## Task 4: Integrate only accepted Batch 01 backgrounds into story

**Files:**
- Modify: `src/data/scenario/day*.js`
- Modify: `src/data/scenario/longformDatingExpansion.js`
- Modify: `docs/scenario-authoring.md`

- [ ] Replace repeated base-background BCGs only when the replacement asset is `accepted` in the catalog.
- [ ] Each integrated scene must become more dialogue-driven, not just receive a new image path.
- [ ] Keep 1/2/3-choice UI limits and existing route-lock graph intact.
- [ ] Add route memory variants when a new map represents a prior player action.
- [ ] Update authoring docs with any new location naming pattern introduced by Batch 01.

## Task 5: QA, commit, and repeat through 10 batches

**Files:**
- Modify: `tests/ui-contract.test.mjs`
- Modify: `docs/assets/500-map-background-catalog.md`
- Modify: `docs/story-expansion-plan.md`

- [ ] Run `npm run test:background-catalog`.
- [ ] Run `npm test`.
- [ ] Run `npm run test:story-lines`.
- [ ] Run `npm run build`.
- [ ] Run `npm audit --audit-level=moderate`.
- [ ] Run VN smoke QA with `VN_QA_BASE_URL=http://127.0.0.1:5175 npm run qa:vn` after starting Vite on port 5175.
- [ ] Commit each batch with a Lore commit message and `Tested:` trailers.
- [ ] Repeat Tasks 3–5 until the catalog has 500 accepted direct backgrounds.

## Stop condition

Stop only when one of these is true:

1. The current requested planning/deletion pass is committed and pushed.
2. A future execution batch has accepted, integrated, tested, and pushed its planned 50 direct backgrounds.
3. Image generation is blocked by tool failure; in that case, leave the catalog and tests intact and report the exact blocker.
