---
id: jenkins
title: Jenkins
sidebar_label: Jenkins
---


## Introduction
With Conviso Platform integrated into your Jenkins pipeline, you can automate and streamline your security processes, ensuring that your applications undergo thorough security assessments throughout the development lifecycle. 

You can run the Conviso Platform **AST (Application Security Testing)**. The tool offers both **Static Application Security Testing (SAST)** and **Software Composition Analysis (SCA)** directly on your Jenkins pipeline.

The [CLI](https://docs.convisoappsec.com/cli/installation/) is a docker image in this integration for all execution and connection with the Conviso Platform. 

### Prerequisites
The following prerequisites are necessary:
- Jenkins version 2.222.3 or higher;
- Docker installed;
- Docker and Docker Pipeline plugins installed on Jenkins;
- Jenkins users must have access to Docker Daemon to be able to run Docker commands;
- External access (can be restricted to specific Conviso addresses);
- The variables in the pipeline should remain unchanged.

**Note:** If you need help with Docker installation, instructions can be found in the links below: [Install Docker](https://docs.docker.com/engine/install/ubuntu/#install-using-the-convenience-script) and [Post-Install Linux Steps](https://docs.docker.com/engine/install/ubuntu/#install-using-the-convenience-script).


## Usage
By the end of this tutorial, you will know how to:
- **Perform a Conviso AST scan to analyze your application's security**
- **Run a scan exclusively using Conviso SAST**
- **Run a scan exclusively using Conviso SCA**
- **Send difference code to Conviso Platform security Code Review module**

## Perform a Conviso AST scan to analyze your application's security
The steps below will show you what your Jenkinsfile must have to perform Application Security Testing (AST) with Security Code Review, forming a complete solution in the pipeline:


```yml
pipeline {
  agent none
  stages {
    stage('Conviso_CodeReview') {
      agent {
        docker {
          image 'convisoappsec/flowcli:latest'
          args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
      }     
      environment {
        FLOW_API_KEY      = credentials('SUP-FLOW-API-KEY-HOMOLOGA')
        FLOW_PROJECT_CODE = "****************"
        FLOW_API_URL = "https://app.convisoappsec.com/"
     }
      steps {
        git url: 'https://github.com/convisoappsec/DVWA.git'
        sh '''
          conviso deploy create \
	        -f env_vars with values > deploy_create_output_vars
        '''
​        sh '''
          . deploy_create_output_vars
          conviso sast run \
	        --start-commit "$FLOW_DEPLOY_PREVIOUS_VERSION_COMMIT" \
            --end-commit "$FLOW_DEPLOY_CURRENT_VERSION_COMMIT"
        '''
        sh '''
          conviso sca run
        '''
      }//steps
    }//stage
  }//stages
}//pipeline
```

**Note:** To scan your repository with AST, you need to have a project registered on Conviso Platform, the "Project Code" is found on the specific project page. You also need your API Key, which [you can find using this tutorial](../api/generate-apikey.md).

The identified vulnerabilities will be automatically sent to your Project on Conviso Platform. Now you can use the [Vulnerabilities Management](../general/vulnerabilities_management.md) resource to work on the correction flow.

## Run a scan exclusively using Conviso SAST
The steps below will show you what your Jenkinsfile must have to perform Static Application Security Testing (SAST):


```yml
pipeline {

  agent {
    docker {
      image 'convisoappsec/flowcli:latest'
      args '-v /var/run/docker.sock:/var/run/docker.sock'
    }
  }

  environment {
    FLOW_API_KEY      = credentials('FLOW_API_KEY')
    FLOW_PROJECT_CODE = "Please, insert your project code here"
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

The identified vulnerabilities will be automatically sent to your Project on Conviso Platform. 


## Run a scan exclusively using Conviso SCA
The steps below will show you what your Jenkinsfile must have to perform Software Composition Analysis (SCA):

```yml
pipeline {

  agent {
    docker {
      image 'convisoappsec/flowcli:latest'
      args '-v /var/run/docker.sock:/var/run/docker.sock'
    }
  }

  environment {
    FLOW_API_KEY      = credentials('FLOW_API_KEY')
    FLOW_PROJECT_CODE = "Please, insert your project code here"
  }

  stages {
    stage('Conviso_SAST') {
      steps {
        sh 'conviso sca run'
      }
    }
  }
}
```

Identified vulnerabilities related to your external packages will be automatically sent to your Project on Conviso Platform.

## Send difference code to Conviso Platform security Code Review module
The code below will send diff code to the Conviso Platform Security Code Review module, allowing you to perform a continuous code review assessment. 

Depending on how you work with your project, there are three approaches: 

- **Using Tags ordered by time.**
- **Using Tags ordered by versioning style (semantic version).**
- **Without using Tags, ordered by Git tree.**

```yml
pipeline {
  agent {
    docker {
      image 'convisoappsec/flowcli:latest'
      args '-v /var/run/docker.sock:/var/run/docker.sock'
    }
  }

  environment {
    FLOW_API_KEY      = credentials('FLOW_API_KEY')
    FLOW_PROJECT_CODE = "Please, insert your project code here"
  }

  stages {
    stage('Conviso_CodeReview') {
      steps {
      //Please use only one of the following approaches in the same job
      //Using Tags, ordered by time
      //  sh 'conviso deploy create with tag-tracker sort-by time'
      //Using Tags, ordered by versioning style (semantic version)
      //  sh 'conviso deploy create with tag-tracker sort-by versioning-style'
      //Without using Tags, ordered by Git tree
        sh 'conviso deploy create with values'
      }
    }
  }
}
```

Integrating Conviso Platform with Jenkins offers a powerful solution to enhance your application security. You can leverage the comprehensive security testing and code review capabilities of Conviso Platform directly within your Jenkins pipeline.

## Support
If you have any questions or need help using our product, please don't hesitate to contact our support team.

## Resources
By exploring our content, you'll find resources to help you to understand the benefits of the Conviso Platform integrations:

[AppSec: Integrations with CI/CD tools through Conviso Platform:](https://bit.ly/3ODN0jw) Follow this article to understand how we can integrate your main tools within a single platform.