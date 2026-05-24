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
    prompt: '“상원아, 빈칸 아직 닫지 마. 오늘 기록은 네가 혼자 보관하는 문서 말고, 내가 같이 허락하는 약속으로 남기고 싶어.”',
    choices: [
      '상원과 함께 보관할 기록 카드를 쓴다.',
      '빈칸은 내일도 같이 열어 보자고 말한다.'
    ],
    phoneText: '“빈칸 사진만 보냈어. 네가 허락하기 전엔 아무 기록도 닫지 않을게.”',
    messages: [
      { from: 'sangwon', text: '아까 같이 쓴 카드, 공개본에는 넣지 않았어.' },
      { from: 'hakbeom', text: '우리 둘이 열기로 한 기록이니까.' },
      { from: 'sangwon', text: '응. 그래서 먼저 물어보고 싶었어. 보관해도 되는지.' }
    ],
    replies: [
      '보관해 줘. 대신 열쇠는 같이 갖자.',
      '내일 네가 먼저 물어봐 주면 같이 열어 볼게.'
    ],
    warmReply: '“답장 확인했어. 혼자 잠그는 기록이면 안 된다고 했지. 그럼 이 날짜도 너랑 같이 보관할게.”',
    steadyReply: '“여기 물음표 남겨 둘게. 확정은 네 목소리로 듣고 싶어. 내가 제일 잘하고 싶은 건 기다리는 거야.”',
    close: '“휴대폰 덮어도 빈칸은 닫지 않을게. 상원아, 내일도 물어봐 줘. 그러면 나도 직접 대답할게.”'
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
    prompt: '“상욱아, 손 놓기 전에 한 번만 물어봐. 뛰고 싶어도 내 이름 먼저 불러 줘. 그러면 나도 네 속도로 갈게.”',
    choices: [
      '상욱과 같은 속도로 무대 뒤를 한 바퀴 걷는다.',
      '뛰고 싶을 때마다 내 이름부터 불러 달라고 한다.'
    ],
    phoneText: '“운동화 멈춘 사진 보냄. 나 진짜 안 뛰었어. 그러니까 내일도 네 옆에서 걸어도 돼?”',
    messages: [
      { from: 'sanguk', text: '나 오늘 계단에서 안 뛰었다. 증거로 운동화 멈춘 사진 보냄!' },
      { from: 'hakbeom', text: '봤어. 같이 내려와 준 것도.' },
      { from: 'sanguk', text: '그럼 내일도 네 속도 맞춰도 돼?' }
    ],
    replies: [
      '응. 내 옆에서 같이 걸어 줘.',
      '먼저 달리고 싶으면 내 이름부터 불러 줘.'
    ],
    warmReply: '“답장 받았다! 바로 뛰어가고 싶은데 참는 중. 네가 오라고 할 때까지 여기서 기다릴게.”',
    steadyReply: '“학범아.” “아, 방금 부르는 연습했어. 달려가기 전에 네 이름 먼저 부르기로 했으니까.”',
    close: '“같은 보폭으로 걸었던 거, 나 오래 기억할래. 상욱아, 멈춰 서는 네 직진이 더 가까웠어.”'
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
    prompt: '“준혁아, 그 별표 실수 아니지? 계산 밖이어도 괜찮아. 내가 일부러 다시 올 좌표로 남겨 둘래.”',
    choices: [
      '준혁의 지도에 다시 만날 좌표를 함께 표시한다.',
      '효율보다 기다리는 길이 좋았다고 말한다.'
    ],
    phoneText: '“지도 사진 보냄. 별표는 삭제 안 할게. 실수 아니고, 네가 다시 멈출 확률을 높이고 싶어서.”',
    messages: [
      { from: 'junhyeok', text: '별표 좌표 백업 완료. 실수로 지울 가능성 낮음.' },
      { from: 'hakbeom', text: '실수로 남긴 게 아니라 일부러 남긴 거잖아.' },
      { from: 'junhyeok', text: '맞아. 내일도 네가 여기서 멈출 확률을 높이고 싶어서.' }
    ],
    replies: [
      '그럼 나도 일부러 그 좌표로 갈게.',
      '기다리는 길이면 돌아가도 괜찮아.'
    ],
    warmReply: '“확률 말고 그냥 말할게. 기다릴게. 네가 오면 계산이 맞고, 늦어도 나는 그 좌표에 있을 거야.”',
    steadyReply: '“빠른 길은 알아. 그래도 돌아가는 길을 굵게 표시했어. 너랑 걷는 시간이 늘어나면 그게 최적값이야.”',
    close: '“지도 위 별표, 다시 찾아가도 된다는 허락으로 받아도 돼? 준혁아, 나 일부러 그 좌표로 갈게.”'
  }
};

export const clubRouteDateBatch3Matrix = Object.values(clubRouteDateSpecs).map((spec) => ({
  routeId: spec.routeId,
  id: spec.routeId,
  ownership: 'club',
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
    spec.exitSceneId,
    'day11-opening',
    'day11-moe-route-message'
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
