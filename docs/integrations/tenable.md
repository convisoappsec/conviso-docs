---
id: tenable
title: Tenable
sidebar_label: Tenable
---

<div style={{textAlign: 'center'}}>

![Step 1: Integrations page with the Tenable card visible.](../../static/img/tenable_img1_1773682648987.png)

</div>

:::note
First time using Tenable? Please refer to the [following documentation](https://docs.tenable.com/).
:::

## Introduction

This integration enables the automatic import of issues (vulnerabilities) identified by Tenable into the Conviso Platform, allowing the user to leverage all the features of the Conviso Platform in managing these issues.

## Objective

The objective of this guide is to explain how to configure the integration between your Tenable instance and the Conviso Platform to allow for seamless vulnerability synchronization.

## Prerequisites

To integrate Tenable with the Conviso Platform, you will need the following:

- **Tenable Account**: An active account with access to generate API keys.
- **API Keys**: You must obtain an **Access Key** and a **Secret Key** from your Tenable console to authenticate the integration.

## Steps

After logging into the Conviso Platform, follow these steps to establish the connection:

1. In the sidebar menu, click **Integrations**.
2. Use the search bar to find **Tenable**.
3. Click the **Connect** button on the Tenable card.

4. In the Credentials section, enter your **Access Key** and **Secret Key** in the respective fields.

<div style={{textAlign: 'center'}}>

![Step 4: Initial configuration modal where Tenable credentials are entered.](../../static/img/tenable_img2_1773682696472.png)

</div>

5. Click **Continue**.
6. On the Severity Filters screen, select which vulnerability severities you want to import from Tenable (e.g., Critical, High, Medium, Low).

<div style={{textAlign: 'center'}}>

![Step 6: The Severity Filters screen.](../../static/img/tenable_img3_1773682760075.png)

</div>

7. Click **Continue**.

<div style={{textAlign: 'center'}}>

![Step 7: The configuration screen showing the Add project and Check connection buttons.](../../static/img/tenable_img4_1773682805248.png)

</div>

8. You will reach the Configuration screen. At this point, the platforms are connected.

## Validation

To verify that the integration was configured correctly:

1. On the Configuration screen, click the **Check connection** button.
2. An alert message reading "Your connection with Tenable is OK!" should appear in the top right corner.

<div style={{textAlign: 'center'}}>

![Step 2 (Validation): The configuration screen displaying the successful connection confirmation message.](../../static/img/tenable_img8_1773683025693.png)

</div>

Once validated, you can click **Add project** to start mapping your Tenable assets to your Conviso Platform projects.

## Importing Assets

To import projects from Tenable:

1. Click the **Add project** button on the configuration screen.
2. In the "Add new project" modal, use the search field to find the specific project you want to map.

<div style={{textAlign: 'center'}}>

![Step 2: Searching for a specific project.](../../static/img/tenable_img6_1773682860020.png)

</div>

3. Select the desired project from the list.

<div style={{textAlign: 'center'}}>

![Step 3: Selecting the project to be added.](../../static/img/tenable_img7_1773682893507.png)

</div>

4. Click the **Add** button to map the project.

<div style={{textAlign: 'center'}}>

![Step 4: The final view of the modal with the project selected.](../../static/img/tenable_img5_1773682829883.png)

</div>

After this, the import process will be initiated.

## Troubleshooting

- **Connection Error**: If clicking "Check connection" results in an error, verify that the Access Key and Secret Key were copied correctly and and that they have the appropriate permissions within Tenable.
- **No Data Available**: If projects do not appear when attempting to add them, ensure the API keys have visibility over the relevant projects/assets in Tenable.

## Support

If you have any questions or need help with our product, please contact our support team according to your SLA.

[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)
