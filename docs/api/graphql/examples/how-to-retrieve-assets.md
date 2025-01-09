---
id: how-to-retrieve-assets
title: How to Retrieve Assets
sidebar_label: How to Retrieve Assets
description:   Here you will find how to retrieve assets via API
keywords: [Assets, API, Asset, GraphQL]
---

### GraphQL Query

The following GraphQL query can be used to retrieve assets for a given company:

```graphql
{
  assets(companyId: "<YOUR_COMPANY_ID>", page: 1, limit: 1, search: {}) {
    collection {
      activeDevelopers(lastDays: 1, pagination: {page: 1, perPage: 1}) {
        collection {
          email
          name
        }
      }
      assetsTagList
      businessImpact
      company {
        label
      }
      createdAt
      dataClassification
      description
      exploitability
      id
      integrationDetails {
        collection {
          currentStatus
          failedReason
          lastSyncDate
          scanSource
        }
      }
      integrations
      name
      pendingVulnerabilitiesStats {
        count
        value
      }
      projects(includeAst: false) {
        label
      }
      repoUrl
      riskScore {
        current {
          value
        }
      }
      teams {
        label
      }
      technologies
      threat
      updatedAt
      url
    }
    metadata {
      totalPages
    }
  }
}
```

### Response Example

```json
{
  "data": {
    "assets": {
      "collection": [
        {
          "activeDevelopers": {
            "collection": [
              {
                "email": "ilya@email.com",
                "name": "Ilya"
              }
            ]
          },
          "assetsTagList": [
            "api",
            "bank"
          ],
          "businessImpact": "HIGH",
          "company": {
            "label": "My Company"
          },
          "createdAt": "2024-05-15T17:35:41-03:00",
          "dataClassification": [
            "PAYMENT_CARD_INDUSTRY"
          ],
          "exploitability": "INTERNET_FACING",
          "id": "33056",
          "integrationDetails": {
            "collection": [
              {
                "currentStatus": "SUCCEEDED",
                "failedReason": null,
                "lastSyncDate": "2024-12-26T10:53:20-03:00",
                "scanSource": "Fortify"
              },
              {
                "currentStatus": "SUCCEEDED",
                "failedReason": null,
                "lastSyncDate": "2024-12-26T10:52:08-03:00",
                "scanSource": "Dependency_Track"
              }
            ]
          },
          "integrations": [
            "CONVISO_AST",
            "AZURE_BOARDS",
            "FORTIFY",
            "DEPENDENCY_TRACK"
          ],
          "name": "My-Vulnerable-App",
          "pendingVulnerabilitiesStats": [
            {
              "count": 0,
              "value": "NOTIFICATION"
            },
            {
              "count": 34,
              "value": "LOW"
            },
            {
              "count": 25,
              "value": "MEDIUM"
            },
            {
              "count": 17,
              "value": "HIGH"
            },
            {
              "count": 5,
              "value": "CRITICAL"
            }
          ],
          "projects": [
            {
              "label": "Pentest - My-Vulnerable-App"
            }
          ],
          "repoUrl": "https://github.com/user/My-Vulnerable-App",
          "riskScore": {
            "current": {
              "value": 99
            }
          },
          "teams": [
            {
              "label": "Backend Team"
            }
          ],
          "technologies": [
            "Android",
            "c",
            "ccpp",
            "cmake",
            "css",
            "Dockerfile",
            "Gradle",
            "HTML",
            "java",
            "JavaScript",
            "makefile",
            "pip requirements",
            "Proguard",
            "shell",
            "sql",
            "toml"
          ],
          "threat": "CRITICAL",
          "updatedAt": "2024-12-26T20:11:02-03:00",
          "url": "http://testhtml5.vulnweb.com/#/popular"
        }
      ],
      "metadata": {
        "totalPages": 1
      }
    }
  }
}
```