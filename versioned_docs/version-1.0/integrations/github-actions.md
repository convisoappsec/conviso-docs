---
id: github-actions
title:  Integrating Conviso Platform with Github Actions 
sidebar_label: Githubs Action Integration
description:  With the Conviso platform integrated with Github Actions in your CI/CD pipeline, you can automate and streamline your security processes. Know more!
keywords: [Github Actions]
---

<div style={{textAlign: 'center'}}>

[![img](../../static/img/github-actions.png 'Github Actions')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)


</div>

## Introduction

With Conviso Platform integrated with [Github Actions](https://github.com/) in your CI/CD Pipeline, you can automate and streamline your security processes, ensuring that your applications undergo thorough security assessments throughout the development lifecycle.

You can run the Conviso Platform **AST (Application Security Testing)**. The tool offers **Static Application Security Testing (SAST)**, **Software Composition Analysis (SCA)**, and **Code Review** directly on your pipeline.

The [CLI](../cli/installation.md) is a docker image in this integration for all execution and connection with the Conviso Platform.

**[Explore our Integration page to learn more and supercharge your Application Security Program with Conviso Platform.](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)**

### Prerequisites

Before you can use Conviso Platform with Github Actions, you need to make sure that:

* You have your API Key, a code that identifies you to Conviso Platform. Find yours [using this tutorial](../api/generate-apikey.md).

* You must also set two environment variables for the runner: **FLOW_API_KEY** and **FLOW_PROJECT_CODE.** These codes tell Conviso Platform which project and account you are using. To do this on Github, you must:
    * Go to your project’s **Settings > Secrets and Variables** and expand the **Actions** section.
    * Select **New Repository Secret** and fill in the details. 
* After creating a variable, you can use it in the ```.yml``` configuration file or job scripts.
  * To make the ```.yml``` file, go to your repository page and click on **“Actions”** and **“set up a workflow yourself”:**

[![img](../../static/img/github-actions-img1.png 'GithubActions page')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

This will allow you to write the code we will use in this tutorial!

## Usage

By the end of this tutorial, you will know how to:
* **[Perform a Conviso AST scan to analyze your application's security](#perform-a-conviso-ast-scan-to-analyze-your-applications-security)**
* **[Run a scan exclusively using Conviso SAST](#run-a-scan-exclusively-using-conviso-sast)**
* **[Run a scan exclusively using Conviso SCA](#run-a-scan-exclusively-using-conviso-sca)**

**[Learn more about Conviso Platform integrations!](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)**

## Perform a Conviso AST scan to analyze your application's security

Harness the power of Application Security Testing (AST) by incorporating the Conviso AST scan into your application's security analysis. This versatile tool combines Static Application Security Testing (SAST), Software Composition Analysis (SCA), and Code Review capabilities, providing comprehensive security analysis directly within your pipeline.

Follow the steps below to integrate Conviso AST seamlessly into your pipeline, creating a comprehensive solution within your ```.yml``` file:

```yml
name: CI
on:
 push:
   branches: [ main ]
 pull_request:
   branches: [ main ]

jobs:
 conviso-ast:
   runs-on: ubuntu-latest
   container:
     image: convisoappsec/convisocli
     env:
       FLOW_API_KEY:  ${{secrets.CONVISO_API_KEY}}
       FLOW_PROJECT_CODE: "<project code>"
   steps:
   - uses: actions/checkout@v3

   - name: Run AST
     run: conviso ast run
```

**Note:** To scan your repository with AST, you need to have a project registered on Conviso Platform. The **"Project Code**" is found on the specific project page. You also need your API Key, which [you can find using this tutorial](../api/generate-apikey.md).

The identified vulnerabilities will be automatically sent to your Project on Conviso Platform. Now you can use the [Vulnerabilities Management](../general/vulnerabilities_management.md) resource to work on the correction flow.

## Run a scan exclusively using Conviso SAST

The steps below will show you what your ```.yml``` must have to perform Static Application Security Testing (SAST):

```yml
name: CI
on:
 push:
   branches: [ main ]
 pull_request:
   branches: [ main ]

jobs:
 conviso-sast:
   runs-on: ubuntu-latest
   container:
     image: convisoappsec/convisocli
     env:
       FLOW_API_KEY:  ${{secrets.CONVISO_API_KEY}}
       FLOW_PROJECT_CODE: "<project code>"
   steps:
   - uses: actions/checkout@v3

   - name: Run SAST
     run: conviso sast run
```

## Run a scan exclusively using Conviso SCA

The steps below will show you what your ```.yml``` must have to perform Software Composition Analysis (SCA):

```yml
name: CI
on:
 push:
   branches: [ master ]
 pull_request:
   branches: [ master ]

jobs:
 conviso-sca:
   runs-on: ubuntu-latest
   container:
     image: convisoappsec/convisocli
     env:
       FLOW_API_KEY:  ${{secrets.CONVISO_API_KEY}}
       FLOW_PROJECT_CODE: "<project code>"
   steps:
   - uses: actions/checkout@v3

   - name: Run SCA
     run: conviso sca run
```

**[Unlock the full potential of your Application Program with Conviso Platform integrations. Visit our Integration page now to get started.](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)**

## Support

If you have any questions or need help using our product, please don't hesitate to contact our support team.

## Resources

By exploring our content, you'll find resources to help you understand the benefits of the Conviso Platform integrations for Secure CI/CD Pipeline:

[AppSec: Integrations with CI/CD tools through Conviso Platform](https://bit.ly/3ODN0jw): Follow this article to understand how we can integrate your main tools within a single platform.

[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)