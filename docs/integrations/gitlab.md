---
id: gitlab
title: Gitlab
sidebar_label: Gitlab
---

![img](../../static/img/gitlab.png)

:::note
First time using Gitlab? Please refer to the following tutorial.  
:::

## Introduction

This integration uses the [CLI](../cli/installation) as a docker image for all the execution and communication with Flow.  
By the end of this tutorial you will know how to:
- Run a SAST scan
- Run a SCA scan
- Send diff code to Flow's security Codereview module.

## Requirements
1. Executor type defined as docker or docker+machine; 
1. External access (can be restricted to specific Conviso addresses);

### Usage

The snippets below will produce a single job with our integration as single step, but you can attach each **script**
section described on each action in your current pipeline with your own stage organization.
## SAST
The following code snippet will trigger a SAST scan and send the results to Flow.

```yml
conviso-sast:
    image: convisoappsec/flowcli:latest
    services:
        - docker:dind
    variables:
        FLOW_PROJECT_CODE: "HERE"
    only:
        variables:
            - $FLOW_API_KEY
    script:
        - flow sast run
    tags:
        - docker
```

## SCA
The following code snippet will trigger a SCA scan and send the results to Flow.

```yml
conviso-sca:
    image: convisoappsec/flowcli:latest
    services:
        - docker:dind
    variables:
        FLOW_PROJECT_CODE: "HERE"
    only:
        variables:
            - $FLOW_API_KEY
    script:
        - flow sca run
    tags:
        - docker
```

## Continuous Codereview 
The following code snippet will send diff code to Flow's security Codereview module so you can 
perform a continuous codereview assessment.
There are three approaches depending on how you work with your project. In a nutshell:
- Using Tags, ordered by time
- Using Tags, ordered by versioning style (semantic version)
- Without using Tags, ordered by Git tree

```yml
conviso-codereview:
    image: convisoappsec/flowcli:latest
    services:
        - docker:dind
    variables:
        FLOW_PROJECT_CODE: "Please, insert your project code here"
    only:
        variables:
            - $FLOW_API_KEY
    script:
       - flow deploy create with values
       # - flow deploy create with tag-tracker sort by time
       # - flow deploy create with tag-tracker sort-by versioning-style
    tags:
        - docker
```