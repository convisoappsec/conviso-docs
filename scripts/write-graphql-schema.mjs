import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { buildClientSchema, printSchema } from 'graphql';

const outputPath = resolve('static/schema.generated.graphql');
let responseBody = '';

for await (const chunk of process.stdin) {
  responseBody += chunk;
}

let payload;
try {
  payload = JSON.parse(responseBody);
} catch {
  throw new Error('Schema introspection returned an invalid JSON response.');
}

if (payload.errors?.length) {
  throw new Error(`Schema introspection failed: ${payload.errors[0].message}`);
}

if (!payload.data) {
  throw new Error('Schema introspection returned no schema data.');
}

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${printSchema(buildClientSchema(payload.data))}\n`);
console.info(`[graphql-docs] Schema saved to ${outputPath}`);
