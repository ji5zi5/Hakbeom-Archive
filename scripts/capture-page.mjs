import { chromium } from 'playwright';

const url = process.argv[2];
const out = process.argv[3];
if (!url || !out) throw new Error('Usage: node scripts/capture-page.mjs <url> <out>');

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1129, height: 524 }, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(200);
await page.screenshot({ path: out });
await browser.close();
