import {
  ROUTE_DEPTH_BATCH_ID,
  routeDepthRoutes,
  routeDepthSceneBackgroundBindings,
  routeDepthSceneMetadata
} from './routeDepthBatchMatrix.js';

export const afterSchoolRouteDepthRouteIds = ['dohun', 'haeum', 'yunho'];

export const afterSchoolRouteDepthSceneOverrides = [
  {
    id: 'day6-free-dohun-entry',
    place: '편의점 앞 테이블',
    mood: 'warm',
    text: '도훈은 복숭아 음료와 초코바를 테이블에 밀어 놓고 딴청을 피웠다. “네가 밤에 손 뻗는 순서까지 맞췄다. 정보값 비싸니까 맛없어도 환불 안 됨.” 장난처럼 말했지만 영수증에는 학범의 취향이 빠짐없이 적혀 있었다.'
  },
  {
    id: 'day6-free-dohun-answer',
    place: '편의점 앞 테이블',
    mood: 'confession',
    text: '학범은 캔을 따지 않고 도훈을 보았다. “환불 안 해. 대신 왜 내 취향을 그렇게 오래 외웠는지는 네가 직접 설명해.” 도훈의 귀가 빨개지자 학범은 웃지 않고 기다렸다.'
  },
  {
    id: 'day7-free-dohun-entry',
    place: '편의점 처마 아래',
    mood: 'tense',
    text: '비가 처마를 때리는 동안 도훈은 소문 출처가 적힌 쪽지를 구겼다. “말해 줄 수도 있는데, 지금 네 표정 보니까 먼저 단거 먹여야겠네. 쓰러지면 내가 더 손해야.” 마지막 말은 장난이었지만, 봉투를 쥔 손은 계속 학범 쪽으로 기울었다.'
  },
  {
    id: 'day8-free-dohun-entry',
    place: '매점 앞 임시 부스',
    mood: 'warm',
    text: '도훈은 쿠폰 더미를 정리하다 학범 전용으로 빼 둔 한 장을 늦게 숨겼다. “네가 좋아하는 색으로 뽑아 달라고 한 건 아니고, 우연히 내가 담당자였고, 우연히 네 취향을 알았고.” 학범이 손을 내밀자 그는 결국 가장 깨끗한 쿠폰을 건넸다.'
  },
  {
    id: 'day9-free-dohun-entry',
    place: '밤의 편의점',
    mood: 'tense',
    text: '소문이 다시 번진 밤, 도훈은 데운 음료를 학범 손에 쥐여 주고 시선을 피했다. “밥 거를 줄 알았어. 계산은 내가 했고, 고마우면 나중에 제대로 웃어라.” 학범이 “지금은?” 하고 묻자 도훈은 한참 뒤 “지금은 네가 괜찮은지만 말해”라고 낮게 답했다.'
  },
  {
    id: 'day11-dohun-morning',
    place: '편의점 불빛',
    mood: 'warm',
    text: '도훈은 “와, 어제 아주 바쁘셨네” 하고 웃었지만, 비닐봉지 안에는 학범이 아침마다 사던 음료가 두 개 들어 있었다. “그래서 어젯밤엔 누구랑 있었는데?” 장난의 끝이 떨리자 학범은 봉투를 같이 잡았다. “지금 내 앞에 있는 사람부터 안심시키려고 왔어.”'
  },
  {
    id: 'day13-dohun-crisis',
    place: '편의점 불빛',
    mood: 'tense',
    text: '마지막 페이지를 본 도훈은 “누가 장난 크게 치네”라고 말했지만 끝까지 웃지 못했다. 중요한 순간까지 농담으로 보였을까 봐, 영수증 모서리가 손안에서 구겨졌다. 학범이 “이번엔 정보값 말고 네 마음으로 말해”라고 하자 도훈은 처음으로 계산서를 내려놓았다.'
  },
  {
    id: 'day14-dohun-truth',
    place: '편의점 불빛',
    mood: 'confession',
    text: '도훈은 영수증을 접지 않았다. “지금 농담하면 안 되는 거 알지. 그래서 오늘은 한 줄만 제대로 들을게.” 학범은 빈칸에 자기 이름을 쓰듯 답했다. “내가 고른 사람은 도훈이야. 정보값이 아니라 마음값으로.” 도훈은 웃으려다 실패했고, 그 실패가 대답이 됐다.'
  },
  {
    id: 'day6-free-haeum-entry',
    place: '음악실',
    mood: 'warm',
    text: '하음은 메트로놈을 낮게 켜고 학범의 문제집을 책상 가장자리로 밀었다. “정답보다 숨이 먼저야. 네가 급해질 때 박자가 어디서 흔들리는지 같이 듣자.” 하나, 둘, 세는 목소리는 재촉 대신 손잡이처럼 놓였다.'
  },
  {
    id: 'day6-free-haeum-answer',
    place: '음악실',
    mood: 'confession',
    text: '학범은 연필을 내려놓고 하음의 박자에 맞춰 숨을 골랐다. “네가 세어 주면 이상하게 덜 급해져. 틀린 문제보다 내가 무너지는 소리를 먼저 들어 주는 것 같아서.” 하음은 “그럼 오늘은 맞히지 말고 맞춰 가자”라고 조용히 답했다.'
  },
  {
    id: 'day7-free-haeum-entry',
    place: '비 오는 음악실',
    mood: 'tense',
    text: '빗소리가 창문을 가득 채우자 하음은 악보 대신 학범의 손끝을 보았다. “소문 박자가 너무 빨라. 괜찮다는 말은 나중에 해도 돼. 지금은 네 숨이 어디서 끊겼는지만 들려줘.” 학범이 숨을 들이쉬자 하음은 그 속도에 맞춰 고개를 끄덕였다.'
  },
  {
    id: 'day8-free-haeum-entry',
    place: '해질녘 음악실',
    mood: 'warm',
    text: '문화제 마지막 곡을 앞두고 하음은 조명을 한 단계 낮췄다. “이 부분은 네가 어디를 보는지 소리로 알 수 있을 것 같아.” 학범이 피아노 옆에 서자 그는 악보 한쪽을 비워 두었다. “네 박자가 들어올 자리야.”'
  },
  {
    id: 'day9-free-haeum-entry',
    place: '무대 뒤 음악실',
    mood: 'tense',
    text: '소문이 무대 뒤까지 밀려왔지만 하음은 메트로놈을 켜지 않았다. “남들이 빨리 말한다고 네 마음까지 그 속도에 맞출 필요 없어.” 학범이 “그래도 네가 불안하면?” 하고 묻자 하음은 작게 웃었다. “그럼 내 박자도 네 옆에서 다시 맞출게.”'
  },
  {
    id: 'day11-haeum-morning',
    place: '해질녘 음악실',
    mood: 'warm',
    text: '하음은 음악실 문을 닫고 메트로놈을 껐다. “기계 소리는 잠깐 쉬게 할게. 오늘은 네 숨부터 들을래.” 학범이 어제의 소문을 꺼내려 하자 그는 손끝으로 책상 위 박자를 짚었다. “말은 급하지 않게. 나는 끝까지 들을 수 있어.”'
  },
  {
    id: 'day13-haeum-crisis',
    place: '해질녘 음악실',
    mood: 'tense',
    text: '마지막 페이지 앞에서 하음은 모두의 호흡을 살피다 자기 숨을 놓쳤다. 남을 진정시키는 동안 정작 학범을 잃을까 봐 떨고 있었다. 학범이 “이번엔 내가 셀게”라고 하자 하음은 처음으로 기대듯 숨을 내쉬었다.'
  },
  {
    id: 'day14-haeum-truth',
    place: '해질녘 음악실',
    mood: 'confession',
    text: '하음은 마지막 마디를 짚었다. “여긴 연주하지 않아도 들리는 부분이야.” 학범은 악보 빈칸에 손을 올렸다. “그럼 내 대답도 크게 말하지 않을게. 네 옆에서 같은 숨으로 있을게.” 둘은 더 이상 박자를 세지 않았고, 같은 침묵 안에서 답을 나눴다.'
  },
  {
    id: 'day6-free-yunho-entry',
    place: '옥상 문 앞',
    mood: 'warm',
    text: '윤호는 옥상 문틈을 먼저 확인하고 학범에게 바람이 덜 부는 자리를 내밀었다. “선배, 여기 앉으세요. 제가 먼저 앉아 봤는데 이쪽이 제일 편했어요.” 자신은 한 걸음 뒤에 서 있으면서도, 학범이 춥지 않을 거리부터 배워 둔 얼굴이었다.'
  },
  {
    id: 'day6-free-yunho-answer',
    place: '옥상 문 앞',
    mood: 'confession',
    text: '학범은 옆자리를 손으로 두드렸다. “고마워, 윤호야. 그런데 네 자리는 어디야? 계속 서 있으면 내가 더 신경 쓰여.” 윤호가 놀라 멈추자 학범은 다시 말했다. “후배라서가 아니라, 네가 여기 있었으면 좋겠어.”'
  },
  {
    id: 'day7-free-yunho-entry',
    place: '옥상 계단',
    mood: 'tense',
    text: '윤호는 소문을 들었다고 말하면서도 먼저 괜찮다고 고개를 숙였다. “저는 괜찮아요. 아니, 괜찮은 척은 할 수 있어요.” 학범이 계단 한 칸을 내려오자 그는 겨우 덧붙였다. “선배 앞에서는 척하는 게 조금 어려워요.”'
  },
  {
    id: 'day8-free-yunho-entry',
    place: '중정 조명 아래',
    mood: 'warm',
    text: '문화제 조명이 켜지는 시간을 윤호는 정확히 외워 두었다. “선배, 이쪽은 저녁에 제일 예뻐요. 혼자 보면 아까울 것 같아서… 같이 보고 싶었어요.” 학범이 나란히 서자 그는 후배답게 물러나지 않고 같은 불빛 안에 머물렀다.'
  },
  {
    id: 'day9-free-yunho-entry',
    place: '옥상 난간 아래',
    mood: 'tense',
    text: '윤호는 난간 아래서 오래 기다린 손을 뒤로 숨겼다. “선배, 제가 너무 기다리기만 하면 부담스럽죠? 그래도 오늘은 먼저 내려가고 싶지 않았어요.” 학범이 “기다리게 해서 미안해”라고 하자 윤호는 고개를 저었다. “불러 주실 때까지 있고 싶었던 거예요.”'
  },
  {
    id: 'day11-yunho-morning',
    place: '비 갠 옥상',
    mood: 'warm',
    text: '윤호는 옥상 난간 옆에 먼저 와 있었지만, 학범이 얼굴을 들기 전까지 아무 말도 하지 않았다. 눈이 마주친 뒤에야 낮게 “선배”라고 부르고, 곧바로 덧붙였다. “오늘은 기다린 게 아니라 약속 지킨 거라고 말해도 돼요?” 학범은 고개를 끄덕였다.'
  },
  {
    id: 'day13-yunho-crisis',
    place: '비 갠 옥상',
    mood: 'tense',
    text: '마지막 페이지를 본 윤호는 예의 바르게 뒤로 물러나려 했다. 좋은 후배로 남는 사이 학범의 곁을 다른 사람이 차지할까 봐 발끝이 얼어붙었다. 학범은 그가 물러나는 방향을 막고 말했다. “이번엔 네가 먼저 있어 달라고 해도 돼.”'
  },
  {
    id: 'day14-yunho-truth',
    place: '비 갠 옥상',
    mood: 'confession',
    text: '윤호는 종이를 접지 못한 채 말했다. “선배, 기다리기만 하면 좋은 후배로 남을 수는 있겠죠.” 학범은 옥상 문을 등지고 섰다. “좋은 후배 말고, 내가 붙잡고 싶은 사람으로 있어 줘.” 바람이 빈말을 걷어 가자 윤호는 처음으로 먼저 한 걸음 다가왔다.'
  }
];

