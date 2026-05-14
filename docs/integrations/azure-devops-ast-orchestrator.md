---
id: azure-devops-ast-orchestrator
title: Azure DevOps AST Orchestrator
sidebar_label: AST Orchestrator
description: Configure a centralized Azure DevOps pipeline to run Conviso AST scans for multiple repositories after PR merges.
keywords:
  [
    Azure DevOps AST Orchestrator,
    Application Security Testing,
    Azure Pipelines,
    Conviso Platform,
  ]
---

# Azure DevOps AST Orchestrator

The Conviso Platform **Azure DevOps AST Orchestrator** centralizes AST scanning in a single Azure Pipeline. Instead of maintaining a pipeline in every repository, Conviso triggers one orchestrator pipeline with the target repository and commit information after PR merges.

## Overview

The Orchestrator model provides:

- **Centralized management**: Maintain scanning logic in one pipeline.
- **Consistency**: Apply the same scan behavior to all mapped repositories.
- **Simple onboarding**: Add repository mappings without duplicating CI configuration.

:::note
**Execution costs**: Scans run in your Azure Pipelines environment and consume your Azure Pipeline runtime.
:::

## Prerequisites

Before you start:

1. Azure DevOps integration is configured in Conviso Platform.
2. **AST Scans** is enabled in the integration.
3. You have an Azure Pipeline that will act as the orchestrator.
4. The pipeline has access to a Variable Group with:
   - `ADO_GIT_PAT` (Code Read permission for target repositories)
   - `CONVISO_API_KEY` (Conviso API key for the target environment)

## Configure the Orchestrator in Conviso

### Step 1 - Open Azure DevOps integration

In Conviso Platform, go to **Integrations**, filter by **Application Lifecycle Management**, and open **Azure DevOps**.

![Step 1 - Open Azure DevOps integration](/img/azure-devops/ast-step-01-integrations.png)

### Step 2 - Configure Orchestrator settings

In **Integrations > Azure DevOps > Orchestrator configuration**, fill:

- **Orchestrator organization**: Azure DevOps organization name (e.g. `my-org`)
- **Orchestrator project**: Project where the orchestrator pipeline is defined
- **Orchestrator pipeline ID**: Numeric pipeline ID in Azure DevOps
- **Orchestrator ref**: Branch/tag where the YAML is stored (recommended: `main`)

Then click **Save configuration**.

![Step 2 - Orchestrator configuration](/img/azure-devops/ast-step-02-orchestrator-config.png)

### Step 3 - Create a PAT in Azure DevOps

In Azure DevOps, create a **Personal Access Token** with **Code (Read)** scope for repositories that will be scanned.

![Step 3 - Create PAT](/img/azure-devops/ast-step-03-pat.png)

### Step 4 - Configure Variable Group secrets

In Azure DevOps **Pipelines > Library > conviso-group**, add:

- `ADO_GIT_PAT`
- `CONVISO_API_KEY`

Both must be stored as secret variables.

![Step 4 - Variable Group](/img/azure-devops/ast-step-04-variable-group.png)

## Configure Merge Trigger

After enabling AST Scans and saving Orchestrator settings, Conviso automatically triggers the orchestrator pipeline on eligible PR merges for mapped assets.

## Pipeline Template (Azure DevOps)

Use this orchestrator pipeline template:

```yaml
trigger: none
pr: none

parameters:
  - name: repo_full_name
    type: string
    default: REPLACE/REPLACE
  - name: branch
    type: string
    default: replace-me
  - name: commit_sha
    type: string
    default: replace-me
  - name: pr_number
    type: string
    default: ""
  - name: api_url
    type: string
    default: "https://api.convisoappsec.com"

variables:
  - group: conviso-group

pool:
  vmImage: ubuntu-latest

jobs:
  - job: ast
    container: convisoappsec/convisoast:latest
    steps:
      - checkout: none

      - bash: |
          set -euo pipefail

          REPO_FULL='${{ parameters.repo_full_name }}'
          BRANCH='${{ parameters.branch }}'
          SHA='${{ parameters.commit_sha }}'

          case "$REPO_FULL" in ''|REPLACE/REPLACE) echo "##vso[task.logissue type=error]repo_full_name inválido"; exit 1;; esac
          case "$SHA" in ''|replace-me) echo "##vso[task.logissue type=error]commit_sha inválido"; exit 1;; esac
          test -n "${ADO_GIT_PAT:-}" || { echo "##vso[task.logissue type=error]ADO_GIT_PAT ausente"; exit 1; }
          test -n "${CONVISO_API_KEY:-}" || { echo "##vso[task.logissue type=error]CONVISO_API_KEY ausente"; exit 1; }

          PROJECT="${REPO_FULL%%/*}"
          REPO="${REPO_FULL#*/}"
          ORG="${SYSTEM_COLLECTIONURI#https://dev.azure.com/}"
          ORG="${ORG%/}"

          WORKDIR="$(Build.SourcesDirectory)"
          rm -rf "${WORKDIR:?}"/* && mkdir -p "$WORKDIR" && cd "$WORKDIR"
          git init -q
          git remote add origin "https://:${ADO_GIT_PAT}@dev.azure.com/${ORG}/${PROJECT}/_git/${REPO}"
          git fetch origin "$SHA"
          git checkout -B "$BRANCH" "$SHA"

          PREV="$(git rev-parse "${SHA}^1")"
          export CONVISO_API_URL='https://api.convisoappsec.com'
          conviso ast run --asset-name "${ORG}/${REPO}" --current-commit "$SHA" --previous-commit "$PREV" --vulnerability-auto-close
        env:
          ADO_GIT_PAT: $(ADO_GIT_PAT)
          CONVISO_API_KEY: $(CONVISO_API_KEY)
          SYSTEM_COLLECTIONURI: $(System.CollectionUri)
```

### Step 5 - Save pipeline YAML

Open your orchestrator pipeline in Azure DevOps and save the YAML.

![Step 5 - Pipeline YAML](/img/azure-devops/ast-step-05-pipeline-yaml.png)

## How the flow works

1. User merges a PR in Azure DevOps.
2. Conviso triggers the configured orchestrator pipeline with repository and commit parameters.
3. Pipeline clones the target repository and runs `conviso ast run`.
4. Findings are sent to the mapped asset in Conviso Platform.

### Step 6 - Validate a successful run

After a PR merge, confirm the pipeline run is created and finished successfully.

![Step 6 - Successful run](/img/azure-devops/ast-step-06-run-success.png)

## Troubleshooting

| Problem | What to check |
| --- | --- |
| PR merged but no pipeline run is created | Confirm **AST Scans** is enabled, the asset mapping is active for the merged branch, and Orchestrator configuration (organization/project/pipeline ID/ref) is correct. |
| Pipeline trigger fails with `Unexpected parameter 'api_url'` | Keep `api_url` declared in pipeline parameters for compatibility with worker payload. |
| Git clone fails with repository not found/permission denied | Validate `ADO_GIT_PAT` scopes and access to cross-project repositories. |
| `Invalid API key` in AST | Confirm `CONVISO_API_KEY` belongs to the same environment used by `CONVISO_API_URL`. |
| Pipeline runs but no findings are created | Confirm the asset naming (`organization/repository`) is mapped correctly and review pipeline logs for `conviso ast run` errors. |

## Support

If you need help validating orchestrator settings, repository access, or pipeline permissions, contact Conviso Support.
