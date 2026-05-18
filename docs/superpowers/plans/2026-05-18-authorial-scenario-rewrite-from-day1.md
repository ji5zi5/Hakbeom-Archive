# Authorial Scenario Rewrite From Day 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite Hakbeom Archive from Day 1 through all route endings so the script reads like intentionally authored 미연시 prose, with no bulk-generated template sentences in displayed story text.

**Architecture:** Preserve the current VN engine contracts: scene IDs, `nextId`/`next`, rewards, route locks, route gates, backgrounds, and terminal endings stay stable unless a test is updated for a deliberate structural change. Replace prose by day/route batches and add story-quality regression tests that detect repeated generated phrasing before content can regress.

**Tech Stack:** Vite + React scenario data in ES modules, Node `assert` contract tests, existing `validateScenario()`, existing `npm run test:story-lines`, existing generated PNG backgrounds.

---

## Audit Findings From Day 1 Onward

Commands used for audit:

```bash
find src/data/scenario -maxdepth 1 -type f -name '*.js' | sort | xargs wc -l
node .omx/tmp-audit-scenario2.mjs
```

Observed problems:

- Day 1–3 are less broken than later days, but still feel prototype-short and route setup is thin.
- Day 4–5 have usable story seeds, but need authorial smoothing and less “everyone explains a clue” structure.
- Day 6–8 are the worst section: 80 scenes per day with many exact duplicate texts across all three days.
- Day 6–8 still contain story-visible meta text such as `Day 6의 첫 단서`, repeated pair-investigation formulas, and one bad particle `윤호이`.
- Day 9 repeats the same pressure opener 9 times: `축제 준비물 사이에서 자기 이름이 적힌 작은 표식...`.
- Day 10 repeats the same prelock and lock structure 9 times: `같은 질문을 다른 목소리`, `옥상 바람이 잠깐 멈춘 것 같았다`.
- Day 11–12 have route-specific details, but the scaffolding is still visibly templated: `아침 조회가 시작되기 전...`, `리허설 대본을 들고...`, `같은 대사를 세 번 연습...`.
- Day 13–14 are heavily templated across all routes: `사라진 원본 이야기를 듣자마자`, `같은 방향을 보고 있다는 증거`, `축제 인파 너머에서`, `이 사건, 누가 꾸민 건지`, `내가 고른 건 단서가 아니라 너야`.
- Endings are short and mechanically valid, but they need route-specific emotional closure after Day 14 is rewritten.

---

## Non-Negotiable Rewrite Rules

- Do not generate prose with loops, route maps, or string templates.
- Scripts may be used only for auditing, validation, or safe mechanical checks, not for writing displayed story prose.
- Keep scene IDs stable unless the rewrite plan explicitly says to split a scene.
- Keep all route lock flags: `route_lock_hyeongyeom`, `route_lock_ukhyun`, `route_lock_jaeseong`, `route_lock_sangwon`, `route_lock_sanguk`, `route_lock_junhyeok`, `route_lock_dohun`, `route_lock_haeum`, `route_lock_yunho`.
- Keep Day 11–14 `endingGate: true`, `routeGate: true`, and `endingNext` route maps.
- Keep runtime choice screens at 3 choices or fewer.
- Chapter card labels may keep `Day N · ...`; ordinary dialogue, phone messages, banners, and narration must not mention `Day N` as prose.
- Every rewritten scene needs at least one concrete detail: object, gesture, location, or sensory cue.

---

### Task 1: Add Story-Quality Tests Before Rewriting

**Files:**
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Add a helper that checks displayed prose but ignores chapter cards**

Add this helper after `const scenarioSource = readScenarioSourceTree();`:

```js
function displayedStoryTexts() {
  return scenario.flatMap((item) => {
    if (item.kind === 'chapter') return [];
    const texts = [];
    if (item.text) texts.push({ id: item.id, text: item.text });
    for (const [index, message] of (item.messages || []).entries()) {
      if (message.text) texts.push({ id: `${item.id}.messages[${index}]`, text: message.text });
    }
    return texts;
  });
}

function assertNoDisplayedStoryPattern(pattern, label) {
  const hits = displayedStoryTexts().filter((entry) => pattern.test(entry.text));
  assert.deepEqual(
    hits.map((entry) => entry.id),
    [],
    `${label}: ${hits.map((entry) => `${entry.id}: ${entry.text}`).join('\n')}`
  );
}
```

- [ ] **Step 2: Add hard-fail patterns for current generated prose**

Add this block near the current Korean particle assertions:

