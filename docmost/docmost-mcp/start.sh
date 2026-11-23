#!/usr/bin/env bash
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
exec env \
  DOCMOST_URL=https://docs.kansos.org \
  DOCMOST_EMAIL=heliasjosue@protonmail.com \
  DOCMOST_PASSWORD=mywgyd-pihqe3-kotqoC \
  DOCMOST_ALLOW_WRITE=true \
  node "$SCRIPT_DIR/dist/index.js"
