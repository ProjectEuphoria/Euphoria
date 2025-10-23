#!/usr/bin/env bash
set -euxo pipefail
export NPM_CONFIG_PRODUCTION=false

npm ci
npm run build

# sanity checks for EB to know it's good
test -f dist/api/http.server.js
test -f dist/index.html || test -d dist/assets