```js
assertNoDisplayedStoryPattern(
  /Day\s*\d+의|Day\s*\d+ 조사|Day\s*\d+ 기록표/,
  'Displayed story prose should not expose meta day labels outside chapter cards.'
);
assertNoDisplayedStoryPattern(
  /첫 단서가 되었다|같은 질문을 다른 목소리|축제 준비물 사이에서 자기 이름이 적힌 작은 표식|옥상 바람이 잠깐 멈춘 것 같았다/,
  'Displayed story prose should not contain generated route-template setup lines.'
);
assertNoDisplayedStoryPattern(
  /같은 방향을 보고 있다는 증거|사라진 원본 이야기를 듣자마자 표정을 굳혔다|축제 인파 너머에서 .* 기다리고 있었다/,
  'Route payoff scenes should not reuse generated crisis/festival scaffolding.'
);
assertNoDisplayedStoryPattern(
  /이 사건, 누가 꾸민 건지 이제 알|내가 고른 건 단서가 아니라 너야|무대 뒤에서 학범은 .* 같은 대사를 세 번 연습했다/,
  'Confession and truth scenes should be individually authored per route.'
);
assertNoDisplayedStoryPattern(
  /윤호이|호출음는|실밥는|12분는/,
  'Displayed story prose should not contain known generated particle errors.'
);
```

- [ ] **Step 3: Run the tests and confirm they fail before prose rewrite**

Run:

```bash
npm test
```

Expected before rewrite: FAIL with IDs from Day 6–14. This is intentional red-state evidence.

---

### Task 2: Freeze the Story Bible and Route Voice Rules

**Files:**
- Modify: `docs/scenario-authoring.md`
- Modify: `docs/story-expansion-plan.md`

- [ ] **Step 1: Add prose rules to `docs/scenario-authoring.md`**

Add this subsection under `Longform Season 1 확장 규칙`:

```md
### 작가식 문장 규칙

- 표시되는 본문은 반복 템플릿으로 만들지 않는다.
- `Day 6의 첫 단서`처럼 제작 메타가 보이는 표현은 챕터 카드 밖에서 쓰지 않는다.
- 같은 장면 구조를 여러 루트에 복사하지 않는다. 루트마다 다른 장소, 행동, 감정 반전을 둔다.
- 전화 메시지는 보낸 사람의 말투로 쓴다. 진행 상황 보고 문장만 반복하지 않는다.
- 장면 하나에는 최소 하나의 물리적 행동이 있어야 한다. 예: 우산 접기, 노트 접기, 마이크 끄기, 출입 명단 누르기.
```

- [ ] **Step 2: Add the route voice table**

Add this table immediately after the prose rules:

```md
| Route | Voice anchor | Required scene material |
| --- | --- | --- |
| 현겸 | 정실 순애, 조용한 기다림 | 비, 우산, 돌아갈 자리 |
| 욱현 | 무표정 쿨데레, 짧은 관찰 | 접힌 노트, 늦은 답장, 시선 회피 |
| 재성 | 능글 플러팅 뒤의 진심 | 방송실, 마이크, 비공개 호출 |
| 상원 | 기록집착 얀데레 | 출입 명단, 선택 증거, 지우지 않는 기록 |
| 상욱 | 직진 댕댕이 | 달리기, 먼저 움직임, 멈추는 법 배우기 |
| 준혁 | 무심한 두뇌파 | 지도, 경로, 계산 밖의 배려 |
| 도훈 | 장난치는 츤데레 | 정보값, 편의점, 놀림 뒤의 보호 |
| 하음 | 치유계 | 숨, 박자, 음악실, 기다림 |
| 윤호 | 후배 선배집착 | 선배 호칭, 옥상, 기다리는 자리 |
```

- [ ] **Step 3: Run markdown-safe validation**

Run:

```bash
git diff --check
```

Expected: PASS.

---

### Task 3: Rewrite Day 1–3 as a Real Prologue Arc

**Files:**
- Modify: `src/data/scenario/day1.js`
- Modify: `src/data/scenario/day2.js`
- Modify: `src/data/scenario/day3.js`

- [ ] **Step 1: Preserve early gameplay contracts**

Do not remove or rename these IDs:

```txt
day1-chapter-card
choice-approach
choice-walk-home
choice-honesty
phone-evening-message
choice-reply-tone
day2-chapter-card
day3-chapter-card
choice-day3-route-focus
choice-promise
```

- [ ] **Step 2: Rewrite Day 1 as a complete first meeting**

Authorial objective:

