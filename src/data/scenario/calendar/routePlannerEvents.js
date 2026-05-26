import { datingSimProfiles, routeConfig } from '../../routeConfig.js';
import { mapChoiceLabels, mapLocations } from '../mapChoiceConfig.js';
import { routeDateRouteSpecs } from '../batch3RouteDates/routeDateMatrix.js';

const ORIGINAL_NEXT_BY_DAY = {
  4: 'day4-archive-room-open',
  5: 'day5-morning-archive',
  6: 'day6-opening',
  7: 'day7-opening',
  8: 'day8-opening',
  9: 'day9-opening',
  10: 'day10-opening',
  11: 'day11-opening',
  12: 'day12-opening',
  13: 'day13-opening',
  14: 'day14-opening'
};

export const calendarPlannerDayConfigs = Array.from({ length: 11 }, (_, index) => {
  const day = index + 4;
  return {
    day,
    chapter: `day-${day}`,
    plannerEventId: `calendar-day${day}-planner-map-event`,
    mapSceneId: `calendar-day${day}-planner-map`,
    originalNextId: ORIGINAL_NEXT_BY_DAY[day] || `day${day}-opening`,
    slot: day <= 10 ? 'after-school' : 'post-lock',
    slotLabel: day <= 10 ? '방과 후' : '약속 확인',
    title: `Day ${day} 데이트 플랜`,
    sectionTitle: `Day ${day}: 오늘의 장소를 고른다`
  };
});

const routeNameById = Object.fromEntries(routeConfig.affectionTargets.map((target) => [target.id, target.name]));

const DAY_BEATS = {
  4: '첫 순회가 끝나기 전',
  5: '소문이 복도에 번진 오후',
  6: '시험 공부를 핑계로 모인 시간',
  7: '비가 그친 귀갓길',
  8: '문화제 조 편성이 흔들린 뒤',
  9: '오해가 아직 덜 풀린 저녁',
  10: '한 사람을 기다리기로 한 방과 후',
  11: '선택한 마음으로 맞은 아침',
  12: '리허설 소음이 잦아든 틈',
  13: '고백 전날의 숨 고르기',
  14: '문화제 불빛이 켜진 순간'
};

const SUBJECT_BY_ROUTE = {
  hyeongyeom: '현겸은',
  ukhyun: '욱현은',
  jaeseong: '재성은',
  sangwon: '상원은',
  sanguk: '상욱은',
  junhyeok: '준혁은',
  dohun: '도훈은',
  haeum: '하음은',
  yunho: '윤호는'
};

function dayBeat(day) {
  return DAY_BEATS[day] || '오늘의 약속이 가까워진 순간';
}

function withDayBeat(text, day) {
  const normalized = String(text || '').trim();
  return `${normalized} ${dayBeat(day)}, 말끝에 남은 온도가 조금 달라졌다.`;
}

function subjectForRoute(routeId, fallbackName) {
  return SUBJECT_BY_ROUTE[routeId] || `${fallbackName}은`;
}

function sanitizeRouteDateText(text = '') {
  return String(text)
    .replace(/학범이 고른 말/g, '학범의 대답')
    .replace(/학범이 고른 답/g, '학범의 대답')
    .replace(/학범이 고른 선택지/g, '학범의 대답');
}
const routeByLocation = Object.fromEntries(mapLocations.map((location) => [location.routeId, location]));

function snake(value = '') {
  return String(value).replace(/-/g, '_');
}

function routeInviteSceneId(day, routeId) {
  return `calendar-day${day}-${routeId}-invite`;
}

function routeChoiceSceneId(day, routeId) {
  return `calendar-day${day}-${routeId}-choice`;
}

function routeReactionSceneId(day, routeId) {
  return `calendar-day${day}-${routeId}-reaction`;
}

function routePhoneSceneId(day, routeId) {
  return `calendar-day${day}-${routeId}-phone`;
}

function routeEventId(day, routeId) {
  return `calendar-day${day}-${routeId}-date`;
}

function dayMood(day) {
  if (day >= 13) return 'confession';
  if (day >= 9) return 'tense';
  return 'warm';
}

