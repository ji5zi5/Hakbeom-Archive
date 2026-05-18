# Cultural Festival Story Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Keep the friend's new culture-festival romance direction, but repair the broken scenario graph and clean only the awkward/duplicated Korean phrasing.

**Architecture:** Do not revert the culture-festival rewrite and do not reintroduce the archive-mystery framing as the main plot. Make the new Day 2 culture-festival scenes reachable by connecting them into the existing Day 2 flow, add regression tests for the broken reachability and known awkward phrases, then apply small copy edits in Day 9–10. Preserve existing uncommitted UI/QA changes unless the user explicitly asks to handle them.

**Tech Stack:** Vite, React 18, modular scenario files under `src/data/scenario/`, Node `assert` contract tests in `tests/ui-contract.test.mjs`.

---

## Current Evidence / Constraints

- `npm test` currently fails because these Day 2 scenes are non-preview and unreachable:
  - `day2-moe-hyeongyeom-lunch-side`
  - `day2-moe-sangwon-pen-line`
  - `day2-moe-jaeseong-preview`
  - `day2-festival-briefing`
  - `day2-sangwon-forms`
  - `day2-ukhyun-library-request`
  - `day2-jaeseong-broadcast-invite`
  - `day2-sanguk-gym-poster`
  - `day2-junhyeok-map-note`
  - `day2-dohun-coupon`
  - `day2-haeum-performance-list`
  - `day2-yunho-rooftop-wait`
- Known awkward strings found by grep:
  - `축제 준비 문화제 준비 채팅방이 준비 기록처럼 울렸다.`
  - `학범은 재성의 농담이 어디에서 멈추는지 처음으로 들었다. 스피커 잡음 너머에는 마음보다 먼저 숨긴 마음이 있었다.`
  - `학범은 하음 곁에서 처음으로 서두르지 않는 마음 확인를 했다. 누가 먼저 고백할지는 아직 흐렸지만, 둘의 호흡은 틀린 마디를 다시 찾고 있었다.`
  - `상욱과 준비 장소을 다시 달린다.`
- Current working tree already has unrelated local edits in `scripts/qa-vn-flow.mjs`, `src/components/BAVisualNovel.jsx`, `src/styles.css`, and `tests/ui-contract.test.mjs`. Do not overwrite those changes. If this plan edits `tests/ui-contract.test.mjs`, patch around the current contents and verify the pre-existing diff stays intact.

## Files

- Modify `tests/ui-contract.test.mjs` — add focused regression tests for the Day 2 culture-festival scene chain and awkward phrase blacklist.
- Modify `src/data/scenario/day2.js` — connect the new Day 2 culture-festival scenes into normal flow and make the transition back to the existing Day 2 free-action hub natural.
- Modify `src/data/scenario/day9.js` — fix duplicated/awkward Korean copy while preserving the culture-festival romance direction.
- Modify `src/data/scenario/day10.js` — fix the single awkward Day 10 route-lock choice wording.
- Do not modify `src/components/BAVisualNovel.jsx`, `src/styles.css`, or `scripts/qa-vn-flow.mjs` in this cleanup pass.

## Non-Goals

- Do not rewrite Day 4–14 again.
- Do not remove the culture-festival direction.
- Do not add assets, backgrounds, dependencies, or UI layout changes.
- Do not change route-lock logic unless a validation error proves it is required.

## Task 1: Add Regression Tests for Reachability and Awkward Copy

**Files:**
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Inspect current local test diff before editing**

Run:

```bash
git diff -- tests/ui-contract.test.mjs | sed -n '1,240p'
```

Expected: existing local edits are visible. Do not revert or reformat unrelated test changes.

- [ ] **Step 2: Add Day 2 culture-festival chain test**

Insert this after the existing Day 2 free-action / early route branch assertions, before the broader Day 4/Day 5 longform assertions.

