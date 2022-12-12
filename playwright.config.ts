import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = process.env.E2E_BASE_URL || 'http://localhost:3000';
const CI_ENABLED = process.env.E2E_CI === 'true';

// WEBRTC Test configuration options.
// https://webrtc.org/getting-started/testing

const CHROME = {
  name: 'chromium',
  use: {
    ...devices['Desktop Chrome'],
    permissions: ['camera', 'microphone'],
    launchOptions: {
      headless: true,
      args: [
        '--use-fake-ui-for-media-stream',
        '--use-fake-ui-for-media-stream',
        '--use-fake-device-for-media-stream',
        '--disable-translate',
      ],
    },
    locale: process.env.E2E_LOCALE,
  },
};

const FIREFOX = {
  name: 'firefox',
  use: {
    ...devices['Desktop Firefox'],
    launchOptions: {
      firefoxUserPrefs: {
        'media.navigator.streams.fake': true,
        'permissions.default.microphone': 1,
        'permissions.default.camera': 1,
      },
    },
    locale: process.env.E2E_LOCALE,
  },
};

const config: PlaywrightTestConfig = {
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!CI_ENABLED,
  retries: CI_ENABLED ? 2 : 0,
  workers: undefined,
  reporter: CI_ENABLED ? 'dot' : 'list',
  use: {
    actionTimeout: 0,
    baseURL: BASE_URL,
    trace: 'on-first-retry',
  },
  projects: [CHROME],
};

export default config;
