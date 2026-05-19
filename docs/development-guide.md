# Development Guide

이 문서는 다른 사람이 이 저장소를 열어 코드를 수정할 때 먼저 봐야 할 개발 가이드다. 시나리오 작성 규칙은 [`docs/scenario-authoring.md`](scenario-authoring.md)를 함께 본다.

## 빠른 시작

```bash
npm install
npm test
npm run build
npm run dev
```

수정 후 기본 검증은 항상 다음 순서로 한다.

```bash
npm test
npm run build
npm audit --audit-level=moderate
```

시각 레이아웃을 건드렸다면 dev server를 켠 뒤 `scripts/capture-*.mjs` 계열 스크립트로 스크린샷을 확인한다. Playwright는 devDependency로 설치되어 있으므로, 새 환경에서는 `npm install` 후 필요하면 `npx playwright install chromium`으로 브라우저 바이너리를 준비한다. Linux에서 브라우저 런타임 라이브러리가 없으면 `npx playwright install-deps chromium`을 실행해야 하며, 이 명령은 시스템 패키지 설치 권한이 필요할 수 있다.

## 프로젝트 구조

```txt
src/main.jsx                     React entry
src/App.jsx                      episodeInfo/scenario를 BAVisualNovel에 연결
src/components/BAVisualNovel.jsx React UI, SVG scene, modal/controller glue
src/data/scenario.js             실제 시나리오와 episodeInfo
src/data/routeConfig.js          단일/다중 히로인 호감도, 챕터, 갤러리, 회상 설정
src/data/characterProfiles.js    캐릭터별 expression asset fallback
src/engine/vnEngine.js           진행, skip, ending, replay path 계산
src/engine/directorEngine.js     BCG/SCG/SE/E/MOOD/audio directive 적용
src/engine/audioEngine.js        BGM/ambient cue 정규화와 audio state 계산
src/engine/chapterEngine.js      chapter/day card 표시 조건 계산
src/engine/saveSummary.js        save slot 카드용 요약 metadata 생성
src/engine/phoneEngine.js        phone/SNS timeline 정규화
src/engine/saveCodec.js          save payload 생성/정규화
src/engine/scenarioValidator.js  시나리오 graph/DSL 검증
src/utils/vnState.js             호감도/flags/read/gallery/recollection 상태 helper
src/utils/relationshipState.js   호감도 조건/variants 매칭 helper
src/utils/vnText.js              대사 줄바꿈/텍스트 정규화
src/utils/accessibility.js       키보드 activation helper
tests/ui-contract.test.mjs       contract + semantic regression tests
scripts/                         선택적 스크린샷/시각 회귀 helper
public/assets/                   런타임 asset
```

## 수정 목적별로 만질 파일

| 하고 싶은 일 | 주로 수정할 곳 | 같이 확인할 곳 |
| --- | --- | --- |
| 대사/선택지/엔딩/phone/chapter 추가 | `src/data/scenario.js` | `docs/scenario-authoring.md`, `tests/ui-contract.test.mjs` |
| 호감도/갤러리/회상 조건 변경 | `src/data/routeConfig.js`, `src/utils/relationshipState.js` | `src/utils/vnState.js`, status modal/tests |
| 분기/스킵/엔딩/replay 동작 변경 | `src/engine/vnEngine.js` | semantic tests 추가 |
| BCG/SCG/SE/E/BGM/AMBIENT 연출 명령 변경 | `src/engine/directorEngine.js`, `src/engine/audioEngine.js` | scenario directive docs/tests |
| save/load 구조 변경 | `src/engine/saveCodec.js`, `src/engine/saveSummary.js` | save migration/정규화 tests |
| UI 배치/SVG/모달 변경 | `src/components/BAVisualNovel.jsx`, `src/styles.css` | screenshot capture, layout contract tests |
| 텍스트 줄바꿈 변경 | `src/utils/vnText.js` | Korean dialogue wrapping tests |
| 키보드/접근성 변경 | `src/utils/accessibility.js`, component handlers | keyboard behavior tests |

## 핵심 경계 규칙

### React component는 최종 조립자다

`BAVisualNovel.jsx`는 아직 큰 파일이지만, 새 핵심 로직을 여기에 계속 넣지 않는다. 가능한 한 아래처럼 분리한다.

- 순수 진행 계산: `vnEngine.js`
- 연출 상태 계산: `directorEngine.js`
- 저장 데이터 정규화: `saveCodec.js`
- 시나리오 유효성: `scenarioValidator.js`
- 반복 상태 변경 helper: `vnState.js`

