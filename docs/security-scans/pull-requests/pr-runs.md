---
id: pr-runs
title: Pull Request Run History
sidebar_label: Run History
description: Inspect the durable history of every Pull Request scan and Security Gate verdict for an asset, including retained findings and evidence retention windows.
keywords: [pull request runs, PR history, security gate, GitHub checks, evidence retention]
---

## Overview

Every Pull Request scan the Conviso Platform performs is recorded as a durable, immutable **PR Run** — a scan execution, its retained findings, and its Security Gate verdict, all queryable long after the check on the Pull Request has finished. A later push to the same PR creates a new run rather than overwriting the previous one, so the full attempt history stays auditable.

:::info Availability
PR Run history is currently available for GitHub-connected repositories. Other providers continue to use the existing Pull Request scanning flow described in [Pull Request Scanning](./pull-requests.md) until parity ships.
:::

## Accessing PR Runs

Open the target asset and select the **Pull Requests** tab. The tab only appears for assets where this feature is enabled (see [Enabling PR Scanning](../../integrations/github-pr-scans.md#enabling-pr-scanning)).

The tab lists every recorded run for that asset, most recent first.

## The Run List

| Column | Description |
| --- | --- |
| **Pull request** | PR number, provider, and repository, linking back to the Pull Request on GitHub. |
| **Head → target** | Short SHA of the head commit that was scanned and the target branch it was compared against. |
| **Execution** | Technical outcome of the scan attempt (see [Execution States](#execution-states)). |
| **Security Gate** | Passed, Warning, or Failed, or a not-evaluated state (see [How the Verdict Is Determined](#how-the-verdict-is-determined)). |
| **New findings** | Count of findings the Platform evaluated as newly introduced by the PR. |
| **Duration** | How long the run took to complete. |
| **Created** | When the run was accepted. |

Use the filter bar to search by **pull request number or head SHA**, and to narrow the list by **provider**, **execution state**, **Security Gate status**, or a **started after** date.

Selecting a row opens the run's detail page.

### Execution States

| State | Meaning |
| --- | --- |
| **Requested / Queued / Running** | The run has been accepted and is in progress. |
| **Completed** | The scan finished and its findings were processed. |
| **Scan error** | A technical or infrastructure failure occurred. This is independent of the Security Gate result — a scan error is never displayed as an unsafe or a passing PR. |
| **Cancelled** | The run was cancelled before completion. |
| **Superseded** | A newer commit was pushed before this attempt finished; it was retained for history but never published to the PR. |
| **Stale / Lost / Dead lettered** | The Platform's watchdog detected the run stalled, lost contact with its job, or exhausted delivery retries, and closed it out instead of leaving the PR check pending indefinitely. |

## Run Details

The detail page groups information into:

- **Scan execution** — technical state, scanner image, ruleset, and the timestamps for when the run was created, finished, and published, plus its duration.
- **Security Gate** — the pass/warning/fail result, the reason breakdown by severity, and which configuration (asset or company) and rule were evaluated. If the run has no Security Gate evaluation, the detail page states why (no relevant changes, no configured rule, or no entitlement) rather than implying a pass.
- **Target** — the repository, target branch, and the exact head and target commits the analyzer diffed against.
- **Findings** — the retained findings for the run: severity, name, file, vulnerable line, rule, and whether it was excepted from the Security Gate evaluation.

### Retrying a Run

Use **Retry scan** on the detail page to create a new immutable attempt for the current Pull Request head — useful after a transient scan error. The retry is linked to the original run so the attempt history remains traceable; it does not modify or replace it.

### Evidence Retention

Findings and logs for a PR Run are retained for **21 days** after completion. After that window, the detail page shows that detailed evidence has expired, while the run and Security Gate audit summary — including the verdict and the reason breakdown — remain available for as long as the run itself exists.

## How the Verdict Is Determined

The Security Gate result shown here is evaluated the same way as any other Security Gate execution: against your asset-level configuration when one exists, or your company-wide configuration otherwise. Only findings the Pull Request **introduces**, relative to its target branch, are counted by default. For the full configuration model — severity thresholds, `Max Days to Fix`, and asset vs. company rules — see the [Security Gate guide](../security-gate.md).

## Support

If you have questions about a specific run or the Security Gate result it received, contact our [support team](mailto:support@convisoappsec.com).
