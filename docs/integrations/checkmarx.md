---
id: checkmarx
title: Checkmarx
sidebar_label: Checkmarx
---

<div style={{textAlign: 'center'}}>

![img](../../static/img/checkmarx-logo.webp)

</div>


:::note
First time using Checkmarx? Please refer to the [following documentation](https://checkmarx.com/resource/documents/en/34965-68517-checkmarx-one-user-guide.html).
:::

## Introduction

This integration enables the automatic import of issues (vulnerabilities) identified by Checkmarx into the Conviso Platform, allowing the user to leverage all the features of the Conviso Platform in managing these issues.

## Requirements

To integrate Checkmarx with the Conviso Platform, you will need the following data:

- Permission to access and modify projects and vulnerabilities, you can find the list of permissions [here](#list-of-permissions-needed)

- API KEY from an user with correct permissions 

## Conviso Platform Setup

To perform the integration between the two platforms, follow these steps after logging into the platform:

1. In the environment, choose the option where your Checkmarx is hosted.
2. Look for the Checkmarx image in the integrations; you can use the "Scanners" filter to simplify the search.
3. Click on the "Integrate" button, and a form similar to the image below will appear.

<div style={{textAlign: 'center'}}>

![img](../../static/img/checkmarx-img1.png)

</div>

4. Fill in the environment where your checkmarx is hosted.
5. Enter your API token.
6. Enter your tenant name.
7. Click on "Save."

After completing the seventh step, the following screen will appear. On this screen, you can manage your Checkmarx integration, view and import projects, and test if your Checkmarx connection is active.

<div style={{textAlign: 'center'}}>

![img](../../static/img/checkmarx-img2.png)

</div>

## Importing Assets

1. To import a project, go to the integration configuration page by selecting the "Integrations" option from the side menu. If you already have a Checkmarx integration, click on "Configure."
2. After accessing the integration configuration screen, click on "New Project," and a screen displaying the names of the projects will appear.
3. You can use the search bar to filter by project name. After selecting the projects you want to import, click "Add" at the top of the modal.

<div style={{textAlign: 'center'}}>

![img](../../static/img/checkmarx-img3.png)

</div>

**Obs: Currently, when you select and import a project from Checkmarx, an asset will be created for each existing branch in that project in Checkmarx, and the vulnerabilities present in the latest scan of each branch will be imported.**

## General Information on Operation

In this section, we will address crucial information about the integration's operation. This includes details about the synchronization process, as well as the status mapping between the involved platforms.

### Status Mapping

When moving issues from one status to another, the Conviso platform will communicate and mark the issues in Checkmarx according to the following mapping:

<div style={{display: 'ruby-text'}}>

| Conviso Platform     | Checkmarx                |
|----------------------|--------------------------|
| Created              | To verify                |
| Identified           | Confirmed                |
| False positive       | Not exploitable          |
| Risk accepted        | Proposed not exploitable |
| Identified           | Urgent*                  |

</div>

**Obs: When a vulnerability is marked as "urgent" in Checkmarx, it will be imported as "Identified" because it represents an identified vulnerability. However, when a vulnerability is marked as "Identified" in the Conviso Platform, it will be marked as "Confirmed." Currently, there is no way to mark a vulnerability as "urgent" in Checkmarx through the Conviso Platform.**

The modifications are bidirectional, meaning that when changes are made in the Conviso Platform, these changes will be replicated to Checkmarx, and the same applies in reverse.

When changing the status in the Conviso Platform, these changes will be replicated immediately to Checkmarx. However, if a change is first made in Checkmarx, it will only be replicated to the Conviso Platform after a synchronization between the platforms is performed.

**Note: The only exception to these status changes is for the FIXED status in the Conviso Platform. In the case of FIXED, it is not allowed for a user to move it to FIXED when the issue was opened by a scanner like Checkmarx. In this scenario, the tool itself should identify the changes and recognize that the issue has been removed. Therefore, in the next synchronization, those issues that are no longer identified by Checkmarx will be marked as FIXED in the Conviso Platform.**



### Synchronization

To monitor or initiate a synchronization, you can follow the steps below:

1. Go to the Assets Management page.
2. Click on the name of the asset you want to synchronize.
3. On the asset's detail page, click on View All next to Integration, as shown in the image below.

<div style={{textAlign: 'center'}}>

![img](../../static/img/fortify-img7-new.png)

</div>

4. A new screen will open, where you will find the button to initiate an integration, along with a progress bar indicating the status if synchronization is in progress. In case of any errors, they will also be displayed on this screen.

### List of Permissions needed

- manage-application
- ast-admin
- manage-project


[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)