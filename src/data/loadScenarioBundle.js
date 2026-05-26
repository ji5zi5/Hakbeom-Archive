const SCENE_LOADERS = [
  () => import('./scenario/day1.js').then((module) => module.day1Scenes),
  () => import('./scenario/day2.js').then((module) => module.day2Scenes),
  () => import('./scenario/day3.js').then((module) => module.day3Scenes),
  () => import('./scenario/calendar/loadCalendarScenario.js').then((module) => module.loadCalendarScenarioScenes()),
  () => import('./scenario/endings.js').then((module) => module.endingScenes)
];

export async function loadScenarioBundle() {
  const [episodeModule, ...sceneGroups] = await Promise.all([
    import('./scenario/episodeInfo.js'),
    ...SCENE_LOADERS.map((loadSceneGroup) => loadSceneGroup())
  ]);

  return {
    episodeInfo: episodeModule.episodeInfo,
    scenario: sceneGroups.flat()
  };
}
