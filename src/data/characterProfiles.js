export const characterProfiles = {
  hyeongyeom: {
    id: 'hyeongyeom',
    name: '현겸',
    archetype: '정실 순애',
    motif: '비, 우산, 조용한 진심',
    voice: '담백하고 조심스럽게 가까워지는 말투',
    baseSrc: '/assets/character/hyungyeom.png',
    expressions: {
      normal: '/assets/character/hyungyeom.png',
      smile: '/assets/character/hyungyeom.png',
      blush: '/assets/character/hyungyeom.png',
      wet: '/assets/character/hyungyeom.png',
      surprised: '/assets/character/hyungyeom.png',
      quiet: '/assets/character/hyungyeom.png'
    }
  },
  ukhyun: {
    id: 'ukhyun',
    name: '욱현',
    archetype: '무표정 쿨데레',
    motif: '도서관, 접힌 노트, 늦은 답장',
    voice: '짧게 말하지만 관찰이 날카로운 말투',
    baseSrc: '',
    expressions: {
      normal: '',
      smile: '',
      blush: '',
      serious: '',
      quiet: ''
    }
  },
  jaeseong: {
    id: 'jaeseong',
    name: '재성',
    archetype: '능글 플러팅',
    motif: '방송실, 호출음, 목소리 신호',
    voice: '여유롭게 농담하지만 결정적인 순간에는 직진하는 말투',
    baseSrc: '',
    expressions: {
      normal: '',
      smile: '',
      blush: '',
      confident: '',
      quiet: ''
    }
  },
  sangwon: {
    id: 'sangwon',
    name: '상원',
    archetype: '기록집착 얀데레',
    motif: '학생회 기록, 출입 명단, 선택의 증거',
    voice: '차분하고 정확하지만 학범의 선택을 전부 기록하려는 통제형 말투',
    baseSrc: '',
    expressions: {
      normal: '',
      smile: '',
      serious: '',
      blush: '',
      quiet: ''
    }
  },
  sanguk: {
    id: 'sanguk',
    name: '상욱',
    archetype: '직진 댕댕이',
    motif: '체육관, 실밥, 달리기',
    voice: '솔직하고 따뜻하게 바로 뛰어드는 말투',
    baseSrc: '',
    expressions: {
      normal: '',
      smile: '',
      serious: '',
      blush: '',
      energetic: ''
    }
  },
  junhyeok: {
    id: 'junhyeok',
    name: '준혁',
    archetype: '무심한 두뇌파',
    motif: '지도, 빈칸, 조사 동선',
    voice: '건조한 논리와 드문 농담으로 감정을 드러내는 말투',
    baseSrc: '',
    expressions: {
      normal: '',
      smile: '',
      serious: '',
      thinking: '',
      quiet: ''
    }
  },
  dohun: {
    id: 'dohun',
    name: '도훈',
    archetype: '장난치는 츤데레',
    motif: '편의점, CCTV, 영수증 시간',
    voice: '장난으로 덮지만 핵심은 놓치지 않는 정보통 말투',
    baseSrc: '',
    expressions: {
      normal: '',
      smile: '',
      tease: '',
      serious: '',
      quiet: ''
    }
  },
  haeum: {
    id: 'haeum',
    name: '하음',
    archetype: '치유계',
    motif: '음악실, 박자, 문소리',
    voice: '부드럽게 기다려 주고 감정을 박자로 받아내는 말투',
    baseSrc: '',
    expressions: {
      normal: '',
      smile: '',
      gentle: '',
      blush: '',
      quiet: ''
    }
  },
  yunho: {
    id: 'yunho',
    name: '윤호',
    archetype: '후배 선배집착',
    motif: '옥상, 마른 종이, 선배를 기다리는 자리',
    voice: '학범을 “선배”라고 부르며 예의 바르지만 조용한 질투를 숨기지 못하는 말투',
    baseSrc: '',
    expressions: {
      normal: '',
      smile: '',
      serious: '',
      blush: '',
      quiet: ''
    }
  }
};

export function resolveCharacterAsset(character) {
  const profile = characterProfiles[character?.id];
  const expression = character?.expression || 'normal';
  return profile?.expressions?.[expression] || profile?.baseSrc || character?.src || '';
}
