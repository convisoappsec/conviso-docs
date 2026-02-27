---
id: role-based-guide-devsecops
title: DevSecOps Guide
sidebar_label: DevSecOps
---

## Objective

Operate AppSec in delivery pipelines with high reliability, low friction, and clear policy enforcement.

## Main responsibilities

- Integrate scanners in CI/CD.
- Enforce security gates by policy.
- Keep automation stable and observable.
- Ensure findings flow to the right teams/channels.

## Follow-up routine

1. Validate pipeline security jobs and failed runs.
2. Check gate failures by repository/team.
3. Review scanner coverage (projects/assets onboarded).
4. Verify alert routing (Slack/Teams/Jira/etc.).
5. Tune gate policies using recent false-positive/false-negative feedback.
6. Audit integration health and tokens/credentials.
7. Review CLI and scanner versions.
8. Publish a reliability summary for security workflows.

## Core workflows in Conviso

- Configure integrations: [Integrations](../integrations/integrations_intro)
- Manage security gates: [Security Gate](../platform/security-gate)
- Monitor findings backlog: [Vulnerabilities](../platform/vulnerabilities)

## Defect tracker integration

Integrate Conviso Platform with your issue management tool using [Defect/Bug Tracking integrations](../integrations/integrations_intro) to synchronize and manage vulnerabilities in your team workflow.

## Decision support with Dashboard

Use the [Dashboard](../platform/dashboard) as a management layer to track indicators, identify trends, and decide where to act first (for example: unstable pipelines, low scan coverage, or backlog growth).

## Automation with CLI and API

Use [New CLI](../new-cli) and [API](../api/api-overview) to automate repetitive security operations in pipelines, orchestrate scan executions, and standardize security checks across repositories.

## Management and collaboration tool

- Notifications and follow-up signals: [Notifications Center](../platform/notifications-center)

## Recommended KPIs

- Pipeline security job success rate.
- Mean time to recover failed security stage.
- Security gate block rate (trend).
- Percent of repositories with active security scan coverage.

## Playbooks

### Gate is blocking too much

1. Identify top failing rules.
2. Validate if failures are true positives.
3. Adjust severity thresholds or exception flow.
4. Re-check impact after one sprint.

### Scanner results stopped arriving

1. Validate integration credentials and webhook/app status.
2. Re-run a known project pipeline.
3. Inspect CLI/scanner logs.
4. Confirm issues are ingested in Conviso Platform.
