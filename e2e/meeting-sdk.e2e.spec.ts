// @ts-check
import { test } from '@playwright/test';

import { LOCATORS, LANGUAGES } from './utils/locators';

const LANG = process.env.E2E_LOCALE || 'en';
const ROOM_ID = process.env.E2E_ROOM_ID;
const USER_NAME = process.env.E2E_USER_NAME;
const USER_ID = process.env.E2E_USER_ID;

const sdkInitialization = async (page, baseURL) => {
  await page.goto(`${baseURL}`);
  await page.locator(LOCATORS.GENERIC_INPUT).first().fill(ROOM_ID);
  await page.locator(LOCATORS.GENERIC_INPUT).nth(1).fill(USER_ID);
  await page.locator(LOCATORS.GENERIC_INPUT).nth(2).fill(USER_NAME);
  await page.locator(LOCATORS.INITIALIZE_SDK_BUTTON).click();
  await page
    .frameLocator(LOCATORS.VIDEO_FRAME)
    .locator(LOCATORS.MEETINGS_SETTINGS_TITLE[LANG])
    .isVisible();
  await page
    .frameLocator(LOCATORS.VIDEO_FRAME)
    .locator(LOCATORS.MEETING_SETTINGS_SUBTITLE[LANG])
    .isVisible();
  await page.frameLocator(LOCATORS.VIDEO_FRAME).locator(LOCATORS.JOIN_BUTTON[LANG]).click();
};

test.describe(`Initialize meeting from SDK demo [${LANGUAGES[LANG]}]`, () => {
  test('Initialize meeting with params (room, user_id and user_name)', async ({
    page,
    baseURL,
  }) => {
    await sdkInitialization(page, baseURL);
  });

  test('Change meeting configuration', async ({ page, baseURL }) => {
    await sdkInitialization(page, baseURL);
    await page.frameLocator(LOCATORS.VIDEO_FRAME).locator(`text=${USER_NAME}`).isVisible();
    await page.frameLocator(LOCATORS.VIDEO_FRAME).locator('button:nth-child(2)').first().click();
    await page
      .frameLocator(LOCATORS.VIDEO_FRAME)
      .locator(LOCATORS.MEETINGS_SETUP_TITLE[LANG])
      .isVisible();
  });
});
