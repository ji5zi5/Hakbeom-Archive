# Full Scenario Rewrite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace template-like generated story text with a coherent, author-written Hakbeom Archive Season 1 script that preserves the current VN engine contracts.

**Architecture:** Keep the existing modular scenario structure (`src/data/scenario/day*.js`, `endings.js`, `episodeInfo.js`) and rewrite prose in controlled batches. Add a reusable story-quality contract so future expansions fail when they reintroduce placeholder day labels, repeated generic helper lines, or unnatural Korean particles.

**Tech Stack:** Vite, React, ES modules, Node `assert` contract tests, existing scenario validator, existing `npm run test:story-lines` line-count script.

---

## File Structure

- Modify: `src/data/scenario/day4.js` — introduction of new cast and archive mystery.
- Modify: `src/data/scenario/day5.js` — route seed scenes and first pair conflicts.
- Modify: `src/data/scenario/day6.js` — common-route pressure day, remove repeated generated language.
- Modify: `src/data/scenario/day7.js` — escalation day, make beats distinct from Day 6.
- Modify: `src/data/scenario/day8.js` — pre-festival emotional turn, make beats distinct from Day 6/7.
- Modify: `src/data/scenario/day9.js` — route pressure, preserve route-specific voices.
- Modify: `src/data/scenario/day10.js` — route lock and confession-adjacent choice.
- Modify: `src/data/scenario/day11.js` through `day14.js` — locked-route payoff scenes.
- Modify: `src/data/scenario/endings.js` — terminal endings.
- Modify: `tests/ui-contract.test.mjs` — add story-quality regression patterns and route voice coverage.
- Modify: `docs/scenario-authoring.md` — add “no template prose” authoring rules.

---

### Task 1: Add Story Quality Regression Contracts

**Files:**
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Add a failing test for generated-template prose**

Add these assertions near the existing Korean-particle checks:

```js
assert.doesNotMatch(
  scenarioSource,
  /Day\s+\d+의 첫 단서|오늘은 네가 혼자 정리하지 않아도 돼|아직 안 끝났으니까|자기 방식으로 농담을 덧붙였다/,
  'Scenario prose should not contain template-generated route beat filler.'
);

assert.doesNotMatch(
  scenarioSource,
  /첫 단서가 되었다\. .*?말투로 .*?학범에게|가볍게 보이려 했지만, 학범을 걱정하는 마음만큼은 숨기지 못했다/,
  'Route scenes should be authored as specific moments, not generic generated templates.'
);
```

- [ ] **Step 2: Run test to verify current failure if any filler remains**

Run:

```bash
npm test
```

Expected: FAIL if any template fragments remain, PASS only after the rewrite removes them.

- [ ] **Step 3: Keep the test in place permanently**

Do not weaken these regexes unless a specific legitimate line requires it. If a false positive occurs, rewrite the prose instead of deleting the test.

---

### Task 2: Write the Scenario Bible Before Prose Changes

**Files:**
- Modify: `docs/scenario-authoring.md`
- Create or modify: `docs/story-expansion-plan.md`

- [ ] **Step 1: Add global story rules**

Add this rule block under `Longform Season 1 확장 규칙`:

```md
### Prose Quality Rules

- Do not generate day batches from a repeated sentence template.
- Every route scene must include a concrete action, object, and emotional turn.
- Avoid meta labels like `Day 6의 첫 단서` inside displayed dialogue/prose.
- Phone messages must sound like the sender, not like a generic status update.
- If two consecutive days reuse the same scene skeleton, rewrite one day around a different conflict.
```

- [ ] **Step 2: Add route voice anchors**

Add this compact matrix:

```md
| Route | Must include | Avoid |
| --- | --- | --- |
| 현겸 | 우산, 기다림, 조용한 확신 | 과한 플러팅 |
| 욱현 | 짧은 문장, 노트, 무표정한 관찰 | 장난기 많은 말투 |
| 재성 | 방송/마이크 비유, 능글거림 후 진심 | 무의미한 진행 멘트 |
| 상원 | 기록, 선택 증거, 통제욕 | 폭력적인 공포 연출 |
| 상욱 | 먼저 뛰기, 보호 본능, 당황 | 계산적인 말투 |
| 준혁 | 지도, 경로, 건조한 위로 | 감정 과잉 |
| 도훈 | 정보값, 장난, 숨은 의리 | 순한 위로만 반복 |
| 하음 | 숨, 박자, 기다림 | 사건 설명만 하는 대사 |
| 윤호 | 선배 호칭, 후배 자리, 조용한 질투 | 반말 고정 |
```

---

### Task 3: Rewrite Day 4–5 as the Human-Written Foundation

**Files:**
- Modify: `src/data/scenario/day4.js`
- Modify: `src/data/scenario/day5.js`

- [ ] **Step 1: Review scene IDs and transitions**

Run:

```bash
grep -n "id:" src/data/scenario/day4.js src/data/scenario/day5.js
```

Expected: identify all existing IDs without changing them, because downstream tests and route paths depend on IDs.

- [ ] **Step 2: Rewrite Day 4 prose around an archive incident**

Keep IDs, `nextId`, `rewards`, directives, and route flags unchanged. Replace generic introductions with this structure:

1. 학범 sees the “Hakbeom Archive” name on a misplaced file.
2. Each new character enters through an action, not a self-introduction.
3. The two 3-choice screens feel like choosing who to trust with evidence.
4. End on a missing original page.

- [ ] **Step 3: Rewrite Day 5 prose around six concrete locations**

Keep branch mechanics unchanged. Ensure each route seed has:

- a physical clue,
- a character-specific reaction,
- one emotionally loaded choice,
- a phone or after-scene line that cannot be swapped with another route.

