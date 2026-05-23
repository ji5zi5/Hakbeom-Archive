import { datingSimProfiles } from '../../routeConfig.js';

export const ROUTE_DATE_BATCH3_ID = 'route-dates-2026-05-batch3';

const clubRouteDateSpecs = {
  sangwon: {
    routeId: 'sangwon',
    name: '상원',
    role: '학생회 기록 담당',
    expression: 'serious',
    effect: 'question',
    arcId: 'sangwon-shared-archive-card-date',
    previousSceneId: 'day8-free-sangwon-close',
    entrySceneId: 'date-day8-sangwon-memory-choice',
    exitSceneId: 'date-day8-sangwon-phone-close',
    returnSceneId: 'day8-free-hub-c',
    backgroundId: 'day8-sangwon-festival',
    memoryFlag: 'sangwon_date_day8_shared_archive_card',
    warmPhoneFlag: 'sangwon_phone_day8_warm_reply',
    steadyPhoneFlag: 'sangwon_phone_day8_steady_reply',
    place: '아카이브 전시실',
    prompt: '전시 카드의 빈칸을 같이 채운 뒤에도 상원은 펜을 내려놓지 못했다. 학범은 오늘의 기록을 어떤 약속으로 남길지 직접 고르기로 했다.',
    choices: [
      '상원과 함께 보관할 기록 카드를 쓴다.',
      '빈칸은 내일도 같이 열어 보자고 말한다.'
    ],
    phoneText: '밤이 되자 상원이 전시 카드 사진 대신 빈칸만 찍어 보냈다.',
    messages: [
      { from: 'sangwon', text: '아까 같이 쓴 카드, 공개본에는 넣지 않았어.' },
      { from: 'hakbeom', text: '우리 둘이 열기로 한 기록이니까.' },
      { from: 'sangwon', text: '응. 그래서 먼저 물어보고 싶었어. 보관해도 되는지.' }
    ],
    replies: [
      '보관해 줘. 대신 열쇠는 같이 갖자.',
      '내일 네가 먼저 물어봐 주면 같이 열어 볼게.'
    ],
    warmReply: '상원은 답장을 읽고서야 카드 모서리에 작은 날짜를 적었다. 혼자 잠그는 기록이 아니라, 학범이 함께 열어 준 약속이라는 걸 처음으로 확인한 얼굴이었다.',
    steadyReply: '상원은 빈칸 아래에 물음표 하나를 남겼다. 확정 대신 물어보는 법을 택한 그 표시가, 오늘 학범에게는 가장 선명한 고백처럼 보였다.',
    close: '학범은 휴대폰을 덮으며 전시실의 빈 카드를 떠올렸다. 상원의 기록은 더 이상 결론을 훔치는 문서가 아니라, 함께 허락을 확인하는 장소가 되었다.'
  },
  sanguk: {
    routeId: 'sanguk',
    name: '상욱',
    role: '운동부',
    expression: 'energetic',
    effect: 'chatter',
    arcId: 'sanguk-same-speed-rehearsal-date',
    previousSceneId: 'day8-free-sanguk-close',
    entrySceneId: 'date-day8-sanguk-memory-choice',
    exitSceneId: 'date-day8-sanguk-phone-close',
    returnSceneId: 'day8-free-hub-c',
    backgroundId: 'day8-sanguk-festival',
    memoryFlag: 'sanguk_date_day8_same_speed_steps',
    warmPhoneFlag: 'sanguk_phone_day8_warm_reply',
    steadyPhoneFlag: 'sanguk_phone_day8_steady_reply',
    place: '체육관 무대 뒤',
    prompt: '계단 리허설이 끝난 뒤에도 상욱은 손을 놓지 않고 학범의 보폭을 살폈다. 빠른 마음을 어떻게 기억할지, 이번에는 학범이 먼저 정할 차례였다.',
    choices: [
      '상욱과 같은 속도로 무대 뒤를 한 바퀴 걷는다.',
      '뛰고 싶을 때마다 내 이름부터 불러 달라고 한다.'
    ],
    phoneText: '상욱에게서는 운동화 사진과 함께 숨을 고른 문장이 도착했다.',
    messages: [
      { from: 'sanguk', text: '나 오늘 계단에서 안 뛰었다. 증거로 운동화 멈춘 사진 보냄!' },
      { from: 'hakbeom', text: '봤어. 같이 내려와 준 것도.' },
      { from: 'sanguk', text: '그럼 내일도 네 속도 맞춰도 돼?' }
    ],
    replies: [
      '응. 내 옆에서 같이 걸어 줘.',
      '먼저 달리고 싶으면 내 이름부터 불러 줘.'
    ],
    warmReply: '상욱은 짧은 답장 하나에도 다시 출발선 앞에 선 사람처럼 들떠 있었다. 그래도 이번에는 먼저 달려오지 않고, 학범의 다음 말을 기다렸다.',
    steadyReply: '상욱은 “학범아”라는 세 글자를 여러 번 썼다 지운 뒤 겨우 보냈다. 달려가기 전 이름부터 부르는 연습이, 그에게는 가장 어려운 속도 조절이었다.',
    close: '학범은 체육관 무대 뒤의 같은 보폭을 오래 기억했다. 상욱의 직진은 멈춰 서는 법을 배울 때 오히려 더 가까워졌다.'
  },
  junhyeok: {
    routeId: 'junhyeok',
    name: '준혁',
    role: '문화제 동선 담당',
    expression: 'thinking',
    effect: 'ellipsis',
    arcId: 'junhyeok-saved-route-marker-date',
    previousSceneId: 'day8-free-junhyeok-close',
    entrySceneId: 'date-day8-junhyeok-memory-choice',
    exitSceneId: 'date-day8-junhyeok-phone-close',
    returnSceneId: 'day8-free-hub-c',
    backgroundId: 'day8-junhyeok-festival',
    memoryFlag: 'junhyeok_date_day8_saved_route_marker',
    warmPhoneFlag: 'junhyeok_phone_day8_warm_reply',
    steadyPhoneFlag: 'junhyeok_phone_day8_steady_reply',
    place: '전시 동선 지도 앞',
    prompt: '별표가 찍힌 지도 앞에서 준혁은 성공한 계산처럼 보이지 않으려 애썼다. 학범은 그 좌표를 단순한 동선이 아니라 약속으로 남길 방법을 골랐다.',
    choices: [
      '준혁의 지도에 다시 만날 좌표를 함께 표시한다.',
      '효율보다 기다리는 길이 좋았다고 말한다.'
    ],
    phoneText: '준혁에게서 지도 사진이 도착했다. 별표 옆에는 삭제하지 않겠다는 작은 메모가 붙어 있었다.',
    messages: [
      { from: 'junhyeok', text: '별표 좌표 백업 완료. 실수로 지울 가능성 낮음.' },
      { from: 'hakbeom', text: '실수로 남긴 게 아니라 일부러 남긴 거잖아.' },
      { from: 'junhyeok', text: '맞아. 내일도 네가 여기서 멈출 확률을 높이고 싶어서.' }
    ],
    replies: [
      '그럼 나도 일부러 그 좌표로 갈게.',
      '기다리는 길이면 돌아가도 괜찮아.'
    ],
    warmReply: '준혁은 확률이라는 말을 쓰지 않고 “기다리겠다”고 답했다. 계산식에서 빠진 단어 하나가, 학범에게는 지도보다 정확한 약속이 되었다.',
    steadyReply: '준혁은 돌아가는 길을 더 굵게 표시했다. 빠른 길을 알면서도 기다리는 길을 남기는 사람이 있다는 사실이, 학범의 발걸음을 이상하게 가볍게 했다.',
    close: '학범은 지도 위 별표를 떠올리며 웃었다. 준혁의 좌표는 목적지가 아니라, 다시 찾아가도 된다는 허락처럼 남았다.'
  }
};

