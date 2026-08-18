---
id: context-and-identifiers
title: Context and identifiers
sidebar_label: Context and identifiers
description: How to supply company and project context to Conviso GraphQL API operations.
---

Some GraphQL operations need an identifier from a parent resource. The API schema shows the argument types, while the supported Conviso CLI documents a small number of additional scope conventions.

## Context flow

```text
company_id
    │
    ├── projects: params.scopeIdEq
    ├── assets, issues, SBOM: companyId
    └── requirements: scopeId
              │
              └── project_id
                    └── activities and project-specific operations
```

Replace placeholders such as `<company_id>` and `<project_id>` in the generated examples with IDs that your API key is authorized to access.

## Projects need company scope

`projects` accepts optional filters in the schema, but the API requires the company scope in practice. The official CLI uses `ProjectSearch.scopeIdEq`:

```json
{
  "page": 1,
  "limit": 20,
  "params": {
    "scopeIdEq": "<company_id>"
  },
  "descending": false
}
```

Use an ID from a company your API key can access. Supplying an empty scope can result in a `Scope - Resource not accessible for id:` response.

## How generated examples are maintained

The operation signature and selection set are generated from GraphQL introspection. Scope rules that introspection cannot express are stored once in the master context catalogue, `scripts/api-operation-contexts.mjs`, and are traced to the corresponding command in `conviso-cli`.

This keeps deployment self-contained: the docs build does not need a checkout of the CLI. When CLI behaviour changes, update the catalogue entry and regenerate the GraphQL reference pages.
