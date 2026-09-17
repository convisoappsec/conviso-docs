---
id: jenkins-single-pipeline
title: Jenkins Single Pipeline Integration
sidebar_label: Jenkins Single Pipeline for Multiple Repositories using Webhooks
description:  Integration with the Conviso Platform addresses the creation of a single pipeline that serves multiple repositories, find out how to do it.
keywords: [Jenkins Single Pipeline]
---

<div style={{textAlign: 'center'}}>

![img](../../static/img/jenkins.png 'Azure Pipelines page for “create a new pipeline"')

</div>

:::note
First time using Jenkins? Please refer to the [following documentation](https://www.jenkins.io/doc/book/).  
:::

## Introduction

This integration addresses a single pipeline creation that serves multiple repositories. It is essential that the SCM system and Jenkins are accessible to each other, so the builds can occur automatically through the repository's webhooks, as well as Jenkins can request the code for the SCM through a clone.

[Explore our Integration page to learn more and supercharge your Application Security Program with Conviso Platform.](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

## Requirements

1. **Generic Webhook Trigger** and **Docker** plugins installed at Jenkins;

2. A Personal Access Token from an automation user or a common user to SCM (GitHub, GitLab, Bitbucket, etc.) and Jenkins, to provide Jenkins access to code repositories;

3. Docker is installed at the host and docker group access privileges to the Jenkins user;

4. Groovy Sandbox available at pipeline script;

5. A Personal Token stored at Jenkins as user-password Credential. The user must be the token owner and the password as the token itself;

6. A generic token to act as the Conviso pipeline identifier. It may be a Credential type or not. It will be used at webhook's URL as a pipeline identifier ```/invoke?token=TOKEN_HERE```.

## Pipeline Setup

1. At Jenkins' main menu, create a new job;

2. Label the Job as you wish and select the **Pipeline** type;

3. At the **Build Triggers** section, create a Generic Webhook Trigger;

4. Create a **Post Content Parameter** labeled as **Webhook**, with the expression **$** and **JSONPATH** type;

5. At **Token**, Use the Token value obtained at step 6 of the preceding section **Requirements**;

6. **Cause** will be the message shown when the job is started. For example, **Conviso Job Pipeline started for repo: ```$webhook_repository_git_http_url``` Start Commit: ```$webhook_before```. End Commit: ```$webhook_after```**

7. (Optional) When checking the **Print Post Content** option, Jenkins will exhibit the webhook received content;

8. (Optional) When checking the **Print Contributed Variables** option, Jenkins will exhibit the resolved variables available to use at the pipeline.

## Jenkinsfile Pipeline Script

```yml
pipeline {

  agent {
    docker {
      image 'convisoappsec/convisoast:latest'
      args '-v /var/run/docker.sock:/var/run/docker.sock'
    }
  }

environment {
    CONVISO_API_KEY = credentials('CONVISO_API_KEY')
    // The commit the webhook reports as the previous one: only what changed
    // since it is scanned.
    BASELINE_COMMIT = "$webhook_before"
}

  stages {
    stage('AppSec_Flow') {
      steps {
        git credentialsId: '<credential_personal_access_token_name>', url: "$webhook_repository_git_http_url"
        sh 'conviso sast run'
      }
    }
  }
  post { 
        always {
            cleanWs()
        }
    }

}
```

## Associating Repositories to Assets

Nothing has to be mapped. The scan reads the remote of the repository it just cloned, matches it against the assets of your company, and creates one when there is no match — so a webhook from a new repository works without touching the pipeline.

Pin the asset explicitly only when the automatic lookup is not what you want, by exporting `CONVISO_ASSET_ID` in the `environment` block:

```yml
def get_asset_id(repo_url){
    asset_ids = [
        "https://github.com/convisoappsec/raptor": '1234',
        "another_repo": '5678'
    ]
    return asset_ids[repo_url]
}
```

```yml
environment {
    CONVISO_API_KEY  = credentials('CONVISO_API_KEY')
    CONVISO_ASSET_ID = get_asset_id(webhook_repository_git_http_url) ?: ''
}
```

## Creating a Webhook at the Repository

The webhook creation at the repository varies from platform to platform. However, by default it is called in push events, filtering to a specific branch (develop, staging) with the URL set as follows:

```yml
{JENKINS_URL}/generic-webhook-trigger/invoke?token=TOKEN
```

Where TOKEN is the token created at step 6 of the **Requirements** section above.

[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)