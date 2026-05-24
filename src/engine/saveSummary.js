import { resolveDominantRoute, resolveRouteLock } from '../utils/routeResolution.js';
import { resolveLatestRouteMemory } from '../utils/relationshipState.js';
import { safeText } from '../utils/vnText.js';

function getAffectionTarget(routeConfig, gameState) {
  return resolveDominantRoute(gameState, routeConfig) || (typeof routeConfig?.affectionTarget === 'string'
    ? { id: routeConfig.affectionTarget, name: routeConfig.affectionTarget, max: 10 }
    : routeConfig?.affectionTarget || { id: 'hyeongyeom', name: '현겸', max: 10 });
}

function getAffectionLabel(value, routeConfig) {
  const labels = [...(routeConfig?.affectionLabels || [])]
    .sort((a, b) => Number(a.min || 0) - Number(b.min || 0));
  return labels.reduce(
    (label, current) => (value >= Number(current.min || 0) ? current.label : label),
    labels[0]?.label || '관계 기록 없음'
  );
}

function getChapterDisplay(item, routeConfig) {
  const chapter = safeText(item?.chapter || item?.day || '');
  const chapterItem = (routeConfig?.chapterItems || []).find((entry) => entry.id === chapter);
  const title = safeText(item?.sectionTitle || item?.episodeTitle || item?.place || chapterItem?.title || '스토리');
  return {
    chapter,
    title,
    label: safeText(chapterItem?.title || title || chapter || '스토리'),
    thumbnail: safeText(chapterItem?.thumbnail || '')
  };
}

function buildRouteDisplay(gameState, routeConfig, target, affectionValue) {
  const lock = resolveRouteLock(gameState, routeConfig);
  const routeLocked = Boolean(lock && lock.reason !== 'fallback' && lock.id !== 'common');
  const routeName = safeText((routeLocked ? lock.name : target?.name) || target?.id || '공통 루트');
  const affectionLabel = getAffectionLabel(affectionValue, routeConfig);
  const latestMemoryLabel = resolveLatestRouteMemory(gameState?.flags, routeConfig?.datingSimProfiles || {});
  const memoryProgressText = latestMemoryLabel ? `${routeName} · ${latestMemoryLabel}` : '';
  return {
    routeId: safeText((routeLocked ? lock.id : target?.id) || 'common'),
    routeName,
    routeLabel: routeLocked ? `${routeName} 루트 확정` : `${routeName} 루트`,
    routeLocked,
    routeProgressText: memoryProgressText || (routeLocked ? `${routeName} · 루트 확정` : `${routeName} · ${affectionLabel}`),
    affectionLabel,
    latestMemoryLabel
  };
}

export function buildSaveSummary({ item, gameState, routeConfig, backgroundSrc = '' }) {
  const target = getAffectionTarget(routeConfig, gameState);
  const affectionValue = Number(gameState?.affection?.[target.id] || 0);
  const chapterDisplay = getChapterDisplay(item, routeConfig);
  const routeDisplay = buildRouteDisplay(gameState, routeConfig, target, affectionValue);
  const latestMapChoice = item?.type === 'mapChoice'
    ? [...(gameState?.choices || [])].reverse().find((choice) => choice?.id === item?.id)
    : null;
  const mapChoiceText = item?.type === 'mapChoice'
    ? safeText(latestMapChoice?.text || item?.summary || item?.place || (item?.choices || []).join(' / ') || '지도 선택')
    : '';
  const text = safeText(mapChoiceText || item?.text || item?.summary || item?.place || item?.name || '');
  return {
    itemId: safeText(item?.id),
    chapter: chapterDisplay.chapter,
    chapterTitle: chapterDisplay.title,
    chapterLabel: chapterDisplay.label,
    linePreview: text.length > 72 ? `${text.slice(0, 72)}…` : text,
    affectionTarget: target.id,
    affectionValue,
    affectionLabel: routeDisplay.affectionLabel,
    routeId: routeDisplay.routeId,
    routeName: routeDisplay.routeName,
    routeLabel: routeDisplay.routeLabel,
    routeLocked: routeDisplay.routeLocked,
    routeProgressText: routeDisplay.routeProgressText,
    latestMemoryLabel: routeDisplay.latestMemoryLabel,
    thumbnail: item?.thumbnail || item?.backgroundSrc || backgroundSrc || chapterDisplay.thumbnail || ''
  };
}
