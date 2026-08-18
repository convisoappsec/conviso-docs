import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const API_URL = 'https://api.convisoappsec.com/graphql';

function curlExample(query, variables) {
  return `curl --request POST ${API_URL} \\
  --header "x-api-key: $CONVISO_API_KEY" \\
  --header "content-type: application/json" \\
  --data '${JSON.stringify({ query, variables })}'`;
}

function javascriptExample(query, variables) {
  return `const response = await fetch('${API_URL}', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'x-api-key': process.env.CONVISO_API_KEY,
  },
  body: JSON.stringify({
    query: ${JSON.stringify(query)},
    variables: ${JSON.stringify(variables, null, 4)},
  }),
});

const { data, errors } = await response.json();

if (errors) throw new Error(errors.map(({ message }) => message).join(', '));
console.log(data);`;
}

function pythonExample(query, variables) {
  return `import json
import os
import requests

response = requests.post(
    '${API_URL}',
    headers={
        'content-type': 'application/json',
        'x-api-key': os.environ['CONVISO_API_KEY'],
    },
    json={
        'query': ${JSON.stringify(query)},
        'variables': json.loads(${JSON.stringify(JSON.stringify(variables))}),
    },
    timeout=30,
)
response.raise_for_status()

payload = response.json()
if payload.get('errors'):
    raise RuntimeError(payload['errors'])

print(payload['data'])`;
}

export default function ApiOperationExamples({
  operationName,
  operationType,
  query,
  variables,
  prerequisite,
}) {
  return (
    <section className="api-operation-examples">
      <h2>Example request</h2>
      <p>
        This generated {operationType} uses placeholders for required values. Replace
        them with values available to your API key before running it.
      </p>
      {prerequisite && (
        <div className="api-operation-examples__prerequisite">
          <strong>Before you run it</strong>
          <p>{prerequisite}</p>
        </div>
      )}
      <Tabs groupId={`api-example-${operationName}`}>
        <TabItem value="curl" label="cURL" default>
          <CodeBlock language="bash">{curlExample(query, variables)}</CodeBlock>
        </TabItem>
        <TabItem value="javascript" label="JavaScript">
          <CodeBlock language="javascript">
            {javascriptExample(query, variables)}
          </CodeBlock>
        </TabItem>
        <TabItem value="python" label="Python">
          <CodeBlock language="python">{pythonExample(query, variables)}</CodeBlock>
        </TabItem>
      </Tabs>
    </section>
  );
}
