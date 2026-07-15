---
id: gitlab-ast-orchestrator
title: GitLab AST Orchestrator
sidebar_label: AST Orchestrator
description: Configure a centralized GitLab CI project to run Conviso AST after merges.
keywords: [GitLab AST Orchestrator, Application Security Testing, GitLab CI, Conviso Platform]
---

# GitLab AST Orchestrator

The **GitLab AST Orchestrator** centralizes AST scanning in one GitLab project. After a merge request is **merged**, Conviso triggers a pipeline in that project with the target repository and commit information.

You do **not** need Conviso CI YAML in every application repository.

:::note
**Execution costs:** Pipelines run on your GitLab runners and consume your CI minutes.
:::

## Prerequisites

1. [GitLab ALM integration](./gitlab-repositories.md) configured.
2. **AST scans on merge** enabled in the integration.
3. A GitLab project that will host the orchestrator `.gitlab-ci.yml` (Recommended name: `conviso-ast-orchestrator`).
4. Your GitLab user (OAuth) can create pipelines on that project and set **pipeline variables** (see [Pipeline variables policy](#pipeline-variables-policy)).

## Configure the orchestrator in Conviso

1. Open **Integrations** → **GitLab** → **Configuration**.
2. Under **Orchestrator pipeline**, set:
   - **Project ID** – numeric GitLab project ID of the orchestrator.
   - **Ref** – branch/tag that contains the CI file (e.g. `main`). This ref is also used as the expected **merge target** branch filter when asset-level branch is not set.
3. Click **Save**.
4. Enable **AST scans on merge**.

The Project ID is shown in GitLab under the orchestrator project → **Settings → General**:

*Find the numeric Project ID in GitLab General settings.*

![GitLab Settings - Project ID](../../static/img/gitlab-alm/ast-01b-gitlab-project-id.png)

Then paste it into Conviso and set the ref:

*Orchestrator pipeline – Project ID, Ref, and Save.*

![Orchestrator pipeline configuration in Conviso](../../static/img/gitlab-alm/ast-01-orchestrator-config.png)

Enable **AST scans on merge** on the same Configuration page (see the toggles above the assets table in the [GitLab integration guide](./gitlab-repositories.md#step-4--configuration)).

## CI/CD variables (orchestrator project)

In the orchestrator project → **Settings → CI/CD → Variables**, create:

| Variable | Description |
|----------|-------------|
| `CONVISO_API_KEY` | Conviso API key (**Masked**, preferably **Protected**). |
| `GITLAB_TOKEN` | Token that can **read/clone** the target repositories (scope **`read_repository`**). **Masked**, preferably **Protected**. |

*CI/CD Variables with `CONVISO_API_KEY` and `GITLAB_TOKEN` (values masked).*

![CI/CD Variables - CONVISO_API_KEY and GITLAB_TOKEN](../../static/img/gitlab-alm/ast-03-ci-variables.png)

### Clone token (read repository)

The orchestrator job needs to **clone** each scanned repository. Set `GITLAB_TOKEN` to a credential with **read access to the repository** — not admin rights and not full `api` write access.

Typical options (pick what your security policy allows):

| Option | When to use |
|--------|-------------|
| **Project Access Token** | Scoped to one project; good for a single app repo. |
| **Group Access Token** | Scoped to a group; good when many repos share a group. |
| **Personal Access Token (PAT)** | Example / fallback when group/project tokens are not available. Many companies restrict PATs — then use Project/Group Access Token instead. |
| **Deploy Token** | Read-only clone credentials on a project/group, when allowed in your GitLab plan. |

**Minimum capability:** able to clone the target repos over HTTPS (GitLab scope **`read_repository`** or equivalent deploy-token read access).

:::info
Conviso only needs that clone to run the scan. `GITLAB_TOKEN` lives in **your** orchestrator CI/CD variables — you can replace or rotate it at any time without changing the Conviso integration.
:::

## Pipeline template (`.gitlab-ci.yml`)

Create (or update) `.gitlab-ci.yml` on the orchestrator project branch configured as **Ref** (e.g. `main`). You can copy the template below for **Conviso production**.

```yaml
variables:
  CONVISO_API_URL: "https://api.convisoappsec.com"

stages:
  - orchestrator

conviso-ast:
  stage: orchestrator
  image: convisoappsec/convisoast:3.0.3
  services:
    - name: docker:24-dind
      alias: docker
  variables:
    DOCKER_HOST: tcp://docker:2375
    DOCKER_TLS_CERTDIR: ""
  rules:
    - if: $repo_full_name
  script:
    - |
      set -euo pipefail
      export CONVISO_API_URL="${api_url:-$CONVISO_API_URL}"

      WORKDIR="/tmp/target"
      rm -rf "$WORKDIR" && mkdir -p "$WORKDIR" && cd "$WORKDIR"

      git clone "https://oauth2:${GITLAB_TOKEN}@gitlab.com/${repo_full_name}.git" .
      git fetch origin "$commit_sha" --depth=50
      git checkout "$commit_sha"
      PREV="$(git rev-parse "${commit_sha}^" 2>/dev/null || echo "$commit_sha")"

      conviso ast run \
        --asset-name "$repo_full_name" \
        --current-commit "$commit_sha" \
        --previous-commit "$PREV" \
        --vulnerability-auto-close
```

:::tip
`CONVISO_API_URL` defaults to production (`https://api.convisoappsec.com`), the same pattern as the [Azure DevOps AST Orchestrator](./azure-devops-ast-orchestrator.md). When Conviso triggers the pipeline it may also send `api_url`; the script prefers that value if present.
:::

Conviso injects when triggering: `repo_full_name`, `branch`, `commit_sha`, `mr_iid`, `api_url`.

## Pipeline variables policy

If trigger fails with **Insufficient permissions to set pipeline variables**, open the orchestrator project → **Settings → CI/CD → Variables** and set **Minimum role to use pipeline variables** to **Developer** or **Maintainer**. The GitLab user connected via OAuth must have at least that role on the orchestrator project.

*Minimum role to use pipeline variables set to Developer.*

![Pipeline variables minimum role](../../static/img/gitlab-alm/ast-04-pipeline-variables-role.png)

## How the flow works

1. A merge request is **merged** in an imported GitLab project.
2. Conviso triggers a pipeline on the orchestrator project with repository and commit variables.
3. The `conviso-ast` job clones the target repository and runs `conviso ast run`.
4. Findings are sent to the mapped asset in Conviso Platform.

## Validation

1. Merge an MR into the branch configured as ref / asset default.
2. Confirm a new pipeline appears on the orchestrator project with the `conviso-ast` job.

*Orchestrator pipeline with the `conviso-ast` job passed.*

![Orchestrator pipeline - conviso-ast passed](../../static/img/gitlab-alm/ast-05-orchestrator-pipeline.png)

3. Confirm the job log shows scans completing and data sent to Conviso Platform.

*Successful `conviso-ast` job log.*

![Orchestrator job log - Job succeeded](../../static/img/gitlab-alm/ast-05b-orchestrator-job-log.png)

4. Confirm results in Conviso Platform for that asset.

## Troubleshooting

| Problem | What to do |
|--------|------------|
| Merge happened but no pipeline | Confirm **AST scans on merge** is on, Project ID/Ref saved, asset active, and merge target matches **Ref** / asset branch. |
| **Insufficient permissions to set pipeline variables** | Set minimum role to Developer/Maintainer (see above) and ensure the OAuth user has that role. |
| Git clone fails | Validate `GITLAB_TOKEN` can clone the target repos (`read_repository` / Download). |
| `Invalid API key` or AST auth errors | Confirm `CONVISO_API_KEY` belongs to the same environment as `CONVISO_API_URL` (production: `https://api.convisoappsec.com`). |

## Related guides

- [GitLab Integration](./gitlab-repositories.md) (includes **Scans on merge requests**)
- [GitLab CI/CD (per-repo pipeline)](./gitlab.md)
