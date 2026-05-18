export const DIALOGUE_WRAP_CHARS = 48;
export const DIALOGUE_WRAP_WIDTH = 760;
export const DIALOGUE_MAX_LINES = 3;

export function safeText(value) {
  return value == null ? '' : String(value);
}

export function measureDialogueText(text) {
  return [...safeText(text)].reduce((width, char) => {
    if (/[a-z0-9]/i.test(char)) return width + 10.4;
    if (/\s/.test(char)) return width + 6.5;
    if (/[,.'"!?()[\]{}:;~`]/.test(char)) return width + 6.8;
    return width + 20.2;
  }, 0);
}

export function wrapDialogueText(text, options = {}) {
  const limit = options.maxChars ?? DIALOGUE_WRAP_CHARS;
  const maxWidth = options.maxWidth ?? DIALOGUE_WRAP_WIDTH;
  const maxLines = options.maxLines ?? DIALOGUE_MAX_LINES;
  const normalized = safeText(text).replace(/\s+/g, ' ').trim();
  const lines = [];
  let currentLine = '';

  const flushLine = () => {
    if (!currentLine) return;
    lines.push(currentLine);
    currentLine = '';
  };

  const pushToken = (token) => {
    if (!token) return;
    if (token.length > limit) {
      flushLine();
      for (let offset = 0; offset < token.length; offset += limit) {
        lines.push(token.slice(offset, offset + limit));
      }
      return;
    }

    const candidate = currentLine ? `${currentLine} ${token}` : token;
    if (candidate.length > limit || measureDialogueText(candidate) > maxWidth) {
      flushLine();
      currentLine = token;
      return;
    }
    currentLine = candidate;
  };

  normalized.split(' ').forEach(pushToken);
  flushLine();

  if (lines.length > maxLines) {
    const visibleLines = lines.slice(0, maxLines);
    visibleLines[maxLines - 1] = `${visibleLines[maxLines - 1].replace(/[.…]+$/u, '')}…`;
    return visibleLines;
  }

  return lines.slice(0, maxLines);
}

export function getVisibleDialogueLines(text, visibleCount = safeText(text).length, options = {}) {
  const lines = wrapDialogueText(text, options);
  let remaining = visibleCount;

  return lines.map((line) => {
    const visibleLine = line.slice(0, Math.min(line.length, Math.max(0, remaining)));
    remaining -= line.length + 1;
    return visibleLine;
  });
}
