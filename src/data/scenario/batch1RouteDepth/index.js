import { routeDepthRouteIds } from './routeDepthBatchMatrix.js';
import { coreRouteDepthScenes } from './coreRoutes.js';
import { clubRouteDepthScenes } from './clubRoutes.js';
import { afterSchoolRouteDepthScenes } from './afterSchoolRoutes.js';

export const routeDepthBatchScenes = [
  ...coreRouteDepthScenes,
  ...clubRouteDepthScenes,
  ...afterSchoolRouteDepthScenes
];

const firstBatchSceneByRoute = new Map(
  routeDepthRouteIds.map((routeId) => [routeId, `batch1-${routeId}-01`])
);

export function integrateBatch1RouteDepth(items) {
  const integratedItems = items.map((item) => {
    const match = /^day14-(.+)-afterglow$/.exec(item.id || '');
    if (!match || !firstBatchSceneByRoute.has(match[1])) return item;
    return {
      ...item,
      nextId: firstBatchSceneByRoute.get(match[1])
    };
  });
  return [...integratedItems, ...routeDepthBatchScenes];
}