export const clubRouteDateBatch3Matrix = Object.values(clubRouteDateSpecs).map((spec) => ({
  routeId: spec.routeId,
  id: spec.routeId,
  profileId: spec.routeId,
  arcId: spec.arcId,
  dateMotif: `${spec.place}에서 ${spec.name}이 문화제 준비를 핑계로 학범과 둘만의 기억을 남긴다.`,
  memoryLabel: datingSimProfiles[spec.routeId]?.latestMemoryLabel || spec.place,
  previousSceneId: spec.previousSceneId,
  entrySceneId: spec.entrySceneId,
  exitSceneId: spec.exitSceneId,
  returnSceneId: spec.returnSceneId,
  sceneIds: [
    spec.entrySceneId,
    `date-day8-${spec.routeId}-phone-followup`,
    `date-day8-${spec.routeId}-phone-warm`,
    `date-day8-${spec.routeId}-phone-steady`,
    spec.exitSceneId
  ],
  payoffConsumerSceneIds: [
    `date-day8-${spec.routeId}-phone-warm`,
    `date-day8-${spec.routeId}-phone-steady`,
    spec.exitSceneId
  ],
  backgroundIds: [spec.backgroundId],
  memoryFlags: [spec.memoryFlag],
  phoneFlags: [spec.warmPhoneFlag, spec.steadyPhoneFlag],
  affectionBudget: {
    existingThroughDay10: 82,
    batch3PreLock: 18,
    requiredDay10LockTotal: 100,
    requiredTerminalEligibilityTotal: 100,
    cap: 100
  }
}));