새 기능이 테스트 가능한 순수 함수라면 먼저 `src/engine/` 또는 `src/utils/`로 빼고, React에서는 호출만 한다.


### VN polish helper 경계

- Audio playback side effects stay in `BAVisualNovel.jsx`; audio directive calculation stays in `src/engine/audioEngine.js`.
- Save card display metadata is built by `src/engine/saveSummary.js`; do not duplicate summary formatting inside modal JSX.
- Phone display data is normalized by `src/engine/phoneEngine.js` before rendering.
- Chapter/day card visibility is calculated by `src/engine/chapterEngine.js`; scenario authors control it with `kind: 'chapter'` and `chapter` metadata.
- Character expression asset fallback belongs in `src/data/characterProfiles.js`; scenario files should reference expression names, not duplicate fallback paths.
- 새 히로인을 추가할 때는 `routeConfig.affectionTargets`, `characterProfiles`, scenario reward/endingRules, terminal ending, contract test를 함께 갱신한다.

### scenario는 데이터, validator는 계약이다

시나리오를 추가할 때 validator를 우회하지 않는다. 정상 플레이에 들어가는 장면은 시작점에서 도달 가능해야 하고, 프리뷰/테스트용 장면만 `previewOnly: true`를 붙일 수 있다.

### routeConfig는 해금/호감도의 원본이다

갤러리/회상 ID를 scenario reward에 직접 새로 쓰기 전에 `routeConfig.js`에 먼저 등록한다. validator가 없는 ID를 에러로 잡아야 정상이다.
호감도는 100점 만점이 기본 계약이다. `routeLockThreshold`는 의미 있는 루트 투자선(현재 70), 엔딩 조건은 normal 60+, good/캐릭터 85+를 기준으로 맞춘다. 플레이 중 보상 토스트를 띄우기보다 `variants`와 STATUS 모달/save summary가 관계 변화를 보여줘야 한다. 0~10 스케일을 쓰던 저장 데이터는 `SAVE_VERSION = 2`에서 100점 스케일로 마이그레이션한다.

### 저장 데이터는 신뢰하지 않는다

localStorage에서 온 save/settings는 항상 깨질 수 있다. 저장 구조를 바꾸면 `saveCodec.js`에서 정규화/마이그레이션을 먼저 추가하고, corrupt payload 테스트를 추가한다.

## 런타임 흐름 요약

1. `App.jsx`가 `episodeInfo`와 `scenario`를 `BAVisualNovel`에 넘긴다.
2. `BAVisualNovel`이 현재 index, gameState, directorState, settings, save slots를 가진다.
3. 다음 진행은 `resolveNextIndex()` 또는 choice/phone 선택 처리로 이동한다.
4. 장면 진입 시 `applyDirectorItem()`이 배경/캐릭터/효과음/오버레이 상태를 만든다.
5. 선택지 reward는 `applyRouteRewards()`를 거친 뒤 `applyRouteUnlocks()`로 갤러리/회상 해금을 반영한다.
6. 대사 variants는 `variantMatchesState()`가 flags와 affection 범위를 함께 평가해 현재 관계 단계에 맞는 문장을 고른다.
7. 자동 저장은 `createSavePayload()`를 통해 localStorage에 저장된다.
8. 로드는 `normalizeSavePayload()`를 거쳐 index, settings, gameState, directorState를 안전하게 복원한다.
9. 중간 `routeGate`는 루트 분기만 계산하고 엔딩 UI를 띄우지 않는다. route gate는 `route_lock_<id>` 선택을 따라 Day 11~14 payoff를 고르지만, 실제 `terminal` 캐릭터 엔딩은 별도의 85+ 호감도 조건을 통과해야 한다. `terminal` 엔딩에 도달하면 엔딩 패널에서 `타이틀로` 또는 `처음부터`를 선택할 수 있다.

## 테스트 작성 기준

현재 `tests/ui-contract.test.mjs`에는 source regex contract와 semantic tests가 섞여 있다. 새 동작을 추가할 때는 가능하면 semantic test를 먼저 추가한다.

좋은 테스트 예:

- 잘못된 scenario가 `validateScenario()`에서 에러를 내는지
- 특정 선택지가 특정 target으로 가는지
- corrupt save가 안전한 index/settings/gameState로 normalize되는지
- route affection이 max를 넘지 않는지
- replay path가 ending target을 포함하는지

피해야 할 테스트:

