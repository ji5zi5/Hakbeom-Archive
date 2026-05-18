# Adult Romance Tension Rewrite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Raise Hakbeom Archive’s route romance from soft school-romance to a denser 17~18 분위기형 route experience—jealousy, obsession, close-distance tension, and fade-to-black implications—without showing in-game meta labels such as “성인/19금” and without explicit sexual description.

**Architecture:** Keep all VN mechanics intact and change only scenario prose, authoring docs, and regression tests. The runtime still treats this as the same 학원도시 VN; the “everyone is adult in this academy city” premise is an authoring constraint, not displayed story text. Route intensity lives in Day 10–14 and endings, because route lock already provides the right narrative boundary for stronger jealousy/possession beats.

**Tech Stack:** Vite, React 18, ES modules, modular scenario files in `src/data/scenario/`, Node `assert` contract tests in `tests/ui-contract.test.mjs`, optional Playwright flow QA via `npm run qa:vn`.

---

## File Structure

- Modify `docs/scenario-authoring.md` — add internal-only romantic intensity rules, forbidden in-game meta labels, and route-specific “danger/tension” anchors.
- Modify `docs/story-rewrite-flow.md` — record the revised Season 1 emotional curve from Day 10 route lock to Day 14 confession and endings.
- Modify `tests/ui-contract.test.mjs` — add regression tests that prevent in-game age/rating labels, explicit sexual vocabulary, route-template repeats, and missing route-specific tension anchors.
- Modify `src/data/scenario/day10.js` — intensify route-lock scenes: possessive choice pressure starts but remains restrained.
- Modify `src/data/scenario/day11.js` — rewrite selected-name morning scenes into first jealousy/obsession consequences.
- Modify `src/data/scenario/day12.js` — rewrite rehearsal/night scenes into close-distance “almost crossing the line” moments.
- Modify `src/data/scenario/day13.js` — rewrite final anxiety scenes into route-specific dangerous attachment and choice pressure.
- Modify `src/data/scenario/day14.js` — rewrite confession/truth scenes into mature fade-to-black or aftermath implication without explicit act description.
- Modify `src/data/scenario/endings.js` — rewrite route endings into aftermath/possession/aftercare tones.

## Content Boundaries

- Internal premise: 학원도시는 성인 교육도시이고 route characters are treated as fictional adult VN characters.
- Do not display these words in scenario text: `성인`, `19금`, `18금`, `수위`, `미성년`, `성인 인증`.
- Do not write explicit sexual act/body-detail prose. Use implication: 문 닫힘, 암전, 다음 날 셔츠 소매, 손목의 온기, 숨 고르기, 말하지 않은 밤.
- Stronger tone is allowed: jealousy, obsession, possessive confession, wrist/hand contact, cornered emotional confrontation, yandere-adjacent pressure.
- Preserve route mechanics: IDs, `next`/`nextId`, `endingNext`, route locks, rewards, terminal endings, and 1/2/3-choice layout.

## Route Intensity Targets

| Route | Stronger tension target | Must avoid |
| --- | --- | --- |
| 현겸 | quiet jealousy, umbrella-distance collapse, “don’t go back alone” | generic pure-love repeat |
| 욱현 | silent surveillance-like concern, unread notes, library closeness | making him only passive/cold |
| 재성 | flirtation stops becoming a joke, mic-off private voice | goofy-only teasing |
| 상원 | record/choice possession, “I will keep proof you chose me” | explicit coercion |
| 상욱 | direct physical urgency, hand/wrist stop, breathless confession | violent restraint |
| 준혁 | calculated control cracking into need | emotionless exposition |
| 도훈 | jokes fail, jealousy leaks through casual protection | comedy-only route |
| 하음 | slow breath, music-room silence, calming touch becomes dangerous | bland healer-only route |
| 윤호 | 후배 respect mixed with waiting/obsession, “선배” pressure | childish framing |

---

### Task 1: Lock the content boundary in tests before rewriting prose

**Files:**
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Add helper for route-scoped displayed text lookup**

Add this helper below `assertNoNormalizedRouteTemplateDuplicates`:

