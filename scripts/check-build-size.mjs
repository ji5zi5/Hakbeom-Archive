import assert from 'node:assert/strict';
import { existsSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const DIST_ASSETS_DIR = 'dist/assets';
const INITIAL_JS_LIMIT_BYTES = 180_000;
const ASYNC_ROUTE_SCENARIO_LIMIT_BYTES = 140_000;

function toKb(bytes) {
  return Number((bytes / 1000).toFixed(2));
}

assert.ok(
  existsSync(DIST_ASSETS_DIR),
  'dist/assets should exist before checking build size; run npm run build first.'
);

const jsAssets = readdirSync(DIST_ASSETS_DIR)
  .filter((fileName) => fileName.endsWith('.js'))
  .map((fileName) => {
    const filePath = path.join(DIST_ASSETS_DIR, fileName);
    return {
      fileName,
      filePath,
      bytes: statSync(filePath).size
    };
  })
  .sort((left, right) => right.bytes - left.bytes);

const initialChunks = jsAssets.filter((asset) => /^index-[\w-]+\.js$/.test(asset.fileName));
assert.ok(initialChunks.length > 0, 'Build should emit an initial index-*.js chunk.');

const initialChunk = initialChunks.sort((left, right) => right.bytes - left.bytes)[0];
assert.ok(
  initialChunk.bytes <= INITIAL_JS_LIMIT_BYTES,
  `Initial JS chunk ${initialChunk.fileName} is ${toKb(initialChunk.bytes)} kB; expected <= ${toKb(INITIAL_JS_LIMIT_BYTES)} kB.`
);

const asyncRouteScenarioChunk = jsAssets
  .filter((asset) => asset.fileName !== initialChunk.fileName)
  .find((asset) => /routeDepthExpansionRegistry|day\d+|endings|longformDatingExpansion/.test(asset.fileName));

assert.ok(asyncRouteScenarioChunk, 'Build should emit at least one route/scenario async JS chunk.');
assert.ok(
  asyncRouteScenarioChunk.bytes <= ASYNC_ROUTE_SCENARIO_LIMIT_BYTES,
  `Largest route/scenario async chunk ${asyncRouteScenarioChunk.fileName} is ${toKb(asyncRouteScenarioChunk.bytes)} kB; expected <= ${toKb(ASYNC_ROUTE_SCENARIO_LIMIT_BYTES)} kB.`
);

console.log(JSON.stringify({
  initialChunk: {
    fileName: initialChunk.fileName,
    kB: toKb(initialChunk.bytes),
    limitKB: toKb(INITIAL_JS_LIMIT_BYTES)
  },
  largestRouteScenarioAsyncChunk: {
    fileName: asyncRouteScenarioChunk.fileName,
    kB: toKb(asyncRouteScenarioChunk.bytes),
    limitKB: toKb(ASYNC_ROUTE_SCENARIO_LIMIT_BYTES)
  },
  metric: 'raw-uncompressed-kB',
  gzipPassMetric: false
}, null, 2));