```js
const day2FestivalChain = [
  'day2-moe-hyeongyeom-lunch-side',
  'day2-moe-sangwon-pen-line',
  'day2-moe-jaeseong-preview',
  'day2-festival-briefing',
  'day2-sangwon-forms',
  'day2-ukhyun-library-request',
  'day2-jaeseong-broadcast-invite',
  'day2-sanguk-gym-poster',
  'day2-junhyeok-map-note',
  'day2-dohun-coupon',
  'day2-haeum-performance-list',
  'day2-yunho-rooftop-wait'
];
assert.equal(
  scenario.find((item) => item.id === 'day2-hallway')?.nextId,
  day2FestivalChain[0],
  'Day 2 hallway should enter the culture-festival romance setup instead of leaving those scenes unreachable.'
);
for (let index = 0; index < day2FestivalChain.length - 1; index += 1) {
  const scene = scenario.find((item) => item.id === day2FestivalChain[index]);
  assert.equal(
    scene?.nextId,
    day2FestivalChain[index + 1],
    `${day2FestivalChain[index]} should continue to ${day2FestivalChain[index + 1]}.`
  );
}
assert.equal(
  scenario.find((item) => item.id === 'day2-yunho-rooftop-wait')?.nextId,
  'day2-lunch-note',
  'Day 2 culture-festival setup should return to the existing Day 2 free-action hub setup.'
);
```

- [ ] **Step 3: Add awkward phrase blacklist test**

Insert this near other scenario source/text contract assertions.

```js
for (const awkwardPhrase of [
  '축제 준비 문화제 준비 채팅방이 준비 기록처럼 울렸다.',
  '마음보다 먼저 숨긴 마음이 있었다.',
  '서두르지 않는 마음 확인를 했다.',
  '상욱과 준비 장소을 다시 달린다.'
]) {
  assert.doesNotMatch(
    scenarioSource,
    new RegExp(awkwardPhrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Scenario copy should not contain awkward phrase: ${awkwardPhrase}`
  );
}
```

- [ ] **Step 4: Run RED test**

Run:

```bash
npm test
```

Expected: FAIL. The most likely failure should be the new assertion that `day2-hallway` does not yet point to `day2-moe-hyeongyeom-lunch-side`, or the awkward phrase blacklist.

## Task 2: Connect Day 2 Culture-Festival Scenes into Normal Flow

**Files:**
- Modify: `src/data/scenario/day2.js`
- Test: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Route `day2-hallway` into the new chain**

In `src/data/scenario/day2.js`, add `nextId: 'day2-moe-hyeongyeom-lunch-side'` to `day2-hallway` after its `directives` array.

```js
      directives: [
        { type: 'SCG', id: 'hyeongyeom', action: 'update', expression: 'smile' },
        { type: 'E', target: 'hyeongyeom', effect: 'blush', motion: 'nod' }
      ],
      nextId: 'day2-moe-hyeongyeom-lunch-side'
```

- [ ] **Step 2: Link the first three small romance scenes**

Add these `nextId` values.

```js
// day2-moe-hyeongyeom-lunch-side
nextId: 'day2-moe-sangwon-pen-line'

// day2-moe-sangwon-pen-line
nextId: 'day2-moe-jaeseong-preview'

// day2-moe-jaeseong-preview
nextId: 'day2-festival-briefing'
```

- [ ] **Step 3: Link the culture-festival briefing chain**

Add these `nextId` values.

```js
// day2-festival-briefing
nextId: 'day2-sangwon-forms'

// day2-sangwon-forms
nextId: 'day2-ukhyun-library-request'

// day2-ukhyun-library-request
nextId: 'day2-jaeseong-broadcast-invite'

// day2-jaeseong-broadcast-invite
nextId: 'day2-sanguk-gym-poster'

// day2-sanguk-gym-poster
nextId: 'day2-junhyeok-map-note'

// day2-junhyeok-map-note
nextId: 'day2-dohun-coupon'
```

- [ ] **Step 4: Link the final phone/music/rooftop scenes back to the existing Day 2 hub setup**

`day2-dohun-coupon` already has `nextId: 'day2-haeum-performance-list'`. Add the remaining links.

```js
// day2-haeum-performance-list
nextId: 'day2-yunho-rooftop-wait'