- 학범 is the protagonist, not an observer named “나”.
- 현겸 enters through a concrete need: wet uniform, one missing umbrella, student council room locked late.
- The first choice should change emotional tone, not just wording.
- End Day 1 with a phone message that feels like 현겸 hesitated before sending it.

- [ ] **Step 3: Rewrite Day 2 as the first intentional promise**

Authorial objective:

- Morning message should create anticipation.
- Rooftop/hallway scenes should show 현겸 choosing to stay near 학범 without overexplaining.
- End with “비 때문만은 아니었다” but avoid repeating the same umbrella line too often.

- [ ] **Step 4: Rewrite Day 3 as route expansion, not route dump**

Authorial objective:

- Introduce 욱현 and 재성 through actions: returning a note, taking over a broadcast cue.
- Keep 현겸 emotionally present so Day 4 expansion does not feel like a different game.
- Choice paths should feel like 학범 deciding how honest he can be.

- [ ] **Step 5: Validate after Day 1–3**

Run:

```bash
npm test
npm run test:story-lines
```

Expected: Existing validator passes; line count remains over 10,000.

---

### Task 4: Rewrite Day 4–5 as the Cast Introduction and Investigation Hook

**Files:**
- Modify: `src/data/scenario/day4.js`
- Modify: `src/data/scenario/day5.js`

- [ ] **Step 1: Preserve choice grouping**

Do not change the two 3-choice screens:

```txt
choice-day4-focus-a
choice-day4-focus-b
choice-day5-school-shift
choice-day5-after-school-shift
```

- [ ] **Step 2: Rewrite Day 4 around a single incident**

Authorial objective:

- The open archive room is the central scene.
- Each new character should enter with a distinct action, not a résumé line.
- The missing record should connect to 학범 personally before it becomes a mystery plot.

- [ ] **Step 3: Rewrite Day 5 around six physical clues**

Each branch should have a unique clue and emotional beat:

```txt
상원: 출입 명단 with 학범's hesitation mark
상욱: gym thread and running chase
준혁: library map with impossible route
도훈: convenience-store receipt and CCTV favor
하음: music-room door rhythm
윤호: rooftop dried paper and 선배 distance
```

- [ ] **Step 4: Validate after Day 4–5**

Run:

```bash
npm test
```

Expected: PASS except the planned story-quality red tests for later days if not rewritten yet.

---

### Task 5: Replace Day 6–8 Entirely, Not Patch Lines

**Files:**
- Modify: `src/data/scenario/day6.js`
- Modify: `src/data/scenario/day7.js`
- Modify: `src/data/scenario/day8.js`

- [ ] **Step 1: Treat current Day 6–8 prose as disposable**

Keep IDs, choices, rewards, route locks, and directives. Replace all displayed `text` and `messages[].text` except chapter card labels.

- [ ] **Step 2: Assign distinct dramatic jobs**

```txt
Day 6: Evidence sorting day. 학범 learns everyone helps differently.
Day 7: Contradiction day. Clues disagree; characters clash and reveal flaws.
Day 8: Festival-eve day. Each route asks for a personal promise before the route lock.
```

- [ ] **Step 3: Rewrite route beat sets by hand**

For each of the 9 routes in each day, write a different mini-scene:

```txt
beat-01: concrete entrance/action
beat-02: clue interaction
beat-03: character-specific interpretation
beat-04: emotional slip
phone: sender-specific message
beat-06: 학범's changed internal response
```

No two days may reuse the same sentence. No two route characters may share the same “comfort line”.

- [ ] **Step 4: Rewrite pair scenes as actual conflicts**

Replace formulas like `같은 단서를 전혀 다른 방식으로 보았다` with specific pair conflicts:

```txt
현겸+상원: care vs record control
욱현+준혁: observation vs deduction
재성+도훈: performance vs street information
상욱+윤호: rushing forward vs waiting behind
하음+현겸: calming breath vs quiet promise
```

- [ ] **Step 5: Validate Day 6–8 red patterns are gone**

Run:

```bash
grep -RIn "Day [0-9].*첫 단서\|페어 조사는\|같은 단서를 전혀 다른 방식\|사건은 복잡해졌지만\|윤호이" src/data/scenario/day6.js src/data/scenario/day7.js src/data/scenario/day8.js || true
npm test
```

Expected: grep returns no matches; tests progress to later-day failures if Day 9–14 are not rewritten yet.

---

### Task 6: Rewrite Day 9–10 as Real Route Pressure and Route Lock

**Files:**
- Modify: `src/data/scenario/day9.js`
- Modify: `src/data/scenario/day10.js`

