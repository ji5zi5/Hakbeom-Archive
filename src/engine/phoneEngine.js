import { safeText } from '../utils/vnText.js';

const PHONE_CONTACT_NAMES = {
  hakbeom: '학범',
  me: '학범',
  hyeongyeom: '현겸',
  ukhyun: '욱현',
  jaeseong: '재성',
  dohun: '도훈',
  haeum: '하음',
  yunho: '윤호',
  sangwon: '상원',
  sanguk: '상욱',
  junhyeok: '준혁'
};
const MAX_PHONE_REPLIES = 3;

function resolvePhoneSenderName(from, fallbackName) {
  return safeText(PHONE_CONTACT_NAMES[from] || fallbackName || from || '메시지');
}

export function normalizePhoneMessages(item) {
  const messages = Array.isArray(item?.messages) && item.messages.length > 0
    ? item.messages
    : [{ from: item?.from || 'hyeongyeom', text: item?.text || '', read: true }];

  return messages
    .map((message, index) => {
      const from = safeText(message.from || message.sender || 'hyeongyeom');
      const isMe = from === 'hakbeom' || from === 'me';
      return {
        id: safeText(message.id || `${item?.id || 'phone'}-${index}`),
        from,
        side: isMe ? 'me' : 'other',
        name: safeText(message.name || resolvePhoneSenderName(from, isMe ? '학범' : item?.name || '현겸')),
        text: safeText(message.text),
        read: message.read !== false,
        pending: Boolean(message.pending || message.typing)
      };
    })
    .filter((message) => message.text || message.pending);
}

export function normalizePhoneReplies(item) {
  const replies = Array.isArray(item?.replies) ? item.replies.slice(0, MAX_PHONE_REPLIES) : [];
  return replies.map((reply, index) => ({
    index,
    text: safeText(reply),
    targetId: safeText(item?.next?.[index] || item?.choiceNext?.[index] || '')
  }));
}
