export const characterProfiles = {
  hyeongyeom: {
    id: 'hyeongyeom',
    name: '현겸',
    baseSrc: '/assets/character/hyungyeom.png',
    expressions: {
      normal: '/assets/character/hyungyeom.png',
      smile: '/assets/character/hyungyeom.png',
      blush: '/assets/character/hyungyeom.png',
      wet: '/assets/character/hyungyeom.png',
      surprised: '/assets/character/hyungyeom.png',
      quiet: '/assets/character/hyungyeom.png'
    }
  }
};

export function resolveCharacterAsset(character) {
  const profile = characterProfiles[character?.id];
  const expression = character?.expression || 'normal';
  return profile?.expressions?.[expression] || profile?.baseSrc || character?.src || '';
}
