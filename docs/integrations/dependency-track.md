---
id: dependency-track
title: Dependency-Track
sidebar_label: Dependency-Track
---

<div style={{textAlign: 'center'}}>

![img](../../static/img/dependency-track.png)

</div>

:::note
First time using Dependency-Track? Please refer to the [following documentation](https://docs.dependencytrack.org/).  
:::

## Introduction

Dependency-Track is an intelligent Component Analysis platform that allows organizations to identify and reduce risk in the software supply chain. Dependency-Track takes a unique and highly beneficial approach by leveraging the capabilities of Software Bill of Materials (SBOM). This approach provides capabilities that traditional Software Composition Analysis (SCA) solutions cannot achieve.

Dependency-Track monitors component usage across all versions of every application in its portfolio in order to proactively identify risk across an organization. The platform has an API-first design and is ideal for use in CI/CD environments. The Dependency-Track integration with Conviso Platform is done through this API.

## Dependency-Track Setup

In order to set up the Dependency-Track integration, you’re going to need a token that can be generated at your dedicated instance of the Dependency-Track system. To find it, go to **Administration** at the left sidebar, then select **Access Management**, and under it, **Teams**. You’ll be presented with a field showing a few rows of predefined teams, one of them being **Administrators**:

<div style={{textAlign: 'center'}}>

![img](../../static/img/dependency-track-img1.png)

</div>

Click on the **Administrators** row to open the options, and under the **API Keys** section, click the **[+] icon**. A new key will be created for you: 

<div style={{textAlign: 'center'}}>

![img](../../static/img/dependency-track-img2.png)

</div>

## Conviso Platform Setup

Log in to the [Conviso Platform](https://app.convisoappsec.com);

On the main menu to the left, click on **Integrations**. At the panel to the right, click on the **SCA** option, then click on the **Integrate** button on the **Dependency Track** card:

<div style={{textAlign: 'center'}}>

![img](../../static/img/dependency-track-img3.png)

</div>

You will be presented with the following form that should be filled with the token mentioned in the **API Token** field and your **Dependency Track address** in the format of ```http://<service_ip>:<service_port>/api``` in the **API URL** field. After filling all the fields in this modal, click on the **Save** button to store you integration configuration:

<div style={{textAlign: 'center'}}>

![img](../../static/img/dependency-track-img4.png)

</div>

If everything goes right, you’ll be presented with the following screen. Check the box of the project you want to import and click **Finish** on the corner:

<div style={{textAlign: 'center'}}>

![img](../../static/img/dependency-track-img5.png)

</div>

When the sync is done, go to the **Assets Management** screen and open the corresponding one for the imported project. On the bottom of the page there will be a **Synchronize** button. You may click on **Logs** to keep track of the process while it is being carried out: 

<div style={{textAlign: 'center'}}>

![img](../../static/img/dependency-track-img6.png)

</div>

When the synchronization is finished, you’ll be able to find the project and its associated findings on their respective pages.

[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)