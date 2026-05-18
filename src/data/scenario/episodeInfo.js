export const episodeInfo = {
  title: '학범 아카이브',
  sectionTitle: '프롤로그: 봄비의 새 학기',
  summary: '비가 내리던 방과 후, 학범은 학생회실 앞에서 우산을 잃어버린 현겸과 마주친다. 사소한 농담과 선택이 어색한 공기를 바꾸고, 학범은 같은 우산 아래에서 다음 약속을 정한다.',
  skipToId: 'ending-promise',
  endingRules: [
    {
      id: 'hyeongyeom',
      title: '현겸 엔딩: 같은 우산의 고백',
      flags: ['route_lock_hyeongyeom']
    },
    {
      id: 'ukhyun',
      title: '욱현 엔딩: 접힌 노트의 답장',
      flags: ['route_lock_ukhyun']
    },
    {
      id: 'jaeseong',
      title: '재성 엔딩: 방송실 너머의 목소리',
      flags: ['route_lock_jaeseong']
    },
    {
      id: 'sangwon',
      title: '상원 엔딩: 고쳐 쓴 마지막 줄',
      flags: ['route_lock_sangwon']
    },
    {
      id: 'sanguk',
      title: '상욱 엔딩: 멈춰 선 결승선',
      flags: ['route_lock_sanguk']
    },
    {
      id: 'junhyeok',
      title: '준혁 엔딩: 함께 그린 지도',
      flags: ['route_lock_junhyeok']
    },
    {
      id: 'dohun',
      title: '도훈 엔딩: 농담 뒤의 진심',
      flags: ['route_lock_dohun']
    },
    {
      id: 'haeum',
      title: '하음 엔딩: 기다려 준 박자',
      flags: ['route_lock_haeum']
    },
    {
      id: 'yunho',
      title: '윤호 엔딩: 비가 그친 옥상',
      flags: ['route_lock_yunho']
    },
    {
      id: 'ukhyun',
      title: '욱현 엔딩: 접힌 노트의 답장',
      affection: { ukhyun: 3 },
      flags: ['ukhyun_route']
    },
    {
      id: 'jaeseong',
      title: '재성 엔딩: 방송실 너머의 목소리',
      affection: { jaeseong: 3 },
      flags: ['jaeseong_route']
    },
    {
      id: 'good',
      title: '굿 엔딩: 같은 우산의 약속',
      affection: { hyeongyeom: 6 },
      flags: ['shared_umbrella', 'slow_walk', 'promise_hand']
    },
    {
      id: 'normal',
      title: '노멀 엔딩: 내일도 복도에서',
      affection: { hyeongyeom: 3 },
      flags: ['promise_hand']
    },
    {
      id: 'quiet',
      title: '조용한 엔딩: 비가 그친 뒤',
      default: true
    }
  ]
};
