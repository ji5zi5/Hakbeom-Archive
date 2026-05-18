import { safeText } from '../utils/vnText.js';

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
        name: safeText(message.name || (isMe ? '학범' : item?.name || '현겸')),
        text: safeText(message.text),
        read: message.read !== false,
        pending: Boolean(message.pending || message.typing)
      };
    })
    .filter((message) => message.text || message.pending);
}

export function normalizePhoneReplies(item) {
  const replies = Array.isArray(item?.replies) ? item.replies : [];
  return replies.map((reply, index) => ({
    index,
    text: safeText(reply),
    targetId: safeText(item?.next?.[index] || item?.choiceNext?.[index] || '')
  }));
}
