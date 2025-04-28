---
id: how-to-retrieve-users-invited-to-my-company
title: How to Retrieve Users Invited to my Company
sidebar_label: How to Retrieve Users Invited to my Company
description: Here you will find how to retrieve users invited to your company
keywords: [Users, API, User, GraphQL]
---

### GraphQL Query

The following GraphQL query can be used to retrieve users invited to your company:

```graphql
{
  portalUserByCompany(companyId: "<YOUR_COMPANY_ID>", page: 1, limit: 1, params: {}) {
    collection {
      id
      name
      email
      createdAt
      profile(companyId: "<YOUR_COMPANY_ID>") {
        name
      }
      blocked
      invite(companyId: "<YOUR_COMPANY_ID>") {
        invitedByUser {
          email
          name
        }
        status
      }
      teams(companyId: "<YOUR_COMPANY_ID>") {
        label
      }
      licenses(companyId: "<YOUR_COMPANY_ID>")
      updatedAt
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
    "portalUserByCompany": {
      "collection": [
        {
          "id": "6564",
          "name": "Ilya",
          "email": "ilya@email.com",
          "createdAt": "2024-02-26T13:21:06-03:00",
          "profile": {
            "name": "Admin"
          },
          "blocked": false,
          "invite": {
            "invitedByUser": {
              "email": "andrey@email.com",
              "name": "andrey@email.com"
            },
            "status": "registered_user"
          },
          "teams": [
            {
              "label": "Backend"
            }
          ],
          "licenses": [
            "SECURE_CODE"
          ],
          "updatedAt": "2024-12-20T13:50:42-03:00"
        }
      ],
      "metadata": {
        "currentPage": 1,
        "limitValue": 1,
        "totalCount": 1,
        "totalPages": 30
      }
    }
  }
}
```