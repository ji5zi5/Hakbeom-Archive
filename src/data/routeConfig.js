export const routeConfig = {
  affectionTarget: {
    id: 'hyeongyeom',
    name: '현겸',
    max: 10
  },
  affectionTargets: [
    { id: 'hyeongyeom', name: '현겸', max: 10 },
    { id: 'ukhyun', name: '욱현', max: 10 },
    { id: 'jaeseong', name: '재성', max: 10 }
  ],
  affectionLabels: [
    { min: 0, label: '어색한 동급생' },
    { min: 3, label: '신경 쓰이는 사이' },
    { min: 6, label: '같은 우산의 약속' }
  ],
  chapterItems: [
    { id: 'day-1', title: 'Day 1: 비 오는 방과 후', thumbnail: '/assets/bg/school-rain-hallway.svg' },
    { id: 'day-2', title: 'Day 2: 우산을 돌려주는 아침', thumbnail: '/assets/bg/school-morning-hallway.svg' },
    { id: 'day-3', title: 'Day 3: 마른 우산의 약속', thumbnail: '/assets/bg/library-window.svg' }
  ],
  galleryItems: [
    {
      id: 'cg-umbrella',
      title: '같은 우산 아래',
      unlockFlag: 'shared_umbrella',
      src: '/assets/bg/school-gate-rain.svg'
    },
    {
      id: 'cg-message',
      title: '밤의 메시지',
      unlockFlag: 'warm_reply',
      src: '/assets/bg/school-rain-hallway.svg'
    },
    {
      id: 'cg-promise',
      title: '내일의 약속',
      unlockFlag: 'promise_hand',
      src: '/assets/bg/school-gate-rain.svg'
    },
    {
      id: 'cg-ukhyun-note',
      title: '욱현의 접힌 노트',
      unlockFlag: 'ukhyun_route',
      src: '/assets/bg/library-window.svg'
    },
    {
      id: 'cg-jaeseong-call',
      title: '재성의 호출',
      unlockFlag: 'jaeseong_route',
      src: '/assets/bg/broadcast-room.svg'
    }
  ],
  recollectionItems: [
    {
      id: 'rec-day1',
      title: '비 오는 방과 후',
      startId: 'opening'
    },
    {
      id: 'rec-message',
      title: '잠들기 전 메시지',
      startId: 'phone-vibration'
    },
    {
      id: 'rec-day3',
      title: '마른 우산의 약속',
      startId: 'day3-chapter-card'
    },
    {
      id: 'rec-ukhyun',
      title: '접힌 노트의 약속',
      startId: 'ukhyun-route-start',
      unlockFlag: 'ukhyun_route'
    },
    {
      id: 'rec-jaeseong',
      title: '방송실 호출',
      startId: 'jaeseong-route-start',
      unlockFlag: 'jaeseong_route'
    },
    {
      id: 'rec-ending',
      title: '같은 우산의 약속',
      startId: 'ending-promise'
    }
  ]
};