```js
function displayedTextsForIdPattern(pattern) {
  return displayedStoryTexts().filter((entry) => pattern.test(entry.id));
}
```

- [ ] **Step 2: Add failing no-meta/no-explicit assertions**

Add these assertions after the existing generated-prose assertions:

```js
assertNoDisplayedStoryPattern(
  /성인|19금|18금|수위|미성년|성인\s*인증/,
  'Displayed story prose should not expose rating or adult-premise meta labels in-game.'
);
assertNoDisplayedStoryPattern(
  /성관계|섹스|정사|나체|속옷|강간|성기/,
  'Displayed story prose should keep romance implication-based and avoid explicit sexual vocabulary.'
);
```

- [ ] **Step 3: Add failing route-intensity anchor assertions**

Add this block after the no-explicit assertions:

```js
const adultTensionRouteAnchors = {
  hyeongyeom: /질투|혼자 돌아가지|우산 아래|가지 마/,
  ukhyun: /읽지 않은|접힌 노트|도서관.*가까|시선/,
  jaeseong: /마이크.*꺼|장난.*멈|비공개|목소리/,
  sangwon: /증거|기록|선택.*남|지우지/,
  sanguk: /손목|숨.*가빠|멈춰|뛰어/,
  junhyeok: /계산.*무너|경로.*막|통제|오차/,
  dohun: /농담.*끊|질투|편의점|웃지/,
  haeum: /숨|박자|음악실|정적/,
  yunho: /선배|기다릴|옥상|부르면/
};
for (const [routeId, anchor] of Object.entries(adultTensionRouteAnchors)) {
  const routeTexts = displayedTextsForIdPattern(new RegExp(`day1[0-4]-${routeId}|ending-${routeId}`))
    .map((entry) => entry.text)
    .join('\n');
  assert.match(routeTexts, anchor, `${routeId} route should include its stronger romance/tension anchor after route lock.`);
}
```

- [ ] **Step 4: Run test to verify the new contract fails if current prose is too mild**

Run:

```bash
npm test
```

Expected: FAIL on one of the new `adultTensionRouteAnchors` if current route-lock prose lacks the stronger anchor language. If it passes immediately, keep the assertions anyway; the rewrite still proceeds to improve prose quality.

- [ ] **Step 5: Commit the red contract if working tree policy allows it**

Only commit if the working tree can isolate these files. Use Lore format:

```bash
git add tests/ui-contract.test.mjs
git commit -m "Require implication-based adult romance tension contracts

Constraint: Stronger route tension must not expose rating meta labels or explicit sexual vocabulary in game text
Confidence: high
Scope-risk: narrow
Tested: npm test fails or passes against the new contract as observed"
```

### Task 2: Document the internal-only adult academy premise and route tension rules

**Files:**
- Modify: `docs/scenario-authoring.md`
- Modify: `docs/story-rewrite-flow.md`

- [ ] **Step 1: Add authoring-only premise to `docs/scenario-authoring.md`**

Append this section after `### 작가식 문장 규칙`:

```md
### 성인 분위기형 로맨스 규칙

- 내부 전제: 학원도시는 성인 교육도시이며, 모든 route 캐릭터는 실존 인물이 아니라 픽션화된 성인 VN 캐릭터로 작성한다.
- 이 전제는 게임 본문에 `성인`, `19금`, `18금`, `수위`, `미성년`, `성인 인증` 같은 메타 문구로 노출하지 않는다.
- 직접적인 성행위/신체 상세 묘사 대신 암시로 처리한다: 문이 닫힘, 암전, 다음 날의 어색함, 손끝의 온기, 숨 고르기, 말하지 않은 밤.
- Day 10 이전 공통 루트는 긴장을 쌓고, Day 10 route lock 이후부터 질투/독점욕/가까운 거리감을 강화한다.
- 얀데레 기류는 심리적 압박과 선택 집착으로만 표현한다. 폭력, 강제, 명시적 성적 강압으로 쓰지 않는다.
```

- [ ] **Step 2: Add route tension table to `docs/scenario-authoring.md`**

Append this table below the existing route voice table:

