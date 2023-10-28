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
The [Conviso Platform](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826) integrates with Jira enabling the creation of issues, comments, and a Webhook for issue comments.

This integration streamlines issue control management and vulnerability consolidation. When users add comments in Jira's discussion field, these messages automatically appear on the vulnerability's Security Experts tab, fostering seamless interaction between Conviso technicians and the development team responsible for corrections.

### Integration Capabilities
This integration enhances issue control management and vulnerability consolidation between systems. It facilitates seamless interaction and communication between various aspects of the process. The integration offers the following capabilities:

**From Jira to Conviso Platform:**
* Automatically display comments added by users in Jira's discussion field on the vulnerability's Security Experts tab.
* Foster interaction by sharing information from Jira with the development team responsible for corrections in Vulnerability Management from Conviso Platform.

**From Conviso Platform to Jira:**
* Generates new issues in Jira based on events within Conviso Platform's Vulnerability Management System, such as identified vulnerabilities or completed security assessments.
* Establishes a linkage between vulnerabilities detected in Conviso Platform and their relevant issues in Jira, enhancing traceability and collaborative efforts.
* Updates Jira issues when specific actions occur in Conviso Platform's Vulnerability Management System, such as changes in vulnerability status, assessment completions, or updates to risk levels.
* Automatically generates rework tasks in Jira for vulnerabilities that require further attention or corrections after the initial assessment in Conviso Platform.
* Transitions Jira issues to appropriate workflow stages when vulnerabilities are resolved or mitigated within Conviso Platform's Vulnerability Management System.

### Prerequirements
To set up the integration, you'll need the following information:

1. Jira's website address

2. Email or Username associated with Jira

