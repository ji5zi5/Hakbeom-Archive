import assert from 'node:assert/strict';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { episodeInfo, scenario } from '../src/data/scenario.js';
import { routeConfig } from '../src/data/routeConfig.js';
import { routeDateBatch3Routes } from '../src/data/scenario/batch3RouteDates/index.js';
import {
  calendarEventCards,
  calendarPlannerCoverage,
  calendarPlannerDayConfigs,
  calendarScenarioScenes,
  routeDepthBatchAdapterStatus,
  routePlannerEventCards
} from '../src/data/scenario/calendar/index.js';
import { loadCalendarScenarioScenes } from '../src/data/scenario/calendar/loadCalendarScenario.js';
import { resolveEndingRoute } from '../src/engine/vnEngine.js';
import { resolveRouteLock } from '../src/utils/routeResolution.js';
import { applyRouteRewards, createInitialGameState } from '../src/utils/vnState.js';
import { SAVE_VERSION } from '../src/engine/saveCodec.js';

const DEFAULT_OUT_PATH = '.omx/reports/all-route-quality-latest.json';
const ENFORCE = process.env.ROUTE_QUALITY_ENFORCE === '1' || process.argv.includes('--enforce');
const OUT_PATH = process.env.ROUTE_QUALITY_OUT_PATH
  || process.argv.find((arg) => arg.startsWith('--out='))?.slice('--out='.length)
  || DEFAULT_OUT_PATH;
const HYEONGYEOM_BASELINE_DIALOGUE_RATIO = 0.8358;
const DIRECT_DIALOGUE_FLOOR = 0.65;

function stripDisplayCharacters(value) {
  return String(value || '').replace(/[\s\p{P}\p{S}]/gu, '');
}

function quotedSpeech(value) {
  return [...String(value || '').matchAll(/[“"‘']([^”"’']+)[”"’']/g)]
    .map((match) => match[1])
    .join('');
}

function routeIdsFromConfig(config) {
  return config.affectionTargets.map((target) => target.id);
}

function readMemoryFixture() {
  const fixturePath = 'tests/fixtures/day4-14-memory-flags.json';
  if (!existsSync(fixturePath)) return { version: null, flags: [] };
  return JSON.parse(readFileSync(fixturePath, 'utf8'));
}