```md
| Route | 성인 분위기 강화 장치 | 암시 방식 |
| --- | --- | --- |
| 현겸 | 조용한 질투, 우산 아래 거리 붕괴 | 돌아가지 말라는 낮은 말, 비닐 우산 소리 |
| 욱현 | 읽지 않은 노트와 침묵의 집착 | 도서관 불이 꺼진 뒤 남은 접힌 쪽지 |
| 재성 | 장난을 멈춘 비공개 목소리 | 꺼진 마이크, 방송실 유리 너머 정적 |
| 상원 | 선택 증거를 남기는 기록 집착 | 지워지지 않는 명단, 학범 이름 옆의 선 |
| 상욱 | 숨찬 직진과 손목을 멈추는 순간 | 뛰어온 호흡, 놓지 않는 손끝 |
| 준혁 | 계산이 무너지는 통제욕 | 막힌 경로, 오차라고 부르지 못한 감정 |
| 도훈 | 농담이 끊기는 질투 | 편의점 불빛, 웃지 못한 영수증 뒷면 |
| 하음 | 느린 박자와 위험한 정적 | 음악실 밤, 같은 박자를 고르는 숨 |
| 윤호 | 후배의 기다림이 독점욕으로 기울기 | 옥상 난간, `선배`를 늦게 부르는 목소리 |
```

- [ ] **Step 3: Update `docs/story-rewrite-flow.md` Day 10–14 curve**

Add this subsection near the Day 10–14 section:

```md
### Day 10–14 성인 분위기형 긴장 곡선

- Day 10: route lock은 고백 확정이 아니라 “이제 물러날 수 없는 이름”을 고르는 장면이다.
- Day 11: 선택한 이름 때문에 다른 관계가 흔들리고, 각 route는 질투나 독점욕을 처음 드러낸다.
- Day 12: 리허설/밤 장면에서 가까운 거리와 숨 고르기를 사용하되, 직접 묘사는 암전과 여운으로 처리한다.
- Day 13: 마지막 불안은 원본 기록보다 학범의 선택을 빼앗길 수 있다는 공포로 강화한다.
- Day 14: 고백은 공개 이벤트가 아니라 둘만 아는 선택의 봉인으로 끝난다. 엔딩은 다음 날의 어색함/소유감/후회 없는 여운으로 마무리한다.
```

- [ ] **Step 4: Run docs contract test**

Run:

```bash
npm test
```

Expected: PASS for existing docs contracts. If a docs assertion fails because it now expects additional terms, update only the relevant assertion text.

### Task 3: Rewrite Day 10 route-lock scenes into stronger choice pressure

**Files:**
- Modify: `src/data/scenario/day10.js`

- [ ] **Step 1: Identify route-lock scene blocks**

Run:

```bash
grep -n "day10-.*lock\|day10-.*prelock\|route_lock_" src/data/scenario/day10.js
```

Expected: output includes all nine route IDs and all `route_lock_<id>` rewards.

- [ ] **Step 2: Rewrite each route-lock text only**

For each route, preserve `id`, `type`, `chapter`, `name`, `role`, `place`, `nextId`, `next`, `rewards`, `directives`, and choices. Change only displayed `text` and message text. Use these exact route targets:

```md
현겸: 우산 아래에서 “혼자 돌아가지 마”에 가까운 낮은 질투.
욱현: 접힌 노트를 돌려주지 않고, 읽지 않은 문장으로 붙잡음.
재성: 마이크를 끈 뒤 장난을 멈추고 비공개 목소리로 압박.
상원: 학범의 선택을 증거로 남기려는 기록 집착.
상욱: 뛰어와 손목 앞에서 멈추고, 놓기 싫다는 직진.
준혁: 계산된 경로를 일부러 막고 감정을 오차라고 부르지 못함.
도훈: 농담이 끊긴 질투와 편의점 불빛.
하음: 음악실 박자와 숨 고르기가 가까워지는 정적.
윤호: 후배답게 물러서지만 `선배`라는 호칭이 더 오래 남는 압박.
```

- [ ] **Step 3: Run targeted tests**

Run:

```bash
npm test
node .omx/normalized-dup-scan.mjs
```