function backgroundForLocation(locationId) {
  return ({
    'school-gate': '/assets/bg/school-gate-rain.png',
    library: '/assets/bg/library-window.png',
    'broadcast-room': '/assets/bg/broadcast-room.png',
    'student-council-room': '/assets/bg/student-council-room-evening.png',
    gym: '/assets/bg/gym-corridor-evening.png',
    'route-board': '/assets/bg/school-courtyard-blue-hour.png',
    cafeteria: '/assets/bg/convenience-store-night.png',
    'music-room': '/assets/bg/music-room-late-afternoon.png',
    rooftop: '/assets/bg/rooftop-after-rain.png'
  })[locationId] || '/assets/bg/school-courtyard-blue-hour.png';
}

function effectForRoute(routeId) {
  return routeDateRouteSpecs[routeId]?.effect || 'heart';
}

function expressionForRoute(routeId) {
  return routeDateRouteSpecs[routeId]?.expression || 'quiet';
}

function buildAffectionVariants(day, routeId, name, place, motif) {
  const subject = subjectForRoute(routeId, name);
  const beat = dayBeat(day);
  return [
    {
      affection: { [routeId]: { max: 39 } },
      text: `${subject} ${place}에서 학범을 보고 잠깐 말을 골랐다. “여기까지 온 거, 우연처럼 넘기지 않아도 되지?” ${motif} 핑계로 둔 초대는 ${beat}에도 아직 조심스러웠다.`
    },
    {
      affection: { [routeId]: { min: 40, max: 84 } },
      text: `${subject} 전보다 가까운 거리에서 기다리고 있었다. “네가 고른 장소라서 조금 기대했어.” ${beat}에는 지난 약속의 온도도 선명했다.`
    },
    {
      affection: { [routeId]: { min: 85 } },
      text: `${subject} 더 이상 농담 뒤로 숨지 않았다. “오늘 네가 나를 고른 거면, 나도 참는 척 안 할래.” ${beat}, ${place}의 소음이 줄고 학범의 대답만 남았다.`
    }
  ];
}

function buildPlanVisit(day, config, location, routeId, label) {
  return {
    kind: 'mapVisit',
    day,
    slot: config.slot,
    locationId: location.id,
    routeId,
    eventId: routeEventId(day, routeId),
    label
  };
}

function buildCalendarReward(day, config, location, routeId, outcome, label) {
  return {
    eventId: routeEventId(day, routeId),
    routeId,
    day,
    slot: config.slot,
    location: location.id,
    outcome,
    label,
    invitationStatus: 'accepted'
  };
}

function buildMemoryReward(day, location, routeId, kind, label) {
  return {
    eventId: routeEventId(day, routeId),
    routeId,
    kind,
    label: label || `${routeNameById[routeId] || routeId} · ${location.label}`
  };
}

function createPlannerMapEventCard(config) {
  const day = config.day;
  return {
    id: config.plannerEventId,
    title: config.title,
    routeId: 'common',
    character: { id: 'archive', name: '학범 아카이브' },
    dayRange: [day, day],
    slot: config.slot,
    location: '00-planner-map',
    requirements: { flags: [], once: true, routeLock: day >= 11 ? 'selected-route' : null },
    rewards: { flags: [`calendar_day${day}_planner_opened`] },
    priority: 400,
    fallbackGroup: `calendar-day${day}-planner`,
    qualityTags: ['calendar-planner-choice', 'route-location-choice', 'date-invitation-reacts'],
    scenes: [
      {
        id: config.mapSceneId,
        type: 'mapChoice',
        chapter: config.chapter,
        sectionTitle: config.sectionTitle,
        mood: dayMood(day),
        text: `${config.slotLabel}, 어디로 갈까?`,
        choices: mapChoiceLabels,
        mapLocations,
        next: mapLocations.map((location) => routeInviteSceneId(day, location.routeId)),
        rewards: mapLocations.map((location) => ({
          affection: { [location.routeId]: day <= 10 ? 4 : 2 },
          flags: [
            `calendar_day${day}_${location.routeId}_planned`,
            `${location.routeId}_date_day${day}_${snake(location.id)}`
          ],
          planVisit: buildPlanVisit(day, config, location, location.routeId, location.label),
          calendar: buildCalendarReward(day, config, location, location.routeId, 'planned', location.label),
          memory: buildMemoryReward(day, location, location.routeId, 'date', `${location.label}에서 고른 약속`)
        }))
      }
    ]
  };
}

