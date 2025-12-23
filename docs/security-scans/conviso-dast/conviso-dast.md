---
id: conviso-dast
title: Conviso DAST
sidebar_label: Conviso DAST
---

## Introduction

Scan and protect your application with Conviso DAST, consolidating all your vulnerabilities and risks in the Conviso Platform.

**[At Conviso, we believe that AppSec goes beyond security tools, and we offer a comprehensive approach that includes consulting, training, and support services.](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)**

## Usage

1. The first step to executing a DAST is to create an asset in the Conviso Platform. To do this, click on **Asset Management** in the side menu, then **New Asset (1)** and select **Manual (2)**.

<div style={{textAlign: 'center' , maxWidth: '80%'}}>

![img](../../../static/img/conviso-dast/conviso-dast-img1.png 'Conviso DAST')

</div>

<div style={{textAlign: 'center' , maxWidth: '100%'}}>

![img](../../../static/img/conviso-dast/conviso-dast-img2.png 'Conviso DAST')

</div>

2. An asset can be an application of your company, so let's call it **My Application**. Then, fill in the fields **Business Impact** (which indicates the asset's impact on your business), **Data Classification** (which indicates the sensitivity of the data), and **Attack Surface** (which indicates whether the application is exposed to the internet or not).
Finally, in the **URL** field, enter the URL where the DAST will be executed and click **Create**.

<div style={{textAlign: 'center' , maxWidth: '100%'}}>

![img](../../../static/img/conviso-dast/conviso-dast-img3.png 'Conviso DAST')

</div>

3. With the asset created, let's access it to schedule the DAST. To do this, click on its name.

<div style={{textAlign: 'center' , maxWidth: '100%'}}>

![img](../../../static/img/conviso-dast/conviso-dast-img4.png 'Conviso DAST')

</div>

4. Now, click on the highlighted text below to schedule:

<div style={{textAlign: 'center' , maxWidth: '100%'}}>

![img](../../../static/img/conviso-dast/conviso-dast-img5.png 'Conviso DAST')

</div>

Select whether the DAST should be executed monthly or weekly, enter the day of the week, the execution time (in GMT-3), and the type of analysis.

If the Type of analysis is **web**, no additional options need to be considered. If the Type of analysis is **API**, you will need to specify the API format (SOAP, GraphQL, or OpenAPI). In this case, the URL should contain the API structure. Here is an example: https://swagger.io/docs/specification/basic-structure/.

5. With the configuration complete, click **Create**, and your scheduling will be set up:

<div style={{textAlign: 'center' , maxWidth: '60%'}}>

![img](../../../static/img/conviso-dast/conviso-dast-img6.png 'Conviso DAST')

</div>

6. A message indicating that the scheduling has been completed should appear on the screen:

<div style={{textAlign: 'center' , maxWidth: '100%'}}>

![img](../../../static/img/conviso-dast/conviso-dast-img7.png 'Conviso DAST')

</div>

7. You can view information about the most recent scans of the asset, as well as monitor the current status, from the area indicated below:

<div style={{textAlign: 'center' , maxWidth: '100%'}}>

![img](../../../static/img/conviso-dast/conviso-dast-img8.png 'Conviso DAST')

</div>

8. To view the DAST results, click on **Vulnerabilities** in the left side menu:

<div style={{textAlign: 'center' , maxWidth: '60%'}}>

![img](../../../static/img/conviso-dast/conviso-dast-img9.png 'Conviso DAST')

</div>

9. To view more information about a specific vulnerability, click on the title:

<div style={{textAlign: 'center' , maxWidth: '100%'}}>

![img](../../../static/img/conviso-dast/conviso-dast-img10.png 'Conviso DAST')

</div>

10. On this page, you can view the details of the vulnerability, such as severity, status, URL, request, response, description, solution, and reference.

<div style={{textAlign: 'center' , maxWidth: '100%'}}>

![img](../../../static/img/conviso-dast/conviso-dast-img11.png 'Conviso DAST')

</div>

:::note
When the vulnerability is fixed, running the next scan should identify it, and then change the vulnerability status to "Fixed" automatically.
:::

With the above, you should be able to run DAST on the Conviso Platform.

## Support

Should you have any questions or require assistance while using the Conviso Application Security Testing, feel free to contact our dedicated support team.
