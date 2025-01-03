---
id: how-to-retrieve-an-assets-risk-score-history
title: How to Retrieve an Asset's Risk Score History
sidebar_label: How to Retrieve an Asset's Risk Score History
description: Here you will find how to retrieve an asset's risk score history
keywords: [Assets, API, Asset, Risk Score, Risk Score History, GraphQL]
---

### GraphQL Query

The following GraphQL query can be used to retrieve an asset's risk score history:

```graphql
{
  riskScoreOverTime(companyId: "<COMPANY_ID>", params: {assetIds: ["<ASSET_ID>"], startDate: "2024-01-01", endDate: "2025-12-31"}) {
    date
    value
  }
}
```

### Response Example

```json
{
  "data": {
    "riskScoreOverTime": [
      {
        "date": "2024-06-03T00:00:00+00:00",
        "value": 97.52
      },
      {
        "date": "2024-06-07T00:00:00+00:00",
        "value": 93.06
      },
      {
        "date": "2024-07-22T00:00:00+00:00",
        "value": 97.52
      },
      {
        "date": "2024-08-02T00:00:00+00:00",
        "value": 99
      },
      {
        "date": "2024-09-14T00:00:00+00:00",
        "value": 97.52
      },
      {
        "date": "2024-10-21T00:00:00+00:00",
        "value": 93.06
      }
    ]
  }
}
```