- [ ] **Step 1: Preserve route-lock mechanics**

Do not change route lock choice IDs or reward flags:

```txt
day10-choice-lock-a
day10-choice-lock-b
day10-choice-lock-c
route_lock_<routeId>
```

- [ ] **Step 2: Rewrite Day 9 without the marker formula**

Current bad formula:

```txt
축제 준비물 사이에서 자기 이름이 적힌 작은 표식을 발견했다.
```

Replace with nine route-specific pressure scenes where each character fears a different loss:

```txt
현겸: being only the rainy-day memory
욱현: being unread
재성: being treated as performance only
상원: the record being corrected away from him
상욱: arriving too late
준혁: not being chosen despite the correct route
도훈: jokes failing to hide concern
하음: 학범 matching someone else's rhythm
윤호: 선배 looking past him
```

- [ ] **Step 3: Rewrite Day 10 route lock lines as commitments**

Current bad formulas:

```txt
같은 질문을 다른 목소리
옥상 바람이 잠깐 멈춘 것 같았다
```

Each lock line should instead contain:

- 학범's body action,
- the chosen character's immediate reaction,
- a route-specific object or phrase,
- no shared opener.

- [ ] **Step 4: Validate route-lock behavior**

Run:

```bash
npm test
```

Expected: route-lock tests still pass.

---

### Task 7: Rewrite Day 11–12 as Route-Specific After-Choice Intimacy

**Files:**
- Modify: `src/data/scenario/day11.js`
- Modify: `src/data/scenario/day12.js`

- [ ] **Step 1: Preserve route gates**

Do not change:

```txt
day11-route-gate
day12-route-gate
endingGate: true
routeGate: true
endingNext
```

- [ ] **Step 2: Remove Day 11 morning template**

Current bad formula:

```txt
아침 조회가 시작되기 전, 학범은 어제 적은 <name>의 이름을 다시 펼쳤다...
```

Rewrite each route start from a different morning situation:

```txt
현겸: umbrella left beside 학범's desk
욱현: note returned with one changed punctuation mark
재성: empty broadcast booth cue light
상원: attendance correction already filed
상욱: gym shoes waiting outside class
준혁: route map with one erased path
도훈: convenience-store bag on chair
하음: music-room metronome still ticking
윤호: rooftop key returned with a bow
```

- [ ] **Step 3: Remove Day 12 rehearsal template**

Current bad formulas:

```txt
리허설 대본을 들고 학범을 기다리고 있었다
무대 뒤에서 학범은 <name>과 같은 대사를 세 번 연습했다
```

Rewrite Day 12 so each route rehearses a different kind of scene:

```txt
현겸: rain sound cue fails; they share one mic
욱현: line missing from script; he writes it by hand
재성: broadcast rehearsal goes live by accident
상원: script has unauthorized correction marks
상욱: stage prop falls; he catches it before 학범
준혁: wrong stage route forces improvisation
도훈: backstage errand reveals hidden note
하음: metronome stops and 학범 keeps rhythm
윤호: junior role requires him to call 학범 by name, not just 선배
```

- [ ] **Step 4: Validate after Day 11–12**

Run:

```bash
grep -RIn "아침 조회가 시작되기 전\|리허설 대본을 들고\|같은 대사를 세 번 연습" src/data/scenario/day11.js src/data/scenario/day12.js || true
npm test
```

Expected: grep returns no matches; tests progress to Day 13–14 if not rewritten yet.

---

### Task 8: Rewrite Day 13–14 as Unique Route Payoffs

**Files:**
- Modify: `src/data/scenario/day13.js`
- Modify: `src/data/scenario/day14.js`

- [ ] **Step 1: Preserve route gates and terminal bridge**

Do not change:

```txt
day13-route-gate
day14-route-gate
day14-closing -> ending-promise
```

- [ ] **Step 2: Replace Day 13 crisis template**

Current bad formulas:

```txt
사라진 원본 이야기를 듣자마자 표정을 굳혔다
둘이 같은 방향을 보고 있다는 증거가 되었다
```

Rewrite each Day 13 route around a different failure mode:

```txt
현겸: almost returns the umbrella to make things easier for 학범
욱현: refuses to hand over a note because it exposes his feelings
재성: broadcast log proves he lied to protect 학범
상원: record obsession nearly hurts 학범's choice
상욱: runs ahead and loses the actual clue
준혁: correct deduction gives the wrong emotional answer
도훈: joke lands badly and he has to apologize plainly
하음: comforting others leaves his own fear unheard
윤호: waits too far away and 학범 has to call him closer
```

