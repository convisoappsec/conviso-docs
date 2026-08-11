---
id: azure-pipelines-graph
title: Azure Pipelines Graph Mode Integration
sidebar_label: Azure Pipelines Graph Mode
description:  Azure Pipelines is a CI/CD module of the Azure DevOps platform; learn how to integrate tasks with the Conviso Platform.
keywords:   [Azure Pipelines Graph Mode Integration]
---

<div style={{textAlign: 'center'}}>

![img](../../static/img/azure-pipelines.png)

</div>

## Introduction

Integrate the Conviso Platform seamlessly into your [Azure DevOps Pipelines](https://dev.azure.com/) to automate and streamline your security processes. This integration ensures thorough security assessments for your applications throughout the development lifecycle.

The Azure Pipelines is a CI/CD module of the [Azure Devops](https://aex.dev.azure.com/) platform. Through this module, it is possible to create automation routines with various tasks that are available on Azure's marketplace. Currently, the integration with Conviso consists of Bash-type tasks. Among the tasks are: the AST command line interface ([AST available at PyPi](https://pypi.org/project/conviso-ast/)).

## Requirements

In order for the experience with Conviso's services to be complete, it is necessary to meet all the requirements below:

1. Hosted Agent Pool (Ubuntu 22.04 or higher) with Docker installed or Agent Cloud Azure;

2. [Script access to the OAuth token enabled](https://learn.microsoft.com/en-us/azure/devops/pipelines/release/options?view=azure-devops#allow-scripts-to-access-the-oauth-token):

<div style={{textAlign: 'center'}}>

![img](../../static/img/azure-pipelines-graph-mode4.png)

</div>

3. External access (can be limited to Conviso's registry for AST, Dockerhub and Conviso Platform).

## First Steps

Given an Azure DevOps project, to create a Welcome Pipeline you can follow the steps below:

1. At the DevOps Project root, click at **Pipelines**;

2. At the upper right menu, click at **New Pipeline**;

3. Select the **Use the classic editor to create a pipeline without YAML** option;

4. At **Select your Repository** step, select the platform where your code is hosted, the repository and the branch for pipeline execution and click at **Continue**;

5. Select the **Start with an Empty Job** option;

6. Rename the **Agent Job 1** to Conviso Agent, selecting Agent Pool option as **Azure Pipelines** and Agent Specification option as **ubuntu-latest**;

7. At Conviso Agent, click at the **+** icon to add a new task;

8. Add a **Bash** type task, rename the Display Name to **Run Conviso AST** and modify its type to **Inline**;

9. You need to define an environment variable for `CONVISO_API_KEY` and set the value from Conviso Platform. It is important to set this variable as a secret.

10. You will also need to define the `DOCKER_HOST` environment variable and set its value to `unix:///var/run/docker.sock`:

<div style={{textAlign: 'center'}}>

![img](../../static/img/azure-pipelines-graph-mode5.png)

</div>

## Running the Conviso AST

1.  To configure Conviso AST, within the script field, add the code snippet presented below:

```bash
docker run --rm \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v $(pwd):/opt/flowcli \
  -e DOCKER_HOST=$(DOCKER_HOST) \
  -e CONVISO_API_KEY=$(CONVISO_API_KEY) \
  convisoappsec/convisoast:latest \
  conviso ast run --vulnerability-auto-close
```

2. Click at **Save & Queue**. The pipeline execution will begin in a few moments.

3. The results will be sent to Conviso Platform.

## Running Conviso AST with the Azure DevOps task

Instead of the Bash task above, you can add the **Conviso AST** task from the Azure DevOps Marketplace. A single task covers Static Application Security Testing (SAST), Software Composition Analysis (SCA), Infrastructure as Code (IaC), Software Bill of Materials (SBOM), secret and container scanning, and it fills in the branch and the directory to scan from the pipeline itself. To configure it, follow these steps:

1. Access the Azure DevOps Marketplace.
2. Search for **Conviso AST** or directly visit [this link](https://marketplace.visualstudio.com/items?itemName=Conviso.convisoAstTask).
3. Click on **Get it free**.
4. Edit Your Azure DevOps Pipeline.
5. In the **Pipeline variables** section, add the `CONVISO_API_KEY` variable and set its value to your [Conviso API Key](../api/api-overview.md#generate-api-key). Mark it as secret.
6. Within the pipeline configuration, add the **Conviso AST** task.
7. Fill in the fields as follows:
   - Conviso API Key: `$(CONVISO_API_KEY)`.
   - Company ID: Company ID in Conviso Platform.
   - Scan types: **leave empty** to run every scan type, or select only the ones you need.
   - Container image: the image analyzed by the container scan. Required only when you select **Container**, which is skipped without it.
   - Path to scan and Branch: **leave both empty**. The task reads them from the pipeline itself — see [Repository context](#repository-context) below.
8. Save the pipeline configuration and execute it to start the scan.

**Expected Behaviors**:
- **Branch association**: The scan is recorded against the branch the build is for. In a **Pull Request** build, this is the branch the PR is coming **from**, so its findings are not filed under the target branch.
- **Findings never fail the build**: The task fails only when a scan or an upload fails, never because vulnerabilities were found.
- **Session archive**: Every run writes a zip with the raw output of each scan and the debug log to the agent's temporary directory. Add a **Publish Build Artifacts** task if you want to keep it, as it is the first artifact Conviso support asks for.

### Repository context

Both fields below are optional, and both are filled in from the pipeline when you leave them empty,
so the usual setup needs no extra configuration:

| Field | Where it comes from when left empty |
| --- | --- |
| **Path to scan** | The directory the pipeline checked the sources out into |
| **Branch** | The branch the build is for. In a **Pull Request** build, this is the branch the PR is **coming from**, not the branch it is merging into |

Filling either field in overrides what the pipeline reports — use that only when the build does not
run on the code you are tracking.

:::note
The task requires a **Linux x64** agent with Docker, such as the `ubuntu-latest` agent specification
used in [First Steps](#first-steps). Unlike the Bash task above, it does not need the `DOCKER_HOST`
variable.
:::

## Running the Conviso Containers

1. To perform the [Conviso Containers](../security-scans/conviso-containers/conviso-containers.md), you can use the example configuration below:

```bash
docker run --rm \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v $(pwd):/opt/flowcli \
  -e DOCKER_HOST=$(DOCKER_HOST) \
  -e CONVISO_API_KEY=$(CONVISO_API_KEY) \
  convisoappsec/convisoast:latest \
  sh -c "
    export DOCKER_BUILDKIT=1 &&
    export IMAGE_NAME='my-image' &&
    export IMAGE_TAG='latest' &&
    docker build -t \$IMAGE_NAME:\$IMAGE_TAG . &&
    conviso container run \"\$IMAGE_NAME:\$IMAGE_TAG\"
  "
```

2. If you'd like to scan a public image available on DockerHub, modify the configuration as shown below:

```bash
docker run --rm \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v $(pwd):/opt/flowcli \
  -e DOCKER_HOST=$(DOCKER_HOST) \
  -e CONVISO_API_KEY=$(CONVISO_API_KEY) \
  convisoappsec/convisoast:latest \
  sh -c "
    export IMAGE_NAME='my-image' &&
    export IMAGE_TAG='latest' &&
    docker pull \$IMAGE_NAME:\$IMAGE_TAG &&
    conviso container run \"\$IMAGE_NAME:\$IMAGE_TAG\"
  "
```

:::note
These are only examples. You are required to provide the image for scanning, and you can use alternative methods based on your environment.

The `IMAGE_NAME` and `IMAGE_TAG` are variables that should be adjusted based on your project. For example, you may want to name the image after your project or version it differently.
:::

## Importing and Synchronizing Assets from External Scanners

Integrating the Conviso Platform with external scanners such as Checkmarx, Fortify, or Dependency-Track allows for automated asset import and synchronization. This ensures that your Conviso Platform remains up-to-date with the latest scan results. To configure this behavior, follow these steps:

1. Access the Azure DevOps Marketplace.
2. Search for **Conviso Azure Sync Task** or directly visit [this link](https://marketplace.visualstudio.com/items?itemName=Conviso.convisoAzureSyncTask).
3. Click on **Get it free**.
4. Edit Your Azure DevOps Pipeline.
5. In the **Pipelines variables** section, add the `CONVISO_API_KEY` variable and set its value to your [Conviso API Key](../platform/security-feed.md#generate-api-key).
6. Within the pipeline configuration, add the **Conviso Azure Sync Task**.
7. Fill in the fields as follows:
   - Conviso API Key: `$(CONVISO_API_KEY)`.
   - Project ID in the external tool: Project ID from the external scanner (e.g., Fortify, Checkmarx, Dependency_Track).
   - Integration Name: Name of the integration in Conviso's GraphQL schema (e.g., Fortify, Checkmarx, Dependency_Track).
   - Company ID: Company ID in Conviso Platform.
   - Repository URL and Branch: **leave both empty**. The task reads them from the pipeline itself — see [Repository and branch](#repository-and-branch) below.
8. Save the pipeline configuration and execute it to initiate the synchronization process.

**Expected Behaviors**:
- **Importing a New Project**: If the external scanner's project does not exist in the Conviso Platform, it will be imported as a new asset.
- **Synchronizing an Existing Project**: If the project already exists in the Conviso Platform, it will be synchronized to update its data.

In both scenarios, the process is triggered by the pipeline and executed asynchronously. You can monitor the progress directly within the respective asset on the Conviso Platform.

### Repository and branch

The task also reports **which repository and which branch** the build is for. Both are optional
inputs, and both are filled in from the pipeline when you leave them empty, so the usual setup
needs no extra YAML:

| Field | Where it comes from when left empty |
| --- | --- |
| **Repository URL** | The repository the pipeline checked out |
| **Branch** | The branch the build is for. In a **Pull Request** build, this is the branch the PR is **merging into**, not the source branch |

Filling either field in overrides what the pipeline reports — use that only when the build does not
run on the repository you are tracking.

:::caution
In a Pull Request build the reported branch is the PR's **target** branch, so findings from that
build are recorded against the branch you are merging into. If your target is the repository's
default branch, those findings **count towards its risk score** before the code is merged.

Set the **Branch** field explicitly if you want a PR build recorded somewhere else.
:::

:::note
A Branch without a Repository URL is discarded — the platform only records branches for
repositories. The task warns you in the pipeline log when that happens, and the run still succeeds.
:::

The asset this task reports to becomes — or joins — the repository at that address, and the
findings appear under the branch above. See
[Repositories and Branches](../platform/repositories-and-branches.md#how-your-assets-become-repositories).

## Troubleshooting

### Configuring API Key

If authentication is not performed even when loading the ```CONVISO_API_KEY``` variable, make sure it is provided as environment variables for all tasks that use the CLI.

### Ensuring Git is added to PATH Environment Variable

If you encounter the error below, ensure that the `PATH` environment variable includes `C:\Program Files\Git\bin`:

```
Unable to locate executable file: 'bash'. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable.
```

Follow these steps to verify and update it:

1. Access your project in Azure;
2. Navigate to **Agent pools**:

<div style={{textAlign: 'center'}}>

![img](../../static/img/azure-pipelines-graph-mode1.png)

</div>

3. In the **Capabilities** tab, search for the **Path** environment variable:

<div style={{textAlign: 'center'}}>

![img](../../static/img/azure-pipelines-graph-mode2.png)

</div>

4. Add `C:\Program Files\Git\bin` to the environment variable.

<div style={{textAlign: 'center'}}>

![img](../../static/img/azure-pipelines-graph-mode3.png)

</div>

5. Restart the agent service.

### Allowing Script Access to the OAuth Token

If you encounter the following error, it indicates that the script does not have access to the OAuth token:

```
Error: Cmd('git') failed due to: exit code(128)
    cmdline: git fetch --unshallow
    stderr: 'fatal: could not read user Password for 'https://organization@dev.azure.com': terminal prompts disabled' 
```

To resolve this issue, follow these steps:

1. Open the Agent job configuration in your pipeline settings.

2. Under **Additional options**, select the checkbox labeled [**Allow scripts to access the OAuth token**](https://learn.microsoft.com/en-us/azure/devops/pipelines/release/options?view=azure-devops#allow-scripts-to-access-the-oauth-token):

<div style={{textAlign: 'center'}}>

![img](../../static/img/azure-pipelines-graph-mode4.png)

</div>

3. Save the changes and rerun the pipeline.

[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)