---
id: how-to-retrieve-issues
title: How to Retrieve Issues
sidebar_label: How to Retrieve Issues
description: Here you will find how to retrieve issues via API
keywords: [Issuess, API, Issue, GraphQL]
---

### GraphQL Query

The following GraphQL query can be used to retrieve issues for a given company:

```graphql
{
  issues(
    companyId: "<YOUR_COMPANY_ID>"
    pagination: {page: 1, perPage: 1}
    filters: {
      statuses: [IDENTIFIED, IN_PROGRESS, AWAITING_VALIDATION]
      severities: [CRITICAL, HIGH]
      failureTypes: [SAST_FINDING, SCA_FINDING]
      projectTypes: []
      assetIds: []
      projectIds: []
      integrationTypes: []
      assetTags: []
      createdAtRange: {}
      title: ""
      partialTitle: ""
      cves: []
      categories: []
      statusChange: { from: [], to: [], date: {} }
    }
    sortBy: RISK_SCORE
    order: DESC
  ) {
    collection {
      asset {
        id
        name
      }
      author {
        name
      }
      createdAt
      id
      project {
        label
      }
      status
      statusHistory {
        createdAt
        status
        source {
          name
        }
      }
      title
      type
      updatedAt

      ... on ContainerFinding {
        scanSource
        severity
        detail {
          affectedVersion
          cve
          package
          patchedVersion
        }
      }

      ... on DastFinding {
        scanSource
        severity
        detail {
          method
          parameters
          port
          request
          response
          scheme
          url
        }
      }

      ... on IacFinding {
        scanSource
        severity
        detail {
          fileName
          vulnerableLine
        }
      }

      ... on NetworkVulnerability {
        severity
        detail {
          address
          attackVector
          port
          protocol
        }
      }

      ... on SastFinding {
        scanSource
        severity
        detail {
          fileName
          vulnerableLine
        }
      }

      ... on ScaFinding {
        scanSource
        severity
        detail {
          cve
          fileName
          package
          affectedVersion
          patchedVersion
        }
      }

      ... on SourceCodeVulnerability {
        severity
        detail {
          fileName
          vulnerableLine
        }
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
            "id": "35831",
            "name": "My-Vulnerable-App"
          },
          "author": {
            "name": "Ilya"
          },
          "createdAt": "2024-08-23T08:29:29-03:00",
          "id": "2032807",
          "project": {
            "label": "Pentest - My-Vulnerable-App"
          },
          "status": "IDENTIFIED",
          "statusHistory": [
            {
              "createdAt": "2024-08-23T08:29:29-03:00",
              "status": "CREATED",
              "source": {
                "name": "Ilya"
              }
            },
            {
              "createdAt": "2024-08-23T08:29:29-03:00",
              "status": "IDENTIFIED",
              "source": {
                "name": "Ilya"
              }
            }
          ],
          "title": "Arbitrary Code Execution in grunt",
          "type": "SCA_FINDING",
          "updatedAt": "2024-08-23T08:29:29-03:00",
          "scanSource": "conviso_scanner",
          "severity": "HIGH",
          "detail": {
            "cve": "CVE-2020-7729",
            "fileName": "package-lock.json",
            "package": "grunt",
            "affectedVersion": "1.0.3",
            "patchedVersion": "1.3.0"
          }
        }
      ],
      "metadata": {
        "currentPage": 1,
        "limitValue": 1,
        "totalCount": 985,
        "totalPages": 985
      }
    }
  }
}
```