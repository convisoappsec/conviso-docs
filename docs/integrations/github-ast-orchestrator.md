---
id: github-ast-orchestrator
title: GitHub AST Orchestrator
sidebar_label: AST Orchestrator
description: Configure a centralized GitHub Actions repository to run Conviso AST after PR merges on every branch matching your AST branch pattern, using only CONVISO_API_KEY.
keywords:
  [
    GitHub AST Orchestrator,
    Application Security Testing,
    GitHub Actions,
    pipeline-orchestrator,
    AST branch pattern,
    multi-branch AST,
    conviso-ast-repository-token,
    Conviso Platform,
  ]
---

# GitHub AST Orchestrator

The Conviso Platform **GitHub AST Orchestrator** runs Conviso AST from **one** GitHub repository (the orchestrator). Application repositories do **not** need a Conviso workflow.

When an eligible pull request is **merged**, Conviso calls GitHub Actions `workflow_dispatch` on the orchestrator and passes the target repository and branch. The workflow obtains a short-lived clone credential from the Platform (using your API key), checks out the target repository, runs `conviso ast run`, and sends findings to the mapped asset.

You do **not** store a GitHub Personal Access Token for cloning.

## How it works

```mermaid
flowchart LR
    A[PR merged on target repo] --> B[Conviso Platform]
    B -->|workflow_dispatch on Ref| C[Orchestrator repo<br/>.github/workflows/ast.yml]
    C -->|conviso-ast-repository-token<br/>GitHub App install token| D[Checkout target repo]
    D --> E[conviso ast run]
    E --> F[Findings on the asset]
```

What Conviso checks before dispatching:

