import os from 'node:os';
import path from 'node:path';

const sessionStatePath = path.join(os.homedir(), '.conviso-docs', 'platform-session.json');

export const standardScreenshotConfig = {
  browser: 'chromium',
  defaultLoginUrl: 'https://app.convisoappsec.com/spa/auth/login',
  sessionStatePath,
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
  colorScheme: 'light',
  locale: 'en-US',
  timezoneId: 'UTC',
  fullPage: true,
  timeout: 60000,
  waitUntil: 'networkidle',
  defaultWaitForSelector: '#q-app',
  defaultWaitForTimeout: 10000,
  storageStatePath: sessionStatePath,
  outputDir: 'static/img/screenshots',
  hideSelectors: [
    '.q-notification',
    '.q-tooltip',
    '[role="alert"]'
  ],
  textReplacements: [
    {
      pattern: '\\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}\\b',
      flags: 'gi',
      value: 'demo@convisoappsec.com'
    },
    {
      pattern: '\\b([A-Fa-f0-9]{8,})\\b',
      flags: 'g',
      value: '00000000'
    }
  ]
};
