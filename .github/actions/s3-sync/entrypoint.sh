#!/bin/sh

set -e

if [ -z "$AWS_S3_BUCKET" ]; then
  echo "AWS_S3_BUCKET is not set. Quitting."
  exit 1
fi

if [ -z "$AWS_ACCESS_KEY_ID" ]; then
  echo "AWS_ACCESS_KEY_ID is not set. Quitting."
  exit 1
fi

if [ -z "$AWS_SECRET_ACCESS_KEY" ]; then
  echo "AWS_SECRET_ACCESS_KEY is not set. Quitting."
  exit 1
fi

if [ -z "$AWS_DEFAULT_REGION" ]; then
  echo "AWS_DEFAULT_REGION is not set. Quitting."
  exit 1
fi


if [ -z "$PROJECT_NAME" ]; then
  echo "PROJECT_NAME is not set. Quitting."
  exit 1
fi


mkdir -p ~/.aws
touch ~/.aws/credentials

echo "[default]
aws_access_key_id = ${AWS_ACCESS_KEY_ID}
aws_secret_access_key = ${AWS_SECRET_ACCESS_KEY}" > ~/.aws/credentials

echo "Install dependencies"
yarn

echo "Generate docs"
yarn doc
rm -rf docs/api/graphql/documentation/introduction.md

echo "Run yarn build"
yarn build

echo "Copying to website folder"
aws s3 sync ./build s3://${AWS_S3_BUCKET} --exact-timestamps --delete --region ${AWS_DEFAULT_REGION} $*

echo "Invalidate cloudfront distribution"
aws cloudfront create-invalidation \
  --cli-input-json "{\"DistributionId\":\"E2IPBQYF2W483C\",\"InvalidationBatch\":{\"Paths\":{\"Quantity\":1,\"Items\":[\"/*\"]},\"CallerReference\":\"$(date +%s)\"}}"

echo "Cleaning up things"

rm -rf ~/.aws
