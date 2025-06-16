---
id: jira
title: Jira Integration
sidebar_label: Jira
description:  A step-by-step guide on how to seamlessly integrate Conviso Platform with Jira for efficient vulnerability management and issue control.
keywords:  [Jira integration]
---

<div style={{textAlign: 'center'}}>

[![img](../../static/img/jira.png  'Jira')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

## Introduction
Integrating Jira in Conviso Platform will let developers gain productivity while we do all the hard work by automating the whole vulnerability management triage process.

New vulnerabilities identified in Conviso Platfom are created in real time directly in Jira.

With our two-way integration capability, every status update from both solutions are automatically updated in order to reduce the toil and increase productivity.

### Prerequirements
To set up the integration, you'll need the following information:

1. Jira's website address.

2. Email associated with Jira.

3. API Token for authentication purposes. See **[how to get the API Token from Jira](https://id.atlassian.com/manage-profile/security/api-tokens)**.

## Usage
To seamlessly integrate Conviso Platform with Jira, follow these step-by-step procedures:

**[1 - Configure the initial integration setup between Conviso Platform and Jira](#configure-the-initial-integration-setup-between-conviso-platform-and-jira)**

**[2 - Synchronize vulnerability statuses between Conviso Platform and Jira](#synchronize-vulnerability-statuses-between-conviso-platform-and-jira)**

**[3 - How to Modify the Policy to Automatically Create Issues in Jira](#how-to-modify-the-policy-to-automatically-create-issues-in-jira)**

## Configure the initial integration setup between Conviso Platform and Jira

**Step 1 -** First, access **Jira** and copy the **URL** of your site, as shown in the image below:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/jira-img1.png  'A clipping of a Jira platform screen')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

**Step 2 -** Next, to generate the **API Token**, visit the following [link](https://id.atlassian.com/manage-profile/security/api-tokens). After clicking the Create API token button, as shown in the image above, copy the API key.

<div style={{textAlign: 'center'}}>

[![img](../../static/img/jira-img2.png  'A clipping of a Jira platform screen.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

**Step 3** - Now that you have the required information, go to **Conviso Platform**, look for the **Integrations** on the left side menu, choose **Defect Tracking** and finally click the **Connect** button just below Jira’s card, as illustrated in the example image below:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/jira-img21.png  'A clipping of a Jira platform screen.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

**Step 4** - Then, enter all **Jira** information in the fields requested by [Conviso Platform](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826), as demonstrated in the initial integration setup section:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/jira-img4.png  'A screenshot of a Conviso Platform screen for integration with Jira.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

**Note:** The Verify SSL checkbox must be checked only if the certificate associated with Jira is issued by a Public Certificate Authority. For Private CAs or self-signed certificates, use https:// at the site address URL and leave this box unchecked.

**Step 5 - Severity Mapping** refers to Jira's two-way integration with Conviso Platform. Select which severity will be referenced to Jira's priority:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/jira-img5.png  'A screenshot of a Conviso Platform screen for integration with Jira.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

**Step 6 -** Then, in **Configuration**, click on the **Add Project** button to start pairing Conviso Platform Projects with **Jira Projects**:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/jira-img6.png  'A screenshot of a Conviso Platform screen for integration with Jira.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

**Step 7 -** Finally, to add a new project, select the **Asset** in Conviso Platform that you want to associate with your **Jira Project**. Then, choose the appropriate **Jira Issue Type** and **map the Conviso Platform statuses to the corresponding Jira statuses**. Once everything is configured, click **Save**.

<div style={{textAlign: 'center'}}>

[![img](../../static/img/jira-img8.png  'A screenshot of a Conviso Platform screen for integration with Jira.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

**Step 8** - After saving your integration settings, you can review, update, or delete the configuration in the Conviso Platform. To do so, go to your integration panel and click the **Edit** icon to review or make change changes; or the **Trash** icon to permanently delete the integration:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/jira-img9.png  'A screenshot of a Conviso Platform screen for integration with Jira.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

**Step 9** - Whenever a new vulnerability is detected, it will be automatically sent to the linked Jira project, as shown in the example below:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/jira-img10.png  'A clipping of a Jira platform screen in the backlog.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

## Synchronize vulnerability statuses between Conviso Platform and Jira

This feature allows seamless bidirectional synchronization of vulnerability statuses between Conviso Platform and Jira.

**Step 1 -** To begin setting up the bidirectional synchronization, copy the **Webhook URL**, as shown in the example below:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/jira-img12.png  'A screenshot of a Conviso Platform screen for integration with Jira.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

**Step 2 -** To configure the **WebHook** in Jira, go to the **Administration Console (1)** and then to **System (2)**. In the left-hand menu, look for **Webhooks (3)**, as shown in the image below:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/jira-img11.png  'A clipping of a Jira platform screen in the Webhook.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

**Step 3 -** Click **Create a WebHook**:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/jira-img20.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

**Step 4 -** In the **URL** field, paste the **Webhook URL** you copied in **Step 1**.

**Step 5 -** Enable the **issue** event and check the **updated** option to complete the WebHook setup:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/jira-img17.png  'A clipping of a Jira platform screen in the Webhook.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

## How to find webhooks configuration in Jira?

To access the webhooks configuration in Jira, you can follow these steps:

Open your web browser and enter the following URL: **https://YOUR_SPACE_NAME.atlassian.net/plugins/servlet/webhooks#**

**Note:** Replace YOUR_SPACE_NAME with the actual name of your Jira space.

<div style={{textAlign: 'center'}}>

[![img](../../static/img/jira-img19.png  'A clipping of a Jira platform screen in the Webhook.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

By directly accessing this URL, you can navigate to the webhooks configuration page in Jira, where you can manage and set up webhooks for integrating with external applications like Conviso Platform.

## How to Modify the Policy to Automatically Create Issues in Jira

Conviso Platform allows you to enable a policy that defines which vulnerability severities will be automatically sent to Jira. To configure it, follow the steps below:

**Step 1 -** At the bottom of the sidebar menu, **click on your Company name** and then select **Policies**.

<div style={{textAlign: 'center'}}>

[![img](../../static/img/jira-img22.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

**Step 2 -** Enable the **Transform vulnerabilities in issues at defect trackers** policy. You can choose to send vulnerabilities of all severities (selecting **All vuln**) or enable only specific severities, as shown in the example below:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/jira-img23.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

## Support

Should you have any questions or require assistance while using the Conviso Platform, feel free to contact our dedicated support team.

## Resources

By exploring our comprehensive content, you’ll discover resources that will enhance your understanding of AppSec.

[Conviso Blog](https://bit.ly/3JtXM8A): Access a wealth of informative videos covering various topics related to AppSec. Please note that the content is primarily in Portuguese.

[Conviso's YouTube Channel](https://bit.ly/3NIbbfM): Engage with our informative podcast, where we discuss AppSec-related subjects, providing valuable insights and discussions. The podcast is conducted in Portuguese.

[AppSec to Go - Conviso's Podcast on AppSec](https://spoti.fi/43UJQwN): Explore our blog, which offers a collection of articles and posts covering a wide range of AppSec topics. The content on the blog is primarily written in English.

[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)
