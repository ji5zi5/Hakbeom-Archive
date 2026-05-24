const SCENE_LOADERS = [
  () => import('./scenario/day1.js').then((module) => module.day1Scenes),
  () => import('./scenario/day2.js').then((module) => module.day2Scenes),
  () => import('./scenario/day3.js').then((module) => module.day3Scenes),
  () => import('./scenario/day4.js').then((module) => module.day4Scenes),
  () => import('./scenario/day5.js').then((module) => module.day5Scenes),
  () => import('./scenario/day6.js').then((module) => module.day6Scenes),
  () => import('./scenario/day7.js').then((module) => module.day7Scenes),
  () => import('./scenario/day8.js').then((module) => module.day8Scenes),
  () => import('./scenario/day9.js').then((module) => module.day9Scenes),
  () => import('./scenario/longformDatingExpansion.js').then((module) => module.longformDatingExpansionScenes),
  () => import('./scenario/day10.js').then((module) => module.day10Scenes),
  () => import('./scenario/day11.js').then((module) => module.day11Scenes),
  () => import('./scenario/day12.js').then((module) => module.day12Scenes),
  () => import('./scenario/day13.js').then((module) => module.day13Scenes),
  () => import('./scenario/day14.js').then((module) => module.day14Scenes),
  () => import('./scenario/endings.js').then((module) => module.endingScenes)
];

export async function loadScenarioBundle() {
  const [episodeModule, registryModule, ...sceneGroups] = await Promise.all([
    import('./scenario/episodeInfo.js'),
    import('./scenario/routeDepthExpansionRegistry.js'),
    ...SCENE_LOADERS.map((loadSceneGroup) => loadSceneGroup())
  ]);

  return {
    episodeInfo: episodeModule.episodeInfo,
    scenario: registryModule.integrateRouteDepthExpansions(sceneGroups.flat())
  };
}
