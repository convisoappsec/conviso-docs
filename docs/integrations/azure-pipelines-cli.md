---
id: azure-pipelines-cli
title:  Azure Pipelines Integration
description:  Seamlessly integrate the Conviso Platform into your Azure DevOps Pipelines to automate your processes.security processes. Discover!
keywords:  [Azure Pipelines Integration]
image: '/static/img/azurepipelinesseo.png'
---

<div style={{textAlign: 'center'}}>

[![img](../../static/img/azure-pipelines.png 'Azure Pipelines')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>



## Introduction


With Conviso Platform integrated into your [Azure DevOps Pipelines](https://dev.azure.com/) CI/CD Pipeline, you can automate your security processes, ensuring that your applications undergo through automated security assessments in new versions of your code.

You can run Conviso Platform **AST (Application Security Testing)**. This product offers **Static Application Security Testing (SAST)**, **Software Composition Analysis (SCA)**, Infrastructure as Code (IaC) and enables **Continuous Code Review** performed by our Security Analysts directly on your Gitlab pipeline.


This integration uses the **CLI as a Docker** image for executing tasks and establishing connections with the Conviso Platform.


[Explore our Integration page to learn more and supercharge your Application Security Program with Conviso Platform.](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)


## Prerequisites


Before using Conviso Platform with Azure Pipelines, ensure the following prerequisites are met:


1. Obtain Your Conviso API Key: This key uniquely identifies you to the Conviso Platform. To find or generate your API Key, follow the instructions in [ this tutorial](https://docs.convisoappsec.com/api/generate-apikey).


2. [Create a New Pipeline in Azure](https://learn.microsoft.com/en-us/azure/devops/pipelines/create-first-pipeline?view=azure-devops#:~:text=Go%20to%20the%20Pipelines%20tab,start%20with%20an%20Empty%20job.). Set up a new pipeline to run the automation. Here's how to do it:
* Click on "**Pipelines**" in the left-hand menu.
* Click on "**New Pipeline**" and follow the setup process suitable for your project.
This process will lead you to your pipeline's ```YAML document```.


<div style={{textAlign: 'center'}}>


[![img](../../static/img/azure-pipelines1.png) 'Azure Pipelines page for “create a new pipeline')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)
</div>


3. Set an environment variable for the runner: ```CONVISO_API_KEY```. Set API-KEY as an environment variable in the pipeline:
* Go to the **Pipelines** page, select the relevant pipeline, and click "**Edit**."
* Locate the **Variables** section for that pipeline.
* Add or update the variable, optionally marking it as secret.
* **Save** the pipeline changes.


<div style={{textAlign: 'center'}}>


[![img](../../static/img/azure-pipelines2.png) 'Azure Pipelines page for "review your yaml pipeline"')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)
</div>


## Usage
By the end of this tutorial, you will know how to:
* [Perform a Conviso AST scan to analyze your application's security](#perform-a-conviso-ast-scan-to-analyze-your-applications-security​)
* [Run a scan exclusively using Conviso SAST](#run-a-scan-exclusively-using-conviso-sast​)
* [Run a scan exclusively using Conviso SCA](#run-a-scan-exclusively-using-conviso-sca​)
* [How to Send Your Code to Conviso Platform for Code Review](#how-to-send-your-code-to-conviso-platform-for-code-review​)
* [How to Use Code Review, SAST and SCA Together](#getting-everything-together-code-review--sast--sca-deployment)


[Learn more about Conviso Platform integrations!](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)


## Perform a Conviso AST scan to analyze your application's security
Follow the script below to integrate Security Code Review seamlessly into your pipeline, creating a comprehensive solution within your ```azure-pipelines.yml``` file:


```yml
trigger:
 - master 
jobs:
- job: Conviso_Appsec_AST
 pool:
   vmImage: 'Ubuntu 22.04'
 container:
   image: 'convisoappsec/convisocli'


 steps:
   - bash: |
         conviso ast run
     env:
        CONVISO_API_KEY: $(CONVISO_API_KEY)
```


**Note:** You also need your API Key, which [you can find using this tutorial](https://docs.convisoappsec.com/api/generate-apikey).


The identified vulnerabilities will be automatically sent to your asset on Conviso Platform. Now you can use the [Vulnerabilities Management](https://docs.convisoappsec.com/general/vulnerabilities_management) feature on the Conviso Platform to effectively address and rectify these vulnerabilities, following a structured correction flow.


## How to Send Your Code to Conviso Platform for Code Review
The Code Review process involves Conviso experts providing feedback on your code. To facilitate this, you can easily send your code from Azure Pipelines to the Conviso Platform. The platform is capable of tracking code changes using various methods such as time tags, versioning tags, or the Git tree structure.


### Using Tags ordered by time
When using this method, tags are utilized to denote different versions of your code. The Conviso Platform sorts and identifies changes based on the timestamps of these tags. 

```

trigger:
 - master 
jobs:
- job: Conviso_Appsec_Deploy_Tags_Time
 pool:
   vmImage: 'Ubuntu 22.04'
 container:
   image: 'convisoappsec/convisocli'


 steps:
   - bash: |
         conviso deploy create with tag-tracker sort-by time   
     env:
        CONVISO_API_KEY: $(CONVISO_API_KEY)
```


## Using Tags ordered by versioning style

When employing tags ordered by time for code review in the Conviso Platform, a conventional numerical versioning system can be utilized. This system typically involves tags such as '1.0', '1.1', '2.0', etc., to represent different stages or iterations of your codebase.


For instance, each tag (like '1.0', '1.1') represents a specific version of your code. The Conviso Platform will use these tags to determine the chronological order of changes, allowing for a structured and organized review process:


'1.0' could represent the initial release version.
'1.1' might indicate a minor update or fix.
'2.0' could signify a major update or a new version of the software.
By adhering to this versioning structure, the Conviso Platform can efficiently track and review the progression of your code, ensuring a thorough and effective code review process


```yml
trigger:
 - master 
jobs:
- job: Conviso_Appsec_Deploy_Tags_version_style
 pool:
   vmImage: 'Ubuntu 22.04'
 container:
   image: 'convisoappsec/convisocli'


 steps:
   - bash: |
         conviso deploy create with tag-tracker sort-by versioning-style   
     env:
        CONVISO_API_KEY: $(CONVISO_API_KEY)


```


## Without using Tags, ordered by Git tree

In this approach, the use of tags is not required for code review submissions to the Conviso Platform. Instead, the platform leverages the Git tree structure to identify and analyze changes in your code. This method is particularly useful when you prefer a continuous integration workflow or when tag management does not suit your development process.


```yml
trigger:
 - master 
jobs:
- job: Conviso_Appsec_Deploy_Git_tree
 pool:
   vmImage: 'Ubuntu 22.04'
 container:
   image: 'convisoappsec/convisocli'


 steps:
   - bash: |
         conviso deploy create with values   
     env:
        CONVISO_API_KEY: $(CONVISO_API_KEY)
```


If you want to learn more about these ways of sending your code, [read this](https://docs.convisoappsec.com/guides/code-review-strategies) guide on Code Review Deploy Strategies.


## Troubleshooting
If you encounter authentication issues after loading the ```CONVISO_API_KEY``` variable, please ensure it has been properly loaded within the environment session of all tasks utilizing the CLI.


Error. ‘credentials’ cannot be null.


To address this error, add the following lines to the configuration.


```
steps:
- checkout: self
 persistCredentials: true
```


You have access to multiple companies, specify one using CONVISO_COMPANY_ID


To view the company ID, click on the company logo icon, as exemplified in the image.

![img](../../static/img/company_id.png)


Example
```
   - export CONVISO_COMPANY_ID=0000
   - conviso ast run
```


## Support
If you have any questions or need help using our product, please don't hesitate to contact our support team.


## Resources
By exploring our content, you'll find resources to help you to understand the benefits of the Conviso Platform integrations for Secure CI/CD Pipeline:


[AppSec: Integrations with CI/CD tools through Conviso Platform](https://bit.ly/3ODN0jw): Follow this article to understand how we can integrate your main tools within a single platform.


[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)



Before using Conviso Platform with Azure Pipelines, you must ensure that:

1. You have your Conviso API Key, a code that identifies you to Conviso Platform. Find yours [using this tutorial](https://docs.convisoappsec.com/api/generate-apikey).

2. A [new pipeline is created to run the automation](https://learn.microsoft.com/en-us/azure/devops/pipelines/create-first-pipeline?view=azure-devops#:~:text=Go%20to%20the%20Pipelines%20tab,start%20with%20an%20Empty%20job.). Follow these steps:
* Click on "**Pipelines**" in the left-hand menu.
* Click "**New Pipeline**" and configure it based on your project type.
* You will arrive at your pipeline's ```YAML document```.

<div style={{textAlign: 'center'}}>

[![img](../../static/img/azure-pipelines1.png) 'Azure Pipelines page for “create a new pipeline')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)
</div>

3. Set two environment variables for the runner: ```FLOW_API_KEY``` and ```FLOW_PROJECT_CODE```. These codes specify the project and account on the Conviso Platform. To set a variable for a build pipeline:
* Go to the **Pipelines** page, select the relevant pipeline, and click "**Edit**."
* Locate the **Variables** section for that pipeline.
* Add or update the variable, optionally marking it as secret.
* **Save** the pipeline changes.

<div style={{textAlign: 'center'}}>

[![img](../../static/img/azure-pipelines2.png) 'Azure Pipelines page for "review your yaml pipeline"')](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)
</div>

## Usage
By the end of this tutorial, you will know how to:
* [Perform a Conviso AST scan to analyze your application's security](#perform-a-conviso-ast-scan-to-analyze-your-applications-security​)
* [Run a scan exclusively using Conviso SAST](#run-a-scan-exclusively-using-conviso-sast​)
* [Run a scan exclusively using Conviso SCA](#run-a-scan-exclusively-using-conviso-sca​)
* [How to Send Your Code to Conviso Platform for Code Review](#how-to-send-your-code-to-conviso-platform-for-code-review​)
* [How to Use Code Review, SAST and SCA Together](#getting-everything-together-code-review--sast--sca-deployment)

[Learn more about Conviso Platform integrations!](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

## Perform a Conviso AST scan to analyze your application's security
Empower your security analysis with Application Security Testing (AST) by directly incorporating the Conviso AST scan into your pipeline. This versatile tool offers SAST, SCA, and Code Review capabilities, all integrated within your pipeline.

Follow the script below to integrate Security Code Review seamlessly into your pipeline, creating a comprehensive solution within your ```azure-pipelines.yml``` file:

```yml
trigger:
  - master  
jobs:
- job: Conviso_Appsec_AST
  pool:
    vmImage: 'Ubuntu 22.04'
  container:
    image: 'convisoappsec/convisocli'
  variables:
    FLOW_PROJECT_CODE: '<Project Key>'

  steps:
    - bash: |
          conviso ast run
      env:
         FLOW_API_KEY: $(FLOW_API_KEY)
```

**Note:** To scan your repository with AST, you must have a registered project on the Conviso Platform. The Project Code is found on the specific project page. You also need your API Key, which [you can find using this tutorial](https://docs.convisoappsec.com/api/generate-apikey).

The identified vulnerabilities will be automatically sent to your Project on Conviso Platform. Now you can use the [Vulnerabilities Management](https://docs.convisoappsec.com/general/vulnerabilities_management) resource to work on the correction flow.

For manual specification of the diff range, you can refer to the provided example in the document.

```yml
trigger:
  - master  
jobs:
- job: Conviso_Appsec_Custom_Sast
  pool:
    vmImage: 'Ubuntu 22.04'
  container:
    image: 'convisoappsec/convisocli'
  variables:
    FLOW_PROJECT_CODE: '<Project Key>'

  steps:
    - bash:
          conviso ast run --start_commit `git rev-parse @~1` --end-commit $GIT_COMMIT
      env:
         FLOW_API_KEY: $(FLOW_API_KEY)
         GIT_COMMIT: $(Build.SourceVersion)
```

## Run a scan exclusively using Conviso SAST
Execute Static Application Security Testing (SAST) using the script below in your azure-pipelines.yml:

```yml
trigger:
  - master  
jobs:
- job: Conviso_Appsec_Sast
  pool:
    vmImage: 'Ubuntu 22.04'
  container:
    image: 'convisoappsec/convisocli'
  variables:
    FLOW_PROJECT_CODE: '<Project Key>'

  steps:
    - bash: |
          conviso sast run
      env:
         FLOW_API_KEY: $(FLOW_API_KEY)
```

## Run a scan exclusively using Conviso SCA
To perform Software Composition Analysis (SCA), utilize the following script in your azure-pipelines.yml:

```yml
trigger:
  - master  
jobs:
- job: Conviso_Appsec_Sca
  pool:
    vmImage: 'Ubuntu 22.04'
  container:
    image: 'convisoappsec/convisocli'
  variables:
    FLOW_PROJECT_CODE: '<Project Key>'

  steps:
    - bash: 
         conviso sca run
      env:
         FLOW_API_KEY: $(FLOW_API_KEY)
```


## How to Send Your Code to Conviso Platform for Code Review
The Code Review process involves Conviso experts providing feedback on your code. You can send your code from Azure Pipelines to the Conviso Platform for Code Review using the script below. Conviso Platform can track code changes using time tags, versioning tags, or the Git tree.

### Using Tags ordered by time
This way, you use tags to mark different versions of your code. Conviso Platform will use the tags to find the changes in your code. It will use the time of the tags to sort them.

```yml
trigger:
  - master  
jobs:
- job: Conviso_Appsec_Deploy_Tags_Time
  pool:
    vmImage: 'Ubuntu 22.04'
  container:
    image: 'convisoappsec/convisocli'
  variables:
    FLOW_PROJECT_CODE: '<Project Key>'

  steps:
    - bash: |
          conviso deploy create with tag-tracker sort-by time    
      env:
         FLOW_API_KEY: $(FLOW_API_KEY)
```

## Using Tags ordered by versioning style
For example, it will use numbers like 1.0, 1.1, 2.0, etc.

```yml
trigger:
  - master  
jobs:
- job: Conviso_Appsec_Deploy_Tags_version_style
  pool:
    vmImage: 'Ubuntu 22.04'
  container:
    image: 'convisoappsec/convisocli'
  variables:
    FLOW_PROJECT_CODE: '<Project Key>'

  steps:
    - bash: |
          conviso deploy create with tag-tracker sort-by versioning-style    
      env:
         FLOW_API_KEY: $(FLOW_API_KEY)

```

## Without using Tags, ordered by Git tree
This way, you don’t use tags at all. Conviso Platform will use the Git tree to find the changes in your code.

```yml
trigger:
  - master  
jobs:
- job: Conviso_Appsec_Deploy_Git_tree
  pool:
    vmImage: 'Ubuntu 22.04'
  container:
    image: 'convisoappsec/convisocli'
  variables:
    FLOW_PROJECT_CODE: '<Project Key>'

  steps:
    - bash: |
          conviso deploy create with values    
      env:
         FLOW_API_KEY: $(FLOW_API_KEY)
```

If you want to learn more about these ways of sending your code, [read this](https://docs.convisoappsec.com/guides/code-review-strategies) guide on Code Review Deploy Strategies.

## Troubleshooting
If you encounter authentication issues after loading the ```FLOW_API_KEY``` variable, please ensure it has been properly loaded within the environment session of all tasks utilizing the CLI.

## Support
If you have any questions or need help using our product, please don't hesitate to contact our support team.

## Resources
By exploring our content, you'll find resources to help you to understand the benefits of the Conviso Platform integrations for Secure CI/CD Pipeline:

[AppSec: Integrations with CI/CD tools through Conviso Platform](https://bit.ly/3ODN0jw): Follow this article to understand how we can integrate your main tools within a single platform.

[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)