- 구현 문자열만 확인하고 실제 함수 동작을 검증하지 않는 테스트
- UI 텍스트/위치 수정마다 쉽게 깨지는 과도한 정규식
- 실패 이유가 불명확한 큰 통합 assertion

그래도 SVG path나 reference UI를 보호해야 하는 경우에는 regex contract를 유지할 수 있다.

## 접근성 규칙

- 실제 HTML 버튼을 쓸 수 있으면 `<button>`을 우선한다.
- SVG `<g role="button">`를 쓰면 반드시 `tabIndex="0"`, `aria-label`, `onKeyDown={createKeyboardActivationHandler(...)}`를 같이 둔다.
- 새 모달/패널은 닫기 버튼과 `aria-label`을 제공한다.
- 키보드 단축키가 입력/버튼/role button focus를 방해하지 않도록 `isInteractiveKeyTarget()` 류의 guard를 확인한다.

## UI/비주얼 수정 규칙

- `STAGE`는 1129×524 기준이다. stage 비율을 바꾸면 CSS contain sizing과 screenshot helper도 같이 확인한다.
- 상단 `AUTO/MENU`, quick menu path, 선택지 row 위치는 reference 이미지에 맞춘 값이라 임의로 크게 바꾸지 않는다.
- 캐릭터 5구역 위치는 `docs/scenario-authoring.md`의 `pos`/`position` 표를 따른다. 프리셋 좌표 자체를 바꾸면 기존 시나리오 구도가 전부 달라질 수 있다.
- 레이아웃 변경 후에는 `npm test`, `npm run build` 외에 브라우저 확인이나 캡처를 한다.
- asset path는 `/assets/...`로 시작해야 한다. Scene background는 우선 `/assets/bg/...`를 쓰고, `/assets/ui/image0_13_6.jpg` 반복 사용은 피한다.

## Asset 규칙

- 게임에 쓰는 asset은 `public/assets/` 아래에 둔다.
- 캐릭터: `public/assets/character/`
- 배경/UI/CG: `public/assets/ui/` 또는 `public/assets/bg/`
- Generated VN 배경은 `public/assets/bg/<name>.png`와 `<name>.prompt.txt`를 쌍으로 둔다.
- VN 배경 생성/후처리는 GitHub `0x0funky/agent-sprite-forge`를 프로젝트 로컬 `.codex/skills/generate2dmap`에 설치한 워크플로우를 기준으로 한다. 임의 SVG 배경을 추가하지 않는다.
- 효과음: `public/assets/se/`
- 폰트: `public/assets/fonts/`
- 작업용 reference 이미지는 repo root에 두지 말고, 필요하면 별도 문서에 출처/용도만 기록한다. root reference upload는 `.gitignore` 대상이다.

## Save/Load 변경 체크리스트

save 관련 코드를 바꾸면 다음을 확인한다.

1. `SAVE_VERSION` 변경이 필요한지 판단한다. 호감도 스케일처럼 저장값 의미가 바뀌면 반드시 버전을 올리고 `normalizeSavePayload()`에 마이그레이션 테스트를 추가한다.
2. 기존 payload를 읽었을 때 안전하게 normalize되는지 테스트한다.
3. out-of-range index는 `itemId` 또는 fallback으로 복구되는지 확인한다.
4. settings 숫자는 UI 범위 안으로 clamp되는지 확인한다. 현재 범위는 text 8~60ms, auto 500~2600ms, BGM/SE 0~100이다.
5. directorState schema가 바뀌면 저장값을 그대로 신뢰하지 말고 replay로 복원한다.

## Scenario 변경 체크리스트

자세한 규칙은 [`docs/scenario-authoring.md`](scenario-authoring.md)를 따른다. 최소 체크는 다음이다.

1. ID 중복 없음.
2. `next`, `nextId`, `endingNext`, `skipToId` target 존재.
3. choice/phone의 선택지, rewards, next 배열 길이 일치.
4. 정상 장면은 시작점에서 reachable. chapter card와 phone timeline도 예외가 아니다.
5. 프리뷰 전용 장면은 `previewOnly: true`.
6. 새 unlock ID는 `routeConfig.js`에 등록.
7. terminal ending은 150자 이상의 여운/다음 약속을 포함해서 갑자기 끊기지 않게 한다.
8. `npm test` 통과.

## Git/커밋 규칙

- 작업 전 `git status --short`로 현재 변경사항을 확인한다.
- 동작 변경은 테스트와 같이 커밋한다.
- 생성물인 `node_modules/`, `dist/`, `.omx/`, root reference images는 커밋하지 않는다.
- 커밋 메시지는 의도 중심으로 쓴다.

