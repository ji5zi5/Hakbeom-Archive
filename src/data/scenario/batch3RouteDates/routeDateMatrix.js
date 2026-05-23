import { datingSimProfiles, routeConfig } from '../../routeConfig.js';

export const ROUTE_DATE_BATCH3_ID = 'route-dates-2026-05-batch3';

const routeGroups = [
  ['hyeongyeom', 'ukhyun', 'jaeseong'],
  ['sangwon', 'sanguk', 'junhyeok'],
  ['dohun', 'haeum', 'yunho']
];

export const ROUTE_DATE_AFFECTION_BUDGETS = Object.fromEntries(
  routeConfig.affectionTargets.map((target) => [
    target.id,
    {
      existingThroughDay10: 82,
      batch3PreLock: 18,
      requiredDay10LockTotal: 100,
      day11ToTerminal: 0,
      requiredTerminalEligibilityTotal: 100,
      cappedTotal: 100
    }
  ])
);

export const routeDateRouteSpecs = {
  hyeongyeom: {
    role: '동급생',
    motif: '젖은 우산 손잡이',
    place: '비 내리는 복도 끝',
    effect: 'heart',
    expression: 'blush',
    invitation: '현겸은 우산을 펴지 않고 학범 옆에 섰다. “오늘은 비 피하자는 핑계 말고, 그냥 나랑 조금 걸어 줘.”',
    reaction: '현겸은 대답을 듣고서야 우산 손잡이를 학범 쪽으로 기울였다. 기다리겠다는 말 대신, 같은 속도로 걷겠다는 약속을 고른 얼굴이었다.',
    phoneLead: '집 가는 길에 우산 안 폈어. 그래도 네가 옆에 있는 것 같아서 괜찮았어.',
    close: '학범은 현겸의 마지막 메시지를 잠그지 못했다. 화면 속 우산 이모티콘 하나가 Day 10에 다시 꺼낼 약속처럼 남았다.',
    choices: ['데이트라고 불러도 되냐고 먼저 묻는다.', '우산 손잡이를 같이 잡고 걷는다.', '내일은 내가 먼저 기다리겠다고 말한다.'],
    replies: ['나도 계속 같은 속도로 걷고 싶어.', '우산 없어도 네 쪽으로 갈게.', '내일은 내가 먼저 기다릴게.']
  },
  ukhyun: {
    role: '도서위원',
    motif: '비에 젖지 않은 책갈피',
    place: '도서관 창가',
    effect: 'ellipsis',
    expression: 'quiet',
    invitation: '욱현은 창가 자리에 책 한 권을 뒤집어 두었다. “예약표는 아니야. 네가 오면, 오늘은 내가 먼저 읽어 줄 문장이 있어서.”',
    reaction: '욱현은 책갈피를 옮기지 않았다. 학범이 고른 말이 페이지 사이에 그대로 꽂히자, 조용한 표정 안쪽에서 안심이 번졌다.',
    phoneLead: '오늘 네가 접지 말라고 한 문장, 아직 책갈피에 남아 있어.',
    close: '학범은 답장 뒤에 남은 입력창을 한참 보았다. 욱현의 짧은 문장은 덮어도 사라지지 않는 책갈피처럼 마음에 꽂혔다.',
    choices: ['접지 않은 첫 줄을 네 목소리로 듣고 싶다고 말한다.', '창가 자리에 같이 앉겠다고 답한다.', '기다려 준 문장을 나도 보관하겠다고 한다.'],
    replies: ['내일 창가 자리로 갈게.', '접지 않은 말은 나도 접지 않을게.', '그 책갈피, 나한테도 남겨 줘.']
  },
  jaeseong: {
    role: '방송부',
    motif: '꺼진 마이크',
    place: '방송실 문 앞',
    effect: 'question',
    expression: 'confident',
    invitation: '재성은 ON 표시가 꺼진 마이크를 톡톡 두드렸다. “방송용 말고 비공개 멘트. 지금 들어 줄 사람, 너밖에 없는데?”',
    reaction: '재성은 장난으로 넘기려다 실패하고 웃음을 낮췄다. 마이크가 꺼진 뒤에야 학범에게만 향한 목소리가 또렷해졌다.',
    phoneLead: '아까 비공개 멘트, 다시 듣고 싶으면 방송실 예약해 둘까?',
    close: '학범은 재성의 메시지 끝에 붙은 웃는 표시를 오래 보았다. 농담처럼 보낸 문장인데도, 다음 호출을 기다리게 만드는 초대장 같았다.',
    choices: ['네 목소리는 비공개로 더 듣고 싶다고 말한다.', '마이크 없이도 충분히 들렸다고 답한다.', '다음 멘트는 내가 먼저 하겠다고 받아친다.'],
    replies: ['방송실 예약, 같이 확인하자.', '오늘 비공개 멘트 계속 생각났어.', '다음엔 내가 먼저 말할 차례야.']
  },
  sangwon: {
    role: '학생회 기록 담당',
    motif: '비어 있는 기록표 칸',
    place: '학생회 기록실',
    effect: 'question',
    expression: 'serious',
    invitation: '상원은 기록표 첫 줄을 비워 둔 채 펜을 내려놓았다. “오늘은 네 허락 없이 적지 않을게. 대신 같이 남겨도 되는 순간인지 물어보고 싶어.”',
    reaction: '상원은 기록표를 자기 쪽으로 당기지 않았다. 학범이 고른 말이 빈칸에 닿자, 독점이 아니라 공유라는 규칙을 처음 배운 표정이 됐다.',
    phoneLead: '오늘 빈칸, 혼자 채우지 않았어. 네 대답이 들어갈 자리로 남겨 뒀어.',
    close: '학범은 상원의 메시지에 답한 뒤 기록표의 빈칸을 떠올렸다. 그 빈칸은 감시가 아니라 둘이 같이 정한 약속의 자리였다.',
    choices: ['내 마음은 내가 직접 적겠다고 말한다.', '그 빈칸은 같이 채우자고 제안한다.', '불안하면 기록보다 먼저 나에게 묻자고 한다.'],
    replies: ['내 대답은 내가 직접 적을게.', '그 칸은 같이 채우자.', '불안하면 내게 먼저 물어봐 줘.']
  },
  sanguk: {
    role: '운동부',
    motif: '젖은 운동화 끈',
    place: '체육관 처마 아래',
    effect: 'chatter',
    expression: 'energetic',
    invitation: '상욱은 뛰어오려다 처마 아래에서 겨우 멈췄다. “오늘은 나 안 뛰고 기다렸어. 그러니까 이번엔 같이 걸어도 돼?”',
    reaction: '상욱은 숨을 고르며 웃었다. 빨리 도착하려는 마음보다 학범과 같은 보폭을 맞추는 일이 더 어렵고, 그래서 더 좋다는 얼굴이었다.',
    phoneLead: '나 오늘 진짜 안 뛰었다. 근데 심장은 좀 뛰었어. 너 때문임.',
    close: '학범은 상욱의 투박한 메시지에 웃었다. 운동화 끈처럼 급하게 묶인 문장도, 천천히 풀어 보면 기다림이라는 마음이 보였다.',
    choices: ['오늘은 천천히 같이 걷자고 손을 내민다.', '기다려 준 게 제일 빠른 고백이었다고 말한다.', '먼저 뛰지 말고 내 옆에 서 달라고 한다.'],
    replies: ['오늘은 천천히 같이 걷자.', '기다려 줘서 좋았어.', '내 옆에서 같은 속도로 가자.']
  },
  junhyeok: {
    role: '문화제 동선 담당',
    motif: '접힌 동선 지도',
    place: '계단참 지도 앞',
    effect: 'ellipsis',
    expression: 'thinking',
    invitation: '준혁은 최단 경로를 접고 우회로에 동그라미를 쳤다. “효율은 떨어져. 대신 네가 나랑 더 오래 걷는 경로야.”',
    reaction: '준혁은 계산 결과를 고치지 않았다. 학범이 고른 선택지가 비효율적이어도, 그 비효율이 자신에게 향했다는 점만은 확실했다.',
    phoneLead: '오늘 우회로는 성공. 예상보다 오래 같이 걸었고, 그게 싫지 않았음.',
    close: '학범은 준혁의 건조한 성공 판정을 보고 작게 웃었다. 지도 위 우회로는 이제 돌아가는 길이 아니라, 다시 만나기 위한 좌표가 됐다.',
    choices: ['효율보다 네 옆자리가 먼저라고 말한다.', '우회로를 데이트 경로로 저장하자고 한다.', '다음 지도에는 내가 돌아올 자리도 표시해 달라고 한다.'],
    replies: ['효율보다 네 옆자리가 먼저야.', '그 우회로, 데이트 경로로 저장해 줘.', '내가 돌아올 자리도 표시해 둬.']
  },
  dohun: {
    role: '매점 정보통',
    motif: '비닐봉지 속 따뜻한 캔',
    place: '편의점 처마 아래',
    effect: 'chatter',
    expression: 'tease',
    invitation: '도훈은 따뜻한 캔을 학범 손에 밀어 넣고 딴청을 피웠다. “정보값 아님. 그냥 네가 추워 보여서 산 거니까 오해하지 마라.”',
    reaction: '도훈은 괜히 영수증을 접었다 폈다. 놀리는 말은 여전했지만, 학범이 고른 답 앞에서는 숨겨 둔 다정함이 먼저 들켰다.',
    phoneLead: '캔 식기 전에 마셨냐. 답 안 하면 다음엔 더 단 거 사 간다.',
    close: '학범은 도훈의 협박 같은 걱정을 읽고 캔을 굴렸다. 정보값이라고 부르기엔 너무 따뜻한 시간이 손에 남아 있었다.',
    choices: ['정보값 말고 네 시간을 달라고 한다.', '그 캔은 데이트 신청으로 받아도 되냐고 묻는다.', '다정한 거 들켰다고 놀려 준다.'],
    replies: ['정보값 말고 네 시간이 좋아.', '그 캔, 데이트 신청으로 받을게.', '도훈아, 너 다정한 거 또 들켰어.']
  },
  haeum: {
    role: '음악실 담당',
    motif: '느린 박자의 메트로놈',
    place: '음악실 문 앞',
    effect: 'heart',
    expression: 'gentle',
    invitation: '하음은 메트로놈을 일부러 느리게 맞췄다. “오늘은 네가 맞춰야 하는 박자 말고, 우리가 같이 늦어도 되는 박자로 걸어 볼래?”',
    reaction: '하음은 학범의 대답에 맞춰 메트로놈을 멈췄다. 정확한 박자보다 둘의 숨이 맞는 순간을 더 믿겠다는 듯 부드럽게 웃었다.',
    phoneLead: '오늘 박자 좋았어. 조금 느렸는데, 그래서 더 같이 걷는 느낌이었어.',
    close: '학범은 하음의 메시지를 읽으며 자기 숨을 세었다. 느린 박자는 뒤처짐이 아니라, 함께 흔들리기 위해 남겨 둔 여유였다.',
    choices: ['네 박자에 맞춰 가겠다고 말한다.', '내가 흔들리면 같이 세어 달라고 부탁한다.', '오늘 느린 걸음이 좋았다고 고백한다.'],
    replies: ['네 박자에 맞춰 갈게.', '내가 흔들리면 같이 세어 줘.', '오늘 느린 걸음이 좋았어.']
  },
  yunho: {
    role: '후배 / 옥상 담당',
    motif: '옥상 열쇠고리',
    place: '옥상 문 앞',
    effect: 'ellipsis',
    expression: 'quiet',
    invitation: '윤호는 옥상 열쇠고리를 손바닥 안에 숨겼다. “선배, 오늘은 좋은 후배 말고… 같이 있고 싶은 사람으로 기다려도 돼요?”',
    reaction: '윤호는 선배라는 호칭 뒤에 숨지 못하고 웃었다. 허락을 기다리던 거리보다 반 걸음 가까워진 곳에, 처음으로 자기 욕심을 세워 두었다.',
    phoneLead: '오늘 옥상 문, 일부러 바로 안 잠갔어요. 선배가 더 계실까 봐요.',
    close: '학범은 윤호의 조심스러운 메시지를 읽고 옥상 문 손잡이를 떠올렸다. 기다림은 이제 후배의 예의가 아니라, 둘 사이의 약속으로 바뀌고 있었다.',
    choices: ['허락한 거리보다 조금 더 가까워도 된다고 말한다.', '좋은 후배 말고 윤호로 기다려 달라고 한다.', '다음엔 내가 먼저 옥상으로 가겠다고 약속한다.'],
    replies: ['조금 더 가까워도 돼.', '좋은 후배 말고 윤호로 기다려 줘.', '다음엔 내가 먼저 옥상으로 갈게.']
  }
};