function countBy(values = []) {
  return values.reduce((counts, value) => {
    const key = String(value || 'unknown');
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
}

function rewardMemoryEntries(card) {
  return (card.scenes || []).flatMap((scene) => (scene.rewards || []).flatMap((reward) => {
    const memories = [reward.memory, ...(Array.isArray(reward.memories) ? reward.memories : [])].filter(Boolean);
    return memories.map((memory) => ({
      eventId: reward.calendar?.eventId || reward.planVisit?.eventId || card.id,
      routeId: memory.routeId || reward.calendar?.routeId || card.routeId,
      kind: memory.kind || reward.calendar?.outcome || '',
      label: memory.label || reward.calendar?.label || ''
    }));
  }));
}

function rewardCalendarEntries(card) {
  return (card.scenes || []).flatMap((scene) => (scene.rewards || [])
    .filter((reward) => reward.calendar || reward.planVisit || reward.invitation)
    .map((reward) => ({
      eventId: reward.calendar?.eventId || reward.planVisit?.eventId || reward.invitation?.eventId || card.id,
      routeId: reward.calendar?.routeId || reward.planVisit?.routeId || reward.invitation?.routeId || card.routeId,
      day: reward.calendar?.day || reward.planVisit?.day || card.dayRange?.[0],
      slot: reward.calendar?.slot || reward.planVisit?.slot || card.slot,
      location: reward.calendar?.location || reward.planVisit?.locationId || card.location,
      outcome: reward.calendar?.outcome || reward.invitation?.status || 'planned'
    })));
}

function routeMemoryReadAudit(routeId) {
  const memoryFlags = new Set(
    routePlannerEventCards
      .filter((card) => card.routeId === routeId)
      .flatMap((card) => (card.scenes || []).flatMap((scene) => (scene.rewards || []).flatMap((reward) => reward.flags || [])))
      .filter((flag) => flag.startsWith(`${routeId}_date_`) || flag.startsWith(`${routeId}_phone_`) || flag.startsWith(`memory_payoff_${routeId}_`))
  );
  const consumers = scenario.filter((item) => (item.variants || []).some((variant) => (
    variant.requiredFlags || variant.flags || []
  ).some((flag) => memoryFlags.has(flag))));
  return {
    routeId,
    memoryFlagCount: memoryFlags.size,
    consumerSceneCount: consumers.length,
    consumerSceneIds: consumers.map((item) => item.id).slice(0, 20)
  };
}

function buildSyncLazyParity(lazyScenes) {
  let mismatchIndex = -1;
  for (let index = 0; index < Math.max(calendarScenarioScenes.length, lazyScenes.length); index += 1) {
    if (calendarScenarioScenes[index]?.id !== lazyScenes[index]?.id || calendarScenarioScenes[index]?.nextId !== lazyScenes[index]?.nextId) {
      mismatchIndex = index;
      break;
    }
  }
  return {
    syncCount: calendarScenarioScenes.length,
    lazyCount: lazyScenes.length,
    mismatchIndex,
    matches: mismatchIndex === -1 && calendarScenarioScenes.length === lazyScenes.length
  };
}

function buildCalendarObservability(lazyScenes) {
  const plannerCards = routePlannerEventCards;
  const memoryWrites = plannerCards.flatMap(rewardMemoryEntries);
  const calendarWrites = plannerCards.flatMap(rewardCalendarEntries);
  return {
    eventCardCount: calendarEventCards.length,
    plannerDayCount: calendarPlannerDayConfigs.length,
    routePlannerEventCount: plannerCards.length,
    slotCoverage: countBy(calendarEventCards.map((card) => card.slot)),
    locationCoverage: countBy(calendarEventCards.map((card) => card.location)),
    qualityTagCoverage: countBy(calendarEventCards.flatMap((card) => card.qualityTags || [])),
    routePlannerCoverage: calendarPlannerCoverage,
    memoryWriteAudit: {
      calendarWriteCount: calendarWrites.length,
      relationshipMemoryWriteCount: memoryWrites.length,
      routes: Object.fromEntries(routeIds.map((routeId) => [
        routeId,
        {
          calendarWrites: calendarWrites.filter((entry) => entry.routeId === routeId).length,
          relationshipMemoryWrites: memoryWrites.filter((entry) => entry.routeId === routeId).length
        }
      ]))
    },
    memoryReadAudit: routeIds.map(routeMemoryReadAudit),
    adapterSunsetStatus: routeDepthBatchAdapterStatus,
    syncLazyParity: buildSyncLazyParity(lazyScenes)
  };
}

function sceneIdLooksLate(sceneId = '') {
  return /^day1[0-4]/.test(sceneId) || /^ending/.test(sceneId);
}

function scenarioById() {
  return new Map(scenario.map((item) => [item.id, item]));
}

function rewardFlags(item) {
  return (item?.rewards || []).flatMap((reward) => reward.flags || []);
}

function findRewardChoiceIndex(item, requiredFlag) {
  return (item?.rewards || []).findIndex((reward) => (reward.flags || []).includes(requiredFlag));
}

function findRewardProducers(requiredFlag) {
  return scenario
    .filter((item) => findRewardChoiceIndex(item, requiredFlag) >= 0)
    .map((item) => item.id);
}

function findVariantConsumers(requiredFlag) {
  return scenario
    .filter((item) => (item.variants || []).some((variant) => (
      variant.requiredFlags || variant.flags || []
    ).includes(requiredFlag)))
    .map((item) => item.id);
}

function allExplicitRouteLockRewardScenes(routeIds) {
  const lockFlags = new Set(routeIds.map((routeId) => `route_lock_${routeId}`));
  return scenario
    .filter((item) => rewardFlags(item).some((flag) => lockFlags.has(flag)))
    .map((item) => item.id);
}

function applyRewardByFlag(state, item, flag) {
  const index = findRewardChoiceIndex(item, flag);
  if (index < 0) return { state, applied: false, index: -1 };
  return {
    state: applyRouteRewards(state, item, index, routeConfig),
    applied: true,
    index
  };
}

function applyFirstRewardedScene(state, sceneIds, type) {
  const scenes = sceneIds.map((sceneId) => SCENE_BY_ID.get(sceneId)).filter(Boolean);
  const item = scenes.find((scene) => scene.type === type && (scene.rewards || []).length > 0);
  if (!item) return { state, applied: false, sceneId: null, index: -1 };
  return {
    state: applyRouteRewards(state, item, 0, routeConfig),
    applied: true,
    sceneId: item.id,
    index: 0
  };
}

function selectedRouteVariant(routeId, memoryFlags, variant = {}) {
  const flags = variant.requiredFlags || variant.flags || [];
  return flags.some((flag) => (
    flag === `route_lock_${routeId}`
    || flag.startsWith(`${routeId}_date_`)
    || flag.startsWith(`${routeId}_phone_`)
    || memoryFlags.includes(flag)
  ));
}

function collectRouteDisplayTexts(routeId, routeDate, memoryFlags) {
  const routeSceneIds = new Set([
    ...(routeDate?.sceneIds || []),
    `day10-lock-${routeId}`,
    `day10-${routeId}-prelock-reflection`,
    'day11-opening',
    'day11-moe-route-message',
    'day14-route-gate',
    `day14-${routeId}-festival`,
    'ending-promise',
    `ending-${routeId}`
  ]);

  return [...routeSceneIds].flatMap((sceneId) => {
    const item = SCENE_BY_ID.get(sceneId);
    if (!item) return [];
    const entries = [];
    if (item.routeId === routeId && item.text) entries.push({ sceneId, source: 'text', text: item.text, direct: false });
    for (const variant of item.variants || []) {
      if (selectedRouteVariant(routeId, memoryFlags, variant)) {
        entries.push({ sceneId, source: 'variant', text: variant.text, direct: false });
      }
    }
    if (item.routeId === routeId || sceneId === `ending-${routeId}`) {
      for (const message of item.messages || []) {
        if (message.text) entries.push({ sceneId, source: 'message', text: message.text, direct: true });
      }
      for (const reply of item.replies || []) entries.push({ sceneId, source: 'reply', text: reply, direct: true });
    }
    return entries;
  });
}

function directDialogueStats(entries) {
  return entries.reduce((result, entry) => {
    const denominator = stripDisplayCharacters(entry.text).length;
    const numerator = stripDisplayCharacters(entry.direct ? entry.text : quotedSpeech(entry.text)).length;
    return {
      numerator: result.numerator + numerator,
      denominator: result.denominator + denominator
    };
  }, { numerator: 0, denominator: 0 });
}

function replayRoute(routeId, fixtureRows, routeDate) {
  let state = createInitialGameState();
  const steps = [];
  for (const row of fixtureRows) {
    const item = SCENE_BY_ID.get(row.producerScene);
    const result = applyRewardByFlag(state, item, row.flag);
    state = result.state;
    steps.push({ sceneId: row.producerScene, flag: row.flag, applied: result.applied, index: result.index });
  }

  if (routeDate) {
    const choiceResult = applyFirstRewardedScene(state, routeDate.sceneIds || [], 'choice');
    state = choiceResult.state;
    steps.push({ sceneId: choiceResult.sceneId, type: 'route-date-choice', applied: choiceResult.applied, index: choiceResult.index });
    const phoneResult = applyFirstRewardedScene(state, routeDate.sceneIds || [], 'phone');
    state = phoneResult.state;
    steps.push({ sceneId: phoneResult.sceneId, type: 'route-date-phone', applied: phoneResult.applied, index: phoneResult.index });
  }

  const lockFlag = `route_lock_${routeId}`;
  const lockScene = scenario.find((item) => findRewardChoiceIndex(item, lockFlag) >= 0);
  const lockResult = applyRewardByFlag(state, lockScene, lockFlag);
  state = lockResult.state;
  steps.push({ sceneId: lockScene?.id || null, flag: lockFlag, applied: lockResult.applied, index: lockResult.index });

  return { state, steps };
}

function routeScorecard(routeId, fixtureRows) {
  const routeDate = routeDateBatch3Routes.find((route) => route.routeId === routeId);
  const memoryFlags = [
    ...fixtureRows.map((row) => row.flag),
    ...(routeDate?.memoryFlags || []),
    ...(routeDate?.phoneFlags || []),
    ...(routeDate?.payoffOnlyFlags || [])
  ];
  const replay = replayRoute(routeId, fixtureRows, routeDate);
  const entries = collectRouteDisplayTexts(routeId, routeDate, memoryFlags);
  const dialogue = directDialogueStats(entries);
  const ratio = dialogue.denominator > 0 ? dialogue.numerator / dialogue.denominator : 0;
  const routeLock = resolveRouteLock(replay.state, routeConfig);
  const endingRoute = resolveEndingRoute(replay.state, episodeInfo.endingRules || []);
  const lockFlag = `route_lock_${routeId}`;
  const terminalRule = (episodeInfo.endingRules || []).find((rule) => rule.id === routeId && !rule.default);

  const fixtureConsumers = fixtureRows.map((row) => {
    const consumers = findVariantConsumers(row.flag);
    return {
      flag: row.flag,
      producerScenes: findRewardProducers(row.flag),
      lateConsumers: consumers.filter(sceneIdLooksLate)
    };
  });

  const required = {
    hasFixtureRows: fixtureRows.length >= 2,
    allFixtureRowsProduced: fixtureConsumers.every((row) => row.producerScenes.length > 0),
    allFixtureRowsConsumedLate: fixtureConsumers.every((row) => row.lateConsumers.length > 0),
    hasRouteDateMatrix: Boolean(routeDate),
    routeDateFlagsHavePayoffConsumers: Boolean(routeDate)
      && [...(routeDate.memoryFlags || []), ...(routeDate.phoneFlags || [])].every((flag) => (
        (routeDate.payoffConsumerSceneIds || []).length > 0 && findVariantConsumers(flag).length > 0
      )),
    lockApplied: replay.state.flags.includes(lockFlag),
    lockResolvesRoute: routeLock.id === routeId && routeLock.reason === 'explicit-lock',
    affectionEligible: Number(replay.state.affection?.[routeId] || 0) >= 85,
    terminalRuleRequiresLock: Boolean(terminalRule?.flags?.includes(lockFlag)),
    terminalRuleRequires85: Number(terminalRule?.affection?.[routeId] || 0) >= 85,
    endingResolvesRoute: endingRoute?.id === routeId,
    directDialogueFloor: ratio >= DIRECT_DIALOGUE_FLOOR
  };

  return {
    routeId,
    routeName: routeConfig.affectionTargets.find((target) => target.id === routeId)?.name || routeId,
    fixtureFlags: fixtureRows.map((row) => row.flag),
    routeDate: routeDate ? {
      entrySceneId: routeDate.entrySceneId,
      exitSceneId: routeDate.exitSceneId,
      memoryFlags: routeDate.memoryFlags || [],
      phoneFlags: routeDate.phoneFlags || [],
      payoffConsumerSceneIds: routeDate.payoffConsumerSceneIds || []
    } : null,
    replay: {
      steps: replay.steps,
      affection: replay.state.affection?.[routeId] || 0,
      hasLockFlag: replay.state.flags.includes(lockFlag),
      routeLock: { id: routeLock.id, reason: routeLock.reason },
      endingRoute: { id: endingRoute?.id || null, title: endingRoute?.title || '' }
    },
    dialogue: {
      numerator: dialogue.numerator,
      denominator: dialogue.denominator,
      ratio: Number(ratio.toFixed(4)),
      floor: DIRECT_DIALOGUE_FLOOR
    },
    fixtureConsumers,
    required,
    complete: Object.values(required).every(Boolean)
  };
}

const SCENE_BY_ID = scenarioById();
const routeIds = routeIdsFromConfig(routeConfig);
const fixture = readMemoryFixture();
const fixtureRowsByRoute = Object.fromEntries(routeIds.map((routeId) => [
  routeId,
  (fixture.flags || []).filter((row) => row.routeId === routeId)
]));

const explicitRouteLockRewardScenes = allExplicitRouteLockRewardScenes(routeIds);
const routeSpecificTerminalRules = (episodeInfo.endingRules || []).filter((rule) => routeIds.includes(rule.id) && !rule.default);
const routeScorecards = routeIds.map((routeId) => routeScorecard(routeId, fixtureRowsByRoute[routeId] || []));
const hyeongyeom = routeScorecards.find((route) => route.routeId === 'hyeongyeom');
const lazyCalendarScenarioScenes = await loadCalendarScenarioScenes();
const calendarObservability = buildCalendarObservability(lazyCalendarScenarioScenes);

const structuralChecks = {
  saveVersionStable: SAVE_VERSION >= 3,
  routeIdsDerivedFromAffectionTargets: routeIds.length === routeConfig.affectionTargets.length && routeIds.every(Boolean),
  fixtureStillDay4Day5Bridge: fixture.version === 1 && (fixture.flags || []).length === routeIds.length * 2,
  allRoutesHaveTerminalRule: routeIds.every((routeId) => routeSpecificTerminalRules.some((rule) => rule.id === routeId)),
  allTerminalRulesRequireLockAnd85: routeIds.every((routeId) => {
    const rule = routeSpecificTerminalRules.find((candidate) => candidate.id === routeId);
    return (rule?.flags || []).includes(`route_lock_${routeId}`) && Number(rule?.affection?.[routeId] || 0) >= 85;
  }),
  explicitRouteLocksOnlyDay10: explicitRouteLockRewardScenes.every((sceneId) => sceneId.startsWith('day10-')),
  hyeongyeomBaselinePreserved: Boolean(hyeongyeom)
    && hyeongyeom.dialogue.ratio >= HYEONGYEOM_BASELINE_DIALOGUE_RATIO
    && hyeongyeom.replay.affection >= 85
    && hyeongyeom.replay.hasLockFlag
    && hyeongyeom.replay.endingRoute.id === 'hyeongyeom',
  calendarEventCardsPresent: calendarObservability.eventCardCount >= 125,
  allPlannerRoutesHaveCoverage: calendarObservability.routePlannerCoverage.every((entry) => (
    entry.eventCount >= 11
    && entry.days.length === 11
    && entry.hasLowMidHighVariants
    && entry.hasMemoryPayoff
    && entry.hasDateInvitationReaction
  )),
  calendarMemoryWritesPresent: Object.values(calendarObservability.memoryWriteAudit.routes).every((entry) => (
    entry.calendarWrites >= 11 && entry.relationshipMemoryWrites >= 11
  )),
  routeDepthAdaptersCanonical: calendarObservability.adapterSunsetStatus.every((entry) => entry.canonical && entry.adapterId),
  calendarSyncLazyParity: calendarObservability.syncLazyParity.matches
};

const report = {
  checkedAt: new Date().toISOString(),
  enforce: ENFORCE,
  routeIds,
  thresholds: {
    directDialogueFloor: DIRECT_DIALOGUE_FLOOR,
    hyeongyeomBaselineDialogueRatio: HYEONGYEOM_BASELINE_DIALOGUE_RATIO,
    terminalAffection: 85
  },
  structuralChecks,
  explicitRouteLockRewardScenes,
  calendarObservability,
  routeScorecards,
  incompleteRoutes: routeScorecards.filter((route) => !route.complete).map((route) => route.routeId)
};

mkdirSync(path.dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, JSON.stringify(report, null, 2));

assert.deepEqual(
  Object.entries(structuralChecks).filter(([, passed]) => !passed),
  [],
  'Route-quality structural checks should pass before route expansion starts.'
);

if (ENFORCE) {
  assert.deepEqual(report.incompleteRoutes, [], 'All route scorecards should be complete when ROUTE_QUALITY_ENFORCE=1 or --enforce is used.');
}

console.log(JSON.stringify({
  outPath: OUT_PATH,
  enforce: ENFORCE,
  structuralChecks,
  completeRoutes: routeScorecards.filter((route) => route.complete).map((route) => route.routeId),
  calendarObservability: {
    eventCardCount: calendarObservability.eventCardCount,
    routePlannerEventCount: calendarObservability.routePlannerEventCount,
    syncLazyParity: calendarObservability.syncLazyParity
  },
  incompleteRoutes: report.incompleteRoutes
}, null, 2));