예:

```txt
Enforce explicit VN graph semantics before expansion

Constraint: Scenario content must not create unreachable normal-flow nodes.
Tested: npm test; npm run build
```

## 코드리뷰 전 셀프 체크

- [ ] `npm test` 통과
- [ ] `npm run build` 통과
- [ ] dependency 변경 시 `npm audit --audit-level=moderate` 통과
- [ ] 새 scenario 규칙은 `docs/scenario-authoring.md`에 반영
- [ ] 새 엔진/저장/연출 규칙은 이 문서에 반영
- [ ] UI 변경이면 screenshot 또는 브라우저 확인
- [ ] 접근성: mouse-only control 추가하지 않음
- [ ] save/load 변경이면 corrupt payload 테스트 추가

## 지금 남아있는 구조적 개선 후보

당장 수정 필수는 아니지만, 큰 확장 전에 우선순위가 높은 항목이다.

1. `BAVisualNovel.jsx`를 controller hook과 presentational scenes로 분리.
2. `routeConfig`를 component hard import가 아니라 episode pack prop으로 전달.
3. `saveCodec`에 명시적인 version migration 분기 추가.
4. `tests/ui-contract.test.mjs`의 regex 비중을 줄이고 semantic tests를 늘리기.
5. Playwright visual test를 정식 devDependency/script로 둘지 결정.

## Season 1 Longform Expansion Notes

- Batch 1 이후 `src/data/scenario.js`가 약 1,400–1,600줄에 가까워지거나 둘 이상의 작업자가 서로 다른 챕터를 병렬 편집해야 하면, Batch 2 전에 `src/data/scenario/` 모듈 구조로 분리한다.
- Batch 1 checkpoint (2026-05-18): `src/data/scenario.js` is 1,400 lines after Day 4, so Batch 2 should start by modularizing scenario data before adding Day 5.
- Batch 2 checkpoint (2026-05-18): scenario content now lives in `src/data/scenario/day*.js` plus `endings.js`; keep `src/data/scenario.js` as the public facade so existing imports stay stable.
- 10k-line contract: longform work is not complete until `npm run test:story-lines` reports at least 10,000 total source lines across `src/data/scenario.js` and `src/data/scenario/*.js`. The 2026-05-19 autoresearch rewrite currently verifies 22,814 scenario source lines and 869 runtime scenes.
- Day 11–14 route payoff uses `endingGate` scenes with `routeGate: true` as deterministic route gates. Route gates may follow explicit `route_lock_<id>` flags for payoff routing, but terminal route endings must still carry 85+ affection requirements. Keep replay target scoring aware of ending gates so long scenarios do not make `findReplayPath()` explore every branch first.
- 저장 요약은 장기적으로 단일 `affectionTarget`이 아니라 dominant route / 대표 루트를 보여줘야 한다. 여러 호감도가 동시에 존재하면 `resolveDominantRoute()`의 tie-break 기준을 따른다.
- route lock, 100점 호감도/status modal, dominant-route save summary, generated background manifest는 Season 1 확장의 핵심 계약이므로 테스트 없이 수정하지 않는다.
- Day 6–9는 `longformDatingExpansionScenes`가 opening 뒤에 끼어드는 자유행동 구간을 가진다. 각 day는 3개 hub × 3개 선택으로 총 9명 route를 직접 만나게 하며, branch는 `entry -> answer -> reaction -> close` 4-beat 대화 구조를 유지한다. 새 branch는 반드시 학범의 직접 대답과 high-affection variant를 포함한다.
- Longform route background 명명(`day6-<route>-study`, `day7-<route>-rain`, `day8-<route>-festival`, `day9-<route>-rumor`)은 향후 500-map production batch의 목표 규칙이다. 직접 생성된 PNG + prompt sidecar + `agent-sprite-forge-manifest.json` `sourceGeneratedImage` provenance가 준비되기 전에는 기존 direct generated 배경만 scenario BCG에 연결한다. `derivedFrom`/색보정 파생 배경은 커밋하지 않는다.

## Visual Regression Capture

- Playwright is installed as a dev dependency and exposed through `npm run capture:vn`.
- If the host lacks Chromium libraries and sudo is unavailable, keep local extracted packages under `.deps/playwright-libs/`; `scripts/capture-vn-regression.mjs` prepends that path to `LD_LIBRARY_PATH` automatically.
- Run a Vite dev server first, then capture with `VN_CAPTURE_BASE_URL=http://127.0.0.1:<port> npm run capture:vn`.
