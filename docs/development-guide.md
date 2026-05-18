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

시각 레이아웃을 건드렸다면 dev server를 켠 뒤 `scripts/capture-*.mjs` 계열 스크립트로 스크린샷을 확인한다. Playwright는 현재 필수 의존성이 아니므로, 캡처 스크립트는 로컬 환경에 Playwright가 준비된 경우에만 사용한다.

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
| 호감도/갤러리/회상 조건 변경 | `src/data/routeConfig.js` | `src/utils/vnState.js`, validator tests |
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

### 저장 데이터는 신뢰하지 않는다

localStorage에서 온 save/settings는 항상 깨질 수 있다. 저장 구조를 바꾸면 `saveCodec.js`에서 정규화/마이그레이션을 먼저 추가하고, corrupt payload 테스트를 추가한다.

## 런타임 흐름 요약

1. `App.jsx`가 `episodeInfo`와 `scenario`를 `BAVisualNovel`에 넘긴다.
2. `BAVisualNovel`이 현재 index, gameState, directorState, settings, save slots를 가진다.
3. 다음 진행은 `resolveNextIndex()` 또는 choice/phone 선택 처리로 이동한다.
4. 장면 진입 시 `applyDirectorItem()`이 배경/캐릭터/효과음/오버레이 상태를 만든다.
5. 선택지 reward는 `applyRouteRewards()`를 거친 뒤 `applyRouteUnlocks()`로 갤러리/회상 해금을 반영한다.
6. 자동 저장은 `createSavePayload()`를 통해 localStorage에 저장된다.
7. 로드는 `normalizeSavePayload()`를 거쳐 index, settings, gameState, directorState를 안전하게 복원한다.

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
- Generated VN 배경은 `public/assets/bg/<name>.svg`와 `<name>.prompt.txt`를 쌍으로 둔다.
- 효과음: `public/assets/se/`
- 폰트: `public/assets/fonts/`
- 작업용 reference 이미지는 repo root에 두지 말고, 필요하면 별도 문서에 출처/용도만 기록한다. root reference upload는 `.gitignore` 대상이다.

## Save/Load 변경 체크리스트

save 관련 코드를 바꾸면 다음을 확인한다.

1. `SAVE_VERSION` 변경이 필요한지 판단한다.
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
7. `npm test` 통과.

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
