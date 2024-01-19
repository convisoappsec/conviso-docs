---
id: slack
title: Slack
sidebar_label: Slack
description: With Conviso Platform integrated with Slack, you can monitor your security activities and get notified of any issues in real-time.
keywords: [Slack integration]
---

<div style={{textAlign: 'center'}}>

[![img](../../static/img/slack.png 'Slack Integration')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

## Introduction

With Conviso Platform integrated with **[Slack](https://slack.com/intl/pt-br)**, you can monitor your security activities and get notified of any issues in real-time. This integration offers the following benefits:

1. You can receive alerts in your Slack channel when comments or questions are added to the Security Experts chat, whether it’s about a project or a vulnerability. This helps you collaborate with the security experts and get feedback on your code.
2. You can also receive alerts when Conviso Platform identifies a new vulnerability. This helps you prioritize and fix the most critical issues immediately.
3. You can customize the alerts to suit your preferences and needs. You can choose which channel to receive the alerts, which types to turn on or off, and how often to receive them.

### Prerequisites

The following prerequisites are necessary:

* You must have **Workspace Admin** privileges on **Slack** to create this integration.

## Usage

In this step-by-step guide, we will walk you through the process of integrating Slack with Conviso Platform for seamless notifications:
* **[Step 1: Create a Slack App](#step-1-create-a-slack-app)**
* **[Step 2: Configure Incoming Webhooks](#step-2-configure-incoming-webhooks)**
* **[Step 3: Configure Conviso Platform](#step-3-configure-conviso-platform)**

## Step 1: Create a Slack App

1 - Navigate to the **[Slack website](https://slack.com/intl/pt-br)** and log in to your workspace.

2 - Click on “**[Create App](https://api.slack.com/apps/new)**” to open the following screen, then select the “**From Scratch**” option:

[![img](../../static/img/slack1.png 'A screenshot of the Slack website showing a button labeled “Create App” and a pop-up window with two options: “From an app manifest” and “From scratch')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

3 - Enter a name for your app in the "**App Name**" field and select your desired workspace from the drop-down list.

4 - When done, click on the “**Create App**” button:

[![img](../../static/img/slack2.png 'A screenshot of the pop-up window showing an input field for the app name and a drop-down list for the workspace selection.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)


## Step 2: Configure Incoming Webhooks

1 - You'll be presented with various features after creating the app. Select the "**Incoming Webhooks**" card to continue:

[![img](../../static/img/slack3.png 'A screenshot of the Slack website showing a dashboard for the app with different cards for features such as “Incoming Webhooks”, “Slash Commands”, “OAuth & Permissions”, etc.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

2 - Turn on the switch labeled "**Activate Incoming Webhooks**" to enable this feature:*

[![img](../../static/img/slack4.png 'A screenshot of the Slack website showing the Incoming Webhooks screen with a toggle switch labeled “Activate Incoming Webhooks')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

3 - The card will expand, revealing the "**Webhook URLs for your Workspace**" section. Click "**Add New Webhook to Workspace**" to proceed:

[![img](../../static/img/slack5.png 'A screenshot of the Slack website showing the expanded Incoming Webhooks card with a button labeled “Add New Webhook to Workspace')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

4 - In the next screen, choose the channel or user where you want to receive incoming messages.  After selecting the desired channel, click on the “**Allow**” button:

[![img](../../static/img/slack6.png 'A screenshot of the Slack website showing a screen with a drop-down list for choosing a channel or user and a button labeled “Allow')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

5 - You will be redirected to the Incoming Webhooks screen, where the Webhook URL will now be visible. Click the "**Copy**" button to copy the URL to your clipboard.

[![img](../../static/img/slack7.png 'A screenshot of the Slack website showing the Incoming Webhooks screen with a text field containing a webhook URL and a button labeled “Copy”.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

## Step 3: Configure Conviso Platform

1 - Open the Conviso Platform and navigate to the "**Integrations**" **(1)** section in the left menu. Select **"Notifications" (2)** from the right panel. Click the **"Configure" (3)** button to set up the Slack integration:

[![img](../../static/img/slack8.png 'A screenshot of Conviso Platform showing a menu with options such as “Dashboard”, “Projects”, “Integrations”, etc. and a panel with options such as “Notifications”, “Scanners”, etc. The Integrations menu option, Notifications panel option, and Configure button are highlighted.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

2 - In the floating window that appears, paste the previously copied Slack Webhook URL into the appropriate field. Click the "**Save**" button to save your configuration.

[![img](../../static/img/slack9.png 'A screenshot of Conviso Platform showing a floating window with a text field for entering a slack webhook URL and a button labeled “Save”.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

3 - After completing the integration, you can test it by adding a comment in your project's "**Security Experts**" tab within the Conviso Platform.

A notification will be generated in your Slack channel, mirroring the message added in the Conviso Platform.

**Slack Comments:**

[![img](../../static/img/slack10.png 'A screenshot of Slack showing a message from Conviso Platform about comments added by security experts in different projects and vulnerabilities.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

**Vulnerability Identified:**

[![img](../../static/img/slack11.png 'A screenshot of Slack showing a message from Conviso Platform about new vulnerabilities detected in different projects.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

Now, you can seamlessly streamline communication and collaboration between the Conviso Platform and Slack.

## Support

If you have any questions or need help using our product, please don't hesitate to contact our support team.

## Resources

By exploring our content, you'll find resources to help you to understand the benefits of Communication in DevSecOps:

[The importance of Communication in DevSecOps](https://bit.ly/46m6jnB): Like any group of people, DevSecOps teams need to establish clear and assertive information exchange to perform their tasks to the best of their ability.

[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)