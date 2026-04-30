---
id: azure-devops-pr-scans
title: Azure DevOps PR Scans
sidebar_label: PR Scans
description: Enable automated security scanning for Azure DevOps Pull Requests with diff-based analysis.
keywords: [Azure DevOps, PR Scans, Pull Request, SAST, Application Lifecycle Management]
---

# Azure DevOps PR Scans

The Conviso Platform **PR Scans** for Azure DevOps provide automated security feedback directly in Pull Requests.

When a developer creates or updates a PR, the platform detects the event and runs a scan focused on the PR context, then publishes status and findings back to the PR timeline.

## Key Benefits

- **Native PR feedback:** Security status is posted in Azure DevOps PR checks.
- **Automated execution:** No manual trigger is required for each PR update.
- **Developer-friendly output:** Findings are summarized as a PR comment with severity and code context.
- **Fast remediation loop:** New commits in the same PR trigger a new scan cycle.

---

## Prerequisites

Before enabling PR Scans, ensure that:

1. Your **[Azure DevOps integration](./azure-devops.md)** is already configured and connected.
2. Repositories are imported and mapped as assets in the integration configuration.
3. You have permission to edit integration settings in Conviso Platform.

---

## Enabling PR Scans

### Step 1 - Open Azure DevOps Integration

1. Go to **Integrations** in Conviso Platform.
2. Open the configured **Azure DevOps** integration.
3. Go to the **Configuration** step.

### Step 2 - Enable PR Scans Toggle

1. Locate the **PR Scans** toggle.
2. Turn it **On** to activate PR scan automation.

### Step 3 - Validate Repository Mapping

Ensure the target repositories are present and enabled in the configuration table.  
PR scans only run for repositories that are part of the integration scope.

:::info
Changes take effect for new PRs and new commits pushed to existing PRs.
:::

---

## Developer Workflow

### 1. Trigger

A scan is triggered when:

- A Pull Request is created.
- New commits are pushed to an open Pull Request.

### 2. Status Check

Conviso posts a PR status in Azure DevOps while the scan is running (`pending`) and updates it when processing finishes.

### 3. Findings Comment

After completion, Conviso updates a PR comment with:

- Severity summary (Critical, High, Medium, Low).
- Vulnerability details with file and line context.
- Guidance for remediation.

### 4. Re-scan Cycle

If the developer pushes a fix, the PR is scanned again and the status/comment are updated.

---

## PR Scans vs AST Orchestrator

Conviso offers two complementary Azure DevOps security flows:

| Feature | PR Scans | AST Orchestrator |
| :-- | :-- | :-- |
| Primary goal | Fast PR feedback | Merge/branch pipeline execution |
| Trigger source | PR create/update events | Pipeline configuration on Azure DevOps |
| Typical scope | Pull Request context | Configurable by pipeline strategy |
| Setup effort | Low (toggle in integration) | Requires orchestrator pipeline setup |

For orchestrator setup, see **[Azure DevOps AST Orchestrator](./azure-devops-ast-orchestrator.md)**.

---

## Troubleshooting

### PR scan did not trigger

Check:

1. **PR Scans** toggle is enabled in integration configuration.
2. The repository is authorized/imported in Azure DevOps integration.
3. The PR event reached the platform and worker processing completed.

### Status or comment not updated

Check:

1. Integration credentials and permissions are still valid.
2. The repository remains mapped and active in Conviso configuration.
3. There were no processing errors in background workers.

---

## Support

If PR scans are not triggering or results look inconsistent, contact Conviso support with:

- Integration ID
- Repository full name
- Pull Request number
- Approximate event timestamp
