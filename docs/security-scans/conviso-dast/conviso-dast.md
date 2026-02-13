---
id: conviso-dast
title: Conviso DAST
sidebar_label: Conviso DAST
---

## Introduction

Scan and protect your application with Conviso DAST, consolidating all your vulnerabilities and risks in the Conviso Platform.

**[At Conviso, we believe that AppSec goes beyond security tools, and we offer a comprehensive approach that includes consulting, training, and support services.](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)**

:::note
Conviso DAST can be run self-hosted on your local pipeline. Instructions and further information on self-hosting are available on the [Conviso DAST page at Dockerhub](https://hub.docker.com/r/convisoappsec/convisodast).
:::

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

4. Now, click on the **CI/CD** tab:

<div style={{textAlign: 'center' , maxWidth: '100%'}}>

![img](../../../static/img/conviso-dast/conviso-dast-img12.png 'Conviso DAST tab')

</div>

5. Click on the gear icon to configure the scan. If you have already configured the scan previously, you can simply click **Run Now** to execute the scan with the existing configuration.

<div style={{textAlign: 'center' , maxWidth: '60%'}}>

![img](../../../static/img/conviso-dast/conviso-dast-img13.png 'Conviso DAST icon')

</div>


6. On the DAST configuration screen, you need to configure the following settings:

<div style={{textAlign: 'center' , maxWidth: '100%'}}>

![img](../../../static/img/conviso-dast/conviso-dast-img14.png 'Conviso DAST configuration')

</div>

**Required fields:**
- **Scan Profile**: Choose between **Basic** or **Deep Scan**. The Deep Scan performs a more comprehensive analysis and may take longer to complete.
- **Type of analysis**: Select **web** for web applications or **API** for API testing. If you select **API**, you will need to specify the API format (SOAP, GraphQL, or OpenAPI). In this case, the URL should contain the API structure. Here is an example: https://swagger.io/docs/specification/basic-structure/.

**Optional fields:**
- **Authentication**: Configure authentication credentials if your application requires login to access protected areas.
- **Scheduling**: Define when the DAST should be executed (monthly or weekly), enter the day of the week, and the execution time (in GMT-3).
- **Scope Definition**: Use regex patterns to define which URLs should be included or excluded from the scan.

After configuring the settings, click **Save** to complete the setup.

7. You can view information about the most recent scans of the asset, as well as monitor the current status, from the area on the right:

<div style={{textAlign: 'center' , maxWidth: '100%'}}>

![img](../../../static/img/conviso-dast/conviso-dast-img15.png 'Conviso DAST scans')

</div>

To view the scan details, just select your execution and you will be redirected to the DAST details page.


8. The scan details page displays comprehensive information about the execution:

<div style={{textAlign: 'center' , maxWidth: '100%'}}>

![img](../../../static/img/conviso-dast/conviso-dast-img16.png 'Conviso DAST details')

</div>

- **Target URL**: The URL that was scanned
- **Scanned URLs**: Which URLs were analyzed during the scan
- **Total Vulnerabilities**: The total number of vulnerabilities found
- **New Vulnerabilities**: The number of newly discovered vulnerabilities
- **Fixed Vulnerabilities**: The number of vulnerabilities that were resolved since the last scan
- **Execution Time**: The date and time when the scan was executed
- **Duration**: How long the scan took to complete
- **Execution Logs**: Detailed logs of the scan execution process

You can also generate a detailed report of the scan execution from this page clicking on **Generate report** button.

9. To view the DAST results, click on **New vulnerabilities** reference

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
