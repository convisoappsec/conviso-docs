---
id: circleci
title: CircleCI Integration
sidebar_label: CircleCI

---
<div style={{textAlign: 'center'}}>

![img](../../../static/img/circleci.png)


</div>


:::note
First time using CircleCI? Please refer to the [following documentation](https://circleci.com/docs/). 
:::


## Introduction

With Conviso Platform integrated into your Bitbucket CI/CD Pipeline, you can automate your security processes, ensuring that your applications undergo through automated security assessments in new versions of your code.

You can run Conviso Platform **AST (Application Security Testing)**. This product offers **Static Application Security Testing (SAST)**, **Software Composition Analysis (SCA)**, Infrastructure as Code (IaC) and enables **Continuous Code Review** performed by our Security Analysts directly on your Circleci pipeline.

CircleCI is a CI/CD platform that has the purpose of bringing agility to the pipeline creation process. One of its main features is its extensibility, through the so-called Orbs it is possible to add custom jobs, commands and executors. Currently, the integration with Conviso's products takes advantage of CircleCI's native docker support, and runs through a docker image made available on [Dockerhub](https://hub.docker.com/r/convisoappsec/convisocli) with a CLI-like tool available on [PyPi](https://pypi.org/project/conviso-flowcli/).


## Requirements


- For Cloud Version: CircleCI natively supports the Cloud version of Conviso.
- For Enterprise Version: To ensure a complete experience with Conviso's services in the enterprise version, the following are required:
- A build environment with Docker.
External access, which may be restricted to Conviso, Dockerhub, and Conviso's registry.


## First Steps


It is important that Conviso jobs are set up correctly along with the rest of the workflow. If there is no pipeline yet, clicking on the **Setup project** button for your repository will open an editor for the creation of pipelines.


1. Configure VCS Access: Start by configuring your Version Control System (VCS) access policies in CircleCI. This ensures that CircleCI can interact with your code repositories.

2. Access Project Dashboard: Navigate to the Project Dashboard in CircleCI. Here, you will see a list of all repositories available for creating pipelines.

3. Check Existing Pipeline Descriptions: If your repository already contains a pipeline description, it can be found within the ```.circleci``` folder at the root of the repository, specifically in the config.yml file.

Ensure that Conviso jobs are appropriately configured within this file to align with the rest of your workflow.

**Create a New Pipeline:**


If your repository doesn't have an existing pipeline, click on the Setup project button corresponding to your repository.
This action will open an editor within CircleCI, allowing you to create and configure a new pipeline.
Platform Suggestions: CircleCI will offer suggestions for your pipeline setup based on the technologies detected in your project's code.


**Paste Pipeline Code Snippet:**


For setting up your first pipeline, you can begin by pasting the contents of a provided code snippet into the editor.
This snippet will include the necessary configurations to integrate Conviso into your pipeline, ensuring a smooth setup process.


The platform will bring suggestions based on the technologies present in your project's code. For this first pipeline, we can paste the contents of the code snippet below:


```yml
version: 2.1
workflows:
 main:
   jobs:
     - conviso-help


jobs:
conviso-help:
   docker:
     - image: "convisoappsec/convisocli"
   steps:
     - setup_remote_docker
     - checkout
     - run:
         command: conviso --help
         name: help
```
In this initial pipeline configuration in CircleCI, we are setting up just one job, named **conviso-help**. This job is designated to be the sole task in the **main** workflow of your pipeline.


You have two options to save your config.yml file in CircleCI:


Automatic Save by CircleCI:


CircleCI offers the convenience of saving this configuration file automatically.
Simply click on **Add Config** after setting up your pipeline in the CircleCI editor. CircleCI will save the config.yml file to an alternate branch in your repository.


**Manual Commit:**


If you prefer, you can manually commit the config.yml file to your repository.
This involves saving the file locally and then using standard Git commands to commit and push it to your repository, allowing you more control over the file’s placement and versioning.


## Variables Setup



Authentication between the Command-Line Interface (CLI) tool and the Conviso Platform is facilitated through an API key. To ensure this process is secure, it is highly recommended to use Pipeline **Variables**. 


Setting Up Pipeline Variables


Project-Level Variables: You can define these variables specifically for each project. This approach ensures that the API key is accessible only within the scope of the particular project where it's needed.


Context-Level Variables: Alternatively, variables can be set up at a context level. This method is useful when you have variables, such as an API key, that need to be shared across multiple projects within the same context.




### Project Variables Setup


When you want a variable to be restricted to the execution of pipelines in a specific project, follow these steps:


- Select Project: Go to the **Project Dashboard** menu and choose the project you wish to configure.
- **Access Project Settings:** In the upper right corner of the project page, click on **Project Settings**.
- Add Environment Variable: In the left menu, navigate to **Environment Variables**, then click on the **Add Environment Variable** button.

- **Configure the Variable:** Name the variable CONVISO_API_KEY and input the API key from your Conviso Platform profile.


### Context Variables Setup


- For variables that need to be accessible across multiple projects within the same context:
- Go to Organization Settings: Select Contexts in the Organization Settings menu.
- Choose or Create Context: Pick an existing context or create a new one by clicking on New Context.
- Add Environment Variable: Once in the desired context, click on Add Environment Variable.
- To ensure that the jobs in your pipeline load the created context:


Workflow Configuration: In your CI/CD configuration file, under the workflows section, configure the jobs to reference the created context. This will allow the jobs to use the variables set in that context. Below ia an example:


```yml
workflows:
 main:
   jobs:
     - myjob:
         context: my_context_name # has an env var called MY_ENV_VAR
jobs:
myjob:
   docker:
     - image: "convisoappsec/convisocli"
   steps:
     - run:
         command: echo $GROUP_ENVIRONMENT_VARIABLE
         name: test environment variable from context
```


## CONVISO AST

You can run Conviso Platform **AST (Application Security Testing)**. This product offers **Static Application Security Testing (SAST)**, **Software Composition Analysis (SCA)**, Infrastructure as Code (IaC) and enables **Continuous Code Review** performed by our Security Analysts directly on your Circleci pipeline.

SAST and SCA analyses are crucial in enhancing the effectiveness of code reviews performed by Conviso's professionals. They provide valuable insights that can be used as inputs for analysts, leading to more comprehensive security assessments. The job outlined below demonstrates how to deploy code for review and simultaneously perform SAST and SCA analyses using the same differential identifiers. This approach creates a holistic solution in the pipeline, ensuring that code is thoroughly vetted for security vulnerabilities.. An example of a complete pipeline with all solutions can be seen in the snippet below:


```yml
version: 2.1


jobs:
 conviso-ast-job:
   docker:
     - image: "convisoappsec/convisocli"
   steps:
     - setup_remote_docker
     - checkout
     - run:
         name: "Run conviso ast run"
         command: conviso ast run
workflows:
 my-workflow:
   jobs:
     - conviso-ast-job:
         context: CONVISO_API_KEY


```


[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)
