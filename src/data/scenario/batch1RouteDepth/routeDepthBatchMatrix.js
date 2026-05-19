export const ROUTE_DEPTH_BATCH_ID = 'route-depth-2026-05';

export const routeDepthRouteIds = [
  'hyeongyeom',
  'ukhyun',
  'jaeseong',
  'sangwon',
  'sanguk',
  'junhyeok',
  'dohun',
  'haeum',
  'yunho'
];

export const routeDepthRoutes = routeDepthRouteIds.map((routeId) => ({
  id: routeId,
  arcId: `${routeId}-route-depth-mini-arc`,
  sceneIds: Array.from({ length: 8 }, (_, index) => `batch1-${routeId}-${String(index + 1).padStart(2, '0')}`),
  backgroundIds: [
    `day6-${routeId}-study`,
    `day7-${routeId}-rain`,
    `day8-${routeId}-festival`,
    `day9-${routeId}-rumor`,
    `day11-${routeId}-morning`,
    `day13-${routeId}-truth`
  ]
}));

const stageByIndex = ['beginning', 'support', 'escalation', 'support', 'escalation', 'support', 'payoff', 'payoff'];

export const routeDepthSceneMetadata = routeDepthRoutes.flatMap((route) => (
  route.sceneIds.map((sceneId, index) => ({
    sceneId,
    routeId: route.id,
    expansionBatch: ROUTE_DEPTH_BATCH_ID,
    arcId: route.arcId,
    arcStage: stageByIndex[index]
  }))
));

const backgroundByIndex = [0, 1, 2, 3, 4, 5, 4, 5];

export const routeDepthSceneBackgroundBindings = routeDepthRoutes.flatMap((route) => (
  route.sceneIds.map((sceneId, index) => ({
    sceneId,
    routeId: route.id,
    backgroundId: route.backgroundIds[backgroundByIndex[index]]
  }))
));
