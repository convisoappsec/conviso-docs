---
id: jenkins
title: Jenkins
sidebar_label: Jenkins
---

![img](../../static/img/jenkins.png)

:::note
First time using Github Actions? Please refer to the following tutorial.  
:::

## Introduction

This integration uses the [CLI](../cli/installation) as a docker image for all the execution and communication with Flow.  
By the end of this tutorial you will know how to:
- Run a SAST scan
- Run a SCA scan
- Send diff code to Flow's security Codereview module.

## Requirements


### 
## SAST
The following code snippet will trigger a SAST scan and send the results to Flow.

```yml
name: CI
on:
 push:
   branches: [ master ]
 pull_request:
   branches: [ master ]

jobs:
 conviso-sast:
   runs-on: ubuntu-latest
   container:
     image: convisoappsec/flowcli
     env:
       FLOW_API_KEY:  ${{secrets.FLOW_API_KEY}}
       FLOW_PROJECT_CODE: "<project code>"
   steps:
   - uses: actions/checkout@v2

   - name: Run SAST
     run: flow sast run
```

## SCA
The following code snippet will trigger a SCA scan and send the results to Flow.

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
     image: convisoappsec/flowcli
     env:
       FLOW_API_KEY:  ${{secrets.FLOW_API_KEY}}
       FLOW_PROJECT_CODE: "<project code>"
   steps:
   - uses: actions/checkout@v2

   - name: Run SCA
     run: flow sca run
```

## Continuous Codereview 
The following code snippet will send diff code to Flow's security Codereview module so you can 
perform a continuous codereview assessment.
There are three approaches depending on how you work with your project. In a nutshell:
- Using Tags, ordered by time
- Using Tags, ordered by versioning style (semantic version)
- Without using Tags, ordered by Git tree

```yml
name: CI
on:
 push:
   branches: [ master ]
 pull_request:
   branches: [ master ]

jobs:
 conviso-cr:
   runs-on: ubuntu-latest
   container:
     image: convisoappsec/flowcli
     env:
       FLOW_API_KEY:  ${{secrets.FLOW_API_KEY}}
       FLOW_PROJECT_CODE: "<project code>"
   steps:
    - uses: actions/checkout@v2

    - name: codereview
      #Please use only one of the following approaches in the same job

      #Using Tags, ordered by time
      run: flow deploy create with tag-tracker sort-by time
      #Using Tags, ordered by versioning style (semantic version)
      run: flow deploy create with tag-tracker sort-by versioning-style
      #Without using Tags, ordered by Git tree
      run: flow deploy create with values
```