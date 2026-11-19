---
id: api-overview
title: Conviso API
sidebar_label: Overview
description: Start using the Conviso GraphQL API.
keywords: [Conviso API, GraphQL API]
image: '/static/img/apioverviewseo.png'
---

import Link from '@docusaurus/Link';
import ApiUrls from '@site/src/components/ApiUrls';

The Conviso API is a GraphQL API for automating platform workflows. Use it to
read and manage projects, assets, vulnerabilities, scans, and integrations.

<ApiUrls />

## Start here

1. Create an API key in **Security Feed → Generate API Key** and store it securely.
2. Send it in every request with the `x-api-key` header.
3. Find the company or project scope required by your operation.
4. Choose a workflow guide, then use the full schema reference only when you need additional fields or operations.

```bash
curl --request POST https://api.convisoappsec.com/graphql \
  --header "x-api-key: $CONVISO_API_KEY" \
  --header "content-type: application/json" \
  --data '{"query":"{ __typename }"}'
```

## Choose your next step

- <Link to="/api/graphql/context-and-identifiers">Context and identifiers</Link> — find and use `company_id` and `project_id`.
- <Link to="/api/graphql/guides/projects">Projects</Link> — list, create, and update projects.
- <Link to="/api/graphql/guides/assets-and-applications">Assets and applications</Link> — manage your asset inventory.
- <Link to="/api/graphql/guides/vulnerabilities">Vulnerabilities</Link> — find, assign, and triage issues.
- <Link to="/api/graphql/guides/users-and-access">Users and access</Link> — invite users and manage profiles, permissions, and teams.
- <Link to="/api/graphql/playground">GraphQL Playground</Link> — explore and run operations interactively.
- <Link to="/api/graphql/limits">Limits and query cost</Link> — understand rate, depth, and complexity limits.

## Complete schema

The <Link to="/api/graphql/documentation">complete GraphQL reference</Link>
contains every query, mutation, type, input, and enum. It is best used as a
lookup tool after you have identified the workflow you need.
