---
id: role-based-guide-appsec-engineer
title: AppSec Engineer Guide
sidebar_label: AppSec Engineer
---

## Objective

Improve application security by triaging findings, reducing risk, and guiding developers with practical remediation.

## Main responsibilities

- Analyze and triage vulnerabilities.
- Define remediation guidance and priorities.
- Validate fix effectiveness and closure behavior.
- Maintain secure engineering standards with product teams.

## Follow-up routine

1. Triage new critical/high findings.
2. Validate duplicates and false positives.
3. Prioritize exploitable issues with business context.
4. Follow-up on overdue remediation.
5. Review recurring vulnerability classes.
6. Review threat models for critical flows and update assumptions when architecture changes.
7. Propose detection/policy improvements.
8. Review exception/risk acceptance usage.
9. Share remediation patterns with engineering teams.

## Core workflows in Conviso

- Run and review security scans: [Scanning your Application (Conviso AST)](../security-scans/conviso-ast)
- Vulnerability lifecycle: [Vulnerabilities](../platform/vulnerabilities)
- Project context and scope: [Projects](../platform/projects)
- Requirement tracking and validation: [Requirements](../platform/requirements)
- Secure design context: [Threat Modeling](../platform/threat-modeling)

## Defect tracker integration

Integrate Conviso Platform with your issue management tool using [Defect/Bug Tracking integrations](../integrations/integrations_intro) to synchronize and manage vulnerabilities in your team workflow.

## Automation with CLI and API

Use [New CLI](../new-cli) and [API](../api/api-overview) to automate scan and triage flows, accelerate recurring analysis tasks, and integrate security validation with your engineering workflows.

## Management and collaboration tool

- Notifications for triage, status changes, and follow-up actions: [Notifications Center](../platform/notifications-center)

## Recommended KPIs

- MTTR by severity.
- Reopen rate of closed vulnerabilities.
- Ratio of true positives vs. false positives.
- SLA adherence by squad/repository.

## Playbooks

### Critical finding in internet-facing asset

1. Validate technical details and exploitability.
2. Escalate to service owner and manager.
3. Apply temporary mitigation if needed.
4. Track fix and verify closure in next scan.

### Recurrent issue pattern

1. Group similar findings.
2. Identify missing engineering control.
3. Create shared remediation guidance.
4. Validate reduction in next cycles.
