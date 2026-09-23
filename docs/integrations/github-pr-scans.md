---
id: github-pr-scanning
title: Automated PR Scanning
sidebar_label: Automated PR Scanning
description: Enable zero-configuration security scanning for GitHub Pull Requests.
keywords: [GitHub, PR Scanning, SAST, Automated Security, Pull Request, DevOps]
---

# Automated PR Scanning

The Conviso Platform **Automated PR Scanning** provides instant security feedback directly within your GitHub Pull Requests. unlike traditional CI/CD setups that require manual pipeline configuration, this feature is fully managed and automated.

When a developer opens or updates a Pull Request, the Conviso Platform automatically detects the changes and analyzes **only the modified files**. This ensures rapid feedback, allowing developers to identify and fix security issues before code is merged.

## Key Benefits

- **Zero Configuration:** No need to write YAML files, configure GitHub Actions, or set up CI/CD pipelines in every repository.
- **Speed:** The scanner uses **differential analysis**, focusing strictly on changed files to deliver results in minutes.
- **Native Integration:** Findings appear as a GitHub Check and a canonical PR comment, and the check can automatically block merges based on your **[Security Gate](../security-scans/security-gate.md)** configuration.
- **Delta-aware Verdict:** Only the vulnerabilities the Pull Request actually introduces are evaluated against your Security Gate — pre-existing findings already on the target branch do not count against the PR by default.
- **Durable History:** Every scan is recorded as an immutable **PR Run** you can revisit, with retained findings available for **21 days** — see **[Pull Request Run History](../security-scans/pull-requests/pr-runs.md)**.
- **Secure Execution:** Scans run in an ephemeral, isolated environment managed by Conviso, preserving your CI/CD minutes.

:::info Rollout
The durable, delta-aware experience described on this page is currently available for GitHub-connected repositories and is being rolled out progressively. Other providers keep the previous PR scanning behavior until parity ships.
:::

---

## Prerequisites

Before enabling PR Scanning, ensure that:

1. You have successfully configured the basic **[GitHub Integration](./github.md)**.
2. You have **Administrator** access to the Conviso Platform to adjust integration settings.
3. Your repositories are **Mapped to Assets** within the Conviso Platform.

---

## Enabling PR Scanning

To activate automated scanning for your organization:

### Step 1 - Access Integration Settings

Navigate to the **Integrations** page in the Conviso Platform, locate your active **GitHub** integration, and click **Edit/Configure**.

### Step 2 - Activate the Feature

Scroll to the configuration section and toggle **Pull Request Scanning** to **On**.

![img](../../static/img/github/pr-scanning-toggle.png)

### Step 3 - Repository Level Control

Once the global setting is enabled, you can control which specific repositories are scanned via the **Asset Mapping** table on the integration page.

- **Enable Scanning:** Ensure the **Status** toggle is active for the specific asset/repository.
- **Disable Scanning:** If you disable a specific repository mapping, PRs for that repository will be ignored.

:::info
Changes to these settings take effect immediately for all new Pull Requests or new commits pushed to existing PRs.
:::

---

## The Developer Workflow

Once enabled, the security workflow integrates seamlessly into the developer's daily routine.

### 1. Triggering a Scan

The process begins automatically when a developer:

- Opens a new Pull Request.
- Pushes new commits to an existing Pull Request.

### 2. GitHub Check

Immediately after the PR is updated, a **Conviso** Check run appears in the PR timeline as **Queued**, then **In progress**. It links to the corresponding **PR Run** in the Conviso Platform for full details.

:::tip Blocking Merges
We recommend configuring your GitHub **Branch Protection Rules** to require the Conviso Check to pass before merging. This ensures your configured Security Gate policy is enforced before code reaches your main branch.
:::

### 3. Reviewing Results

Once the scan completes (typically within a few minutes), the Check updates to reflect the **Security Gate** verdict for the findings the PR introduces:

- **✅ Passed:** No new finding exceeds your configured thresholds.
- **⚠️ Warning:** New findings exceed the configured quantity threshold, but none are past their `Max Days to Fix` grace period yet.
- **❌ Failed:** At least one new finding exceeds a configured threshold or aging rule.
- **Not evaluated:** No relevant changes were scanned, or no Security Gate rule/entitlement applies. This is never rendered as a pass or a fail.
- **Action required:** A technical scan or infrastructure error occurred — distinct from a Security Gate failure, so developers never confuse "we couldn't scan this" with "this code is unsafe".