- [ ] **Step 3: Replace Day 14 festival/truth/confession templates**

Current bad formulas:

```txt
축제 인파 너머에서 <name>을 기다리고 있었다
이 사건, 누가 꾸민 건지 이제 알겠어
내가 고른 건 단서가 아니라 너야
```

Rewrite each Day 14 route with a different confession structure:

```txt
현겸: 학범 opens the umbrella first.
욱현: 학범 writes the answer on the note instead of saying it first.
재성: 학범 turns off the mic before confessing.
상원: 학범 lets one record remain uncorrected because it is true.
상욱: 학범 runs toward him first.
준혁: 학범 chooses the inefficient route because 준혁 is there.
도훈: 학범 pays the “information fee” with an honest sentence.
하음: 학범 sets the tempo and asks 하음 to stay with it.
윤호: 학범 calls him by name, then lets him keep `선배` if he wants.
```

- [ ] **Step 4: Validate after Day 13–14**

Run:

```bash
grep -RIn "사라진 원본 이야기를 듣자마자\|같은 방향을 보고 있다는 증거\|축제 인파 너머에서\|이 사건, 누가 꾸민\|내가 고른 건 단서가 아니라" src/data/scenario/day13.js src/data/scenario/day14.js || true
npm test
```

Expected: grep returns no matches; `npm test` passes after endings are also updated.

---

### Task 9: Rewrite Endings as Route-Specific Closure

**Files:**
- Modify: `src/data/scenario/endings.js`

- [ ] **Step 1: Preserve terminal IDs**

Do not rename:

```txt
ending-hyeongyeom
ending-ukhyun
ending-jaeseong
ending-sangwon
ending-sanguk
ending-junhyeok
ending-dohun
ending-haeum
ending-yunho
ending-good
ending-normal
ending-quiet
```

- [ ] **Step 2: Rewrite route endings with concrete final action**

Each ending should close with one route-specific action:

```txt
현겸: folding the umbrella together
욱현: leaving the note unfolded
재성: deleting a recording instead of keeping it
상원: writing one line without timestamp
상욱: walking instead of running
준혁: drawing a route with no destination label
도훈: paying for two drinks without joking
하음: restarting the metronome together
윤호: stepping beside 학범 instead of behind him
```

- [ ] **Step 3: Validate terminal endings**

Run:

```bash
npm test
```

Expected: all terminal ending tests pass.

---

### Task 10: Final Quality Gate

**Files:**
- Modify as needed: `tests/ui-contract.test.mjs`
- Modify as needed: `src/data/scenario/*.js`

- [ ] **Step 1: Run explicit no-template grep**

Run:

```bash
grep -RIn "Day [0-9].*첫 단서\|같은 질문을 다른 목소리\|축제 준비물 사이에서 자기 이름\|옥상 바람이 잠깐\|아침 조회가 시작되기 전\|리허설 대본을 들고\|같은 대사를 세 번\|사라진 원본 이야기를 듣자마자\|같은 방향을 보고 있다는 증거\|축제 인파 너머에서\|이 사건, 누가 꾸민\|내가 고른 건 단서가 아니라\|윤호이\|호출음는\|실밥는\|12분는" src/data/scenario || true
```

Expected: no matches.

- [ ] **Step 2: Run full project gates**

Run:

```bash
npm test
npm run test:story-lines
npm run build
git diff --check
```

Expected:

- `npm test`: PASS.
- `npm run test:story-lines`: PASS and at least 10,000 source lines.
- `npm run build`: PASS. Vite chunk-size warning is acceptable if it remains the only warning.
- `git diff --check`: no whitespace errors.

- [ ] **Step 3: Manual spot read**

Read these files in full before final report:

```bash
sed -n '1,220p' src/data/scenario/day1.js
sed -n '1,260p' src/data/scenario/day6.js
sed -n '1,260p' src/data/scenario/day9.js
sed -n '1,260p' src/data/scenario/day14.js
sed -n '1,240p' src/data/scenario/endings.js
```

Expected: No generated scaffold is visible in the representative start/middle/late/ending files.

---

## Self-Review

- Spec coverage: Covers Day 1 through Day 14 plus endings, tests, docs, and final verification.
- Placeholder scan: No `TBD`, `TODO`, or vague “fix later” steps remain.
- Type consistency: Uses existing scenario module paths and existing validation commands.
- Risk: Full rewrite is large. Keep mechanics stable first; only change displayed prose unless a route scene truly needs splitting.
