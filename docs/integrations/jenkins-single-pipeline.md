---
id: jenkins-single-pipeline
title: Jenkins Single Pipeline for Multiple Repositories using Webhooks
sidebar_label: Jenkins Single Pipeline for Multiple Repositories using Webhooks
---

<div style={{textAlign: 'center'}}>

![img](../../static/img/jenkins.png)

</div>

:::note
First time using Jenkins? Please refer to the [following documentation](https://www.jenkins.io/doc/book/).  
:::

## Introduction

This integration addresses a single pipeline creation that serves multiple repositories. It is essential that the SCM system and Jenkins are accessible to each other so the builds can occur automatically through the repository's webhooks, as well as Jenkins can request the code for the SCM through a clone.

## Requirements

1. **Generic Webhook Trigger** and **Docker** plugins installed at Jenkins;

2. A Personal Access Token from an automation user or an common user to SCM (Github, Gitlab, Bitbucket, etc.) and Jenkins, to provide Jenkins access to code repositories;

3. Docker is installed at the host and docker group access privileges to the Jenkins user;

4. Groovy Sandbox available at pipeline script;

5. A Personal Token stored at Jenkins as user-password Credential. The yuser must be the token owner and the password as the token itself;

6. A generic token to act as the Conviso pipeline identifier. It may be a Credential type or not. It wil be used at webhook's URL as a pipeline identifier ```/invoke?token=TOKEN_HERE```.

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
      image 'convisoappsec/flowcli:latest'
      args '-v /var/run/docker.sock:/var/run/docker.sock'
    }
  }

environment {
    CONVISO_API_KEY      = credentials('CONVISO_API_KEY')
    CONVISO_PROJECT_CODE = get_project_code(webhook_repository_git_http_url)
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
            --start-commit "$CONVISO_DEPLOY_PREVIOUS_VERSION_COMMIT" \
            --end-commit "$CONVISO_DEPLOY_CURRENT_VERSION_COMMIT"
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

The repository must have an AST (Application Security Testing) or CCR (Continuous Code Review) Project. The Project mapping must be inserted at the pipeline's initialization session. As an example, as the Project Key from a particular Project is ```deadbeef1234``` and the repository is ```https://github.com/convisoappsec/raptor```, then the file´s initial session will be as shown below:

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

where TOKEN is the token created at step 6 of the **Requirements** section above.