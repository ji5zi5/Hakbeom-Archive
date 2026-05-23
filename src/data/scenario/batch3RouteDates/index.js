import {
  CORE_ROUTE_DATE_BATCH_ID,
  coreRouteDateMatrix,
  coreRouteDateSceneBackgroundBindings,
  coreRouteDateScenes
} from './coreRoutes.js';
import {
  ROUTE_DATE_BATCH3_ID as CLUB_ROUTE_DATE_BATCH3_ID,
  clubRouteDateBatch3BackgroundBindings,
  clubRouteDateBatch3Matrix,
  clubRouteDateBatch3Scenes
} from './clubRoutes.js';
import {
  ROUTE_DATE_AFFECTION_BUDGETS,
  ROUTE_DATE_BATCH3_ID,
  routeDateBatch3BackgroundBindings as fallbackRouteDateBatch3BackgroundBindings,
  routeDateBatch3Routes as fallbackRouteDateBatch3Routes
} from './routeDateMatrix.js';
import { buildRouteDateBatch3Scenes } from './routeDateSceneFactory.js';

const completedCohortRouteIds = new Set([
  ...coreRouteDateMatrix.map((route) => route.routeId || route.id),
  ...clubRouteDateBatch3Matrix.map((route) => route.routeId || route.id)
]);

const afterSchoolFallbackRoutes = fallbackRouteDateBatch3Routes.filter((route) => (
  !completedCohortRouteIds.has(route.routeId || route.id)
));
const afterSchoolFallbackSceneIds = new Set(afterSchoolFallbackRoutes.flatMap((route) => route.sceneIds));

function normalizeRouteDateRoute(route, expansionBatch) {
  const id = route.id || route.routeId;
  return {
    ...route,
    id,
    routeId: route.routeId || id,
    expansionBatch: route.expansionBatch || expansionBatch,
    entrySceneId: route.entrySceneId || route.sceneIds?.[0],
    exitSceneId: route.exitSceneId || route.sceneIds?.[route.sceneIds.length - 1],
    memoryFlags: route.memoryFlags || [],
    phoneFlags: route.phoneFlags || [],
    payoffOnlyFlags: route.payoffOnlyFlags || [],
    affectionBudget: route.affectionBudget || ROUTE_DATE_AFFECTION_BUDGETS[id]
  };
}

export {
  CLUB_ROUTE_DATE_BATCH3_ID,
  CORE_ROUTE_DATE_BATCH_ID,
  ROUTE_DATE_AFFECTION_BUDGETS,
  ROUTE_DATE_BATCH3_ID,
  clubRouteDateBatch3BackgroundBindings,
  clubRouteDateBatch3Matrix,
  clubRouteDateBatch3Scenes,
  coreRouteDateMatrix,
  coreRouteDateSceneBackgroundBindings,
  coreRouteDateScenes
};

export const routeDateBatch3Routes = [
  ...coreRouteDateMatrix.map((route) => normalizeRouteDateRoute(route, CORE_ROUTE_DATE_BATCH_ID)),
  ...clubRouteDateBatch3Matrix.map((route) => normalizeRouteDateRoute(route, ROUTE_DATE_BATCH3_ID)),
  ...afterSchoolFallbackRoutes.map((route) => normalizeRouteDateRoute(route, ROUTE_DATE_BATCH3_ID))
];

export const routeDateBatch3Scenes = [
  ...coreRouteDateScenes,
  ...clubRouteDateBatch3Scenes,
  ...buildRouteDateBatch3Scenes(afterSchoolFallbackRoutes)
];

export const routeDateBatch3BackgroundBindings = [
  ...coreRouteDateSceneBackgroundBindings,
  ...clubRouteDateBatch3BackgroundBindings,
  ...fallbackRouteDateBatch3BackgroundBindings.filter((binding) => (
    afterSchoolFallbackSceneIds.has(binding.sceneId)
  ))
];
