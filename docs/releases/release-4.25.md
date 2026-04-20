---
id: release4.25
title: Release 4.25
sidebar_label: Release 4.25
date: 2026-04-20
---

Release date: April 20, 2026

## Key benefits

- **AI Pentest Policy:** New policy creation for AI Pentests, allowing automated execution with safety request limits and custom scheduling.
- **Asset Filters Standardization:** Ensuring Conviso DAST results are treated consistently with other scanner sources in filters and metrics.
- **Projects Integration with Jira:** UI improvements for integration consistency syncs and project requirement and activities integration with Jira.

---

## Introduction

Release 4.25 advances the Conviso Platform’s mission to provide a unified Application Security Posture Management (ASPM) experience. This update focuses on bridging the gap between automated testing and security governance. By introducing dedicated policies for ai pentests and standardizing how dynamic analysis (DAST) data is handled across lists and dashboards, we are providing security teams with more accurate metrics and better control over their testing surface.

We have also prioritized platform integrity and synchronization between security project requirements and engineering backlogs in Jira.

---

## AI Pentest Policy

We have introduced a new policy framework specifically for automated pentests. This capability mirrors our existing Security Gate logic but is optimized for offensive security workflows. Users can now define specific goals for an asset, set request limits to ensure safety during execution, and define automated schedules.

This change allows organizations to move away from manual testing triggers, ensuring that assets are continuously validated against offensive scenarios without manual intervention.

## Asset Filters Standardization

To provide a truly unified view of risk, we have updated how Conviso DAST and others scans are handled within the platform's filtering and metrics engine. Previously, DAST configurations were managed through distinct data paths, which could lead to discrepancies in "scan coverage" metrics.

DAST is now fully standardized as a scanner source. This ensures that assets covered by dynamic analysis are accurately reflected in dashboard KPIs, and filtering by integration type now returns consistent, cross-platform results.

## Projects Integration with Jira

Aligning security teams with developers is critical for effective remediation. We have improved the integration between Platform Project Requirements and Jira. This update allows for a more seamless flow of security requirements into the developer's native backlog, ensuring that "Secure by Design" principles are actionable tasks rather than static documentation.
