---
id: how-to-retrieve-an-assets-sbom
title: How to Retrieve an Asset's SBOM
sidebar_label: How to Retrieve an Asset's SBOM
description: Here you will find how to retrieve an asset's SBOM
keywords: [Assets, API, Asset, SBOM, GraphQL]
---

### GraphQL Query

The following GraphQL query can be used to retrieve an asset's SBOM:

```graphql
{
  asset(id: "<ASSET_ID>") {
    name
    sbomComponents(search: {vulnerableOnly: false}, page: 1, limit: 1) {
      additionalData {
        totalOpenVulnerabilities
        updatedAt
      }
      collection {
        issuesBySeverity
        name
        packageManager
        technology
        version
      }
      metadata {
        currentPage
        limitValue
        totalCount
        totalPages
      }
    }
  }
}

```

### Response Example

```json
{
  "data": {
    "asset": {
      "name": "My-Vulnerable-App",
      "sbomComponents": {
        "additionalData": {
          "totalOpenVulnerabilities": 38,
          "updatedAt": "2024-10-04T11:19:50-03:00"
        },
        "collection": [
          {
            "issuesBySeverity": {
              "notification": {
                "count": 0,
                "issue_ids": [],
                "cve": []
              },
              "low": {
                "count": 0,
                "issue_ids": [],
                "cve": []
              },
              "medium": {
                "count": 0,
                "issue_ids": [],
                "cve": []
              },
              "high": {
                "count": 1,
                "issue_ids": [
                  1816552
                ],
                "cve": [
                  "CVE-2021-43138"
                ]
              },
              "critical": {
                "count": 0,
                "issue_ids": [],
                "cve": []
              }
            },
            "name": "async",
            "packageManager": "npm",
            "technology": "javascript",
            "version": "2.6.3"
          }
        ],
        "metadata": {
          "currentPage": 1,
          "limitValue": 1,
          "totalCount": 23,
          "totalPages": 23
        }
      }
    }
  }
}
```