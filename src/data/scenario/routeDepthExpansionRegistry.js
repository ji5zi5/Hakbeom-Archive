import {
  integrateBatch1RouteDepth,
  routeDepthBatchScenes
} from './batch1RouteDepth/index.js';
import { ROUTE_DEPTH_BATCH_ID } from './batch1RouteDepth/routeDepthBatchMatrix.js';
import {
  coreRouteDepthBatch2Scenes,
  routeDepthBatch2CoreBackgroundBindings,
  routeDepthBatch2CoreRoutes
} from './batch2CoreRouteDepth/index.js';
import {
  ROUTE_DEPTH_BATCH2_ID,
  clubRouteDepthBatch2BackgroundBindings,
  clubRouteDepthBatch2Matrix,
  clubRouteDepthBatch2Scenes
} from './batch2RouteDepth/clubRoutes.js';
import {
  afterSchoolBatch2RouteDepthMatrix,
  afterSchoolBatch2RouteDepthScenes,
  afterSchoolBatch2SceneBackgroundBindings
} from './batch2RouteDepth/afterSchoolRoutes.js';

export { ROUTE_DEPTH_BATCH2_ID };

function normalizeBatch2Route(route) {
  const id = route.id || route.routeId;
  return {
    id,
    arcId: route.arcId,
    sceneIds: route.sceneIds,
    backgroundIds: route.backgroundIds,
    entrySceneId: route.entrySceneId || route.sceneIds?.[0],
    exitSceneId: route.exitSceneId || route.sceneIds?.[route.sceneIds.length - 1],
    previousSceneId: route.previousSceneId || `batch1-${id}-08`,
    returnSceneId: route.returnSceneId || 'day14-merge'
  };
}

export const routeDepthBatch2Routes = [
  ...routeDepthBatch2CoreRoutes,
  ...clubRouteDepthBatch2Matrix,
  ...afterSchoolBatch2RouteDepthMatrix
].map(normalizeBatch2Route);

export const routeDepthBatch2Scenes = [
  ...coreRouteDepthBatch2Scenes,
  ...clubRouteDepthBatch2Scenes,
  ...afterSchoolBatch2RouteDepthScenes
];

export const routeDepthBatch2BackgroundBindings = [
  ...routeDepthBatch2CoreBackgroundBindings,
  ...clubRouteDepthBatch2BackgroundBindings,
  ...afterSchoolBatch2SceneBackgroundBindings
];

const batch2EntrySceneByPreviousScene = new Map(
  routeDepthBatch2Routes.map((route) => [route.previousSceneId, route.entrySceneId])
);

export function integrateBatch2RouteDepth(items) {
  const integratedItems = items.map((item) => {
    const entrySceneId = batch2EntrySceneByPreviousScene.get(item.id);
    if (!entrySceneId) return item;
    return {
      ...item,
      nextId: entrySceneId
    };
  });
  return [...integratedItems, ...routeDepthBatch2Scenes];
}

export const routeDepthExpansionBatches = [
  {
    id: ROUTE_DEPTH_BATCH_ID,
    module: 'batch1RouteDepth',
    sceneCount: routeDepthBatchScenes.length,
    integrate: integrateBatch1RouteDepth
  },
  {
    id: ROUTE_DEPTH_BATCH2_ID,
    module: 'batch2RouteDepth',
    sceneCount: routeDepthBatch2Scenes.length,
    integrate: integrateBatch2RouteDepth
  }
];

export function integrateRouteDepthExpansions(items) {
  return routeDepthExpansionBatches.reduce(
    (currentItems, batch) => batch.integrate(currentItems),
    items
  );
}
