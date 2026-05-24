export const mapLocations = [
  { id: 'school-gate', label: '교문', routeId: 'hyeongyeom', region: { x: 10, y: 72, w: 16, h: 12 } },
  { id: 'library', label: '도서관', routeId: 'ukhyun', region: { x: 66, y: 18, w: 18, h: 12 } },
  { id: 'broadcast-room', label: '방송실', routeId: 'jaeseong', region: { x: 42, y: 28, w: 16, h: 12 } },
  { id: 'student-council-room', label: '학생회실', routeId: 'sangwon', region: { x: 18, y: 30, w: 18, h: 12 } },
  { id: 'gym', label: '체육관', routeId: 'sanguk', region: { x: 66, y: 62, w: 18, h: 12 } },
  { id: 'route-board', label: '동선 게시판', routeId: 'junhyeok', region: { x: 40, y: 52, w: 20, h: 12 } },
  { id: 'cafeteria', label: '매점', routeId: 'dohun', region: { x: 16, y: 58, w: 16, h: 12 } },
  { id: 'music-room', label: '음악실', routeId: 'haeum', region: { x: 68, y: 38, w: 16, h: 12 } },
  { id: 'rooftop', label: '옥상', routeId: 'yunho', region: { x: 42, y: 10, w: 16, h: 12 } }
];

export const mapChoiceLabels = mapLocations.map((location) => location.label);
export const mapChoiceLocationIds = mapLocations.map((location) => location.id);
