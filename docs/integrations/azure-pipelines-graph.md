---
id: azure-pipelines-graph
title: Azure Pipelines Graph Mode Integration
sidebar_label: Azure Pipelines Graph Mode
description:  Azure Pipelines is a CI/CD module of the Azure DevOps platform; learn how to integrate tasks with the Conviso Platform.
keywords:   [Azure Pipelines Graph Mode Integration]
---

<div style={{textAlign: 'center'}}>

![img](../../static/img/azure-pipelines.png)

</div>

## Introduction

Integrate the Conviso Platform seamlessly into your [Azure DevOps Pipelines](https://dev.azure.com/) to automate and streamline your security processes. This integration ensures thorough security assessments for your applications throughout the development lifecycle.

The Azure Pipelines is a CI/CD module of the [Azure Devops](https://aex.dev.azure.com/) platform. Through this module, it is possible to create automation routines with various tasks that are available on Azure's marketplace. Currently, the integration with Conviso consists of Bash-type tasks. Among the tasks are: the CLI command line interface ([CLI available at PyPi](https://pypi.org/project/conviso-cli/)).

## Requirements

In order for the experience with Conviso's services to be complete, it is necessary to meet all the requirements below:

1. Hosted Agent Pool (Ubuntu 22.04 or higher) with Docker installed or Agent Cloud Azure;

2. External access (can be limited to Conviso's registry for SAST, Dockerhub and Conviso Platform).

## First Steps

Given an Azure Devops project, to create a Welcome Pipeline you can follow the steps below:

1. At the DevOps Project root, click at **Pipelines**;

2. At the upper right menu, click at **New Pipeline**;

3. Select the **Use the classic editor to create a pipeline without YAML** option;

4. At **Select your Repository** step, select the platform where your code is hosted, the repository and the branch for pipeline execution and click at **Continue**;

5. Select the **Start with an Empty Job** option;

6. Rename the **Agent Job 1** to Conviso Agent, selecting Agent Pool option as **Azure Pipelines** and Agent Specification option as **ubuntu-latest**;

7. At Conviso Agent, click at the **+** icon to add a new task;

8. Add a **Bash** type task, rename the Display Name to **Install Conviso CLI** and modify its type to **Inline**;

9. You need to define an environment variable for CONVISO_API_KEY and set the value from Conviso Platform. It is important to set this variable as a secret.

10. To configure Conviso AST, within the script field, add the code snippet presented below:

```yml
echo "Installing Conviso CLI..."
sudo pip3 install conviso-cli
conviso -k $(CONVISO_API_KEY) ast run
```

11. Click at **Save & Queue**. The pipeline execution will begin in a few moments.

12. The resulsts will be sent to Conviso Platform.

## Troubleshooting

### Configuring API Key

If authentication is not performed even when loading the ```CONVISO_API_KEY``` variable, make sure it is provided as environment variables for all tasks that use the CLI.

### Ensuring Git is added to PATH Environment Variable

If you encounter the error below, ensure that the `PATH` environment variable includes `C:\Program Files\Git\bin`:

```
Unable to locate executable file: 'bash'. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable.
```

Follow these steps to verify and update it:

1. Access your project in Azure;
2. Navigate to **Agent pools**:

<div style={{textAlign: 'center'}}>

![img](../../static/img/azure-pipelines-graph-mode1.png)

</div>

3. In the **Capabilities** tab, search for the **Path** environment variable:

<div style={{textAlign: 'center'}}>

![img](../../static/img/azure-pipelines-graph-mode2.png)

</div>

4. Add `C:\Program Files\Git\bin` to the environment variable.

<div style={{textAlign: 'center'}}>

![img](../../static/img/azure-pipelines-graph-mode3.png)

</div>

5. Restart the agent service.

[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)