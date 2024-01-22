---
id: azure-pipelines-graph
title: Azure Pipelines Graph Mode Integration
sidebar_label: Azure Pipelines Graph Mode
description:  Azure Pipelines is a CI/CD module of the Azure DevOps platform; learn how to integrate tasks with the Conviso Platform.
keywords:   [Azure Pipelines Graph Mode Integration]
---

<div style={{textAlign: 'center'}}>

![img](../../../static/img/azure-pipelines.png)

</div>

## Introduction

With Conviso Platform integrated into your [Azure DevOps Pipelines](https://dev.azure.com/) CI/CD Pipeline, you can automate your security processes, ensuring that your applications undergo through automated security assessments in new versions of your code.

You can run Conviso Platform **AST (Application Security Testing)**. This product offers **Static Application Security Testing (SAST)**, **Software Composition Analysis (SCA)**, Infrastructure as Code (IaC) and enables **Continuous Code Review** performed by our Security Analysts directly on your Azure pipeline.

## Requirements

In order for the experience with Conviso's services to be complete, it is necessary to meet all the requirements below:

1. Hosted Agent Pool (Ubuntu 18.04 or higher) with Docker installed or Agent Cloud Azure;

2. External access (can be limited to Conviso's registry for SAST, Dockerhub and Conviso Platform).

## First Steps

Given an Azure Devops project, to create a Welcome Pipeline you can follow the steps below:

1. At the DevOps Project root, click at **Pipelines**;

2. At the upper right menu, click at **New Pipeline**;

3. Select the **Use the classic editor to create a pipeline without YAML** option;

4. At **Select your Repository** step, select the platform where your code is hosted, the repository and the branch for pipeline execution and click at **Continue**;

5. Select the **Start with an Empty Job** option;

6. Rename the **Agent Job 1** to Conviso Agent, selecting Agent Pool option as **Azure Pipelines** and Agent Specification option as **ubuntu-18-04**;

7. At Conviso Agent, click at the **+** icon to add a new task;

8. Add a **Bash** type task, rename the Display Name to **Install Conviso CLI** and modify its type to **Inline**;

9. At the script field, add the code snippet presented below:

```yml
echo "Installing Conviso CLI..."
sudo pip3 install conviso-flowcli
conviso --version
```

10. Click at **Save & Queue**. The pipeline execution will begin in a few moments.

In this first block of **Bash** task, we carry out the installation of the tool and check if everything is fine. Then, we'll define how other blocks will be after further actions.


## CONVISO AST

You can run Conviso Platform **AST (Application Security Testing)**. This product offers **Static Application Security Testing (SAST)**, **Software Composition Analysis (SCA)**, Infrastructure as Code (IaC) and enables **Continuous Code Review** performed by our Security Analysts directly on your Azure pipeline.

```yml
conviso -k $(CONVISO_API_KEY) ast run 
```

## Troubleshooting
If authentication is not performed even when loading the ```CONVISO_API_KEY``` variable, make sure it is provided as environment variables for all tasks that use the CLI.

[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)