---
id: release4.25
title: Release 4.25
sidebar_label: Release 4.25
date: 2026-04-20
---

Release date: April 2026

## Key benefits

- **Automated Pentest Governance:** New policy creation for AI-driven pentests, allowing automated execution with safety request limits and custom scheduling.
- **Scanner Standardization:** Improved DAST integration behavior, ensuring Conviso DAST results are treated consistently with other scanner sources in filters and metrics.
- **Enhanced Security RBAC:** Granular access control for Security Gate configurations, allowing finer management of who can read, create, or delete CI/CD policies.
- **Operational Efficiency:** UI improvements for dashboard consistency and automated project requirement integration with Jira.

---

## Introduction

Release 4.25 advances the Conviso Platform’s mission to provide a unified Application Security Posture Management (ASPM) experience. This update focuses on bridging the gap between automated testing and security governance. By introducing dedicated policies for automated pentests and standardizing how dynamic analysis (DAST) data is handled across dashboards, we are providing security teams with more accurate metrics and better control over their testing surface.

We have also prioritized platform integrity by implementing more granular Role-Based Access Control (RBAC) and improving the synchronization between security project requirements and engineering backlogs in Jira.

---

## Automated Pentest Policies

We have introduced a new policy framework specifically for automated pentests. This capability mirrors our existing Security Gate logic but is optimized for offensive security workflows. Users can now define specific goals for an asset, set request limits to ensure safety during execution, and define automated schedules.

This change allows organizations to move away from manual testing triggers, ensuring that assets are continuously validated against offensive scenarios without manual intervention.

## Standardized Scanner Management

To provide a truly unified view of risk, we have updated how Conviso DAST is handled within the platform's filtering and metrics engine. Previously, DAST configurations were managed through distinct data paths, which could lead to discrepancies in "scan coverage" metrics.

DAST is now fully standardized as a scanner source. This ensures that assets covered by dynamic analysis are accurately reflected in dashboard KPIs, and filtering by integration type now returns consistent, cross-platform results.

## Granular Access Control for Security Gates

Security governance requires precise control over who can modify CI/CD validation policies. In this release, we have implemented detailed permissions for the Security Gate module. Administrators can now assign specific rights for reading, creating, updating, or deleting gate configurations.

This enhancement prevents unauthorized changes to critical pipeline block/allow criteria, ensuring that your organization’s security standards remain intact across the entire development lifecycle.

## Requirements Integration with Jira

Aligning security teams with developers is critical for effective remediation. We have improved the integration between Platform Project Requirements and Jira. This update allows for a more seamless flow of security requirements into the developer's native backlog, ensuring that "Secure by Design" principles are actionable tasks rather than static documentation.