function createRoutePlannerEventCard(config, target) {
  const day = config.day;
  const routeId = target.id;
  const name = target.name;
  const profile = datingSimProfiles[routeId] || {};
  const spec = routeDateRouteSpecs[routeId] || {};
  const location = routeByLocation[routeId] || mapLocations[0];
  const place = spec.place || location.label;
  const motif = spec.motif || profile.tensionMarkers?.[0] || location.label;
  const invitation = withDayBeat(sanitizeRouteDateText(spec.invitation || `${subjectForRoute(routeId, name)} ${location.label} 쪽에서 학범을 기다리고 있었다. “오늘은 여기서 같이 있어도 돼?”`), day);
  const reaction = withDayBeat(sanitizeRouteDateText(spec.reaction || `${subjectForRoute(routeId, name)} 학범의 대답을 듣고서야 작게 웃었다. 방금 고른 장소가 단순한 동선이 아니라 약속이 됐다는 얼굴이었다.`), day);
  const replies = (spec.replies || ['오늘은 네 옆에 있을게.', '조금 더 같이 걷자.', '내일도 여기서 만나자.']).slice(0, 3);
  const choices = (spec.choices || ['같이 걷자고 말한다.', '기다려 줘서 고맙다고 한다.', '다음 약속도 정하자고 한다.']).slice(0, 3);
  const bg = backgroundForLocation(location.id);
  const memoryLabel = profile.latestMemoryLabel || `${location.label}의 약속`;
  const dateFlag = `${routeId}_date_day${day}_${snake(location.id)}`;
  const payoffFlag = `memory_payoff_${routeId}_day${day}_calendar_seen`;

  return {
    id: routeEventId(day, routeId),
    title: `Day ${day} ${name} 데이트`,
    routeId,
    character: { id: routeId, name },
    dayRange: [day, day],
    slot: config.slot,
    location: '00-route-date',
    requirements: {
      flags: day >= 11 ? [`route_lock_${routeId}`] : [],
      once: true,
      routeLock: day >= 11 ? routeId : null,
      affection: { [routeId]: { min: 0 } }
    },
    rewards: {
      affection: { [routeId]: day <= 10 ? 9 : 5 },
      flags: [dateFlag, payoffFlag],
      memory: { routeId, kind: 'date', label: memoryLabel }
    },
    priority: 300,
    fallbackGroup: `calendar-day${day}-route-date`,
    qualityTags: ['calendar-planner-choice', 'same-scene-tier-variant', 'memory-payoff', 'date-invitation-reacts'],
    scenes: [
      {
        id: routeInviteSceneId(day, routeId),
        type: 'dialogue',
        mood: dayMood(day),
        chapter: config.chapter,
        name,
        role: profile.role || '데이트 상대',
        place,
        text: invitation,
        variants: buildAffectionVariants(day, routeId, name, place, motif),
        effect: { target: routeId, type: effectForRoute(routeId) },
        nextId: routeChoiceSceneId(day, routeId),
        directives: [
          { type: 'BCG', src: bg, transition: 'fade-in' },
          { type: 'SCG', id: routeId, name, action: 'enter', pos: 3, expression: expressionForRoute(routeId), transition: 'fade-in' },
          { type: 'E', target: routeId, effect: effectForRoute(routeId), motion: 'nod' }
        ]
      },
      {
        id: routeChoiceSceneId(day, routeId),
        type: 'choice',
        mood: dayMood(day),
        chapter: config.chapter,
        choices,
        next: choices.map(() => routeReactionSceneId(day, routeId)),
        rewards: choices.map((choice, index) => ({
          affection: { [routeId]: 4 + index },
          flags: [dateFlag, `calendar_day${day}_${routeId}_date_reply_${index + 1}`],
          calendar: buildCalendarReward(day, config, location, routeId, 'date-reply', choice),
          memory: buildMemoryReward(day, location, routeId, 'date', memoryLabel)
        }))
      },
      {
        id: routeReactionSceneId(day, routeId),
        type: 'dialogue',
        mood: dayMood(day),
        chapter: config.chapter,
        name,
        role: profile.role || '데이트 상대',
        place,
        text: reaction,
        variants: [
          { requiredFlags: [dateFlag], affection: { [routeId]: { min: 40 } }, text: `${reaction} “다음에도 내가 먼저 기다려 볼게.”` },
          { requiredFlags: [payoffFlag], affection: { [routeId]: { min: 85 } }, text: `${subjectForRoute(routeId, name)} ${motif} 핑계를 더는 붙잡지 않았다. “좋아해. 오늘 선택을 내일로 미루고 싶지 않을 만큼.”` }
        ],
        effect: { target: routeId, type: effectForRoute(routeId) },
        nextId: routePhoneSceneId(day, routeId),
        directives: [
          { type: 'E', target: routeId, effect: effectForRoute(routeId), motion: 'pulse' }
        ]
      },
      {
        id: routePhoneSceneId(day, routeId),
        type: 'phone',
        mood: dayMood(day),
        chapter: config.chapter,
        name,
        from: routeId,
        text: withDayBeat(sanitizeRouteDateText(spec.phoneLead || `${name}: 오늘 네가 고른 장소, 나 혼자 의미 부여해도 되는 거지?`), day),
        replies,
        next: replies.map(() => config.originalNextId),
        rewards: replies.map((reply, index) => ({
          affection: { [routeId]: 2 + index },
          flags: [`${routeId}_phone_day${day}_${['direct', 'gentle', 'tease'][index] || 'direct'}_reply`, payoffFlag],
          calendar: buildCalendarReward(day, config, location, routeId, 'phone-reply', reply),
          memory: buildMemoryReward(day, location, routeId, 'phone', memoryLabel),
          invitation: { eventId: routeEventId(day, routeId), routeId, status: 'accepted', tone: ['direct', 'gentle', 'tease'][index] || 'direct' }
        }))
      }
    ]
  };
}