3. API Token for authentication purposes. See **[here how to get Conviso API Key](../api/generate-apikey.md)** and **[here to get the API Token from Jira](https://id.atlassian.com/manage-profile/security/api-tokens)**.

## Usage
To seamlessly integrate Conviso Platform with Jira, follow these step-by-step procedures:

**[1 - Configure the initial integration setup between Conviso Platform and Jira](#configure-the-initial-integration-setup-between-conviso-platform-and-jira)**

**[2 - Enable two-way communication with Jira using Webhooks](#enable-two-way-communication-with-jira-using-webhooks)**

**[3 - Synchronize vulnerability statuses between Conviso Platform and Jira ](#synchronize-vulnerability-statuses-between-conviso-platform-and-jira)**

## Configure the initial integration setup between Conviso Platform and Jira
Follow the instructions below to complete the integration setup.

**Step 1 -** First, access **Jira** and copy the **URL** of your site, as shown in the image below:

[![img](../../static/img/jira-img1.png  'A clipping of a Jira platform screen')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)


**Step 2 -** Next, to generate the **API Token **(label), visit the following [link](https://id.atlassian.com/manage-profile/security/api-tokens). After clicking the Create API token button, as shown in the image above, copy the API key.

[![img](../../static/img/jira-img2.png  'A clipping of a Jira platform screen.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)


**Step 3** - Now that you have the required information, go to **Conviso Platform**, look for the **Integrations (1)** on the left side menu, choose **Defect Tracker (2)** at the Categories panel to the right and finally click the **Integrate (3)** button just below Jira’s card, as illustrated in the example image below:

[![img](../../static/img/jira-img3.png  'A screenshot of a Conviso Platform screen for integration with Jira.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

**Step 4** - Then, enter all **Jira** information in the fields requested by [Conviso Platform](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826), as demonstrated in the initial integration setup section.

[![img](../../static/img/jira-img4.png  'A screenshot of a Conviso Platform screen for integration with Jira.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

**Note:** The Verify SSL checkbox must be checked only if the certificate associated with Jira is issued by a Public Certificate Authority. For Private CAs or self-signed certificates, use https:// at the site address URL and leave this box unchecked.

**Step 5 - Severity Mapping** refers to Jira's two-way integration with Conviso Platform. Select which severity will be referenced to Jira's priority:

[![img](../../static/img/jira-img5.png  'A screenshot of a Conviso Platform screen for integration with Jira.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)


**Step 6 -** Then, in **Configuration**, click on the **Add** button to start pairing Conviso Platform Projects with **Jira Projects:**

[![img](../../static/img/jira-img6.png  'A screenshot of a Conviso Platform screen for integration with Jira.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)


**Step 7 -** At the drop-down list **New Project Documentation**, select the **Conviso Platform Project** you want to associate with your **Jira Project**, which will be chosen at the Jira Project drop-down list . You can also perform **Issue** and **status configuration**.

[![img](../../static/img/jira-img8.png  'A screenshot of a Conviso Platform screen for integration with Jira.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)


**Step 8 -** After mapping all Conviso Platform statuses to Jira statuses, click on the** Save button**.

**Step 9 -** Click on the **Check Integration Connection** button to check if the platform connects with Jira server. If the connection is successful you will see the following message:

[![img](../../static/img/jira-img7.png  'A screenshot of a Conviso Platform screen for integration with Jira.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

**Step 10** - After saving your integration configuration, you may want to review, modify or delete it from Conviso Platform. To do so, at your integration configuration panel, choose the **Edit** icon to review or change it; if you want to completely delete it, use the **Trash** icon at its right:

[![img](../../static/img/jira-img9.png  'A screenshot of a Conviso Platform screen for integration with Jira.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

**Step 11** - Whenever a new vulnerability is detected, it is automatically sent to the project in Jira, as shown in the image below:

[![img](../../static/img/jira-img10.png  'A clipping of a Jira platform screen in the backlog.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

## Enable two-way communication with Jira using Webhooks
To establish two-way communication with Jira, you can configure Webhooks, allowing comments made on Jira issues to be registered in Conviso Platform as well.

**Note:** The Webhook function works with Jira version 7.1 and above.

Follow the steps below to set up Webhooks:

**Step 1 -** First, to begin, you need to have saved the Token for the integration between Jira and Conviso Platform.

To generate the integration token from Conviso Platform, go to the left menu, choose **Integrations,** click on **Defect Tracker** in the** Categories** panel, and then click **Configure** for Jira. Copy the token displayed in the following window by clicking on the eye icon and then the copy icon:

[![img](../../static/img/jira-img12.png  'A screenshot of a Conviso Platform screen for integration with Jira.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

**Step 2 -** To start configuring a Webhook, you need to obtain an external access code that will be used in the Conviso Platform application. Go to Jira **Administration console (1)** and **System (2)**.  In the menu on the left, look for Webhooks, as shown in the image below:

[![img](../../static/img/jira-img11.png  'A clipping of a Jira platform screen in the Webhook.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

**Step 3 -** When clicking on the button to **create a Webhook**, you need to use this **URL** and append the token generated by the integration inside Conviso Platform at the end:

[![img](../../static/img/jira-img16.png  'A clipping of a Jira platform screen in the Webhook.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

```yml
https://app.convisoappsec.com/payload?issue_id=${issue.id}&issue_key=${issue.key}&project_id=${project.id}&project_key=${project.key}&jira_authorization_token=YOUR_JIRA_TOKEN
```

Make sure to replace ```“YOUR_JIRA_TOKEN”``` with the actual token generated by the integration within the Conviso Platform.

**Step 4** - Activate the **comment** event and **click "created"** to finalize the Webhook integration.

[![img](../../static/img/jira-img13.png  'A clipping of a Jira platform screen in the Webhook.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

**Step 5** - By following this process, you can seamlessly add comments on Jira with messages sent to the “**Talk to an expert”** tab of vulnerabilities or directly to the issues created in Jira.

[![img](../../static/img/jira-img14.png  'A screenshot of a Conviso Platform screen for communication with Security Expert.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

**Step 6 -** The comments will appear in Jira's comment field, as shown in the image below:
[![img](../../static/img/jira-img15.png  ' clipping of a Jira platform screen in the comments.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

## Synchronize vulnerability statuses between Conviso Platform and Jira

This feature allows seamless bidirectional synchronization of vulnerability statuses between Conviso Platform and Jira.

**Note:** To utilize this functionality, ensure that your Jira is configured in the **English language**.

**Step 1 - Register a New Webhook in Jira**:

To enable synchronization, create a new webhook in Jira that sends data when a task is modified. Utilize the same webhook registration screen as mentioned in the previous section.

**Step 2 - Configure the Webhook URL:**

In the **URL** field, use the following predefined URL with your token appended at the end:

```yml
https://app.convisoappsec.com/api/v1/integrations/jira/update_vulnerability?issue_key=${issue.key}&project_key=${project.key}&jira_authorization_token=YOUR_JIRA_TOKEN
```

**Note:** Replace "YOUR_JIRA_TOKEN" with the token obtained from Conviso Platform under Jira integration configuration.

**Step 3 -** Activate the **issue** event and **click "updated"** to finalize the Webhook creation:

[![img](../../static/img/jira-img17.png  'A clipping of a Jira platform screen in the Webhook.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

**4 - Associate Conviso Platform Fields with Jira Fields:**

Edit the Jira integration configuration and map the Conviso Platform fields to their respective fields in Jira, specifically in the **Custom Mapping** section:
[![img](../../static/img/jira-img18.png  'A screenshot of a Conviso Platform screen for integration with Jira.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

**Status in Conviso Platform:** Represents the current statuses that each vulnerability can have in Conviso Platform.

**Status in Jira:** Represents the current statuses that each task can assume in Jira.

**Note:** Don't forget to click **Save** after configuring Jira's integration!

## How to find webhooks configuration in Jira?

To access the webhooks configuration in Jira, you can follow these steps:

Open your web browser and enter the following URL: **https:// "[YOUR_SPACE_NAME]" .atlassian.net/plugins/servlet/webhooks#**

**Note:** Replace YOUR_SPACE_NAME with the actual name of your Jira space.
[![img](../../static/img/jira-img19.png  'A clipping of a Jira platform screen in the Webhook.')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

By directly accessing this URL, you can navigate to the webhooks configuration page in Jira, where you can manage and set up webhooks for integrating with external applications like Conviso Platform.

## Support

Should you have any questions or require assistance while using the Conviso Platform, feel free to contact our dedicated support team.

## Resources

By exploring our comprehensive content, you’ll discover resources that will enhance your understanding of AppSec.

[Conviso Blog](https://bit.ly/3JtXM8A): Access a wealth of informative videos covering various topics related to AppSec. Please note that the content is primarily in Portuguese.

[Conviso's YouTube Channel](https://bit.ly/3NIbbfM): Engage with our informative podcast, where we discuss AppSec-related subjects, providing valuable insights and discussions. The podcast is conducted in Portuguese.

[AppSec to Go - Conviso's Podcast on AppSec](https://spoti.fi/43UJQwN): Explore our blog, which offers a collection of articles and posts covering a wide range of AppSec topics. The content on the blog is primarily written in English.

[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)
