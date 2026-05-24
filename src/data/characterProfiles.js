export const characterProfiles = {
  hyeongyeom: {
    id: 'hyeongyeom',
    name: '현겸',
    archetype: '정실 순애',
    motif: '비, 우산, 조용한 진심',
    voice: '담백하고 조심스럽게 가까워지며 우산·소매·돌아갈 자리로 조용한 독점욕을 드러내는 말투',
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
    voice: '짧게 말하고 무심하지만 관찰이 날카로워 학범의 습관을 너무 정확히 기억하는 말투',
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
    voice: '능글맞은 농담으로 놀리다가 꺼진 마이크 앞에서는 목소리를 낮춰 직진하는 말투',
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
    voice: '차분하고 정확하지만 학범의 선택을 기록하고 싶어 허락과 통제 사이에서 흔들리는 말투',
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
    voice: '솔직하게 뛰어드는 마음을 보이다가도 학범의 보폭과 숨을 기다리는 말투',
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
    voice: '건조한 논리와 확률 농담으로 숨다가 계산이 틀릴 때 진심이 드러나는 말투',
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
    voice: '장난과 정보통의 정보값 핑계로 덮지만 필요한 순간 먼저 챙기는 츤데레 말투',
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
    voice: '부드럽게 기다리되 박자·숨·손끝 같은 구체 감각으로 가까워지는 말투',
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
    voice: '학범을 반드시 “선배”라고 부르며 예의와 기다림 뒤에 조용한 질투를 숨기지 못하는 말투',
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
