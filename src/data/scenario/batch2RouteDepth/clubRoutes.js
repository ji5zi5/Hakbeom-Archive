export const ROUTE_DEPTH_BATCH2_ID = 'route-depth-2026-05-batch2';

const CLUB_BATCH2_STAGE_BY_INDEX = [
  'beginning',
  'support',
  'escalation',
  'support',
  'escalation',
  'support',
  'payoff',
  'payoff'
];

const CLUB_BATCH2_BACKGROUND_BY_INDEX = [0, 1, 2, 3, 4, 5, 4, 5];

export const clubRouteDepthBatch2Matrix = [
  {
    routeId: 'sangwon',
    routeName: '상원',
    arcId: 'sangwon-consent-archive-batch2',
    entrySceneId: 'batch2-sangwon-01',
    exitSceneId: 'batch2-sangwon-08',
    previousSceneId: 'batch1-sangwon-08',
    returnSceneId: 'day14-merge',
    sceneIds: Array.from({ length: 8 }, (_, index) => `batch2-sangwon-${String(index + 1).padStart(2, '0')}`),
    backgroundIds: [
      'day6-sangwon-study',
      'day7-sangwon-rain',
      'day8-sangwon-festival',
      'day9-sangwon-rumor',
      'day11-sangwon-morning',
      'day13-sangwon-truth'
    ]
  },
  {
    routeId: 'sanguk',
    routeName: '상욱',
    arcId: 'sanguk-waiting-pace-batch2',
    entrySceneId: 'batch2-sanguk-01',
    exitSceneId: 'batch2-sanguk-08',
    previousSceneId: 'batch1-sanguk-08',
    returnSceneId: 'day14-merge',
    sceneIds: Array.from({ length: 8 }, (_, index) => `batch2-sanguk-${String(index + 1).padStart(2, '0')}`),
    backgroundIds: [
      'day6-sanguk-study',
      'day7-sanguk-rain',
      'day8-sanguk-festival',
      'day9-sanguk-rumor',
      'day11-sanguk-morning',
      'day13-sanguk-truth'
    ]
  },
  {
    routeId: 'junhyeok',
    routeName: '준혁',
    arcId: 'junhyeok-inefficient-route-batch2',
    entrySceneId: 'batch2-junhyeok-01',
    exitSceneId: 'batch2-junhyeok-08',
    previousSceneId: 'batch1-junhyeok-08',
    returnSceneId: 'day14-merge',
    sceneIds: Array.from({ length: 8 }, (_, index) => `batch2-junhyeok-${String(index + 1).padStart(2, '0')}`),
    backgroundIds: [
      'day6-junhyeok-study',
      'day7-junhyeok-rain',
      'day8-junhyeok-festival',
      'day9-junhyeok-rumor',
      'day11-junhyeok-morning',
      'day13-junhyeok-truth'
    ]
  }
];

export const clubRouteDepthBatch2SceneMetadata = clubRouteDepthBatch2Matrix.flatMap((route) => (
  route.sceneIds.map((sceneId, index) => ({
    sceneId,
    routeId: route.routeId,
    expansionBatch: ROUTE_DEPTH_BATCH2_ID,
    arcId: route.arcId,
    arcStage: CLUB_BATCH2_STAGE_BY_INDEX[index]
  }))
));

export const clubRouteDepthBatch2BackgroundBindings = clubRouteDepthBatch2Matrix.flatMap((route) => (
  route.sceneIds.map((sceneId, index) => ({
    sceneId,
    routeId: route.routeId,
    backgroundId: route.backgroundIds[CLUB_BATCH2_BACKGROUND_BY_INDEX[index]]
  }))
));

