import { day4Scenes } from './sources/day4Source.js';
import { day5Scenes } from './sources/day5Source.js';
import { day6Scenes } from './sources/day6Source.js';
import { day7Scenes } from './sources/day7Source.js';
import { day8Scenes } from './sources/day8Source.js';
import { day9Scenes } from './sources/day9Source.js';
import { longformDatingExpansionScenes } from './sources/longformDatingExpansionSource.js';
import { day10Scenes } from './sources/day10Source.js';
import { day11Scenes } from './sources/day11Source.js';
import { day12Scenes } from './sources/day12Source.js';
import { day13Scenes } from './sources/day13Source.js';
import { day14Scenes } from './sources/day14Source.js';
import {
  ROUTE_DATE_BATCH3_ID,
  ROUTE_DEPTH_BATCH2_ID,
  integrateRouteDepthExpansions,
  routeDateBatch3Scenes,
  routeDepthBatch2Scenes,
  routeDepthExpansionBatches
} from '../routeDepthExpansionRegistry.js';
import { ROUTE_DEPTH_BATCH_ID } from '../batch1RouteDepth/routeDepthBatchMatrix.js';
import { routeDepthBatchScenes } from '../batch1RouteDepth/index.js';
import {
  calendarPlannerCoverage,
  calendarPlannerDayConfigs,
  calendarPlannerEventCards,
  materializePlannerEventScenes,
  routePlannerEventCards,
  withCalendarPlannerChapterLink
} from './routePlannerEvents.js';

const REQUIRED_EVENT_CARD_FIELDS = [
  'id',
  'title',
  'routeId',
  'character',
  'dayRange',
  'slot',
  'location',
  'requirements',
  'rewards',
  'priority',
  'fallbackGroup',
  'qualityTags'
];

const SLOT_ORDER = [
  'morning',
  'lunch',
  'after-school',
  'evening',
  'night',
  'post-lock',
  'terminal'
];

function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function normalizeText(value) {
  return typeof value === 'string' ? value : '';
}

function slotRank(slot) {
  const index = SLOT_ORDER.indexOf(slot);
  return index === -1 ? SLOT_ORDER.length : index;
}

function firstDay(card) {
  const [day] = asArray(card?.dayRange);
  return Number.isFinite(Number(day)) ? Number(day) : Number.POSITIVE_INFINITY;
}

function priorityRank(card) {
  const priority = Number(card?.priority);
  return Number.isFinite(priority) ? priority : 0;
}

function requirementsSpecificity(requirements = {}) {
  if (!isPlainObject(requirements)) return 0;
  let score = 0;
  if (requirements.routeLock !== undefined && requirements.routeLock !== null) score += 2;
  score += asArray(requirements.flags).length;
  if (requirements.once) score += 1;
  if (isPlainObject(requirements.affection)) {
    score += Object.values(requirements.affection).reduce((total, condition) => {
      if (typeof condition === 'number') return total + 1;
      if (!isPlainObject(condition)) return total;
      return total + Number(condition.min !== undefined) + Number(condition.max !== undefined);
    }, 0);
  }
  return score;
}

function compareText(a, b) {
  return normalizeText(a).localeCompare(normalizeText(b), 'en');
}

export function compareCalendarEventCards(a, b) {
  return firstDay(a) - firstDay(b)
    || slotRank(a?.slot) - slotRank(b?.slot)
    || compareText(a?.location, b?.location)
    || compareText(a?.routeId, b?.routeId)
    || priorityRank(b) - priorityRank(a)
    || requirementsSpecificity(b?.requirements) - requirementsSpecificity(a?.requirements)
    || compareText(a?.id, b?.id);
}

