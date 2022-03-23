---
id: github-actions
title: Github Actions
sidebar_label: Github Actions
---

<div style={{textAlign: 'center'}}>

![img](../../static/img/github-actions.png)

</div>

:::note
First time using Github Actions? Please refer to the [following documentation](https://docs.github.com/en/actions).  
:::

## Introduction

This integration uses the [CLI](../cli/installation) for all communication with Conviso Platform.  
By the end of this tutorial you will know how to:
- Run a SAST scan
- Run a SCA scan
- Send diff code to Flow's Codereview Security module.

## Requirements
- A Github account
- All runners hosted by Github are compatible, but if you are using *self-hosted* runners they need to have **Docker** installed in order to work.
- **CONVISO_API_KEY**: This is the API key to communicate with Conviso Platform
- **CONVISO_PROJECT_CODE**: This is the ID of the application in Conviso Platform
- When using Github Enterprise Server it need to be run version 3.0 or later

## Creating your pipeline
If you don't have a pipeline configured, you need to access **Actions** tab in your repository. It will show a variety of different compatibles options for your project.  
For this integration choose **set up a workflow yourself**. You will be redirected to a text editor page ```.github/workflows/main.yml``` where you are going to configure it using the following information in this tutorial.

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
       CONVISO_API_KEY:  ${{secrets.CONVISO_API_KEY}}
       CONVISO_PROJECT_CODE: "<project code>"
   steps:
   - uses: actions/checkout@v2

   - name: Run SAST
     run: conviso sast run
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
       CONVISO_API_KEY:  ${{secrets.CONVISO_API_KEY}}
       CONVISO_PROJECT_CODE: "<project code>"
   steps:
   - uses: actions/checkout@v2

   - name: Run SCA
     run: conviso sca run
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
       CONVISO_API_KEY:  ${{secrets.CONVISO_API_KEY}}
       CONVISO_PROJECT_CODE: "<project code>"
   steps:
    - uses: actions/checkout@v2

    - name: codereview
      #Please use only one of the following approaches in the same job

      #Using Tags, ordered by time
      run: conviso deploy create with tag-tracker sort-by time
      #Using Tags, ordered by versioning style (semantic version)
      run: conviso deploy create with tag-tracker sort-by versioning-style
      #Without using Tags, ordered by Git tree
      run: conviso deploy create with values
```