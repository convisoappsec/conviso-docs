---
id: jenkins-single-pipeline
title: Jenkins Single Pipeline
sidebar_label: Jenkins Single Pipeline for Multiple Repositories using Webhooks
description:  Integration with the Conviso Platform addresses the creation of a single pipeline that serves multiple repositories, find out how to do it.
keywords: [Jenkins Single Pipeline]
---

<div style={{textAlign: 'center'}}>

[![img](../../static/img/jenkins.png 'Azure Pipelines page for “create a new pipeline')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)
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
// Here you should map http_git_url with the Conviso project code
def get_project_code(repo_url){
    project_codes = [
        "<url_to_git_repo>": '<project_code>',
    ]
    return project_codes[repo_url]
}

pipeline {

  agent {
    docker {
      image 'convisoappsec/convisocli:latest'
      args '-v /var/run/docker.sock:/var/run/docker.sock'
    }
  }

environment {
    FLOW_API_KEY      = credentials('FLOW_API_KEY')
    FLOW_PROJECT_CODE = get_project_code(webhook_repository_git_http_url)
    PREVIOUS_COMMIT = "$webhook_before"
    CURRENT_COMMIT = "$webhook_after"
}

  stages {
    stage('AppSec_Flow') {
      steps {
        git credentialsId: '<credential_personal_access_token_name>', url: "$webhook_repository_git_http_url"
        sh 'conviso deploy create -f env_vars with values -p $PREVIOUS_COMMIT -c $CURRENT_COMMIT > created_deploy_vars'
        sh '''
            . ./created_deploy_vars
            conviso sast run \
            --start-commit "$FLOW_DEPLOY_PREVIOUS_VERSION_COMMIT" \
            --end-commit "$FLOW_DEPLOY_CURRENT_VERSION_COMMIT"
        '''
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

## Associating Conviso Projects to the Pipeline

The repository must have an AST (Application Security Testing) or CCR (Continuous Code Review) Project. The Project mapping must be inserted at the pipeline's initialization session. As an example, as the Project Key from a particular Project is ```deadbeef1234``` and the repository is ```https://github.com/convisoappsec/raptor```, then the file's initial session will be as shown below:

```yml
def get_project_code(repo_url){
    project_codes = [
        "https://github.com/convisoappsec/raptor": 'deadbeef1234',
    ]
    return project_codes[repo_url]
}
```

Thus, when receiving a webhook configured at the repository, the pipeline will be able to work at this repository. The ```get_project_code``` function may work with multiple repositories, as long as you respect the syntax of a Groovy function:

```yml
def get_project_code(repo_url){
    project_codes = [
        "https://github.com/convisoappsec/raptor": 'deadbeef1234',
        "another_repo": 'another_key',
        "third_repo": 'third_key'
    ]
    return project_codes[repo_url]
}
```

## Creating a Webhook at the Repository

The webhook creation at the repository varies from platform to platform. However, by default it is called in push events, filtering to a specific branch (develop, staging) with the URL set as follows:

```yml
{JENKINS_URL}/generic-webhook-trigger/invoke?token=TOKEN
```

Where TOKEN is the token created at step 6 of the **Requirements** section above.

[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)