function validateEventCard(card, index) {
  const label = card?.id || `eventCard[${index}]`;
  const errors = [];

  if (!isPlainObject(card)) return [`${label}: EventCard must be an object.`];

  for (const field of REQUIRED_EVENT_CARD_FIELDS) {
    if (card[field] === undefined || card[field] === null || card[field] === '') {
      errors.push(`${label}: missing ${field}`);
    }
  }

  if (!Array.isArray(card.dayRange) || card.dayRange.length !== 2 || card.dayRange.some((day) => !Number.isFinite(Number(day)))) {
    errors.push(`${label}: dayRange must be [startDay, endDay] with finite numbers`);
  }

  if (!isPlainObject(card.character) || typeof card.character.id !== 'string' || typeof card.character.name !== 'string') {
    errors.push(`${label}: character must include string id and name`);
  }

  if (!isPlainObject(card.requirements)) errors.push(`${label}: requirements must be an object`);
  if (!isPlainObject(card.rewards)) errors.push(`${label}: rewards must be an object`);
  if (!Array.isArray(card.qualityTags) || card.qualityTags.length === 0) {
    errors.push(`${label}: qualityTags must be a non-empty array`);
  }

  if (!Array.isArray(card.scenes) && typeof card.createScenes !== 'function') {
    errors.push(`${label}: scenes or createScenes is required`);
  }

  return errors;
}

export function validateCalendarEventCards(eventCards = []) {
  const errors = [];
  const seen = new Set();

  asArray(eventCards).forEach((card, index) => {
    for (const error of validateEventCard(card, index)) errors.push(error);
    if (card?.id) {
      if (seen.has(card.id)) errors.push(`${card.id}: duplicate id`);
      seen.add(card.id);
    }
  });

  return errors;
}

function buildPlannerEntry(card, scenes) {
  return {
    id: `${card.id}-planner-entry`,
    eventId: card.id,
    title: card.title,
    routeId: card.routeId,
    character: card.character,
    dayRange: card.dayRange,
    slot: card.slot,
    location: card.location,
    requirements: card.requirements,
    rewards: card.rewards,
    priority: card.priority,
    fallbackGroup: card.fallbackGroup,
    qualityTags: card.qualityTags,
    nextId: scenes[0]?.id || ''
  };
}

function materializeScenes(card, context) {
  const rawScenes = typeof card.createScenes === 'function'
    ? card.createScenes({ ...context, eventCard: card })
    : card.scenes;

  return asArray(rawScenes).map((scene) => ({
    ...scene,
    calendarEventId: card.id,
    calendarSourceAdapter: card.id,
    calendarDay: firstDay(card),
    calendarSlot: card.slot,
    calendarLocation: card.location,
    routeId: scene?.routeId || card.routeId,
    qualityTags: [...new Set([...(scene?.qualityTags || []), ...(card.qualityTags || [])])]
  }));
}

const legacySourceGroups = [
  { id: 'legacy-day4-adapter', title: 'Day 4 legacy calendar adapter', dayRange: [4, 4], slot: 'after-school', location: 'archive', scenes: day4Scenes, sourceModules: ['day4.js'] },
  { id: 'legacy-day5-adapter', title: 'Day 5 legacy calendar adapter', dayRange: [5, 5], slot: 'after-school', location: 'archive', scenes: day5Scenes, sourceModules: ['day5.js'] },
  { id: 'legacy-day6-adapter', title: 'Day 6 legacy calendar adapter', dayRange: [6, 6], slot: 'after-school', location: 'archive', scenes: day6Scenes, sourceModules: ['day6.js'] },
  { id: 'legacy-day7-adapter', title: 'Day 7 legacy calendar adapter', dayRange: [7, 7], slot: 'after-school', location: 'archive', scenes: day7Scenes, sourceModules: ['day7.js'] },
  { id: 'legacy-day8-adapter', title: 'Day 8 legacy calendar adapter', dayRange: [8, 8], slot: 'after-school', location: 'archive', scenes: day8Scenes, sourceModules: ['day8.js'] },
  { id: 'legacy-day9-adapter', title: 'Day 9 legacy calendar adapter', dayRange: [9, 9], slot: 'after-school', location: 'archive', scenes: day9Scenes, sourceModules: ['day9.js'] },
  { id: 'legacy-longform-adapter', title: 'Longform legacy calendar adapter', dayRange: [9, 9], slot: 'evening', location: 'archive', scenes: longformDatingExpansionScenes, sourceModules: ['longformDatingExpansion.js'] },
  { id: 'legacy-day10-adapter', title: 'Day 10 legacy calendar adapter', dayRange: [10, 10], slot: 'after-school', location: 'archive', scenes: day10Scenes, sourceModules: ['day10.js'] },
  { id: 'legacy-day11-adapter', title: 'Day 11 legacy calendar adapter', dayRange: [11, 11], slot: 'post-lock', location: 'archive', scenes: day11Scenes, sourceModules: ['day11.js'] },
  { id: 'legacy-day12-adapter', title: 'Day 12 legacy calendar adapter', dayRange: [12, 12], slot: 'post-lock', location: 'archive', scenes: day12Scenes, sourceModules: ['day12.js'] },
  { id: 'legacy-day13-adapter', title: 'Day 13 legacy calendar adapter', dayRange: [13, 13], slot: 'post-lock', location: 'archive', scenes: day13Scenes, sourceModules: ['day13.js'] },
  { id: 'legacy-day14-adapter', title: 'Day 14 legacy calendar adapter', dayRange: [14, 14], slot: 'post-lock', location: 'archive', scenes: day14Scenes, sourceModules: ['day14.js'] }
];

