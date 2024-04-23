---
id: azure-boards
title: Azure Boards Integration
sidebar_label: Azure Boards
description:  A step-by-step guide on how to seamlessly integrate Conviso Platform with Azure Boards for efficient vulnerability management and issue control.
keywords:  [Azure Boards Integration Azure Boards]
---

# Azure Boards

# Azure Boards Integration

<div style={{textAlign:'center'}}>

![img](../../static/img/adfs-img1.png)

</div>



## Introduction

The [Conviso Platform](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826&__hstc=36751231.4f0e20f0cfb8e070ca47855aa5207464.1713288582555.1713795830588.1713802784475.4&__hssc=36751231.3.1713802784475&__hsfp=202023877) integrates with [Azure Boards](https://azure.microsoft.com/en-us/products/devops/boards) enabling the creation of issues and a Webhook for updating issue status.

To improve your issue control and vulnerability management, integrate the Conviso Platform with Azure Boards. Through this integration, you may use Webhooks to synchronize vulnerability statuses between the Conviso Platform and Azure Boards.



### Integration Capabilities

This integration enhances issue control management and vulnerability consolidation between systems. It facilitates seamless interaction and communication between various aspects of the process. The integration offers the following capabilities:

**From Azure Boards to Conviso Platform:**

*   Promote interaction by providing data from Azure Boards with the development team responsible for corrections in Vulnerability Management from Conviso Platform.

**From Conviso Platform to Azure Boards:**

*   Generates new issues in Azure Boards based on events within Conviso Platform's Vulnerability Management System, such as identified vulnerabilities or completed security assessments.
*   Establishes a linkage between vulnerabilities detected in Conviso Platform and their relevant issues in Azure Boards, enhancing traceability and collaborative efforts.
*   Updates Azure Boards issues when specific actions occur in Conviso Platform's Vulnerability Management System, such as changes in vulnerability status, assessment completions, or updates to risk levels.
*   Transitions Azure Boards issues to appropriate workflow stages when vulnerabilities are resolved or mitigated within Conviso Platform's Vulnerability Management System.



### Prerequirements

To set up the integration, you'll need the following information:

1. Azure Boards's login
2. Admin permission in the project you're integrating



## Usage

To seamlessly integrate Conviso Platform with Azure Boards, follow these step-by-step procedures:

**1 - Configure the integration between Conviso Platform and AzureBoards**

**2 - Synchronize vulnerability statuses between Conviso Platform and Azure Boards using Webhooks**

## Configure the integration between Conviso Platform and Azure Boards

Follow the instructions below to complete the integration setup.

**Step 1 -** Go to **Conviso Platform**, look for the **Integrations (1)** on the left side menu, choose **Defect Tracker (2)** at the Categories panel to the right and finally click the **Integrate (3)** button just below Azure Boards's card, as illustrated in the example image below:



![](https://t3016679.p.clickup-attachments.com/t3016679/b77c0684-0084-4230-b22d-2b336f942072/integration-page-azure.png)



**Step 2** - **Log in** with your Azure account



![](https://t3016679.p.clickup-attachments.com/t3016679/1862625f-4968-433d-890c-fd0693ac836e/login.png)



**Step 3 - Severity Mapping** refers to Azure Boards's two-way integration with Conviso Platform. Select which severity will be referenced to Azure Boards's priority:



![](https://t3016679.p.clickup-attachments.com/t3016679/9237474f-e2d9-43e8-972b-86ec7615ea4c/severity-mapping.png)



**Step 4 -** Enter your organization name



![](https://t3016679.p.clickup-attachments.com/t3016679/910685a6-efa4-4a67-89f3-fcd219a0baec/azure-boards-credentials.png)


## Synchronize vulnerability statuses between Conviso Platform and Azure Boards using Webhooks

This feature facilitates seamless bidirectional synchronization of vulnerability statuses between the Conviso Platform and BusinessMap specific board.

**Step 1 -** Copy and save the **WebHook URL**, you're going to use it in Azure Boards for a future step



![](https://t3016679.p.clickup-attachments.com/t3016679/bb5dc0eb-4594-4ba2-bafa-70fa37559347/cp-configuration.png)



**Step 2 -** In the Project page, go for **Project Settings**, then to **Service hooks(you'll only be able to get here if you're a project admin) ,** and then, click in the add icon



![](https://t3016679.p.clickup-attachments.com/t3016679/82766eca-05b5-4fa9-abd4-e904f0170c92/azure-screen.png)



![](https://t3016679.p.clickup-attachments.com/t3016679/c2af3f92-fecb-47e4-8784-a2df4edca6ff/azure-service-hooks.png)



**Step 3 -** In the service hooks, choose the option **Web Hooks**



![](https://t3016679.p.clickup-attachments.com/t3016679/60ddc764-180c-4ef8-b589-02b347561a68/web-hooks-azure.png)



**Step 4 -** Select the Trigger(1) **Work item updated**, and select the **State** option in the Field filter(2)



![](https://t3016679.p.clickup-attachments.com/t3016679/290246ab-6100-4c96-ba17-38b5cb8ccada/state-azure.png)



**Step 5 -** Paste your **WebHook URL** that you got from **Conviso Platform**



![](https://t3016679.p.clickup-attachments.com/t3016679/0687ceff-0aa5-4ebf-abbd-6bd338a7d99c/azure-url.png)



## Support[​](https://docs.convisoappsec.com/integrations/businessmap#support)

Should you have any questions or require assistance while using the Conviso Platform, feel free to contact our dedicated support team.

## Resources[​](https://docs.convisoappsec.com/integrations/businessmap#resources)

By exploring our comprehensive content, you’ll discover resources that will enhance your understanding of AppSec.

[Conviso Blog](https://bit.ly/3JtXM8A): Access a wealth of informative videos covering various topics related to AppSec. Please note that the content is primarily in Portuguese.

[Conviso's YouTube Channel](https://www.youtube.com/@convisoappsec): Engage with our informative podcast, where we discuss AppSec-related subjects, providing valuable insights and discussions. The podcast is conducted in Portuguese.

[AppSec to Go - Conviso's Podcast on AppSec](https://spoti.fi/43UJQwN): Explore our blog, which offers a collection of articles and posts covering a wide range of AppSec topics. The content on the blog is primarily written in English.

[![](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)