function scgDirective(spec) {
  return {
    type: 'SCG',
    id: spec.routeId,
    name: spec.name,
    action: 'update',
    pos: 3,
    expression: spec.expression,
    transition: 'fade-in'
  };
}

function buildRouteDateScenes(spec) {
  const phoneSceneId = `date-day8-${spec.routeId}-phone-followup`;
  const warmSceneId = `date-day8-${spec.routeId}-phone-warm`;
  const steadySceneId = `date-day8-${spec.routeId}-phone-steady`;

  return [
    {
      id: spec.entrySceneId,
      type: 'choice',
      chapter: 'day-8',
      mood: 'warm',
      routeId: spec.routeId,
      expansionBatch: ROUTE_DATE_BATCH3_ID,
      batchModule: 'batch3RouteDates',
      dateLoop: true,
      arcId: spec.arcId,
      arcStage: 'date-memory',
      name: spec.name,
      role: spec.role,
      place: spec.place,
      text: spec.prompt,
      choices: spec.choices,
      rewards: spec.choices.map(() => ({
        affection: { [spec.routeId]: 10 },
        flags: [spec.memoryFlag]
      })),
      next: spec.choices.map(() => phoneSceneId),
      directives: [
        { type: 'BCG', src: `/assets/bg/${spec.backgroundId}.png`, transition: 'fade-in' },
        scgDirective(spec),
        { type: 'E', target: spec.routeId, effect: spec.effect, motion: spec.effect === 'chatter' ? 'bounce' : 'nod' }
      ]
    },
    {
      id: phoneSceneId,
      type: 'phone',
      kind: 'phone',
      chapter: 'day-8',
      mood: 'warm',
      routeId: spec.routeId,
      expansionBatch: ROUTE_DATE_BATCH3_ID,
      batchModule: 'batch3RouteDates',
      dateLoop: true,
      arcId: spec.arcId,
      arcStage: 'phone-followup',
      name: spec.name,
      role: '메시지',
      text: spec.phoneText,
      messages: spec.messages,
      replies: spec.replies,
      rewards: [
        { affection: { [spec.routeId]: 8 }, flags: [spec.warmPhoneFlag] },
        { affection: { [spec.routeId]: 8 }, flags: [spec.steadyPhoneFlag] }
      ],
      next: [warmSceneId, steadySceneId],
      directives: [{ type: 'SE', cue: 'message' }]
    },
    {
      id: warmSceneId,
      type: 'dialogue',
      chapter: 'day-8',
      mood: 'warm',
      routeId: spec.routeId,
      expansionBatch: ROUTE_DATE_BATCH3_ID,
      batchModule: 'batch3RouteDates',
      dateLoop: true,
      arcId: spec.arcId,
      arcStage: 'phone-reply',
      name: spec.name,
      role: spec.role,
      place: spec.place,
      text: spec.warmReply,
      variants: [
        {
          requiredFlags: [spec.memoryFlag, spec.warmPhoneFlag],
          text: spec.warmReply
        }
      ],
      nextId: spec.exitSceneId
    },
    {
      id: steadySceneId,
      type: 'dialogue',
      chapter: 'day-8',
      mood: 'warm',
      routeId: spec.routeId,
      expansionBatch: ROUTE_DATE_BATCH3_ID,
      batchModule: 'batch3RouteDates',
      dateLoop: true,
      arcId: spec.arcId,
      arcStage: 'phone-reply',
      name: spec.name,
      role: spec.role,
      place: spec.place,
      text: spec.steadyReply,
      variants: [
        {
          requiredFlags: [spec.memoryFlag, spec.steadyPhoneFlag],
          text: spec.steadyReply
        }
      ],
      nextId: spec.exitSceneId
    },
    {
      id: spec.exitSceneId,
      type: 'dialogue',
      chapter: 'day-8',
      mood: 'warm',
      routeId: spec.routeId,
      expansionBatch: ROUTE_DATE_BATCH3_ID,
      batchModule: 'batch3RouteDates',
      dateLoop: true,
      arcId: spec.arcId,
      arcStage: 'return',
      name: '학범',
      role: '기억',
      place: spec.place,
      text: spec.close,
      variants: [
        {
          requiredFlags: [spec.warmPhoneFlag],
          text: spec.close
        },
        {
          requiredFlags: [spec.steadyPhoneFlag],
          text: spec.close
        }
      ],
      nextId: spec.returnSceneId
    }
  ];
}

export const clubRouteDateBatch3Scenes = Object.values(clubRouteDateSpecs).flatMap(buildRouteDateScenes);

export const clubRouteDateBatch3BackgroundBindings = Object.values(clubRouteDateSpecs).map((spec) => ({
  sceneId: spec.entrySceneId,
  routeId: spec.routeId,
  backgroundId: spec.backgroundId
}));