Only vulnerabilities the Pull Request **introduces** are evaluated: the scan compares the PR's head against its target branch, so pre-existing findings already open on the target branch do not count against the PR by default. See [How Findings Are Evaluated](../security-scans/pull-requests/pull-requests.md#how-findings-are-evaluated) for details.

In addition to the Check, the **Conviso Bot** posts one canonical comment on the PR summarizing the result. The same comment is updated in place on every new commit, instead of being deleted and recreated.

![img](../../static/img/github/pr-comment-example.png)

The comment provides:

- **Summary:** The Security Gate result and a count of new Critical, High, Medium, and Low findings.
- **Evidence:** The specific file path, line number, and a snippet of the code causing the vulnerability.
- **Description:** An explanation of the vulnerability type (e.g., SQL Injection, Hardcoded Secret) to help the developer understand the risk.
- **Run link:** A link to the full **PR Run** details in the Conviso Platform, including retained findings, logs, and the Security Gate reason breakdown.

If an attempt is stale by the time it finishes — because a newer commit was already pushed — it is marked **Superseded** and never overwrites the Check or comment for the current head.

### 4. Remediation

Because feedback is provided immediately:

1. The developer reads the finding in the PR comment or the linked PR Run.
2. They push a fix to the branch.
3. The system automatically detects the update and **re-scans** the code as a new immutable attempt.
4. If the issue is resolved, the Check turns green.

If a scan needs to be re-run without a new commit — for example after a transient infrastructure error — open the **PR Run** in the Conviso Platform and use **Retry scan**. This creates a new attempt linked to the original; it never overwrites history.

---

## FAQ

### Automated Scanning vs. AST Orchestrator

The Conviso Platform offers two ways to scan GitHub repositories. Choose the one that fits your needs:

| Feature                   | Automated PR Scanning                 | AST Orchestrator                    |
| :------------------------ | :------------------------------------ | :---------------------------------- |
| **Setup**                 | **Zero Config** (Toggle On)           | **Low Config** (Requires YAML file) |
| **Execution Environment** | Conviso Cloud (SaaS)                  | Your GitHub Actions Runners         |
| **Cost**                  | Included in Platform                  | Consumes your GitHub Action Minutes |
| **Scan Scope**            | **Differential** (Changed files only) | **Full Scan** (Entire repository)   |
| **Use Case**              | Rapid feedback during Code Review     | Deep analysis & Compliance          |

:::note
**Automated PR Scanning** is designed for speed and "Shift-Left" security during the code review process. It does not replace the need for occasional full-repository scans, which can be handled by the Orchestrator or Scheduled Scans.
:::

### Why are checks or comments not appearing in my PR?

If you opened a PR but do not see the "Conviso Security Check" or any comments from the bot, please verify the following:

1.  **Is the feature enabled?** Go to the GitHub Integration page in Conviso Platform and confirm that **Pull Request Scanning** is toggled **On**.
2.  **Is the specific repository allowed?** Check the "Asset Mapping" table in the integration settings. The specific repository must be mapped to an asset, and its **Status** toggle must be active.
3.  **Are permissions correct?** Ensure the installed **Conviso Application Security** GitHub App has the necessary permissions (specifically `read` and `write` access to Pull Requests and Commit Statuses). You may need to update the app permissions in your GitHub Organization settings.

### I already have a pipeline step running Conviso AST. What happens if I enable PR Scanning?

They operate independently. **Automated PR Scanning** triggers exclusively on Pull Request events (via the GitHub App), while your existing CI/CD pipeline triggers based on your YAML configuration (e.g., `on: push` or `on: pull_request`).

If your pipeline is also configured to run on PRs, **both might run simultaneously**. This is okay and often desired:

- **PR Scanning** provides immediate, focused feedback on the "diff" directly in the PR interface.
- **Pipeline AST** ensures compliance and might run a full repository scan or specific policies required for deployment.

You can choose to keep both for maximum coverage or adjust your pipeline to run only on the main branch (e.g., `on: push` to `main/master`) if you want to avoid duplicate checks during Code Review.

## Support

If scans are not triggering or you are receiving unexpected errors, please verify that your [GitHub App permissions](./github.md) are up to date, or contact our support team for assistance.
