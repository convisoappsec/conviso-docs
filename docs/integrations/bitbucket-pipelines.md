---
id: bitbucket-pipelines
title: Bitbucket Pipelines Integration
sidebar_label: Bitbucket Pipelines
description:  Bitbucket Pipelines integration with Conviso Platform allows direct integration with the development pipeline without impacting your business. Know more!
keywords:  [Bitbucket Pipelines Integration]
---

<div style={{textAlign: 'center'}}>

![img](../../static/img/bitbucket.png)

</div>

:::note
First time using Bitbucket? Please refer to the [following documentation](https://bitbucket.org/product/guides/).  
:::

## Introduction

This integration allows you to directly integrate with the development pipeline without impacting your business.

## Setting up a new repository without an existing pipeline 

To set up a repository, follow the steps below:

1. At the BitBucket project page, click at the **Pipelines** section;

2. Click **Select** at the **Starter Pipeline** option;

3. A text editor will appear; delete all of its content;

4. As the first job, let's invoke the CLI help menu. To do so, paste the snippet below:

```yml
image: convisoappsec/convisocli

pipelines:
  branches:
    master:
      - step:
          name: Conviso BitBucket Pipeline
          script:
            - conviso --help
          services:
            - docker
```

## Setting up Environment Variables

In order for the environment to be ready for the execution of all CLI resources, it is necessary to configure some environment variables. To accomplish that, follow the steps below:

1. Under **Repository Settings**, click at **Repository Variables**;

2. Create a new variable with the name ```FLOW_API_KEY```. This key is available for Conviso Platform users at the user profile page;

3. We can also add a variable named ```FLOW_PROJECT_CODE``` that contains the Continuous Code Review Project key, present on the Project page at the Project Key field.

## Code Review 

Before proceeding, we recommend reading the following [guide](../guides/code-review-strategies) to understand the different strategies/approaches for deploying Code Review.

After choosing the strategy used to send deploys to Code Review, it is possible to create a specific pipeline for this action, as well as integrate with other existing pipelines. The requirements for executing this functionality are the settings of the ```FLOW_API_KEY``` variable at the project and the ```FLOW_PROJECT_CODE``` variable (identified as the Project Key at Conviso Platform) which can be set individually by project.

Below are sample code snippets for each of the approaches:

**With TAGS, sorted by timestamp**

```yml
image: convisoappsec/convisocli

pipelines:
  branches:
    master:
      - step:
          name: Conviso BitBucket Pipeline
          script:
            - conviso deploy create with tag-tracker sort-by time  
          services:
            - docker
```

**With TAGS, sorted by versioning-style**

```yml
image: convisoappsec/convisocli
pipelines:
  branches:
    master:
      - step:
          name: Conviso BitBucket Pipeline
          script:
            - conviso deploy create with tag-tracker sort-by versioning-style
          services:
            - docker
```

**Without TAGS, sorted by GIT Tree**

```yml
image: convisoappsec/convisocli

pipelines:
  branches:
    master:
      - step:
          name: Conviso BitBucket Pipeline
          script:
            - conviso deploy create with values   
          services:
            - docker
```

## SAST

In addition to deploying for code review, it is also possible to integrate a SAST-type scan into the development pipeline, which will automatically perform a scan for potential vulnerabilities, treated in Conviso Platform as findings.

The requirements for running the job are the same as already practiced: ```FLOW_API_KEY``` and ```FLOW_PROJECT_CODE```, defined as environment variables.

```yml
image: convisoappsec/convisocli

pipelines:
  branches:
    master:
      - step:
          name: Conviso BitBucket Pipeline
          script:
            - conviso sast run
          services:
            - docker
```

In the above pipeline, we didn't use any options to the ```conviso sast run``` command. In this case, the default behavior is to perform the analysis of the entire repository. This is because the default values used for the ```--start-commit``` and ```--end-commit``` options use first commit and current commit (HEAD), respectively.

Alternatively, we can specify the diff range manually. In the example below, we scan between the current commit and the immediately previous one on the current branch:

```yml
image: convisoappsec/convisocli

pipelines:
  branches:
    master:
      - step:
          name: Conviso BitBucket Pipeline SAST
          script:
            - conviso sast run --start_commit `git rev-parse @~1` --end-commit $BITBUCKET_COMMIT                  
          services:
            - docker
```

## SCA

The following code snippet will trigger an SCA scan and send the results to Conviso Platform:

```yml
image: convisoappsec/convisocli

pipelines:
  branches:
    master:
      - step:
          name: Conviso BitBucket Pipeline SCA
          script:
            - conviso sca run
          services:
            - docker
```

## Getting everything together: Code Review + SAST + SCA Deployment

The SAST and SCA analysis can be complementary to the code review carried out by the professional at Conviso, even serving as input for the analyst. The job below will perform the deployment for code review of the code and will use the same diff identifiers to perform the SAST and SCA analysis, forming a complete solution in the pipeline. An example of a complete pipeline with all solutions can be seen in the snippet below:

```yml
image: convisoappsec/convisocli

pipelines:
  branches:
    master:
      - step:
          name: Conviso BitBucket Pipeline
          script:
            - conviso deploy create -f env_vars with values > created_deploy_vars
            - source created_deploy_vars
            - |
                conviso sast run \
                  --start-commit "$FLOW_DEPLOY_PREVIOUS_VERSION_COMMIT" \
                  --end-commit "$FLOW_DEPLOY_CURRENT_VERSION_COMMIT"
            - conviso sca run
          services:
            - docker
```

[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)