Expected: `npm test` exits 0 or fails only on later-day anchors not rewritten yet; duplicate scan prints `groups 0`.

### Task 4: Rewrite Day 11–12 into jealousy and close-distance aftermath

**Files:**
- Modify: `src/data/scenario/day11.js`
- Modify: `src/data/scenario/day12.js`

- [ ] **Step 1: Rewrite Day 11 route openings**

Preserve all graph keys. Update Day 11 route scenes so each chosen route has a visible consequence:

```md
현겸: other names on the archive list make him jealous, but he only tightens the umbrella handle.
욱현: he knows which page 학범 reread and says it too quietly.
재성: he jokes once, then stops because the private voice matters more.
상원: he keeps the record of 학범’s chosen name and refuses to erase it.
상욱: he arrives out of breath and stops 학범 before 학범 can pretend nothing changed.
준혁: he shows a blocked route on the map and admits he made it that way.
도훈: he laughs at first, then asks who 학범 was with last night.
하음: he adjusts 학범’s breathing in the music room and the silence becomes too close.
윤호: he waits on the rooftop and says `선배` only after 학범 looks at him.
```

- [ ] **Step 2: Rewrite Day 12 rehearsal/night scenes**

Use implication language only. Every route should include one close-distance beat and one restraint beat:

```md
close-distance examples: 손끝, 숨, 문이 닫히는 소리, 어깨가 닿는 거리, 꺼진 조명.
restraint examples: 먼저 물러남, 말하지 않음, 웃지 않음, 기록하지 않음, 손을 놓음.
```

- [ ] **Step 3: Run tests**

Run:

```bash
npm test
node .omx/normalized-dup-scan.mjs
```

Expected: tests pass or remaining failures point to Day 13–14/endings anchors that Task 5 will handle.

### Task 5: Rewrite Day 13–14 and endings into mature route payoffs

**Files:**
- Modify: `src/data/scenario/day13.js`
- Modify: `src/data/scenario/day14.js`
- Modify: `src/data/scenario/endings.js`

- [ ] **Step 1: Rewrite Day 13 final anxiety scenes**

Preserve the missing-original plot. Change the emotional engine from “generic crisis” to “fear of losing 학범’s chosen name”:

```md
현겸: fears 학범 will return the umbrella and end the excuse to meet.
욱현: fears the unread note will become proof he stayed silent too long.
재성: fears 학범 only hears the performance, not the private voice.
상원: fears an unrecorded choice can be stolen.
상욱: fears arriving late again.
준혁: fears the one route he cannot calculate is 학범 leaving.
도훈: fears jokes made him look unserious when it mattered.
하음: fears calming everyone except himself.
윤호: fears waiting politely means losing his chance as a 후배.
```

- [ ] **Step 2: Rewrite Day 14 confession scenes**

Keep confessions route-specific and implication-based. Use fade-to-black style endings without explicit description:

```md
현겸: rain, umbrella closing, not going home separately.
욱현: folded note opened, library light off, one line left unread for tomorrow.
재성: mic off, broadcast room door closed, no audience.
상원: record book closed, chosen proof kept between two people.
상욱: breath slows, hand finally released only after promise.
준혁: map folded, shortest path abandoned.
도훈: receipt folded into wallet, joke withheld.
하음: final chord, shared breath, quiet room after lights dim.
윤호: rooftop, `선배`, waiting ends only when called.
```

- [ ] **Step 3: Rewrite endings as aftermath/aftercare**

Each ending should show the next-day consequence rather than a generic happy ending:

```md
현겸: shared umbrella is no longer an excuse.
욱현: note margin now has two handwritings.
재성: private recording never aired.
상원: archive record exists but the most important line is not public.
상욱: he learned to stop before grabbing again.
준혁: he leaves one route unoptimized.
도훈: he protects the receipt instead of joking about it.
하음: they keep the same tempo without counting.
윤호: he waits less, asks more, still says 선배.
```

- [ ] **Step 4: Run full scenario quality checks**

Run:

```bash
npm test
npm run test:story-lines
node .omx/normalized-dup-scan.mjs
grep -RInE '성인|19금|18금|수위|미성년|성인\s*인증|성관계|섹스|정사|나체|속옷|강간|성기' src/data/scenario || true
git diff --check
```