const legacyDay4To14Scenes = legacySourceGroups.flatMap((group) => group.scenes);
const legacyIntegratedCalendarScenes = integrateRouteDepthExpansions(legacyDay4To14Scenes);
const legacyIntegratedSceneById = new Map(legacyIntegratedCalendarScenes.map((scene) => [scene.id, scene]));
const legacySourceSceneIds = new Set(legacyDay4To14Scenes.map((scene) => scene.id));
const routeDepthSourceGroups = [
  {
    id: 'legacy-route-depth-batch1-adapter',
    batchId: ROUTE_DEPTH_BATCH_ID,
    module: 'batch1RouteDepth',
    dayRange: [14, 14],
    slot: 'terminal',
    scenes: routeDepthBatchScenes
  },
  {
    id: 'legacy-route-depth-batch2-adapter',
    batchId: ROUTE_DEPTH_BATCH2_ID,
    module: 'batch2RouteDepth',
    dayRange: [14, 14],
    slot: 'terminal',
    scenes: routeDepthBatch2Scenes
  },
  {
    id: 'legacy-route-depth-batch3-adapter',
    batchId: ROUTE_DATE_BATCH3_ID,
    module: 'batch3RouteDates',
    dayRange: [14, 14],
    slot: 'terminal',
    scenes: routeDateBatch3Scenes
  }
];

export const calendarSourceAdapters = [
  ...legacySourceGroups.map((group) => ({
    id: group.id,
    kind: 'one-release-adapter',
    sourceModules: group.sourceModules,
    sunset: 'Remove after EventCard source absorption in G003.'
  })),
  ...routeDepthSourceGroups.map((group) => ({
    id: group.id,
    kind: 'one-release-adapter',
    batchId: group.batchId,
    sourceModules: [group.module],
    sunset: 'Remove after EventCard source absorption in G003.'
  }))
];

export const routeDepthBatchAdapterStatus = routeDepthExpansionBatches.map((batch) => {
  const adapter = routeDepthSourceGroups.find((group) => group.batchId === batch.id);
  return {
    batchId: batch.id,
    module: batch.module,
    adapterId: adapter?.id || '',
    sceneCount: batch.sceneCount,
    canonical: Boolean(adapter),
    sunset: adapter ? 'Remove after EventCard source absorption in G003.' : ''
  };
});

function createLegacyAdapterEventCard(group) {
  return {
    id: group.id,
    title: group.title,
    routeId: 'common',
    character: { id: 'archive', name: '학범 아카이브' },
    dayRange: group.dayRange,
    slot: group.slot,
    location: group.location,
    requirements: { flags: [], once: false, routeLock: null },
    rewards: { flags: [] },
    priority: -100,
    fallbackGroup: group.id,
    qualityTags: ['legacy-source-adapter', 'route-depth-adapter-sunset'],
    scenes: group.scenes.map((scene) => withCalendarPlannerChapterLink(legacyIntegratedSceneById.get(scene.id) || scene))
  };
}

