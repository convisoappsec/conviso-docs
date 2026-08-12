---
id: azure-devops-ast-orchestrator
title: Azure DevOps AST Orchestrator
sidebar_label: AST Orchestrator
description: Configure a centralized Azure DevOps pipeline to run Conviso AST after PR merges using only CONVISO_API_KEY.
keywords:
  [
    Azure DevOps AST Orchestrator,
    Application Security Testing,
    Azure Pipelines,
    pipeline-orchestrator,
    conviso-ast-repository-token,
    Conviso Platform,
  ]
---

# Azure DevOps AST Orchestrator

The Conviso Platform **Azure DevOps AST Orchestrator** centralizes AST scanning in a single Azure Pipeline. Instead of adding a pipeline to every repository, you build **one** pipeline. Conviso calls it after each PR merge and tells it which repository and branch to scan.

The job obtains a short-lived clone credential from the Platform (using your API key), clones the target repository, runs `conviso-ast`, and sends findings to the mapped asset. You do **not** store a PAT or map `System.AccessToken` for clone — only `CONVISO_API_KEY`.

## How it works

```mermaid
flowchart LR
    A[Developer merges PR] --> B[Conviso Platform]
    B -->|Triggers pipeline with<br/>repo + branch| C[Orchestrator pipeline]
    C -->|conviso-ast-repository-token| D[Clone target repository]
    D --> E[conviso-ast]
    E --> F[Findings in Conviso Platform]
```

:::note
**Execution costs**: Scans run in your Azure Pipelines environment and consume your Azure Pipeline runtime.
:::

## Before you begin

You will work in **two consoles**: Azure DevOps first, then Conviso Platform.

You need:

- An Azure DevOps project where you can create pipelines and variable groups.
- [Azure DevOps integration](./azure-devops.md) already configured in Conviso, with repositories imported as assets.
- Your **Conviso API key** for the target environment.
- Example template: [convisoappsec/pipeline-orchestrator](https://github.com/convisoappsec/pipeline-orchestrator).

| Term | Meaning |
| --- | --- |
| **Orchestrator pipeline** | The single Azure Pipeline you create in Part 1. It does the scanning. |
| **Target repository** | Any repository you want scanned. It needs no pipeline of its own. |
| **Asset** | The repository entry in Conviso Platform where findings are stored. Named `organization/repository`. |

---

## Part 1 - Azure DevOps setup

### Step 1 - Add the pipeline YAML to a repository

Pick any repository in your Azure DevOps project to host the orchestrator (a dedicated repository such as `conviso-ast-orchestrator` works well). Create a file named `azure-pipelines.yml` in the branch you will use — normally `main` — and paste this content (same file as in [pipeline-orchestrator](https://github.com/convisoappsec/pipeline-orchestrator/blob/main/azure-pipelines.yml)):

```yaml
parameters:
  - name: repo_full_name
    type: string
    default: ""
  - name: branch
    type: string
    default: ""
  - name: commit_sha
    type: string
    default: ""
  - name: pr_number
    type: string
    default: ""
  - name: api_url
    type: string
    default: "https://api.convisoappsec.com"
  - name: company_id
    type: string
    default: ""
  - name: asset_id
    type: string
    default: ""
  - name: scan_run_id
    type: string
    default: ""

trigger: none
pr: none

variables:
  - name: CONVISO_COMPANY_ID
    value: ""

pool:
  vmImage: ubuntu-latest

# Azure requires an empty entrypoint or container steps fail to docker exec.
container:
  image: convisoappsec/convisoast_v2:latest
  options: --entrypoint ""

steps:
  - checkout: none

  - script: |
      set -euo pipefail
      if [ -z "${REPO_FULL_NAME}" ] || [ -z "${BRANCH}" ]; then
        echo "##vso[task.logissue type=error]repo_full_name and branch are required"
        exit 1
      fi

      export CONVISO_APIKEY="$CONVISO_API_KEY"
      export CONVISO_BASE_URL="${API_URL:-https://api.convisoappsec.com}"
      CONVISO_BASE_URL="${CONVISO_BASE_URL%/}"
      case "$CONVISO_BASE_URL" in
        https://app.convisoappsec.com)
          export CONVISO_BASE_URL="https://api.convisoappsec.com"
          ;;
        https://staging.convisoappsec.com)
          export CONVISO_BASE_URL="https://api.staging.convisoappsec.com"
          ;;
      esac

      export CONVISO_REPO_FULL_NAME="$REPO_FULL_NAME"
      case "${ASSET_ID:-}" in
        ""|none|0) unset CONVISO_ASSET_ID || true ;;
        *) export CONVISO_ASSET_ID="$ASSET_ID" ;;
      esac
      case "${SCAN_RUN_ID:-}" in
        ""|none|0) unset CONVISO_SCAN_RUN_ID || true ;;
        *) export CONVISO_SCAN_RUN_ID="$SCAN_RUN_ID" ;;
      esac

      umask 077
      TOKEN=$(conviso-ast-repository-token --provider azure_devops)
      echo "##vso[task.setvariable variable=REPO_TOKEN;issecret=true]$TOKEN"
      echo "##vso[task.setvariable variable=CONVISO_BASE_URL]$CONVISO_BASE_URL"
    displayName: Get repository token
    env:
      CONVISO_API_KEY: $(CONVISO_API_KEY)
      API_URL: ${{ parameters.api_url }}
      REPO_FULL_NAME: ${{ parameters.repo_full_name }}
      ASSET_ID: ${{ parameters.asset_id }}
      SCAN_RUN_ID: ${{ parameters.scan_run_id }}
      BRANCH: ${{ parameters.branch }}

  - script: |
      set -euo pipefail
      parts=$(printf '%s' "$REPO_FULL_NAME" | awk -F/ '{print NF}')
      case "$parts" in
        2)
          export ORG=$(printf '%s' "$REPO_FULL_NAME" | cut -d/ -f1)
          export REPO=$(printf '%s' "$REPO_FULL_NAME" | cut -d/ -f2)
          unset PROJECT || true
          ;;
        3)
          export ORG=$(printf '%s' "$REPO_FULL_NAME" | cut -d/ -f1)
          export PROJECT=$(printf '%s' "$REPO_FULL_NAME" | cut -d/ -f2)
          export REPO=$(printf '%s' "$REPO_FULL_NAME" | cut -d/ -f3-)
          ;;
        *)
          echo "##vso[task.logissue type=error]repo_full_name must be organization/repository. Got: ${REPO_FULL_NAME}"
          exit 1
          ;;
      esac

      REMOTE_URL=$(python3 -c '
      import base64, json, os, urllib.request
      from urllib.parse import urlsplit, urlunsplit

      org = os.environ["ORG"]
      repo = os.environ["REPO"]
      token = os.environ["REPO_TOKEN"]
      project = os.environ.get("PROJECT", "")

      if project:
          remote = f"https://dev.azure.com/{org}/{project}/_git/{repo}"
      else:
          req = urllib.request.Request(
              f"https://dev.azure.com/{org}/_apis/git/repositories?api-version=7.1",
              headers={"Authorization": "Basic " + base64.b64encode((":" + token).encode()).decode()},
          )
          with urllib.request.urlopen(req, timeout=60) as resp:
              data = json.load(resp)
          matches = [r for r in data.get("value", []) if r.get("name") == repo]
          if not matches:
              raise SystemExit(f"Azure returned no repository named {repo!r} in org {org!r}")
          if len(matches) > 1:
              raise SystemExit(
                  f"Multiple Azure repositories named {repo!r} in org {org!r}; "
                  "use organization/project/repository"
              )
          remote = matches[0]["remoteUrl"]

      parts = urlsplit(remote)
      host = parts.hostname or ""
      if parts.port:
          host = f"{host}:{parts.port}"
      print(urlunsplit((parts.scheme, host, parts.path, parts.query, parts.fragment)))
      ')

      rm -rf target
      git init target
      cd target
      git remote add origin "$REMOTE_URL"
      if [ -n "${COMMIT_SHA:-}" ]; then
        git -c http.extraheader="AUTHORIZATION: bearer ${REPO_TOKEN}" fetch --depth=50 origin "$COMMIT_SHA"
        git checkout -B "$BRANCH" "$COMMIT_SHA"
      else
        git -c http.extraheader="AUTHORIZATION: bearer ${REPO_TOKEN}" fetch --depth=50 origin "$BRANCH"
        git checkout -B "$BRANCH" FETCH_HEAD
      fi
    displayName: Clone target repository
    env:
      REPO_FULL_NAME: ${{ parameters.repo_full_name }}
      BRANCH: ${{ parameters.branch }}
      COMMIT_SHA: ${{ parameters.commit_sha }}
      REPO_TOKEN: $(REPO_TOKEN)

  - script: |
      set -euo pipefail
      cd target
      export CONVISO_APIKEY="$CONVISO_API_KEY"
      export CONVISO_BASE_URL="${NORMALIZED_BASE_URL}"
      export CONVISO_COMPANY_ID="${PARAM_COMPANY_ID:-$VAR_COMPANY_ID}"
      export CONVISO_BRANCH="$BRANCH"
      case "${ASSET_ID:-}" in
        ""|none|0) unset CONVISO_ASSET_ID || true ;;
        *) export CONVISO_ASSET_ID="$ASSET_ID" ;;
      esac
      case "${SCAN_RUN_ID:-}" in
        ""|none|0) unset CONVISO_SCAN_RUN_ID || true ;;
        *) export CONVISO_SCAN_RUN_ID="$SCAN_RUN_ID" ;;
      esac
      conviso-ast -p . -o "$(Build.ArtifactStagingDirectory)/conviso-ast-session.zip"
    displayName: Run Conviso AST
    env:
      GIT_CONFIG_COUNT: "1"
      GIT_CONFIG_KEY_0: safe.directory
      GIT_CONFIG_VALUE_0: "*"
      CONVISO_API_KEY: $(CONVISO_API_KEY)
      NORMALIZED_BASE_URL: $(CONVISO_BASE_URL)
      PARAM_COMPANY_ID: ${{ parameters.company_id }}
      VAR_COMPANY_ID: $(CONVISO_COMPANY_ID)
      ASSET_ID: ${{ parameters.asset_id }}
      SCAN_RUN_ID: ${{ parameters.scan_run_id }}
      BRANCH: ${{ parameters.branch }}

  - task: PublishBuildArtifacts@1
    condition: succeededOrFailed()
    target: host
    displayName: Upload session log
    inputs:
      PathtoPublish: $(Build.ArtifactStagingDirectory)
      ArtifactName: conviso-ast-session
```

![Step 1 - Pipeline YAML](/img/azure-devops/ast-step-05-pipeline-yaml.png)

### Step 2 - Create the pipeline and copy its ID

1. In Azure DevOps, open **Pipelines → New pipeline**.
2. Select the repository that holds `azure-pipelines.yml`.
3. Choose **Existing Azure Pipelines YAML file**, select the branch (`main`) and the path (`/azure-pipelines.yml`), then click **Continue**.
4. Save the pipeline (you can skip the first run).

Copy the pipeline ID from the browser address bar:

```text
https://dev.azure.com/my-org/my-project/_build?definitionId=42
```

The number after `definitionId=` (here `42`) is the **Orchestrator pipeline ID** you will paste into Conviso.

### Step 3 - Add `CONVISO_API_KEY`

1. Open **Pipelines → Library → + Variable group**.
2. Name the group (for example `conviso-group`) or add a pipeline variable named `CONVISO_API_KEY` directly on the pipeline.
3. Add a secret variable named `CONVISO_API_KEY` with your Conviso API key.
4. If you use a variable group, open **Pipeline permissions** on that group and authorize the orchestrator pipeline.

:::tip Optional
You may set `CONVISO_COMPANY_ID` as a pipeline variable. The YAML already declares it empty and prefers the `company_id` parameter when Conviso sends one.
:::

You do **not** add a repository PAT. Clone uses the token returned by `conviso-ast-repository-token`.

![Step 3 - Variable Group](/img/azure-devops/ast-step-04-variable-group.png)

If you store the key in a variable group named `conviso-group`, add this under `variables:` in the YAML (in addition to `CONVISO_COMPANY_ID`):

```yaml
variables:
  - group: conviso-group
  - name: CONVISO_COMPANY_ID
    value: ""
```

---

## Part 2 - Conviso Platform setup

### Step 4 - Open the Azure DevOps integration

In Conviso Platform, go to **Integrations**, filter by **Application Lifecycle Management**, and open **Azure DevOps**.

![Step 4 - Open Azure DevOps integration](/img/azure-devops/ast-step-01-integrations.png)

### Step 5 - Fill in the Orchestrator settings

In **Integrations > Azure DevOps > Orchestrator configuration**, fill:

| Field | What to enter | Where to find it |
| --- | --- | --- |
| **Orchestrator organization** | Azure DevOps organization name, e.g. `my-org` | First path segment of `https://dev.azure.com/my-org/...` |
| **Orchestrator project** | Project that contains the orchestrator pipeline | Second path segment of the same URL |
| **Orchestrator pipeline ID** | The number you copied in Step 2, e.g. `42` | `definitionId=` in the pipeline URL |
| **Orchestrator ref** | Branch holding the YAML file — use `main` | The branch you saved the file in. Conviso prefixes plain values with `refs/heads/`, so a tag must be written in full as `refs/tags/<tag>`. |

Click **Save configuration**. Enable **AST Scans**.

![Step 5 - Orchestrator configuration](/img/azure-devops/ast-step-02-orchestrator-config.png)

With **AST Scans** enabled and these settings saved, Conviso triggers the orchestrator automatically on eligible PR merges for mapped assets. No trigger configuration is needed inside Azure DevOps — that is why the YAML starts with `trigger: none`.

---

## Part 3 - Test it

### Step 6 - Run the pipeline manually

1. Open the orchestrator pipeline and click **Run pipeline**.
2. Expand the parameters and fill:
   - `repo_full_name`: the asset name in Conviso, e.g. `my-org/my-api` (`organization/repository`)
   - `branch`: `main`
3. Leave `api_url` as the default (`https://api.convisoappsec.com`) unless you use staging.
4. Click **Run**.

A green run means the API key, repository token, and clone worked. A red run points you to the [Troubleshooting](#troubleshooting) table below.

### Step 7 - Validate a real merge

Merge a PR in a mapped repository. Confirm a pipeline run is created automatically and finishes successfully, then check that findings appear on the matching asset in Conviso Platform.

The asset in Conviso must be named `organization/repository` (for example `my-org/my-api`) to receive the findings.

![Step 7 - Successful run](/img/azure-devops/ast-step-06-run-success.png)

---

## Troubleshooting

| Problem | What to check |
| --- | --- |
| Run fails with a resource authorization error naming a variable group | Open **Pipelines > Library > your group > Pipeline permissions** and add the orchestrator pipeline. |
| Repository is not available for this API key | `repo_full_name` must match the imported asset name exactly (`organization/repository`). Confirm `CONVISO_API_KEY` belongs to that company and the Azure integration is authorized. |
| Unreadable / HTML response from Platform | Use the API host (`api.*`), not `app.*`. The template normalizes those hosts automatically. |
| Initialize containers fails | Confirm `options: --entrypoint ""` is present on the container. |
| `Invalid API key` in AST | Confirm `CONVISO_API_KEY` belongs to the same environment as `api_url`. |
| Pipeline runs but no findings | Confirm the asset is named `organization/repository` and review the `conviso-ast` logs. |
| PR merged but no pipeline run | Confirm **AST Scans** is enabled, the asset mapping is active for the merged branch, and the Orchestrator configuration is correct. |

## Migrating from `System.AccessToken` or `ADO_GIT_PAT`

1. Replace the orchestrator YAML with the template in Step 1.
2. Keep only `CONVISO_API_KEY` (remove `ADO_GIT_PAT` and any `System.AccessToken` mapping).
3. Re-run a manual test with `repo_full_name` = asset name in Conviso.

## Related guides

- [Azure DevOps Integration](./azure-devops.md)
- [Azure DevOps PR Scans](./azure-devops-pr-scans.md)
- [Example orchestrator repository (pipeline-orchestrator)](https://github.com/convisoappsec/pipeline-orchestrator)
