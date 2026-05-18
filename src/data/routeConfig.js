export const routeConfig = {
  affectionTarget: {
    id: 'hyeongyeom',
    name: '현겸',
    max: 10
  },
  affectionTargets: [
    { id: 'hyeongyeom', name: '현겸', max: 10 },
    { id: 'ukhyun', name: '욱현', max: 10 },
    { id: 'jaeseong', name: '재성', max: 10 },
    { id: 'sangwon', name: '상원', max: 10 },
    { id: 'sanguk', name: '상욱', max: 10 },
    { id: 'junhyeok', name: '준혁', max: 10 },
    { id: 'dohun', name: '도훈', max: 10 },
    { id: 'haeum', name: '하음', max: 10 },
    { id: 'yunho', name: '윤호', max: 10 }
  ],
  routePriority: ['hyeongyeom', 'sangwon', 'haeum', 'yunho', 'ukhyun', 'jaeseong', 'junhyeok', 'sanguk', 'dohun'],
  routeLockThreshold: 6,
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
    { min: 3, label: '신경 쓰이는 사이' },
    { min: 6, label: '같은 우산의 약속' }
  ],
  chapterItems: [
    { id: 'day-1', title: 'Day 1: 비 오는 방과 후', thumbnail: '/assets/bg/school-rain-hallway.png' },
    { id: 'day-2', title: 'Day 2: 우산을 돌려주는 아침', thumbnail: '/assets/bg/school-morning-hallway.png' },
    { id: 'day-3', title: 'Day 3: 마른 우산의 약속', thumbnail: '/assets/bg/library-window.png' },
    { id: 'day-4', title: 'Day 4: 아카이브실의 새 이름들', thumbnail: '/assets/bg/archive-club-room-evening.png' },
    { id: 'day-5', title: 'Day 5: 여섯 갈래의 방과 후', thumbnail: '/assets/bg/music-room-late-afternoon.png' },
    { id: 'day-6', title: 'Day 6: 기록되지 않은 하루', thumbnail: '/assets/bg/archive-club-room-evening.png' },
    { id: 'day-7', title: 'Day 7: 첫 번째 약속 충돌', thumbnail: '/assets/bg/school-courtyard-blue-hour.png' },
    { id: 'day-8', title: 'Day 8: 비밀 기록 조사', thumbnail: '/assets/bg/library-window.png' },
    { id: 'day-9', title: 'Day 9: 축제 준비의 소문', thumbnail: '/assets/bg/broadcast-room.png' },
    { id: 'day-10', title: 'Day 10: 중간 고백 전야', thumbnail: '/assets/bg/rooftop-after-rain.png' },
    { id: 'day-11', title: 'Day 11: 선택한 이름의 아침', thumbnail: '/assets/bg/school-morning-hallway.png' },
    { id: 'day-12', title: 'Day 12: 축제 리허설의 고백 연습', thumbnail: '/assets/bg/school-courtyard-blue-hour.png' },
    { id: 'day-13', title: 'Day 13: 잃어버린 원본과 마지막 불안', thumbnail: '/assets/bg/archive-club-room-evening.png' },
    { id: 'day-14', title: 'Day 14: 학범 아카이브 개방일', thumbnail: '/assets/bg/school-gate-rain.png' }
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
      title: '아카이브실의 새 이름들',
      chapter: 'day-4',
      routeId: 'common',
      hint: '아카이브실 조사를 시작하면 해금',
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
      hint: '도훈과 매점 CCTV를 확인하면 해금',
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
      title: '비 오는 방과 후',
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
      id: 'rec-day3',
      title: '마른 우산의 약속',
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
      title: '아카이브실의 새 이름들',
      chapter: 'day-4',
      routeId: 'common',
      startId: 'day4-chapter-card',
      unlockFlag: 'archive_room_opened'
    },
    {
      id: 'rec-day5',
      title: '여섯 갈래의 방과 후',
      chapter: 'day-5',
      routeId: 'common',
      startId: 'day5-chapter-card',
      unlockFlag: 'archive_room_opened'
    },
    {
      id: 'rec-day6',
      title: '기록되지 않은 하루',
      chapter: 'day-6',
      routeId: 'common',
      startId: 'day6-chapter-card',
      unlockFlag: 'archive_room_opened'
    },
    {
      id: 'rec-day7',
      title: '첫 번째 약속 충돌',
      chapter: 'day-7',
      routeId: 'common',
      startId: 'day7-chapter-card',
      unlockFlag: 'archive_room_opened'
    },
    {
      id: 'rec-day8',
      title: '비밀 기록 조사',
      chapter: 'day-8',
      routeId: 'common',
      startId: 'day8-chapter-card',
      unlockFlag: 'archive_room_opened'
    },
    {
      id: 'rec-day9',
      title: '축제 준비의 소문',
      chapter: 'day-9',
      routeId: 'common',
      startId: 'day9-chapter-card',
      unlockFlag: 'archive_room_opened'
    },
    {
      id: 'rec-day10',
      title: '중간 고백 전야',
      chapter: 'day-10',
      routeId: 'common',
      startId: 'day10-chapter-card',
      unlockFlag: 'archive_room_opened'
    },
    {
      id: 'rec-day11',
      title: '선택한 이름의 아침',
      chapter: 'day-11',
      routeId: 'common',
      startId: 'day11-chapter-card',
      unlockFlag: 'archive_room_opened'
    },
    {
      id: 'rec-day12',
      title: '축제 리허설의 고백 연습',
      chapter: 'day-12',
      routeId: 'common',
      startId: 'day12-chapter-card',
      unlockFlag: 'archive_room_opened'
    },
    {
      id: 'rec-day13',
      title: '잃어버린 원본과 마지막 불안',
      chapter: 'day-13',
      routeId: 'common',
      startId: 'day13-chapter-card',
      unlockFlag: 'archive_room_opened'
    },
    {
      id: 'rec-day14',
      title: '학범 아카이브 개방일',
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
