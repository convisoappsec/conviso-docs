---
id: release4.18
title: Release 4.18
sidebar_label: Release 4.18
---

Release date: October 24th, 2025

## Key Benefits

* [Threat Modeling Agent (AI-Powered)](#threat-modeling-agent-ai-powered);
* [Performance Optimization](#performance-optimization);
* [Enhanced PDF Reports](#enhanced-pdf-reports);
* [Executive Reports](#executive-reports);
* [Multilingual Platform & Reports](#multilingual-platform--reports);
* [AI Agent – Contextual Fix Suggestions](#ai-agent--contextual-fix-suggestions);
* [AI Agent – Vulnerability Lookup by ID](#ai-agent--vulnerability-lookup-by-id);
* [Retest Project Improvements](#retest-project-improvements);
* [Filter System Redesign](#filter-system-redesign);
* [DAST – False Positive Reduction (ML-Based)](#dast--false-positive-reduction-ml-based);

## Introduction

This release brings multiple AI-powered capabilities, language flexibility, and major usability upgrades.  
Highlights include **multilingual reports**, **contextual AI fixes**, **enhanced retest workflows**, and expanded **threat modeling intelligence**.  
These updates aim to make the Conviso Platform faster, more intuitive, and even more powerful for global security teams.


**_New Feature_**
## Threat Modeling Agent (AI-Powered)

- New **AI-driven threat modeling agent** available in the Threat Modeling module.  
- The AI agent supports this input formats for modeling:  
  - **Images:** PNG, JPEG, and PDF architectural diagrams.  
  - **User Stories:** Markdown (`.md`) or plain text (`.txt`) files.
- Automatically recognizes and models assets from both visual and textual sources.
- The agent parses the file, identifies components, and generates **CAPEC-based security requirements** automatically.  
- Examples include disabling GraphQL introspection, enforcing rate limiting, and query cost analysis.  
- Helps standardize and accelerate threat modeling with minimal manual input.

---

**_Improvements_**
## Performance Optimization
  
- Reduced initial load time from **~9 seconds to under 100ms**.  
- The platform now delivers faster page rendering and improved responsiveness.

---

**_New Feature_**
## Enhanced PDF Reports

- Technical and executive reports now support **inline image rendering**.  
- Key updates include:  
  - Display of assets associated with each project.  
  - Inclusion of the **full project timeline** and individual requirement timelines.  
  - Inline images for vulnerabilities and requirements.  
  - Non-image attachments automatically bundled in a `.zip` file.  
- Result: richer, clearer, and more contextualized reports for both technical and managerial use.

---

**_New Feature_**
## Executive Reports

- New **Executive Report** type designed for decision makers.  
- Provides concise, result-oriented summaries without deep technical detail.  
- Keeps customizable text fields for contextual information.  
- Removes complexity filters and focuses on key project outcomes.  
- Simplifies reporting processes and ensures consistent communication across stakeholders.

---

**_New Feature_**
## Multilingual Platform & Reports

- Added **language selection** in the user profile, allowing interface translation between **English and Portuguese**.  
- Reports (Technical, Executive, and DAST) can now be generated in multiple languages.  
- Improves accessibility for international users and enhances comfort for non-English speakers.  
- Users can report translation feedback directly to the team for quick improvement.

---

**_New Feature_**
## AI Agent – Contextual Fix Suggestions

- The **AppSec AI Agent** now provides **step-by-step fix recommendations** directly from the vulnerability view.  
- New “agent-ai” icon under *Solution* opens a chat pre-filled with the vulnerability context.  
- The agent explains and guides remediation automatically.  
- Reduces friction and accelerates vulnerability remediation processes.

---

**_New Feature_**
## AI Agent – Vulnerability Lookup by ID

- The AI chat now supports commands such as **“how to fix vulnerability #12345”**.  
- Allows direct retrieval of vulnerability details from the **MCP Server** by ID.  
- Enables smarter contextual assistance inside the AppSec AI Agent chat.  
- Improves demos and client visibility during vulnerability review sessions.

---

**_Improvements_**
## Retest Project Improvements

- Added new functionality to **associate vulnerabilities more easily** with retest projects.  
- Vulnerabilities can be linked by:  
  - **Asset**, **Project**, **Scan ID**, or **Vulnerability ID**.  
- Simplifies retest creation and improves overall efficiency in validation workflows.  

---

**_Improvements_**
## Filter System Redesign

- Introduced redesigned **filter management system** across key modules.  
- Filters are now **persistent, shareable, and URL-based**, maintaining state across sessions.  
- Improves navigation and usability across **Assets**, **Projects**, **Vulnerabilities**, and **Scans**.

---

**_Improvements_**
## DAST – False Positive Reduction (ML-Based)

- The DAST scanner now uses **machine learning** to detect and exclude generic error pages automatically.  
- Reduces the number of false positives reported in dynamic application tests.  
- Delivers cleaner, more accurate vulnerability reports.

---

👉 Access the [Conviso Platform](https://app.convisoappsec.com) to explore these updates in action.
