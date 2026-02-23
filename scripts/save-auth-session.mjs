import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';
import { standardScreenshotConfig } from './screenshot-standard.config.mjs';

function parseArgs(argv) {
  const result = {};

  for (const arg of argv) {
    if (!arg.startsWith('--')) continue;

    const [rawKey, ...rest] = arg.slice(2).split('=');
    const value = rest.length ? rest.join('=') : 'true';
    result[rawKey] = value;
  }

  return result;
}

function ensureParentDir(filePath) {
  const parent = path.dirname(filePath);
  if (!fs.existsSync(parent)) {
    fs.mkdirSync(parent, { recursive: true });
  }
}

function ask(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(question, () => {
      rl.close();
      resolve();
    });
  });
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  const loginUrl = args.loginUrl || args.url || standardScreenshotConfig.defaultLoginUrl;

  const output = args.output || standardScreenshotConfig.sessionStatePath;
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({ locale: args.locale || 'en-US' });
  const page = await context.newPage();

  await page.goto(loginUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });

  process.stdout.write('Complete the login flow in the opened browser.\n');
  await ask('Press ENTER here after you are authenticated and on the target page... ');

  ensureParentDir(output);
  await context.storageState({ path: output });

  await context.close();
  await browser.close();

  process.stdout.write(`Session saved: ${output}\n`);
}

main().catch((error) => {
  process.stderr.write(`Error: ${error.message}\n`);
  process.exitCode = 1;
});
