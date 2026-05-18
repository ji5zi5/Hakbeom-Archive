export const routeConfig = {
  affectionTarget: {
    id: 'hyeongyeom',
    name: '현겸',
    max: 100
  },
  affectionTargets: [
    { id: 'hyeongyeom', name: '현겸', max: 100 },
    { id: 'ukhyun', name: '욱현', max: 100 },
    { id: 'jaeseong', name: '재성', max: 100 },
    { id: 'sangwon', name: '상원', max: 100 },
    { id: 'sanguk', name: '상욱', max: 100 },
    { id: 'junhyeok', name: '준혁', max: 100 },
    { id: 'dohun', name: '도훈', max: 100 },
    { id: 'haeum', name: '하음', max: 100 },
    { id: 'yunho', name: '윤호', max: 100 }
  ],
  routePriority: ['hyeongyeom', 'sangwon', 'haeum', 'yunho', 'ukhyun', 'jaeseong', 'junhyeok', 'sanguk', 'dohun'],
  routeLockThreshold: 70,
  routeSeedFlags: {
    hyeongyeom: ['hyeongyeom_route_focus', 'shared_umbrella'],
    ukhyun: ['ukhyun_route'],
    jaeseong: ['jaeseong_route'],
    sangwon: ['sangwon_route_seed'],
    sanguk: ['sanguk_route_seed'],
    junhyeok: ['junhyeok_route_seed'],
    dohun: ['dohun_route_seed'],
    haeum: ['haeum_route_seed'],
    yunho: ['yunho_route_seed']
  },
  affectionLabels: [
    { min: 0, label: '어색한 동급생' },
    { min: 20, label: '신경 쓰이는 사이' },
    { min: 40, label: '가까워지는 거리' },
    { min: 60, label: '같은 우산의 약속' },
    { min: 85, label: '고백 직전의 온도' }
  ],
  chapterItems: [
    { id: 'day-1', title: 'Day 1: 비 오는 새 학기', thumbnail: '/assets/bg/school-rain-hallway.png' },
    { id: 'day-2', title: 'Day 2: 문화제 기록 담당', thumbnail: '/assets/bg/school-morning-hallway.png' },
    { id: 'day-3', title: 'Day 3: 점심시간 선택', thumbnail: '/assets/bg/library-window.png' },
    { id: 'day-4', title: 'Day 4: 문화제 기록 담당', thumbnail: '/assets/bg/archive-club-room-evening.png' },
    { id: 'day-5', title: 'Day 5: 작은 소문', thumbnail: '/assets/bg/music-room-late-afternoon.png' },
    { id: 'day-6', title: 'Day 6: 시험 공부', thumbnail: '/assets/bg/archive-club-room-evening.png' },
    { id: 'day-7', title: 'Day 7: 비 오는 귀갓길', thumbnail: '/assets/bg/school-courtyard-blue-hour.png' },
    { id: 'day-8', title: 'Day 8: 문화제 조 편성', thumbnail: '/assets/bg/library-window.png' },
    { id: 'day-9', title: 'Day 9: 첫 번째 오해', thumbnail: '/assets/bg/broadcast-room.png' },
    { id: 'day-10', title: 'Day 10: 한 사람을 기다리는 방과 후', thumbnail: '/assets/bg/rooftop-after-rain.png' },
    { id: 'day-11', title: 'Day 11: 선택한 사람의 아침', thumbnail: '/assets/bg/school-morning-hallway.png' },
    { id: 'day-12', title: 'Day 12: 문화제 리허설', thumbnail: '/assets/bg/school-courtyard-blue-hour.png' },
    { id: 'day-13', title: 'Day 13: 고백 전날의 망설임', thumbnail: '/assets/bg/archive-club-room-evening.png' },
    { id: 'day-14', title: 'Day 14: 봄날의 문화제', thumbnail: '/assets/bg/school-gate-rain.png' }
  ],
  galleryItems: [
    {
      id: 'cg-umbrella',
      title: '같은 우산 아래',
      chapter: 'day-1',
      routeId: 'hyeongyeom',
      hint: '현겸과 우산 선택을 기록하면 해금',
      unlockFlag: 'shared_umbrella',
      src: '/assets/bg/school-gate-rain.png'
    },
    {
      id: 'cg-message',
      title: '밤의 메시지',
      chapter: 'day-2',
      routeId: 'hyeongyeom',
      hint: '따뜻한 답장을 남기면 해금',
      unlockFlag: 'warm_reply',
      src: '/assets/bg/school-rain-hallway.png'
    },
    {
      id: 'cg-day2-hyeongyeom-promise',
      title: '방과 후의 약속',
      chapter: 'day-2',
      routeId: 'hyeongyeom',
      hint: 'Day 2 현겸과 방과 후 약속을 만든다.',
      unlockFlag: 'hyeongyeom_day2_promise_memory',
      src: '/assets/bg/school-courtyard-blue-hour.png'
    },
    {
      id: 'cg-promise',
      title: '내일의 약속',
      chapter: 'day-3',
      routeId: 'hyeongyeom',
      hint: '약속을 손으로 확인하면 해금',
      unlockFlag: 'promise_hand',
      src: '/assets/bg/school-gate-rain.png'
    },
    {
      id: 'cg-ukhyun-note',
      title: '욱현의 접힌 노트',
      chapter: 'day-3',
      routeId: 'ukhyun',
      hint: '욱현의 노트를 따라가면 해금',
      unlockFlag: 'ukhyun_route',
      src: '/assets/bg/library-window.png'
    },
    {
      id: 'cg-jaeseong-call',
      title: '재성의 호출',
      chapter: 'day-3',
      routeId: 'jaeseong',
      hint: '재성의 호출에 답하면 해금',
      unlockFlag: 'jaeseong_route',
      src: '/assets/bg/broadcast-room.png'
    },
    {
      id: 'cg-archive-room',
      title: '문화제 기록 담당',
      chapter: 'day-4',
      routeId: 'common',
      hint: '학생회 기록실 준비를 시작하면 해금',
      unlockFlag: 'archive_room_opened',
      src: '/assets/bg/archive-club-room-evening.png'
    },
    {
      id: 'cg-music-room',
      title: '해질녘 음악실',
      chapter: 'day-5',
      routeId: 'haeum',
      hint: '하음의 음악실 기록을 확인하면 해금',
      unlockFlag: 'day5_music_room_echo',
      src: '/assets/bg/music-room-late-afternoon.png'
    },
    {
      id: 'cg-convenience-store',
      title: '밤의 편의점',
      chapter: 'day-5',
      routeId: 'dohun',
      hint: '도훈과 매점 쿠폰을 확인하면 해금',
      unlockFlag: 'day5_cctv_check',
      src: '/assets/bg/convenience-store-night.png'
    },
    {
      id: 'cg-rooftop-after-rain',
      title: '비 갠 옥상',
      chapter: 'day-5',
      routeId: 'yunho',
      hint: '윤호의 옥상 종이를 받으면 해금',
      unlockFlag: 'day5_rooftop_paper',
      src: '/assets/bg/rooftop-after-rain.png'
    }
  ],
  recollectionItems: [
    {
      id: 'rec-day1',
      title: '비 오는 새 학기',
      chapter: 'day-1',
      routeId: 'hyeongyeom',
      startId: 'opening'
    },
    {
      id: 'rec-message',
      title: '잠들기 전 메시지',
      chapter: 'day-2',
      routeId: 'hyeongyeom',
      startId: 'phone-vibration'
    },
    {
      id: 'recall-day2-hyeongyeom-promise',
      title: '방과 후의 약속',
      chapter: 'day-2',
      routeId: 'hyeongyeom',
      hint: '현겸과의 Day 2 약속 기억',
      unlockFlag: 'hyeongyeom_day2_promise_memory',
      startId: 'day2-promise-memory-hyeongyeom'
    },
    {
      id: 'rec-day3',
      title: '점심시간 선택',
      chapter: 'day-3',
      routeId: 'hyeongyeom',
      startId: 'day3-chapter-card'
    },
    {
      id: 'rec-ukhyun',
      title: '접힌 노트의 약속',
      chapter: 'day-3',
      routeId: 'ukhyun',
      hint: '욱현 루트 기록 필요',
      startId: 'ukhyun-route-start',
      unlockFlag: 'ukhyun_route'
    },
    {
      id: 'rec-jaeseong',
      title: '방송실 호출',
      chapter: 'day-3',
      routeId: 'jaeseong',
      hint: '재성 루트 기록 필요',
      startId: 'jaeseong-route-start',
      unlockFlag: 'jaeseong_route'
    },
    {
      id: 'rec-day4',
      title: '문화제 기록 담당',
      chapter: 'day-4',
      routeId: 'common',
      startId: 'day4-chapter-card',
      unlockFlag: 'archive_room_opened'
    },
    {
      id: 'rec-day5',
      title: '작은 소문',
      chapter: 'day-5',
      routeId: 'common',
      startId: 'day5-chapter-card',
      unlockFlag: 'archive_room_opened'
    },
    {
      id: 'rec-day6',
      title: '시험 공부',
      chapter: 'day-6',
      routeId: 'common',
      startId: 'day6-chapter-card',
      unlockFlag: 'archive_room_opened'
    },
    {
      id: 'rec-day7',
      title: '비 오는 귀갓길',
      chapter: 'day-7',
      routeId: 'common',
      startId: 'day7-chapter-card',
      unlockFlag: 'archive_room_opened'
    },
    {
      id: 'rec-day8',
      title: '문화제 조 편성',
      chapter: 'day-8',
      routeId: 'common',
      startId: 'day8-chapter-card',
      unlockFlag: 'archive_room_opened'
    },
    {
      id: 'rec-day9',
      title: '첫 번째 오해',
      chapter: 'day-9',
      routeId: 'common',
      startId: 'day9-chapter-card',
      unlockFlag: 'archive_room_opened'
    },
    {
      id: 'rec-day10',
      title: '한 사람을 기다리는 방과 후',
      chapter: 'day-10',
      routeId: 'common',
      startId: 'day10-chapter-card',
      unlockFlag: 'archive_room_opened'
    },
    {
      id: 'rec-day11',
      title: '선택한 사람의 아침',
      chapter: 'day-11',
      routeId: 'common',
      startId: 'day11-chapter-card',
      unlockFlag: 'archive_room_opened'
    },
    {
      id: 'rec-day12',
      title: '문화제 리허설',
      chapter: 'day-12',
      routeId: 'common',
      startId: 'day12-chapter-card',
      unlockFlag: 'archive_room_opened'
    },
    {
      id: 'rec-day13',
      title: '고백 전날의 망설임',
      chapter: 'day-13',
      routeId: 'common',
      startId: 'day13-chapter-card',
      unlockFlag: 'archive_room_opened'
    },
    {
      id: 'rec-day14',
      title: '봄날의 문화제',
      chapter: 'day-14',
      routeId: 'common',
      startId: 'day14-chapter-card',
      unlockFlag: 'archive_room_opened'
    },
    {
      id: 'rec-ending',
      title: '같은 우산의 약속',
      chapter: 'day-3',
      routeId: 'hyeongyeom',
      startId: 'ending-promise'
    }
  ]
};
