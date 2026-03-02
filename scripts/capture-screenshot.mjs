import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
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

function toBool(value, fallback = false) {
  if (value === undefined) return fallback;
  return ['1', 'true', 'yes', 'on'].includes(String(value).toLowerCase());
}

function parseViewport(value) {
  if (!value) return { width: 1440, height: 900 };

  const [width, height] = value.split('x').map((item) => Number(item));
  if (!Number.isInteger(width) || !Number.isInteger(height)) {
    throw new Error(`Invalid --viewport value: ${value}. Expected format WIDTHxHEIGHT.`);
  }

  return { width, height };
}

function ensureParentDir(filePath) {
  const parent = path.dirname(filePath);
  if (!fs.existsSync(parent)) {
    fs.mkdirSync(parent, { recursive: true });
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  const url = args.url;
  if (!url) {
    throw new Error('Missing --url. Example: --url=https://platform.example.com/security-feed');
  }

  const output = args.output || `.tmp/screenshots/${new Date().toISOString().replaceAll(':', '-')}.png`;
  const storageStatePath = args.storageState || standardScreenshotConfig.sessionStatePath;
  const viewport = parseViewport(args.viewport);
  const fullPage = toBool(args.fullPage, true);
  const timeout = Number(args.timeout || 45000);
  const waitUntil = args.waitUntil || 'networkidle';
  const waitFor = args.waitFor;
  const hideSelectors = (args.hide || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  const contextOptions = {
    viewport,
    locale: args.locale || 'en-US'
  };

  if (fs.existsSync(storageStatePath)) {
    contextOptions.storageState = storageStatePath;
  } else {
    process.stdout.write(`Storage state not found at ${storageStatePath}. Capturing without authenticated session.\n`);
  }

  const browser = await chromium.launch({
    headless: !toBool(args.headed, false)
  });

  const context = await browser.newContext(contextOptions);
  const page = await context.newPage();

  await page.goto(url, { waitUntil, timeout });

  if (waitFor) {
    await page.waitForSelector(waitFor, { timeout });
  }

  await page.emulateMedia({ reducedMotion: 'reduce' });

  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation: none !important;
        transition: none !important;
        caret-color: transparent !important;
      }
    `
  });

  for (const selector of hideSelectors) {
    await page.evaluate((sel) => {
      const elements = document.querySelectorAll(sel);
      elements.forEach((element) => {
        element.setAttribute('data-doc-hidden', 'true');
        element.style.visibility = 'hidden';
      });
    }, selector);
  }

  ensureParentDir(output);
  await page.screenshot({
    path: output,
    fullPage,
    type: 'png'
  });

  await context.close();
  await browser.close();

  process.stdout.write(`Screenshot created: ${output}\n`);
}

main().catch((error) => {
  process.stderr.write(`Error: ${error.message}\n`);
  process.exitCode = 1;
});
