#!/bin/bash

if test -f ".env"; then
    eval $(cat .env | xargs)
    echo "Using .env file"
else
    echo "No .env file found"
fi

docker build --no-cache -t sdk-e2e \
  --build-arg E2E_BASE_URL=$E2E_BASE_URL \
  --build-arg E2E_LOCALE=$E2E_LOCALE \
  --build-arg E2E_ROOM_ID=$E2E_ROOM_ID \
  --build-arg E2E_USER_NAME=$E2E_USER_NAME \
  --build-arg E2E_USER_ID=$E2E_USER_ID \
   -f ./e2e/docker/Dockerfile .