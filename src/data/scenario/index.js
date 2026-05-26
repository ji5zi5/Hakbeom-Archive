import { episodeInfo } from './episodeInfo.js';
import { day1Scenes } from './day1.js';
import { day2Scenes } from './day2.js';
import { day3Scenes } from './day3.js';
import { calendarScenarioScenes } from './calendar/index.js';
import { endingScenes } from './endings.js';

export { episodeInfo };

export const scenario = [
  ...day1Scenes,
  ...day2Scenes,
  ...day3Scenes,
  ...calendarScenarioScenes,
  ...endingScenes
];
