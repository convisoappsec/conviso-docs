---
id: github-actions
title:  Integrating Conviso Platform with Github Actions 
sidebar_label: GitHub Actions
description:  With the Conviso platform integrated with Github Actions in your CI/CD pipeline, you can automate and streamline your security processes. Know more!
keywords: [Github Actions]
---

<div style={{textAlign: 'center'}}>

![img](../../static/img/github-actions.png 'Github Actions')

</div>

## Introduction

With Conviso Platform integrated with [Github Actions](https://github.com/) in your CI/CD Pipeline, you can automate and streamline your security processes, ensuring that your applications undergo thorough security assessments throughout the development lifecycle.

You can run the Conviso Platform **AST (Application Security Testing)**. The tool offers **Static Application Security Testing (SAST)**, **Software Composition Analysis (SCA)**, **Infrastructure as Code (IaC)** analysis, **SBOM** generation and **secret detection** directly on your pipeline.

The [security scans workflow](../security-scans/conviso-ast) is a docker image in this integration for all execution and connection with the Conviso Platform.

**[Explore our Integration page to learn more and supercharge your Application Security Program with Conviso Platform.](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)**

### Prerequisites

Before you can use Conviso Platform with Github Actions, you need to make sure that:

* You have your API Key, a code that identifies you to Conviso Platform. Find yours [using this tutorial](../platform/security-feed.md#generate-api-key).

* You must also set an environment variable for the runner: **CONVISO_API_KEY**. This code tells Conviso Platform which account you are using. To do this on Github, you must:
    * Go to your project’s **Settings > Secrets and Variables** and expand the **Actions** section.
    * Select **New Repository Secret** and fill in the details. 
* After creating a variable, you can use it in the ```.yml``` configuration file or job scripts.
  * To make the ```.yml``` file, go to your repository page and click on **“Actions”** and **“set up a workflow yourself”:**

![img](../../static/img/github-actions-img1.png 'GithubActions page')

This will allow you to write the code we will use in this tutorial!

## Usage

By the end of this tutorial, you will know how to:
* **[Perform a Conviso AST scan to analyze your application's security](#perform-a-conviso-ast-scan-to-analyze-your-applications-security)**
* **[Run a scan exclusively using Conviso SAST](#run-a-scan-exclusively-using-conviso-sast)**
* **[Run a scan exclusively using Conviso SCA](#run-a-scan-exclusively-using-conviso-sca)**
* **[Trigger the workflow manually](#manually-triggering-the-workflow)**
* **[Scan after a pull request is merged](#scanning-after-a-pull-request-is-merged)**

**[Learn more about Conviso Platform integrations!](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)**

## Perform a Conviso AST scan to analyze your application's security

Harness the power of Application Security Testing (AST) by incorporating the Conviso AST scan into your application's security analysis. A single `conviso ast run` combines SAST, SCA, IaC, SBOM and secret analysis, providing comprehensive security coverage directly within your pipeline.

Follow the steps below to integrate Conviso AST seamlessly into your pipeline, creating a comprehensive solution within your ```.yml``` file:

```yml
name: CI
on:
 push:
   branches: [ main ]
 pull_request:
   branches: [ main ]

jobs:
 conviso-ast:
   runs-on: ubuntu-latest
   container:
     image: convisoappsec/convisoast
     env:
       CONVISO_API_KEY:  ${{secrets.CONVISO_API_KEY}}
   steps:
   - uses: actions/checkout@v6

   - name: Run AST
     run: conviso ast run
```

The identified vulnerabilities will be automatically sent to your Asset on Conviso Platform. Now you can use the [Vulnerabilities](../platform/vulnerabilities) resource to work on the correction flow.

## Running the Conviso Containers

To perform the [Conviso Containers](../security-scans/conviso-containers/conviso-containers.md), you can use the example configuration below:

```yml
name: CI
on:
 workflow_dispatch:
 push:
   branches: [ main ]
jobs:
 conviso-ast:
   runs-on: ubuntu-latest
   container:
     image: convisoappsec/convisoast:latest
     env:
       CONVISO_API_KEY: ${{secrets.CONVISO_API_KEY}}
   steps:
   - uses: actions/checkout@v6
   - name: Run AST
     run: |
          export DOCKER_BUILDKIT=1
          export IMAGE_NAME="my-image"
          export IMAGE_TAG="latest"
          docker build -t $IMAGE_NAME:$IMAGE_TAG .
          conviso container run "$IMAGE_NAME:$IMAGE_TAG"
```

If you'd like to scan a public image available on DockerHub, modify the configuration as shown below:

```yml
name: CI
on:
 workflow_dispatch:
 push:
   branches: [ main ]
jobs:
 conviso-ast:
   runs-on: ubuntu-latest
   container:
     image: convisoappsec/convisoast:latest
     env:
       CONVISO_API_KEY: ${{secrets.CONVISO_API_KEY}}
   steps:
   - uses: actions/checkout@v6
   - name: Run AST
     run: |
          export IMAGE_NAME="vulnerables/web-dvwa"
          export IMAGE_TAG="latest"
          docker pull $IMAGE_NAME:$IMAGE_TAG
          conviso container run "$IMAGE_NAME:$IMAGE_TAG"
```

:::note
These are only examples. You are required to provide the image for scanning, and you can use alternative methods based on your environment.

The `IMAGE_NAME` and `IMAGE_TAG` are variables that should be adjusted based on your project. For example, you may want to name the image after your project or version it differently.
:::

## Run a scan exclusively using Conviso SAST

The steps below will show you what your ```.yml``` must have to perform Static Application Security Testing (SAST):

```yml
name: CI
on:
 push:
   branches: [ main ]
 pull_request:
   branches: [ main ]

jobs:
 conviso-sast:
   runs-on: ubuntu-latest
   container:
     image: convisoappsec/convisoast
     env:
       CONVISO_API_KEY:  ${{secrets.CONVISO_API_KEY}}
   steps:
   - uses: actions/checkout@v6

   - name: Run SAST
     run: conviso sast run
```

## Run a scan exclusively using Conviso SCA

The steps below will show you what your ```.yml``` must have to perform Software Composition Analysis (SCA):

```yml
name: CI
on:
 push:
   branches: [ master ]
 pull_request:
   branches: [ master ]

jobs:
 conviso-sca:
   runs-on: ubuntu-latest
   container:
     image: convisoappsec/convisoast
     env:
       CONVISO_API_KEY:  ${{secrets.CONVISO_API_KEY}}
   steps:
   - uses: actions/checkout@v6

   - name: Run SCA
     run: conviso sca run
```

## Manually Triggering the Workflow

In addition to automated triggers, GitHub Actions workflows can be executed manually. This is particularly useful for running specific tests or scans on demand. Below are the steps to enable and use this feature:

### Configuring the Workflow for Manual Execution

To allow manual execution of the workflow, you need to add the `workflow_dispatch` event to your .yml configuration file. Here's an example:

```yml
name: CI
on:
  workflow_dispatch:

jobs:
  conviso-ast:
    runs-on: ubuntu-latest
    container:
      image: convisoappsec/convisoast
      env:
        CONVISO_API_KEY: ${{ secrets.CONVISO_API_KEY }}
    steps:
      - uses: actions/checkout@v6
      - name: Run AST
        run: conviso ast run
```

### Running the Workflow Manually

1. Navigate to your GitHub repository.
2. Click on the Actions tab at the top of the repository page.
3. Select the workflow you want to run from the list on the left.
4. Click the Run workflow button at the top right of the page.
5. Choose the branch or parameters (if applicable) and confirm.

After following these steps, the workflow will start executing.

## Scanning After a Pull Request Is Merged

The recommended trigger for Conviso AST is **a push to your default branch**, which is exactly what happens when a pull request is merged. This keeps the security state of your main branch continuously up to date — every change that reaches production code is scanned, with no redundant scans on intermediate feature branches.

Restrict the `push` trigger to your default branch (for example `main`) so the scan runs only on merges, not on every branch push:

```yml
name: Conviso AST

on:
  push:
    branches: [ main ]

jobs:
  conviso-ast:
    runs-on: ubuntu-latest
    container:
      image: convisoappsec/convisoast:latest
      env:
        CONVISO_API_KEY: ${{secrets.CONVISO_API_KEY}}
    steps:
      - uses: actions/checkout@v6
      - name: Run AST
        run: conviso ast run
```

We recommend using the `:latest` tag so every run picks up the most recent CLI release — including new analyzers, detection rules, and fixes — with no manual upgrades. Pin a specific release tag only when you have a strict need for fully reproducible runs.

:::tip Combine with pull request checks
Pair this with a `pull_request` trigger (shown in the [AST scan example](#perform-a-conviso-ast-scan-to-analyze-your-applications-security) above) to get feedback *before* merge, while the `push` trigger keeps your default branch authoritative *after* merge.
:::

## How to Configure Conviso AST and Security Gate with a Reusable Workflow

If you want to create a repository that works as a **template** so that other repositories can call its workflows, you can use a configuration like the one below.

### Consumer Repository

In the repository that calls the reusable workflow (i.e., the consumer), you need to add a GitHub Actions workflow similar to the following:

```yaml
name: CI
on:
 push:
   branches: [ staging ]
 pull_request:
   branches: [ staging ]
jobs:
 run-conviso-ast:
   uses: your-org/reusable-workflow/.github/workflows/main.yml@main
   secrets:
      CONVISO_API_KEY: ${{ secrets.CONVISO_API_KEY }}
```

:::note
You need to replace `your-org/reusable-workflow/.github/workflows/main.yml@main` with the path to your reusable workflow YAML file.
:::

### Reusable Workflow (Template Repository)

In the template repository, where the reusable workflow is defined, add a workflow file similar to this:

```yaml
on:
  workflow_call:
    secrets:
      CONVISO_API_KEY:
        description: 'API Key for Conviso Platform'
        required: true

jobs:
  conviso:
    runs-on: ubuntu-latest
    container:
      image: convisoappsec/convisoast:latest
    env:
      CONVISO_API_KEY: ${{secrets.CONVISO_API_KEY}}
    steps:
    - uses: actions/checkout@v6
  
    - name: Create Security Gate Rules File
      run: |
        cat <<EOF > security-gate.yml
        rules:
        - from: any
          severity:
            critical:
              maximum: 50
        EOF

    - name: Run AST
      run: conviso ast run
  
    - name: Run Security Gate
      run: conviso vulnerability assert-security-rules --rules-file 'security-gate.yml'
```

## Importing and Synchronizing Assets from External Scanners

Integrating the Conviso Platform with external scanners such as Checkmarx, Fortify, or Dependency-Track allows for automated asset import and synchronization. This ensures that your Conviso Platform remains up-to-date with the latest scan results. To configure this behavior, follow these steps:

1. Access the GitHub Marketplace.
2. Search for **Conviso GitHub Sync Task** or directly visit [this link](https://github.com/marketplace/actions/conviso-github-sync-task).
3. Add the `CONVISO_API_KEY` secret to your repository, with your [Conviso API Key](../api/api-overview.md#generate-api-key) as its value. Keep it in a repository or organization secret: anything written literally in the workflow file is readable by everyone who can read the repository.
4. Create or edit a workflow file under `.github/workflows/`.
5. Configure the Workflow with the Following Code:
```yaml
name: Sync to Conviso

on:
  push:
    branches: [main]

jobs:
  conviso-sync:
    runs-on: ubuntu-latest
    steps:
      - uses: convisoappsec/github-sync-task@v1
        with:
          api-key: ${{secrets.CONVISO_API_KEY}}
          project-id: 'external-tool-project-id'
          integration: 'FORTIFY' # or 'DEPENDENCY_TRACK' or 'CHECKMARX'
          company-id: 'your-company-id'
```
6. Commit the workflow and run it.

**Field Descriptions**:
- api-key: Your [Conviso API Key](../api/api-overview.md#generate-api-key), referenced from the repository secrets.
- project-id: The project ID from the external scanner (e.g., Fortify, Checkmarx, Dependency-Track).
- integration: The name of the integration as specified in Conviso's GraphQL schema (e.g., 'FORTIFY', 'CHECKMARX', 'DEPENDENCY_TRACK').
- company-id: Your company ID in the Conviso Platform.
- repository-url: The repository this scan belongs to. Optional; it defaults to the repository the workflow runs in — see [Repository and branch](#repository-and-branch) below.
- branch: The branch this scan covers. Optional; it defaults to the branch that triggered the run.

**Outputs**: the action exposes `asset-id` and `asset-name`, so a later step can reference the asset it associated.

**Expected Behaviors**:
- **Importing a New Project**: If the external scanner's project does not exist in the Conviso Platform, it will be imported as a new asset.
- **Synchronizing an Existing Project**: If the project already exists in the Conviso Platform, it will be synchronized to update its data.

In both scenarios, the process is triggered by the workflow and executed asynchronously. You can monitor the progress directly within the respective asset on the Conviso Platform.

### Repository and branch

The action also reports **which repository and which branch** the run is for. Both are optional
inputs, and both are filled in from the workflow when you leave them empty, so the usual setup
needs no extra YAML:

| Input | Where it comes from when left empty |
| --- | --- |
| `repository-url` | The repository the workflow is running in |
| `branch` | The branch that triggered the run. On a **pull request** event, this is the branch the PR is **merging into**, not the source branch |

Setting `repository-url` turns the asset in Conviso Platform into a repository, and the asset is
then named after the repository (`org/repo`) instead of the scanner's project name. The `branch`
input only takes effect together with it — on its own, Conviso Platform ignores the branch.

## Troubleshooting

### Enabling External Actions for GitHub Actions

If you encounter issues running workflows that rely on external actions, such as `actions/checkout`, ensure that your account or repository's settings allow the use of external actions. 
More information [here](https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise).

**[Unlock the full potential of your Application Program with Conviso Platform integrations. Visit our Integration page now to get started.](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)**

## Support

If you have any questions or need help using our product, please don't hesitate to contact our support team.
