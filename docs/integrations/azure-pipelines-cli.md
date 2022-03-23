---
id: azure-pipelines-cli
title: Azure Pipelines CLI Mode
sidebar_label: Azure Pipelines CLI Mode
---

<div style={{textAlign: 'center'}}>

![img](../../static/img/azure-pipelines.png)

</div>

## Introduction

The Azure Pipelines is a CI/CD module of the [Azure Devops](https://aex.dev.azure.com/) platform. Through this module, it is possible to create automation routines with various tasks that are available on Azure's marketplace. Currently, the integration with Conviso consists of a Bash-type task that will be run using a docker container and a CLI-type application. The [CLI PyPi tool](https://pypi.org/project/conviso-flowcli/) knowledge is highly recommended.

The integration of continuous code review analysis with Azure Pipeline aims to create a direct connector with the development pipeline so that code review of each deploy is carried out.

This integration with Conviso Platform will make it easier to track revisions of each piece of source code without impacting the development process.

Deploy review status checks are one of the benefits Conviso Platform makes available to the customer to manage deploys, and if a vulnerability is identified in the deploy code, a notification will automatically be generated for the person responsible for the vulnerability correction.

## Requirements

In order for the experience with Conviso's services to be complete, it is necessary to meet all the requirements below:

1. Hosted Agent Pool (Ubuntu 18.04 or higher) with Docker installed or Agent Cloud Azure;

2. External access (may be limited to Conviso's registry for SAST, Dockerhub and Conviso Platform).

## First Steps

Given an Azure Devops project, to create a Welcome Pipeline you can follow the steps below:

1. At the DevOps Project root, click at **Pipelines**;

2. At the upper right menu, click at **New Pipeline**;

3. At the **Connect** step, select the platform where your code is hosted; 

4. At **Select**, connect to the wanted repository code; 

5. At **Configure**, if you don't have or don't want to associate it with an existing pipeline, select the **Starter Pipeline** option;

6. At the opened Azure Devops text editor, paste the code snippet below:

```yml
trigger:
  - master  
jobs:
- job: Conviso_Appsec_Getting_started
  pool:
    vmImage: 'ubuntu-16.04'
  container:
    image: 'convisoappsec/flowcli'

  steps:
    - bash: conviso --help
```

Throughout the document, trigger, pool and job settings are proposed. The only requirement is the jobs associated to CLI are performed at the ```convisoappsec/flowcli``` image, available at DockerHub.

## Secrets Setup

Authentication between the CLI tool and the platform takes place through an API key. For this to happen in a safe way, it is recommended to use the **Variables** of Pipeline. They can be defined in an already created pipeline following the step by step presented below: 

1. At the DevOps Project root, click at **Pipelines**;

2. Select the wanted pipeline at the pipelines list;

3. Click at **Edit** at the upper right menu;

4. at the upper right menu again, click at **Variables**;

5. Click at the **+** button at the upper right corner;

6. Label the variable as ```CONVISO_API_KEY``` and add the API key available at your Conviso Platform Profile;

7. Check the option **Keep this value secret**, then click **Ok**.

## Code Review

Before proceeding, we recommend reading the following [guide](../guides/code-review-strategies) to understand the different strategies/approaches for deploying Code Review.

After choosing the strategy used to send deploys to Code Review, it is possible to create a specific Pipeline for this action as well as integrate with other existing pipelines. The requirements for executing this functionality are the settings of the ```CONVISO_API_KEY``` variables (previously set in the desired pipeline variables) and the ```CONVISO_PROJECT_CODE``` variable (identified as the Project Key at Conviso Platform) that can be defined in each of the pipelines. 

Below are the code snippets that can be at the ```azure-pipelines.yml``` file (or any other custom file):

**With TAGS, sorted by timestamp**

```yml
trigger:
  - master  
jobs:
- job: Conviso_Appsec_Deploy_Tags_Time
  pool:
    vmImage: 'ubuntu-16.04'
  container:
    image: 'convisoappsec/flowcli'
  variables:
    CONVISO_PROJECT_CODE: '<Project Key>'

  steps:
    - bash: |
          conviso deploy create with tag-tracker sort-by time    
      env:
         CONVISO_API_KEY: $(CONVISO_API_KEY)
```

**With TAGS, sorted by versioning-style**

```yml
trigger:
  - master  
jobs:
- job: Conviso_Appsec_Deploy_Tags_version_style
  pool:
    vmImage: 'ubuntu-16.04'
  container:
    image: 'convisoappsec/flowcli'
  variables:
    CONVISO_PROJECT_CODE: '<Project Key>'

  steps:
    - bash: |
          conviso deploy create with tag-tracker sort-by versioning-style    
      env:
         CONVISO_API_KEY: $(CONVISO_API_KEY)
```

**Without TAGS, sorted by GIT Tree**

```yml
trigger:
  - master  
jobs:
- job: Conviso_Appsec_Deploy_Git_tree
  pool:
    vmImage: 'ubuntu-16.04'
  container:
    image: 'convisoappsec/flowcli'
  variables:
    CONVISO_PROJECT_CODE: '<Project Key>'

  steps:
    - bash: |
          conviso deploy create with values    
      env:
         CONVISO_API_KEY: $(CONVISO_API_KEY)
```

## SAST

In addition to deploying for code review, it is also possible to integrate a SAST-type scan into the development pipeline, which will automatically perform a scan for potential vulnerabilities, treated at Conviso Platform as findings.

The requirements for running the job are the same as already practiced: ```CONVISO_API_KEY``` and ```CONVISO_PROJECT_CODE```, defined as environment variables for the Agent Pool.

```yml
trigger:
  - master  
jobs:
- job: Conviso_Appsec_Sast
  pool:
    vmImage: 'ubuntu-16.04'
  container:
    image: 'convisoappsec/flowcli'
  variables:
    CONVISO_PROJECT_CODE: '<Project Key>'

  steps:
    - bash: |
          conviso sast run
      env:
         CONVISO_API_KEY: $(CONVISO_API_KEY)
```

In the above pipeline, we didn't use any options to the ```conviso sast run``` command. In this case, the default behavior is to perform the analysis of the entire repository. This is because the default values used for the ```--start-commit``` and ```--end-commit``` options use first commit and current commit (HEAD), respectively. 

Alternatively, we can specify the diff range manually. In the example below, we scan between the current commit and the immediately previous one on the current branch: 

```yml
trigger:
  - master  
jobs:
- job: Conviso_Appsec_Custom_Sast
  pool:
    vmImage: 'ubuntu-16.04'
  container:
    image: 'convisoappsec/flowcli'
  variables:
    CONVISO_PROJECT_CODE: '<Project Key>'

  steps:
    - bash:
          conviso sast run --start_commit `git rev-parse @~1` --end-commit $GIT_COMMIT
      env:
         CONVISO_API_KEY: $(CONVISO_API_KEY)
         GIT_COMMIT: $(Build.SourceVersion)
```

## SCA

The following code snippet will trigger a SCA scan and send the results to Conviso Platform:

```yml
trigger:
  - master  
jobs:
- job: Conviso_Appsec_Sca
  pool:
    vmImage: 'ubuntu-16.04'
  container:
    image: 'convisoappsec/flowcli'
  variables:
    CONVISO_PROJECT_CODE: '<Project Key>'

  steps:
    - bash: 
         conviso sca run
      env:
         CONVISO_API_KEY: $(CONVISO_API_KEY)
```

## Getting Everything Together: Code Review + SAST + SCA Deployment

The SAST and SCA analysis can be complementary to the code review carried out by the professional at Conviso, even serving as input for the analyst. The job below will perform the deploy for code review of the code and will use the same diff identifiers to perform the SAST and SCA analysis, forming a complete solution in the pipeline. An example of a complete pipeline with all solutions can be seen in the snippet below: 

```yml
trigger:
  - master  
jobs:
- job: Conviso_Appsec_Job_Full
  pool:
    vmImage: 'ubuntu-16.04'
  container:
    image: 'convisoappsec/flowcli'
  variables:
    CONVISO_PROJECT_CODE: 'Kt5p5zKb_zbth0o0'

  steps:
    - bash: |
          conviso deploy create -f env_vars with values > created_deploy_vars    
      env:
         CONVISO_API_KEY: $(CONVISO_API_KEY)    
    - bash: |
          cat created_deploy_vars
    - bash: |
          source created_deploy_vars
          conviso sast run \
            --start-commit "$CONVISO_DEPLOY_PREVIOUS_VERSION_COMMIT" \
            --end-commit "$CONVISO_DEPLOY_CURRENT_VERSION_COMMIT"
      env:
         CONVISO_API_KEY: $(CONVISO_API_KEY)
    - bash: | 
         conviso sca run
      env:
         CONVISO_API_KEY: $(CONVISO_API_KEY)
```

## Troubleshooting

If authentication is not performed even by loading the CONVISO_API_KEY variable, make sure it is loaded in the env session of all tasks that use the CLI.