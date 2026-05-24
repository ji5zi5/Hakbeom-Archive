import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const BASE_URL = process.env.VN_QA_BASE_URL || process.argv[2] || 'http://127.0.0.1:5173';
const OUT_PATH = process.env.VN_QA_OUT_PATH || '.omx/state/vn-flow-qa.json';
const VIEWPORT = { width: 1129, height: 524 };
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

function buildUrl(query) {
  const url = new URL(BASE_URL);
  const params = new URLSearchParams(query.replace(/^\?/, ''));
  params.forEach((value, key) => url.searchParams.set(key, value));
  return url.toString();
}

async function waitForOpenPanel(page, selector) {
  await page.locator(`${selector}[aria-hidden="false"]`).waitFor({ state: 'visible' });
}

async function visibleSvgScene(page, selector) {
  await page.waitForSelector(selector);
  return page.locator(selector).first().evaluate((node) => getComputedStyle(node).display !== 'none');
}

async function assertChoiceLayoutFits(page, label) {
  const metrics = await page.evaluate(() => {
    const box = (node) => {
      if (!node) return null;
      const rect = node.getBoundingClientRect();
      return {
        left: rect.left,
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        width: rect.width,
        height: rect.height
      };
    };

    return [...document.querySelectorAll('.scene-choice .choice-row')].map((row) => ({
      panel: box(row.querySelector('use')),
      text: box(row.querySelector('.choice-text')),
      lines: row.querySelectorAll('.choice-text tspan').length,
      label: row.getAttribute('aria-label')
    }));
  });

  assert.ok(metrics.length > 0, `${label}: choice rows should exist`);
  for (const [index, row] of metrics.entries()) {
    assert.ok(row.panel, `${label}: choice row ${index + 1} should have a panel`);
    assert.ok(row.text, `${label}: choice row ${index + 1} should have text`);
    assert.ok(row.lines >= 1 && row.lines <= 2, `${label}: choice row ${index + 1} should render one or two text lines`);
    assert.ok(row.text.left >= row.panel.left + 18, `${label}: choice row ${index + 1} text should not overflow left`);
    assert.ok(row.text.right <= row.panel.right - 18, `${label}: choice row ${index + 1} text should not overflow right`);
    assert.ok(row.text.top >= row.panel.top + 6, `${label}: choice row ${index + 1} text should not overflow top`);
    assert.ok(row.text.bottom <= row.panel.bottom - 6, `${label}: choice row ${index + 1} text should not overflow bottom`);
  }
}

async function assertMapChoiceLayoutFits(page, label) {
  const metrics = await page.evaluate(() => {
    const box = (node) => {
      if (!node) return null;
      const rect = node.getBoundingClientRect();
      return {
        left: rect.left,
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        width: rect.width,
        height: rect.height
      };
    };

    return {
      viewport: { width: window.innerWidth, height: window.innerHeight },
      controls: [...document.querySelectorAll('.scene-map-choice .map-choice-control')].map((control) => ({
        box: box(control),
        label: control.textContent.trim(),
        aria: control.getAttribute('aria-label')
      }))
    };
  });

  const expectedLabels = ['교문', '도서관', '방송실', '학생회실', '체육관', '동선 게시판', '매점', '음악실', '옥상'];
  const forbidden = ['현겸', '욱현', '재성', '상원', '상욱', '준혁', '도훈', '하음', '윤호', 'hyeongyeom', 'ukhyun', 'jaeseong', 'sangwon', 'sanguk', 'junhyeok', 'dohun', 'haeum', 'yunho', '+10', '호감도', '기억됨', '기록됨'];
  assert.equal(metrics.controls.length, 9, `${label}: mapChoice should render 9 location controls`);
  assert.deepEqual(metrics.controls.map((control) => control.label), expectedLabels, `${label}: map labels should be the canonical place labels`);
  for (const control of metrics.controls) {
    assert.equal(control.aria, control.label, `${label}: aria label should match the place label only`);
    for (const text of forbidden) {
      assert.ok(!control.label.includes(text) && !control.aria.includes(text), `${label}: map control should not leak ${text}`);
    }
    assert.ok(control.box.left >= -0.5, `${label}: ${control.label} should not clip left`);
    assert.ok(control.box.top >= -0.5, `${label}: ${control.label} should not clip top`);
    assert.ok(control.box.right <= metrics.viewport.width + 0.5, `${label}: ${control.label} should not clip right`);
    assert.ok(control.box.bottom <= metrics.viewport.height + 0.5, `${label}: ${control.label} should not clip bottom`);
  }
}

