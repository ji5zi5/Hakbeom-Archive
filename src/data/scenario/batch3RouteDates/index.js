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
  afterSchoolRouteDateBackgroundBindings,
  afterSchoolRouteDateMatrix,
  afterSchoolRouteDateScenes
} from './afterSchoolRoutes.js';
import {
  ROUTE_DATE_AFFECTION_BUDGETS,
  ROUTE_DATE_BATCH3_ID
} from './routeDateMatrix.js';

function normalizeRouteDateRoute(route, expansionBatch) {
  const id = route.id || route.routeId;
  return {
    ...route,
    id,
    routeId: route.routeId || id,
    profileId: route.profileId || route.routeId || id,
    dateMotif: route.dateMotif || '',
    memoryLabel: route.memoryLabel || '',
    ownership: route.ownership,
    payoffConsumerSceneIds: route.payoffConsumerSceneIds || [],
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
  afterSchoolRouteDateBackgroundBindings,
  afterSchoolRouteDateMatrix,
  afterSchoolRouteDateScenes,
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
  ...afterSchoolRouteDateMatrix.map((route) => normalizeRouteDateRoute(route, ROUTE_DATE_BATCH3_ID))
];

export const routeDateBatch3Scenes = [
  ...coreRouteDateScenes,
  ...clubRouteDateBatch3Scenes,
  ...afterSchoolRouteDateScenes
];

export const routeDateBatch3BackgroundBindings = [
  ...coreRouteDateSceneBackgroundBindings,
  ...clubRouteDateBatch3BackgroundBindings,
  ...afterSchoolRouteDateBackgroundBindings
];
