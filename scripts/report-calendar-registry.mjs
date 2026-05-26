import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import {
  calendarEventCards,
  calendarEventIds,
  calendarPlannerCoverage,
  calendarPlannerEntries,
  calendarScenarioByDay,
  calendarScenarioScenes,
  calendarSourceAdapters,
  routeDepthBatchAdapterStatus,
  validateCalendarEventCards
} from '../src/data/scenario/calendar/index.js';

const OUT_PATH = process.env.CALENDAR_REGISTRY_REPORT || '.omx/reports/calendar-registry-latest.json';
const validationErrors = validateCalendarEventCards(calendarEventCards);
const dayCoverage = Object.fromEntries(
  Object.entries(calendarScenarioByDay).map(([day, scenes]) => [day, scenes.length])
);
const adapterSunsetStatus = calendarSourceAdapters.map((adapter) => ({
  id: adapter.id,
  kind: adapter.kind,
  sourceModules: adapter.sourceModules || [],
  batchId: adapter.batchId || '',
  sunset: adapter.sunset || '',
  hasSunset: Boolean(adapter.sunset)
}));

const report = {
  checkedAt: new Date().toISOString(),
  validationErrors,
  eventCardCount: calendarEventCards.length,
  eventIdCount: calendarEventIds.length,
  plannerEntryCount: calendarPlannerEntries.length,
  scenarioSceneCount: calendarScenarioScenes.length,
  dayCoverage,
  calendarPlannerCoverage,
  adapterSunsetStatus,
  routeDepthBatchAdapterStatus
};

mkdirSync(path.dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, JSON.stringify(report, null, 2));

if (validationErrors.length > 0) {
  throw new Error(`Calendar registry validation failed:\n${validationErrors.join('\n')}`);
}
if (!adapterSunsetStatus.every((adapter) => adapter.hasSunset)) {
  throw new Error('Every legacy calendar source adapter needs a sunset marker.');
}
if (!routeDepthBatchAdapterStatus.every((entry) => entry.canonical && entry.adapterId && entry.sceneCount > 0)) {
  throw new Error('Every route-depth batch needs canonical adapter metadata.');
}
if (!calendarPlannerCoverage.every((entry) => entry.eventCount >= 11 && entry.days.length === 11 && entry.hasLowMidHighVariants && entry.hasMemoryPayoff && entry.hasDateInvitationReaction)) {
  throw new Error('Every route needs Day4-14 planner coverage, affection-tier variants, memory payoff, and date/invitation reactions.');
}

console.log(JSON.stringify({
  outPath: OUT_PATH,
  eventCardCount: report.eventCardCount,
  scenarioSceneCount: report.scenarioSceneCount,
  adapterCount: adapterSunsetStatus.length,
  plannerRouteCount: calendarPlannerCoverage.length,
  routeDepthBatchAdapterStatus
}, null, 2));
