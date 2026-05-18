import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import assert from 'node:assert/strict';
import { routeConfig as routeConfigData } from '../src/data/routeConfig.js';
import { characterProfiles, resolveCharacterAsset } from '../src/data/characterProfiles.js';
import { episodeInfo, scenario } from '../src/data/scenario.js';
import {
  applyAudioDirective,
  applyAudioItem,
  clampVolumePercent,
  createAudioState,
  resolveAudioCue
} from '../src/engine/audioEngine.js';
import { getChapterInfo, shouldShowChapterCard } from '../src/engine/chapterEngine.js';
import { applyDirectorItem, getMoodOverlay } from '../src/engine/directorEngine.js';
import { normalizePhoneMessages, normalizePhoneReplies } from '../src/engine/phoneEngine.js';
import { normalizeSavePayload, normalizeSaveSummary } from '../src/engine/saveCodec.js';
import { buildSaveSummary } from '../src/engine/saveSummary.js';
import { validateScenario } from '../src/engine/scenarioValidator.js';
import { findReplayPath, replayDirectorState, resolveNextIndex } from '../src/engine/vnEngine.js';
import { resolveDominantRoute, resolveRouteLock } from '../src/utils/routeResolution.js';
import { applyRouteRewards, createInitialGameState } from '../src/utils/vnState.js';

function readSource(path) {
  return readFileSync(path, 'utf8').replace(/\r\n/g, '\n');
}

const app = readSource('src/App.jsx');
const indexHtml = readSource('index.html');
const styles = readSource('src/styles.css');
const routeConfig = readSource('src/data/routeConfig.js');
const packageJson = readSource('package.json');
const vnState = readSource('src/utils/vnState.js');
const vnText = readSource('src/utils/vnText.js');
const directorEngine = readSource('src/engine/directorEngine.js');
const audioEngine = readSource('src/engine/audioEngine.js');
const saveCodec = readSource('src/engine/saveCodec.js');
const saveSummary = readSource('src/engine/saveSummary.js');
const scenarioValidator = readSource('src/engine/scenarioValidator.js');
const vnEngine = readSource('src/engine/vnEngine.js');
const phoneEngine = readSource('src/engine/phoneEngine.js');
const chapterEngine = readSource('src/engine/chapterEngine.js');
const regressionCapture = readSource('scripts/capture-vn-regression.mjs');
const vnFlowQa = existsSync('scripts/qa-vn-flow.mjs')
  ? readSource('scripts/qa-vn-flow.mjs')
  : '';

assert.match(
  packageJson,
  /"playwright":\s*"\^1\.60\.0"[\s\S]*"capture:vn":\s*"node scripts\/capture-vn-regression\.mjs"|"capture:vn":\s*"node scripts\/capture-vn-regression\.mjs"[\s\S]*"playwright":\s*"\^1\.60\.0"/,
  'Playwright should be installed and exposed through the VN capture script.'
);
assert.match(
  packageJson,
  /"qa:vn":\s*"node scripts\/qa-vn-flow\.mjs"/,
  'Package scripts should expose reproducible VN flow QA.'
);
assert.match(
  vnFlowQa,
  /vn-flow-qa\.json[\s\S]*title-start[\s\S]*choice-approach[\s\S]*phone-reply[\s\S]*save-load[\s\S]*gallery[\s\S]*ending/,
  'VN flow QA should cover title start, choice, phone reply, save/load, gallery, and ending smoke paths.'
);
assert.match(
  vnFlowQa,
  /assetErrors[\s\S]*playRejects[\s\S]*\/assets\/bgm\//,
  'VN flow QA should record audio asset errors, playback rejections, and reject BGM usage.'
);
assert.match(
  packageJson,
  /"test:story-lines":\s*"node scripts\/check-scenario-line-count\.mjs"/,
  'Longform expansion should expose a scenario line-count contract script.'
);
assert.match(
  regressionCapture,
  /LOCAL_PLAYWRIGHT_LIB_DIR[\s\S]*LD_LIBRARY_PATH/,
  'VN capture should load repo-local Playwright browser libraries when system packages are unavailable.'
);
assert.match(
  readSource('scripts/check-scenario-line-count.mjs'),
  /MIN_SCENARIO_SOURCE_LINES \|\| 10_000[\s\S]*Scenario source line count/,
  'Scenario line-count script should enforce the 10,000-line longform target.'
);

function readPngSize(path) {
  const buffer = readFileSync(path);
  assert.equal(buffer.toString('ascii', 1, 4), 'PNG', `${path} should be a PNG file.`);
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20)
  };
}

assert.equal(
  /showHud(?:=|\s|\n|\r|\t|>)/.test(app),
  false,
  'App should not render the bottom-left shortcut HUD by default.'
);

assert.match(
  styles,
  /\.nav-button(?::focus|[\s\S]*?:focus)[\s\S]*?outline\s*:\s*none/i,
  'AUTO/MENU nav buttons should suppress the browser focus outline after click.'
);

