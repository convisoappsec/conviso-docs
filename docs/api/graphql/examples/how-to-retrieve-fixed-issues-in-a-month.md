---
id: how-to-retrieve-fixed-issues-in-a-month
title: How to Retrieve Fixed Issues in a Month
sidebar_label: How to Retrieve Fixed Issues in a Month
description: Here you will find how to retrieve fixed issues in a month via API
keywords: [Issues, API, Issue, GraphQL, Fixed Issues]
---

### GraphQL Query

The following GraphQL query can be used to retrieve fixed issues in a month for a given company:

```graphql
{
  issues(
    companyId: "<YOUR_COMPANY_ID>"
    pagination: {page: 1, perPage: 1}
    filters: {
      statuses: [FIX_ACCEPTED]
      statusChange: { from: [], to: [FIX_ACCEPTED], date: {startDate: "2024-12-01", endDate: "2024-12-31"} }
    }
    sortBy: RISK_SCORE
    order: DESC
  ) {
    collection {
      asset {
        id
        name
      }
      createdAt
      id
      status
      title
      type
      updatedAt

      ... on ContainerFinding {
        scanSource
        severity
      }

      ... on DastFinding {
        scanSource
        severity
      }

      ... on IacFinding {
        scanSource
        severity
      }

      ... on NetworkVulnerability {
        severity
      }

      ... on SastFinding {
        scanSource
        severity
      }

      ... on ScaFinding {
        scanSource
        severity
      }

      ... on SourceCodeVulnerability {
        severity
      }

      ... on WebVulnerability {
        severity
      }
    }
    metadata {
      currentPage
      limitValue
      totalCount
      totalPages
    }
  }
}
```

### Response Example

```json
{
  "data": {
    "issues": {
      "collection": [
        {
          "asset": {
            "id": "33056",
            "name": "My-Vulnerable-App"
          },
          "createdAt": "2024-07-01T17:14:27-03:00",
          "id": "1488450",
          "status": "FIX_ACCEPTED",
          "title": "Detected a Generic API Key, potentially exposing access to various services and sensitive operations.",
          "type": "SAST_FINDING",
          "updatedAt": "2024-12-10T14:22:23-03:00",
          "scanSource": "conviso_scanner",
          "severity": "MEDIUM"
        }
      ],
      "metadata": {
        "currentPage": 1,
        "limitValue": 1,
        "totalCount": 1,
        "totalPages": 1
      }
    }
  }
}
```