// day2-yunho-rooftop-wait
nextId: 'day2-lunch-note'
```

- [ ] **Step 5: Slightly smooth the bridge back into `day2-lunch-note`**

Replace the `day2-lunch-note.text` with this version so it no longer feels like only 현겸 exists after the new culture-festival tour:

```js
text: '점심이 끝날 즈음, 기록집에는 새 이름들이 늘어났고 현겸은 우산을 돌려준 뒤에도 바로 돌아서지 않았다. 여러 사람의 부탁이 쌓일수록, 학범은 자기 손에 다시 무언가를 쥐여 주려는 마음이 누구에게 향하는지 더 의식하게 됐다.',
```

Keep the existing `variants` array unchanged.

- [ ] **Step 6: Verify Day 2 syntax and graph GREEN**

Run:

```bash
node --check src/data/scenario/day2.js
npm test
```

Expected: `node --check` passes. `npm test` may still fail on awkward phrase blacklist until Task 3 is complete, but the `unreachable non-preview scene` errors for Day 2 should be gone.

## Task 3: Fix Known Awkward Korean Copy in Day 9–10

**Files:**
- Modify: `src/data/scenario/day9.js`
- Modify: `src/data/scenario/day10.js`
- Test: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Fix duplicated Day 9 phone line**

In `src/data/scenario/day9.js`, replace:

```js
"text": "축제 준비 문화제 준비 채팅방이 준비 기록처럼 울렸다.",
```

with:

```js
"text": "문화제 준비 채팅방이 기록집 알림처럼 울렸다.",
```

- [ ] **Step 2: Fix 재성 Day 9 repeated `마음` sentence**

Replace:

```js
"text": "학범은 재성의 농담이 어디에서 멈추는지 처음으로 들었다. 스피커 잡음 너머에는 마음보다 먼저 숨긴 마음이 있었다."
```

with:

```js
"text": "학범은 재성의 농담이 어디에서 멈추는지 처음으로 들었다. 스피커 잡음 너머에는 농담보다 먼저 숨겨 둔 진심이 있었다."
```

- [ ] **Step 3: Fix 하음 Day 9 grammar**

Replace:

```js
"text": "학범은 하음 곁에서 처음으로 서두르지 않는 마음 확인를 했다. 누가 먼저 고백할지는 아직 흐렸지만, 둘의 호흡은 틀린 마디를 다시 찾고 있었다."
```

with:

```js
"text": "학범은 하음 곁에서 처음으로 서두르지 않고 마음을 확인했다. 누가 먼저 고백할지는 아직 흐렸지만, 둘의 호흡은 틀린 마디를 다시 찾고 있었다."
```

- [ ] **Step 4: Fix Day 10 조사 오류**

In `src/data/scenario/day10.js`, replace:

```js
"상욱과 준비 장소을 다시 달린다.",
```

with:

```js
"상욱과 준비 장소를 다시 달린다.",
```

- [ ] **Step 5: Verify the blacklist is GREEN**

Run:

```bash
node --check src/data/scenario/day9.js
node --check src/data/scenario/day10.js
npm test
```

Expected: all three commands pass.

## Task 4: Scan for Nearby Awkwardness Without Changing Direction

**Files:**
- Read: `src/data/scenario/day2.js`
- Read: `src/data/scenario/day9.js`
- Read: `src/data/scenario/day10.js`
- Modify only if a line is directly awkward or ungrammatical.

- [ ] **Step 1: Run targeted grep for repeated or broken Korean particles**

```bash
grep -RIn "문화제 준비 문화제 준비\|축제 준비 문화제 준비\|장소을\|확인를\|마음보다 먼저 숨긴 마음\|준비 준비\|기록 기록" src/data/scenario/day2.js src/data/scenario/day9.js src/data/scenario/day10.js
```

Expected after Task 3: no output.

- [ ] **Step 2: Read the connected Day 2 chain aloud in file order**

Read this range:

```bash
sed -n '110,520p' src/data/scenario/day2.js
```

Only edit if the text has a direct grammar or continuity problem caused by connecting the chain. Do not rewrite tone or plot.

- [ ] **Step 3: If editing is needed, keep edits line-local**

Allowed examples:

```js
// allowed: grammar only
'기록 담당이 어떤 봄을 남기고 싶은지 듣고 나서 맞추고 싶어서.'
// may become
'기록 담당이 어떤 봄을 남기고 싶은지 들은 뒤에 맞추고 싶어서.'
```

Disallowed examples:

```txt
- deleting the culture-festival plot
- changing route flags
- replacing whole scenes with new mystery content
- changing UI or assets
```

- [ ] **Step 4: Run syntax and tests after any line-local edit**

```bash
node --check src/data/scenario/day2.js
node --check src/data/scenario/day9.js
node --check src/data/scenario/day10.js
npm test
```

Expected: all pass.

## Task 5: Full Verification

**Files:**
- Verify all changed story/test files.

- [ ] **Step 1: Run story syntax checks**

```bash
node --check src/data/scenario/day2.js
node --check src/data/scenario/day9.js
node --check src/data/scenario/day10.js
```

Expected: no output and exit code 0.

- [ ] **Step 2: Run standard repository checks**

```bash
npm test
node .omx/normalized-dup-scan.mjs
npm run test:story-lines
npm run build
git diff --check
```

Expected:

```txt
npm test exits 0
node .omx/normalized-dup-scan.mjs prints groups 0
npm run test:story-lines reports at least 10000 total source lines
git diff --check prints no output
npm run build exits 0
```

- [ ] **Step 3: Optional but recommended VN flow QA**

Run only after build/test are green:

```bash
set -euo pipefail
npm run dev -- --host 127.0.0.1 --port 5175 > .omx/tmp/vn-dev.log 2>&1 &
VN_DEV_PID=$!
trap 'kill $VN_DEV_PID 2>/dev/null || true' EXIT
sleep 3
VN_QA_BASE_URL=http://127.0.0.1:5175 npm run qa:vn
```

Expected JSON contains every check with `"status": "passed"`, `"assetErrors": 0`, `"playRejects": 0`, and `"bgmEvents": 0`.

## Task 6: Commit Only the Story Cleanup

**Files:**
- Add: `src/data/scenario/day2.js`
- Add: `src/data/scenario/day9.js`
- Add: `src/data/scenario/day10.js`
- Add: `tests/ui-contract.test.mjs`
- Do not add unrelated UI/QA files unless the user explicitly asks.

- [ ] **Step 1: Review dirty files before committing**

```bash
git status --short
git diff --stat
```

Expected: story/test files from this cleanup are dirty. Existing unrelated files may also be dirty; leave them unstaged unless they are part of this cleanup.

- [ ] **Step 2: Stage only cleanup files**

```bash
git add src/data/scenario/day2.js src/data/scenario/day9.js src/data/scenario/day10.js tests/ui-contract.test.mjs
```

- [ ] **Step 3: Commit with Lore protocol**

```bash
git commit -m "Smooth culture festival story cleanup" -m "Preserve the culture-festival romance rewrite while connecting the new Day 2 setup scenes into normal flow and fixing the most visible awkward Korean copy.\n\nConstraint: Keep the friend's new culture-festival story direction; only repair graph validity and awkward phrasing.\nRejected: Reverting to the archive-mystery framing | user confirmed the new direction is correct.\nConfidence: high\nScope-risk: narrow\nDirective: Future copy cleanup should be line-local unless the user asks for a rewrite.\nTested: node --check src/data/scenario/day2.js && node --check src/data/scenario/day9.js && node --check src/data/scenario/day10.js\nTested: npm test\nTested: node .omx/normalized-dup-scan.mjs\nTested: npm run test:story-lines\nTested: npm run build\nNot-tested: Manual full route readthrough in browser."
```

## Self-Review

- Spec coverage: fixes validator failure, fixes exact awkward strings, preserves culture-festival direction, avoids unrelated UI/QA edits.
- Placeholder scan: no unresolved placeholders or incomplete steps; all target strings and commands are explicit.
- Type consistency: uses existing scenario DSL fields only (`nextId`, `text`, `directives`, `variants`) and existing Node test style.
- Scope control: no engine rewrite, no asset generation, no dependency changes, no UI layout changes.