async function assertPhoneLayoutFits(page, label, { minReplies = 0 } = {}) {
  const metrics = await page.evaluate(() => {
    const box = (node) => {
      if (!node) return null;
      const rect = node.getBoundingClientRect();
      return {
        left: rect.left,
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        width: rect.width,
        height: rect.height,
        clientHeight: node.clientHeight,
        scrollHeight: node.scrollHeight
      };
    };

    return {
      viewport: { width: window.innerWidth, height: window.innerHeight },
      phone: box(document.querySelector('.scene-phone .phone-ui')),
      chat: box(document.querySelector('.scene-phone .phone-chat-list')),
      replies: [...document.querySelectorAll('.scene-phone .phone-reply')].map(box),
      bubbles: [...document.querySelectorAll('.scene-phone .phone-bubble')].map(box)
    };
  });

  assert.ok(metrics.phone, `${label}: phone panel should exist`);
  assert.ok(metrics.chat, `${label}: phone chat list should exist`);
  assert.ok(metrics.bubbles.length > 0, `${label}: phone should render message bubbles`);
  assert.ok(metrics.replies.length >= minReplies, `${label}: phone should render expected reply controls`);

  const insideViewport = (rect, name) => {
    assert.ok(rect.left >= -0.5, `${label}: ${name} should not clip left`);
    assert.ok(rect.top >= -0.5, `${label}: ${name} should not clip top`);
    assert.ok(rect.right <= metrics.viewport.width + 0.5, `${label}: ${name} should not clip right`);
    assert.ok(rect.bottom <= metrics.viewport.height + 0.5, `${label}: ${name} should not clip bottom`);
  };

  insideViewport(metrics.phone, 'phone panel');
  insideViewport(metrics.chat, 'chat list');
  for (const [index, rect] of metrics.replies.entries()) {
    insideViewport(rect, `reply ${index + 1}`);
    assert.ok(rect.bottom <= metrics.phone.bottom + 0.5, `${label}: reply ${index + 1} should stay inside phone panel`);
  }
}

async function clickFirstVisible(locators) {
  for (const locator of locators) {
    const count = await locator.count();
    for (let index = 0; index < count; index += 1) {
      const candidate = locator.nth(index);
      if (await candidate.isVisible().catch(() => false)) {
        await candidate.click();
        return true;
      }
    }
  }
  return false;
}

