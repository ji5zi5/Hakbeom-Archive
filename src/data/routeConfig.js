export const routeConfig = {
  affectionTarget: {
    id: 'hyeongyeom',
    name: '현겸',
    max: 10
  },
  affectionLabels: [
    { min: 0, label: '어색한 동급생' },
    { min: 3, label: '신경 쓰이는 사이' },
    { min: 6, label: '같은 우산의 약속' }
  ],
  galleryItems: [
    {
      id: 'cg-umbrella',
      title: '같은 우산 아래',
      unlockFlag: 'shared_umbrella',
      src: '/assets/ui/image0_13_6.jpg'
    },
    {
      id: 'cg-message',
      title: '밤의 메시지',
      unlockFlag: 'warm_reply',
      src: '/assets/ui/image0_13_6.jpg'
    },
    {
      id: 'cg-promise',
      title: '내일의 약속',
      unlockFlag: 'promise_hand',
      src: '/assets/ui/image0_13_6.jpg'
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
      id: 'rec-ending',
      title: '같은 우산의 약속',
      startId: 'ending-promise'
    }
  ]
};
