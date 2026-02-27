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

function ensureParentDir(filePath) {
  const parent = path.dirname(filePath);
  if (!fs.existsSync(parent)) {
    fs.mkdirSync(parent, { recursive: true });
  }
}

function normalizeUrl(url) {
  let parsed;

  try {
    parsed = new URL(url);
  } catch {
    throw new Error('Invalid --url. Example: --url=https://platform.example.com/security-feed');
  }

  if (!['http:', 'https:'].includes(parsed.protocol)) {
    throw new Error('Only http/https URLs are supported.');
  }

  return parsed.toString();
}

function sanitizeSegment(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-_]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function screenNameFromUrl(url) {
  const parsed = new URL(url);
  const segments = parsed.pathname.split('/').filter(Boolean);
  const lastSegment = segments.length ? segments[segments.length - 1] : 'screen';
  const sanitized = sanitizeSegment(lastSegment);
  return sanitized || 'screen';
}

function formatUtcTimestamp(date = new Date()) {
  const yyyy = String(date.getUTCFullYear());
  const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(date.getUTCDate()).padStart(2, '0');
  const hh = String(date.getUTCHours()).padStart(2, '0');
  const mi = String(date.getUTCMinutes()).padStart(2, '0');
  const ss = String(date.getUTCSeconds()).padStart(2, '0');
  return `${yyyy}${mm}${dd}-${hh}${mi}${ss}`;
}

async function applyStandardTheme(page) {
  await page.addInitScript(() => {
    localStorage.setItem('theme', 'light');
    localStorage.setItem('color-theme', 'light');
    localStorage.setItem('darkMode', 'false');
    document.documentElement.setAttribute('data-theme', 'light');
  });
}

async function lockVisualDefaults(page) {
  await page.emulateMedia({
    colorScheme: standardScreenshotConfig.colorScheme,
    reducedMotion: 'reduce'
  });

  await page.addStyleTag({
    content: `
      html, body {
        zoom: 100% !important;
      }

      *, *::before, *::after {
        animation: none !important;
        transition: none !important;
        caret-color: transparent !important;
      }
    `
  });

  await page.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    document.body.style.zoom = '100%';
  });
}

async function applyContentStandardization(page) {
  for (const selector of standardScreenshotConfig.hideSelectors) {
    await page.evaluate((sel) => {
      const elements = document.querySelectorAll(sel);
      elements.forEach((element) => {
        element.style.visibility = 'hidden';
      });
    }, selector);
  }

  for (const replacement of standardScreenshotConfig.textReplacements) {
    await page.evaluate(({ pattern, flags, value }) => {
      const regex = new RegExp(pattern, flags);
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      const nodes = [];

      while (walker.nextNode()) {
        nodes.push(walker.currentNode);
      }

      for (const node of nodes) {
        if (!node.nodeValue) continue;
        node.nodeValue = node.nodeValue.replace(regex, value);
      }
    }, replacement);
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const url = args.url ? normalizeUrl(args.url) : '';
  const waitFor = args.waitFor || standardScreenshotConfig.defaultWaitForSelector;

  if (!url) {
    throw new Error('Missing --url. Example: --url=https://platform.example.com/security-feed');
  }

  if (args.name) {
    throw new Error('Flag --name is not allowed in standard mode. File name is generated automatically.');
  }

  if (args.screen) {
    throw new Error('Flag --screen is not allowed in standard mode. File name is generated automatically.');
  }

  const outputFileName = `${screenNameFromUrl(url)}-${formatUtcTimestamp()}.png`;

  const output = path.join(standardScreenshotConfig.outputDir, outputFileName);
  const contextOptions = {
    viewport: standardScreenshotConfig.viewport,
    deviceScaleFactor: standardScreenshotConfig.deviceScaleFactor,
    colorScheme: standardScreenshotConfig.colorScheme,
    locale: standardScreenshotConfig.locale,
    timezoneId: standardScreenshotConfig.timezoneId
  };

  if (fs.existsSync(standardScreenshotConfig.storageStatePath)) {
    contextOptions.storageState = standardScreenshotConfig.storageStatePath;
  } else {
    process.stdout.write(
      `Storage state not found at ${standardScreenshotConfig.storageStatePath}. Capture will run unauthenticated.\n`
    );
  }

  process.stdout.write('Using fixed standard: 1440x900, zoom 100%, theme light, browser chromium.\n');
  process.stdout.write(`Using automatic output name: ${outputFileName}\n`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext(contextOptions);
  const page = await context.newPage();

  await applyStandardTheme(page);
  await page.goto(url, {
    waitUntil: standardScreenshotConfig.waitUntil,
    timeout: standardScreenshotConfig.timeout
  });

  if (waitFor) {
    try {
      await page.waitForSelector(waitFor, {
        timeout: args.waitFor ? standardScreenshotConfig.timeout : standardScreenshotConfig.defaultWaitForTimeout
      });
    } catch (error) {
      if (args.waitFor) {
        throw error;
      }

      process.stdout.write(`Default waitFor selector "${waitFor}" not found. Continuing with current page state.\n`);
    }
  }

  await lockVisualDefaults(page);
  await applyContentStandardization(page);

  ensureParentDir(output);
  await page.screenshot({
    path: output,
    fullPage: standardScreenshotConfig.fullPage,
    type: 'png'
  });

  await context.close();
  await browser.close();

  process.stdout.write(`Standard screenshot created: ${output}\n`);
}

main().catch((error) => {
  process.stderr.write(`Error: ${error.message}\n`);
  process.exitCode = 1;
});
