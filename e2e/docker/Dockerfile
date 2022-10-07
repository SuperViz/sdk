FROM mcr.microsoft.com/playwright:v1.26.0-focal

ARG E2E_CI=true
ENV E2E_CI=${E2E_CI}
ARG E2E_BASE_URL
ENV E2E_BASE_URL=${E2E_BASE_URL}
ARG E2E_LOCALE=en
ENV E2E_LOCALE=${E2E_LOCALE}
ARG E2E_ROOM_ID
ENV E2E_ROOM_ID=${E2E_ROOM_ID}
ARG E2E_USER_NAME
ENV E2E_USER_NAME=${E2E_USER_NAME}
ARG E2E_USER_ID
ENV E2E_USER_ID=${E2E_USER_ID}

WORKDIR /app

RUN PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers \
  yarn add playwright dotenv && \
  yarn add -D @playwright/test && \
  npx playwright install

COPY ./e2e ./e2e
COPY ./playwright.config.ts .

RUN yarn playwright test ./e2e --config playwright.config.ts