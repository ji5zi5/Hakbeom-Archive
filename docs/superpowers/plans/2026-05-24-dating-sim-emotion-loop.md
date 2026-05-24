# Dating-Sim Emotion Loop Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add reply-driven date memory and a compact planner modal so Day 1-3 feels more like a real dating sim.

**Architecture:** Extend `mapOpeningFactory` to generate phone replies/rewards and next-day text variants without new persisted state. Add a read-only `PlanModal` in `BAVisualNovel.jsx` that derives schedule entries from explicit `planVisit` metadata stored in existing `gameState.choices` reward history and route interest from existing affection values.

**Tech Stack:** Vite, React function components/hooks, existing scenario data factory, Node `assert` contract tests, Playwright VN QA script.

---

### Task 1: Contract tests first

**Files:**
- Modify: `tests/ui-contract.test.mjs`
- Modify: `scripts/qa-vn-flow.mjs`

- [ ] Add assertions that Day 1-3 generated night phone scenes have exactly three replies, matching rewards and next arrays.
- [ ] Add assertions that generated phone reply flags are `*_phone_dayN_*_reply`, do not include route lock/seed/legacy aliases, and opening max affection remains below `routeLockThreshold`.
- [ ] Add assertions that Day 2-3 first-location scenes include variants keyed to previous-day reply flags.
- [ ] Add source assertions that the game button cluster includes `PLAN`, the component owns `planOpen`, renders `PlanModal`, and derives planner entries from `gameState.choices`.
- [ ] Add VN QA smoke that opens `PLAN`, verifies planner content, then closes it.
- [ ] Run `npm test` and confirm it fails on missing planner/reply behavior.

### Task 2: Scenario emotion loop

**Files:**
- Modify: `src/data/scenario/mapOpeningFactory.js`

- [ ] Add route-aware phone reply text/reward helpers.
- [ ] Update `nightScene()` to include three replies, three rewards, and three `next` targets pointing to the existing `finalNextId`.
- [ ] Update `firstScene()` so Day 2-3 scenes include previous-day reply variants.
- [ ] Keep all generated IDs and static mapChoice record counts stable.
- [ ] Run `npm test` and confirm scenario contract failures are resolved or reduced to UI planner failures.

### Task 3: Planner modal UI

**Files:**
- Modify: `src/components/BAVisualNovel.jsx`
- Modify: `src/styles.css`

- [ ] Add `planOpen` modal state and close behavior alongside status/gallery/save-load.
- [ ] Add `PLAN` to `.game-system-buttons`.
- [ ] Add `resolvePlannerEntries()` and `resolvePlannerSuggestions()` helpers.
- [ ] Add `PlanModal` rendering current chapter, recent place schedule, and route-interest suggestions.
- [ ] Style the planner modal with existing BA modal visual language.
- [ ] Run `npm test` and confirm contracts pass.

### Task 4: Verification and finish

**Files:**
- Verify all touched files.

- [ ] Run `git diff --check`.
- [ ] Run `npm test`.
- [ ] Run `npm run build`.
- [ ] Run `npm run qa:vn` with local Vite server if needed.
- [ ] Commit with Lore protocol and push.
