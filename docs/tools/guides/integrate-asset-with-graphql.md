---
id: integrate-asset-with-graphql
title: How to integrate asset via GraphQL
sidebar_label: Integrate asset via GraphQL
description: There are three different ways to submit Deploy to Code Review. Find out which strategy best suits your repository.
keywords: [GraphQL Integrate Fortify Dependency Track]
---

## Introduction
In this guide, we will explain how to integrate an asset via GraphQL, enabling its inclusion in the execution of a specific pipeline.

## Integrating an Asset

To integrate an asset from an external platform (e.g., Fortify, Dependency Track), we will need some information.

- projectIds: IDs of the projects on external platforms.
- companyId: ID of the company on the Conviso Platform where the integration was created.
- integration: the type of integration to which the IDs listed in projectIds refer, e.g., DEPENDENCY_TRACK, FORTIFY.

Now, we will use the **associateProject** mutation to create an asset on the Conviso Platform and associate it with the project on the external platform.

Below is an example of the request:

```graphql
mutation AssociateProject {
  associateProject(
    input: {
      projectIds: [<PROJECT_IDS>]
      companyId: <COMPANY_ID>
      integration: DEPENDENCY_TRACK | FORTIFY
    }
  ){
    data {
      asset {
        id
        name
      }
      externalToolProject {
        reference
        referenceName
        integrationType
      }
    }
  }
}
```

After using this mutation, the response follows the template below:

```graphql
{
  "data": {
    "associateProject": {
      "data": {
        "asset": {
          "id": "50",
          "name": "test-bom "
        },
        "externalToolProject": {
          "reference": "73ceb412-15ae-432f-b0f0-995bd5e18cd4",
          "referenceName": "test-bom ",
          "integrationType": "dependency_track"
        }
      }
    }
  }
}
```

The data available at ```data.associateProject.data.asset.id ("id": "50")``` can be used for other activities in the pipeline, such as initiating the synchronization of an asset with a specific platform, as we will demonstrate in the next section.

**NOTE: The process of importing/synchronizing an asset is asynchronous. The success confirmation message refers to adding this asset to the processing queue. The processing of the import/synchronization may take a few minutes. Further below, we demonstrate how to monitor the synchronization status.**

## Initiating synchronization via GraphQL

To initiate an integration via GraphQL, we need some information:

- assetId: ID of the asset in the Conviso Platform.
- integration: the tool with which you want to initiate the integration.

Now, we will use the **syncAsset** mutation to start a synchronization between Conviso Platform and the integration in the specified asset.

Below is an example of the request:

```graphql
mutation SyncAsset (
  $assetId: ID!,
  $integration: ToolTypeCategory!,
){
  syncAsset(
    input: {
      assetId: $assetId
      integration: DEPENDENCY_TRACK
    }
  ){
    assetId
    failureReason
    integration
  }
}
```

The response to this request follows the following template:

```graphql
{
  "data": {
    "syncAsset": {
      "assetId": "50",
      "failureReason": null,
      "integration": "dependency_track"
    }
  }
}
```

**NOTE: Synchronization is an asynchronous process and may take a few minutes to complete.**

## Monitoring the synchronization status

To monitor a synchronization between the platform and a tool, simply follow the steps below:

We will use the **Asset** query with the ID of the asset in the Conviso Platform that you want to check if the integration has finished.

Below is the example of the GraphQL query:

```graphql
query Asset {
  asset(id: "50") {
    id
    integrationDetails {
      collection{
        scanSource
        currentStatus
      }
    }
  }
}
```

The response to this query follows the template below:

```graphql
{
  "data": {
    "asset": {
      "id": "50",
      "integrationDetails": {
        "collection": [
          {
            "scanSource": "Fortify",
            "currentStatus": "SUCCEEDED"
          },
          {
            "scanSource": "Dependency_Track",
            "currentStatus": "SUCCEEDED"
          }
        ]
      }
    }
  }
}
```
Note that within integrationDetails.collection, an array is returned showing the synchronization status for each tool to which this asset is associated.

## Fetching the number of vulnerabilities

After executing a synchronization, some vulnerabilities may have been fixed and/or new ones may have emerged. If you want to retrieve these vulnerability values, follow the steps below:

We will use the **issueStats** query to retrieve these values. Note that since this query has a filter field, you can select various configurations, such as searching for issues in different statuses (e.g., False Positive, In Progress, Identified). Additionally, you can decide how to group these counts by severity, status, or issue type.

Below is an example of how to use this query:

```graphql
query IssueStats {
	issuesStats(
    companyId: <COMPANY_ID>, 
    filters: {
      assetIds: [<ASSET_ID>],
      integrationTypes: Fortify,
      statuses: [IDENTIFIED IN_PROGRESS]
    }
  ){
    severities {
      count
      value
    }
  }
}
```

And here is the response for this example:

```graphql
{
  "data": {
    "issuesStats": {
      "severities": [
        {
          "count": 0,
          "value": "NOTIFICATION"
        },
        {
          "count": 0,
          "value": "LOW"
        },
        {
          "count": 0,
          "value": "MEDIUM"
        },
        {
          "count": 1,
          "value": "HIGH"
        },
        {
          "count": 1,
          "value": "CRITICAL"
        }
      ]
    }
  }
}
```