import { existsSync, readFileSync } from 'node:fs';
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
import { applyDirectorItem } from '../src/engine/directorEngine.js';
import { normalizePhoneMessages, normalizePhoneReplies } from '../src/engine/phoneEngine.js';
import { normalizeSavePayload } from '../src/engine/saveCodec.js';
import { buildSaveSummary } from '../src/engine/saveSummary.js';
import { validateScenario } from '../src/engine/scenarioValidator.js';
import { findReplayPath, resolveNextIndex } from '../src/engine/vnEngine.js';
import { applyRouteRewards, createInitialGameState } from '../src/utils/vnState.js';

const app = readFileSync('src/App.jsx', 'utf8');
const styles = readFileSync('src/styles.css', 'utf8');
const routeConfig = readFileSync('src/data/routeConfig.js', 'utf8');
const vnState = readFileSync('src/utils/vnState.js', 'utf8');
const vnText = readFileSync('src/utils/vnText.js', 'utf8');
const directorEngine = readFileSync('src/engine/directorEngine.js', 'utf8');
const audioEngine = readFileSync('src/engine/audioEngine.js', 'utf8');
const saveCodec = readFileSync('src/engine/saveCodec.js', 'utf8');
const saveSummary = readFileSync('src/engine/saveSummary.js', 'utf8');
const scenarioValidator = readFileSync('src/engine/scenarioValidator.js', 'utf8');
const vnEngine = readFileSync('src/engine/vnEngine.js', 'utf8');
const phoneEngine = readFileSync('src/engine/phoneEngine.js', 'utf8');
const chapterEngine = readFileSync('src/engine/chapterEngine.js', 'utf8');
const regressionCapture = readFileSync('scripts/capture-vn-regression.mjs', 'utf8');

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

const component = readFileSync('src/components/BAVisualNovel.jsx', 'utf8');

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
const wrapDialogueTextSource = topLevelFunctionSource(vnText, 'wrapDialogueText');
const effectGeometrySource = topLevelFunctionSource(component, 'getEffectBadgeGeometry');
const effectBadgeSource = topLevelFunctionSource(component, 'EffectBadge');
const directorApplySource = topLevelFunctionSource(directorEngine, 'applyDirectorItem');
const directorMoodSource = topLevelFunctionSource(directorEngine, 'getMoodOverlay');
const replayCandidateSource = topLevelFunctionSource(vnEngine, 'getReplayCandidateSteps');
const replayDirectorSource = topLevelFunctionSource(vnEngine, 'replayDirectorState');

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

assert.doesNotMatch(
  component,
  /<ConfigRange label="BGM 준비중"[\s\S]*disabled/,
  'BGM config should be enabled after BGM playback exists.'
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
  /gallery[\s\S]*?ending/,
  'VN regression capture script should cover gallery and ending smoke states.'
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
  styles,
  /\.transition-fade-in[\s\S]*?animation:\s*baFadeIn/i,
  'SCG/BCG fade-in transition should be available.'
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
  /backgroundSrc,\s*characters,\s*overlays[\s\S]*?<SceneBackground backgroundSrc=\{backgroundSrc\}[\s\S]*?<DirectorOverlays overlays=\{overlays\}[\s\S]*?<CharacterLayer characters=\{characters\}/,
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
  /className="title-logo-mark"[\s\S]*?className="title-menu"/,
  'Title screen should use a purpose-built BA-style logo/menu layout instead of a generic centered card.'
);

