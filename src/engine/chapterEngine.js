import { safeText } from '../utils/vnText.js';

export function shouldShowChapterCard(item, previousItem = null) {
  if (!item) return false;
  if (item.chapterCard === false) return false;
  if (item.type === 'banner' && item.kind === 'chapter') return true;
  const currentChapter = safeText(item.chapter || item.day);
  const previousChapter = safeText(previousItem?.chapter || previousItem?.day);
  return Boolean(currentChapter && currentChapter !== previousChapter);
}

export function getChapterInfo(item, { previousItem = null, fallbackTitle = '스토리' } = {}) {
  return {
    visible: shouldShowChapterCard(item, previousItem),
    chapter: safeText(item?.chapter || item?.day),
    title: safeText(item?.sectionTitle || item?.episodeTitle || item?.place || fallbackTitle),
    place: safeText(item?.place || ''),
    mood: safeText(item?.mood || '')
  };
}
