import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const MIN_LINES = Number(process.env.MIN_SCENARIO_SOURCE_LINES || 10_000);
const files = ['src/data/scenario.js'];

function collectScenarioFiles(directory) {
  if (!existsSync(directory)) return;
  for (const fileName of readdirSync(directory).sort()) {
    const path = join(directory, fileName);
    if (fileName.endsWith('.js')) {
      files.push(path);
    } else if (!fileName.includes('.')) {
      collectScenarioFiles(path);
    }
  }
}

collectScenarioFiles('src/data/scenario');

const counts = files.map((file) => ({
  file,
  lines: readFileSync(file, 'utf8').split(/\r?\n/).length
}));
const total = counts.reduce((sum, entry) => sum + entry.lines, 0);

for (const entry of counts) {
  console.log(`${String(entry.lines).padStart(5, ' ')} ${entry.file}`);
}
console.log(`${String(total).padStart(5, ' ')} total`);

if (total < MIN_LINES) {
  console.error(`Scenario source line count ${total} is below required minimum ${MIN_LINES}.`);
  process.exitCode = 1;
}