export const afterSchoolRouteDepthSceneOverridesById = new Map(
  afterSchoolRouteDepthSceneOverrides.map((scene) => [scene.id, scene])
);

const afterSchoolRouteSpecs = {
  dohun: { name: '도훈', role: '매점 정보통', expression: 'smile', effect: 'blush' },
  haeum: { name: '하음', role: '음악실 담당', expression: 'smile', effect: 'heart' },
  yunho: { name: '윤호', role: '후배', expression: 'quiet', effect: 'ellipsis' }
};

const routeDepthMetadataBySceneId = new Map(routeDepthSceneMetadata.map((entry) => [entry.sceneId, entry]));
const routeDepthBackgroundBySceneId = new Map(routeDepthSceneBackgroundBindings.map((entry) => [entry.sceneId, entry.backgroundId]));
const routeDepthRouteById = new Map(routeDepthRoutes.map((route) => [route.id, route]));

const afterSchoolOverridesByRoute = new Map(
  afterSchoolRouteDepthRouteIds.map((routeId) => [
    routeId,
    afterSchoolRouteDepthSceneOverrides.filter((scene) => scene.id.includes(`-${routeId}-`))
  ])
);

function buildAfterSchoolRouteDepthScene(routeId, index) {
  const route = routeDepthRouteById.get(routeId);
  const sourceScene = afterSchoolOverridesByRoute.get(routeId)?.[index];
  const spec = afterSchoolRouteSpecs[routeId];
  const sceneId = route.sceneIds[index];
  const metadata = routeDepthMetadataBySceneId.get(sceneId);
  const backgroundId = routeDepthBackgroundBySceneId.get(sceneId);
  const speakerIsHakbeom = index % 2 === 1;
  return {
    id: sceneId,
    type: 'dialogue',
    chapter: 'day-14',
    mood: sourceScene?.mood || (index >= 6 ? 'confession' : 'warm'),
    routeId,
    expansionBatch: ROUTE_DEPTH_BATCH_ID,
    arcId: metadata.arcId,
    arcStage: metadata.arcStage,
    batchModule: 'batch1RouteDepth',
    name: speakerIsHakbeom ? '학범' : spec.name,
    role: speakerIsHakbeom ? '선택' : spec.role,
    place: sourceScene?.place || '방과 후 복도',
    text: sourceScene?.text || `${spec.name}은 학범의 대답을 기다렸다.`,
    nextId: index < route.sceneIds.length - 1 ? route.sceneIds[index + 1] : 'day14-merge',
    effect: speakerIsHakbeom ? undefined : { target: routeId, type: spec.effect },
    directives: [
      { type: 'BCG', src: `/assets/bg/${backgroundId}.png`, transition: index % 2 === 0 ? 'fade-in' : 'hold' },
      { type: 'SCG', id: routeId, name: spec.name, action: index === 0 ? 'enter' : 'update', pos: 3, expression: spec.expression, transition: 'fade-in' },
      { type: 'E', target: routeId, effect: spec.effect, motion: spec.effect === 'heart' ? 'nod' : 'shake' }
    ],
    variants: index === 6 ? [
      {
        affection: { [routeId]: { min: 85 } },
        text: sourceScene?.text?.replace('학범은', '높은 친밀도를 믿고 학범은') || `${spec.name}은 학범의 대답을 기다렸다.`
      }
    ] : undefined
  };
}

export const afterSchoolRouteDepthScenes = afterSchoolRouteDepthRouteIds.flatMap((routeId) =>
  Array.from({ length: 8 }, (_, index) => buildAfterSchoolRouteDepthScene(routeId, index))
);
