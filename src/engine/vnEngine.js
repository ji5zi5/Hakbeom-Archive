import { applyRouteRewards, createInitialGameState } from '../utils/vnState.js';
import { applyDirectorItem, createDirectorState } from './directorEngine.js';

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function getItemChoices(item) {
  if (!item) return [];
  return item.type === 'phone' ? (item.replies || []) : (item.choices || []);
}

export function resolveSkipTargetIndex({ scenario, index, item, episodeInfo, gameState, settings }) {
  const skipToId = item?.skipToId || episodeInfo.skipToId;
  const idTarget = skipToId ? scenario.findIndex((line) => line.id === skipToId) : -1;
  const markerTarget = scenario.findIndex((line, lineIndex) => lineIndex > index && line.skipTarget === true);
  const targetIndex = idTarget >= 0 ? idTarget : markerTarget >= 0 ? markerTarget : scenario.length - 1;

  if (settings.skipReadOnly) {
    const readLines = new Set(gameState.readLines || []);
    const unreadIndex = scenario.findIndex((line, lineIndex) => (
      lineIndex > index && lineIndex <= targetIndex && line.id && !readLines.has(line.id)
    ));
    if (unreadIndex >= 0) {
      return { targetIndex: unreadIndex, unread: true };
    }
  }

  return { targetIndex, unread: false };
}

export function resolveEndingRoute(gameState, endingRules = []) {
  const flags = new Set(gameState.flags || []);
  const affection = gameState.affection || {};
  const fallback = endingRules.find((rule) => rule.default) || endingRules[endingRules.length - 1] || null;

  return endingRules.find((rule) => {
    if (rule.default) return false;
    const requiredFlags = rule.flags || [];
    const requiredAffection = rule.affection || {};
    return requiredFlags.every((flag) => flags.has(flag))
      && Object.entries(requiredAffection).every(([target, min]) => (affection[target] || 0) >= Number(min || 0));
  }) || fallback;
}

export function findScenarioIndexById(scenario, id) {
  if (!id) return -1;
  return scenario.findIndex((line) => line.id === id);
}

export function resolveNextIndex({ scenario, index, currentItem, ending, gameState, endingRules = [] }) {
  if (!currentItem || currentItem?.terminal) return -1;

  const route = currentItem?.endingGate
    ? ending || resolveEndingRoute(gameState, endingRules)
    : ending;
  const endingNext = currentItem?.endingNext || null;
  const endingTargetId = endingNext
    ? endingNext[route?.id] || endingNext.default || endingNext.quiet || ''
    : '';
  const targetId = endingTargetId || currentItem?.nextId;
  const targetIndex = findScenarioIndexById(scenario, targetId);
  if (targetIndex >= 0) return targetIndex;

  return index + 1 < scenario.length ? index + 1 : -1;
}

function makeReplayStateKey(index, gameState) {
  const flags = [...(gameState.flags || [])].sort().join(',');
  const affection = Object.entries(gameState.affection || {})
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([target, value]) => `${target}:${value}`)
    .join(',');
  return `${index}|${flags}|${affection}`;
}

export function getReplayCandidateSteps(scenario, index, gameState, options = {}) {
  const item = scenario[index];
  if (!item || item.terminal) return [];

  const endingRules = options.endingRules || [];
  if (item.endingNext) {
    const route = endingRules.length > 0 ? resolveEndingRoute(gameState, endingRules) : null;
    const targetId = route
      ? item.endingNext[route.id] || item.endingNext.default || item.endingNext.quiet
      : item.endingNext.default || item.endingNext.quiet;
    const targetIndex = findScenarioIndexById(scenario, targetId);
    return targetIndex >= 0 ? [{ index: targetIndex, gameState }] : [];
  }

  if (item.type === 'choice' || item.type === 'phone') {
    const targets = item.next || item.choiceNext || [];
    return getItemChoices(item).map((_, choiceIndex) => {
      const targetIndex = findScenarioIndexById(scenario, targets[choiceIndex]);
      return {
        index: targetIndex >= 0 ? targetIndex : index + 1,
        gameState: applyRouteRewards(gameState, item, choiceIndex, options.routeConfig)
      };
    }).filter((step) => step.index >= 0 && step.index < scenario.length);
  }

  const nextIdIndex = findScenarioIndexById(scenario, item.nextId);
  if (nextIdIndex >= 0) return [{ index: nextIdIndex, gameState }];
  return index + 1 < scenario.length ? [{ index: index + 1, gameState }] : [];
}

export function findReplayPath(scenario, targetIndex, currentIndex = 0, gameState = createInitialGameState(), options = {}, seen = new Set()) {
  const replayKey = makeReplayStateKey(currentIndex, gameState);
  if (currentIndex < 0 || currentIndex >= scenario.length || seen.has(replayKey)) return null;
  if (currentIndex === targetIndex) return [currentIndex];

  const nextSeen = new Set(seen);
  nextSeen.add(replayKey);

  for (const step of getReplayCandidateSteps(scenario, currentIndex, gameState, options)) {
    const childPath = findReplayPath(scenario, targetIndex, step.index, step.gameState, options, nextSeen);
    if (childPath) return [currentIndex, ...childPath];
  }

  return null;
}

export function replayDirectorState(scenario, targetIndex, defaults = {}) {
  const maxIndex = clamp(targetIndex, 0, Math.max(0, scenario.length - 1));
  const targetId = scenario[maxIndex]?.id || '';
  const endingRules = defaults.endingRules || [];
  const replayPath = findReplayPath(scenario, maxIndex, 0, createInitialGameState(), {
    targetId,
    endingRules,
    routeConfig: defaults.routeConfig
  }) || [maxIndex];
  let state = createDirectorState(defaults);

  for (const lineIndex of replayPath) {
    state = applyDirectorItem(state, scenario[lineIndex], defaults);
  }

  return state;
}
