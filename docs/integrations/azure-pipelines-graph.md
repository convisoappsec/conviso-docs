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

The Azure Pipelines is a CI/CD module of the [Azure Devops](https://aex.dev.azure.com/) platform. Through this module, it is possible to create automation routines with various tasks that are available on Azure's marketplace. Currently, the integration with Conviso consists of Bash-type tasks. Among the tasks are: the CLI command line interface ([CLI available at PyPi](https://pypi.org/project/conviso-flowcli/)), running SAST, running deploy for code review, and also the two actions together.

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

## Code Review Deployment

Before proceeding, we recommend reading the following [guide](../guides/code-review-strategies) to understand the different strategies/approaches for deploying Code Review.

After choosing the strategy used to send deploys to Code Review, it is possible to create a specific pipeline for this action, as well as integrate with other existing pipelines. The requirements for executing this functionality are the settings of the ```FLOW_API_KEY``` variables previously configured in the desired pipeline variables and the ```FLOW_PROJECT_CODE``` variable (identified as the Project Key at Conviso Platform) that can be defined in each of the pipelines.

Below are the code snippets that must be inserted in the blocks for each type of strategy: 

**With TAGS, sorted by timestamp**

```yml
conviso -k $(FLOW_API_KEY) deploy create with tag-tracker sort-by time --project-code $(FLOW_PROJECT_CODE)
```

**With TAGS, sorted by versioning-style**

```yml
conviso -k $(FLOW_API_KEY) deploy create with tag-tracker sort-by versioning-style --project-code $(FLOW_PROJECT_CODE)
```

**Without TAGS, sorted by GIT Tree**

```yml
conviso -k $(FLOW_API_KEY) deploy create with values --project-code $(FLOW_PROJECT_CODE)
```

## SAST

In addition to deploying for code review, it is also possible to integrate a SAST-type scan into the development pipeline, which will automatically perform a scan for potential vulnerabilities, treated in Conviso Platform as findings.

The requirements for running the job are the same as already practiced: ```FLOW_API_KEY``` and ```FLOW_PROJECT_CODE``` defined as environment variables for the Agent Pool.

```yml
conviso sast run --project-code $(FLOW_PROJECT_CODE)
```

In the above pipeline, we didn't use any options to the ```conviso sast run``` command. In this case, the default behavior is to perform the analysis of the entire repository. This is because the default values used for the ```--start-commit``` and ```--end-commit``` options use first commit and current commit (HEAD), respectively.

Alternatively, we can specify the diff range manually. In the example below, we scan between the current commit and the immediately previous one on the current branch:

```yml
conviso sast run --start_commit `git rev-parse @~1` --end-commit $(Build.SourceVersion) --project-code $(FLOW_PROJECT_CODE)
```

## SCA

The following code snippet will trigger an SCA scan and send the results to Conviso Platform:

```yml
conviso sca run --project-code $(FLOW_PROJECT_CODE)
```

## Getting everything together: Code Review + SAST + SCA Deployment

The SAST and SCA analysis can be complementary to the code review carried out by the professional at Conviso, even serving as input for the analyst. The job below will perform the deployment for code review of the code and will use the same diff identifiers to perform the SAST and SCA analysis, forming a complete solution in the pipeline. An example of a complete pipeline with all solutions can be seen in the snippet below:

```yml
conviso -k $(FLOW_API_KEY) deploy create -f env_vars with values > created_deploy_vars
source created_deploy_vars
conviso -k $(FLOW_API_KEY) sast run --project-code $(FLOW_PROJECT_CODE)
conviso -k $(FLOW_API_KEY) sca run --project-code $(FLOW_PROJECT_CODE)
```

## Troubleshooting
If authentication is not performed even when loading the ```FLOW_API_KEY``` variable, make sure it is provided as environment variables for all tasks that use the CLI.

[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)