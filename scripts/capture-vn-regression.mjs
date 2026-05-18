import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const DEFAULT_BASE_URL = process.env.VN_CAPTURE_BASE_URL || process.argv[2] || 'http://127.0.0.1:5173';
const DEFAULT_OUT_DIR = process.env.VN_CAPTURE_OUT_DIR || process.argv[3] || '.omx/visual/vn-regression';
const VIEWPORT = { width: 1129, height: 524 };
const OPTIONAL = process.env.VN_CAPTURE_OPTIONAL === '1';

const captures = [
  { name: 'title', query: '?screen=title' },
  { name: 'dialogue', query: '?screen=game&mode=dialogue' },
  { name: 'phone-message', query: '?screen=game&id=day2-morning-message' },
  { name: 'reply-choice', query: '?screen=game&id=choice-reply-tone' },
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
        if (capture.clickText) {
          await page.getByRole('menuitem', { name: capture.clickText }).click();
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
