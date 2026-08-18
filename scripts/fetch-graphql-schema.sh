#!/bin/sh
set -eu

if [ -z "${CONVISO_API_KEY:-}" ]; then
  echo "CONVISO_API_KEY is required to generate the GraphQL documentation." >&2
  exit 1
fi

node -e 'const { getIntrospectionQuery } = require("graphql"); process.stdout.write(JSON.stringify({ query: getIntrospectionQuery() }))' \
  | curl --silent --show-error --request POST https://api.convisoappsec.com/graphql \
      --header "x-api-key: $CONVISO_API_KEY" \
      --header "content-type: application/json" \
      --data-binary @- \
  | node scripts/write-graphql-schema.mjs
