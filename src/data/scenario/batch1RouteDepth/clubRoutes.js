import {
  ROUTE_DEPTH_BATCH_ID,
  routeDepthRoutes,
  routeDepthSceneBackgroundBindings,
  routeDepthSceneMetadata
} from './routeDepthBatchMatrix.js';

const clubRouteSpecs = {
  sangwon: {
    name: '상원', role: '학생회 기록 담당', expression: 'quiet', effect: 'question',
    scenes: [
      ['상원은 분 단위로 접힌 기록표를 내밀었다. “네가 누구와 얼마나 있었는지 적었어. 감시처럼 보이면 찢어도 돼.” 학범은 표 맨 아래 빈칸을 짚었다. “찢지 않을게. 대신 여기엔 네가 왜 불안했는지 같이 쓰자.”', 'tense', '학생회 기록실'],
      ['학범은 상원의 펜을 돌려주며 말했다. “내 마음은 네 표로 대신 정리할 수 없어. 그래도 네가 확인하고 싶었던 떨림은 숨기지 않을게.” 상원은 펜촉을 멈추고 “그럼 오늘 기록은 동의받은 문장만 남길게”라고 답했다.', 'warm', '학생회 기록실'],
      ['상원은 소문이 옮겨 간 경로를 색 펜으로 잇다가 마지막 선을 지웠다. “여기서부터는 네 마음이라 내가 적으면 안 돼.” 학범은 젖은 종이를 눌렀다. “맞아. 하지만 네가 옆에서 틀린 소문을 막아 주면, 나는 내 문장을 말할 수 있어.”', 'tense', '비 내리는 학생회 기록실'],
      ['상원은 학범 이름이 들어간 전시 라벨 세 장을 꺼냈다가 다시 숨겼다. “넣고 싶었는데 네가 부담스러울까 봐 뺐어.” 학범은 라벨 한 장을 받아 들었다. “뺀 흔적까지 봤어. 나를 소유하지 않으려고 멈춘 것도 네 마음이잖아.”', 'warm', '아카이브 전시실'],
      ['상원은 기록집 잠금끈을 손가락에 감았다. “네 선택이 공개되면 누가 먼저 상처받을지 계산했어. 그래서 네 이름을 숨기고 싶어졌어.” 학범은 끈을 느슨하게 풀었다. “숨기는 대신 나한테 물어봐. 내가 말할 수 있는 만큼은 네 앞에서 직접 말할게.”', 'tense', '야간 학생회 기록대'],
      ['상원은 밤새 고친 기록집 첫 장을 학범에게만 보여 주었다. “수정 요청은 받지 않을게. 대신 공개 범위는 네가 정해.” 학범은 자기 이름 옆에 작은 동그라미를 그렸다. “오늘은 여기까지 공개. 네가 기다렸다는 사실은 나한테만 보여 줘.”', 'warm', '아침 문화제 기록집'],
      ['고백 이벤트 시간이 사라지자 상원은 남의 손이 닿은 페이지부터 확인했다. “내가 더 빨리 잠갔어야 했어. 네 마음이 훔쳐진 것 같아서 미칠 것 같아.” 학범은 기록집을 함께 덮었다. “훔쳐진 건 시간이야. 마음은 아직 여기 있고, 네가 나를 묻기 전엔 아무도 못 가져가.”', 'tense', '비상등 아래 기록 보관함'],
      ['상원은 관람객에게 공개할 기록과 둘만 남길 기록을 분리했다. “내가 제일 갖고 싶던 문장은 숨겨도 돼?” 학범은 빈 페이지 위에 손을 얹었다. “응. 대신 숨기는 게 아니라 보관하는 거야. 오늘부터 그 페이지는 우리 둘이 같이 열자.”', 'confession', '문화제 아카이브 전시실']
    ]
  },
  sanguk: {
    name: '상욱', role: '운동부', expression: 'energetic', effect: 'chatter',
    scenes: [
      ['상욱은 문제집과 물병을 안고 달려오다 학범 앞에서 급정거했다. “뛰면 혼난다길래 거의 안 뛰었어. 진짜야.” 학범은 숨을 고르는 그를 보고 웃었다. “그럼 오늘은 점수보다 속도 맞추기부터 하자. 네가 멈춰 주면 나도 옆에 오래 있을 수 있어.”', 'energetic', '체육관 복도'],
      ['학범은 상욱이 펼쳐 둔 문제집 한가운데에 손가락을 올렸다. “네가 먼저 답을 말하지 않아도 괜찮아. 기다리는 동안 네 마음이 사라지는 건 아니잖아.” 상욱은 무릎 위 주먹을 풀며 “그럼 나, 천천히 좋아해도 되는 거야?”라고 물었다.', 'warm', '체육관 복도 벤치'],
      ['상욱은 소문을 낸 사람을 찾겠다며 문 쪽으로 몸을 돌렸다가 학범의 표정을 보고 멈췄다. “나 또 먼저 뛰려고 했지.” 학범은 젖은 수건을 건넸다. “응. 그래도 이번엔 멈췄잖아. 지금 필요한 건 네가 대신 싸우는 게 아니라, 내 옆에서 같이 젖어 주는 거야.”', 'tense', '비 젖은 체육관 입구'],
      ['상욱은 미끄러운 계단을 먼저 오르내리며 손잡이를 확인했다. “내가 먼저 가 볼게. 아니, 네 손 잡고 가도 돼?” 학범은 손을 내밀었다. “물어봐 줘서 좋아. 잡아 줘. 대신 끌고 가지 말고, 같은 박자로 내려가자.”', 'warm', '체육관 무대 뒤'],
      ['상욱은 빈 관중석을 향해 몇 번이나 출발 자세를 잡았다가 풀었다. “네가 누구를 고를지 기다리는 거, 솔직히 너무 어렵다.” 학범은 옆자리에 앉았다. “어려워도 도망가지 않고 말해 줬잖아. 오늘은 그게 나한테 제일 빨리 도착한 마음이야.”', 'tense', '불 꺼진 체육관 관중석'],
      ['상욱은 복도 끝에서 뛰어오다 학범 한 걸음 앞에서 멈췄다. “잡고 싶은데 먼저 물어볼게. 지금 잡아도 돼?” 학범은 그의 손목 대신 손바닥을 잡았다. “응. 이렇게. 네가 멈춘 다음 내 대답을 기다린 게 좋아.”', 'warm', '아침 체육관 동선'],
      ['사라진 고백 페이지 이야기를 듣자 상욱은 장비실 문을 박차려다 손잡이를 놓았다. “또 늦을까 봐 무서워. 그래서 세게 붙잡고 싶어져.” 학범은 문 앞에 같이 섰다. “늦지 않았어. 네가 멈춰서 내 말을 기다리는 지금이, 제일 정확한 타이밍이야.”', 'tense', '체육관 장비실 앞'],
      ['상욱은 환호가 들리는 쪽으로 뛰지 않고 학범 앞에 섰다. “오늘은 먼저 안 달릴게. 네가 오라고 하면 그때 갈래.” 학범은 웃으며 한 걸음 다가갔다. “그럼 와. 같은 속도로. 나는 네가 기다리는 법까지 배운 걸 좋아하게 됐어.”', 'confession', '문화제 체육관 무대 뒤']
    ]
  },
  junhyeok: {
    name: '준혁', role: '문화제 동선 담당', expression: 'thinking', effect: 'ellipsis',
    scenes: [
      ['준혁은 공부 동선표 옆에 학범의 표정 변수를 적었다. “효율만 보면 혼자가 맞아. 그런데 네가 혼자 있을 때 집중률이 떨어져.” 학범은 별표가 찍힌 자리를 가리켰다. “그럼 계산에 내 기대도 넣어. 오늘은 네 옆이 정답이면 좋겠어.”', 'calm', '도서관 지도 테이블'],
      ['학범은 준혁이 접어 둔 지도를 다시 펼쳤다. “너는 빠른 길을 잘 찾지만, 내가 일부러 돌아가고 싶을 때도 있잖아.” 준혁은 자를 내려놓았다. “비효율을 선택하는 이유가 나라면, 그 경로는 삭제하지 않을게.”', 'warm', '도서관 지도 테이블'],
      ['준혁은 소문 확산 경로를 세 줄로 압축했다. “근거는 약한데 네 반응은 강해. 그래서 계산이 틀린 것 같아.” 학범은 지도 아래쪽을 눌렀다. “틀린 게 아니라 빠진 거야. 네가 걱정했다는 값. 그걸 말로 넣어 줘.”', 'tense', '계단참 지도 게시판'],
      ['준혁은 관람객 흐름 위에 학범이 멈출 확률이 높은 지점을 표시했다. “여기와 여기. 둘 다 내가 있는 위치라 객관성이 떨어진다.” 학범은 표시를 하나 더했다. “객관성은 잠깐 빼. 내가 널 찾아갈 확률도 네가 계산해 줬으면 했어.”', 'warm', '전시 동선 지도 앞'],
      ['준혁은 선택지를 세 개만 남겼다. “도망, 침묵, 고백. 네가 첫 번째를 지웠으면 좋겠어.” 학범은 도망 칸에 선을 그었다. “그럼 남은 두 개는 네 앞에서 고를게. 침묵도, 고백도, 네가 보는 곳에서.”', 'tense', '복도 지도 게시판'],
      ['준혁은 학범이 돌아갈 수 있는 짧은 길 하나를 붉은 선으로 막아 두었다. “도망 경로를 줄였어. 마음에 안 들면 복구할게.” 학범은 그 선 위에 작은 하트를 그렸다. “복구하지 마. 오늘은 네가 막아 둔 길 덕분에 여기 남고 싶어졌어.”', 'warm', '아침 동선 지도 앞'],
      ['준혁은 사라진 페이지의 이동 시간을 계산하다가 펜을 멈췄다. “가장 위험한 경우의 수는 네가 혼자 처리하려는 거야.” 학범은 지도 위 빈칸을 손바닥으로 덮었다. “그러니까 같이 계산해 줘. 단, 마지막 선택지는 숫자가 아니라 내 목소리로 남길게.”', 'tense', '분실물 지도 테이블'],
      ['준혁은 최단 경로를 접어 주머니에 넣었다. “빠른 길은 알아. 그런데 오늘은 네가 천천히 오는 쪽이 더 정확해 보여.” 학범은 접힌 지도를 받아 들었다. “응. 돌아가도 네가 기다리는 곳이면 목적지는 안 틀려. 나, 네 옆으로 갈게.”', 'confession', '문화제 동선 게시판']
    ]
  }
};

