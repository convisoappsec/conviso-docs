---
id: circleci
title: CircleCI Integration
sidebar_label: CircleCI
description:  Integration with Conviso Platform takes advantage of CircleCI's native Docker support; learn how to run it!
keywords:  [CircleCI Integration]
---
<div style={{textAlign: 'center'}}>

![img](../../static/img/circleci.png)

</div>

:::note
First time using CircleCI? Please refer to the [following documentation](https://circleci.com/docs/).  
:::

## Introduction

CircleCI is a CI/CD platform that has the purpose of bringing agility to the pipeline creation process. One of its main features is its extensibility, through the so-called Orbs it is possible to add custom jobs, commands and executors. Currently, the integration with Conviso's products takes advantage of CircleCI's native docker support, and runs through a docker image made available on [Dockerhub](https://hub.docker.com/r/convisoappsec/convisocli) with a CLI-like tool available on [PyPi](https://pypi.org/project/conviso-flowcli/).

## Requirements

For the Cloud version, support is native. However, for the enterprise version, in order for the experience with Conviso's services to be complete, it is necessary to be aware of the requirements below:

- Build environment with Docker

- External access (can be limited to Conviso, Dockerhub and Conviso registry)

## First Steps

After configuring your VCS access policies in CircleCI, on the Project Dashboard page you will be able to see all the repositories available for creating Pipelines. If there is already a description of a pipeline in the repository, it will be available in the ```.circleci``` folder at the root of the repository, in the config.yml file. It is important that Conviso jobs are set up correctly along with the rest of the workflow. If there is no pipeline yet, clicking on the **Setup project** button for your repository will open an editor for the creation of pipelines.

The platform will bring suggestions based on the technologies present in your project's code. For this first pipeline, we can paste the contents of the code snippet below:

```yml
version: 2.1
workflows:
  main:
    jobs:
      - flow-help

jobs:
 flow-help: 
    docker: 
      - image: "convisoappsec/convisocli"
    steps:
      - setup_remote_docker
      - checkout
      - run:
          command: conviso --help
          name: help
```
In this first pipeline, only one job is configured, called **flow-help**, and we determine that it will be executed as the only job of the **main** workflow.

This file can be saved by Circle CI itself in an alternate branch by clicking on **Add Config** or manually committed.

## Variables Setup

Authentication between the CLI tool and the platform takes place through an API key. For this to happen safely, it is recommended to use the **Variables** of Pipeline. They can be defined by project or else by context.

### Project Variables Setup

In this case, the variable will be restricted to the execution of pipelines of the selected project. To configure this way, follow the steps below:

1. From the **Project Dashboard** menu, select the desired project;

2. In the upper right corner, click on **Project Settings**;

3. In the left menu, click on **Environment Variables** and then on the **Add Environment Variable** button;

4. Name the variable FLOW_API_KEY and add the API key available in your Conviso Platform profile.

### Context Variables Setup

In this case, the variable will be visible to all projects associated with the specified context. To configure this way, follow the steps below:

1. In the **Organization Settings** menu, select the **Contexts** option;

2. Select the desired context or create a new one by clicking on **New Context**;

3. After selecting the desired context, click on **Add Environment Variable**.

For the jobs to load the created context, you need to configure them in the workflows session of the configuration file. Below, an example:

```yml
workflows:
  main:
    jobs:
      - myjob:
          context: my_context_name # has an env var called MY_ENV_VAR
jobs:
 myjob:
    docker: 
      - image: "convisoappsec/convisocli"
    steps:
      - run:
          command: echo $GROUP_ENVIRONMENT_VARIABLE
          name: test environment variable from context
```

## Code Review

Before proceeding, we recommend reading the following [document](../guides/code-review-strategies) to understand the different strategies/approaches for deploying Code Review.

After choosing the strategy used to send deploys to Code Review, it is possible to create a specific Pipeline for this action as well as integrate with other existing pipelines. The prerequisites for executing this functionality are the settings of the ```FLOW_API_KEY``` variables in the project or context (we'll follow the guide with the context option) and ```FLOW_PROJECT_CODE``` (identified as the Project Key in Conviso Platform) which can be defined individually by project.

Below are sample code snippets for each of the approaches:

**With TAGS, sorted by timestamp**

```yml
version: 2.1

workflows:
  main:
    jobs:
      - flow-codereview-tags-time:
          context: Conviso #has an env var called FLOW_API_KEY

jobs:
 flow-codereview-tags-time: 
    docker: 
      - image: "convisoappsec/convisocli"
    environment:
      FLOW_PROJECT_CODE: "<Project Key>"
    steps:
      - setup_remote_docker
      - checkout
      - run:
          command: conviso deploy create with tag-tracker sort-by time
          name: deploy
```

**With TAGS, sorted by versioning-style**

```yml
version: 2.1

workflows:
  main:
    jobs:
      - flow-codereview-tags-format:
          context: Conviso #has an env var called FLOW_API_KEY

jobs:
 flow-codereview-tags-format: 
    docker: 
      - image: "convisoappsec/convisocli"
    environment:
      FLOW_PROJECT_CODE: "<Project Key>"
    steps:
      - setup_remote_docker
      - checkout
      - run:
          command: conviso deploy create with tag-tracker sort-by versioning-style
          name: deploy
```

**Without TAGS, sorted by GIT Tree**

```yml
version: 2.1

workflows:
  main:
    jobs:
      - flow-codereview-git:
          context: Conviso #has an env var called FLOW_API_KEY

jobs:
 flow-codereview-git: 
    docker: 
      - image: "convisoappsec/convisocli"
    environment:
      FLOW_PROJECT_CODE: "<Project Key>"
    steps:
      - setup_remote_docker
      - checkout
      - run:
          command: conviso deploy create with values   
          name: deploy
```
 
## SAST

In addition to deploying for code review, it is also possible to integrate a SAST-type scan into the development pipeline, which will automatically perform a scan for potential vulnerabilities, treated in Conviso Platform as findings.

The prerequisites for executing the job are the same ones already used: ```FLOW_API_KEY``` no (context or project) and ```FLOW_PROJECT_CODE``` defined as environment variables.

In the above pipeline, we didn't use any options to the ```conviso sast run``` command. In this case, the default behavior is to perform the analysis of the entire repository. This is because the default values used for the ```--start-commit``` and ```--end-commit``` options use first commit and current commit (HEAD), respectively.

```yml
version: 2.1

workflows:
  main:
    jobs:
      - flow-sast:
          context: Conviso #has an env var called FLOW_API_KEY

jobs:
 flow-sast: 
    docker: 
      - image: "convisoappsec/convisocli"
    environment:
      FLOW_PROJECT_CODE: "<Project Key>"
    steps:
      - setup_remote_docker
      - checkout
      - run:
          command: conviso sast run   
          name: sast
```

Alternatively, we can specify the diff range manually. In the Example below, we scan between the current commit and the immediately previous one on the current branch.

```yml
version: 2.1

workflows:
  main:
    jobs:
      - flow-sast:
          context: Conviso #has an env var called FLOW_API_KEY

jobs:
 flow-sast: 
    docker: 
      - image: "convisoappsec/convisocli"
    environment:
      FLOW_PROJECT_CODE: "<Project Key>"
    steps:
      - setup_remote_docker
      - checkout
      - run:
          command: conviso sast run --start_commit `git rev-parse @~1` --end-commit $CIRCLE_SHA1 
          name: sast
```

## SCA

The following code snippet will trigger an SCA scan and send the results to Conviso Platform:

```yml
version: 2.1

workflows:
  main:
    jobs:
      - flow-sca:
          context: Conviso #has an env var called FLOW_API_KEY

jobs:
 flow-sca: 
    docker: 
      - image: "convisoappsec/convisocli"
    environment:
      FLOW_PROJECT_CODE: "<Project Key>"
    steps:
      - setup_remote_docker
      - checkout
      - run:
          command: conviso sca run   
          name: sca
```

## Getting Everything Together: Code Review + SAST + SCA Deployment

The SAST and SCA analysis can be complementary to the code review carried out by Conviso's professional, even serving as input for the analyst. The job below will perform the deployment for code review of the code and will use the same diff identifiers to perform the SAST and SCA analysis, forming a complete solution in the pipeline. An example of a complete pipeline with all solutions can be seen in the snippet below:

```yml
version: 2.1

workflows:
  main:
    jobs:
      - flow-deploy-sast-sca:
          context: Conviso #has an env var called FLOW_API_KEY

jobs:
 flow-deploy-sast-sca: 
    docker: 
      - image: "convisoappsec/convisocli"
    environment:
      FLOW_PROJECT_CODE: "<Project Key>"
    steps:
      - setup_remote_docker
      - checkout
      - run:
          name: deploy
          command: conviso deploy create -f env_vars with values > created_deploy_vars
      - run: 
          name: sast
          command: |
            source created_deploy_vars
            conviso sast run \
            --start-commit "$FLOW_DEPLOY_PREVIOUS_VERSION_COMMIT" \
            --end-commit "$FLOW_DEPLOY_CURRENT_VERSION_COMMIT"
      - run:
          name: sca
          command: conviso sca run
```

[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)