const clubRouteDepthBatch2Specs = {
  sangwon: {
    name: '상원',
    role: '학생회 기록 담당',
    expression: 'quiet',
    effect: 'question',
    place: '문화제 기록 보관함',
    scenes: [
      {
        mood: 'warm',
        place: '문화제 기록 보관함',
        text: '상원은 새 기록지 첫 줄에 학범 이름을 쓰지 않고 빈칸으로 남겼다. “이번엔 네가 허락한 말만 적을 거야. 내가 먼저 알고 싶어도, 네가 말하기 전에는 기록하지 않을게.” 학범은 펜 뚜껑을 열어 주며 말했다. “그럼 첫 줄은 같이 쓰자. 허락이라는 단어부터.”'
      },
      {
        mood: 'warm',
        place: '비 내리는 학생회실',
        text: '학범은 젖은 출입 명단을 상원 앞에 놓았다. “네가 불안해서 확인한 건 알아. 하지만 내가 어디 있었는지보다, 네가 왜 나를 기다렸는지가 더 듣고 싶어.” 상원은 숫자를 지우고 작게 답했다. “기록보다 네 대답이 늦어질까 봐 무서웠어.”'
      },
      {
        mood: 'tense',
        place: '문화제 전시 라벨 앞',
        text: '상원은 라벨마다 붙어 있던 학범의 이름표를 떼어 봉투에 넣었다. “사람들이 네 선택을 먼저 읽을까 봐 전부 숨겼어. 그런데 숨기면 너까지 없어지는 것 같아서 더 무서워졌어.” 학범은 빈 라벨을 들고 고개를 저었다. “나는 없어지지 않았어. 네가 직접 물어봐 주면 여기 있어.”'
      },
      {
        mood: 'warm',
        place: '아카이브 전시실',
        text: '학범은 봉투 한 귀퉁이에 자기 이름 대신 상원의 이름을 적었다. “내 선택을 전시물처럼 고정하지 말자. 대신 오늘 네가 멈춘 순간은 남겨도 돼.” 상원은 그 문장을 오래 보고 “멈춘 것도 기록해도 되는 마음이구나”라고 숨을 풀었다.'
      },
      {
        mood: 'tense',
        place: '야간 학생회 기록대',
        text: '소문을 정정하는 방송 초안 앞에서 상원은 손을 떨었다. “정정하면 네 이름이 더 많이 불릴 거야. 내가 지키려고 한 일이 오히려 너를 공개할까 봐 겁나.” 학범은 초안 아래 빈칸을 가리켰다. “그럼 내 목소리로 정정할게. 네 역할은 나를 숨기는 게 아니라, 내가 말할 자리를 지키는 거야.”'
      },
      {
        mood: 'warm',
        place: '아침 문화제 기록집',
        text: '상원은 기록집 공개본과 비공개본을 나란히 펼쳤다. “여기부터는 우리 둘만 아는 페이지야. 네가 싫으면 태울게.” 학범은 비공개본을 덮지 않았다. “태우지 마. 대신 열쇠는 둘이 하나씩 갖자. 네가 혼자 잠그지 않도록.”'
      },
      {
        mood: 'confession',
        place: '비상등 아래 기록 보관함',
        text: '상원은 마지막 페이지를 찢지 못한 채 웃지 않았다. “내가 가진 말 중에 제일 욕심나는 건 네가 나를 골랐다는 기록이야. 그런데 그걸 내가 쓰면 훔친 문장 같아.” 학범은 찢어진 선을 손끝으로 눌렀다. “그 문장은 내가 쓸게. 너는 옆에서 날짜만 적어 줘.”'
      },
      {
        mood: 'confession',
        place: '문화제 아카이브 전시실',
        text: '학범은 빈 기록 카드에 천천히 적었다. “오늘, 내가 상원을 선택했다.” 상원은 그 문장을 바로 덮지 않고 학범을 보았다. “보관해도 돼?” 학범은 카드 위에 손을 겹쳤다. “응. 하지만 증거라서가 아니라, 우리가 함께 남기기로 한 약속이라서.”'
      }
    ]
  },
  sanguk: {
    name: '상욱',
    role: '운동부',
    expression: 'energetic',
    effect: 'chatter',
    place: '체육관 복도',
    scenes: [
      {
        mood: 'warm',
        place: '체육관 복도',
        text: '상욱은 출발선처럼 테이프가 붙은 복도 앞에서 두 손을 번쩍 들었다. “오늘은 안 뛰고 기다릴게. 딱 여기서.” 학범이 웃자 그는 발끝을 겨우 붙잡았다. “기다리는 것도 연습하면 늘까?” 학범은 테이프 옆에 섰다. “늘어. 방금처럼 나한테 물어보면.”'
      },
      {
        mood: 'warm',
        place: '체육관 복도 벤치',
        text: '학범은 상욱의 풀린 운동화 끈을 보고 무릎을 굽혔다. “빨리 달리는 것도 좋지만, 네가 넘어지면 내가 더 놀라.” 상욱은 손을 내밀다 멈췄다. “잡아도 돼?” 학범은 끈을 묶고 그 손을 잡았다. “응. 이번엔 같이 일어나자.”'
      },
      {
        mood: 'tense',
        place: '비 젖은 체육관 입구',
        text: '상욱은 소문을 들은 학생들이 웃는 쪽으로 한 걸음 나갔다가 스스로 발을 멈췄다. “나 또 뛰려고 했지. 네가 싫어할까 봐 멈췄는데, 멈추니까 더 화나.” 학범은 젖은 손목을 붙잡았다. “화내도 돼. 대신 내 앞을 막지 말고 내 옆에 서 줘.”'
      },
      {
        mood: 'warm',
        place: '체육관 무대 뒤',
        text: '학범은 상욱이 놓아 둔 물병 두 개를 나란히 세웠다. “하나는 네가 마시고, 하나는 내가 마실게. 네가 나를 챙기는 동안 네 숨도 챙겼으면 좋겠어.” 상욱은 물을 삼키고 한참 뒤 말했다. “그럼 나, 좋아하는 사람 앞에서도 천천히 숨 쉴게.”'
      },
      {
        mood: 'tense',
        place: '불 꺼진 체육관 관중석',
        text: '응원 소리가 멀어지자 상욱은 빈 관중석 맨 앞에 앉았다. “다들 결승선만 보는데 나는 네가 뒤돌아보는 순간만 기다리게 돼. 기다리는 게 이렇게 무서운 줄 몰랐어.” 학범은 옆자리에 앉아 어깨를 맞댔다. “무서우면 말해. 달려오지 않아도 들을 수 있게.”'
      },
      {
        mood: 'warm',
        place: '아침 체육관 동선',
        text: '상욱은 학범보다 반 걸음 앞서 걷다가 일부러 속도를 낮췄다. “이 정도면 맞아? 아니면 더 느리게?” 학범은 같은 보폭으로 걸었다. “지금 좋아. 네가 맞추려고 돌아보는 게 보여서.” 상욱은 앞만 보지 않고, 대답을 들을 때마다 조금씩 웃었다.'
      },
      {
        mood: 'confession',
        place: '체육관 장비실 앞',
        text: '사라진 고백 페이지를 찾았다는 말에 상욱은 장비실 문 앞에서 멈춰 섰다. “내가 먼저 찾아서 네 손에 쥐여 주고 싶었어. 그런데 그러면 또 네 대답보다 내가 빨라질까 봐.” 학범은 문고리 대신 그의 손바닥을 잡았다. “오늘은 네가 멈춘 게 제일 빠른 고백이었어.”'
      },
      {
        mood: 'confession',
        place: '문화제 체육관 무대 뒤',
        text: '학범이 “와”라고 부르자 상욱은 한 번도 뛰지 않고 걸어왔다. 숨은 가빴지만 발걸음은 기다리는 사람의 속도였다. “나 진짜 참았다.” 학범은 웃으며 품 안의 운동화 끈을 건넸다. “알아. 그래서 이번엔 내가 먼저 달려갈 차례야. 상욱아, 나랑 같은 속도로 가자.”'
      }
    ]
  },
  junhyeok: {
    name: '준혁',
    role: '문화제 동선 담당',
    expression: 'thinking',
    effect: 'ellipsis',
    place: '도서관 지도 테이블',
    scenes: [
      {
        mood: 'calm',
        place: '도서관 지도 테이블',
        text: '준혁은 새 동선표 가장자리에 “우회 가능”이라고 적었다. “효율로는 이 길이 틀렸어. 그런데 네가 여기서 숨을 고를 확률이 높다.” 학범은 우회 표시를 손끝으로 따라갔다. “그럼 틀린 길 말고, 나를 기다려 주는 길이라고 적어 줘.”'
      },
      {
        mood: 'warm',
        place: '도서관 지도 테이블',
        text: '학범은 준혁이 접어 둔 최단 경로를 일부러 펴지 않았다. “네가 계산해 준 길은 믿어. 그런데 오늘은 네가 왜 그 길 끝에서 기다리는지도 듣고 싶어.” 준혁은 자를 내려놓고 낮게 말했다. “네가 도착했을 때 내가 가장 먼저 보였으면 해서.”'
      },
      {
        mood: 'tense',
        place: '계단참 지도 게시판',
        text: '준혁은 소문이 퍼진 시간을 분 단위로 표시하다가 펜을 멈췄다. “출처는 찾을 수 있어. 하지만 네 표정이 먼저 무너지는 경로를 놓쳤어.” 학범은 지도 위 빨간 점을 덮었다. “오늘 필요한 건 추적이 아니라 네 말이야. 나 걱정했다고 직접 말해 줘.”'
      },
      {
        mood: 'warm',
        place: '전시 동선 지도 앞',
        text: '준혁은 관람객 흐름표에서 학범이 멈출 만한 지점마다 작은 별을 찍었다. “객관성은 없다. 전부 내가 보고 싶은 위치야.” 학범은 별 하나를 더했다. “그럼 여기도. 내가 너를 찾으러 돌아올 위치.” 준혁은 그 별을 지우지 않았다.'
      },
      {
        mood: 'tense',
        place: '복도 지도 게시판',
        text: '준혁은 선택지를 세 개로 줄인 종이를 접었다. “침묵, 고백, 후퇴. 세 번째는 네 안전을 위한 경로지만, 내가 제일 싫어하는 경로다.” 학범은 후퇴 칸을 접어 넣었다. “나도 싫어. 대신 고백 칸은 네 앞에서 펼칠게.”'
      },
      {
        mood: 'warm',
        place: '아침 동선 지도 앞',
        text: '준혁은 학범이 늦어질 때를 대비한 대기 지점을 세 군데나 표시했다. “기다리는 건 비효율이지만 예측 가능하게 만들 수 있어.” 학범은 그중 첫 번째 지점에 손을 얹었다. “예측하지 못해도 기다릴 거야?” 준혁은 바로 대답했다. “응. 그게 이번 계획의 핵심이야.”'
      },
      {
        mood: 'confession',
        place: '분실물 지도 테이블',
        text: '마지막 페이지의 위치를 찾은 뒤에도 준혁은 접힌 지도를 내밀지 않았다. “네가 이걸 받으면 바로 결론에 도착해. 그런데 나는 네가 결론까지 오는 동안 무슨 표정을 하는지도 보고 싶어.” 학범은 지도를 받지 않고 물었다. “그럼 같이 걸어. 답은 도착해서 말할게.”'
      },
      {
        mood: 'confession',
        place: '문화제 동선 게시판',
        text: '학범은 최단 경로 대신 준혁이 남겨 둔 우회로를 걸어왔다. “늦었지만 일부러 돌아왔어. 네가 기다리는 길이라는 걸 아니까.” 준혁은 접힌 지도를 주머니에 넣었다. “그럼 계산은 끝났네.” 학범은 고개를 저었다. “아니. 이제부터는 계산하지 말고 같이 가자.”'
      }
    ]
  }
};