async function main() {
  const { chromium } = await import('playwright');
  await mkdir(path.dirname(OUT_PATH), { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: VIEWPORT, deviceScaleFactor: 1 });
  page.setDefaultTimeout(6000);

  const consoleErrors = [];
  const assetErrors = [];
  const audioEvents = [];
  const checks = [];

  await page.exposeFunction('__pushVnQaAudioEvent', (event) => audioEvents.push(event));
  await page.addInitScript(() => {
    const NativeAudio = window.Audio;
    window.Audio = function patchedAudio(src = '') {
      const audio = new NativeAudio(src);
      const record = (event, extra = {}) => {
        const entry = {
          event,
          src: audio.currentSrc || audio.getAttribute('src') || src || '',
          loop: audio.loop,
          volume: audio.volume,
          href: window.location.href,
          time: Math.round(performance.now()),
          ...extra
        };
        window.__pushVnQaAudioEvent?.(entry);
      };
      const nativePlay = audio.play.bind(audio);
      audio.play = () => {
        record('play-call');
        const result = nativePlay();
        if (result?.then) {
          result.then(
            () => record('play-resolve'),
            (error) => record('play-reject', { error: error?.name || error?.message || String(error) })
          );
        }
        return result;
      };
      return audio;
    };
    window.Audio.prototype = NativeAudio.prototype;
  });

  page.on('console', (message) => {
    if (['error', 'warning'].includes(message.type())) {
      consoleErrors.push({ type: message.type(), text: message.text() });
    }
  });
  page.on('pageerror', (error) => consoleErrors.push({ type: 'pageerror', text: error.message }));
  page.on('response', (response) => {
    const url = response.url();
    if (/\/assets\/(se|bgm)\//.test(url) && response.status() >= 400) {
      assetErrors.push({ status: response.status(), url });
    }
  });

  async function check(label, fn) {
    const startAudio = audioEvents.length;
    try {
      await fn();
      checks.push({ label, status: 'passed', audioEvents: audioEvents.slice(startAudio) });
    } catch (error) {
      checks.push({ label, status: 'failed', message: error?.message || String(error), audioEvents: audioEvents.slice(startAudio) });
    }
  }

  await check('title-start', async () => {
    await page.goto(buildUrl('?screen=title'), { waitUntil: 'networkidle' });
    await waitForOpenPanel(page, '.title-screen');
    await page.getByRole('menuitem', { name: 'START' }).click();
    await page.waitForTimeout(350);
    assert.equal(await visibleSvgScene(page, '.scene-dialogue'), true, 'dialogue scene should be visible after START');
    await page.locator('.speaker-name').first().waitFor({ state: 'attached' });
  });

  await check('choice-approach', async () => {
    await page.goto(buildUrl('?screen=game&id=choice-approach'), { waitUntil: 'networkidle' });
    await page.waitForSelector('.choice-row');
    assert.equal(await visibleSvgScene(page, '.scene-choice'), true, 'choice scene should be visible');
    await assertChoiceLayoutFits(page, 'choice-approach');
    await page.locator('.choice-row').first().click();
    await page.waitForTimeout(350);
    assert.equal(await visibleSvgScene(page, '.scene-dialogue'), true, 'choice should advance into dialogue');
  });

  await check('choice-layout', async () => {
    await page.goto(buildUrl('?screen=game&id=choice-day1-after-school-action'), { waitUntil: 'networkidle' });
    await page.waitForSelector('.choice-row');
    assert.equal(await visibleSvgScene(page, '.scene-choice'), true, 'long choice scene should be visible');
    await assertChoiceLayoutFits(page, 'choice-day1-after-school-action');
  });

  await check('map-choice', async () => {
    await page.goto(buildUrl('?screen=game&id=day1-map-after-school'), { waitUntil: 'networkidle' });
    await page.waitForSelector('.map-choice-control');
    assert.equal(await visibleSvgScene(page, '.scene-map-choice'), true, 'mapChoice scene should be visible');
    await assertMapChoiceLayoutFits(page, 'day1-map-after-school');
    await page.locator('.map-choice-control').first().click();
    await page.waitForTimeout(250);
    assert.equal(await visibleSvgScene(page, '.scene-dialogue'), true, 'mapChoice should advance into first-location dialogue');

    await page.goto(buildUrl('?screen=game&id=day1-map-sunset-after-school-gate'), { waitUntil: 'networkidle' });
    await page.waitForSelector('.map-choice-control');
    await assertMapChoiceLayoutFits(page, 'day1-map-sunset-after-school-gate');
    await page.locator('.map-choice-control').first().click();
    await page.waitForTimeout(250);
    assert.equal(await visibleSvgScene(page, '.scene-dialogue'), true, 'same-location mapChoice should advance into revisit dialogue');
  });

  await check('phone-reply', async () => {
    await page.goto(buildUrl('?screen=game&id=phone-evening-message'), { waitUntil: 'networkidle' });
    await page.waitForSelector('.phone-reply');
    assert.equal(await visibleSvgScene(page, '.scene-phone'), true, 'phone scene should be visible');
    await assertPhoneLayoutFits(page, 'phone-evening-message', { minReplies: 2 });
    await page.locator('.phone-reply').first().click();
    await page.waitForTimeout(350);
    assert.equal(await visibleSvgScene(page, '.scene-dialogue'), true, 'phone reply should advance into dialogue');
  });

  await check('phone-layout', async () => {
    const phoneScenes = [
      ['day2-morning-message', 2],
      ['day5-after-school-phone', 0],
      ['day4-dohun-message', 0]
    ];

    for (const [sceneId, minReplies] of phoneScenes) {
      await page.goto(buildUrl(`?screen=game&id=${sceneId}`), { waitUntil: 'networkidle' });
      await page.waitForSelector('.scene-phone .phone-ui');
      assert.equal(await visibleSvgScene(page, '.scene-phone'), true, `${sceneId} phone scene should be visible`);
      await assertPhoneLayoutFits(page, sceneId, { minReplies });
    }
  });

  await check('route-date-layout', async () => {
    const routeDateScenes = [
      { sceneId: 'date-day9-ukhyun-choice', kind: 'choice' },
      { sceneId: 'phone-day9-ukhyun-after-date', kind: 'phone', minReplies: 3 },
      { sceneId: 'date-day8-sangwon-memory-choice', kind: 'choice' },
      { sceneId: 'date-day8-sangwon-phone-followup', kind: 'phone', minReplies: 2 },
      { sceneId: 'date-day7-dohun-choice', kind: 'choice' },
      { sceneId: 'phone-day7-dohun-after-date', kind: 'phone', minReplies: 1 }
    ];

    for (const scene of routeDateScenes) {
      await page.goto(buildUrl(`?screen=game&id=${scene.sceneId}`), { waitUntil: 'networkidle' });
      if (scene.kind === 'choice') {
        await page.waitForSelector('.choice-row');
        assert.equal(await visibleSvgScene(page, '.scene-choice'), true, `${scene.sceneId} route-date choice should be visible`);
        await assertChoiceLayoutFits(page, scene.sceneId);
      } else {
        await page.waitForSelector('.scene-phone .phone-ui');
        assert.equal(await visibleSvgScene(page, '.scene-phone'), true, `${scene.sceneId} route-date phone should be visible`);
        await assertPhoneLayoutFits(page, scene.sceneId, { minReplies: scene.minReplies });
      }
    }
  });

  await check('save-load', async () => {
    await page.goto(buildUrl('?screen=game&id=opening'), { waitUntil: 'networkidle' });
    await page.waitForSelector('.game');
    await page.getByRole('button', { name: 'SAVE' }).click();
    await waitForOpenPanel(page, '.save-load-panel');
    await page.locator('.save-load-panel[aria-hidden="false"] .save-slot:not([disabled])').first().click();
    await clickFirstVisible([
      page.locator('.save-load-panel[aria-hidden="false"] .ba-modal-close'),
      page.getByRole('button', { name: '닫기' })
    ]);
    await page.getByRole('button', { name: 'LOAD' }).click();
    await waitForOpenPanel(page, '.save-load-panel');
    await clickFirstVisible([
      page.locator('.save-load-panel[aria-hidden="false"] .ba-modal-close'),
      page.getByRole('button', { name: '닫기' })
    ]);
  });

  await check('gallery', async () => {
    await page.goto(buildUrl('?screen=title'), { waitUntil: 'networkidle' });
    await waitForOpenPanel(page, '.title-screen');
    await page.getByRole('menuitem', { name: 'GALLERY' }).click();
    await waitForOpenPanel(page, '.gallery-panel');
    await page.locator('.gallery-card').getByText(/ARCHIVE ALBUM/).waitFor();
    await page.locator('.gallery-tile').first().waitFor();
  });

  await check('settings', async () => {
    await page.goto(buildUrl('?screen=title'), { waitUntil: 'networkidle' });
    await waitForOpenPanel(page, '.title-screen');
    await page.getByRole('menuitem', { name: 'CONFIG' }).click();
    await waitForOpenPanel(page, '.config-panel');
    await page.locator('.config-card').getByText(/CONFIG/).waitFor();
    await page.locator('.config-row').first().waitFor();
  });

  await check('date-planner', async () => {
    await page.goto(buildUrl('?screen=game&id=day1-map-after-school'), { waitUntil: 'networkidle' });
    await page.waitForSelector('.map-choice-control');
    await page.getByRole('button', { name: '교문' }).click();
    await page.waitForTimeout(250);
    await page.getByRole('button', { name: 'PLAN' }).click();
    await waitForOpenPanel(page, '.plan-panel');
    await page.locator('.plan-card').getByText(/DATING PLAN/).waitFor();
    await page.locator('.plan-card').getByText(/현재 일정/).waitFor();
    await page.locator('.plan-card').getByText(/최근 장소/).waitFor();
    await page.locator('.plan-card .plan-entry-list').getByText('교문').waitFor();
    await page.keyboard.press('Escape');
    await page.waitForTimeout(100);
    assert.equal(await page.locator('.plan-panel').getAttribute('aria-hidden'), 'true', 'Escape should close PLAN');
  });

  await check('status-modal', async () => {
    await page.goto(buildUrl('?screen=game&id=opening&auto=1'), { waitUntil: 'networkidle' });
    await page.waitForSelector('.game');
    await page.getByRole('button', { name: 'STATUS' }).click();
    await waitForOpenPanel(page, '.status-panel');
    await page.waitForTimeout(1500);
    assert.equal(await page.locator('.status-panel').getAttribute('aria-hidden'), 'false', 'STATUS should stay open while AUTO is enabled');

    const metrics = await page.evaluate(() => {
      const card = document.querySelector('.status-card');
      const list = document.querySelector('.status-list');
      const rows = [...document.querySelectorAll('.status-row')];
      list.scrollTop = list.scrollHeight;
      const cardRect = card.getBoundingClientRect();
      const lastRect = rows[rows.length - 1].getBoundingClientRect();
      return {
        rowCount: rows.length,
        overflowY: getComputedStyle(list).overflowY,
        scrollable: list.scrollHeight > list.clientHeight,
        lastRowVisibleAfterScroll: lastRect.bottom <= cardRect.bottom + 1
      };
    });

    assert.equal(metrics.rowCount, 9, 'STATUS should list all nine relationship targets');
    assert.match(metrics.overflowY, /auto|scroll/, 'STATUS list should be scrollable');
    assert.equal(metrics.scrollable, true, 'STATUS list should scroll instead of clipping rows');
    assert.equal(metrics.lastRowVisibleAfterScroll, true, 'Last STATUS row should be reachable by scrolling');

    await page.keyboard.press('Escape');
    await page.waitForTimeout(100);
    assert.equal(await page.locator('.status-panel').getAttribute('aria-hidden'), 'true', 'Escape should close STATUS');
  });

  await check('ending', async () => {
    await page.goto(buildUrl('?screen=game&id=ending-good'), { waitUntil: 'networkidle' });
    await page.waitForSelector('.game');
    await page.waitForTimeout(250);
    assert.equal(await visibleSvgScene(page, '.scene-dialogue'), true, 'ending dialogue should be visible');
    await page.locator('.speaker-role').first().waitFor({ state: 'attached' });
  });

  await browser.close();

  const playRejects = audioEvents.filter((event) => event.event === 'play-reject');
  // Reject /assets/bgm/ usage: this project currently ships SFX only.
  const bgmEvents = audioEvents.filter((event) => /\/assets\/bgm\//.test(event.src));
  const failedChecks = checks.filter((check) => check.status !== 'passed');
  const result = {
    checkedAt: new Date().toISOString(),
    baseUrl: BASE_URL,
    checks,
    consoleErrors,
    assetErrors,
    playRejects,
    bgmEvents
  };

  await writeFile(OUT_PATH, JSON.stringify(result, null, 2));

  assert.deepEqual(failedChecks, [], 'VN QA checks should all pass.');
  assert.deepEqual(assetErrors, [], 'VN QA should not have missing audio assets.');
  assert.deepEqual(playRejects, [], 'VN QA should not have rejected audio playback.');
  assert.deepEqual(bgmEvents, [], 'VN QA should not play BGM/ambient placeholder assets.');

  console.log(JSON.stringify({
    outPath: OUT_PATH,
    checks: checks.map(({ label, status }) => ({ label, status })),
    assetErrors: assetErrors.length,
    playRejects: playRejects.length,
    bgmEvents: bgmEvents.length
  }, null, 2));
}

await main();
