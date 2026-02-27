---
id: role-based-guide-penetration-tester
title: Penetration Tester Guide
sidebar_label: Penetration Tester
---

## Objective

Execute penetration testing with consistent evidence quality, fast reporting, and effective vulnerability lifecycle tracking in Conviso Platform.

## Main responsibilities

- Identify and validate exploitable vulnerabilities.
- Register clear technical evidence and reproduction steps.
- Keep findings updated during retest cycles.
- Ensure vulnerabilities are correctly tracked until closure.

## Follow-up routine

1. Review active pentest scopes and priorities.
2. Register new validated findings with complete evidence.
3. Retest previously reported vulnerabilities.
4. Update statuses according to retest results.
5. Flag blocked items that require engineering or management escalation.
6. Check duplicate findings and merge where needed.
7. Verify fix confirmation in new scan cycles.
8. Publish a concise testing progress summary.

## Core workflows in Conviso

- CLI-based scan workflow: [New CLI](../new-cli)
- Vulnerability lifecycle management: [Vulnerabilities](../platform/vulnerabilities)
- Scope and target management: [Projects](../platform/projects)
- Validation tracking and execution evidence: [Requirements](../platform/requirements)
- Burp extension workflow: [Burp Integration](../integrations/burp)

## Defect tracker integration

Integrate Conviso Platform with your issue management tool using [Defect/Bug Tracking integrations](../integrations/integrations_intro) to synchronize and manage vulnerabilities in your team workflow.

## Automation with CLI and API

Use [New CLI](../new-cli) and [API](../api/api-overview) to automate data collection, execute standardized commands during testing cycles, and integrate results with team workflows.

## Management and collaboration tool

- Notifications for finding updates, retest status, and team interaction: [Notifications Center](../platform/notifications-center)

## Recommended KPIs

- Findings validated per cycle.
- Retest closure rate.
- Reopen rate after retest.
- Average time from finding submission to triage.

## Playbooks

### Vulnerability fixed by development team

1. Reproduce original scenario.
2. Confirm whether the vulnerability is still exploitable.
3. Update finding status and evidence in Conviso.
4. Document retest outcome and residual risk if applicable.

### High-impact finding during active pentest

1. Confirm exploitability and impact.
2. Register complete evidence immediately.
3. Escalate to responsible owner and security leadership.
4. Track mitigation/fix and schedule retest.
