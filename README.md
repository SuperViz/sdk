<p align="center">
  <a href="https://superviz.com/" target="blank"><img src="https://avatars.githubusercontent.com/u/56120553?s=200&v=4" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
The SuperViz SDK enables you to implement SuperViz-supported meetings inside your web app
</p>

<p align="center">
<img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/superviz/sdk/Publish%20SDK">
<img alt="GitHub issues" src="https://img.shields.io/github/issues-raw/superviz/sdk">
<img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/superviz/sdk">
<img alt="GitHub" src="https://img.shields.io/github/license/superviz/sdk">
<img alt="npm type definitions" src="https://img.shields.io/npm/types/@superviz/sdk">
<img alt="npm" src="https://img.shields.io/npm/dw/@superviz/sdk">
</p>

## Description

`@superviz/sdk` is a package that abstracts all operations and management of meeting spaces from SuperViz, including audio, video, screen sharing and virtual 3D spaces.

## Getting started
To check out the guide, visit [https://docs.superviz.com](https://docs.superviz.com)


## Issues
To report a new bug or request a new feature, you can file an issue with the correct template. [Issue reporting](https://github.com/superviz/sdk/issues)

## E2E Tests
Our E2E tests are using [Playwright Framework](https://playwright.dev/), to run, first, install their dependencies and browsers

```bash
yarn && yarn test:e2e:install
```

Set `E2E_BASE_URL` env var to your local execution: Ex: http://localhost:3000

Verify that the first step of the test conforms to the SDK initialization implementation, such as room id, user id and username fields. If you are not using this aproach, just add `skip` annotation to this test stage ([See documentation](https://playwright.dev/docs/test-annotations#skip-a-test)) or remove [this section](https://github.com/SuperViz/sdk/blob/chore/e2e-tests/e2e/meeting-sdk.e2e.spec.ts#L25).

```typescript
test('Fill the params and initialize SDK', async () => {
  await page.locator(LOCATORS.GENERIC_INPUT).first().fill(ROOM_ID);
  await page.locator(LOCATORS.GENERIC_INPUT).nth(1).fill(USER_ID);
  await page.locator(LOCATORS.GENERIC_INPUT).nth(2).fill(USER_NAME);
  await page.locator(LOCATORS.INITIALIZE_SDK_BUTTON).click();
});
```

You can use code generator to pick this locators with command

```bash
yarn test:e2e:generate
```

To run tests in headless mode, execute the command
```bash
yarn test:e2e
```

You can run tests with default language (based on `E2E_LOCALE` env var) or run with one of supported: en, pt-BR with commands:

```bash
# Run tests with English language
yarn test:e2e:en

# Run tests with Portuguese language
yarn test:e2e:pt-BR

# Run tests with all languages
yarn test:e2e:all
```

You can run tests with headed mode with the command
```bash
yarn test:e2e:headed
```

You can run tests with debug mode with the command
```bash
yarn test:e2e:debug
```
----

Superviz SDK is [BSD 2 licensed](LICENSE).
