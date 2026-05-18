import { mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const DEFAULT_BASE_URL = process.env.VN_CAPTURE_BASE_URL || process.argv[2] || 'http://127.0.0.1:5173';
const DEFAULT_OUT_DIR = process.env.VN_CAPTURE_OUT_DIR || process.argv[3] || '.omx/visual/vn-regression';
const VIEWPORT = { width: 1129, height: 524 };
const OPTIONAL = process.env.VN_CAPTURE_OPTIONAL === '1';
const LOCAL_PLAYWRIGHT_LIB_DIRS = [
  path.resolve('.deps/playwright-libs/root/usr/lib/x86_64-linux-gnu'),
  path.resolve('.omx/tmp/playwright-libs/usr/lib/x86_64-linux-gnu')
];

const availableLocalLibDirs = LOCAL_PLAYWRIGHT_LIB_DIRS.filter((dir) => existsSync(dir));
if (availableLocalLibDirs.length > 0) {
  process.env.LD_LIBRARY_PATH = [
    ...availableLocalLibDirs,
    process.env.LD_LIBRARY_PATH || ''
  ].filter(Boolean).join(':');
}

const captures = [
  { name: 'title', query: '?screen=title' },
  { name: 'dialogue', query: '?screen=game&mode=dialogue' },
  { name: 'choice-approach', query: '?screen=game&id=choice-approach' },
  { name: 'phone-evening-message', query: '?screen=game&id=phone-evening-message' },
  { name: 'phone-message', query: '?screen=game&id=day2-morning-message' },
  { name: 'reply-choice', query: '?screen=game&id=choice-reply-tone' },
  { name: 'day5-music-room', query: '?screen=game&id=day5-haeum-music-room' },
  { name: 'day5-store', query: '?screen=game&id=day5-dohun-store-arrival' },
  { name: 'day5-rooftop', query: '?screen=game&id=day5-yunho-rooftop' },
  { name: 'save-modal', query: '?screen=game&id=opening', clickButton: 'SAVE' },
  { name: 'load-modal', query: '?screen=title', clickMenuItem: 'LOAD' },
  { name: 'settings-modal', query: '?screen=title', clickMenuItem: 'CONFIG' },
  { name: 'gallery', query: '?screen=title', clickText: 'GALLERY' },
  { name: 'ending-good', query: '?screen=game&id=ending-good' }
];

function buildUrl(baseUrl, query) {
  const url = new URL(baseUrl);
  const params = new URLSearchParams(query.replace(/^\?/, ''));
  params.forEach((value, key) => url.searchParams.set(key, value));
  return url.toString();
}

async function main() {
  let chromium;
  try {
    ({ chromium } = await import('playwright'));
  } catch (error) {
    console.warn('[capture-vn-regression] Playwright is unavailable.');
    console.warn(error?.message || error);
    if (OPTIONAL) return;
    process.exitCode = 1;
    return;
  }

  await mkdir(DEFAULT_OUT_DIR, { recursive: true });

  let browser;
  try {
    browser = await chromium.launch({ headless: true });
  } catch (error) {
    console.warn('[capture-vn-regression] Browser launch failed.');
    console.warn(error?.message || error);
    if (OPTIONAL) return;
    process.exitCode = 1;
    return;
  }

  const page = await browser.newPage({ viewport: VIEWPORT, deviceScaleFactor: 1 });
  page.setDefaultTimeout(5000);

  const results = [];
  try {
    for (const capture of captures) {
      const url = buildUrl(DEFAULT_BASE_URL, capture.query);
      const outPath = path.join(DEFAULT_OUT_DIR, `${capture.name}.png`);

      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 10000 });
        await page.waitForSelector('.game', { state: 'visible' });
        if (capture.clickMenuItem || capture.clickText) {
          await page.getByRole('menuitem', { name: capture.clickMenuItem || capture.clickText }).click();
        }
        if (capture.clickButton) {
          await page.getByRole('button', { name: capture.clickButton }).click();
        }
        await page.waitForTimeout(250);
        await page.screenshot({ path: outPath });
        results.push({ name: capture.name, status: 'captured', path: outPath });
      } catch (error) {
        results.push({ name: capture.name, status: 'skipped', reason: error?.message || String(error) });
      }
    }
  } finally {
    await browser.close();
  }

  const skipped = results.filter((result) => result.status !== 'captured');
  if (skipped.length > 0 && !OPTIONAL) {
    process.exitCode = 1;
  }

  for (const result of results) {
    if (result.status === 'captured') {
      console.log(`[capture-vn-regression] ${result.name}: ${result.path}`);
    } else {
      console.warn(`[capture-vn-regression] ${result.name}: skipped (${result.reason})`);
    }
  }
}

await main();
