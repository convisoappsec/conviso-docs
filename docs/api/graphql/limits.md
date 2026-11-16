---
title: Limits and query cost
sidebar_label: Limits and query cost
description: Rate limits and GraphQL query cost controls for the Conviso API.
---

## Request rate

The API accepts up to **1,200 requests per minute**. A request above that rate
returns HTTP `429`. Retry with exponential backoff instead of immediately
repeating the request.

## Query cost

Before execution, the API validates two limits:

| Limit | Default | Meaning |
| --- | --- | --- |
| Maximum depth | `15` | Nested selection sets cannot be deeper than 15 levels. |
| Maximum complexity | `400` | Each requested field counts as one point. |

An operation that exceeds either limit returns a GraphQL validation error; it
does not execute any resolvers or return data.

Keep operations efficient by requesting only the fields you need, avoiding deep
nesting, and splitting unrelated work into separate operations.

## When a request fails

- For HTTP `429`, reduce request frequency and retry with increasing delays.
- For a depth or complexity error, remove unnecessary fields or split the query.
- If a valid workflow is still rejected, contact support with the operation and error message.
