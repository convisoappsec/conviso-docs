---
id: ast
title: Scan projects using the Conviso CLI
sidebar_label: Scan projects using the CLI
description:  Protect your code from security threats with our AST (Application Security Testing) using Conviso CLI. Know more about!
keywords:  [Scan projects using the Conviso Platform CLI]
image: '/static/img/cliastseo.png'
---

### Introduction

Protect your code from security threats with our **AST (Application Security Testing)** using Conviso CLI. 

The tool offers both **Static Application Security Testing (SAST)** and **Software Composition Analysis (SCA)** tools, which can be accessed through the Conviso Platform.


### Usage

To trigger this function is very simple, one of the methods is to export the settings to be used by the CLI to environment variables. Below an example:

```bash
export FLOW_API_KEY='your-api-key'
export FLOW_PROJECT_CODE='your-project-code'
cd your_source_code_repository
conviso ast run
```

Or if you prefer to do it in a single command, the instructions below have the same effect:

```bash
conviso --api-key 'your-api-key' ast run \
  --project-code 'your-project-code' \
  --repository-dir 'your_source_code_repository_path'
```

**Note:** To scan your repository with AST, you need to have a project registered on Conviso Platform, the "Project Code" is found on the specific project page. You also need your API Key, you can find it in the [authentication part of this documentation](/cli/installation#authentication).

The identified vulnerabilities will be automatically sent to your Project on Conviso Platform. Now you can use the [Vulnerabilities Management](../general/vulnerabilities_management.md) resource to work on the correction flow.

### Deploy

When running the AST scan with the CLI, a [Deploy](../guides/code-review-strategies.md) creation is automatically performed to send diff code to Conviso Platform security Code Review. 

<div style={{textAlign: 'center'}}>

[![img](../../static/img/cli-ast1.png 'Conviso Platform security Code Review')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

Thus, it is possible to verify if the code added or changed in the commit has known security vulnerabilities and compare it with the original repository. 

**Note:** This feature is essential for performing Security Code Review by the security team. Conviso offers the continuous code review service, [see more](https://bit.ly/457M2Cb).


## Run scan only with Conviso SAST

As an additional custom configuration of the Conviso CLI, it’s possible to perform SAST-only in your code using the following command:

```bash
export FLOW_API_KEY='your-api-key'
export FLOW_PROJECT_CODE='your-project-code'
cd your_source_code_repository
conviso sast run
```

The following instructions have the same effect:

```bash
cd my_source_code_repository
conviso --api-key 'your-api-key' sast run --project-code 'your-project-code'
```

In case of any results, they will be automatically sent to Conviso Platform for assessment.

## Support
If you have any questions or need help using Conviso CLI, please don't hesitate to contact our [support team](mailto:support@convisoappsec.com).

## Resources
By exploring our content you'll find resources to help you understand the benefits of the Conviso CLI:

[Securing customers CI/CD pipelines using Conviso CLI:](https://bit.ly/3LS1oD7) This article brings a presentation of the possibilities of using the Conviso CLI for your CI/CD pipeline.

[![Discover Conviso Platform, a solution for ASPM!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)