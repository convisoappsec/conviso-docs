---
id: role-based-guide-developer
title: Developer Guide
sidebar_label: Developer
---

## Objective

Ship features with security built into day-to-day development, reducing rework and fixing issues early in the lifecycle.

## Main responsibilities

- Follow secure coding practices in feature implementation.
- Validate code changes with security checks before merge.
- Fix vulnerabilities with clear prioritization and ownership.
- Keep requirements and evidence updated during remediation.

## Follow-up routine

1. Run security checks on feature branches.
2. Review newly assigned vulnerabilities.
3. Prioritize fixes by severity and exploitability.
4. Validate remediation with retest or new scan execution.
5. Keep issue tracker tickets synchronized with fix status.
6. Update implementation notes for recurring findings.
7. Escalate blockers that depend on architecture or platform teams.
8. Share lessons learned with the squad.

## Core workflows in Conviso

- Run and review security scans: [Scanning your Application (Conviso AST)](../security-scans/conviso-ast)
- Remediation tracking: [Vulnerabilities](../platform/vulnerabilities)
- Project context and ownership: [Projects](../platform/projects)
- Secure requirements and validation flow: [Requirements](../platform/requirements)

## Defect tracker integration

Integrate Conviso Platform with your issue management tool using [Defect/Bug Tracking integrations](../integrations/integrations_intro) to synchronize and manage vulnerabilities in your team workflow.

## Automation with CLI and API

Use [New CLI](../new-cli) and [API](../api/api-overview) to automate security checks, standardize command execution in pipelines, and reduce manual remediation overhead.

## Management and collaboration tool

- Notifications for assigned issues, status changes, and follow-up actions: [Notifications Center](../platform/notifications-center)

## Recommended KPIs

- Time to first fix after vulnerability assignment.
- Reopen rate after remediation.
- Vulnerability backlog by severity in the squad.
- Security check pass rate in pull requests.

## Playbooks

### Critical vulnerability blocks release

1. Confirm exploitability and affected scope.
2. Apply mitigation or fix and open pull request with context.
3. Request fast retest and status update.
4. Document root cause and prevention action.

### Recurring vulnerability pattern in multiple repos

1. Identify common coding pattern causing the issue.
2. Propose reusable fix guidance or shared component change.
3. Apply fix in priority repositories first.
4. Validate reduction trend in the next scan cycle.
