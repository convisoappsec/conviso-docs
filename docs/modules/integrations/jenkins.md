---
id: jenkins
title: Jenkins Integration
sidebar_label: Jenkins
description: Learn how to integrate Jenkins with the Conviso Platform, centralizing all information in a single place.
keywords:  [Jenkins Integration]
---

<div style={{textAlign: 'center'}}>

![img](../../../static/img/jenkins.png)

</div>

## Introduction 


With Conviso Platform integrated into your Jenkins CI/CD Pipeline, you can automate your security processes, ensuring that your applications undergo through automated security assessments in new versions of your code.

You can run Conviso Platform **AST (Application Security Testing)**. This product offers **Static Application Security Testing (SAST)**, **Software Composition Analysis (SCA)**, Infrastructure as Code (IaC) and enables **Continuous Code Review** performed by our Security Analysts directly on your Jenkins pipeline.

:::note
First time using Jenkins? Please refer to the [following documentation](https://www.jenkins.io/doc/book/).  
:::

## Introduction

This integration uses the [CLI](../../tools/conviso-cli/installation) as a docker image for all the execution and communication with Conviso Platform.  
By the end of this tutorial you will know how to:

- Run an SAST scan
- Run an SCA scan
- Send diff code to Conviso Platform security code review module.

## Requirements
In order to integrate with Jenkins, ensure that your environment meets the following prerequisites:

1. Jenkins version 2.222.3 or above.
2. Docker must be installed.
3. The Jenkins user must have access to the Docker daemon.
4. External access is required, though it can be restricted to specific Conviso addresses.


If you encounter any challenges during Docker installation, comprehensive guidance can be found in the links provided below: 


[Install Docker](https://docs.docker.com/engine/install/ubuntu/#install-using-the-convenience-script)
[Post-Install Linux Steps](https://docs.docker.com/engine/install/linux-postinstall/)



### Usage

The following steps outline the necessary content your Jenkinsfile should include to execute our actions. These stages can seamlessly integrate into your existing Jenkinsfile.



## Conviso AST

You can run Conviso Platform **AST (Application Security Testing)**. This product offers **Static Application Security Testing (SAST)**, **Software Composition Analysis (SCA)**, Infrastructure as Code (IaC) and enables **Continuous Code Review** performed by our Security Analysts directly on your Jenkins pipeline.

```yml
pipeline {
  agent none
  stages {
    stage('Conviso_CodeReview') {
      agent {
        docker {
          image 'convisoappsec/convisocli:latest'
          args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
      }     
      environment {
        CONVISO_API_KEY      = credentials('SUP-CONVISO-API-KEY-HOMOLOGA')
        CONVISO_API_URL = "https://app.convisoappsec.com/"
     }
      steps {
        git url: 'https://github.com/convisoappsec/DVWA.git'


        sh '''
          conviso ast run
        '''
      }//steps
    }//stage
  }//stages
}//pipeline
```

[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)