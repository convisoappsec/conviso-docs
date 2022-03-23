---
id: jenkins
title: Jenkins
sidebar_label: Jenkins
---

<div style={{textAlign: 'center'}}>

![img](../../static/img/jenkins.png)

</div>

:::note
First time using Jenkins? Please refer to the [following documentation](https://www.jenkins.io/doc/book/).  
:::

## Introduction

This integration uses the [CLI](../cli/installation) as a docker image for all the execution and communication with Flow.  
By the end of this tutorial you will know how to:
- Run a SAST scan
- Run a SCA scan
- Send diff code to Flow's security Codereview module.

## Requirements
In order to integrate with Jenkins, your environment should fullfills the followings requirements:
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
## SAST
The following code snippet will trigger a SAST scan and send the results to Flow.

```yml
pipeline {

  agent {
    docker {
      image 'convisoappsec/flowcli:latest'
      args '-v /var/run/docker.sock:/var/run/docker.sock'
    }
  }

  environment {
    CONVISO_API_KEY      = credentials('CONVISO_API_KEY')
    CONVISO_PROJECT_CODE = "Please, insert your project code here"
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

The following code snippet will trigger a SCA scan and send the results to Conviso Platform:

```yml
pipeline {

  agent {
    docker {
      image 'convisoappsec/flowcli:latest'
      args '-v /var/run/docker.sock:/var/run/docker.sock'
    }
  }

  environment {
    CONVISO_API_KEY      = credentials('CONVISO_API_KEY')
    CONVISO_PROJECT_CODE = "Please, insert your project code here"
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

## Continuous Codereview 
The following code snippet will send diff code to Flow's security Codereview module so you can 
perform a continuous codereview assessment.
There are three approaches depending on how you work with your project. In a nutshell:
- Using Tags, ordered by time
- Using Tags, ordered by versioning style (semantic version)
- Without using Tags, ordered by Git tree

```yml
pipeline {
  agent {
    docker {
      image 'convisoappsec/flowcli:latest'
      args '-v /var/run/docker.sock:/var/run/docker.sock'
    }
  }

  environment {
    CONVISO_API_KEY      = credentials('CONVISO_API_KEY')
    CONVISO_PROJECT_CODE = "Please, insert your project code here"
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

## Getting Everything Together: Code Review + SAST + SCA Deployment

The SAST analysis can be complementary to the code review carried out by the professional at Conviso, even serving as input for the analyst. The job below will perform the deploy for code review of the code and will use the same diff identifiers to perform the SAST analysis, forming a complete solution in the pipeline. An example of a complete pipeline with both solutions can be seen in the snippet below: 

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
        CONVISO_API_KEY      = credentials('SUP-FLOW-API-KEY-HOMOLOGA')
        CONVISO_PROJECT_CODE = "****************"
        CONVISO_API_URL = "https://app.convisoappsec.com/"
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
	        --start-commit "$CONVISO_DEPLOY_PREVIOUS_VERSION_COMMIT" \
            --end-commit "$CONVISO_DEPLOY_CURRENT_VERSION_COMMIT"
        '''
        sh '''
          conviso sca run
        '''
      }//steps
    }//stage
  }//stages
}//pipeline
```