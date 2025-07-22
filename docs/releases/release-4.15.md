---
id: release4.15
title: Release 4.15
sidebar_label: Release 4.15
---

Release date: July 22nd, 2025

## Key Benefits

* [Risk Governance Improvements](#risk-governance-improvements);
* [Workflow Optimization](#workflow-optimization);
* [UX and Visibility Enhancements](#ux-and-visibility-enhancements);
* [Integration and API Updates](#integration-and-api-updates);

## Introduction

This release brings significant improvements to help you manage security risks more effectively and streamline your daily workflows. We've focused on making the platform more intuitive, providing better visibility into your security posture, and automating routine tasks to save you time. Whether you're tracking accepted risks, managing your asset inventory, or analyzing vulnerabilities, these updates will help you work more efficiently and make better security decisions.

---

**_New Feature_**
## Risk Governance Improvements

- Set Follow-up Dates for Accepted Risks  
  When you accept a security risk, you can now set a reminder date for when it should be reviewed again. This helps ensure that accepted risks don't get forgotten and are reassessed when appropriate.

- Enforce Reanalysis Date for Risk Accepted  
  Complementing the previous change, this update enforces business rules to ensure that all "Risk Accepted" vulnerabilities are properly time-bound with a follow-up date.

---

**_New Feature_**
## Workflow Optimization

- Save Your Custom Views  
  Save your frequently used filters and views in the vulnerabilities list. No more recreating the same searches every time - your custom views are always available for quick access.

- Automatic Closure for Container-Type Vulnerabilities  
  Vulnerabilities detected in container scans are now automatically closed if matching resolution criteria are met—reducing manual effort and improving data hygiene.

- Automatic Sync for DAST Results  
  Ensure up-to-date vulnerability data by automatically syncing results from DAST sources at defined intervals.

---

**_Improvements_**
## UX and Visibility Enhancements

- Quick Security Status Overview  
  See at a glance which security scanning tools are active for each asset with new visual indicators in the asset list.

- Show Last Execution Date for Each Source  
  Adds a field with the last execution timestamp per scanning source in the vulnerability detail view.

- Show Integration Source Icon on Vulnerability Row  
  A visual icon now shows which source generated the vulnerability, helping with quick scanning and triage.

- Asset Name with Link on Vulnerability Detail  
  Displays the asset name and a direct link to it in the vulnerability detail view.

- Add File Name on Attachment Timeline  
  Improve traceability and context by displaying file names for uploaded documents in requirement timelines.

- Add Column Management to Asset List  
  Allows users to show/hide columns in the asset list table, customizing their view for better focus.

---

**_Improvements_**
## Integration and API Updates

- Enhanced Asset Filtering  
  Improved filtering options help you find exactly what you're looking for, whether you're working with development, staging, or production environments.

- Fix: Duplicated Tags in Asset Filtering API  
  Resolved an issue where duplicated tags appeared in asset filter responses.

- Improve Behavior of Status Filter in Vulnerability Listing API  
  Fixes inconsistencies in how the status filter responded to specific combinations, enhancing reliability.

- Improve Performance of Asset Listing API with Multiple Filters  
  Backend performance improvements for filtered asset listing, especially in large workspaces.

- Refactor Source Sync Flow to Improve Timeout Handling  
  Improves stability in the sync process by handling long source sync executions more gracefully.

- Refactor Legacy GitHub Integration Code  
  Cleans up technical debt related to GitHub integration to support newer features and improve maintainability.

- Validate and Normalize Integration Data Before Save  
  Adds validation and data normalization to reduce configuration errors and ensure consistent integration behavior.

---

👉 Access the [Conviso Platform](https://app.convisoappsec.com) to explore these updates in action.