- [ ] **Step 4: Run validation**

```bash
npm test
```

Expected: PASS.

---

### Task 4: Rewrite Day 6–8 as Three Different Story Days

**Files:**
- Modify: `src/data/scenario/day6.js`
- Modify: `src/data/scenario/day7.js`
- Modify: `src/data/scenario/day8.js`

- [ ] **Step 1: Give each day a distinct dramatic job**

Use this mapping:

- Day 6: aftermath and evidence sorting; characters notice 학범 is tired.
- Day 7: contradiction day; clues disagree and characters clash.
- Day 8: festival-eve emotional turn; each route asks for a personal commitment.

- [ ] **Step 2: Remove any remaining batch-template phrasing**

Search:

```bash
grep -RIn "Day [0-9].*첫 단서\|혼자 정리하지\|아직 안 끝났으니까\|자기 방식으로 농담" src/data/scenario
```

Expected: no matches.

- [ ] **Step 3: Rewrite phone messages per character**

For every Day 6–8 route phone, the last message must use route voice:

- 현겸: waits with umbrella.
- 욱현: short note/read receipt.
- 재성: broadcast/playful voice.
- 상원: records choice.
- 상욱: will run first.
- 준혁: asks for location/path.
- 도훈: jokes about information fee.
- 하음: asks for breath/tempo.
- 윤호: uses `선배`.

- [ ] **Step 4: Run validation and line count**

```bash
npm test
npm run test:story-lines
```

Expected: PASS and at least `10000 total` scenario source lines.

---

### Task 5: Rewrite Day 9–10 Route Pressure and Route Lock

**Files:**
- Modify: `src/data/scenario/day9.js`
- Modify: `src/data/scenario/day10.js`

- [ ] **Step 1: Preserve route-lock mechanics**

Do not change these mechanics:

- `route_lock_<id>` reward flags.
- Day 10 3x3 choice grouping.
- `day10-closing` -> `day11-chapter-card`.
- `episodeInfo.endingRules` route lock priority.

- [ ] **Step 2: Rewrite Day 9 around conflict pressure**

Each route should answer: “What does this character fear losing if 학범 chooses someone else?”

- [ ] **Step 3: Rewrite Day 10 around an actual choice moment**

Each selected route line should feel like 학범 making an emotional commitment, not just picking a name.

- [ ] **Step 4: Run route-lock tests**

```bash
npm test
```

Expected: PASS.

---

### Task 6: Rewrite Day 11–14 Locked Route Payoffs

**Files:**
- Modify: `src/data/scenario/day11.js`
- Modify: `src/data/scenario/day12.js`
- Modify: `src/data/scenario/day13.js`
- Modify: `src/data/scenario/day14.js`

- [ ] **Step 1: Preserve route gates**

Do not change:

- `day11-route-gate` through `day14-route-gate`.
- `endingGate: true`.
- `routeGate: true`.
- `endingNext` route IDs.

- [ ] **Step 2: Give each route a four-day mini-arc**

Use this structure:

- Day 11: route confirms why 학범 chose this person.
- Day 12: rehearsal/cooperation scene exposes vulnerability.
- Day 13: crisis scene forces the character to act against their weakness.
- Day 14: confession/payoff resolves route motif.

- [ ] **Step 3: Rewrite terminal transitions**

Ensure Day 14 route final line naturally leads into `ending-promise` or route terminal endings.

- [ ] **Step 4: Run replay/validator tests**

```bash
npm test
npm run build
```

Expected: PASS.

---

### Task 7: Rewrite Endings as Distinct Route Endings

**Files:**
- Modify: `src/data/scenario/endings.js`

- [ ] **Step 1: Check current terminal IDs**

Run:

```bash
grep -n "terminal" src/data/scenario/endings.js
```

Expected: all route endings remain terminal.

- [ ] **Step 2: Rewrite each ending with route motif closure**

Each ending must include:

- a concrete location/object from the route,
- a sentence only that character would say,
- a final choice by 학범.

- [ ] **Step 3: Run full validation**

```bash
npm test
npm run test:story-lines
npm run build
git diff --check
```

Expected: all pass.

---

### Task 8: Final Quality Sweep

**Files:**
- Modify as needed: `src/data/scenario/*.js`
- Modify as needed: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Search for known bad prose patterns**

```bash
grep -RIn "Day [0-9].*첫 단서\|혼자 정리하지\|아직 안 끝났으니까\|자기 방식으로 농담\|가볍게 보이려 했지만\|말투로 .* 말했다" src/data/scenario || true
```

Expected: no matches.

- [ ] **Step 2: Search for known particle issues**

```bash
grep -RIn "리본가\|리본를\|리본는\|호출음가\|호출음를\|실밥가\|실밥를\|12분가\|12분를\|박자을\|박자은\|명단가\|명단를\|명단는\|종이을\|노트은\|노트을\|신호은\|복도은\|지도은\|장난기이\|장난기은\|온기이\|온기은\|논리이\|논리은\|의리이\|의리은\|윤호아" src/data/scenario || true
```

Expected: no matches.

- [ ] **Step 3: Run final gates**

```bash
npm test
npm run test:story-lines
npm run build
git diff --check
```

Expected: all pass; `npm run test:story-lines` reports at least 10,000 lines.

---

## Self-Review

- Spec coverage: Covers quality gates, docs, all story day modules, route locks, endings, and final verification.
- Placeholder scan: No `TODO`, `TBD`, or “similar to” implementation placeholders remain.
- Type consistency: Uses existing file paths and existing test commands only.
- Risk: This is a large prose rewrite. Preserve IDs, rewards, route gates, and `nextId` links first; rewrite text second.
