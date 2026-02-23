---
id: release4.20
title: Release 4.20
sidebar_label: Release 4.20
---

Release date: February 2026

## Key Benefits

* [ServiceNow Integration](#servicenow-integration);
* [SAMM Assessments](#samm-assessments-in-platform);
* [Security Gate Monitoring](#security-gate-monitoring);
* [New Security Feed Experience](#new-security-feed-experience);
* [GitHub Pull Request Scanning](#github-pull-request-scanning);
* [Continuous SBOM Monitoring](#continuous-sbom-monitoring);
* [DAST API Enhancements (Swagger, GraphQL, SOAP)](#dast-api-enhancements-swagger-graphql-soap);
* [AI Agents Operations (Auto-Fix, DAST FP Review, Chat UX)](#ai-agents-operations-auto-fix-dast-fp-review-chat-ux);
* [Requirements & Project Experience](#requirements--project-experience);
* [Vulnerability Management UX & Bulk Actions](#vulnerability-management-ux--bulk-actions);
* [Platform Reliability, Performance & Observability](#platform-reliability-performance--observability);
* [New Seal Capability](#seal-capability);
* [Documentation & Developer Experience](#documentation--developer-experience);

## Introduction

Release 4.20 strengthens Conviso Platform as a unified AppSec hub by expanding enterprise integrations, improving developer workflows, and increasing reliability across scanning, reporting, and vulnerability management.

Highlights include **ServiceNow integration**, in-platform **SAMM assessments**, a dedicated **Security Gate monitoring experience**, a refreshed **Security Feed**, **GitHub PR scanning**, and a major step in supply-chain consistency with **OSV-based SBOM correlation**. This release also delivers substantial improvements in **DAST capabilities**, **AI Agents**, and performance & observability across core services.

---

**_New Feature_**
## ServiceNow Integration

- Introduced native **ServiceNow ITSM integration** to create and update incidents from Conviso Platform findings.
- Enables security and engineering teams to operationalize remediation via ServiceNow workflows.
- Designed for enterprise environments where ITSM processes drive remediation execution and tracking.

---

**_New Feature_**
## SAMM Assessments in Platform

- Added support for running **OWASP SAMM assessments directly inside Conviso Platform**.
- Enables teams to evaluate AppSec maturity, track progress over time, and compare assessments.
- Improves visibility for customer maturity programs and structured AppSec evolution.

---

**_New Feature_**
## Security Gate Monitoring

- New **Security Gate** experience in the platform to monitor and manage gate runs.
- Centralizes visibility into Security Gate executions under **CI/CD > Security Gate**.
- Helps teams standardize quality gates and governance across development pipelines.

---

**_New Feature_**
## New Security Feed Experience

- Introduced a new **Security Feed** page to display alerts, notifications, and updates more clearly.
- Improves real-time visibility into security-related activity across the platform.
- Complements existing workflows with a stronger “single place to monitor what’s happening”.

---

**_New Feature_**
## GitHub Pull Request Scanning

- Added support for automatically running **Conviso AST on open Pull Requests**.
- Security feedback is produced directly in GitHub through checks and annotations.
- Enables a true shift-left workflow by detecting issues while code is being reviewed, without requiring additional configuration.

---

**_New Feature_**
## Continuous SBOM Monitoring

- Introduced ** SBOM correlation** to improve consistency between Conviso AST and platform monitoring.
- Reduces “blinking” findings (open/close/reopen) caused by data source mismatches.
- Expands advisory coverage and increases trust in supply-chain vulnerability lifecycle.
- Provides a more reliable foundation for continuous dependency monitoring at scale.

---

**_New Feature_**
## DAST API Enhancements (Swagger, GraphQL, SOAP)

- Restored and strengthened **DAST API** support.
- Added support for **GraphQL** and **SOAP** scanning scenarios.
- Improved API schema import workflow:
  - Swagger import via **upload** and **URL**.
- Enhanced DAST execution controls, including timeouts and configuration reliability.
- Improved scan lifecycle consistency and operational readiness.

---

**_New Feature_**
## New CLI Capabilities

- Enhanced CLI experience with new capabilities aimed at operational workflows.
- Added new sub-command to **list project requirements**.
- Improved packaging and consistency for AST distribution (including modernization work around naming and tooling lifecycle).
- Strengthens automation workflows and enables scalable operational usage by AppSec teams.

---

**_New Feature & Improvements_**
## AI Agents Operations (Auto-Fix, DAST FP Review, Chat UX)

- Introduced a new capability, **Auto-Fix**:
  - Auto-fix can be triggered directly from vulnerability context.
- Expanded **False Positive review** support to **DAST issues**, increasing consistency across scanning sources.
- Improved AI Agent chat usability:
  - Added **Start new conversation** to reset context and return to quick actions.
- Multiple stability and quality improvements across agent execution, including execution controls and better reliability in recurring runs.

---

**_New Feature & Improvements_**
## Requirements & Project Experience

- Introduced **Project Templates** as a new feature, enabling standardized project creation and scale.
- Added filter by **Activity** in project requirements, improving navigation and prioritization.
- Improved requirements table to support searching by activity name.

---

**_Improvements_**
## Vulnerability Management UX & Bulk Actions

- Improved vulnerability details experience for clarity and focus:
  - Renamed **Solution** to **Remediation** to better reflect workflow intent.
  - Moved “Other Occurrences” into a dedicated tab to reduce noise.
- Added **bulk actions** in vulnerability lists:
  - Bulk status changes
  - Bulk deletion
- Improved filtering and navigation in vulnerability workflows, including performance improvements for heavy filters (e.g., status change).

---

**_Improvements_**
## Platform Reliability, Performance & Observability

- Improved stability and transparency in defect tracker synchronization:
  - Better logs and clearer error reporting from integrated systems.
- Improved dashboard reliability and accuracy:
  - MTTR stability improvements for filtering scenarios.
  - Fixed edge cases where status-driven timelines or charts did not reflect expected results.
- Infrastructure and observability improvements:
  - Kubernetes bump and runtime stability improvements.
  - Improved Datadog integration (APM, metrics, log correlation) for service-level visibility.
- Significant improvements in scan lifecycle robustness (including handling success states, discovery edge cases, and execution reporting).

---

**_Improvements_**
## Seal Capability

- Expanded and stabilized Badge (Seal) workflows:
  - Domain field support in badge creation/editing.
  - Badge deletion support and improved scope isolation.
  - Audit validation improvements through Conviso Seal API routing.

---

**_Improvements_**
## Documentation & Developer Experience

- Improved technical documentation structure and discoverability:
  - More organized content and a more “friendly” navigation experience.
  - Improved context-based documentation search experience.
- Updated conviso platform vulnerability template references and patterns to align with modern OWASP projects and updated databases.

---

👉 Access the [Conviso Platform](https://app.convisoappsec.com) to explore these updates.
