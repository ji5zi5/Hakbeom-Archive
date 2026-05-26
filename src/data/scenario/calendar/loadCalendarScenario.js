const LEGACY_GROUP_LOADERS = [
  { id: 'legacy-day4-adapter', day: 4, slot: 'after-school', location: 'archive', load: () => import('./sources/day4Source.js').then((module) => module.day4Scenes) },
  { id: 'legacy-day5-adapter', day: 5, slot: 'after-school', location: 'archive', load: () => import('./sources/day5Source.js').then((module) => module.day5Scenes) },
  { id: 'legacy-day6-adapter', day: 6, slot: 'after-school', location: 'archive', load: () => import('./sources/day6Source.js').then((module) => module.day6Scenes) },
  { id: 'legacy-day7-adapter', day: 7, slot: 'after-school', location: 'archive', load: () => import('./sources/day7Source.js').then((module) => module.day7Scenes) },
  { id: 'legacy-day8-adapter', day: 8, slot: 'after-school', location: 'archive', load: () => import('./sources/day8Source.js').then((module) => module.day8Scenes) },
  { id: 'legacy-day9-adapter', day: 9, slot: 'after-school', location: 'archive', load: () => import('./sources/day9Source.js').then((module) => module.day9Scenes) },
  { id: 'legacy-longform-adapter', day: 9, slot: 'evening', location: 'archive', load: () => import('./sources/longformDatingExpansionSource.js').then((module) => module.longformDatingExpansionScenes) },
  { id: 'legacy-day10-adapter', day: 10, slot: 'after-school', location: 'archive', load: () => import('./sources/day10Source.js').then((module) => module.day10Scenes) },
  { id: 'legacy-day11-adapter', day: 11, slot: 'post-lock', location: 'archive', load: () => import('./sources/day11Source.js').then((module) => module.day11Scenes) },
  { id: 'legacy-day12-adapter', day: 12, slot: 'post-lock', location: 'archive', load: () => import('./sources/day12Source.js').then((module) => module.day12Scenes) },
  { id: 'legacy-day13-adapter', day: 13, slot: 'post-lock', location: 'archive', load: () => import('./sources/day13Source.js').then((module) => module.day13Scenes) },
  { id: 'legacy-day14-adapter', day: 14, slot: 'post-lock', location: 'archive', load: () => import('./sources/day14Source.js').then((module) => module.day14Scenes) }
];

function withCalendarAdapterMetadata(scene, group, patchScene = (value) => value) {
  const patchedScene = patchScene(scene);
  return {
    ...patchedScene,
    calendarEventId: patchedScene.calendarEventId || group.id,
    calendarSourceAdapter: patchedScene.calendarSourceAdapter || group.id,
    calendarDay: patchedScene.calendarDay || group.day,
    calendarSlot: patchedScene.calendarSlot || group.slot,
    calendarLocation: patchedScene.calendarLocation || group.location,
    routeId: patchedScene.routeId || 'common',
    qualityTags: [...new Set([...(patchedScene.qualityTags || []), 'legacy-source-adapter', 'route-depth-adapter-sunset'])]
  };
}

export async function loadCalendarScenarioScenes() {
  const [registryModule, plannerModule, ...groups] = await Promise.all([
    import('../routeDepthExpansionRegistry.js'),
    import('./routePlannerEvents.js'),
    ...LEGACY_GROUP_LOADERS.map(async (group) => ({ ...group, scenes: await group.load() }))
  ]);

  const rawScenes = groups.flatMap((group) => group.scenes);
  const rawSceneIds = new Set(rawScenes.map((scene) => scene.id));
  const integratedScenes = registryModule.integrateRouteDepthExpansions(rawScenes);
  const integratedSceneById = new Map(integratedScenes.map((scene) => [scene.id, scene]));
  const routeDepthGroup = {
    id: 'legacy-route-depth-expansion-adapter',
    day: 14,
    slot: 'terminal',
    location: 'archive'
  };

  const plannerScenesByDay = new Map();
  for (const scene of plannerModule.materializePlannerEventScenes()) {
    const day = scene.calendarDay;
    if (!plannerScenesByDay.has(day)) plannerScenesByDay.set(day, []);
    plannerScenesByDay.get(day).push(scene);
  }
  const emittedPlannerDays = new Set();
  const orderedLegacyScenes = groups.flatMap((group) => {
    const plannerScenes = emittedPlannerDays.has(group.day)
      ? []
      : plannerScenesByDay.get(group.day) || [];
    emittedPlannerDays.add(group.day);
    return [
      ...plannerScenes,
      ...group.scenes.map((scene) => withCalendarAdapterMetadata(
        integratedSceneById.get(scene.id) || scene,
        group,
        plannerModule.withCalendarPlannerChapterLink
      ))
    ];
  });

  return [
    ...orderedLegacyScenes,
    ...integratedScenes
      .filter((scene) => !rawSceneIds.has(scene.id))
      .map((scene) => {
        const batchId = scene.expansionBatch || scene.routeDepthBatch || scene.batchId || '';
        const adapterId = batchId.includes('batch3') || batchId.includes('route-dates')
          ? 'legacy-route-depth-batch3-adapter'
          : batchId.includes('batch2')
            ? 'legacy-route-depth-batch2-adapter'
            : 'legacy-route-depth-batch1-adapter';
        return withCalendarAdapterMetadata(scene, { ...routeDepthGroup, id: adapterId });
      })
  ];
}
