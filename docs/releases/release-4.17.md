---
id: release4.17
title: Release 4.17
sidebar_label: Release 4.17
---

Release date: September 22th, 2025

## Key Benefits

* [Scan Execution Details](#scan-execution-details);
* [Auto Unlock for Inactive Users](#auto-unlock-for-inactive-users);
* [Dependency-Track Webhook Integration](#dependency-track-webhook-integration);
* [Enhanced PDF Reports](#enhanced-pdf-reports);
* [VS Code Plugin – AppSec AI Agent Integration](#vs-code-plugin--appsec-ai-agent-integration);
* [Executive Project Reports](#executive-project-reports);
* [Threat Modeling Agent (AI-Powered)](#threat-modeling-agent-ai-powered);
* [Global Search by ID](#global-search-by-id);
* [Project Timeline – Date Change Tracking](#project-timeline--date-change-tracking);

## Introduction

This release focuses on strengthening visibility into scans, simplifying user access, expanding reporting options,
and boosting platform performance. Highlights include **scan execution details**, **executive PDF reports**, **threat modeling automation**, and significant **frontend performance improvements**.

**_New Feature_**
## Scan Execution Details

- New dedicated page for each executed scanner (e.g., DAST, AST).  
- Provides details such as: execution date, duration, open/closed vulnerabilities, and execution history.  
- **DAST-specific:** shows all scanned URLs in a paginated table (example: 124 URLs).  
  - Upcoming: URL status (success/error).  
- Error messages are displayed in case of failures.  
- Available across all scanners.

---

**_New Feature_**
## Auto Unlock for Inactive Users

- Users inactive for 30+ days were previously locked and had to request manual unlock from support/admins.  
- Now, if users are inactivated, they can self-unlock via an email link, restoring access instantly.
- Reduces friction and dependency on support/admin.

---

**_New Feature_**
## Dependency-Track Webhook Integration

- Automatic sync of assets when a new vulnerability is created in Dependency-Track.  
- Removes need for manual syncs by clients.  
- Ensures assets in Conviso Platform always reflect the most updated vulnerability context.

---

**_New Feature_**
## Enhanced PDF Reports

- Reports now support **images embedded directly** in the PDF.  
- Enhancements include:  
  - Assets associated with the project listed in the report.  
  - **Full project timeline**, not just status changes.  
  - Timeline per requirement with all changes.  
  - Images rendered inside requirements and vulnerabilities.  
  - Non-image attachments bundled in a .zip file.  
- Produces richer, more contextualized technical reports.

---

**_New Feature_**
## Executive Project Reports

- New **Executive Report** type, complementing technical reports.  
- Target audience: **decision makers** (directors, executives).   
- Generated automatically in **PDF**. 
- Saves effort for both Conviso and clients by avoiding manual report preparation.

---

**_New Feature_**
## Threat Modeling Agent (AI-Powered)

- New **AI-powered threat modeling agent** integrated with the Threat Modeling module.  
- Workflow:  
  - Upload architecture in **draw.io** format.  
  - Agent parses the architecture and generates security requirements.  
  - Based on **CAPEC**, requirements are created per component.  
- Benefits: speeds up threat modeling, provides standardized requirements, reduces manual effort.

---

**_Improvements_**
## VS Code Plugin – AppSec AI Agent Integration

- Updated VS Code plugin under **AppSec AI Agent identity**.  
- Key updates:  
  - New icon and unified branding.  
  - Built-in **chat with AI agents** directly inside the IDE (same as in Conviso Platform).  
- Benefit: contextual feedback directly in the developer workflow.

---

**_Improvements_**
## Global Search by ID

- Global search now supports **ID-based lookup** in addition to names.  
- Available for **Assets**, **Projects**, and **Vulnerabilities**.  
- Provides faster access to specific records.

---

**_Improvements_**
## Project Timeline – Date Change Tracking

- Changes to **start date** and **end date** of projects are now recorded in the **timeline**.  
- Includes who performed the change.  
- Provides greater traceability for project management.  


👉 Access the [Conviso Platform](https://app.convisoappsec.com) to explore these updates in action.