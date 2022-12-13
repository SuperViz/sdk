import { Page, test } from '@playwright/test';

import { LOCATORS, LANGUAGES } from './utils/locators';

const LOCALE = process.env.E2E_LOCALE || 'en';
const ROOM_ID = process.env.E2E_ROOM_ID || 'test-room';
const USER_NAME = process.env.E2E_USER_NAME || 'test-user';
const USER_ID = process.env.E2E_USER_ID || 'test-user-id';

test.describe(`SDK demo [${LANGUAGES[LOCALE]}]`, () => {
  test.describe.configure({ mode: 'serial' });
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test.afterAll(async ({ browser }) => {
    await browser.close();
  });

  test.describe('🟢 with avatars', () => {
    test('Open SDK demo page', async ({ baseURL }) => {
      await page.goto(`${baseURL}?defaultAvatars=true`);
    });

    test('Fill the params and initialize SDK', async () => {
      await page.locator(LOCATORS.GENERIC_INPUT).first().fill(ROOM_ID);
      await page.locator(LOCATORS.GENERIC_INPUT).nth(1).fill(USER_ID);
      await page.locator(LOCATORS.GENERIC_INPUT).nth(2).fill(USER_NAME);
      await page.locator(LOCATORS.INITIALIZE_SDK_BUTTON).click();
    });

    test('Check if meeting are started and go to avatar selection', async () => {
      await page
        .frameLocator(LOCATORS.VIDEO_FRAME)
        .locator(LOCATORS.MEETINGS_SETTINGS_TITLE[LOCALE]);
      await page
        .frameLocator(LOCATORS.VIDEO_FRAME)
        .locator(LOCATORS.MEETING_SETTINGS_SUBTITLE[LOCALE]);
      await page.frameLocator(LOCATORS.VIDEO_FRAME).locator(LOCATORS.NEXT_BUTTON[LOCALE]).click();
    });

    test('Select avatar and go to meeting room', async () => {
      await page.frameLocator(LOCATORS.VIDEO_FRAME).locator('button:nth-child(2)').first().click();
      await page.frameLocator(LOCATORS.VIDEO_FRAME).locator(LOCATORS.JOIN_BUTTON[LOCALE]).click();
    });

    test('Change meeting configuration', async () => {
      await page.frameLocator(LOCATORS.VIDEO_FRAME).locator(`text=${USER_NAME}`);
      await page.frameLocator(LOCATORS.VIDEO_FRAME).locator('button:nth-child(2)').first().click();
      await page.frameLocator(LOCATORS.VIDEO_FRAME).locator(LOCATORS.MEETINGS_SETUP_TITLE[LOCALE]);
    });
  });
});