assert.match(
  styles,
  /\.viewport\s*\{[\s\S]*?width\s*:\s*100vw[\s\S]*?height\s*:\s*100dvh[\s\S]*?display\s*:\s*grid[\s\S]*?place-items\s*:\s*center/i,
  'Viewport should be a full-screen frame that centers the game stage.'
);
assert.match(
  styles,
  /html,\s*body\s*\{[\s\S]*?background\s*:\s*#000[\s\S]*?\.viewport\s*\{[\s\S]*?background\s*:\s*#000/i,
  'Outer viewport should use a black letterbox frame so it does not blend into in-game backgrounds.'
);

assert.match(
  styles,
  /\.game\s*\{[\s\S]*?width\s*:\s*min\(100vw,\s*calc\(100dvh \* 1129 \/ 524\)\)[\s\S]*?aspect-ratio\s*:\s*1129\s*\/\s*524/i,
  'Game stage should use contain sizing so every edge stays visible.'
);

assert.doesNotMatch(
  styles,
  /\.viewport\s*\{[\s\S]*?width\s*:\s*max\(100vw,[\s\S]*?height\s*:\s*max\(100dvh,/i,
  'Viewport should not use cover sizing because it crops the game edges.'
);

const quickGlyphStroke = styles.match(/\.quick-icon-glyph\s*\{[\s\S]*?stroke-width\s*:\s*([0-9.]+)/i);
assert.ok(quickGlyphStroke, 'Quick menu icon stroke width should be defined.');
assert.ok(
  Number(quickGlyphStroke[1]) >= 4.0 && Number(quickGlyphStroke[1]) <= 4.8,
  'Quick menu icon strokes should be scaled to the image2 full-screen nav size.'
);

const quickShapeStroke = styles.match(/\.quick-icon-shape\s*\{[\s\S]*?stroke-width\s*:\s*([0-9.]+)/i);
assert.ok(quickShapeStroke, 'Quick menu button outline stroke width should be defined.');
assert.ok(
  Number(quickShapeStroke[1]) <= 0.32,
  'Quick menu button outlines should be subtle like the references.'
);

const component = readSource('src/components/BAVisualNovel.jsx');

function topLevelFunctionSource(source, functionName) {
  const start = source.indexOf(`function ${functionName}`);
  assert.notEqual(start, -1, `${functionName} should exist.`);
  const next = source.indexOf('\nfunction ', start + 1);
  return source.slice(start, next === -1 ? source.length : next);
}

const bannerSceneSource = topLevelFunctionSource(component, 'BannerScene');
const visualNovelSource = topLevelFunctionSource(component, 'BAVisualNovel');
const dialogueSceneSource = topLevelFunctionSource(component, 'DialogueScene');
const characterLayerSource = topLevelFunctionSource(component, 'CharacterLayer');
const characterSpriteSource = topLevelFunctionSource(component, 'CharacterSprite');
const dialogueTextLinesSource = topLevelFunctionSource(component, 'DialogueTextLines');
const choiceTextLinesSource = topLevelFunctionSource(component, 'ChoiceTextLines');
const endingToastSource = topLevelFunctionSource(component, 'EndingToast');
const wrapDialogueTextSource = topLevelFunctionSource(vnText, 'wrapDialogueText');
const effectGeometrySource = topLevelFunctionSource(component, 'getEffectBadgeGeometry');
const effectBadgeSource = topLevelFunctionSource(component, 'EffectBadge');
const directorApplySource = topLevelFunctionSource(directorEngine, 'applyDirectorItem');
const directorMoodSource = topLevelFunctionSource(directorEngine, 'getMoodOverlay');
const replayCandidateSource = topLevelFunctionSource(vnEngine, 'getReplayCandidateSteps');
const replayDirectorSource = topLevelFunctionSource(vnEngine, 'replayDirectorState');

function readScenarioSourceTree() {
  const parts = [readSource('src/data/scenario.js')];
  if (existsSync('src/data/scenario')) {
    for (const fileName of readdirSync('src/data/scenario').filter((file) => file.endsWith('.js')).sort()) {
      parts.push(readSource(`src/data/scenario/${fileName}`));
    }
  }
  return parts.join('\n');
}

for (const requiredSystemSymbol of [
  'const SAVE_STORAGE_KEY',
  'const AUTO_SAVE_SLOT',
  'const QUICK_SAVE_SLOT',
  'createInitialGameState',
  'applyRouteRewards',
  'markLineRead',
  'function clearEphemeralCharacterState',
  'wrapDialogueText',
  'function DialogueTextLines',
  'function buildSavePayload',
  'function persistSaveSlot',
  'function readSaveSlots',
  'function TitleScreen',
  'function SaveLoadModal',
  'function ConfigModal',
  'function EndingToast'
]) {
  assert.ok(
    component.includes(requiredSystemSymbol) || directorEngine.includes(requiredSystemSymbol),
    `Dating-sim system should define ${requiredSystemSymbol}.`
  );
}

assert.match(
  routeConfig,
  /export const routeConfig = \{[\s\S]*?affectionLabels[\s\S]*?galleryItems[\s\S]*?recollectionItems/,
  'Route config should define affection labels, gallery items, and recollection items.'
);

assert.match(
  routeConfig,
  /affectionTargets:\s*\[[\s\S]*id:\s*'hyeongyeom'[\s\S]*id:\s*'ukhyun'[\s\S]*id:\s*'jaeseong'/,
  'Route config should define all heroine affection targets.'
);

assert.match(
  vnState,
  /export function applyRouteRewards[\s\S]*?export function markLineRead[\s\S]*?export function unlockGalleryItem/,
  'VN state helpers should expose route reward, read-line, and gallery unlock operations.'
);

assert.match(
  vnText,
  /export function wrapDialogueText[\s\S]*?export function getVisibleDialogueLines/,
  'VN text helpers should expose wrapping and visible-line helpers.'
);

assert.match(
  component,
  /import \{[\s\S]*?wrapDialogueText[\s\S]*?\} from '\.\.\/utils\/vnText\.js'/,
  'Component should use extracted VN text helpers.'
);

assert.match(
  component,
  /import \{[\s\S]*?applyRouteRewards[\s\S]*?markLineRead[\s\S]*?unlockGalleryItem[\s\S]*?\} from '\.\.\/utils\/vnState\.js'/,
  'Component should use extracted VN state helpers.'
);

assert.match(
  component,
  /import \{ routeConfig \} from '\.\.\/data\/routeConfig\.js'/,
  'Component should read route metadata from routeConfig.'
);

assert.match(
  component,
  /findScenarioIndexById[\s\S]*?from '\.\.\/engine\/vnEngine\.js'/,
  'Component should import route/replay helpers from the VN engine module, including gallery replay ID lookup.'
);

assert.match(
  component,
  /from '\.\.\/engine\/directorEngine\.js'/,
  'Component should import director helpers from the director engine module.'
);

assert.match(
  component,
  /from '\.\.\/engine\/saveCodec\.js'/,
  'Component should use the versioned save codec.'
);

assert.match(
  component,
  /import \{ createKeyboardActivationHandler \} from '\.\.\/utils\/accessibility\.js';/,
  'Component should use the shared keyboard activation helper.'
);

assert.match(
  component,
  /import \{ buildSaveSummary \} from '\.\.\/engine\/saveSummary\.js';/,
  'BAVisualNovel should use saveSummary for slot metadata.'
);

assert.match(
  component,
  /import \{ getChapterInfo \} from '\.\.\/engine\/chapterEngine\.js';/,
  'BAVisualNovel should derive chapter cards through chapterEngine.'
);

assert.match(
  component,
  /import \{ resolveCharacterAsset \} from '\.\.\/data\/characterProfiles\.js';/,
  'CharacterSprite should resolve expression-specific assets through characterProfiles.'
);

assert.match(
  component,
  /import \{ normalizePhoneMessages, normalizePhoneReplies \} from '\.\.\/engine\/phoneEngine\.js';/,
  'PhoneMessageScene should use phoneEngine normalization.'
);

assert.match(
  component,
  /const bgmAudioRef = useRef\(null\)[\s\S]*const ambientAudioRefs = useRef\(new Map\(\)\)/,
  'BAVisualNovel should keep dedicated BGM and ambient audio refs.'
);

assert.match(
  component,
  /playLoopAudio\(audioState\.bgm\?\.src \|\| '', bgmVolume, bgmAudioRef\.current\)[\s\S]*directorState\.audio\?\.key[\s\S]*settings\.bgmVolume/,
  'BAVisualNovel should react to director audio changes and BGM volume settings.'
);
assert.match(
  component,
  /function syncLoopAudio\([\s\S]*?playLoopAudio\(audioState\.bgm\?\.src \|\| '', bgmVolume, bgmAudioRef\.current\)[\s\S]*?ambientAudioRefs\.current/,
  'Looping BGM and ambient playback should be centralized so autoplay recovery uses the same code path as audio state changes.'
);
assert.match(
  component,
  /const loopAudioReadyRef = useRef\(false\)[\s\S]*if \(screen !== 'game' \|\| !loopAudioReadyRef\.current\)[\s\S]*const retryLoopAudioPlayback = \(\) => \{[\s\S]*loopAudioReadyRef\.current = true[\s\S]*if \(screen !== 'game'\) return[\s\S]*syncLoopAudio\([\s\S]*?window\.addEventListener\('pointerdown', retryLoopAudioPlayback[\s\S]*?window\.addEventListener\('keydown', retryLoopAudioPlayback/,
  'BAVisualNovel should unlock and retry BGM/ambient playback only after a user gesture in gameplay.'
);
assert.match(
  component,
  /const soundEffectsReadyRef = useRef\(false\)[\s\S]*if \(!soundEffectsReadyRef\.current\) return;[\s\S]*const retryLoopAudioPlayback = \(\) => \{[\s\S]*soundEffectsReadyRef\.current = true/,
  'BAVisualNovel should suppress scene SFX autoplay until the first user gesture unlocks audio.'
);

assert.doesNotMatch(
  component,
  /<ConfigRange label="BGM 준비중"[\s\S]*disabled/,
  'BGM config should be enabled after BGM playback exists.'
);

const expectedSoundCues = [
  ['click', '/assets/se/ui-click.ogg'],
  ['choice', '/assets/se/ui-drop.ogg'],
  ['confirm', '/assets/se/ui-drop.ogg'],
  ['close', '/assets/se/ui-click.ogg']
];

for (const [cue, assetPath] of expectedSoundCues) {
  const cueKey = cue.includes('-') ? `['"]${cue}['"]` : cue;
  assert.match(
    app,
    new RegExp(`${cueKey}:\\s*['"]${assetPath.replaceAll('/', '\\/')}['"]`),
    `App sounds map should wire ${cue} to ${assetPath}.`
  );
  assert.ok(
    existsSync(`public${assetPath}`),
    `Expected audio asset ${assetPath} should exist under public/assets.`
  );
}

for (const placeholderBgmPath of [
  'public/assets/bgm/rainy-after-school.ogg',
  'public/assets/bgm/warm-promise.ogg',
  'public/assets/bgm/rain-loop.ogg'
]) {
  assert.equal(
    existsSync(placeholderBgmPath),
    false,
    `${placeholderBgmPath} should not ship until a production-length loop replaces the placeholder.`
  );
}

assert.ok(
  existsSync('public/assets/se/KENNEY_CC0_LICENSES.txt'),
  'Imported Kenney audio should keep a license/credit file in public/assets/se.'
);

assert.match(
  component,
  /function PhoneMessageScene\([\s\S]*?normalizePhoneReplies\(item\)[\s\S]*?phone-reply[\s\S]*?onChoose\(reply\.index\)/,
  'Phone message scene should render normalized replies as clickable phone-reply controls.'
);

assert.match(
  component,
  /<PhoneMessageScene[\s\S]*?visible=\{mode === 'phone'\}[\s\S]*?onChoose=\{choose\}/,
  'Phone scenes should be routed into the main render tree.'
);

assert.match(
  component,
  /className=\{`phone-bubble phone-bubble-\$\{message\.side\}`\}/,
  'Phone UI should render left/right chat bubbles.'
);

assert.match(
  component,
  /className="phone-typing"/,
  'Phone UI should support typing/pending message indicators.'
);

assert.match(
  component,
  /function GalleryModal\([\s\S]*?routeConfig\.galleryItems[\s\S]*?unlockedGallery[\s\S]*?gallery-tile/,
  'Gallery modal should render routeConfig gallery items and locked/unlocked state.'
);
assert.match(
  component,
  /galleryUnlockedCount[\s\S]*?recollectionUnlockedCount[\s\S]*?ARCHIVE ALBUM[\s\S]*?gallery-counts/,
  'Gallery modal should present archive-album framing with CG and recollection unlock counts.'
);
assert.match(
  component,
  /const archiveMeta = formatArchiveMeta\(galleryItem\.chapter,\s*galleryItem\.routeId,\s*galleryItem\.hint\)[\s\S]*?title=\{archiveMeta\}[\s\S]*?aria-label=\{\`\$\{unlocked \? galleryItem\.title : '잠긴 CG'\} \$\{archiveMeta\}`\}/,
  'Gallery tiles should hide dense chapter/route/hint copy visually while keeping it available as compact title/aria metadata.'
);
assert.match(
  component,
  /const archiveMeta = formatArchiveMeta\(recollectionItem\.chapter,\s*recollectionItem\.routeId,\s*recollectionItem\.hint\)[\s\S]*?aria-label=\{\`\$\{unlocked \? recollectionItem\.title : '잠긴 회상'\} \$\{archiveMeta\}`\}[\s\S]*?disabled=\{!unlocked\}[\s\S]*?onReplay\?\.\(recollectionItem\.startId\)/,
  'Recollection items should keep dense metadata hidden in labels while preserving locked replay protection.'
);
assert.doesNotMatch(
  component,
  /gallery-tile-meta|gallery-lock-hint|recollection-meta/,
  'Collection cards should not render dense visible metadata/hint rows that overlap inside small cards.'
);
assert.doesNotMatch(
  styles,
  /\.gallery-tile-meta|\.gallery-lock-hint|\.recollection-meta/,
  'Collection CSS should not keep stale dense metadata/hint selectors after hiding the visual info.'
);
assert.doesNotMatch(
  styles,
  /\.gallery-tile\.locked::after\s*\{[\s\S]*?content:\s*["']LOCKED["']/i,
  'Locked gallery tiles should not duplicate the visible LOCKED label through a pseudo-element.'
);
assert.match(
  styles,
  /\.gallery-tile\.locked strong\s*\{[\s\S]*?background:\s*rgba\(20,\s*34,\s*49,\s*\.70\)/i,
  'Locked gallery tiles should style the single DOM label as the visible locked badge.'
);

assert.match(
  component,
  /function resolveItemText\(item, gameState\)[\s\S]*?variants[\s\S]*?flags/,
  'Text resolver should support flag-based scenario variants.'
);

assert.match(
  component,
  /markLineRead\(current,\s*item\.id\)/,
  'Visual novel should mark displayed scenario items as read.'
);

assert.match(
  vnEngine,
  /settings\.skipReadOnly[\s\S]*?readLines[\s\S]*?unread/,
  'Skip should respect read-line state when skipReadOnly is enabled.'
);

assert.match(
  regressionCapture,
  /save-modal[\s\S]*?load-modal[\s\S]*?gallery[\s\S]*?ending/,
  'VN regression capture script should cover SAVE/LOAD, gallery, and ending smoke states.'
);
assert.match(
  regressionCapture,
  /choice-approach[\s\S]*phone-evening-message[\s\S]*settings-modal[\s\S]*ending-good/,
  'VN regression capture should include QA-critical choice, phone, settings, and ending screens.'
);

assert.match(
  component,
  /const NAV_BUTTON_PATH =\n\s+'M10\.0 0\.4H116\.0C117\.5 0\.4 118\.3 1\.9 118\.0 3\.7L112\.2 31\.9C111\.8 34\.2 109\.8 35\.8 107\.1 35\.8H3\.9C1\.4 35\.8 -0\.4 33\.7 0\.1 31\.2L5\.8 4\.8C6\.4 1\.8 8\.0 0\.4 10\.0 0\.4Z'/,
  'AUTO/MENU top buttons should stay at image2 full-screen proportions.'
);

assert.match(
  component,
  /<g id="topNav" className="top-nav" transform="translate\(874 17\.8\)">/,
  'Top nav should align with image2 full-screen proportions.'
);

assert.match(
  component,
  /const MENU_PANEL_PATH =\n\s+'M14 0H241C246 0 249 3 248 8L241 61C240 65 236 68 232 68H6C2 68 -1 65 0 61L8 8C9 3 9 0 14 0Z'/,
  'Quick menu panel should be compact, not oversized against the full screen.'
);

assert.match(
  component,
  /const MINI_BUTTON_PATH =\n\s+'M8 0H54C59 0 62 4 61 9L56 38C55 42 51 44 47 44H6C2 44 -1 41 0 37L5 9C6 4 4 0 8 0Z'/,
  'Quick menu buttons should use compact rounded slanted tiles scaled from image.png.'
);

assert.match(
  component,
  /<g className="quick-menu" transform="translate\(-9 48\)"/,
  'Quick menu should sit below AUTO/MENU without becoming oversized.'
);

assert.match(
  component,
  /<QuickIconButton x="22"[\s\S]*?<QuickIconButton x="92"[\s\S]*?<QuickIconButton x="156"/,
  'Quick menu buttons should use compact reference-like spacing with the skip button pulled left inside its tile.'
);



assert.match(
  component,
  /quick-icon-hide[\s\S]*?M32 18L41 9L38 6L50 5L48 17L45 14L36 23Z[\s\S]*?M27 27L18 36L21 39L10 40L12 29L15 32L24 23Z/,
  'Hide quick-menu icon should use two separated filled diagonal arrows like image1.'
);

assert.match(
  component,
  /quick-icon-skip[\s\S]*?M13 13H25L36 22L25 31H13L24 22Z[\s\S]*?M28 13H40L51 22L40 31H28L39 22Z/,
  'Skip quick-menu icon should use filled double-chevron blocks that stay inside the compact tile.'
);

assert.match(
  component,
  /<clipPath id="quickIconTileClip" clipPathUnits="userSpaceOnUse">[\s\S]*?<path d=\{MINI_BUTTON_PATH\} \/>[\s\S]*?<\/clipPath>/,
  'Quick menu icons must be clipped to the dark tile shape so they cannot render outside the box.'
);

assert.match(
  component,
  /<g className="quick-icon-clip" clipPath="url\(#quickIconTileClip\)">[\s\S]*?<QuickIcon type=\{icon\} \/>/,
  'Each quick menu icon should render inside the clipping group.'
);

assert.match(
  component,
  /M18 14H45[\s\S]*?M17 22H44[\s\S]*?M16 30H43/,
  'Log icon lines should stay inside the compact quick-menu tile.'
);

assert.match(
  styles,
  /\.director-overlay[\s\S]*?pointer-events\s*:\s*none/i,
  'Director overlays should render as non-interactive BA-style BCG/E layers.'
);
assert.match(
  component,
  /function DirectorOverlays\([\s\S]*?fillOpacity=\{overlay\.opacity \?\? 0\.28\}/,
  'Director overlays should use fillOpacity so fade-in CSS cannot override subtle overlay strength and hide the background.'
);
assert.doesNotMatch(
  component,
  /className=\{`director-overlay[\s\S]*?opacity=\{overlay\.opacity \?\? 0\.28\}/,
  'Director overlays should not use SVG opacity presentation attributes with shared fade-in classes.'
);

assert.match(
  styles,
  /\.transition-fade-in[\s\S]*?animation:\s*baFadeIn/i,
  'SCG/BCG fade-in transition should be available.'
);

assert.match(
  visualNovelSource,
  /const sceneBackgroundTransition = directorState\.backgroundTransition \|\| 'fade-in'/,
  'Game scenes should carry director BCG transition metadata into rendering.'
);

assert.match(
  component,
  /function SceneBackground\(\{ backgroundSrc,\s*transition = 'fade-in' \}\)[\s\S]*?previousSrc[\s\S]*?scene-bg-previous[\s\S]*?scene-bg-active/,
  'SceneBackground should keep the previous BCG layer long enough to cross-fade instead of swapping abruptly.'
);

assert.match(
  component,
  /<SceneBackground backgroundSrc=\{backgroundSrc\} transition=\{backgroundTransition\} \/>/,
  'Scene components should pass the background transition to the SVG background renderer.'
);

assert.match(
  styles,
  /\.scene-bg-active\s*\{[\s\S]*?animation:\s*baBackgroundCrossFade/i,
  'New BCG layers should animate in with a dedicated background cross-fade.'
);

assert.match(
  styles,
  /@keyframes baBackgroundCrossFade[\s\S]*?opacity:\s*0[\s\S]*?opacity:\s*1[\s\S]*?@keyframes baBackgroundFadeOut[\s\S]*?opacity:\s*1[\s\S]*?opacity:\s*\.18/i,
  'Background cross-fade keyframes should fade the new image in while easing the previous image out.'
);

assert.match(
  styles,
  /\.transition-fade-out[\s\S]*?animation:\s*baFadeOut/i,
  'SCG delete/fade-out transition should be available.'
);

assert.match(
  styles,
  /\.motion-straight[\s\S]*?animation:\s*baStraightMove/i,
  'BA-style straight character movement should be available.'
);

assert.match(
  styles,
  /\.motion-zoom[\s\S]*?animation:\s*baZoomFocus/i,
  'BA-style zoom focus character motion should be available.'
);

assert.match(
  component,
  /const CHOICE_ROW_LAYOUTS = \{[\s\S]*?1:\s*\[230\][\s\S]*?2:\s*\[191,\s*269\][\s\S]*?3:\s*\[152,\s*230,\s*308\]/,
  'Choice rows should align one-choice with the banner row and space 2/3 choices around it.'
);

assert.match(
  directorEngine,
  /function normalizeDirectives\(item\)[\s\S]*?item\?\.directives/,
  'Blue Archive story lines should normalize BCG/SCG/SE/E directive arrays.'
);

assert.match(
  directorApplySource,
  /type === 'bcg'[\s\S]*?type === 'scg'[\s\S]*?type === 'se'[\s\S]*?type === 'e'/,
  'Director engine should apply BCG, SCG, SE, and E commands.'
);

assert.match(
  directorEngine,
  /function resolveSoundCue\(cue,\s*sounds\)[\s\S]*?sounds\?\.\[cue\]/,
  'SE directives should resolve named audio cues through the supplied sounds map.'
);

assert.match(
  directorEngine,
  /function addDirectorOverlay\(state,\s*directive\)[\s\S]*?transition:[\s\S]*?flash/,
  'E/overlay directives should create transient BA-style overlay effects.'
);

assert.match(
  replayDirectorSource,
  /function replayDirectorState\(scenario,\s*targetIndex,\s*defaults = \{\}\)[\s\S]*?applyDirectorItem/,
  'Direct item preview should replay directives to build persistent scene state.'
);

assert.match(
  visualNovelSource,
  /useState\(\(\) => replayDirectorState\(scenario,\s*initialIndex,\s*directorDefaults\)\)/,
  'Visual novel should keep a persistent director state initialized by replaying directives.'
);

assert.match(
  visualNovelSource,
  /const jumpToIndex = useCallback[\s\S]*?applyDirectorItem\(current,\s*scenario\[nextIndex\],[\s\S]*?setIndex\(nextIndex\)/,
  'Navigation should advance through a jumpToIndex helper that applies target-line directives instead of stateless rendering.'
);

assert.match(
  dialogueSceneSource,
  /backgroundSrc,\s*backgroundTransition,\s*characters,\s*overlays[\s\S]*?<SceneBackground backgroundSrc=\{backgroundSrc\} transition=\{backgroundTransition\} \/>[\s\S]*?<DirectorOverlays overlays=\{overlays\}[\s\S]*?<CharacterLayer characters=\{characters\}/,
  'DialogueScene should render director-managed BCG overlays and persistent SCG characters.'
);

assert.match(
  characterLayerSource,
  /function CharacterLayer\(\{ characters,[\s\S]*?characters\.map/,
  'CharacterLayer should consume persistent director characters rather than only per-line item characters.'
);

assert.match(
  characterSpriteSource,
  /const currentExpression = character\.expression \|\| 'normal'[\s\S]*?expression-\$\{safeClassName\(currentExpression\)\}[\s\S]*?transition-\$\{safeClassName\(character\.transition\)\}/,
  'Character sprites should expose expression and transition classes for BA-style SCG direction.'
);

assert.match(
  characterSpriteSource,
  /const resolvedSrc = resolveCharacterAsset\(character\)[\s\S]*href=\{resolvedSrc\}/,
  'CharacterSprite should render the resolved expression asset.'
);

assert.match(
  component,
  /function getChoiceRows\(choices\)[\s\S]*?CHOICE_ROW_LAYOUTS\[count\]/,
  'ChoiceScene should choose row positions based on the actual number of choices.'
);

assert.match(
  wrapDialogueTextSource,
  /const limit = options\.maxChars \?\? DIALOGUE_WRAP_CHARS[\s\S]*?const maxLines = options\.maxLines \?\? DIALOGUE_MAX_LINES[\s\S]*?flushLine\(\);[\s\S]*?return lines\.slice\(0,\s*maxLines\)/,
  'Dialogue text should have a dedicated Korean-friendly SVG wrapping helper with max width/line count.'
);

assert.match(
  wrapDialogueTextSource,
  /const maxWidth = options\.maxWidth \?\? DIALOGUE_WRAP_WIDTH[\s\S]*?measureDialogueText\(candidate\) > maxWidth/,
  'Dialogue wrapping should use visual line width, not only character count, so Korean lines do not break from the middle of the box.'
);

assert.match(
  dialogueTextLinesSource,
  /function DialogueTextLines\(\{ text, visibleCount = safeText\(text\)\.length \}\)[\s\S]*?const lines = wrapDialogueText\(text\);[\s\S]*?let remaining = visibleCount[\s\S]*?const visibleLine = line\.slice\(0,\s*clamp\(remaining,\s*0,\s*line\.length\)\)/,
  'Dialogue text layout should wrap from the full line first, then reveal characters inside stable tspans during typing.'
);

assert.match(
  dialogueTextLinesSource,
  /<text className="dialogue-text" x="136" y="429" textAnchor="start">[\s\S]*?lines\.map\(\(line, index\) =>[\s\S]*?<tspan[\s\S]*?x="136"[\s\S]*?dy=\{index === 0 \? 0 : 29\}[\s\S]*?textAnchor="start"/,
  'DialogueScene should render wrapped dialogue as left-anchored SVG tspans instead of one overflowing or center-shifted text node.'
);

assert.match(
  component,
  /const CHOICE_TEXT_WRAP_OPTIONS = \{[\s\S]*?maxWidth:\s*620[\s\S]*?maxLines:\s*2[\s\S]*?\}/,
  'Choice text should have a fixed two-line wrapping contract that fits inside the BA choice panel.'
);

assert.match(
  choiceTextLinesSource,
  /function ChoiceTextLines\(\{ text \}\)[\s\S]*?wrapDialogueText\(text,\s*CHOICE_TEXT_WRAP_OPTIONS\)[\s\S]*?startY = lines\.length > 1 \? 24 : 37[\s\S]*?<tspan[\s\S]*?x="380"[\s\S]*?dy=\{index === 0 \? 0 : 20\}/,
  'Choice text should render through wrapped SVG tspans so long Korean choices stay inside the button.'
);

assert.match(
  dialogueSceneSource,
  /fullText[\s\S]*?<DialogueTextLines text=\{fullText\} visibleCount=\{safeText\(text\)\.length\} \/>/,
  'DialogueScene should wrap using the full dialogue text, not the currently typed substring, so line starts do not jump while typing.'
);

assert.match(
  styles,
  /\.dialogue-text tspan\s*\{[\s\S]*?white-space\s*:\s*pre[\s\S]*?\}/i,
  'Wrapped SVG dialogue tspans should preserve intentional spacing.'
);

assert.match(
  visualNovelSource,
  /const \[screen,\s*setScreen\] = useState\(initialScreen\)/,
  'Visual novel should support a title/game screen state instead of always booting directly into a scene.'
);

assert.match(
  component,
  /<TitleScreen\s+open=\{screen === 'title'\}/,
  'Title screen should remain visible behind title-origin LOAD/CONFIG modals; z-index should put modals above it.'
);

assert.match(
  visualNovelSource,
  /const returnToTitle = useCallback\(\(event\) => \{[\s\S]*?setScreen\('title'\)[\s\S]*?setAuto\(false\)[\s\S]*?setMenuOpen\(false\)[\s\S]*?setSaveLoadMode\(null\)/,
  'Terminal endings should expose a return-to-title handler that closes gameplay overlays instead of trapping the player on a dead end.'
);

assert.match(
  component,
  /<EndingToast\s+ending=\{ending\}\s+terminal=\{Boolean\(item\?\.terminal\)\}\s+onTitle=\{returnToTitle\}\s+onNewGame=\{startNewGame\}/,
  'Ending UI should render only on terminal ending lines and provide title/new-game actions.'
);

assert.match(
  endingToastSource,
  /function EndingToast\(\{ ending, terminal, onTitle, onNewGame \}\)[\s\S]*?if \(!ending \|\| !terminal\) return null;[\s\S]*?<button[\s\S]*?onClick=\{onTitle\}[\s\S]*?타이틀로[\s\S]*?<button[\s\S]*?onClick=\{onNewGame\}[\s\S]*?처음부터/,
  'EndingToast should become an actionable terminal panel with 타이틀로 and 처음부터 buttons.'
);

assert.match(
  styles,
  /\.ending-actions\s*\{[\s\S]*?display\s*:\s*flex[\s\S]*?justify-content\s*:\s*center/i,
  'Ending action buttons should have a dedicated centered layout.'
);

assert.match(
  component,
  /<ChapterCard\s+info=\{chapterInfo\}/,
  'BAVisualNovel should render a ChapterCard overlay.'
);

assert.match(
  component,
  /function ChapterCard\(\{ info \}\)[\s\S]*mood-\$\{safeClassName\(info\.mood\)\}/,
  'ChapterCard should expose mood-specific classes safely.'
);

assert.match(
  component,
  /<img\s+className="title-logo-image"\s+src="\/assets\/ui\/hakbeom-archive-logo\.png"\s+alt="학범 아카이브"\s+\/>[\s\S]*?className="title-menu"/,
  'Title screen should use the supplied Hakbeom Archive logo asset before the menu.'
);

assert.deepEqual(
  readPngSize('public/assets/ui/hakbeom-archive-logo.png'),
  { width: 2176, height: 604 },
  'Hakbeom Archive logo asset should use the latest transparent cutout PNG supplied by the user.'
);

assert.doesNotMatch(
  component,
  /학범 러브|Hakbeom Love|title-logo-mark/,
  'Title screen should no longer show the old Hakbeom Love/HB placeholder branding.'
);

assert.doesNotMatch(
  component,
  /title-kicker|title-subtitle|title-footer|Hakbeom Archive Visual Novel|Hakbeom Archive \/ Prologue/,
  'Title screen should keep the main menu cinematic and logo-led, without subtitle/tagline/footer copy.'
);

assert.match(
  component,
  /className="title-memory-card"/,
  'Title screen should include a subtle non-text protagonist memory motif instead of explanatory subtitle copy.'
);
assert.match(
  component,
  /<img\s+className="title-memory-photo"\s+src="\/assets\/character\/hakbeom-title\.png"\s+alt=""\s+aria-hidden="true"\s+\/>/,
  'Title memory motif should use the supplied Hakbeom cutout as a subtle title-screen photo card.'
);
assert.ok(
  existsSync('public/assets/character/hakbeom-title.png'),
  'Hakbeom title-screen cutout should be served from the public character asset directory.'
);
assert.deepEqual(
  readPngSize('public/assets/character/hakbeom-title.png'),
  { width: 536, height: 632 },
  'Hakbeom title-screen cutout should be alpha-trimmed so the photo card has no empty lower crop area.'
);
assert.match(
  styles,
  /\.title-memory-photo\s*\{[\s\S]*?inset:\s*3%[\s\S]*?object-fit:\s*contain/i,
  'Title memory photo should contain the full face inside the card instead of cropping it.'
);
assert.match(
  styles,
  /\.title-memory-card-line\s*\{[\s\S]*?display:\s*none/i,
  'Title memory card should not reserve visible empty text-line space below the supplied photo.'
);

assert.match(
  indexHtml,
  /<title>Hakbeom Archive<\/title>/,
  'Browser tab title should use the final Hakbeom Archive product name.'
);

assert.match(
  styles,
  /\.title-screen\s*\{[\s\S]*?z-index\s*:\s*20[\s\S]*?\.ba-modal-layer\s*\{[\s\S]*?z-index\s*:\s*30/i,
  'Save/load/config modals should layer above the title screen.'
);

assert.match(
  styles,
  /\.title-screen::before\s*\{[\s\S]*?url\('\/assets\/bg\/school-rain-hallway\.png'\)[\s\S]*?background-size:\s*cover/i,
  'Title screen should use the generated rainy hallway background instead of a flat generic gradient.'
);

assert.match(
  styles,
  /\.title-brand\s*\{[\s\S]*?pointer-events:\s*none[\s\S]*?\.title-memory-card\s*\{/i,
  'Title brand area should integrate the logo directly into the scene with a non-text memory motif, not a giant glass card.'
);

assert.match(
  styles,
  /\.title-menu\s*\{[\s\S]*?right:\s*clamp\([\s\S]*?bottom:\s*clamp\([\s\S]*?background:\s*transparent/i,
  'Title menu should be a lower-right slim cinematic stack instead of a bulky glass navigation dock.'
);

assert.match(
  styles,
  /\.title-menu button\s*\{[\s\S]*?clip-path\s*:/i,
  'Title menu buttons should use slanted BA-style panels.'
);

assert.match(
  styles,
  /\.chapter-card[\s\S]*?animation:\s*chapterCardIn/i,
  'Chapter card should have its own polished transition.'
);

const gameButtonsMatch = visualNovelSource.match(/<div className="game-system-buttons"[\s\S]*?<\/div>/);
assert.ok(gameButtonsMatch, 'Game screen should still expose a compact save/load system button cluster.');
assert.match(
  gameButtonsMatch[0],
  /<button type="button" onClick=\{\(\) => setSaveLoadMode\('save'\)\}>SAVE<\/button>[\s\S]*?<button type="button" onClick=\{\(\) => setSaveLoadMode\('load'\)\}>LOAD<\/button>[\s\S]*?<button type="button" onClick=\{openGallery\}>CG<\/button>/,
  'Game screen system buttons should keep explicit SAVE, LOAD, and adjacent CG actions.'
);
assert.doesNotMatch(
  gameButtonsMatch[0],
  /Q\.SAVE|Q\.LOAD|CONFIG|QuickGalleryButton/,
  'Game screen system buttons should not duplicate quick-save, quick-load, config, or quick-menu gallery controls in the top-left.'
);

assert.doesNotMatch(
  component,
  /RouteStatusChip|className="route-chip"/,
  'Game screen should not show the top-corner route/affection label chip during normal play.'
);

assert.doesNotMatch(
  component,
  /rewardFeedback|setRewardFeedback|affection-feedback|선택이 기록됨/i,
  'Choice rewards should update state silently without stale reward-feedback state or recorded toast feedback.'
);

assert.match(
  visualNovelSource,
  /const \[gameState,\s*setGameState\] = useState\(createInitialGameState\)/,
  'Visual novel should track persistent dating-sim state for affection, flags, choices, and endings.'
);

assert.match(
  visualNovelSource,
  /const saveGame = useCallback[\s\S]*?persistSaveSlot[\s\S]*?buildSavePayload/,
  'Visual novel should persist full save slots.'
);

assert.match(
  component,
  /className="save-slot-thumb"[\s\S]*className="save-slot-affection"/,
  'Save slots should render thumbnail and affection metadata.'
);
assert.match(
  component,
  /normalizeSaveSummary\(payload\?\.summary\)[\s\S]*?save-slot-chapter[\s\S]*?save-slot-route[\s\S]*?save-slot-lock/,
  'Save slots should render normalized chapter, route, and real route-lock display fields instead of raw localStorage summaries.'
);
assert.match(
  component,
  /const payloadTitle = safeText\(payload\?\.title\);[\s\S]*?const payloadLine = safeText\(payload\?\.line\);[\s\S]*?summary\.chapterTitle \|\| payloadTitle[\s\S]*?summary\.linePreview \|\| payloadLine/,
  'Save slots should sanitize old-save title and line fallbacks before rendering localStorage values.'
);
assert.match(
  styles,
  /\.save-slot-route\.locked[\s\S]*?\.save-slot-lock/,
  'Save/load route-lock state should be styled inside the sub-screen card only.'
);

assert.match(
  saveCodec,
  /summary:[\s\S]*normalizeSaveSummary/,
  'Save codec should persist normalized summary metadata.'
);

assert.match(
  visualNovelSource,
  /const loadGame = useCallback[\s\S]*?normalizeSavePayload\(payload,\s*\{ scenario,\s*fallbackIndex:\s*initialIndex,\s*routeConfig \}\)[\s\S]*?setDirectorState\(safePayload\.directorState \|\| replayDirectorState\(scenario,\s*safeIndex,\s*directorDefaults\)\)[\s\S]*?setIndex\(safeIndex\)/,
  'Visual novel should restore saved director state or replay director state when loading.'
);

assert.match(
  visualNovelSource,
  /applyRouteRewards\(previous,\s*current,\s*choiceIndex,\s*routeConfig\)/,
  'Choice and phone handling should apply affection/flag rewards.'
);

assert.match(
  visualNovelSource,
  /resolveEndingRoute\(gameState,\s*episodeInfo\.endingRules/,
  'Ending gates should resolve route endings from affection and flags.'
);

assert.match(
  app,
  /initialScreen=\{params\.get\('screen'\) \|\| \(params\.has\('id'\) \|\| params\.has\('mode'\) \? 'game' : 'title'\)\}/,
  'App should boot to title by default but preserve direct preview URLs.'
);

assert.match(
  component,
  /initialItemId = ''[\s\S]*?firstIndexOfItem\(scenario, initialItemId, initialMode\)/,
  'Visual novel should support opening a specific scenario item for testing 1/2/3-choice layouts.'
);

assert.match(
  app,
  /initialItemId=\{params\.get\('id'\) \|\| ''\}/,
  'App should expose ?id=... so 1-choice and 2-choice examples can be previewed directly.'
);

assert.doesNotMatch(
  app,
  /\/assets\/bgm\//,
  'App should not wire short placeholder BGM/ambient loops into the VN runtime.'
);

assert.match(
  app,
  /backgroundSrc="\/assets\/bg\/school-rain-hallway\.png"/,
  'App should use the generated PNG VN background bundle as the default background.'
);

const scenarioSource = readScenarioSourceTree();

function displayedStoryTexts() {
  return scenario.flatMap((item) => {
    if (item.kind === 'chapter') return [];
    const texts = [];
    if (item.text) texts.push({ id: item.id, text: item.text });
    for (const [index, message] of (item.messages || []).entries()) {
      if (message.text) texts.push({ id: `${item.id}.messages[${index}]`, text: message.text });
    }
    return texts;
  });
}

function assertNoDisplayedStoryPattern(pattern, label) {
  const hits = displayedStoryTexts().filter((entry) => pattern.test(entry.text));
  assert.deepEqual(
    hits.map((entry) => entry.id),
    [],
    `${label}: ${hits.map((entry) => `${entry.id}: ${entry.text}`).join('\n')}`
  );
}

function assertNoLongDuplicateDisplayedTexts(label) {
  const seen = new Map();
  for (const entry of displayedStoryTexts()) {
    const normalized = entry.text.replace(/\s+/g, ' ').trim();
    if (normalized.length < 70) continue;
    if (!seen.has(normalized)) seen.set(normalized, []);
    seen.get(normalized).push(entry.id);
  }
  const duplicates = [...seen.entries()].filter(([, ids]) => ids.length > 1);
  assert.deepEqual(
    duplicates.map(([text, ids]) => `${ids.join(', ')}: ${text}`),
    [],
    label
  );
}

function normalizeRouteTemplateText(text) {
  return text
    .replace(/현겸|욱현|재성|상원|상욱|준혁|도훈|하음|윤호/g, '<NAME>')
    .replace(/hyeongyeom|ukhyun|jaeseong|sangwon|sanguk|junhyeok|dohun|haeum|yunho/g, '<ID>')
    .replace(/같은 우산|접힌 노트|방송실 너머|방송 신호|아카이브 원본|체육관 동선|지도 위 빈칸|밤의 편의점|문소리의 잔향|비 갠 옥상/g, '<MOTIF>')
    .replace(/우산|노트|마이크|명단|실밥|지도|영수증|박자|종이/g, '<OBJECT>')
    .replace(/비닐 포장지|대본 여백|방송 대본|결재표|도착 시간표|최단 경로표|가격표|박자표|안전 표지판/g, '<TRIGGER>')
    .replace(/빗물 냄새|연필 자국|스피커 잡음|정정 잉크|체육관 먼지|지도 잉크|캔 따는 소리|피아노 잔향|옥상 바람/g, '<SENSE>')
    .replace(/\s+/g, ' ')
    .trim();
}

function assertNoNormalizedRouteTemplateDuplicates(label) {
  const seen = new Map();
  for (const entry of displayedStoryTexts()) {
    const normalized = normalizeRouteTemplateText(entry.text);
    if (normalized.length < 70) continue;
    if (!seen.has(normalized)) seen.set(normalized, []);
    seen.get(normalized).push(entry.id);
  }
  const duplicates = [...seen.entries()].filter(([, ids]) => ids.length > 1);
  assert.deepEqual(
    duplicates.map(([text, ids]) => `${ids.join(', ')}: ${text}`),
    [],
    label
  );
}

function displayedTextsForIdPattern(pattern) {
  return displayedStoryTexts().filter((entry) => pattern.test(entry.id));
}

function routeLockOrEndingIdPattern(routeId) {
  const escapedRouteId = routeId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(
    `^(?:day10-lock-${escapedRouteId}|day1[1-4]-${escapedRouteId}(?:-[^.]+)?|ending-${escapedRouteId})(?:$|\\.)`
  );
}

assert.match(
  readSource('src/data/scenario.js'),
  /export \{ episodeInfo, scenario \} from '\.\/scenario\/index\.js';/,
  'Scenario facade should re-export the modular scenario pack.'
);
assert.ok(
  existsSync('src/data/scenario/day4.js') && existsSync('src/data/scenario/index.js'),
  'Longform scenario content should be split into modules before Batch 2 expansion.'
);

const storyExpansionPlanPath = 'docs/story-expansion-plan.md';
assert.ok(existsSync(storyExpansionPlanPath), 'Story expansion plan should exist for the longform Season 1 roadmap.');
const storyExpansionPlan = readSource(storyExpansionPlanPath);
assert.match(
  storyExpansionPlan,
  /90\s*분|90-minute|2\s*[–-]\s*3\s*시간|2\s*[–-]\s*3\s*hour/i,
  'Story expansion plan should define a 90-minute minimum and 2–3 hour preferred Season 1 target.'
);
for (const routeName of ['현겸', '욱현', '재성', '상원', '상욱', '준혁', '도훈', '하음', '윤호']) {
  assert.match(storyExpansionPlan, new RegExp(routeName), `Story expansion plan should include route target ${routeName}.`);
}

assert.match(
  readSource('docs/scenario-authoring.md'),
  /route lock|route-lock|루트락|3개|placeholder|누락|generated background|배경 provenance|manifest/i,
  'Scenario authoring guide should document longform route locks, placeholder photos, <=3 choices, and generated background provenance.'
);
assert.match(
  readSource('docs/development-guide.md'),
  /post-Batch-1|Batch 1|모듈화|dominant route|대표 루트|save summary|저장 요약/i,
  'Development guide should document the post-Batch-1 modularization checkpoint and dominant-route save summary expectation.'
);

assert.match(
  scenarioSource,
  /chapter:\s*'day-2'/,
  'Scenario should include a second-day route chapter.'
);

assert.match(
  scenarioSource,
  /id:\s*'day3-chapter-card'[\s\S]*chapter:\s*'day-3'[\s\S]*Day 3 · 점심시간 선택/,
  'Scenario should include a third-day romance chapter before the ending.'
);

assert.match(
  scenarioSource,
  /kind:\s*'chapter'[\s\S]*chapter:\s*'day-1'[\s\S]*kind:\s*'chapter'[\s\S]*chapter:\s*'day-2'/,
  'Scenario should include explicit Day 1 and Day 2 chapter transition beats.'
);

assert.match(
  scenarioSource,
  /type:\s*'BGM'[\s\S]*cue:\s*'bgmRain'[\s\S]*type:\s*'AMBIENT'[\s\S]*cue:\s*'ambientRain'/,
  'Scenario should start with declarative BGM and ambient cues.'
);

const generatedBackgrounds = [
  'school-rain-hallway',
  'student-council-room-evening',
  'school-gate-rain',
  'school-morning-hallway',
  'library-window',
  'broadcast-room',
  'archive-club-room-evening',
  'school-courtyard-blue-hour',
  'gym-corridor-evening',
  'music-room-late-afternoon',
  'convenience-store-night',
  'rooftop-after-rain'
];

assert.ok(
  existsSync('.codex/skills/generate2dmap/SKILL.md'),
  'agent-sprite-forge generate2dmap skill should be installed project-locally instead of relying on ad-hoc SVG art.'
);
assert.ok(
  existsSync('.codex/skills/generate2dmap/scripts/compose_layered_preview.py'),
  'agent-sprite-forge map post-processing scripts should be available in the repo-local install.'
);
const forgeSource = readSource('.codex/agent-sprite-forge/SOURCE.txt');
assert.match(
  forgeSource,
  /github\.com\/0x0funky\/agent-sprite-forge[\s\S]*fff651a89223b044ccfc0b75ed9f3754c6d739b1/,
  'Repo should record the GitHub source and commit used for the agent-sprite-forge install.'
);
const forgeManifest = readSource('public/assets/bg/agent-sprite-forge-manifest.json');
assert.match(
  forgeManifest,
  /"tool":\s*"agent-sprite-forge\/generate2dmap"[\s\S]*"visualAssetSource":\s*"built-in image_gen"[\s\S]*"mapMode":\s*"baked_scene_mode"[\s\S]*"visualModel":\s*"baked_raster"/,
  'VN background bundle should be tied to the installed agent-sprite-forge generate2dmap baked raster workflow and real image generation.'
);
assert.match(
  forgeManifest,
  /"sourceGeneratedImage":\s*"\/home\/jio\/\.codex\/generated_images\/[^"]+\.png"/,
  'VN background manifest should record the real generated image source copied into the project.'
);

for (const backgroundName of generatedBackgrounds) {
  const backgroundPath = `public/assets/bg/${backgroundName}.png`;
  assert.ok(
    existsSync(backgroundPath),
    `Generated VN background should exist as a raster PNG: ${backgroundName}.png`
  );
  assert.deepEqual(
    readPngSize(backgroundPath),
    { width: 1129, height: 524 },
    `Generated VN background should be imported at the game stage size: ${backgroundName}.png`
  );
  assert.ok(
    statSync(backgroundPath).size > 500_000,
    `Generated VN background should be a real imagegen raster asset, not a tiny procedural placeholder: ${backgroundName}.png`
  );
  assert.ok(
    !existsSync(`public/assets/bg/${backgroundName}.svg`),
    `Generated VN background should not keep rejected SVG art: ${backgroundName}.svg`
  );
  assert.ok(
    existsSync(`public/assets/bg/${backgroundName}.prompt.txt`),
    `Generated VN background should keep its image prompt metadata: ${backgroundName}.prompt.txt`
  );
}

const scenarioBackgroundRefs = [...scenarioSource.matchAll(/\/assets\/bg\/[^']+\.png/g)].map((match) => match[0]);
assert.ok(
  new Set(scenarioBackgroundRefs).size >= 6,
  'Scenario BCG directives should use multiple generated PNG VN backgrounds instead of one repeated UI image.'
);

assert.doesNotMatch(
  scenarioSource,
  /type:\s*'BCG'[\s\S]{0,120}\/assets\/ui\/image0_13_6\.jpg/,
  'Scenario BCG directives should not keep routing every scene to the old UI placeholder background.'
);

assert.match(
  scenarioSource,
  /kind:\s*'phone'/,
  'Scenario should include phone message events.'
);

assert.match(
  scenarioSource,
  /messages:\s*\[[\s\S]*from:\s*'hyeongyeom'[\s\S]*from:\s*'hakbeom'[\s\S]*replies:/,
  'Scenario should author phone scenes as multi-message timelines.'
);

assert.match(
  scenarioSource,
  /id:\s*'day2-morning-message'[\s\S]*?chapter:\s*'day-2'[\s\S]*?kind:\s*'phone'/,
  'Day 2 should include a phone message beat, not only ordinary dialogue.'
);

assert.ok(
  existsSync('public/assets/character/hyungyeom.png'),
  'Hyungyeom character PNG should be served from public assets.'
);

assert.match(
  scenarioSource,
  /src:\s*'\/assets\/character\/hyungyeom\.png'/,
  'Hyungyeom SCG should use the provided PNG asset.'
);

assert.match(
  scenarioSource,
  /expression:\s*'surprised'[\s\S]*expression:\s*'quiet'/,
  'Scenario should use a broader Hyungyeom expression vocabulary.'
);

assert.match(
  scenarioSource,
  /variants:\s*\[[\s\S]*requiredFlags:[\s\S]*shared_umbrella[\s\S]*text:/,
  'Scenario should include route-state text variants for Hyungyeom reactions.'
);

assert.doesNotMatch(
  scenarioSource,
  /src:\s*'\/assets\/character\/hyeongyeom\.svg'/,
  'Hyungyeom SCG should not use the old SVG placeholder.'
);

for (const placeholderText of [
  'choice-one',
  'choice-two',
  'choice-first',
  '어른의 카드를 꺼낸다.',
  '(입이 움직이지 않는다.)',
  '(앞이 보이지 않는다.)',
  '(몸이 잘 움직이지 않는다.)',
  '요약은 끝났고'
]) {
  assert.equal(
    scenarioSource.includes(placeholderText),
    false,
    `Scenario should not contain placeholder/example content: ${placeholderText}`
  );
}

assert.match(
  scenarioSource,
  /title:\s*'학범 아카이브'[\s\S]*sectionTitle:\s*'프롤로그: 봄비의 새 학기'/,
  'Scenario should use the Hakbeom Archive episode title instead of the old Hakbeom Love branding.'
);

assert.match(
  scenarioSource,
  /id:\s*'choice-approach'[\s\S]*?choices:\s*\[[\s\S]*?'우산, 같이 쓸래\?'[\s\S]*?'학생회 일은 여기까지\. 내가 데려다줄게\.'[\s\S]*?'오늘따라 네가 신경 쓰여\.'/,
  'Scenario should include a main three-option dating-sim choice from Hakbeom’s perspective.'
);

assert.match(
  scenarioSource,
  /id:\s*'choice-walk-home'[\s\S]*?choices:\s*\[[\s\S]*?'조금만 천천히 걷자고 한다\.'[\s\S]*?'편의점에서 따뜻한 걸 사주겠다고 한다\.'/,
  'Scenario should include a real two-option follow-up choice from Hakbeom’s perspective.'
);

const day1ActionChoice = scenario.find((item) => item.id === 'choice-day1-after-school-action');
assert.ok(day1ActionChoice, 'Day 1 should include a free-action hub before the story returns to the main flow.');
assert.deepEqual(
  day1ActionChoice.choices,
  [
    '현겸과 현관에서 조금 더 걷는다.',
    '도서관에 들러 욱현이 남긴 접힌 노트를 펼친다.',
    '방송실 호출에 답해 재성이 마이크를 끈 이유를 묻는다.'
  ],
  'Day 1 free action should let the player choose a location/character action, not only a response tone.'
);
assert.deepEqual(
  day1ActionChoice.next,
  ['day1-action-hyeongyeom', 'day1-action-ukhyun', 'day1-action-jaeseong'],
  'Day 1 free action should route to concrete action scenes.'
);

const day2ActionChoice = scenario.find((item) => item.id === 'choice-day2-free-action');
assert.ok(day2ActionChoice, 'Day 2 should include a second free-action hub before Day 3.');
assert.deepEqual(
  day2ActionChoice.choices,
  [
    '현겸에게 우산을 핑계로 한 번 더 말을 건다.',
    '도서관 창가에서 욱현의 답장을 기다린다.',
    '방송실에서 재성이 꺼 둔 마이크 앞에 선다.'
  ],
  'Day 2 free action should make the player choose what Hakbeom does after school.'
);


function isEquivalentScenarioTarget(currentId, targetId, item) {
  if (currentId === targetId) return true;
  if (targetId === 'day2-chapter-card') return item?.chapter === 'day-2';
  return false;
}

function enumerateScenarioPathsUntil(startId, targetId, maxSteps = 640) {
  const idToIndex = new Map(scenario.map((item, index) => [item.id, index]));
  const paths = [];
  const stack = [{ id: startId, path: [] }];
  while (stack.length > 0) {
    const current = stack.pop();
    const index = idToIndex.get(current.id);
    assert.notEqual(index, undefined, `Scenario path target should exist: ${current.id}`);
    const nextPath = [...current.path, current.id];
    assert.ok(nextPath.length <= maxSteps, `Scenario path to ${targetId} should terminate before ${maxSteps} steps.`);
    const item = scenario[index];
    if (isEquivalentScenarioTarget(current.id, targetId, item)) {
      paths.push(nextPath);
      continue;
    }
    let targets = [];
    if ((item.type === 'choice' || (item.type === 'phone' && (item.replies || []).length > 0)) && (item.next || item.choiceNext)) {
      targets = item.next || item.choiceNext;
    } else if (item.nextId) {
      targets = [item.nextId];
    } else if (index + 1 < scenario.length) {
      targets = [scenario[index + 1].id];
    }
    for (const target of targets) {
      if (!target || nextPath.includes(target)) continue;
      stack.push({ id: target, path: nextPath });
    }
  }
  return paths;
}

function displayedPathText(pathIds) {
  return pathIds
    .map((id) => scenario.find((item) => item.id === id))
    .filter(Boolean)
    .flatMap((item) => [item.name, item.text, ...(item.messages || []).map((message) => message.text || '')])
    .filter(Boolean)
    .join('\n');
}

const allHeroineNames = ['현겸', '욱현', '재성', '상원', '상욱', '준혁', '도훈', '하음', '윤호'];
const day1ToDay2Paths = enumerateScenarioPathsUntil('day1-chapter-card', 'day2-chapter-card');
assert.ok(day1ToDay2Paths.length > 1, 'Day 1 path enumeration should cover the early free-action choices.');
for (const path of day1ToDay2Paths) {
  const pathText = displayedPathText(path);
  for (const routeName of allHeroineNames) {
    assert.ok(pathText.includes(routeName), `Every Day 1 path should show all nine heroines before Day 2: ${routeName}`);
  }
}

function displayedChapterText(chapterId) {
  return scenario
    .filter((item) => item.chapter === chapterId)
    .flatMap((item) => [item.name, item.text, ...(item.messages || []).map((message) => message.text || ''), ...(item.choices || [])])
    .filter(Boolean)
    .join('\n');
}

for (const day of [2, 3, 4, 5, 6, 7]) {
  const chapterText = displayedChapterText(`day-${day}`);
  for (const routeName of allHeroineNames) {
    assert.ok(
      chapterText.includes(routeName),
      `Day ${day} common-route material should keep the nine heroines evenly present before post-Day-7 narrowing: ${routeName}`
    );
  }
}

for (const choiceId of ['day8-choice-morning', 'day9-choice-prep', 'day10-choice-lock-group']) {
  assert.ok(
    scenario.some((item) => item.id === choiceId && item.type === 'choice'),
    `${choiceId} should exist so post-Day-7 episodes narrow attention through explicit heroine groups.`
  );
}

const day2FestivalChain = [
  'day2-moe-hyeongyeom-lunch-side',
  'day2-moe-sangwon-pen-line',
  'day2-moe-jaeseong-preview',
  'day2-festival-briefing',
  'day2-sangwon-forms',
  'day2-ukhyun-library-request',
  'day2-jaeseong-broadcast-invite',
  'day2-sanguk-gym-poster',
  'day2-junhyeok-map-note',
  'day2-dohun-coupon',
  'day2-haeum-performance-list',
  'day2-yunho-rooftop-wait'
];
assert.equal(
  scenario.find((item) => item.id === 'day2-introduction-briefing')?.nextId,
  day2FestivalChain[0],
  'Day 2 route branches should enter the mandatory culture-festival heroine introduction tour.'
);
for (let index = 0; index < day2FestivalChain.length - 1; index += 1) {
  const scene = scenario.find((item) => item.id === day2FestivalChain[index]);
  assert.equal(
    scene?.nextId,
    day2FestivalChain[index + 1],
    `${day2FestivalChain[index]} should continue to ${day2FestivalChain[index + 1]}.`
  );
}
assert.equal(
  scenario.findIndex((item) => item.id === 'day2-yunho-rooftop-wait') + 1,
  scenario.findIndex((item) => item.id === 'day2-after-school'),
  'Day 2 heroine introduction tour should end naturally at the shared after-school bridge instead of looping to the free-action hub.'
);

const day1ToDay3Paths = enumerateScenarioPathsUntil('day1-chapter-card', 'day3-chapter-card');
assert.ok(day1ToDay3Paths.length > day1ToDay2Paths.length, 'Pre-Day-3 path enumeration should include Day 2 branch combinations.');
for (const path of day1ToDay3Paths) {
  assert.ok(path.includes('day2-introduction-briefing'), 'Every Day 2 branch should return to the mandatory culture-festival introduction tour.');
  assert.ok(path.includes('day2-yunho-rooftop-wait'), 'Every path should reach the final Day 2 heroine introduction before Day 3.');
  const pathText = displayedPathText(path);
  for (const routeName of allHeroineNames) {
    assert.ok(pathText.includes(routeName), `Every player path should keep all nine heroines visible through the Day 2 balanced route: ${routeName}`);
  }
}

const earlyEndingGateEntrances = scenario
  .filter((item) => item.id !== 'day14-closing')
  .filter((item) => item.nextId === 'ending-promise' || (item.next || []).includes('ending-promise') || Object.values(item.endingNext || {}).includes('ending-promise'))
  .map((item) => item.id);
assert.deepEqual(
  earlyEndingGateEntrances,
  [],
  'No route should enter the ending gate before Day 14; early promises must continue into the full festival route.'
);

for (const awkwardPhrase of [
  '축제 준비 문화제 준비 채팅방이 준비 기록처럼 울렸다.',
  '마음보다 먼저 숨긴 마음이 있었다.',
  '서두르지 않는 마음 확인를 했다.',
  '상욱과 준비 장소을 다시 달린다.'
]) {
  assert.doesNotMatch(
    scenarioSource,
    new RegExp(awkwardPhrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Scenario copy should not contain awkward phrase: ${awkwardPhrase}`
  );
}
const day3StartIndex = scenario.findIndex((item) => item.id === 'day3-chapter-card');
const preDay3Rewards = scenario
  .slice(0, day3StartIndex)
  .flatMap((item) => item.rewards || []);
for (const [routeId, requiredFlag] of [
  ['ukhyun', 'ukhyun_early_interest'],
  ['jaeseong', 'jaeseong_early_signal']
]) {
  assert.ok(
    preDay3Rewards.some((reward) => reward.affection?.[routeId] > 0 && (reward.flags || []).includes(requiredFlag)),
    `${routeId} should have a meaningful affection/flag route seed before Day 3.`
  );
}

for (const [sceneId, expectedName] of [
  ['day1-action-ukhyun', '욱현'],
  ['day1-action-jaeseong', '재성'],
  ['day2-action-ukhyun', '욱현'],
  ['day2-action-jaeseong', '재성']
]) {
  const scene = scenario.find((item) => item.id === sceneId);
  assert.equal(scene?.name, expectedName, `${sceneId} should be a direct dialogue scene with ${expectedName}, not a narration-only detour.`);
}

for (const [sceneId, forbiddenNextId] of [
  ['day1-action-ukhyun', 'hallway-lights'],
  ['day1-action-jaeseong', 'hallway-lights'],
  ['day2-action-ukhyun', 'day2-after-school'],
  ['day2-action-jaeseong', 'day2-after-school']
]) {
  const scene = scenario.find((item) => item.id === sceneId);
  assert.notEqual(
    scene?.nextId,
    forbiddenNextId,
    `${sceneId} should not snap back to the Hyungyeom common scene after the player chose another route.`
  );
}

for (const [sceneId, expectedNextName] of [
  ['day1-action-ukhyun', '욱현'],
  ['day1-action-jaeseong', '재성']
]) {
  const scene = scenario.find((item) => item.id === sceneId);
  const nextScene = scenario.find((item) => item.id === scene?.nextId);
  assert.equal(
    nextScene?.name,
    expectedNextName,
    `${sceneId} should continue with ${expectedNextName} instead of suddenly showing Hyungyeom.`
  );
}

for (const sceneId of ['day2-action-ukhyun', 'day2-action-jaeseong']) {
  const scene = scenario.find((item) => item.id === sceneId);
  assert.equal(
    scene?.nextId,
    'day2-introduction-briefing',
    `${sceneId} should return to the latest shared culture-festival introduction tour instead of cutting to a Hyungyeom scene.`
  );
}

assert.match(
  scenarioSource,
  /id:\s*'choice-promise'[\s\S]*?choices:\s*\[[\s\S]*?'손을 잡는다\.'/,
  'Scenario should keep a real one-option confirmation beat for the existing single-choice layout.'
);

assert.match(
  scenarioSource,
  /id:\s*'choice-promise'[\s\S]*?next:\s*\['season1-bridge-after-promise'\]/,
  'Promise choice should enter the Season 1 bridge instead of ending immediately.'
);
assert.match(
  scenarioSource,
  /id:\s*'season1-bridge-after-promise'[\s\S]*?id:\s*'choice-season1-continue'[\s\S]*?next:\s*\['day4-chapter-card',\s*'day4-chapter-card'\]/,
  'Season 1 bridge should preserve the promise beat while forcing every playthrough onward to Day 4 and eventually Day 14.'
);
assert.match(
  scenarioSource,
  /id:\s*'day4-chapter-card'[\s\S]*?chapter:\s*'day-4'[\s\S]*?방과 후 동아리 순회/,
  'Scenario should add a reachable Day 4 longform chapter card.'
);
assert.match(
  scenarioSource,
  /id:\s*'day4-archive-close'[\s\S]*?nextId:\s*'day5-chapter-card'/,
  'Day 4 should continue into Day 5 after Batch 2 expansion instead of falling back to the early ending.'
);
assert.match(
  scenarioSource,
  /id:\s*'day5-chapter-card'[\s\S]*?chapter:\s*'day-5'[\s\S]*?작은 소문/,
  'Scenario should add a reachable Day 5 route-seed chapter card.'
);
for (const routeName of ['상원', '상욱', '준혁', '도훈', '하음', '윤호']) {
  assert.match(scenarioSource, new RegExp(`name:\\s*'${routeName}'|${routeName}`), `Day 4 story should introduce ${routeName}.`);
}
assert.match(
  scenarioSource,
  /id:\s*'choice-day4-focus-a'[\s\S]*?choices:\s*\[[\s\S]*?상원[\s\S]*?상욱[\s\S]*?준혁[\s\S]*?next:\s*\[[\s\S]*?day4-sangwon-focus[\s\S]*?day4-sanguk-focus[\s\S]*?day4-junhyeok-focus/,
  'Day 4 should split the first three new route focus options into a 3-choice screen.'
);
assert.match(
  scenarioSource,
  /id:\s*'choice-day4-focus-b'[\s\S]*?choices:\s*\[[\s\S]*?도훈[\s\S]*?하음[\s\S]*?윤호[\s\S]*?next:\s*\[[\s\S]*?day4-dohun-focus[\s\S]*?day4-haeum-focus[\s\S]*?day4-yunho-focus/,
  'Day 4 should split the second three new route focus options into a 3-choice screen.'
);
assert.match(
  scenarioSource,
  /id:\s*'choice-day5-school-shift'[\s\S]*?choices:\s*\[[\s\S]*?상원[\s\S]*?상욱[\s\S]*?준혁[\s\S]*?next:\s*\[[\s\S]*?day5-sangwon-archive-desk[\s\S]*?day5-sanguk-gym-start[\s\S]*?day5-junhyeok-library-corner/,
  'Day 5 should deepen the first three route seeds with a 3-choice screen.'
);
assert.match(
  scenarioSource,
  /id:\s*'choice-day5-after-school-shift'[\s\S]*?choices:\s*\[[\s\S]*?도훈[\s\S]*?하음[\s\S]*?윤호[\s\S]*?next:\s*\[[\s\S]*?day5-dohun-store-arrival[\s\S]*?day5-haeum-music-room[\s\S]*?day5-yunho-rooftop/,
  'Day 5 should deepen the second three route seeds with a 3-choice screen.'
);
assert.match(
  scenarioSource,
  /id:\s*['"]day5-season-hook['"][\s\S]*?nextId:\s*['"]day6-chapter-card['"]/,
  'Day 5 should continue into Day 6 after the common-route expansion.'
);
for (const day of [6, 7, 8]) {
  assert.ok(
    scenario.some((item) => item.id === `day${day}-chapter-card` && item.chapter === `day-${day}`),
    `Scenario should include a reachable Day ${day} common-route expansion chapter.`
  );
}
assert.ok(
  scenario.some((item) => item.id === 'day8-closing' && item.nextId === 'day9-chapter-card'),
  'Day 8 should continue into Day 9 after the route-pressure expansion.'
);
for (const day of [9, 10]) {
  assert.ok(
    scenario.some((item) => item.id === `day${day}-chapter-card` && item.chapter === `day-${day}`),
    `Scenario should include a reachable Day ${day} route-pressure chapter.`
  );
}
assert.ok(
  scenario.some((item) => item.id === 'day10-closing' && item.nextId === 'day11-chapter-card'),
  'Day 10 should continue into locked-route payoff chapters after the route lock is established.'
);
for (const routeId of ['hyeongyeom', 'ukhyun', 'jaeseong', 'sangwon', 'sanguk', 'junhyeok', 'dohun', 'haeum', 'yunho']) {
  assert.ok(
    scenario.some((item) => (item.rewards || []).some((reward) => (reward.flags || []).includes(`route_lock_${routeId}`))),
    `Day 10 route-lock setup should include explicit route_lock_${routeId}.`
  );
  assert.ok(
    (episodeInfo.endingRules || []).some((rule) => rule.id === routeId && (rule.flags || []).includes(`route_lock_${routeId}`)),
    `Episode ending rules should resolve route_lock_${routeId} into a deterministic route id.`
  );
}
assert.ok(
  scenario.filter((item) => item.id?.startsWith('day10-choice-lock-')).every((item) => (item.choices || []).length <= 3),
  'Day 10 route-lock choices should use 3x3 grouping instead of a 9-option choice.'
);
for (const day of [11, 12, 13, 14]) {
  assert.ok(
    scenario.some((item) => item.id === `day${day}-chapter-card` && item.chapter === `day-${day}`),
    `Scenario should include a reachable Day ${day} locked-route payoff chapter.`
  );
  const gate = scenario.find((item) => item.id === `day${day}-route-gate`);
  assert.ok(gate?.endingGate, `Day ${day} should route deterministically through the locked route gate.`);
  assert.equal(gate?.routeGate, true, `Day ${day} route gate should not unlock a terminal ending early.`);
  for (const routeId of ['hyeongyeom', 'ukhyun', 'jaeseong', 'sangwon', 'sanguk', 'junhyeok', 'dohun', 'haeum', 'yunho']) {
    assert.ok(
      gate.endingNext?.[routeId]?.startsWith(`day${day}-${routeId}-`),
      `Day ${day} route gate should include a ${routeId} payoff branch.`
    );
  }
}
assert.ok(
  scenario.some((item) => item.id === 'day14-closing' && item.nextId === 'ending-promise'),
  'Day 14 should reconnect to the existing ending gate after the longform payoff.'
);
for (const endingId of ['ending-hyeongyeom', 'ending-sangwon', 'ending-sanguk', 'ending-junhyeok', 'ending-dohun', 'ending-haeum', 'ending-yunho']) {
  assert.ok(
    scenario.some((item) => item.id === endingId && item.terminal === true),
    `${endingId} should be a terminal locked-route ending.`
  );
}
for (const backgroundName of ['archive-club-room-evening', 'school-courtyard-blue-hour', 'gym-corridor-evening']) {
  assert.match(
    scenarioSource,
    new RegExp(`/assets/bg/${backgroundName}\\.png`),
    `Scenario should connect required Batch 1 background ${backgroundName} through BCG directives.`
  );
  assert.match(
    forgeManifest,
    new RegExp(`"id":\\s*"${backgroundName}"[\\s\\S]*?"promptPath"`),
    `Background manifest should include provenance for ${backgroundName}.`
  );
}
for (const backgroundName of ['music-room-late-afternoon', 'convenience-store-night', 'rooftop-after-rain']) {
  assert.match(
    scenarioSource,
    new RegExp(`/assets/bg/${backgroundName}\\.png`),
    `Scenario should connect required Batch 2 background ${backgroundName} through BCG directives.`
  );
  assert.match(
    forgeManifest,
    new RegExp(`"id":\\s*"${backgroundName}"[\\s\\S]*?"promptPath"`),
    `Background manifest should include provenance for ${backgroundName}.`
  );
}
const runtimeChoices = scenario.filter((item) => item.type === 'choice' && !item.previewOnly);
for (const item of runtimeChoices) {
  assert.ok((item.choices || []).length <= 3, `${item.id} should not exceed the current 3-choice layout contract.`);
}

assert.match(
  scenarioSource,
  /endingRules:\s*\[[\s\S]*?id:\s*'good'[\s\S]*?affection:\s*\{ hyeongyeom:\s*6 \}[\s\S]*?id:\s*'normal'/,
  'Episode metadata should define dating-sim ending rules.'
);

assert.match(
  scenarioSource,
  /id:\s*'choice-approach'[\s\S]*?rewards:\s*\[[\s\S]*?affection:\s*\{ hyeongyeom:\s*2 \}[\s\S]*?flags:\s*\['shared_umbrella'\]/,
  'Main choice should grant affection and flags.'
);

assert.match(
  scenarioSource,
  /id:\s*'choice-promise'[\s\S]*?rewards:\s*\[[\s\S]*?flags:\s*\['promise_hand'\]/,
  'Promise choice should set an ending flag.'
);

assert.match(
  scenarioSource,
  /['"]?id['"]?\s*:\s*['"]ending-promise['"][\s\S]*?['"]?endingGate['"]?\s*:\s*true/,
  'Final scene should trigger ending resolution.'
);

assert.doesNotMatch(
  scenarioSource,
  /name:\s*'나'/,
  'Hakbeom is the protagonist, so the scenario should not create a separate speaker named 나.'
);

assert.doesNotMatch(
  scenarioSource,
  /그\s*애|그애/,
  'The love interest should be named 현겸 instead of the placeholder 그 애.'
);

assert.match(
  scenarioSource,
  /name:\s*'현겸'/,
  'Scenario should name the love interest 현겸.'
);

assert.doesNotMatch(
  scenarioSource,
  /현겸와|현겸는/,
  'Scenario should use natural Korean particles for 현겸.'
);

assert.doesNotMatch(
  scenarioSource,
  /리본가|리본를|리본는|호출음가|호출음를|실밥가|실밥를|12분가|12분를|박자을|박자은|명단가|명단를|명단는|종이을|노트은|노트을|신호은|복도은|지도은|장난기이|장난기은|온기이|온기은|논리이|논리은|의리이|의리은|윤호아/,
  'Generated route payoff prose should not keep template-produced Korean particle errors.'
);

assertNoDisplayedStoryPattern(
  /Day\s*\d+의|Day\s*\d+ 조사|Day\s*\d+ 기록표/,
  'Displayed story prose should not expose meta day labels outside chapter cards.'
);
assertNoDisplayedStoryPattern(
  /첫 단서가 되었다|같은 질문을 다른 목소리|축제 준비물 사이에서 자기 이름이 적힌 작은 표식|옥상 바람이 잠깐 멈춘 것 같았다/,
  'Displayed story prose should not contain generated route-template setup lines.'
);
assertNoDisplayedStoryPattern(
  /에게서 충돌이 가라앉은 뒤, 쉽게 보내지 못한 문장들이 남았다/,
  'Route phone scenes should not reuse the same generated post-conflict message setup.'
);
assertNoDisplayedStoryPattern(
  /같은 방향을 보고 있다는 증거|사라진 원본 이야기를 듣자마자 표정을 굳혔다|축제 인파 너머에서 .* 기다리고 있었다/,
  'Route payoff scenes should not reuse generated crisis/festival scaffolding.'
);
assertNoDisplayedStoryPattern(
  /이 사건, 누가 꾸민 건지 이제 알|내가 고른 건 단서가 아니라 너야|무대 뒤에서 학범은 .* 같은 대사를 세 번 연습했다/,
  'Confession and truth scenes should be individually authored per route.'
);
assertNoDisplayedStoryPattern(
  /윤호이|호출음는|실밥는|12분는/,
  'Displayed story prose should not contain known generated particle errors.'
);
assertNoLongDuplicateDisplayedTexts(
  'Displayed story prose should not contain long exact duplicate paragraphs; repeated route scaffolds must be rewritten.'
);
assertNoNormalizedRouteTemplateDuplicates(
  'Displayed story prose should not contain route-name-swapped template paragraphs.'
);
assertNoDisplayedStoryPattern(
  /성인|19금|18금|수위|미성년|성인\s*인증/,
  'Displayed story prose should not expose rating or adult-premise meta labels in-game.'
);
assertNoDisplayedStoryPattern(
  /성관계|섹스|정사|나체|속옷|강간|성기/,
  'Displayed story prose should keep romance implication-based and avoid explicit sexual vocabulary.'
);

const adultTensionRouteAnchors = {
  hyeongyeom: /질투|혼자 돌아가지|우산 아래.{0,24}(?:거리|가까|가지)|가지 마/,
  ukhyun: /읽지 않은.{0,24}(?:문장|노트)|접힌 노트.{0,24}(?:붙잡|가까|숨기)|도서관.{0,24}가까|시선.{0,24}(?:피하|붙잡|머물)/,
  jaeseong: /마이크.{0,24}꺼|장난.{0,24}(?:멈|끊|사라)|비공개.{0,24}(?:목소리|호출)|목소리.{0,24}(?:낮|떨|사라)/,
  sangwon: /증거.{0,24}(?:남|보관|지우지)|기록.{0,24}(?:남|닫|감추)|선택.{0,24}(?:남|증명|보관)|지우지/,
  sanguk: /손목.{0,24}(?:멈|놓|잡기 전)|숨.{0,24}(?:가빠|차|고르)|멈춰.{0,24}(?:세우|서)|뛰어.{0,24}(?:왔|와서)/,
  junhyeok: /계산.{0,24}(?:무너|밖|틀리)|경로.{0,24}(?:막|접|버리)|통제.{0,24}(?:무너|놓|못)|오차.{0,24}(?:아니|라고 부르지)/,
  dohun: /농담.{0,24}(?:끊|멈|사라)|질투|편의점.{0,24}(?:불빛|밤|영수증)|웃지.{0,24}(?:못|않)/,
  haeum: /숨.{0,24}(?:가빠|멎|흔들|고르)|박자.{0,24}(?:흐트러|무너|겹|늦)|음악실.{0,24}(?:밤|정적|가까)|정적.{0,24}(?:가까|깨|내려)/,
  yunho: /선배.{0,24}(?:늦게|부르|기다)|기다릴.{0,24}(?:게요|수|자리)|옥상.{0,24}(?:난간|기다|밤)|부르면.{0,24}(?:바로|갈)/
};
for (const [routeId, anchor] of Object.entries(adultTensionRouteAnchors)) {
  const routeEntries = displayedTextsForIdPattern(routeLockOrEndingIdPattern(routeId));
  assert.ok(
    routeEntries.some((entry) => !entry.id.startsWith(`ending-${routeId}`)),
    `${routeId} route should check post-lock story text, not only ending text.`
  );
  const routeTexts = routeEntries.map((entry) => entry.text).join('\n');
  assert.match(routeTexts, anchor, `${routeId} route should include its stronger romance/tension anchor after route lock.`);
}

assert.doesNotMatch(
  scenarioSource,
  /주인공은[\s\S]*?학범과 단둘이/,
  'Episode summary should not describe the protagonist as someone separate from Hakbeom.'
);

assert.match(
  scenarioSource,
  /summary:\s*'비가 내리던 방과 후, 학범은/,
  'Episode summary should explicitly frame Hakbeom as the protagonist.'
);

assert.match(
  scenarioSource,
  /directives:\s*\[[\s\S]*?type:\s*'BCG'[\s\S]*?type:\s*'SCG'[\s\S]*?action:\s*'enter'[\s\S]*?pos:\s*3/,
  'Scenario should demonstrate BCG plus SCG enter directives using the BA 1-5 position system.'
);

assert.match(
  scenarioSource,
  /type:\s*'SCG'[\s\S]*?action:\s*'move'[\s\S]*?pos:\s*4/,
  'Scenario should demonstrate SCG move directives.'
);

assert.match(
  scenarioSource,
  /type:\s*'SCG'[\s\S]*?action:\s*'delete'/,
  'Scenario should demonstrate SCG delete directives for character exit.'
);

assert.match(
  scenarioSource,
  /type:\s*'E'[\s\S]*?effect:\s*'blush'[\s\S]*?type:\s*'SE'/,
  'Scenario should demonstrate effect and sound directives.'
);

assert.match(
  scenarioSource,
  /type:\s*'E'[\s\S]*?flash:\s*true[\s\S]*?se:\s*'rain-step'/,
  'Scenario should demonstrate overlay flash plus audio cue directives.'
);

assert.match(
  visualNovelSource,
  /resolveNextIndex\(\{[\s\S]*?currentItem[\s\S]*?endingRules: episodeInfo\.endingRules \|\| \[\]/,
  'Dialogue and banner lines should support nextId/ending routes through the shared next resolver.'
);

assert.doesNotMatch(
  visualNovelSource,
  /\(index \+ 1\) % scenario\.length/,
  'Advancing past an ending or missing branch should not wrap back to the opening and repeat the same prototype.'
);

assert.match(
  vnEngine,
  /function resolveNextIndex\(\{[\s\S]*?currentItem\?\.terminal[\s\S]*?endingNext[\s\S]*?index \+ 1 < scenario\.length \? index \+ 1 : -1/,
  'Next-index resolution should support terminal endings, route-specific ending continuations, and no-wrap fallback.'
);

assert.match(
  visualNovelSource,
  /const targetIndex = resolveNextIndex\(\{[\s\S]*?endingRules: episodeInfo\.endingRules \|\| \[\][\s\S]*?\}\);[\s\S]*?if \(targetIndex < 0\) return;[\s\S]*?jumpToIndex\(targetIndex\)/,
  'goNextRaw should use the no-wrap next resolver and stop on terminal ending lines.'
);

assert.match(
  visualNovelSource,
  /currentItem\?\.type === 'phone' && getItemChoices\(currentItem\)\.length > 0/,
  'Message-only phone cutscenes should advance like dialogue; only reply phone scenes should block for input.'
);

assert.match(
  visualNovelSource,
  /replyPhoneScene = mode === 'phone' && getItemChoices\(item\)\.length > 0[\s\S]*?mode === 'choice' \|\| replyPhoneScene/,
  'Auto mode should pause only on reply phone scenes, not message-only phone cutscenes.'
);

assert.match(
  directorEngine,
  /function clearEphemeralCharacterState\(character\)[\s\S]*?effect:\s*undefined[\s\S]*?motion:\s*''/,
  'Character emotion badges and one-shot motions should be cleared before each new scenario item.'
);

assert.match(
  directorApplySource,
  /const retainedCharacters = item\?\.kind === 'chapter'[\s\S]*?\(state\.characters \|\| \[\]\)[\s\S]*?\.filter\(\(character\) => !character\.leaving\)[\s\S]*?\.map\(clearEphemeralCharacterState\)[\s\S]*?characters:\s*retainedCharacters/,
  'Director state should reset characters on chapter cards and not carry emotion badges/motions forward onto unrelated dialogue lines.'
);

assert.match(
  directorEngine,
  /function getCharacterPosition\(character\)[\s\S]*?character\?\.position \?\? character\?\.pos \?\? 3[\s\S]*?baseCharacters[\s\S]*?getCharacterPosition\(character\) !== nextCharacter\.position/,
  'Director state should drop same-slot characters before entering a replacement sprite so people do not overlap.'
);

assert.doesNotMatch(
  visualNovelSource.match(/const choose = useCallback[\s\S]*?\n  const openMenu/)?.[0] || '',
  /\(index \+ 1\) % scenario\.length/,
  'Choice fallback should not wrap to the opening when a branch target is missing.'
);

assert.match(
  characterSpriteSource,
  /const effectBadge = getEffectBadgeGeometry\(character,\s*width,\s*height\);[\s\S]*?<EffectBadge type=\{character\.effect\} \{\.\.\.effectBadge\} \/>/,
  'CharacterSprite should calculate a constrained character-relative effect badge instead of using a large fixed badge.'
);

assert.match(
  characterSpriteSource,
  /className="character-anchor"[\s\S]*?transform=\{`translate\(\$\{x\} \$\{y\}\)`\}[\s\S]*?<g\s+className=\{`character-wrap\$\{motionClass\}/,
  'CharacterSprite should keep absolute stage positioning on an outer anchor and run motion animations on an inner wrap.'
);

assert.doesNotMatch(
  characterSpriteSource,
  /className=\{`character-wrap[\s\S]*?transform=\{`translate\(\$\{x\} \$\{y\}\)`\}/,
  'Character motion classes must not live on the same SVG node as the absolute translate, or CSS transform animation will reset position.'
);

assert.match(
  effectGeometrySource,
  /radius:\s*clamp\(width \* 0\.045,\s*14,\s*20\)[\s\S]*?fontSize:\s*clamp\(width \* 0\.052,\s*16,\s*22\)/,
  'Effect badge geometry should keep icon radius/text size small enough for full-body PNG characters.'
);

assert.match(
  effectGeometrySource,
  /x:\s*clamp\(character\.effectX \?\? width \* 0\.72,\s*18,\s*width - 18\)[\s\S]*?y:\s*clamp\(character\.effectY \?\? height \* 0\.16,\s*28,\s*height \* 0\.32\)/,
  'Effect badge position should stay near the character head and inside the character box.'
);

assert.match(
  effectBadgeSource,
  /function EffectBadge\(\{ type, x, y, radius, fontSize \}\)[\s\S]*?<circle r=\{radius\}[\s\S]*?style=\{\{ fontSize \}\}/,
  'EffectBadge should consume dynamic radius/font size from getEffectBadgeGeometry.'
);

assert.match(
  effectBadgeSource,
  /className="effect-badge-anchor"\s+transform=\{`translate\(\$\{x\} \$\{y\}\)`\}[\s\S]*?className=\{`effect-badge effect-\$\{safeClassName\(type\)\}`\}/,
  'EffectBadge should separate SVG translate anchoring from the pop animation and sanitize dynamic effect classes.'
);


assert.match(
  bannerSceneSource,
  /<use href="#baSlantPanel" x="185" y="230" width="760" height="58" \/>/,
  'BannerScene should keep the reference banner panel at y=230.'
);

assert.match(
  component,
  /1:\s*\[230\]/,
  'Single-choice row should share the same y as BannerScene so one-option choices do not jump vertically.'
);


assert.match(
  component,
  /transform=\{`translate\(185 \$\{y\}\)`\}[\s\S]*?<use href="#baSlantPanel" x="0" y="0" width="760" height="58" \/>[\s\S]*?<ChoiceTextLines text=\{text\} \/>/,
  'Choice row panels should share the same x/width/height as BannerScene while delegating wrapped text rendering.'
);


assert.doesNotMatch(
  bannerSceneSource,
  /<rect width="1129" height="524" fill="#0C1725" opacity="0\.38" \/>/,
  'BannerScene should not use the old heavy dim behind the central banner.'
);

assert.match(
  bannerSceneSource,
  /<rect width="1129" height="524" fill="#0C263D" opacity="0\.16" \/>/,
  'BannerScene should use the same subtle dim as ChoiceScene so the card banner background does not look different.'
);

const scenarioIds = [...scenarioSource.matchAll(/id:\s*'([^']+)'/g)].map((match) => match[1]);
assert.ok(
  scenarioIds.length >= 26,
  'Scenario should be richer than the initial thin prototype and include enough distinct story beats.'
);

assert.match(
  scenarioSource,
  /id:\s*'choice-honesty'[\s\S]*?choices:\s*\[[\s\S]*?'솔직하게 내일도 만나고 싶다고 말한다\.'[\s\S]*?'장난처럼 넘기며 손을 내민다\.'[\s\S]*?next:\s*\['promise-honest',\s*'promise-joke'\]/,
  'Scenario should add a second meaningful two-choice romance beat before the ending.'
);

assert.match(
  scenarioSource,
  /id:\s*'choice-day3-distance'[\s\S]*?choices:\s*\[[\s\S]*?'네가 없으면 하루가 허전하다고 말한다\.'[\s\S]*?'우산 손잡이를 내밀며 장난스럽게 넘긴다\.'[\s\S]*?next:\s*\['day3-distance-honest',\s*'day3-distance-joke'\]/,
  'Scenario should add a third-day two-choice beat that deepens the confession route.'
);

assert.match(
  scenarioSource,
  /id:\s*'choice-day3-route-focus'[\s\S]*?'현겸에게 남은 말을 직접 묻는다\.'[\s\S]*?'욱현이 일부러 남긴 것 같은 노트를 펼친다\.'[\s\S]*?'재성이 마이크를 꺼 둔 이유를 묻는다\.'/,
  'Scenario should make Day 3 route focus read like an emotional action choice, not an investigation menu.'
);

assert.match(
  scenarioSource,
  /id:\s*'ukhyun-route-start'[\s\S]*name:\s*'욱현'[\s\S]*affection:\s*\{\s*ukhyun:/,
  'Scenario should include a playable Ukhyun heroine branch with affection rewards.'
);

assert.match(
  scenarioSource,
  /id:\s*'jaeseong-route-start'[\s\S]*name:\s*'재성'[\s\S]*affection:\s*\{\s*jaeseong:/,
  'Scenario should include a playable Jaeseong heroine branch with affection rewards.'
);

assert.match(
  scenarioSource,
  /['"]?endingNext['"]?\s*:\s*\{[\s\S]*['"]?ukhyun['"]?\s*:\s*['"]ending-ukhyun['"][\s\S]*['"]?jaeseong['"]?\s*:\s*['"]ending-jaeseong['"]/,
  'Ending gate should route to Ukhyun and Jaeseong endings.'
);

assert.match(
  scenarioSource,
  /id:\s*'day3-morning-message'[\s\S]*?type:\s*'phone'[\s\S]*?messages:\s*\[[\s\S]*?오늘은 우산 필요 없겠다[\s\S]*?pending:\s*true/,
  'Day 3 should include a phone timeline with a typing beat.'
);

assert.match(
  scenarioSource,
  /id:\s*'phone-vibration'[\s\S]*?type:\s*'banner'[\s\S]*?현겸에게서 (?:온 메시지|메시지가 왔다)[\s\S]*?id:\s*'choice-reply-tone'[\s\S]*?오늘 고마웠다고 바로 답장한다[\s\S]*?조금 뜸을 들였다가 장난스럽게 답한다/,
  'Scenario should include a modern VN-like phone/message beat with a meaningful reply-tone choice.'
);

assert.match(
  scenarioSource,
  /['"]?id['"]?\s*:\s*['"]ending-promise['"][\s\S]*?['"]?endingGate['"]?\s*:\s*true[\s\S]*?['"]?endingNext['"]?\s*:\s*\{[\s\S]*?['"]?good['"]?\s*:\s*['"]ending-good['"][\s\S]*?['"]?normal['"]?\s*:\s*['"]ending-normal['"][\s\S]*?['"]?quiet['"]?\s*:\s*['"]ending-quiet['"]/,
  'Ending gate should branch into route-specific ending text instead of one repeated final line.'
);

for (const endingId of ['ending-good', 'ending-normal', 'ending-quiet']) {
  assert.match(
    scenarioSource,
    new RegExp(`['"]?id['"]?\\s*:\\s*['"]${endingId}['"][\\s\\S]*?['"]?terminal['"]?\\s*:\\s*true`),
    `${endingId} should be terminal so advancing cannot wrap back to the opening.`
  );
}

for (const endingId of ['ending-ukhyun', 'ending-jaeseong']) {
  assert.match(
    scenarioSource,
    new RegExp(`['"]?id['"]?\\s*:\\s*['"]${endingId}['"][\\s\\S]*?['"]?terminal['"]?\\s*:\\s*true`),
    `${endingId} should be terminal so heroine route endings cannot wrap back to the opening.`
  );
}


assert.match(
  scenarioSource,
  /mood:\s*'(rain|warm|tense|confession)'/,
  'Scenario should tag scene mood for visual/sound polish.'
);

assert.match(
  directorMoodSource,
  /rain[\s\S]*?confession[\s\S]*?addDirectorOverlay/,
  'Director engine should map mood metadata into subtle overlays.'
);

assert.match(
  component,
  /<div className="game-system-buttons"[\s\S]*?<button type="button" onClick=\{openGallery\}>CG<\/button>[\s\S]*?<\/div>/,
  'In-game CG/gallery should live beside SAVE and LOAD instead of inside the quick menu.'
);

assert.doesNotMatch(
  component,
  /QuickGalleryButton|onGalleryClick/,
  'Quick menu should not carry the CG shortcut because it breaks the menu layout.'
);


assert.match(
  regressionCapture,
  /OPTIONAL[\s\S]*?process\.exitCode = 1/,
  'Capture script should fail when visual smoke captures fail unless explicitly marked optional.'
);


assert.match(
  visualNovelSource,
  /onReplay=\{\(startId\) => \{[\s\S]*?setLog\(\[\]\)[\s\S]*?setDirectorState\(replayDirectorState\(scenario,\s*targetIndex,\s*directorDefaults\)\)[\s\S]*?setIndex\(targetIndex\)/,
  'Gallery replay should rebuild director state and clear stale backlog before jumping to recollection scenes.'
);


assert.match(
  replayCandidateSource,
  /resolveEndingRoute\(gameState,\s*endingRules\)[\s\S]*?applyRouteRewards\(gameState,\s*item,\s*choiceIndex/,
  'Route-aware replay should simulate choice rewards and resolve endingNext using the simulated route state.'
);

assert.match(
  replayCandidateSource,
  /options\.targetId[\s\S]*?Object\.values\(item\.endingNext\)\.includes\(options\.targetId\)[\s\S]*?resolveEndingRoute\(gameState,\s*endingRules\)/,
  'Replay candidates may take an explicit deep-link ending target, then otherwise resolve endingNext through route state.'
);


assert.doesNotMatch(
  replayDirectorSource,
  /strictEnding:\s*false|Array\.from\(\{ length: maxIndex \+ 1 \}/,
  'Replay should not use non-strict ending fallback or linear fallback that can construct impossible ending branches.'
);
assert.match(
  replayDirectorSource,
  /previewOnly[\s\S]*?\[maxIndex\]/,
  'Preview-only capture targets should render directly instead of forcing an impossible normal-flow replay search.'
);
assert.match(
  visualNovelSource,
  /if \(!item\?\.endingGate\) return;[\s\S]*?if \(item\.routeGate\) return;[\s\S]*?const route = resolveEndingRoute[\s\S]*?setEnding/,
  'Non-terminal route gates should resolve route navigation without showing or storing a terminal ending early.'
);

for (const endingItem of scenario.filter((item) => item.terminal)) {
  assert.ok(
    endingItem.text.length >= 150,
    `${endingItem.id} should leave enough afterglow before the terminal state instead of ending abruptly.`
  );
}

const validation = validateScenario(scenario, routeConfigData);
assert.deepEqual(validation.errors, [], `scenario validator errors: ${validation.errors.join('\n')}`);

const messageOnlyPhoneScenario = [
  {
    id: 'start',
    type: 'phone',
    text: 'message',
    messages: [{ from: 'dohun', text: '확인했어.' }],
    nextId: 'end'
  },
  { id: 'end', type: 'dialogue', text: 'end', terminal: true }
];
const messageOnlyPhoneValidation = validateScenario(messageOnlyPhoneScenario, routeConfigData);
assert.deepEqual(
  messageOnlyPhoneValidation.errors,
  [],
  'Message-only phone cutscenes should be valid and reachable through nextId.'
);
const messageOnlyPhoneReplayPath = findReplayPath(
  messageOnlyPhoneScenario,
  1,
  0,
  createInitialGameState(),
  { routeConfig: routeConfigData }
);
assert.deepEqual(
  messageOnlyPhoneReplayPath,
  [0, 1],
  'Replay should traverse message-only phone cutscenes through nextId.'
);

const ambiguousPhoneValidation = validateScenario([
  {
    id: 'start',
    type: 'phone',
    text: 'message',
    replies: ['reply'],
    rewards: [{}],
    next: ['end'],
    nextId: 'other'
  },
  { id: 'end', type: 'dialogue', text: 'end', terminal: true },
  { id: 'other', type: 'dialogue', text: 'other', terminal: true }
], routeConfigData);
assert.ok(
  ambiguousPhoneValidation.errors.some((error) => error.includes('phone reply scenes must not define nextId')),
  'Scenario validator should reject phone scenes that define both reply branching and nextId.'
);

const malformedPhoneTimelineValidation = validateScenario([
  {
    id: 'start',
    type: 'phone',
    text: 'message',
    messages: [{ from: 'hyeongyeom', text: '' }],
    replies: ['reply'],
    rewards: [{}],
    next: ['end']
  },
  { id: 'end', type: 'dialogue', text: 'end', terminal: true }
], routeConfigData);
assert.ok(
  malformedPhoneTimelineValidation.errors.some((error) => error.includes('phone message text is required')),
  'Scenario validator should reject empty phone messages unless pending is true.'
);

const unreachableValidation = validateScenario([
  { id: 'start', type: 'dialogue', text: 'start', nextId: 'end' },
  { id: 'end', type: 'dialogue', text: 'end', terminal: true },
  { id: 'dead', type: 'dialogue', text: 'dead branch' },
  { id: 'preview-choice', type: 'choice', previewOnly: true, choices: ['A'], next: ['end'] }
], routeConfigData);
assert.ok(
  unreachableValidation.errors.some((error) => error.includes('unreachable non-preview scene: dead')),
  'Scenario validator should reject unreachable non-preview scenes.'
);
assert.ok(
  !unreachableValidation.errors.some((error) => error.includes('preview-choice')),
  'Scenario validator should allow explicitly preview-only scenes to be unreachable.'
);

const malformedValidation = validateScenario([
  { id: 'start', type: 'choice', choices: ['A', 'B'], next: ['missing'], rewards: [{ affection: { hyeongyeom: 1 } }] }
], routeConfigData);
assert.ok(
  malformedValidation.errors.some((error) => error.includes('target does not exist'))
    && malformedValidation.errors.some((error) => error.includes('does not match choices length')),
  'Scenario validator should catch missing targets and choice array mismatches.'
);

const cappedState = applyRouteRewards(
  { ...createInitialGameState(), affection: { hyeongyeom: routeConfigData.affectionTarget.max - 1 } },
  { id: 'test-overflow', rewards: [{ affection: { hyeongyeom: 99 } }] },
  0,
  routeConfigData
);
assert.equal(cappedState.affection.hyeongyeom, routeConfigData.affectionTarget.max);

const cappedMultiHeroineState = applyRouteRewards(
  { ...createInitialGameState(), affection: { ukhyun: 9, jaeseong: 9 } },
  { id: 'test-multi-overflow', rewards: [{ affection: { ukhyun: 99, jaeseong: 99 } }] },
  0,
  routeConfigData
);
assert.equal(cappedMultiHeroineState.affection.ukhyun, 10);
assert.equal(cappedMultiHeroineState.affection.jaeseong, 10);

const dominantRoute = resolveDominantRoute(
  {
    affection: { hyeongyeom: 4, sangwon: 6, haeum: 6 },
    flags: ['sangwon_route_seed', 'haeum_route_seed']
  },
  routeConfigData
);
assert.equal(dominantRoute.id, 'sangwon', 'Dominant route should use route priority when affection/flags tie.');
const explicitRouteLock = resolveRouteLock(
  {
    affection: { sangwon: 8, yunho: 8 },
    flags: ['sangwon_route_seed', 'yunho_route_seed', 'route_lock_yunho']
  },
  routeConfigData
);
assert.equal(explicitRouteLock.id, 'yunho', 'Explicit latest route lock flag should win over static priority.');
assert.equal(explicitRouteLock.reason, 'explicit-lock');
const thresholdRouteLock = resolveRouteLock(
  { affection: { sangwon: 6 }, flags: ['sangwon_route_seed'] },
  routeConfigData
);
assert.equal(thresholdRouteLock.reason, 'threshold', 'Seeded route at threshold should lock through threshold semantics.');
const fallbackRouteLock = resolveRouteLock({ affection: {}, flags: [] }, routeConfigData);
assert.equal(fallbackRouteLock.id, 'common', 'Route lock should fall back to the common route when no route is eligible.');
assert.equal(fallbackRouteLock.reason, 'fallback');

const normalizedByItem = normalizeSavePayload(
  { version: 1, index: 9999, itemId: scenario[2].id, gameState: {}, settings: {}, directorState: null, log: [] },
  { scenario, fallbackIndex: 0 }
);
assert.equal(normalizedByItem.index, 2);
assert.equal(normalizedByItem.itemId, scenario[2].id);

const normalizedFallback = normalizeSavePayload(
  { version: 1, index: 9999, itemId: 'missing-id', gameState: {}, settings: {}, directorState: { broken: true }, log: 'bad' },
  { scenario, fallbackIndex: 0 }
);
assert.equal(normalizedFallback.index, 0);
assert.equal(normalizedFallback.itemId, scenario[0].id);
assert.equal(normalizedFallback.directorState, null);
assert.deepEqual(normalizedFallback.log, []);

const normalizedSummarySave = normalizeSavePayload(
  {
    version: 1,
    index: 0,
    itemId: scenario[0].id,
    summary: {
      chapterTitle: 'Day 1',
      linePreview: 'line',
      affectionLabel: 'label',
      affectionValue: 3,
      thumbnail: '/assets/ui/image0_13_6.jpg'
    },
    gameState: {},
    settings: {},
    directorState: null,
    log: []
  },
  { scenario, fallbackIndex: 0 }
);
assert.equal(normalizedSummarySave.summary.chapterTitle, 'Day 1');
assert.equal(normalizedSummarySave.summary.affectionValue, 3);
assert.equal(normalizedSummarySave.summary.routeLocked, false);

const normalizedRichSummarySave = normalizeSavePayload(
  {
    version: 1,
    index: 0,
    itemId: scenario[0].id,
    summary: {
      chapterTitle: 'Day 1',
      chapterLabel: 'Day 1: 비 오는 방과 후',
      linePreview: 'line',
      affectionTarget: 'sangwon',
      affectionLabel: '같은 우산의 약속',
      affectionValue: 6,
      routeId: 'sangwon',
      routeName: '상원',
      routeLabel: '상원 루트 확정',
      routeLocked: true,
      routeProgressText: '상원 · 루트 확정',
      thumbnail: '/assets/bg/archive-club-room-evening.png'
    },
    gameState: {},
    settings: {},
    directorState: null,
    log: []
  },
  { scenario, fallbackIndex: 0 }
);
assert.deepEqual(
  normalizedRichSummarySave.summary,
  {
    itemId: '',
    chapter: '',
    chapterTitle: 'Day 1',
    chapterLabel: 'Day 1: 비 오는 방과 후',
    linePreview: 'line',
    affectionTarget: 'sangwon',
    affectionValue: 6,
    affectionLabel: '같은 우산의 약속',
    routeId: 'sangwon',
    routeName: '상원',
    routeLabel: '상원 루트 확정',
    routeLocked: true,
    routeProgressText: '상원 · 루트 확정',
    thumbnail: '/assets/bg/archive-club-room-evening.png'
  },
  'Save codec should preserve normalized route/chapter display metadata for sub-screen cards.'
);
assert.deepEqual(
  normalizeSaveSummary({ routeLocked: 'yes', routeName: 123, affectionValue: 'bad' }),
  {
    itemId: '',
    chapter: '',
    chapterTitle: '',
    chapterLabel: '',
    linePreview: '',
    affectionTarget: '',
    affectionValue: 0,
    affectionLabel: '',
    routeId: '',
    routeName: '',
    routeLabel: '',
    routeLocked: false,
    routeProgressText: '',
    thumbnail: ''
  },
  'Corrupt save-summary display values should normalize to safe defaults.'
);

const normalizedClampedSave = normalizeSavePayload(
  {
    version: 1,
    index: 0,
    itemId: scenario[0].id,
    gameState: { affection: { hyeongyeom: 999 }, flags: 'bad', readLines: ['opening', 'opening'] },
    settings: { textSpeedMs: -50, autoDelayMs: 999999, bgmVolume: 999, seVolume: -10 },
    directorState: null,
    log: []
  },
  { scenario, fallbackIndex: 0, routeConfig: routeConfigData }
);
assert.equal(normalizedClampedSave.gameState.affection.hyeongyeom, routeConfigData.affectionTarget.max);
assert.deepEqual(normalizedClampedSave.gameState.flags, []);
assert.deepEqual(normalizedClampedSave.gameState.readLines, ['opening']);
assert.deepEqual(normalizedClampedSave.settings, {
  textSpeedMs: 8,
  autoDelayMs: 2600,
  bgmVolume: 100,
  seVolume: 0
});

const firstChoiceIndex = scenario.findIndex((item) => item.id === 'choice-approach');
const nextChoiceIndex = resolveNextIndex({
  scenario,
  index: firstChoiceIndex,
  currentItem: scenario[firstChoiceIndex],
  ending: null,
  gameState: createInitialGameState(),
  endingRules: []
});
assert.ok(nextChoiceIndex > firstChoiceIndex, 'VN engine should route from a known choice to a later line.');

const hyeongyeomEndingIndex = scenario.findIndex((item) => item.id === 'ending-hyeongyeom');
const replayPath = findReplayPath(
  scenario,
  hyeongyeomEndingIndex,
  0,
  createInitialGameState(),
  { endingRules: episodeInfo.endingRules || [], routeConfig: routeConfigData }
);
assert.ok(Array.isArray(replayPath), 'Replay path should be found for the Day-14 Hyungyeom ending target.');
assert.ok(replayPath.includes(hyeongyeomEndingIndex), 'Replay path should include the requested Day-14 Hyungyeom target.');
assert.ok(
  replayPath.some((index) => scenario[index]?.id === 'day14-closing'),
  'Replay path for the primary ending should pass through Day 14 before entering the ending gate.'
);

const ukhyunEndingIndex = scenario.findIndex((item) => item.id === 'ending-ukhyun');
const ukhyunReplayPath = findReplayPath(
  scenario,
  ukhyunEndingIndex,
  0,
  createInitialGameState(),
  { endingRules: episodeInfo.endingRules || [], routeConfig: routeConfigData }
);
assert.ok(Array.isArray(ukhyunReplayPath), 'Replay path should be found for the Ukhyun heroine ending.');
assert.ok(ukhyunReplayPath.includes(ukhyunEndingIndex), 'Replay path should include the Ukhyun ending target.');

const jaeseongEndingIndex = scenario.findIndex((item) => item.id === 'ending-jaeseong');
const jaeseongReplayPath = findReplayPath(
  scenario,
  jaeseongEndingIndex,
  0,
  createInitialGameState(),
  { endingRules: episodeInfo.endingRules || [], routeConfig: routeConfigData }
);
assert.ok(Array.isArray(jaeseongReplayPath), 'Replay path should be found for the Jaeseong heroine ending.');
assert.ok(jaeseongReplayPath.includes(jaeseongEndingIndex), 'Replay path should include the Jaeseong ending target.');

const goodEndingIndex = scenario.findIndex((item) => item.id === 'ending-good');
const goodReplayPath = findReplayPath(
  scenario,
  goodEndingIndex,
  0,
  createInitialGameState(),
  { targetId: 'ending-good', endingRules: episodeInfo.endingRules || [], routeConfig: routeConfigData }
);
assert.ok(Array.isArray(goodReplayPath), 'Replay path should directly target explicit endingNext values for visual QA deep links.');
assert.ok(goodReplayPath.includes(goodEndingIndex), 'Replay path should include the explicit good-ending target without exhaustively searching all branches.');

const directorResult = applyDirectorItem(
  { backgroundSrc: null, backgroundTransition: '', characters: [], overlays: [], soundCues: [], soundKey: '' },
  {
    id: 'directive-test',
    mood: 'tense',
    directives: [{ type: 'BCG', src: '/assets/ui/test.jpg' }, { type: 'SCG', id: 'hyeongyeom', src: '/assets/character/hyungyeom.png', expression: 'smile' }]
  },
  {}
);
assert.equal(directorResult.backgroundSrc, '/assets/ui/test.jpg');
assert.equal(directorResult.characters[0].expression, 'smile');
assert.ok(directorResult.overlays.length > 0, 'Director engine should add mood overlays.');

const chapterDirectorResult = applyDirectorItem(
  {
    backgroundSrc: null,
    backgroundTransition: '',
    characters: [{ id: 'yunho', position: 3, expression: 'quiet' }],
    overlays: [],
    soundCues: [],
    soundKey: '',
    audio: createAudioState()
  },
  { id: 'chapter-reset-test', kind: 'chapter', type: 'banner', directives: [] },
  {}
);
assert.deepEqual(chapterDirectorResult.characters, [], 'Chapter cards should clear previous standing character sprites.');

const sameSlotDirectorResult = applyDirectorItem(
  {
    backgroundSrc: null,
    backgroundTransition: '',
    characters: [{ id: 'old', position: 3, expression: 'normal' }],
    overlays: [],
    soundCues: [],
    soundKey: '',
    audio: createAudioState()
  },
  {
    id: 'same-slot-replacement-test',
    directives: [
      { type: 'SCG', id: 'old', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'new', action: 'enter', pos: 3, expression: 'smile' }
    ]
  },
  {}
);
assert.deepEqual(
  sameSlotDirectorResult.characters.map((character) => character.id),
  ['new'],
  'Same-position character replacement should not keep the fading old sprite behind the new one.'
);

const implicitSameSlotDirectorResult = applyDirectorItem(
  {
    backgroundSrc: null,
    backgroundTransition: '',
    characters: [{ id: 'yunho', position: 3, expression: 'quiet' }],
    overlays: [],
    soundCues: [],
    soundKey: '',
    audio: createAudioState()
  },
  {
    id: 'implicit-same-slot-replacement-test',
    directives: [
      { type: 'SCG', id: 'ukhyun', action: 'enter', pos: 3, expression: 'quiet' }
    ]
  },
  {}
);
assert.deepEqual(
  implicitSameSlotDirectorResult.characters.map((character) => character.id),
  ['ukhyun'],
  'Entering a new character into an occupied slot should replace the previous occupant even if the scenario forgot an explicit delete.'
);

const day2SangwonFormsIndex = scenario.findIndex((item) => item.id === 'day2-sangwon-forms');
const day2SangwonDirector = replayDirectorState(scenario, day2SangwonFormsIndex, { audio: createAudioState() });
assert.deepEqual(
  day2SangwonDirector.characters.filter((character) => !character.leaving).map((character) => character.id),
  ['sangwon'],
  'Day 2 festival setup should not keep stale Day 1/previous character sprites behind Sangwon.'
);

for (const [sceneId, expectedCharacter] of [
  ['day2-ukhyun-library-request', 'ukhyun'],
  ['day2-jaeseong-broadcast-invite', 'jaeseong']
]) {
  const targetIndex = scenario.findIndex((item) => item.id === sceneId);
  const director = replayDirectorState(scenario, targetIndex, { audio: createAudioState(), routeConfig: routeConfigData });
  assert.deepEqual(
    director.characters.filter((character) => !character.leaving).map((character) => character.id),
    [expectedCharacter],
    `${sceneId} should show only ${expectedCharacter} without stale Yunho/previous-route sprites.`
  );
}

for (const mood of ['warm', 'confession']) {
  const overlay = getMoodOverlay(mood);
  assert.ok(overlay, `${mood} mood should still resolve to an overlay contract.`);
  assert.doesNotMatch(
    overlay.color,
    /#ffd876|#ff9bc0/i,
    `${mood} mood overlay should not wash the real background with yellow or pink.`
  );
  assert.ok(
    Number(overlay.opacity) <= 0.04,
    `${mood} mood overlay should stay subtle enough that generated backgrounds remain visible.`
  );
}

assert.equal(clampVolumePercent(-20), 0);
assert.equal(clampVolumePercent(45), 45);
assert.equal(clampVolumePercent(999), 100);

const namedAudio = { rain: '/assets/bgm/rain.mp3', cafe: '/assets/bgm/cafe.mp3' };
assert.equal(resolveAudioCue('rain', namedAudio), '/assets/bgm/rain.mp3');
assert.equal(resolveAudioCue('/assets/bgm/direct.mp3', namedAudio), '/assets/bgm/direct.mp3');
assert.equal(resolveAudioCue('missing', namedAudio), '');

const bgmAudio = applyAudioDirective(createAudioState(), { type: 'BGM', cue: 'rain', fadeMs: 900 }, namedAudio);
assert.deepEqual(bgmAudio.bgm, { id: 'rain', src: '/assets/bgm/rain.mp3', fadeMs: 900, loop: true, volume: 100 });
assert.equal(bgmAudio.key, 'bgm:rain|ambient:');

const ambientAudio = applyAudioItem(createAudioState(), {
  id: 'audio-scene',
  directives: [
    { type: 'BGM', cue: 'cafe' },
    { type: 'AMBIENT', cue: 'rain', id: 'rain-loop', volume: 35 }
  ]
}, namedAudio);
assert.equal(ambientAudio.bgm.src, '/assets/bgm/cafe.mp3');
assert.equal(ambientAudio.ambient[0].id, 'rain-loop');
assert.equal(ambientAudio.ambient[0].volume, 35);

const audioDirectorResult = applyDirectorItem(
  { backgroundSrc: null, backgroundTransition: '', characters: [], overlays: [], soundCues: [], soundKey: '', audio: createAudioState() },
  { id: 'bgm-test', directives: [{ type: 'BGM', src: '/assets/bgm/rain.mp3', id: 'rain-main' }] },
  {}
);
assert.equal(audioDirectorResult.audio.bgm.id, 'rain-main');
assert.equal(audioDirectorResult.audio.bgm.src, '/assets/bgm/rain.mp3');
assert.match(audioDirectorResult.audio.key, /bgm:rain-main/);

const chapterInfo = getChapterInfo({ chapter: 'day-2', sectionTitle: 'Day 2: 아침', place: '교실' }, { previousItem: { chapter: 'day-1' } });
assert.equal(chapterInfo.chapter, 'day-2');
assert.equal(chapterInfo.title, 'Day 2: 아침');
assert.equal(chapterInfo.place, '교실');
assert.equal(shouldShowChapterCard({ chapter: 'day-2' }, { chapter: 'day-1' }), true);
assert.equal(shouldShowChapterCard({ chapter: 'day-2' }, { chapter: 'day-2' }), false);

const saveSummaryResult = buildSaveSummary({
  item: { id: 'day2-rooftop', chapter: 'day-2', sectionTitle: 'Day 2: 옥상', text: '오늘도 우산 가져왔어.' },
  gameState: { affection: { hyeongyeom: 7 } },
  routeConfig: routeConfigData,
  backgroundSrc: '/assets/ui/image0_13_6.jpg'
});
assert.equal(saveSummaryResult.itemId, 'day2-rooftop');
assert.equal(saveSummaryResult.chapterTitle, 'Day 2: 옥상');
assert.equal(saveSummaryResult.chapterLabel, 'Day 2: 문화제 기록 담당');
assert.equal(saveSummaryResult.linePreview, '오늘도 우산 가져왔어.');
assert.equal(saveSummaryResult.affectionLabel, '같은 우산의 약속');
assert.equal(saveSummaryResult.routeId, 'hyeongyeom');
assert.equal(saveSummaryResult.routeName, '현겸');
assert.equal(saveSummaryResult.routeLocked, false);
assert.equal(saveSummaryResult.routeProgressText, '현겸 · 같은 우산의 약속');
assert.equal(saveSummaryResult.thumbnail, '/assets/ui/image0_13_6.jpg');

const multiRouteSaveSummary = buildSaveSummary({
  item: { id: 'day4-route-test', chapter: 'day-4', sectionTitle: 'Day 4', text: '상원이 기록을 건넸다.' },
  gameState: { affection: { hyeongyeom: 4, sangwon: 7 }, flags: ['sangwon_route_seed'] },
  routeConfig: routeConfigData,
  backgroundSrc: '/assets/bg/archive-club-room-evening.png'
});
assert.equal(multiRouteSaveSummary.affectionTarget, 'sangwon');
assert.equal(multiRouteSaveSummary.affectionValue, 7);
assert.equal(multiRouteSaveSummary.routeId, 'sangwon');
assert.equal(multiRouteSaveSummary.routeName, '상원');
assert.equal(multiRouteSaveSummary.routeLabel, '상원 루트 확정');
assert.equal(multiRouteSaveSummary.routeLocked, true);
assert.equal(multiRouteSaveSummary.routeProgressText, '상원 · 루트 확정');

assert.equal(characterProfiles.hyeongyeom.name, '현겸');
assert.equal(resolveCharacterAsset({ id: 'hyeongyeom', expression: 'smile' }), '/assets/character/hyungyeom.png');
assert.equal(resolveCharacterAsset({ id: 'missing', src: '/assets/character/custom.png' }), '/assets/character/custom.png');
assert.equal(characterProfiles.ukhyun.name, '욱현');
assert.equal(characterProfiles.jaeseong.name, '재성');

const routeArchetypeContracts = [
  {
    routeId: 'hyeongyeom',
    archetype: '정실 순애',
    voicePattern: /담백|조심|가까워/,
    prosePattern: /우산|돌아갈 자리|여기가 내 자리/
  },
  {
    routeId: 'ukhyun',
    archetype: '무표정 쿨데레',
    voicePattern: /짧게|관찰/,
    prosePattern: /접힌 노트|무표정|답장은 짧게|웃는 척, 티 나/
  },
  {
    routeId: 'jaeseong',
    archetype: '능글 플러팅',
    voicePattern: /농담|직진/,
    prosePattern: /방송|마이크|표정 방송사고|생방송/
  },
  {
    routeId: 'sangwon',
    archetype: '기록집착 얀데레',
    voicePattern: /기록|통제/,
    prosePattern: /허락할 때만 적을게|대답은 기록으로 받지 않을게|네 목소리|기록 양식|빈칸/
  },
  {
    routeId: 'sanguk',
    archetype: '직진 댕댕이',
    voicePattern: /솔직|뛰어드는/,
    prosePattern: /먼저 뛰|같이 뛰|몸이 먼저|직진/
  },
  {
    routeId: 'junhyeok',
    archetype: '무심한 두뇌파',
    voicePattern: /논리|농담/,
    prosePattern: /지도|경로|정답 처리|계산/
  },
  {
    routeId: 'dohun',
    archetype: '장난치는 츤데레',
    voicePattern: /장난|정보통/,
    prosePattern: /장난|정보값|착각하지|표정 관리 실패/
  },
  {
    routeId: 'haeum',
    archetype: '치유계',
    voicePattern: /기다려|박자/,
    prosePattern: /박자|숨|호흡|천천히/
  },
  {
    routeId: 'yunho',
    archetype: '후배 선배집착',
    voicePattern: /선배/,
    prosePattern: /선배|후배/
  }
];

for (const { routeId, archetype, voicePattern, prosePattern } of routeArchetypeContracts) {
  const profile = characterProfiles[routeId];
  assert.equal(profile.archetype, archetype, `${profile.name} should declare the expected route archetype.`);
  assert.match(profile.voice, voicePattern, `${profile.name} voice contract should match its archetype.`);
  assert.ok(
    scenario.some((item) => item.name === profile.name && prosePattern.test(item.text || '')),
    `${profile.name} route prose should express the ${archetype} archetype.`
  );
}

const longformRouteTargets = [
  ['sangwon', '상원'],
  ['sanguk', '상욱'],
  ['junhyeok', '준혁'],
  ['dohun', '도훈'],
  ['haeum', '하음'],
  ['yunho', '윤호']
];
for (const [routeId, routeName] of longformRouteTargets) {
  assert.match(
    routeConfig,
    new RegExp(`id:\\s*'${routeId}'[\\s\\S]*?name:\\s*'${routeName}'`),
    `Route config should include longform route target ${routeName}.`
  );
  assert.ok(characterProfiles[routeId], `Character profile should include placeholder-safe profile for ${routeName}.`);
  assert.equal(characterProfiles[routeId].baseSrc, '', `${routeName} should not reference a missing character PNG before photos are supplied.`);
}
assert.match(
  routeConfig,
  /routePriority:\s*\[[\s\S]*'hyeongyeom'[\s\S]*'sangwon'[\s\S]*'haeum'[\s\S]*'yunho'[\s\S]*'ukhyun'[\s\S]*'jaeseong'[\s\S]*'junhyeok'[\s\S]*'sanguk'[\s\S]*'dohun'/,
  'Route config should define deterministic route priority for longform tie-breaks.'
);

const phoneMessages = normalizePhoneMessages({
  name: '현겸',
  text: '집 도착했어.',
  messages: [
    { from: 'hyeongyeom', text: '우산 고마워.', read: true },
    { from: 'hakbeom', text: '내일 봐.', pending: true }
  ]
});
assert.equal(phoneMessages[0].side, 'other');
assert.equal(phoneMessages[1].side, 'me');
assert.equal(phoneMessages[1].pending, true);

const phoneReplies = normalizePhoneReplies({ replies: ['바로 답장한다.'], next: ['reply-warm'] });
assert.deepEqual(phoneReplies[0], { index: 0, text: '바로 답장한다.', targetId: 'reply-warm' });

assert.match(saveCodec, /export const SAVE_VERSION = 1/);
assert.match(scenarioValidator, /export function validateScenario/);
assert.match(scenarioValidator, /messages[\s\S]*phone message text is required/);
assert.match(component, /function playAudio\(src, volume = 0\.65\)/);
assert.match(component, /audio\.volume = Math\.max\(0, Math\.min\(1, volume\)\)/);
assert.match(component, /settings\.seVolume \/ 100/);
assert.match(
  component,
  /const itemCue = resolveSoundCue\(item\?\.se,\s*sounds\);[\s\S]*?if \(itemCue\) playAudio\(itemCue,\s*settings\.seVolume \/ 100\)/,
  'Top-level item.se values should resolve through the sounds map instead of trying to load raw cue names.'
);
assert.match(component, /<ConfigRange label="BGM 볼륨"[\s\S]*?settings\.bgmVolume/);
assert.match(component, /onKeyDown=\{createKeyboardActivationHandler\(/);
assert.match(component, /const currentExpression = character\.expression \|\| 'normal'/);
assert.match(component, /data-expression=\{currentExpression\}/);
