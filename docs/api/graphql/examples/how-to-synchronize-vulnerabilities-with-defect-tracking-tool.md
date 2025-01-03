---
id: how-to-synchronize-vulnerabilities-with-defect-tracking-tool
title: How to Synchronize Vulnerabilities with Defect Tracking Tool
sidebar_label: How to Synchronize Vulnerabilities with Defect Tracking Tool
description: Here you will find how to synchronize vulnerabilities with defect tracking tool
keywords: [Sync, API, Defect Tracking, Synchronization, GraphQL]
---

### GraphQL Query

The following GraphQL query can be used to synchronize vulnerabilities with defect tracking tool:

```graphql
mutation {
  syncVulnerabilityWithDefectTracker(input: {id: <ISSUE_ID>}) {
    issue {
      id
    }
  }
}
```

### Response Example

```json
{
  "data": {
    "syncVulnerabilityWithDefectTracker": {
      "issue": {
        "id": "2032807"
      }
    }
  }
}
```