const metadataBySceneId = new Map(routeDepthSceneMetadata.map((entry) => [entry.sceneId, entry]));
const backgroundBySceneId = new Map(routeDepthSceneBackgroundBindings.map((entry) => [entry.sceneId, entry.backgroundId]));
const routeById = new Map(routeDepthRoutes.map((route) => [route.id, route]));

function buildClubScene(routeId, index) {
  const spec = clubRouteSpecs[routeId];
  const route = routeById.get(routeId);
  const sceneId = route.sceneIds[index];
  const metadata = metadataBySceneId.get(sceneId);
  const backgroundId = backgroundBySceneId.get(sceneId);
  const [text, mood, place] = spec.scenes[index];
  const speakerIsHakbeom = index % 2 === 1;
  return {
    id: sceneId,
    type: 'dialogue',
    chapter: 'day-14',
    mood,
    routeId,
    expansionBatch: ROUTE_DEPTH_BATCH_ID,
    arcId: metadata.arcId,
    arcStage: metadata.arcStage,
    batchModule: 'batch1RouteDepth',
    name: speakerIsHakbeom ? '학범' : spec.name,
    role: speakerIsHakbeom ? '학생회' : spec.role,
    place,
    text,
    nextId: index < route.sceneIds.length - 1 ? route.sceneIds[index + 1] : 'day14-merge',
    effect: speakerIsHakbeom ? undefined : { target: routeId, type: spec.effect },
    directives: [
      { type: 'BCG', src: `/assets/bg/${backgroundId}.png`, transition: index % 2 === 0 ? 'fade-in' : 'hold' },
      { type: 'SCG', id: routeId, name: spec.name, action: index === 0 ? 'enter' : 'update', pos: 3, expression: spec.expression, transition: 'fade-in' },
      { type: 'E', target: routeId, effect: spec.effect, motion: spec.effect === 'chatter' ? 'bounce' : 'nod' }
    ],
    variants: index === 6 ? [{ affection: { [routeId]: { min: 85 } }, text: text.replace('학범은', '높은 친밀도를 믿고 학범은') }] : undefined
  };
}

export const clubRouteDepthScenes = ['sangwon', 'sanguk', 'junhyeok'].flatMap((routeId) =>
  Array.from({ length: 8 }, (_, index) => buildClubScene(routeId, index))
);
