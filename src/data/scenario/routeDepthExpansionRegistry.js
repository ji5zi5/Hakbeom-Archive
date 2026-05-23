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
import {
  ROUTE_DATE_AFFECTION_BUDGETS,
  ROUTE_DATE_BATCH3_ID,
  routeDateBatch3BackgroundBindings,
  routeDateBatch3Routes as aggregatedRouteDateBatch3Routes,
  routeDateBatch3Scenes as aggregatedRouteDateBatch3Scenes
} from './batch3RouteDates/index.js';

export {
  ROUTE_DATE_AFFECTION_BUDGETS,
  ROUTE_DATE_BATCH3_ID,
  ROUTE_DEPTH_BATCH2_ID,
  routeDateBatch3BackgroundBindings
};

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

function normalizeRouteDate(route) {
  const id = route.id || route.routeId;
  return {
    ...route,
    id,
    routeId: route.routeId || id,
    name: route.name,
    day: route.day,
    arcId: route.arcId,
    sceneIds: route.sceneIds,
    backgroundIds: route.backgroundIds,
    entrySceneId: route.entrySceneId || route.sceneIds?.[0],
    exitSceneId: route.exitSceneId || route.sceneIds?.[route.sceneIds.length - 1],
    previousSceneId: route.previousSceneId,
    returnSceneId: route.returnSceneId,
    expansionBatch: route.expansionBatch || ROUTE_DATE_BATCH3_ID,
    memoryFlags: route.memoryFlags || [],
    phoneFlags: route.phoneFlags || [],
    payoffOnlyFlags: route.payoffOnlyFlags || [],
    affectionBudget: route.affectionBudget || ROUTE_DATE_AFFECTION_BUDGETS[id]
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

export const routeDateBatch3Routes = aggregatedRouteDateBatch3Routes.map(normalizeRouteDate);

export const routeDateBatch3Scenes = [
  ...aggregatedRouteDateBatch3Scenes
];

const batch2EntrySceneByPreviousScene = new Map(
  routeDepthBatch2Routes.map((route) => [route.previousSceneId, route.entrySceneId])
);

const routeDateEntrySceneByPreviousScene = new Map(
  routeDateBatch3Routes.map((route) => [route.previousSceneId, route.entrySceneId])
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

export function integrateBatch3RouteDates(items) {
  const integratedItems = items.map((item) => {
    const entrySceneId = routeDateEntrySceneByPreviousScene.get(item.id);
    if (!entrySceneId) return item;
    return {
      ...item,
      nextId: entrySceneId
    };
  });
  return [...integratedItems, ...routeDateBatch3Scenes];
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
  },
  {
    id: ROUTE_DATE_BATCH3_ID,
    module: 'batch3RouteDates',
    sceneCount: routeDateBatch3Scenes.length,
    integrate: integrateBatch3RouteDates
  }
];

export function integrateRouteDepthExpansions(items) {
  return routeDepthExpansionBatches.reduce(
    (currentItems, batch) => batch.integrate(currentItems),
    items
  );
}
