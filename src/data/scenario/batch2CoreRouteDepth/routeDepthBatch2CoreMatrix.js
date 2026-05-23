export const ROUTE_DEPTH_BATCH2_ID = 'route-depth-2026-05-batch2';
export const ROUTE_DEPTH_BATCH2_CORE_MODULE = 'batch2RouteDepth';

export const routeDepthBatch2CoreRouteIds = ['hyeongyeom', 'ukhyun', 'jaeseong'];

const backgroundIdsByRoute = {
  hyeongyeom: [
    'day11-hyeongyeom-morning',
    'day13-hyeongyeom-truth',
    'day8-hyeongyeom-festival',
    'day9-hyeongyeom-rumor',
    'day11-hyeongyeom-morning',
    'day13-hyeongyeom-truth',
    'day9-hyeongyeom-rumor',
    'day11-hyeongyeom-morning'
  ],
  ukhyun: [
    'day11-ukhyun-morning',
    'day13-ukhyun-truth',
    'day8-ukhyun-festival',
    'day9-ukhyun-rumor',
    'day11-ukhyun-morning',
    'day13-ukhyun-truth',
    'day9-ukhyun-rumor',
    'day11-ukhyun-morning'
  ],
  jaeseong: [
    'day11-jaeseong-morning',
    'day13-jaeseong-truth',
    'day8-jaeseong-festival',
    'day9-jaeseong-rumor',
    'day11-jaeseong-morning',
    'day13-jaeseong-truth',
    'day9-jaeseong-rumor',
    'day11-jaeseong-morning'
  ]
};

const stageByIndex = ['beginning', 'support', 'escalation', 'support', 'escalation', 'support', 'payoff', 'payoff'];

export const routeDepthBatch2CoreRoutes = routeDepthBatch2CoreRouteIds.map((routeId) => {
  const sceneIds = Array.from({ length: 8 }, (_, index) => `batch2-${routeId}-${String(index + 1).padStart(2, '0')}`);
  return {
    id: routeId,
    arcId: `${routeId}-batch2-afterglow-mini-arc`,
    entrySceneId: sceneIds[0],
    exitSceneId: sceneIds[sceneIds.length - 1],
    previousSceneId: `batch1-${routeId}-08`,
    returnSceneId: 'day14-merge',
    sceneIds,
    backgroundIds: backgroundIdsByRoute[routeId]
  };
});

export const routeDepthBatch2CoreSceneMetadata = routeDepthBatch2CoreRoutes.flatMap((route) => (
  route.sceneIds.map((sceneId, index) => ({
    sceneId,
    routeId: route.id,
    expansionBatch: ROUTE_DEPTH_BATCH2_ID,
    arcId: route.arcId,
    arcStage: stageByIndex[index]
  }))
));

export const routeDepthBatch2CoreBackgroundBindings = routeDepthBatch2CoreRoutes.flatMap((route) => (
  route.sceneIds.map((sceneId, index) => ({
    sceneId,
    routeId: route.id,
    backgroundId: route.backgroundIds[index]
  }))
));
