export const BATCH2_ROUTE_DEPTH_ID = 'route-depth-2026-05-batch2';
export const ROUTE_DEPTH_BATCH2_ID = BATCH2_ROUTE_DEPTH_ID;

export const afterSchoolBatch2RouteIds = ['dohun', 'haeum', 'yunho'];

const arcStageByIndex = [
  'beginning',
  'support',
  'escalation',
  'support',
  'escalation',
  'support',
  'payoff',
  'payoff'
];

const afterSchoolRouteSpecs = {
  dohun: {
    name: '도훈',
    role: '매점 정보통',
    expression: 'smile',
    effect: 'blush',
    arcId: 'batch2-dohun-no-price-tag',
    previousSceneId: 'batch1-dohun-08',
    returnSceneId: 'day14-merge',
    scenes: [
      {
        place: '닫힌 매점 셔터 앞',
        mood: 'tense',
        backgroundId: 'day13-dohun-truth',
        name: '도훈',
        role: '매점 정보통',
        text: '도훈은 셔터 앞 영수증 더미를 정리하는 척했다. “축제 끝났는데 매출 확인은 해야지. 네가 오늘 웃은 횟수 같은 건 장부에 안 적었고.” 마지막 문장은 농담처럼 눌렀지만, 접힌 종이마다 학범이 힘들어한 순간이 표시되어 있었다.'
      },
      {
        place: '닫힌 매점 셔터 앞',
        mood: 'confession',
        backgroundId: 'day13-dohun-truth',
        name: '학범',
        role: '대답',
        text: '학범은 계산대 모서리에 손을 얹고 말했다. “오늘은 가격표 빼고 말해 줘. 네가 뭘 알아냈는지가 아니라, 알아내는 동안 네가 얼마나 무서웠는지 듣고 싶어.” 도훈은 웃을 타이밍을 놓친 사람처럼 고개를 숙였다.'
      },
      {
        place: '편의점 불빛',
        mood: 'tense',
        backgroundId: 'day11-dohun-morning',
        name: '도훈',
        role: '매점 정보통',
        text: '도훈은 소문을 옮긴 이름들을 적은 쪽지를 꺼냈다가 다시 접었다. “이거 주면 네가 편해질 줄 알았어. 근데 네 선택까지 내가 대신 정리하는 건, 정보값이 아니라 간섭이더라.” 말끝이 가벼워지지 못하고 손바닥 안에서 구겨졌다.'
      },
      {
        place: '편의점 불빛',
        mood: 'warm',
        backgroundId: 'day11-dohun-morning',
        name: '학범',
        role: '선택',
        text: '학범은 쪽지를 받지 않고 도훈의 손을 감쌌다. “숨겨서 지키는 건 네 방식이라는 거 알아. 그래도 나를 지키고 싶으면 내 마음을 빼고 계산하지 마. 내가 고를 수 있게 옆에서 같이 말해 줘.”'
      },
      {
        place: '매점 앞 임시 부스',
        mood: 'tense',
        backgroundId: 'day8-dohun-festival',
        name: '도훈',
        role: '매점 정보통',
        text: '축제 쿠폰함에 남은 학범 이름을 보자 도훈은 입술을 비틀었다. “다른 애들도 네 취향 꽤 알더라. 신기하지, 내가 제일 먼저 알았는데 제일 늦게 말하는 꼴이 됐어.” 장난은 질투를 덮지 못했고, 쿠폰 모서리만 더 빨개졌다.'
      },
      {
        place: '매점 앞 임시 부스',
        mood: 'confession',
        backgroundId: 'day8-dohun-festival',
        name: '학범',
        role: '대답',
        text: '학범은 쿠폰을 내려놓고 도훈 쪽으로 한 걸음 다가갔다. “먼저 안다고 더 가까운 건 아니야. 그런데 너는 내가 힘들 때마다 계산대 너머에서 도망갈 길을 열어 줬어. 나는 그쪽으로 계속 돌아왔고.”'
      },
      {
        place: '밤의 편의점',
        mood: 'confession',
        backgroundId: 'day9-dohun-rumor',
        name: '도훈',
        role: '매점 정보통',
        text: '도훈은 마지막 영수증을 찢지 않고 학범에게 내밀었다. “정보값 같은 말 안 할게. 대신 이거 빈칸에 네가 써. 내가 필요한 순간이면 부르고, 내가 보고 싶은 순간이어도 부르라고.” 처음으로 농담이 없는 목소리였다.'
      },
      {
        place: '밤의 편의점',
        mood: 'confession',
        backgroundId: 'day9-dohun-rumor',
        name: '학범',
        role: '선택',
        text: '학범은 빈칸에 도훈의 이름을 썼다. “필요해서 부르는 날도 있겠지. 그래도 오늘은 보고 싶어서 불러. 네가 계산 못 하는 마음이라면, 내가 계속 말로 남길게.” 도훈은 귀까지 붉어진 채 영수증을 접었다.'
      }
    ]
  },
  haeum: {
    name: '하음',
    role: '음악실 담당',
    expression: 'smile',
    effect: 'heart',
    arcId: 'batch2-haeum-breath-without-metronome',
    previousSceneId: 'batch1-haeum-08',
    returnSceneId: 'day14-merge',
    scenes: [
      {
        place: '불 꺼진 음악실',
        mood: 'warm',
        backgroundId: 'day13-haeum-truth',
        name: '하음',
        role: '음악실 담당',
        text: '하음은 메트로놈을 켜지 않은 채 피아노 뚜껑을 닫았다. “오늘은 소리를 줄이고 싶어. 네가 괜찮아지는 박자를 찾느라, 내가 떨리는 소리는 계속 못 들은 척했거든.” 고요가 처음으로 하음의 편이 아니라 고백의 문이 되었다.'
      },
      {
        place: '불 꺼진 음악실',
        mood: 'confession',
        backgroundId: 'day13-haeum-truth',
        name: '학범',
        role: '대답',
        text: '학범은 닫힌 피아노 위에 손가락을 올렸다. “그럼 이번엔 내가 셀게. 하나, 둘, 셋. 네가 남을 진정시키느라 삼킨 숨까지, 나도 들을 수 있게 천천히 말해 줘.” 하음은 숫자 사이에서 겨우 웃었다.'
      },
      {
        place: '비 오는 음악실',
        mood: 'tense',
        backgroundId: 'day7-haeum-rain',
        name: '하음',
        role: '음악실 담당',
        text: '창밖 빗소리가 빨라지자 하음은 악보 대신 학범의 소매를 붙잡았다가 놓았다. “네가 다른 사람 앞에서 웃으면 안심해야 하는데, 나는 그 웃음 뒤 박자까지 궁금해져. 내가 이런 마음이면 너를 편하게 못 해 줄까 봐 무서워.”'
      },
      {
        place: '비 오는 음악실',
        mood: 'warm',
        backgroundId: 'day7-haeum-rain',
        name: '학범',
        role: '선택',
        text: '학범은 놓인 소매를 다시 하음 쪽으로 내밀었다. “편하게 해 주는 사람만 곁에 두고 싶은 게 아니야. 네가 불안하다고 말해 주면, 나는 네 옆에서 내 박자를 고칠 수 있어.” 빗소리는 여전히 빨랐지만 둘 사이의 숨은 느려졌다.'
      },
      {
        place: '해질녘 음악실',
        mood: 'tense',
        backgroundId: 'day11-haeum-morning',
        name: '하음',
        role: '음악실 담당',
        text: '하음은 빈 악보의 마지막 줄을 오래 바라보았다. “나는 늘 끝까지 들어 줄 수 있다고 말했어. 그런데 네 대답이 너무 늦어질까 봐, 사실은 중간에 몇 번이나 겁났어.” 고백은 선율보다 작은 목소리로 시작됐다.'
      },
      {
        place: '해질녘 음악실',
        mood: 'confession',
        backgroundId: 'day11-haeum-morning',
        name: '학범',
        role: '대답',
        text: '학범은 악보 마지막 줄을 비워 둔 채 말했다. “늦었지만 빈칸으로 두진 않을게. 네가 기다리는 동안 혼자 버틴 박자까지 내가 따라갈게.” 하음은 그제야 메트로놈을 주머니에 넣고 학범을 보았다.'
      },
      {
        place: '무대 뒤 음악실',
        mood: 'confession',
        backgroundId: 'day9-haeum-rumor',
        name: '하음',
        role: '음악실 담당',
        text: '하음은 무대 뒤에서 마지막으로 물었다. “내가 네 숨을 맞춰 주는 사람이 아니라, 같이 흔들리는 사람이어도 괜찮아?” 질문은 작았지만, 지금까지 학범을 받쳐 온 모든 박자가 그 안에 놓여 있었다.'
      },
      {
        place: '무대 뒤 음악실',
        mood: 'confession',
        backgroundId: 'day9-haeum-rumor',
        name: '학범',
        role: '선택',
        text: '학범은 하음의 손끝에 자기 호흡을 맞췄다. “괜찮아. 아니, 그게 좋아. 네가 흔들리면 내가 세고, 내가 흔들리면 네가 세어 줘. 우리 대답은 같은 박자로 천천히 가도 돼.” 하음은 대답 대신 숨을 맞췄다.'
      }
    ]
  },
  yunho: {
    name: '윤호',
    role: '후배',
    expression: 'quiet',
    effect: 'ellipsis',
    arcId: 'batch2-yunho-waiting-to-ask',
    previousSceneId: 'batch1-yunho-08',
    returnSceneId: 'day14-merge',
    scenes: [
      {
        place: '비 갠 옥상',
        mood: 'warm',
        backgroundId: 'day11-yunho-morning',
        name: '윤호',
        role: '후배',
        text: '윤호는 옥상 문을 닫지 못하고 손잡이를 잡고 있었다. “선배, 오늘은 기다린 게 아니라 못 내려간 거예요. 불러 주실 때까지 괜찮은 후배로 서 있는 건 잘하는데, 사실은 제가 먼저 부르고 싶었어요.”'
      },
      {
        place: '비 갠 옥상',
        mood: 'confession',
        backgroundId: 'day11-yunho-morning',
        name: '학범',
        role: '대답',
        text: '학범은 문 앞에서 한 걸음 비켜서지 않았다. “먼저 불러도 돼. 후배라서 허락을 기다리는 게 아니라, 윤호 네 마음이니까 내 이름을 불러 줘.” 윤호는 선배라는 말 뒤에 숨던 숨을 천천히 풀었다.'
      },
      {
        place: '옥상 계단',
        mood: 'tense',
        backgroundId: 'day7-yunho-rain',
        name: '윤호',
        role: '후배',
        text: '계단 아래에서 다른 이름들이 들리자 윤호는 예의 바르게 웃었다. “선배가 누구에게 다정한지 다 알아요. 그래서 제가 더 조용히 있어야 한다고 생각했는데, 조용히 있을수록 제가 없는 사람처럼 느껴져서 싫었어요.”'
      },
      {
        place: '옥상 계단',
        mood: 'warm',
        backgroundId: 'day7-yunho-rain',
        name: '학범',
        role: '선택',
        text: '학범은 계단 한 칸 아래로 내려가 윤호와 눈높이를 맞췄다. “없는 사람처럼 두지 않을게. 네가 조용해질수록 더 찾아볼게. 하지만 오늘부터는 네가 싫다고 말해도 돼.” 윤호의 손끝이 난간에서 떨어졌다.'
      },
      {
        place: '중정 조명 아래',
        mood: 'tense',
        backgroundId: 'day8-yunho-festival',
        name: '윤호',
        role: '후배',
        text: '윤호는 중정 조명 아래서 한 발 뒤에 섰다. “선배 옆자리는 제가 욕심내면 안 되는 자리 같았어요. 그런데 오늘 다른 사람이 그 자리에 서는 걸 보니까, 좋은 후배로 웃는 법을 잊어버렸어요.” 말끝은 부끄러움보다 솔직함에 가까웠다.'
      },
      {
        place: '중정 조명 아래',
        mood: 'confession',
        backgroundId: 'day8-yunho-festival',
        name: '학범',
        role: '대답',
        text: '학범은 비워 둔 옆자리를 손바닥으로 두드렸다. “그 자리는 착한 후배라서 주는 게 아니야. 내가 윤호랑 같이 보고 싶은 불빛이라서 비워 둔 거야.” 윤호는 망설이다가 이번에는 한 걸음만이 아니라 끝까지 다가왔다.'
      },
      {
        place: '옥상 난간 아래',
        mood: 'confession',
        backgroundId: 'day9-yunho-rumor',
        name: '윤호',
        role: '후배',
        text: '윤호는 난간 아래서 처음으로 학범보다 먼저 말했다. “선배, 기다릴게요라는 말만 하면 안전했어요. 그런데 오늘은 있어 달라고 말하고 싶어요. 제가 좋은 후배라서가 아니라, 선배가 제 쪽을 봐 줬으면 해서요.”'
      },
      {
        place: '옥상 난간 아래',
        mood: 'confession',
        backgroundId: 'day9-yunho-rumor',
        name: '학범',
        role: '선택',
        text: '학범은 윤호가 숨긴 손을 잡았다. “있어 줘, 윤호야. 그리고 나도 네 쪽을 볼게. 선배라는 말 뒤에 숨지 않아도 네 마음을 들을 수 있게, 이제는 내가 먼저 이름을 부를게.” 윤호는 작은 목소리로 “네, 학범 선배”라고 답했다.'
      }
    ]
  }
};

