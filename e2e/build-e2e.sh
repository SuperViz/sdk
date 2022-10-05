#!/bin/bash

# env | sed '/^E2E_/!d' > .env

docker build --no-cache -t sdk-e2e -f ./docker/e2e/Dockerfile .