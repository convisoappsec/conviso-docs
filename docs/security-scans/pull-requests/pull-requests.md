---
id: pull-requests
title: Pull Request Scanning
sidebar_label: Pull Requests
---

## Introduction

Securing your application starts at the earliest stages of the software development lifecycle (SDLC). By analyzing code changes before they are merged into the main branch, teams can identify and fix security vulnerabilities, insecure coding practices, and other potential risks before they impact production.

**Pull Request (PR) Scanning** is a core capability within the Conviso Platform designed to embrace the "Shift-Left" security methodology. It automatically inspects only the modified lines of code in a Pull Request, providing developers with rapid, actionable feedback directly within their familiar code review environments.

## The Importance of PR Scanning

Integrating security into the Pull Request process offers several critical advantages:
- **Instant Feedback:** Developers receive immediate alerts on the code they just wrote, when the context is still fresh in their minds.
- **Preventative Security:** Vulnerabilities are blocked from ever reaching the main branch or production environment.
- **Efficiency:** Differential scanning (analyzing only changed files) is significantly faster than running full repository scans, ensuring that CI/CD pipelines are not delayed.
- **Developer Enablement:** Security becomes an organic part of the code review process. Actionable remediation advice is provided exactly where developers collaborate.

## How Pull Request Scanning Works

Unlike traditional, time-consuming full scans, PR Scanning leverages differential analysis. The process is fully automated and follows this general workflow:

1. **Trigger:** A developer opens a new Pull Request or pushes new commits to an existing one.
2. **Detection:** The Conviso Platform automatically detects the event via the configured integration.
3. **Differential Scan:** The scanning engine isolates and analyzes **only the modified files** introduced by the PR, comparing the PR's head against its target branch.
4. **Security Gate Verdict:** The Platform evaluates the vulnerabilities the PR introduces against your configured [Security Gate](../security-gate.md) policy and publishes a **Pass**, **Warning**, or **Fail** result back to the Pull Request as a status check or comment, together with the exact vulnerability, line of code, and remediation guidance.
5. **Remediation:** The developer pushes a fix, which automatically triggers a new scan attempt. Once the gate passes, the PR can be safely merged.

### How Findings Are Evaluated

PR Scanning is **delta-aware**: the scan compares the PR's head commit against its target branch, so only vulnerabilities the PR actually **introduces** are counted. Vulnerabilities that already existed on the target branch before the PR do not block it by default — developers are not asked to fix unrelated, pre-existing debt just to merge their change.

The pass/warning/fail decision itself reuses your existing [Security Gate](../security-gate.md) configuration — the same severity and aging thresholds you already use for CI/CD — so a repository does not need a second, separate policy for Pull Requests. An asset-level Security Gate configuration takes precedence over the company-wide one, exactly as it does elsewhere.

Every scan is retained as a durable, immutable **PR Run**, so you can review its findings, the exact Security Gate reason, and re-run it later. See [Pull Request Run History](./pr-runs.md) for how to inspect this history in the Platform.

## Supported Integrations

The Conviso Platform seamlessly integrates with major Application Lifecycle Management (ALM) and version control systems to provide native PR Scanning experiences.

### GitHub Integration

By integrating with GitHub, you can enable zero-configuration Automated PR Scanning. When activated, Conviso publishes a GitHub Check for every PR head and posts one canonical comment summarizing the Security Gate result, acting as an automated security reviewer.

To enable this, navigate to the GitHub Integration settings in the Conviso Platform and toggle the **PR Scans** option.

<div style={{textAlign: 'center' , maxWidth: '80%', margin: '0 auto'}}>

![GitHub PR Scans Configuration](./github-scan.png "GitHub PR Scans Configuration")

</div>

For detailed instructions on configuring this feature, refer to the [Automated PR Scanning for GitHub](../../integrations/github-pr-scans.md) documentation.

### Azure DevOps Integration

Similar to GitHub, the Conviso Platform integrates with Azure DevOps to provide PR scanning capabilities within your Azure Repos. By configuring the integration, Azure DevOps pipelines can trigger differential scans on Pull Requests, ensuring that any code merged into your protected branches meets your organization's security standards.

For more information on setting up Azure DevOps, please refer to the [Azure DevOps Integration](../../integrations/azure-devops.md) documentation.

## Best Practices for PR Scanning

To get the most out of PR Scanning, consider the following best practices:

- **Enforce Branch Protection:** Configure your repository settings (e.g., GitHub Branch Protection Rules or Azure DevOps Branch Policies) to require the Conviso Security Check to pass before a Pull Request can be merged.
- **Address Findings Promptly:** Encourage developers to treat security findings as critical bugs that must be resolved prior to merge.
- **Combine with Full Scans:** While PR Scanning is excellent for rapid feedback on incremental changes, it should be complemented by scheduled, full-repository scans (using [Conviso AST](../conviso-ast/conviso-ast.md)) to ensure comprehensive coverage.

## Support

If you need assistance configuring Pull Request scanning or have questions about how to optimize your integration workflow, please contact our support team.
