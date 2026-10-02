---
id: bitbucket-pipelines
title: Bitbucket Pipelines Integration
sidebar_label: Bitbucket Pipelines
description: Run Conviso AST in Bitbucket Pipelines, or synchronize Fortify, Checkmarx, and Dependency-Track assets with the Conviso Sync pipe.
keywords: [Bitbucket Pipelines Integration, Conviso Sync, Dependency-Track]
---

<div style={{textAlign: 'center'}}>

![img](../../static/img/bitbucket.png)

</div>

:::note
First time using Bitbucket? Please refer to the [following documentation](https://bitbucket.org/product/guides/).  

Looking for **centralized AST after merge** (one Pipelines repo for many assets, no per-app YAML)? See the [Bitbucket ALM integration](./bitbucket.md) and [Bitbucket AST Orchestrator](./bitbucket-ast-orchestrator.md).

To **import and synchronize assets from Fortify, Checkmarx, or Dependency-Track**, see [Importing and Synchronizing Assets from External Scanners](#importing-and-synchronizing-assets-from-external-scanners).
:::

## Introduction


With Conviso Platform integrated into your Bitbucket CI/CD Pipeline, you can automate your security processes, ensuring that your applications undergo through automated security assessments in new versions of your code.

You can run Conviso Platform **AST (Application Security Testing)**. This product offers **Static Application Security Testing (SAST)**, **Software Composition Analysis (SCA)**, **Infrastructure as Code (IaC)** analysis, **SBOM** generation and **secret detection** directly on your Bitbucket pipeline.

You can also **synchronize assets from external scanners** (Fortify, Checkmarx, Dependency-Track) with the Conviso Sync pipe — see [Importing and Synchronizing Assets from External Scanners](#importing-and-synchronizing-assets-from-external-scanners).

## Setting up a new repository without an existing pipeline 

To set up a repository, follow the steps below:

1. At the BitBucket project page, click at the **Pipelines** section;
2. Click **Select** at the **Starter Pipeline** option;
3. A text editor will appear; delete all of its content;
4. As the first job, let's invoke the AST help menu. To do so, paste the snippet below:

```yml
image: convisoappsec/convisoast

pipelines:
  branches:
    master:
      - step:
          name: Conviso BitBucket Pipeline
          script:
            - conviso --help
          services:
            - docker
```

## Setting up Environment Variable

In order for the environment to be ready for the execution of all Conviso AST resources, it is necessary to configure some environment variable. To accomplish that, follow the steps below:

1. Generate API Key. This key is available for Conviso Platform users at the user profile page;

**Generate API Key** 

<div style={{textAlign: 'center'}}>

![img](../../static/img/generate-api-key.png)

</div>

2. Under **Repository Settings**, click at **Repository Variables**;

<div style={{textAlign: 'center'}}>

![img](../../static/img/bitbucket-img1.png)

</div>


## Conviso AST

You can run Conviso Platform **AST (Application Security Testing)**. This product offers **Static Application Security Testing (SAST)**, **Software Composition Analysis (SCA)**, **Infrastructure as Code (IaC)** analysis, **SBOM** generation and **secret detection**, reporting every finding to the asset on the Conviso Platform.

```yml
image: convisoappsec/convisoast

pipelines:
  branches:
    master:
      - step:
          name: Conviso BitBucket Pipeline
          script:
            - |
                conviso ast run \
          services:
            - docker
```

## Running the Conviso Containers

To perform the [Conviso Containers](../security-scans/conviso-containers/conviso-containers.md), you can use the example configuration below:

```yml
image: convisoappsec/convisoast:latest

pipelines:
  branches:
    master:
      - step:
          name: Conviso Containers
          script:
            - export DOCKER_BUILDKIT=1
            - export IMAGE_NAME="my-image"
            - export IMAGE_TAG="latest"
            - docker pull $IMAGE_NAME:$IMAGE_TAG
            - docker build -t $IMAGE_NAME:$IMAGE_TAG .
            - conviso container run "$IMAGE_NAME:$IMAGE_TAG"
          services: 
            - docker
```

If you'd like to scan a public image available on DockerHub, modify the configuration as shown below:

```yml
image: convisoappsec/convisoast:latest

pipelines:
  branches:
    master:
      - step:
          name: Conviso Containers
          script:
            - export IMAGE_NAME="vulnerables/web-dvwa"
            - export IMAGE_TAG="latest"
            - docker pull $IMAGE_NAME:$IMAGE_TAG
            - conviso container run "$IMAGE_NAME:$IMAGE_TAG"
          services: 
            - docker
```

:::note
These are only examples. You are required to provide the image for scanning, and you can use alternative methods based on your environment.

The `IMAGE_NAME` and `IMAGE_TAG` are variables that should be adjusted based on your project. For example, you may want to name the image after your project or version it differently.
:::

## Importing and Synchronizing Assets from External Scanners

Integrating the Conviso Platform with external scanners such as Checkmarx, Fortify, or Dependency-Track allows for automated asset import and synchronization. This ensures that your Conviso Platform remains up-to-date with the latest scan results. This is a **different product** from Conviso AST: the pipe does not scan the checkout; it asks the Platform to pull findings from the external scanner.

To configure this behavior, follow these steps:

1. Open the pipe repository: [conviso-appsec/bitbucket-sync-pipe](https://bitbucket.org/conviso-appsec/bitbucket-sync-pipe).
2. In the repository that will run the sync, go to **Repository settings → Repository variables** and add `CONVISO_API_KEY` with your [Conviso API Key](../api/api-overview.md#generate-api-key). Check **Secured**.
3. Optionally add `CONVISO_COMPANY_ID` with your numeric company ID (or pass the ID as a literal in YAML).
4. Edit `bitbucket-pipelines.yml`.
5. Configure the pipeline with the following code. Put the Conviso Sync step **after** the step that uploads the scan (Dependency-Track, Fortify, and similar). Otherwise a fast pipeline can synchronize the previous run's results:

```yaml
pipelines:
  branches:
    main:
      - step:
          name: Upload scan
          script:
            - echo "your scanner upload"
      - step:
          name: Conviso Sync
          clone:
            enabled: false
          script:
            - pipe: docker://convisoappsec/bitbucket-sync-pipe:1.0.0
              variables:
                CONVISO_API_KEY: $CONVISO_API_KEY
                COMPANY_ID: $CONVISO_COMPANY_ID
                INTEGRATION: DEPENDENCY_TRACK
                PROJECT_ID: "external-tool-project-id"
```

6. `COMPANY_ID` must be numeric. Replace `$CONVISO_COMPANY_ID` with your company ID, or store that ID as a repository variable that expands to digits.
7. Save it and run the pipeline.

`clone.enabled: false` is enough: the pipe only calls GraphQL. `docker://` is required until the pipe is on Bitbucket's [official Pipes list](https://bitbucket.org/product/features/pipelines/integrations). Without it, Bitbucket looks the name up in that catalog and fails with “pipe that doesn't exist”. The Hub account is `convisoappsec` (no hyphen).

**Field Descriptions**:
- `CONVISO_API_KEY`: Your [Conviso API Key](../api/api-overview.md#generate-api-key). Store it as a **secured** repository variable and pass `CONVISO_API_KEY: $CONVISO_API_KEY` on the pipe. Bitbucket only injects user-defined variables into a pipe when they are listed and passed.
- `COMPANY_ID`: Your numeric company ID in the Conviso Platform.
- `PROJECT_ID`: The project ID from the external scanner (e.g., Fortify, Checkmarx, Dependency-Track).
- `INTEGRATION`: The name of the integration as specified in Conviso's GraphQL schema (e.g. `FORTIFY`, `CHECKMARX`, `DEPENDENCY_TRACK`). Use `SALT_SECURITY` for Salt Security.
- `REPOSITORY_URL`: The repository this scan belongs to. Optional; it defaults to the Bitbucket repository the pipeline runs in — see [Repository and branch](#repository-and-branch). Not sent for `SALT_SECURITY`.
- `BRANCH`: The branch this scan covers. Optional; it defaults to the branch that triggered the run.
- `SUBPROJECT_PATH`: Folder inside the repository this scanner project covers (monorepo). Optional; only sent together with a repository URL. Use a distinct path per step when two scanner projects share the same repository and branch.
- `BASE_URL`: Only for a dedicated or on-premise instance. Default `https://app.convisoappsec.com`. GraphQL is called at `{BASE_URL}/graphql`.

**Outputs**: the pipe writes `CONVISO_SYNC_ASSET_ID` and `CONVISO_SYNC_ASSET_NAME` to `conviso-sync.env` in the clone directory. That file is not a Pipelines artifact. Later steps do not see those variables unless they read the file themselves.

**Expected Behaviors**:
- **Importing a New Project**: If the external scanner's project does not exist in the Conviso Platform, it will be imported as a new asset.
- **Synchronizing an Existing Project**: If the project already exists in the Conviso Platform, it will be synchronized to update its data.

In both scenarios, the process is triggered by the pipeline and executed asynchronously. You can monitor the progress directly within the respective asset on the Conviso Platform.

### Repository and branch

The pipe also reports **which repository and which branch** the run is for. Both are optional
inputs, and both are filled in from the pipeline when you leave them empty, so the usual setup
needs no extra YAML:

| Input | Where it comes from when left empty |
| --- | --- |
| `REPOSITORY_URL` | `BITBUCKET_GIT_HTTP_ORIGIN`, or `https://bitbucket.org/$BITBUCKET_REPO_FULL_NAME`. Omitted for `SALT_SECURITY`. |
| `BRANCH` | On a **pull request** pipeline, the destination branch (`BITBUCKET_PR_DESTINATION_BRANCH`) — the branch being merged into. Otherwise `BITBUCKET_BRANCH`. Tag pipelines do not send a branch unless you set `BRANCH`. |

Setting `REPOSITORY_URL` (or leaving the default) attaches the scan to that repository. The Asset
**keeps the scanner project name**; it is not renamed to `workspace/repo`. The `BRANCH` input only
takes effect together with a repository URL — on its own, Conviso Platform ignores the branch.

:::caution
In a pull request pipeline the reported branch is the pull request's **target** branch, so findings
from that run are recorded against the branch you are merging into. If your target is the
repository's default branch, those findings **count towards its risk score** before the code is
merged.

Set `BRANCH` explicitly if you want a pull request run recorded somewhere else, for example
`BRANCH: $BITBUCKET_BRANCH` for the source branch.
:::

:::note
A branch without a repository URL is discarded — the platform only records branches for
repositories. The pipe warns you in the pipeline log when that happens, and the run still succeeds.
:::

The asset this job reports to becomes — or joins — the repository at that address, and the
findings appear under the branch above. See
[Repositories and Branches](../platform/repositories-and-branches.md#how-your-assets-become-repositories).

## Troubleshooting
If you encounter authentication issues after loading the ```CONVISO_API_KEY``` variable, please ensure it has been properly loaded within the environment session of all tasks utilizing the AST.

### `It looks like you tried to use a pipe … that doesn't exist`

The YAML used `pipe: conviso-appsec/bitbucket-sync-pipe:1.0.0` without `docker://`. Use `pipe: docker://convisoappsec/bitbucket-sync-pipe:1.0.0` (Hub account `convisoappsec`, no hyphen).

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