const routeTargetsById = [...routeConfig.affectionTargets].sort((left, right) => left.id.localeCompare(right.id, 'en'));

export const calendarPlannerHubEventCards = calendarPlannerDayConfigs.map(createPlannerMapEventCard);
export const routePlannerEventCards = calendarPlannerDayConfigs.flatMap((config) => (
  routeTargetsById.map((target) => createRoutePlannerEventCard(config, target))
));
export const calendarPlannerEventCards = [
  ...calendarPlannerDayConfigs.flatMap((config) => [
    calendarPlannerHubEventCards.find((card) => card.id === config.plannerEventId),
    ...routePlannerEventCards.filter((card) => card.dayRange[0] === config.day)
  ])
].filter(Boolean);

export const calendarPlannerCoverage = routeConfig.affectionTargets.map((target) => {
  const cards = routePlannerEventCards.filter((card) => card.routeId === target.id);
  const scenes = cards.flatMap((card) => card.scenes || []);
  const variants = scenes.flatMap((scene) => scene.variants || []);
  return {
    routeId: target.id,
    routeName: target.name,
    eventCount: cards.length,
    days: [...new Set(cards.map((card) => card.dayRange[0]))],
    slots: [...new Set(cards.map((card) => card.slot))],
    locations: [...new Set(cards.map((card) => card.location))],
    qualityTags: [...new Set(cards.flatMap((card) => card.qualityTags || []))],
    hasLowMidHighVariants: ['low', 'mid', 'high'].every((tier) => {
      if (tier === 'low') return variants.some((variant) => variant.affection?.[target.id]?.max === 39);
      if (tier === 'mid') return variants.some((variant) => variant.affection?.[target.id]?.min === 40 && variant.affection?.[target.id]?.max === 84);
      return variants.some((variant) => variant.affection?.[target.id]?.min === 85);
    }),
    hasMemoryPayoff: cards.some((card) => card.qualityTags?.includes('memory-payoff')),
    hasDateInvitationReaction: cards.some((card) => card.qualityTags?.includes('date-invitation-reacts'))
  };
});

export function withCalendarPlannerChapterLink(scene) {
  const match = typeof scene?.id === 'string' ? scene.id.match(/^day(\d+)-chapter-card$/) : null;
  if (!match) return scene;
  const day = Number(match[1]);
  const config = calendarPlannerDayConfigs.find((entry) => entry.day === day);
  if (!config) return scene;
  return { ...scene, nextId: config.mapSceneId, calendarPlannerOriginalNextId: scene.nextId || config.originalNextId };
}

export function materializePlannerEventScenes(eventCards = calendarPlannerEventCards) {
  return eventCards.flatMap((card) => (card.scenes || []).map((scene) => ({
    ...scene,
    calendarEventId: card.id,
    calendarSourceAdapter: card.id,
    calendarDay: card.dayRange[0],
    calendarSlot: card.slot,
    calendarLocation: card.location,
    routeId: scene.routeId || card.routeId,
    qualityTags: [...new Set([...(scene.qualityTags || []), ...(card.qualityTags || [])])]
  })));
}
