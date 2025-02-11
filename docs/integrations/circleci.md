---
id: circleci
title: CircleCI Integration
sidebar_label: CircleCI
description:  Discover the steps to effectively configure the integration of CircleCI with the Conviso Platform. This guide will walk you through integrating your development pipeline with Conviso. By integrating with Conviso, you'll be able to incorporate security analysis directly into your continuous integration/continuous delivery (CI/CD) workflow, enhancing the security and efficiency of your development applications.
keywords:  [CircleCI Integration]
---
<div style={{textAlign: 'center'}}>

![img](../../static/img/circleci.png)

</div>

:::note
First time using CircleCI? Please refer to the [following documentation](https://circleci.com/docs/).  
:::

## Introduction

CircleCI is a CI/CD platform that has the purpose of bringing agility to the pipeline creation process. One of its main features is its extensibility, through the so-called Orbs it is possible to add custom jobs, commands and executors. Currently, the integration with Conviso's products takes advantage of CircleCI's native docker support, and runs through a docker image made available on [Dockerhub](https://hub.docker.com/r/convisoappsec/convisocli) with a CLI-like tool available on [PyPi](https://pypi.org/project/conviso-cli/).

## Requirements

For the Cloud version, support is native. However, for the enterprise version, in order for the experience with Conviso's services to be complete, it is necessary to be aware of the requirements below:

- Build environment with Docker

- External access (can be limited to Conviso, Dockerhub and Conviso registry)

## First Steps

After configuring your VCS access policies in CircleCI, on the Project Dashboard page you will be able to see all the repositories available for creating Pipelines. If there is already a description of a pipeline in the repository, it will be available in the ```.circleci``` folder at the root of the repository, in the config.yml file. It is important that Conviso jobs are set up correctly along with the rest of the workflow. If there is no pipeline yet, clicking on the **Setup project** button for your repository will open an editor for the creation of pipelines.

## Variables Setup

Authentication between CircleCI and Conviso Platform takes place through an API key. For this to happen safely, it is recommended to use the **Environment Variables** of Pipeline. They can be defined by project or else by context.

### Project Variables Setup

In this case, the variable will be restricted to the execution of pipelines of the selected project. To configure this way, follow the steps below:

1. From the **Project Dashboard** menu, select the desired project;

2. In the upper right corner, click on **Project Settings**;

3. In the left menu, click on **Environment Variables** and then on the **Add Environment Variable** button;

4. Name the variable CONVISO_API_KEY and add the API key available in your Conviso Platform profile.

### Context Variables Setup

In this case, the variable will be visible to all projects associated with the specified context. To configure this way, follow the steps below:

1. In the **Organization Settings** menu, select the **Contexts** option;

2. Select the desired context or create a new one by clicking on **New Context**. For example you can name this new context as Conviso. For the purpose of this tutorial we will do that;

3. After selecting the desired context, click on **Add Environment Variable**.
You can then add a new variable called CONVISO_API_KEY with the value of Conviso API Key generated before.

For the jobs to load the created context, you need to configure them in the workflows session of the configuration file. 

## Let us configure Circle CI pipeline in order to run Conviso AST:

```yml
version: 2.1

jobs:
  conviso-ast:
    docker:
      - image: convisoappsec/convisocli:latest
    steps:
      - setup_remote_docker
      - checkout
      - run:
          name: "Conviso AST"
          command: "conviso ast run --vulnerability-auto-close"

# Orchestrate jobs using workflows
# See: https://circleci.com/docs/workflows/ & https://circleci.com/docs/configuration-reference/#workflows
workflows:
  security: # This is the name of the workflow, feel free to change it to better match your workflow.
    # Inside the workflow, you define the jobs you want to run.
    jobs:
      - conviso-ast:
          context: Conviso # has an env var called CONVISO_API_KEY
```

[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)