Expected:
- `npm test`: exit 0
- `npm run test:story-lines`: at least `10000 total`
- duplicate scan: `groups 0`
- grep: no scenario matches
- `git diff --check`: exit 0

### Task 6: Run full regression, QA, and final review

**Files:**
- Verify: whole repository

- [ ] **Step 1: Build**

Run:

```bash
npm run build
```

Expected: exit 0. The existing Vite chunk-size warning is nonblocking.

- [ ] **Step 2: Run VN flow QA if a dev server is available**

Run:

```bash
npm run dev -- --host 127.0.0.1 > .omx/tmp/vn-dev.log 2>&1 &
VN_DEV_PID=$!
sleep 3
npm run qa:vn
kill $VN_DEV_PID
```

Expected: `npm run qa:vn` exits 0 and reports `assetErrors: 0`, `playRejects: 0`, `bgmEvents: 0`. If browser dependencies are missing, record the exact Playwright launch error and keep `npm test`/`npm run build` as required gates.

- [ ] **Step 3: Audit graph preservation**

Run:

```bash
node - <<'NODE'
import { scenario, episodeInfo } from './src/data/scenario.js';
import { routeConfig } from './src/data/routeConfig.js';
import { validateScenario } from './src/engine/scenarioValidator.js';
const routeIds = ['hyeongyeom', 'ukhyun', 'jaeseong', 'sangwon', 'sanguk', 'junhyeok', 'dohun', 'haeum', 'yunho'];
const validation = validateScenario(scenario, routeConfig);
const missingLocks = routeIds.filter((routeId) => !scenario.some((item) => (item.rewards || []).some((reward) => (reward.flags || []).includes(`route_lock_${routeId}`))));
const missingBranches = [];
for (const day of [11, 12, 13, 14]) {
  const gate = scenario.find((item) => item.id === `day${day}-route-gate`);
  for (const routeId of routeIds) {
    if (!gate?.endingNext?.[routeId]?.startsWith(`day${day}-${routeId}-`)) missingBranches.push(`day${day}:${routeId}`);
  }
}
console.log(JSON.stringify({ valid: validation.valid, errors: validation.errors, missingLocks, missingBranches }, null, 2));
if (!validation.valid || missingLocks.length || missingBranches.length) process.exit(1);
NODE
```

Expected: `valid: true`, empty `missingLocks`, empty `missingBranches`.

- [ ] **Step 4: Commit final implementation if working tree policy allows it**

Use Lore format:

```bash
git add docs/scenario-authoring.md docs/story-rewrite-flow.md tests/ui-contract.test.mjs src/data/scenario/day10.js src/data/scenario/day11.js src/data/scenario/day12.js src/data/scenario/day13.js src/data/scenario/day14.js src/data/scenario/endings.js package.json scripts/qa-vn-flow.mjs

git commit -m "Intensify locked-route romance through implication

Constraint: Adult academy premise remains authoring-only and must not appear as in-game rating meta text
Rejected: Explicit sexual prose | It would clash with the VN tone and create real-person/age ambiguity risk
Confidence: high
Scope-risk: moderate
Directive: Keep future route-lock romance implication-based, route-specific, and graph-preserving
Tested: npm test && npm run test:story-lines && npm run build && node .omx/normalized-dup-scan.mjs && git diff --check
Not-tested: npm run qa:vn if local browser dependencies are unavailable"
```

---

## Self-Review

- Spec coverage: The plan covers the requested 2+3 blend: adult 분위기형 romance plus yandere/obsession pressure, without in-game adult labels.
- Safety coverage: It explicitly keeps the adult premise internal, treats characters as fictional VN characters, and blocks explicit sexual vocabulary in displayed text.
- Mechanics coverage: Every scenario task says to preserve IDs, graph fields, route locks, rewards, choices, and terminal endings.
- Test coverage: Tests lock no-meta/no-explicit text, route tension anchors, duplicate-template prevention, line count, build, graph validation, and optional Playwright QA.
- Placeholder scan: No TBD/TODO/fill-in placeholders are present.
