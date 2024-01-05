---
id: datastudio
title: Google Looker Studio Integration
sidebar_label: Google Looker Studio
description:  This document provides instructions on integrating the Conviso Platform with Google Looker Studio, a solution for business intelligence integration.
keywords: [Google Looker Studio]

---

<div style={{textAlign: 'center'}}>

[![img](../../static/img/datastudio.png "Image for Google Looker Studio, Application security reports, Data analysis, Business intelligence integration.")](https://bit.ly/3JyRdl8)

</div>

# Introduction

[Google Looker Studio](https://datastudio.google.com/) is a powerful business intelligence tool that allows users to generate customized reports and extract data for analysis on BI platforms. This document provides instructions on integrating the Conviso Platform with Google Looker Studio, a solution for business intelligence integration.

**[Explore our Integration page to learn more and supercharge your Application Security Program  with Conviso Platform.](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)**

## Usage
Access the **"Integrations" (1)** menu in the Conviso Platform. Navigate to the **"Business Intelligence" (2)** section in the right panel. Click on the **"Integrate" (3)** button.


<div style={{textAlign: 'center' }}>

[![img](../../static/img/datastudio-img1.png "Image for Google Looker Studio, Application security reports, Data analysis, Business intelligence integration.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>


There are four types of endpoints available to generate a JSON file and feed the BI tool:


* **Deploys:** Returns a JSON with all company deployments.
* **Projects:** Returns all projects linked to the user's scope.
* **Assets:** Returns all company assets.
* **Users:** Returns a JSON with all company users.

<div style={{textAlign: 'center' }}>

[![img](../../static/img/datastudio-img2.png "Image for Google Looker Studio, Application security reports, Data analysis, Business intelligence integration.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

To create a connector with your BI tool, you will need the following information:

* **Conviso Platform URL:** Use the URL "https://app.convisoappsec.com".
* **Endpoint:** Select one of the four available endpoints mentioned above.
* **x-API-key:** Generate your API Key by following the instructions provided [here](../api/generate-apikey.md).

**[Learn more about Conviso Platform integrations!](https://bit.ly/3NzvomE)**

## Google Looker Studio Setup

To set up Conviso Platform integration with Google Data Studio, follow these steps:

**Step 1 -** Log in to your Google Data Studio account. Click on the **"Create" (4)** button and select  **"Report"(5)** from the menu:


<div style={{textAlign: 'center' }}>

[![img](../../static/img/datastudio-img3.png "Image for Google Looker Studio, Application security reports, Data analysis, Business intelligence integration.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

**Step 2 -** In the search box, **search for "JSON/CSV/XML"(6)** and choose the ```JSON/CSV/XML``` **Connector (7):**


<div style={{textAlign: 'center' }}>

[![img](../../static/img/datastudio-img4.png "Image for Google Looker Studio, Application security reports, Data analysis, Business intelligence integration.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>


**Step 3 -** Click on the **"Authorize" (8)** button to grant Data Studio access to your Google user account:


<div style={{textAlign: 'center' }}>

[![img](../../static/img/datastudio-img5.png "Image for Google Looker Studio, Application security reports, Data analysis, Business intelligence integration.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

**Step 4 -** Select your **user account** or provide an existing user's credentials in the floating window that appears and click on the **"Allow" (9)** button to grant access to the connector.

<div style={{textAlign: 'center' }}>

[![img](../../static/img/datastudio-img6.png "Image for Google Looker Studio, Application security reports, Data analysis, Business intelligence integration.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>


**Step 5 -** Click on the **"Authorize"(10)**  button** below the ```JSON/CSV/XML```  authorization box.

<div style={{textAlign: 'center' }}>

[![img](../../static/img/datastudio-img7.png "Image for Google Looker Studio, Application security reports, Data analysis, Business intelligence integration.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>


**Step 6 -** Finally, click on the **close icon to close the Supermetrics floating** window. The following window will be displayed. Fill in the form with the following data:

<div style={{textAlign: 'center' }}>

[![img](../../static/img/datastudio-img8.png "Image for Google Looker Studio, Application security reports, Data analysis, Business intelligence integration.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

* **Data Type (11):** Select ```JSON```.
* **Source URL or Google Drive path (12):** Insert ```https://app.convisoappsec.com/api/v2/projects```
* **HTTP headers (13):** Enter ```x-api-key:<your-generated-api-key>```. Check [here](../api/generate-apikey.md)to find out how to find it.

Once you have filled in the form, click on the **"Add" (14)** button in the lower right corner. A confirmation window will appear. Click on the **"Add to Report**" button to save the configuration.

<div style={{textAlign: 'center' }}>

[![img](../../static/img/datastudio-img9.png "Image for Google Looker Studio, Application security reports, Data analysis, Business intelligence integration.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>


Your automatically generated data analysis dashboard will be displayed, providing valuable insights for your Application Security Program. 

These dashboards empower you to visualize and analyze your application security data effectively, enabling informed decision-making and proactive risk management.

**[Unlock the full potential of your Application Program  with Conviso Platform integrations. Visit our Integration page now to get started.](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)**

## Support

If you have any questions or need help using our product, please don't hesitate to contact our support team. 

## Resources

By exploring our content, you'll find resources to help you understand the importance of security applications data:

[The importance of a platform for managing an AppSec program:](https://bit.ly/42JEfrq) We invite you to learn why an AppSec management platform is essential for companies that want to keep their applications safe and secure.

[How to use Google Looker Studio for data analysis:](https://support.google.com/looker-studio/answer/6370352?hl=en#zippy=%2Cin-this-article) Learn how to use this powerful tool for creating customized reports, visualizing data, and performing advanced analysis.

[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)