const clubRouteDepthBatch2MatrixByRoute = new Map(
  clubRouteDepthBatch2Matrix.map((route) => [route.routeId, route])
);
const clubRouteDepthBatch2MetadataByScene = new Map(
  clubRouteDepthBatch2SceneMetadata.map((entry) => [entry.sceneId, entry])
);
const clubRouteDepthBatch2BackgroundByScene = new Map(
  clubRouteDepthBatch2BackgroundBindings.map((entry) => [entry.sceneId, entry.backgroundId])
);

function buildClubBatch2Scene(routeId, index) {
  const route = clubRouteDepthBatch2MatrixByRoute.get(routeId);
  const spec = clubRouteDepthBatch2Specs[routeId];
  const sceneId = route.sceneIds[index];
  const metadata = clubRouteDepthBatch2MetadataByScene.get(sceneId);
  const backgroundId = clubRouteDepthBatch2BackgroundByScene.get(sceneId);
  const source = spec.scenes[index];
  const speakerIsHakbeom = index % 2 === 1 || index === 7;

  return {
    id: sceneId,
    type: 'dialogue',
    chapter: 'day-14',
    mood: source.mood,
    routeId,
    expansionBatch: ROUTE_DEPTH_BATCH2_ID,
    arcId: metadata.arcId,
    arcStage: metadata.arcStage,
    batchModule: 'batch2RouteDepth',
    name: speakerIsHakbeom ? '학범' : spec.name,
    role: speakerIsHakbeom ? '학생회' : spec.role,
    place: source.place,
    text: source.text,
    nextId: index < route.sceneIds.length - 1 ? route.sceneIds[index + 1] : route.returnSceneId,
    effect: speakerIsHakbeom ? undefined : { target: routeId, type: spec.effect },
    directives: [
      { type: 'BCG', src: `/assets/bg/${backgroundId}.png`, transition: index % 2 === 0 ? 'fade-in' : 'hold' },
      { type: 'SCG', id: routeId, name: spec.name, action: index === 0 ? 'enter' : 'update', pos: 3, expression: spec.expression, transition: 'fade-in' },
      { type: 'E', target: routeId, effect: spec.effect, motion: spec.effect === 'chatter' ? 'bounce' : 'nod' }
    ],
    variants: index === 6 ? [
      {
        affection: { [routeId]: { min: 85 } },
        text: source.text.replace('학범은', '높은 친밀도를 믿고 학범은')
      }
    ] : undefined
  };
}

export const clubRouteDepthBatch2Scenes = ['sangwon', 'sanguk', 'junhyeok'].flatMap((routeId) => (
  Array.from({ length: 8 }, (_, index) => buildClubBatch2Scene(routeId, index))
));

export const clubRouteDepthBatch2EntryByRoute = Object.fromEntries(
  clubRouteDepthBatch2Matrix.map((route) => [route.routeId, route.entrySceneId])
);
