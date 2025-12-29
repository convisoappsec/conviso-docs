---
id: release4.19
title: Release 4.19
sidebar_label: Release 4.19
---

Release date: December 2025

## Key Benefits

* [Snyk Integration](#synk-integrations);
* [Backstage Integration](#backstage-integration);
* [Mobile Security Import (MobSF)](#mobile-security-import-mobsf);
* [Platform Stability & Reliability](#platform-stability--reliability);
* [Scanner Configuration & Execution Improvements](#scanner-configuration--execution-improvements);
* [Remediation Prioritization Funnel](#remediation-prioritization-funnel);
* [Vulnerability Management Enhancements](#vulnerability-management-enhancements);
* [Improved User Experience & Navigation](#improved-user-experience--navigation);
* [Reporting & Data Consistency Improvements](#reporting--data-consistency-improvements);

## Introduction

Release 4.19 delivers a major step forward in **platform robustness, integration maturity, and ecosystem expansion**.

In addition to a broad set of stability and usability improvements, this release introduces **four strategic new features** that significantly expand Conviso Platform’s integration capabilities—covering cloud security, SAST modernization, developer portals, and mobile security workflows.

Together, these updates reinforce Conviso Platform as a **centralized, scalable, and integration-ready AppSec hub** for modern security teams.

---

**_New Feature_**
## Snyk Integration

- Introduced native integration with **Snyk Cloud**, enabling visibility into cloud-native security findings directly within Conviso Platform.  
- Expands coverage beyond traditional application scanning to include **cloud posture and runtime-related insights**.  
- Strengthens Conviso’s role as a unified security aggregation layer across application and cloud security tools.

---

**_New Feature_**
## Backstage Integration

- Introduced a **Backstage plugin** to synchronize developer components as security assets in Conviso Platform.  
- Supports both **manual and automated imports**, with background processing to avoid performance impact.  
- Enables organizations to align AppSec visibility with their internal developer portals and service catalogs.  
- Strengthens collaboration between security and engineering teams by integrating AppSec into existing developer workflows.

---

**_New Feature_**
## Mobile Security Import (MobSF)

- Added support for **importing MobSF reports** directly into Conviso Platform.  
- Mobile security findings are processed asynchronously and appear in the platform using the same **Scans and Vulnerability UI** as native Conviso AST scans.
- Expands Conviso Platform’s coverage to **mobile application security** without requiring custom tooling.

---

**_Improvements_**
## Platform Stability & Reliability

- Improved overall platform resilience across core modules.  
- Fixed multiple edge cases that could cause unexpected UI behavior or incomplete data loading.  
- Reduced intermittent errors observed in long-running sessions and complex projects.  

---

**_Improvements_**
## Scanner Configuration & Execution Improvements

- Increased reliability of scanner configuration screens, ensuring all options load correctly on first access.  
- Fixed issues affecting scan scheduling, execution status visibility, and configuration persistence.  
- Improved handling of scanner execution history and metadata.

---

**_Improvements_**
## Remediation Prioritization Funnel

- Updated the remediation funnel to reflect **risk-based priority levels**.  
- Funnel stages were relabeled as **Priority 0–4**, focusing on what should be fixed first.  
- **False Positive** and **Fixed** vulnerabilities are excluded, while **Risk Accepted** is now included.  
- Provides a clearer and more actionable view for remediation planning.

**_Improvements_**
## Vulnerability Management Enhancements

- Improved consistency in vulnerability detail pages, including source code and file rendering.  
- Fixed scenarios where vulnerability evidence or contextual data was not fully displayed.  
- Enhanced reliability of vulnerability state transitions and associations with projects and assets.  
- Improved handling of duplicated or correlated findings across scans.

---

**_Improvements_**
## Improved User Experience & Navigation

- Resolved UI inconsistencies affecting navigation between assets, projects, and vulnerabilities.  
- Improved filter behavior and state persistence across sessions.  
- Reduced cases of disappearing actions, buttons, or empty states during navigation.  
- Overall smoother and more predictable interaction with the platform.

---

**_Improvements_**
## Reporting & Data Consistency Improvements

- Increased stability in report generation workflows.  
- Fixed inconsistencies between platform data and exported reports.  
- Improved handling of edge cases during report rendering, ensuring reliable output even for complex projects.  
- Strengthened alignment between vulnerability data, timelines, and report content.

---

👉 Access the [Conviso Platform](https://app.convisoappsec.com) to experience these updates.