function padSceneNumber(index) {
  return String(index + 1).padStart(2, '0');
}

function buildScene(routeId, index, source) {
  const route = afterSchoolRouteSpecs[routeId];
  const speakerIsHakbeom = source.name === '학범';
  const sceneId = `batch2-${routeId}-${padSceneNumber(index)}`;
  const nextId = index < route.scenes.length - 1
    ? `batch2-${routeId}-${padSceneNumber(index + 1)}`
    : route.returnSceneId;

  return {
    id: sceneId,
    type: 'dialogue',
    chapter: 'day-14',
    mood: source.mood,
    routeId,
    expansionBatch: BATCH2_ROUTE_DEPTH_ID,
    continuationBatch: 2,
    arcId: route.arcId,
    arcStage: arcStageByIndex[index],
    batchModule: 'batch2RouteDepth',
    name: source.name,
    role: source.role,
    place: source.place,
    text: source.text,
    nextId,
    effect: speakerIsHakbeom ? undefined : { target: routeId, type: route.effect },
    directives: [
      { type: 'BCG', src: `/assets/bg/${source.backgroundId}.png`, transition: index % 2 === 0 ? 'fade-in' : 'hold' },
      { type: 'SCG', id: routeId, name: route.name, action: index === 0 ? 'enter' : 'update', pos: 3, expression: route.expression, transition: 'fade-in' },
      ...(speakerIsHakbeom ? [] : [{ type: 'E', target: routeId, effect: route.effect, motion: route.effect === 'heart' ? 'nod' : 'shake' }])
    ],
    variants: index === 6
      ? [
          {
            affection: { [routeId]: { min: 85 } },
            text: `${source.text} 높은 친밀도를 믿은 학범은 이번에는 기다리게 두지 않고 바로 고개를 끄덕였다.`
          }
        ]
      : undefined
  };
}

export const afterSchoolBatch2RouteDepthMatrix = afterSchoolBatch2RouteIds.map((routeId) => {
  const route = afterSchoolRouteSpecs[routeId];
  return {
    id: routeId,
    arcId: route.arcId,
    entrySceneId: `batch2-${routeId}-01`,
    previousSceneId: route.previousSceneId,
    returnSceneId: route.returnSceneId,
    sceneIds: route.scenes.map((_, index) => `batch2-${routeId}-${padSceneNumber(index)}`),
    backgroundIds: [...new Set(route.scenes.map((scene) => scene.backgroundId))]
  };
});

export const afterSchoolBatch2SceneBackgroundBindings = afterSchoolBatch2RouteDepthMatrix.flatMap((route) => (
  route.sceneIds.map((sceneId, index) => ({
    sceneId,
    routeId: route.id,
    backgroundId: afterSchoolRouteSpecs[route.id].scenes[index].backgroundId
  }))
));

export const afterSchoolBatch2RouteDepthScenes = afterSchoolBatch2RouteIds.flatMap((routeId) => (
  afterSchoolRouteSpecs[routeId].scenes.map((scene, index) => buildScene(routeId, index, scene))
));
