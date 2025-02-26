---
id: jenkins
title: Jenkins Integration
sidebar_label: Jenkins
description: Learn how to integrate Jenkins with the Conviso Platform, centralizing all information in a single place.
keywords:  [Jenkins Integration]
---

<div style={{textAlign: 'center'}}>

![img](../../static/img/jenkins.png)

</div>

:::note
First time using Jenkins? Please refer to the [following documentation](https://www.jenkins.io/doc/book/).  
:::

## Introduction

This integration uses the [CLI](../cli/installation) as a docker image for all the execution and communication with Conviso Platform.  
By the end of this tutorial you will know how to:
- Run an AST scan
- Run an SAST scan
- Run an SCA scan

## Requirements
In order to integrate with Jenkins, your environment should fulfill the followings requirements:
1. Jenkins version 2.222.3 or higher;
1. Docker installed;
1. Jenkins user must have access to the Docker daemon;
1. External access (can be restricted to specific Conviso addresses);

If you need help about docker installation you can read all the process in the links below:

[Install Docker](https://docs.docker.com/engine/install/ubuntu/#install-using-the-convenience-script)
[Post-Install Linux Steps](https://docs.docker.com/engine/install/linux-postinstall/)



### Usage

The steps below will show what does your Jenkinsfile should have to perform our actions.
These stages also can be inserted inside your current Jenkinsfile.

## AST
The following code snippet will trigger an AST scan and send the results to Conviso Platform.

```yml
pipeline {

  agent {
    docker {
      image 'convisoappsec/convisocli:latest'
      args '-v /var/run/docker.sock:/var/run/docker.sock'
    }
  }

  environment {
    CONVISO_API_KEY      = credentials('CONVISO_API_KEY')
  }

  stages {
    stage('Conviso_AST') {
      steps {
        sh 'conviso ast run --vulnerability-auto-close'
      }
    }
  }
}
```

## SAST
The following code snippet will trigger a SAST scan and send the results to Conviso Platform.

```yml
pipeline {

  agent {
    docker {
      image 'convisoappsec/convisocli:latest'
      args '-v /var/run/docker.sock:/var/run/docker.sock'
    }
  }

  environment {
    CONVISO_API_KEY      = credentials('CONVISO_API_KEY')
  }

  stages {
    stage('Conviso_SAST') {
      steps {
        sh 'conviso sast run'
      }
    }
  }
}
```

## SCA

The following code snippet will trigger an SCA scan and send the results to Conviso Platform:

```yml
pipeline {

  agent {
    docker {
      image 'convisoappsec/convisocli:latest'
      args '-v /var/run/docker.sock:/var/run/docker.sock'
    }
  }

  environment {
    CONVISO_API_KEY      = credentials('CONVISO_API_KEY')
  }

  stages {
    stage('Conviso_SCA') {
      steps {
        sh 'conviso sca run'
      }
    }
  }
}
```

[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)