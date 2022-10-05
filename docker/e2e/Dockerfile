FROM mcr.microsoft.com/playwright:v1.26.0-focal

WORKDIR /app

RUN PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers \
  yarn add playwright dotenv && \
  yarn add -D @playwright/test && \
  npx playwright install

COPY ./e2e ./e2e
COPY ./playwright.config.ts .
COPY .env .env
RUN env

RUN yarn playwright test ./e2e --config playwright.config.ts