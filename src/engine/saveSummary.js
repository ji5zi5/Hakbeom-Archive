import { safeText } from '../utils/vnText.js';

function getAffectionTarget(routeConfig) {
  return typeof routeConfig?.affectionTarget === 'string'
    ? { id: routeConfig.affectionTarget, name: routeConfig.affectionTarget, max: 10 }
    : routeConfig?.affectionTarget || { id: 'hyeongyeom', name: '현겸', max: 10 };
}

function getAffectionLabel(value, routeConfig) {
  const labels = [...(routeConfig?.affectionLabels || [])]
    .sort((a, b) => Number(a.min || 0) - Number(b.min || 0));
  return labels.reduce(
    (label, current) => (value >= Number(current.min || 0) ? current.label : label),
    labels[0]?.label || '관계 기록 없음'
  );
}

export function buildSaveSummary({ item, gameState, routeConfig, backgroundSrc = '' }) {
  const target = getAffectionTarget(routeConfig);
  const affectionValue = Number(gameState?.affection?.[target.id] || 0);
  const text = safeText(item?.text || item?.summary || item?.place || item?.name || '');
  return {
    itemId: safeText(item?.id),
    chapter: safeText(item?.chapter || item?.day || ''),
    chapterTitle: safeText(item?.sectionTitle || item?.episodeTitle || item?.place || '스토리'),
    linePreview: text.length > 72 ? `${text.slice(0, 72)}…` : text,
    affectionTarget: target.id,
    affectionValue,
    affectionLabel: getAffectionLabel(affectionValue, routeConfig),
    thumbnail: item?.thumbnail || item?.backgroundSrc || backgroundSrc || ''
  };
}