function routeReturnSceneId(routeId) {
  const groupIndex = routeGroups.findIndex((group) => group.includes(routeId));
  if (groupIndex === 0) return 'day7-free-hub-b';
  if (groupIndex === 1) return 'day7-free-hub-c';
  return 'day7-moe-hyeongyeom-umbrella-edge';
}

export const routeDateBatch3Routes = routeConfig.affectionTargets.map((target) => {
  const routeId = target.id;
  const spec = routeDateRouteSpecs[routeId];
  const entrySceneId = `date-day7-${routeId}-invite`;
  const sceneIds = [
    entrySceneId,
    `date-day7-${routeId}-choice`,
    `date-day7-${routeId}-reaction`,
    `phone-day7-${routeId}-after-date`,
    `date-day7-${routeId}-phone-close`
  ];

  return {
    id: routeId,
    routeId,
    profileId: routeId,
    name: target.name,
    day: 7,
    expansionBatch: ROUTE_DATE_BATCH3_ID,
    arcId: `day7-${routeId}-rain-date`,
    dateMotif: `${spec.place}에서 ${target.name}이 ${spec.motif}를 핑계로 학범에게 사적인 시간을 제안한다.`,
    memoryLabel: datingSimProfiles[routeId]?.latestMemoryLabel || spec.motif,
    previousSceneId: `day7-free-${routeId}-close`,
    entrySceneId,
    exitSceneId: sceneIds[sceneIds.length - 1],
    returnSceneId: routeReturnSceneId(routeId),
    sceneIds,
    payoffConsumerSceneIds: [sceneIds[2], sceneIds[4]],
    backgroundIds: [`day7-${routeId}-rain`],
    memoryFlags: [`${routeId}_date_day7_shared_rain`],
    phoneFlags: [`${routeId}_phone_day7_warm_reply`],
    payoffOnlyFlags: [`memory_payoff_${routeId}_day7_rain_seen`],
    affectionBudget: ROUTE_DATE_AFFECTION_BUDGETS[routeId]
  };
});

export const routeDateBatch3BackgroundBindings = routeDateBatch3Routes.flatMap((route) => (
  route.sceneIds.map((sceneId) => ({
    sceneId,
    routeId: route.id,
    backgroundId: route.backgroundIds[0]
  }))
));