function createLegacyRouteDepthEventCard(group) {
  return {
    id: group.id,
    title: `${group.module} legacy calendar adapter`,
    routeId: 'common',
    character: { id: 'archive', name: '학범 아카이브' },
    dayRange: group.dayRange,
    slot: group.slot,
    location: 'archive',
    requirements: { flags: [], once: false, routeLock: null },
    rewards: { flags: [] },
    priority: -200,
    fallbackGroup: group.id,
    qualityTags: ['legacy-source-adapter', 'route-depth-adapter-sunset', group.batchId],
    scenes: group.scenes.map((scene) => withCalendarPlannerChapterLink(legacyIntegratedSceneById.get(scene.id) || scene))
  };
}

export function compileCalendarScenario(eventCards = calendarEventCards, context = {}) {
  const errors = validateCalendarEventCards(eventCards);
  if (errors.length > 0) {
    throw new Error(`Invalid calendar event cards:\n${errors.join('\n')}`);
  }

  const sortedEventCards = [...asArray(eventCards)].sort(compareCalendarEventCards);
  const calendarScenarioScenes = [];
  const calendarScenarioByDay = Object.fromEntries(Array.from({ length: 11 }, (_, index) => [String(index + 4), []]));
  const calendarPlannerEntries = [];
  const calendarEventIds = sortedEventCards.map((card) => card.id);

  for (const card of sortedEventCards) {
    const scenes = materializeScenes(card, context);
    calendarPlannerEntries.push(buildPlannerEntry(card, scenes));
    calendarScenarioScenes.push(...scenes);

    for (let day = firstDay(card); day <= Number(card.dayRange[1]); day += 1) {
      if (!calendarScenarioByDay[String(day)]) calendarScenarioByDay[String(day)] = [];
      calendarScenarioByDay[String(day)].push(...scenes);
    }
  }

  return {
    calendarEventCards: sortedEventCards,
    calendarScenarioScenes,
    calendarScenarioByDay,
    calendarPlannerEntries,
    calendarEventIds
  };
}

export const calendarEventCards = [
  ...calendarPlannerEventCards,
  ...legacySourceGroups.map(createLegacyAdapterEventCard),
  ...routeDepthSourceGroups.map(createLegacyRouteDepthEventCard)
];

const compiledCalendarScenario = compileCalendarScenario(calendarEventCards);

export const calendarScenarioScenes = compiledCalendarScenario.calendarScenarioScenes;
export const calendarScenarioByDay = compiledCalendarScenario.calendarScenarioByDay;
export const calendarPlannerEntries = compiledCalendarScenario.calendarPlannerEntries;
export const calendarEventIds = compiledCalendarScenario.calendarEventIds;
export const calendarScenarioDaySlices = Object.fromEntries(
  Array.from({ length: 11 }, (_, index) => {
    const day = index + 4;
    return [
      String(day),
      calendarScenarioScenes.filter((scene) => scene.calendarSourceAdapter === `legacy-day${day}-adapter`)
    ];
  })
);
export const calendarScenarioSourceSlices = Object.fromEntries(
  calendarEventCards.map((card) => [
    card.id,
    calendarScenarioScenes.filter((scene) => scene.calendarSourceAdapter === card.id)
  ])
);

export function getCalendarScenarioDaySlice(day) {
  return calendarScenarioDaySlices[String(day)] || [];
}

export function getCalendarSourceAdapterSlice(adapterId) {
  return calendarScenarioSourceSlices[adapterId] || [];
}
export {
  REQUIRED_EVENT_CARD_FIELDS,
  SLOT_ORDER,
  calendarPlannerCoverage,
  calendarPlannerDayConfigs,
  materializePlannerEventScenes,
  routePlannerEventCards
};
