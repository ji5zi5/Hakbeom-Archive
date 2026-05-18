# Hakbeom BA React UI v16

업로드한 `BA_ui.svg` 기반 UI를 React/Vite로 포팅한 버전입니다.  
이번 버전은 `MENU` 클릭 시 로그를 바로 띄우지 않고, 레퍼런스처럼 우측 상단에 작은 메뉴 패널을 먼저 띄웁니다.


## 개발자/수정자 가이드

코드를 수정하기 전에는 [`docs/development-guide.md`](docs/development-guide.md)를 먼저 확인하세요. 시나리오만 수정할 때도 [`docs/scenario-authoring.md`](docs/scenario-authoring.md)의 graph/branch 규칙을 따라야 합니다.

## 실행

```bash
npm install
npm run dev
```

## 확인 주소

```txt
챕터/폰 프리뷰:
Day 1 카드:    http://localhost:5173/?id=day1-chapter-card
폰 답장:        http://localhost:5173/?id=phone-evening-message
Day 2 카드:    http://localhost:5173/?id=day2-chapter-card
Day 3 카드:    http://localhost:5173/?id=day3-chapter-card

대화창:        http://localhost:5173/?mode=dialogue
중앙 배너:     http://localhost:5173/?mode=banner
선택창:        http://localhost:5173/?mode=choice
AUTO 켜짐:     http://localhost:5173/?mode=dialogue&auto=1
```

## 메뉴 동작

`MENU`를 누르면 3개 버튼이 뜹니다.

```txt
↔ / 대각 화살표 : UI 숨김
목록 아이콘       : 백로그
≫ 아이콘          : 스토리 스킵 요약창
```

스킵 요약창은 다음 구조로 되어 있습니다.

```txt
요약
프롤로그
[스토리 요약 박스]
※ 이 이야기를 스킵하시겠습니까?
취소 / 확인
```

`확인`을 누르면 `episodeInfo.skipToId` 또는 `skipTarget: true`가 붙은 시나리오 라인으로 이동합니다.

## 키 조작

```txt
Space / Enter : 다음 진행 / 타이핑 즉시 출력
A             : AUTO 켜기/끄기
M             : MENU 열기/닫기
H             : UI 숨김
L             : 백로그 열기
S             : 스킵 요약창 열기
Esc           : 메뉴/모달 닫기
1             : 대화창 모드
2             : 중앙 배너 모드
3             : 선택창 모드
```

## 기본 구현된 기능

```txt
- AUTO 자동 진행
- MENU 퀵 패널
- UI 숨김
- 백로그
- 스토리 스킵 요약/확인 모달
- 선택지 UI
- 중앙 연출 배너
- 타이핑 출력
- 1~5번 캐릭터 포지션 프리셋
- 캐릭터 모션 클래스: bounce, shake, nod, enter-left, enter-right
- 감정 이펙트: exclamation, question, heart, anger, sweat, chatter, ellipsis, blush, sigh
- 선택지별 next id 이동
- BGM/ambient directive state와 BGM 볼륨 config
- Day/chapter 전환 카드
- Save/load 슬롯 카드: 챕터, 대사 미리보기, 호감도, 썸네일
- 현겸 expression profile fallback
- Phone/SNS 채팅 말풍선, 읽음, 입력중 표시
- 선택/클릭/확인 SE 연결용 sounds prop
```

## 대사와 스킵 요약 수정

자세한 작성 규칙은 [`docs/scenario-authoring.md`](docs/scenario-authoring.md)를 먼저 확인하세요.

`src/data/scenario.js`를 수정하면 됩니다.

```js
export const episodeInfo = {
  title: '프롤로그',
  summary: '스킵창에 보여줄 요약',
  skipToId: 'after-skip'
};

export const scenario = [
  { id: 'opening', type: 'dialogue', name: '학범', role: '학생회', text: '어라? 그런데 누구시죠?' },
  { id: 'card', type: 'banner', text: '어른의 카드를 꺼낸다.' },
  {
    id: 'choice-first',
    type: 'choice',
    choices: ['(입이 움직이지 않는다.)', '(앞이 보이지 않는다.)', '(몸이 잘 움직이지 않는다.)'],
    next: ['route-a', 'route-b', 'route-c']
  }
];
```

## 캐릭터 표시 예시

캐릭터 이미지를 `public/assets/character/`에 넣고 시나리오 라인에 `characters`를 추가하면 됩니다.

```js
{
  type: 'dialogue',
  name: '학범',
  role: '학생회',
  text: '좋은 아침이야, 선생.',
  characters: [
    {
      id: 'hakbeom',
      src: '/assets/character/hakbeom.png',
      position: 3,
      motion: 'bounce',
      effect: 'question'
    }
  ]
}
```

포지션은 `1, 2, 3, 4, 5`를 씁니다.

## 사운드 연결

```jsx
<BAVisualNovel
  sounds={{
    click: '/assets/se/click.mp3',
    choice: '/assets/se/choice.mp3',
    confirm: '/assets/se/confirm.mp3'
  }}
/>
```

각 시나리오 라인에 `se: '/assets/se/exclamation.mp3'`처럼 넣으면 그 줄에 진입할 때 재생됩니다. BGM/ambient는 `directives`에 `{ type: 'BGM', cue: 'bgmRain' }`, `{ type: 'AMBIENT', id: 'ambientRain', cue: 'ambientRain' }` 형태로 넣습니다.

## 폰트 적용

폰트 파일은 프로젝트 ZIP 안에 넣지 않았습니다. 네가 가진 `Font.zip`을 아래 폴더에 직접 풀면 CSS의 `@font-face`가 자동으로 적용됩니다.

```txt
public/assets/fonts/
  MainFont.ttf
  MainFont_Bold.ttf
  NotoSans-Regular.ttf
  NotoSans-Bold.ttf
  NotoSansTC-Bold.otf
  NotoSansTC-Medium.otf
  RSU_Regular.ttf
  RSU_BOLD.ttf
```
