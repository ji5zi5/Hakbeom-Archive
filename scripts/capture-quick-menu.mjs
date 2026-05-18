import { chromium } from 'playwright';

const url = process.argv[2] || 'http://127.0.0.1:5175/?mode=dialogue';
const out = process.argv[3] || '.omx/visual/current-full.png';
const cropOut = process.argv[4] || '.omx/visual/current-quick-menu.png';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1129, height: 524 }, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'networkidle' });
await page.mouse.click(1056, 37);
await page.waitForTimeout(250);
await page.screenshot({ path: out });
await page.screenshot({
  path: cropOut,
  clip: { x: 705, y: 0, width: 424, height: 254 }
});
await browser.close();