assert.match(
  styles,
  /\.title-screen\s*\{[\s\S]*?z-index\s*:\s*20[\s\S]*?\.ba-modal-layer\s*\{[\s\S]*?z-index\s*:\s*30/i,
  'Save/load/config modals should layer above the title screen.'
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
  /<button type="button" onClick=\{\(\) => setSaveLoadMode\('save'\)\}>SAVE<\/button>[\s\S]*?<button type="button" onClick=\{\(\) => setSaveLoadMode\('load'\)\}>LOAD<\/button>/,
  'Game screen system buttons should keep only explicit SAVE and LOAD actions.'
);
assert.doesNotMatch(
  gameButtonsMatch[0],
  /Q\.SAVE|Q\.LOAD|CONFIG/,
  'Game screen system buttons should not duplicate quick-save, quick-load, or config controls in the top-left.'
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

assert.match(
  app,
  /bgmRain:[\s\S]*'\/assets\/bgm\/rainy-after-school\.mp3'/,
  'App should expose named BGM cues to the VN runtime.'
);

const scenarioSource = readFileSync('src/data/scenario.js', 'utf8');

assert.match(
  scenarioSource,
  /chapter:\s*'day-2'/,
  'Scenario should include a second-day route chapter.'
);

assert.match(
  scenarioSource,
  /id:\s*'day3-chapter-card'[\s\S]*chapter:\s*'day-3'[\s\S]*Day 3 · 비가 그친 뒤에도 남은 약속/,
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
  /title:\s*'학범 러브'[\s\S]*sectionTitle:\s*'프롤로그: 비 오는 방과 후'/,
  'Scenario should present a real dating-sim episode title instead of generic placeholder metadata.'
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

assert.match(
  scenarioSource,
  /id:\s*'choice-promise'[\s\S]*?choices:\s*\[[\s\S]*?'손을 잡는다\.'/,
  'Scenario should keep a real one-option confirmation beat for the existing single-choice layout.'
);

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
  /id:\s*'ending-promise'[\s\S]*?endingGate:\s*true/,
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
  directorEngine,
  /function clearEphemeralCharacterState\(character\)[\s\S]*?effect:\s*undefined[\s\S]*?motion:\s*''/,
  'Character emotion badges and one-shot motions should be cleared before each new scenario item.'
);

assert.match(
  directorApplySource,
  /characters:\s*\(state\.characters \|\| \[\]\)[\s\S]*?\.filter\(\(character\) => !character\.leaving\)[\s\S]*?\.map\(clearEphemeralCharacterState\)/,
  'Director state should not carry emotion badges/motions forward onto unrelated dialogue lines.'
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
  /transform=\{`translate\(185 \$\{y\}\)`\}[\s\S]*?<use href="#baSlantPanel" x="0" y="0" width="760" height="58" \/>[\s\S]*?<text className="choice-text" x="380" y="37">/,
  'Choice row panels should share the same x/width/height as BannerScene for one-choice alignment.'
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
  /id:\s*'day3-morning-message'[\s\S]*?type:\s*'phone'[\s\S]*?messages:\s*\[[\s\S]*?오늘은 우산 필요 없겠다[\s\S]*?pending:\s*true/,
  'Day 3 should include a phone timeline with a typing beat.'
);

assert.match(
  scenarioSource,
  /id:\s*'phone-vibration'[\s\S]*?type:\s*'banner'[\s\S]*?현겸에게서 온 메시지[\s\S]*?id:\s*'choice-reply-tone'[\s\S]*?오늘 고마웠다고 바로 답장한다[\s\S]*?조금 뜸을 들였다가 장난스럽게 답한다/,
  'Scenario should include a modern VN-like phone/message beat with a meaningful reply-tone choice.'
);

assert.match(
  scenarioSource,
  /id:\s*'ending-promise'[\s\S]*?endingGate:\s*true[\s\S]*?endingNext:\s*\{[\s\S]*?good:\s*'ending-good'[\s\S]*?normal:\s*'ending-normal'[\s\S]*?quiet:\s*'ending-quiet'/,
  'Ending gate should branch into route-specific ending text instead of one repeated final line.'
);

for (const endingId of ['ending-good', 'ending-normal', 'ending-quiet']) {
  assert.match(
    scenarioSource,
    new RegExp(`id:\\s*'${endingId}'[\\s\\S]*?terminal:\\s*true`),
    `${endingId} should be terminal so advancing cannot wrap back to the opening.`
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
  /setGalleryOpen\(true\)[\s\S]*?onGalleryClick[\s\S]*?QuickGalleryButton|onGalleryClick[\s\S]*?QuickGalleryButton[\s\S]*?openGallery/,
  'In-game quick menu should expose a compact gallery shortcut without adding top-left clutter.'
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

assert.doesNotMatch(
  replayCandidateSource,
  /Object\.values\(item\.endingNext/,
  'Replay candidates should not blindly include every endingNext branch before route resolution.'
);


assert.doesNotMatch(
  replayDirectorSource,
  /strictEnding:\s*false|Array\.from\(\{ length: maxIndex \+ 1 \}/,
  'Replay should not use non-strict ending fallback or linear fallback that can construct impossible ending branches.'
);

const validation = validateScenario(scenario, routeConfigData);
assert.deepEqual(validation.errors, [], `scenario validator errors: ${validation.errors.join('\n')}`);

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

const goodEndingIndex = scenario.findIndex((item) => item.id === 'ending-good');
const replayPath = findReplayPath(
  scenario,
  goodEndingIndex,
  0,
  { ...createInitialGameState(), affection: { hyeongyeom: 10 }, flags: ['promise_hand', 'shared_umbrella'] },
  { endingRules: episodeInfo.endingRules || [] }
);
assert.ok(Array.isArray(replayPath), 'Replay path should be found for a reachable ending target.');
assert.ok(replayPath.includes(goodEndingIndex), 'Replay path should include the requested target.');

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
assert.equal(saveSummaryResult.linePreview, '오늘도 우산 가져왔어.');
assert.equal(saveSummaryResult.affectionLabel, '같은 우산의 약속');
assert.equal(saveSummaryResult.thumbnail, '/assets/ui/image0_13_6.jpg');

assert.equal(characterProfiles.hyeongyeom.name, '현겸');
assert.equal(resolveCharacterAsset({ id: 'hyeongyeom', expression: 'smile' }), '/assets/character/hyungyeom.png');
assert.equal(resolveCharacterAsset({ id: 'missing', src: '/assets/character/custom.png' }), '/assets/character/custom.png');

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
assert.match(component, /<ConfigRange label="BGM 볼륨"[\s\S]*?settings\.bgmVolume/);
assert.match(component, /onKeyDown=\{createKeyboardActivationHandler\(/);
assert.match(component, /const currentExpression = character\.expression \|\| 'normal'/);
assert.match(component, /data-expression=\{currentExpression\}/);