1. The event is a pull request that was **merged** (`action: closed` and `merged: true`).
2. **AST Scans** is enabled on the GitHub integration.
3. The repository is an **imported asset** that is **enabled**.
4. The PR **base branch** matches the configured [AST branch pattern](#ast-branch-pattern).

The Actions run always appears on the **orchestrator** repository (not on the application repository).

:::note
**Execution costs**: Jobs run on your GitHub Actions runners and consume your organization’s Actions minutes.
:::

## Before you begin

Work in this order: **GitHub setup first**, then **Conviso Platform**.

You need:

- [GitHub Integration](./github.md) connected (GitHub App installed).
- At least one application repository **imported as an asset** and **enabled**.
- A dedicated orchestrator repository (or an empty repo you will use only for this). Example / template: [convisoappsec/pipeline-orchestrator](https://github.com/convisoappsec/pipeline-orchestrator).
- Permission to create an **Actions repository secret** on the orchestrator.
- A **Conviso API key** for the same environment you will scan against (production or staging).
- The GitHub App must have access to the **orchestrator** and to every **target** repository you will scan. Prefer **All repositories** on the App installation.

| Term | Exact meaning |
| --- | --- |
| **Orchestrator repository** | GitHub repo that contains `.github/workflows/ast.yml`. Conviso triggers this repo only. |
| **Target repository** | Application repo imported as an asset. It must **not** rely on a local Conviso workflow for this flow. |
| **Ref** | Branch or tag **of the orchestrator** where GitHub loads `ast.yml` when Conviso calls `workflow_dispatch`. If you leave Ref empty in Conviso, dispatch defaults to **`main`**. |
| **AST branch pattern** | Regular expression matched against the merged PR's **base** branch on the **target** repo. Only a branch it matches triggers a scan. See below. |
| **Asset** | Imported repository in Conviso (`owner/repo`) where findings are stored. |

### AST branch pattern

Conviso decides whether a merge triggers a scan by matching the merged PR's **base branch**
against a **regular expression** you configure — the **AST branch pattern**. One pattern can name
several branches (`main|develop`) or a whole family of them (`release/.*`).

Before this, the platform compared that branch to a **single name**, with exact equality. Only two
setups were expressible: one branch, or every branch.

#### Where you set it

| Level | Where | Applies to |
| --- | --- | --- |
| **Repository** | The **Branch pattern** column on the repository table, in the integration's configuration step | That repository only |
| **Integration** | **Branch pattern that runs the AST**, on the integration configuration page | Every repository of this integration that has no pattern of its own |

#### Which one applies

The first level that is configured wins:

1. The repository's own **Branch pattern**.
2. The integration's **Branch pattern that runs the AST**.
3. The integration **Ref** — *legacy fallback*, so nothing changes for a setup that was already using Ref as a branch filter.
4. Nothing configured — **every branch** triggers a scan.

:::note Ref is the orchestrator's branch, not a branch policy
**Ref** means "which branch of the orchestrator repository holds `ast.yml`". It was reused as a branch
filter before the branch pattern existed, and it still is when nothing else is set — but it is no
longer the field to use for branch policy. Set a branch pattern instead, and leave Ref meaning the
one thing it should mean.
:::

#### How a pattern is matched

* **The whole branch name must match.** `main` matches `main` and nothing else — not `maintenance`, not `remain`.
* **A plain branch name behaves exactly as it did before.** Every value already configured in your account keeps meaning exactly what it means today. There is nothing to migrate and nothing you need to do.
* **`|` is how you list branches:** `main|develop|homolog`.
* **The pattern is validated when you save it.** One that does not compile, is longer than 500 characters, or is too slow to evaluate is refused, with the reason shown under the field.
* **A pattern that fails at merge time does not dispatch.** If a stored expression errors or times out while a merge is being evaluated, Conviso skips the scan rather than spending your CI budget on a decision it could not make.

#### Examples

| Pattern | Merges that trigger a scan |
| --- | --- |
| *(nothing set at any level)* | Every branch |
| `main` | `main` only |
| `main\|develop` | `main` and `develop` |
| `release/.*` | Every branch under `release/` |
| `main\|release/.*` | `main`, and every branch under `release/` |
| `main` *(stored before this feature)* | `main` only — unchanged |

#### Running the AST on demand

**Run AST** on the asset offers a **Branch to scan** picker, listing only the branches that match
that asset's pattern. If the pattern matches none of the asset's branches, the button is disabled
and says so — adjust the pattern in the integration settings.

---

## Part 1 – GitHub setup

### Step 1 – Create the orchestrator repository

1. Create a GitHub repository (recommended name: `conviso-ast-orchestrator`), **or** copy from [convisoappsec/pipeline-orchestrator](https://github.com/convisoappsec/pipeline-orchestrator) and keep only `.github/workflows/ast.yml`.
2. Choose the branch that will contain the workflow (almost always **`main`**). That value is what you will set as **Ref** in Conviso.

### Step 2 – Create the `CONVISO_API_KEY` secret

In the **orchestrator** repository (not the target):

1. Open **Settings → Secrets and variables → Actions**.
2. Under **Repository secrets**, create:

| Name | Type | Required |
|------|------|----------|
| `CONVISO_API_KEY` | Repository secret | **Yes** |

Use the API key for the same Conviso environment as the Platform you configured (production vs staging).

*Repository secret `CONVISO_API_KEY` under Settings → Secrets and variables → Actions.*

![Repository secret CONVISO_API_KEY](../../static/img/github/ast-01-actions-secret.png)

:::tip Optional variable
You may add an Actions **variable** `CONVISO_COMPANY_ID`. The workflow uses it only when the `company_id` input is empty (typical for a manual **Run workflow**). When Conviso dispatches after a merge or **Run AST**, it sends `company_id` in the inputs, so the variable is not required for Platform-triggered runs.
:::

Do **not** create a GitHub PAT for clone. The workflow calls `conviso-ast-repository-token --provider github`, and the Platform returns a **GitHub App installation token** scoped to the **single target repository**, with **read-only** contents access, valid for about **one hour**.

### Step 3 – Add `.github/workflows/ast.yml`

GitHub Actions only loads workflows from **`.github/workflows/`**. A file at the repository root is ignored.

:::tip Example repository
Public template: **[convisoappsec/pipeline-orchestrator](https://github.com/convisoappsec/pipeline-orchestrator)**  

Workflow file: [`.github/workflows/ast.yml`](https://github.com/convisoappsec/pipeline-orchestrator/blob/main/.github/workflows/ast.yml)
:::

On the orchestrator branch you will set as **Ref** (usually `main`):

1. Create **`.github/workflows/`** if needed.
2. Create **`ast.yml`** so the full path is exactly **`.github/workflows/ast.yml`**.
3. Paste the YAML below (or copy it from the example repo).

*Orchestrator repository with `.github/workflows/ast.yml` on `main`.*

![`.github/workflows/ast.yml` in the orchestrator repository](../../static/img/github/ast-02-workflows-path.png)

```yaml
name: AST Scan Orchestrator

on:
  workflow_dispatch:
    inputs:
      repo_full_name:
        description: "Repository to scan (owner/repo)"
        required: true
        type: string
      branch:
        description: "Branch to scan"
        required: true
        type: string
      commit_sha:
        description: "Merge commit SHA (post-merge)"
        required: false
        type: string
      pr_number:
        description: "Pull request number (post-merge)"
        required: false
        type: string
      api_url:
        description: "Conviso API URL"
        required: false
        type: string
        default: https://api.convisoappsec.com
      company_id:
        description: "Conviso company id"
        required: false
        type: string
      asset_id:
        description: "Conviso asset id"
        required: false
        type: string
      scan_run_id:
        description: "Scan run id from the platform"
        required: false
        type: string

jobs:
  run-ast-scan:
    runs-on: ubuntu-latest
    container:
      image: convisoappsec/convisoast:latest

    steps:
      - name: Get repository token
        id: repo_token
        env:
          CONVISO_API_KEY: ${{ secrets.CONVISO_API_KEY }}
          API_URL: ${{ inputs.api_url }}
          CONVISO_REPO_FULL_NAME: ${{ inputs.repo_full_name }}
          ASSET_ID: ${{ inputs.asset_id }}
          SCAN_RUN_ID: ${{ inputs.scan_run_id }}
        run: |
          set -euo pipefail
          export CONVISO_API_URL="${API_URL:-https://api.convisoappsec.com}"
          CONVISO_API_URL="${CONVISO_API_URL%/}"
          case "$CONVISO_API_URL" in
            https://app.convisoappsec.com)
              export CONVISO_API_URL="https://api.convisoappsec.com"
              ;;
            https://staging.convisoappsec.com)
              export CONVISO_API_URL="https://api.staging.convisoappsec.com"
              ;;
          esac
          case "${ASSET_ID:-}" in
            ""|none|0) unset CONVISO_ASSET_ID || true ;;
            *) export CONVISO_ASSET_ID="$ASSET_ID" ;;
          esac
          case "${SCAN_RUN_ID:-}" in
            ""|none|0) unset CONVISO_SCAN_RUN_ID || true ;;
            *) export CONVISO_SCAN_RUN_ID="$SCAN_RUN_ID" ;;
          esac
          TOKEN=$(conviso-ast-repository-token --provider github)
          echo "::add-mask::$TOKEN"
          echo "token=$TOKEN" >> "$GITHUB_OUTPUT"
          echo "base_url=$CONVISO_API_URL" >> "$GITHUB_OUTPUT"

      - name: Checkout target repository
        uses: actions/checkout@v6
        with:
          repository: ${{ inputs.repo_full_name }}
          ref: ${{ inputs.branch }}
          fetch-depth: 0
          token: ${{ steps.repo_token.outputs.token }}

      - name: Run Conviso AST
        env:
          CONVISO_API_KEY: ${{ secrets.CONVISO_API_KEY }}
          CONVISO_API_URL: ${{ steps.repo_token.outputs.base_url }}
          CONVISO_COMPANY_ID: ${{ inputs.company_id || vars.CONVISO_COMPANY_ID }}
          ASSET_ID: ${{ inputs.asset_id }}
          SCAN_RUN_ID: ${{ inputs.scan_run_id }}
          CONVISO_BRANCH: ${{ inputs.branch }}
          GIT_CONFIG_COUNT: "1"
          GIT_CONFIG_KEY_0: safe.directory
          GIT_CONFIG_VALUE_0: "*"
        run: |
          set -euo pipefail
          case "${ASSET_ID:-}" in
            ""|none|0) unset CONVISO_ASSET_ID || true ;;
            *) export CONVISO_ASSET_ID="$ASSET_ID" ;;
          esac
          case "${SCAN_RUN_ID:-}" in
            ""|none|0) unset CONVISO_SCAN_RUN_ID || true ;;
            *) export CONVISO_SCAN_RUN_ID="$SCAN_RUN_ID" ;;
          esac
          conviso ast run --repository-dir . --output /tmp/conviso-ast-session.zip

      - name: Upload session log
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: conviso-ast-session
          path: /tmp/conviso-ast-session.zip
          if-no-files-found: ignore
```

4. Commit and push to that **Ref** branch.

:::important
- Path on disk: **`.github/workflows/ast.yml`** only.  
- In Conviso, set the workflow field to the **file name** `ast.yml` (not `.github/workflows/ast.yml`). Conviso normalizes a full path to the basename, but the UI expects the file name used by the GitHub Actions API.  
- This template checks out `inputs.branch` (the PR base branch after merge). Conviso also sends `commit_sha` and `pr_number` for correlation; the template above does not pass `commit_sha` into `actions/checkout`.
:::

---

## Part 2 – Conviso Platform setup

### Step 4 – Configure the orchestrator

1. Open **Integrations → GitHub**.
2. Turn **AST Scans** **on**.  
   (**GitHub Advanced Security** is a separate toggle. It is **not** required for the orchestrator merge flow described here.)
3. Fill **Orchestrator Configuration**:
   - **Orchestrator Repo** — `owner/repo` of the orchestrator.
   - **Workflow Filename or ID** — `ast.yml`.
   - **Ref** — orchestrator branch/tag that contains `.github/workflows/ast.yml` (e.g. `main`). If empty, Conviso dispatches with ref **`main`**.
   - **Branch pattern that runs the AST** — optional regular expression for the branches on the **target** repositories that should trigger a scan, e.g. `main|develop`. Leave it empty to keep using **Ref** as the filter. See [AST branch pattern](#ast-branch-pattern).
4. Save.

![Orchestrator Configuration](../../static/img/github/github-ast-orchestrator.png)

### Step 5 – Assets and branch pattern

1. Confirm each application repository is **imported** and **enabled**.
2. Set **Branch pattern that runs the AST** on the integration page when more than one branch should be scanned — `main|develop`, or `release/.*`.
3. Override it for a single repository from the **Branch pattern** column on the repository table, when that one ships from a different branch than the rest.
4. If you set neither, the integration **Ref** is still used as the filter (legacy behavior); if Ref is empty too, every branch triggers a scan.

See [AST branch pattern](#ast-branch-pattern) for how the expression is matched and validated.

---

## End-to-end flow (after setup)

1. Developer merges a PR into a branch matching the AST branch pattern, on an imported, enabled asset.
2. Conviso validates the event and configuration, then calls `workflow_dispatch` on `owner/orchestrator` / `ast.yml` / **Ref**.
3. Inputs include at least: `repo_full_name`, `branch` (PR base), `commit_sha`, `pr_number`, `api_url`, `company_id`, `asset_id` (blank values may be omitted).
4. Job steps: issue repository token → checkout target at `branch` → run `conviso ast run` → upload session artifact.
5. Findings appear on the asset in Conviso Platform.
6. In GitHub, open the **orchestrator** → **Actions** → **AST Scan Orchestrator** to inspect the run.

## Validation checklist

| Check | Expected |
|-------|----------|
| Secret | `CONVISO_API_KEY` exists on the orchestrator |
| Path | `.github/workflows/ast.yml` is on the **Ref** branch |
| Conviso | Orchestrator `owner/repo` + `ast.yml` + Ref saved; **AST Scans** on |
| Asset | Target repo imported, enabled; the merged branch matches the AST branch pattern (repository level, integration level, or Ref as the legacy fallback) |
| After merge | New run under orchestrator **Actions**; findings (or a clean result) on the asset |

*Successful orchestrator run: Get repository token → Checkout → Run Conviso AST.*

![Successful AST Scan Orchestrator Actions run](../../static/img/github/ast-03-actions-run-success.png)

*Scan result on the asset in Conviso Platform (Conviso AST).*

![Successful Conviso AST scan on the Platform](../../static/img/github/ast-04-platform-scan-result.png)

Manual test (optional): on the orchestrator, **Actions → AST Scan Orchestrator → Run workflow**. Set `repo_full_name` and `branch` to an imported asset. Set `api_url` if you are not on production defaults. Set `company_id` or define `CONVISO_COMPANY_ID`.

## Troubleshooting

| Symptom | Cause / fix |
|---------|-------------|
| Merge done, no Actions run | **AST Scans** off; orchestrator fields incomplete; asset disabled or not imported; the merged branch does not match the AST branch pattern; GitHub App cannot see the repos |
| A branch you expected to scan is skipped | The pattern does not match the whole branch name. `main` does not match `main-hotfix`; use `main.*` if that is what you meant. Check the repository pattern first — it overrides the integration's |
| No branch scans any more, after editing a pattern | A stored pattern that fails to compile or times out is treated as "do not dispatch". Reopen the field, save a valid expression, and confirm it is accepted |
| The pattern is refused when you save it | It does not compile, is longer than 500 characters, or is too slow to evaluate. The reason is shown under the field |
| **Run AST** is disabled on the asset | The pattern matches none of the asset's branches. Adjust it in the integration settings |
| Workflow never listed | File not under `.github/workflows/`, or not on the **Ref** branch Conviso uses |
| Token step fails (HTTP 4xx) | `repo_full_name` not an imported asset for that API key/company; wrong environment (`CONVISO_API_KEY` vs `api_url`) |
| Checkout 403 | GitHub App lacks access to the **target** repository |
| Scanner missing `CONVISO_COMPANY_ID` | Manual run without `company_id` input and without variable `CONVISO_COMPANY_ID` |
| Wrong code scanned | `branch` input mismatch; confirm you merged into a branch the AST branch pattern matches |

## Related guides

- [Example orchestrator repository (pipeline-orchestrator)](https://github.com/convisoappsec/pipeline-orchestrator)
- [GitHub Integration](./github.md)
- [GitHub PR Scans](./github-pr-scans.md)
- [Conviso AST](../security-scans/conviso-ast/conviso-ast.md)
