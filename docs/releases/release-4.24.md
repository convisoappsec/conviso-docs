---
id: release4.24
title: Release 4.24
sidebar_label: Release 4.24
date: 2026-04-06
---

Release date: April 6, 2026

## Key benefits

* **AI Autonomous Pentest:** A complete offensive engine that orchestrates tools, execute and visualizes complex attack vectors in real-time.
* **Conviso MCP Server:** Official availability on Anthropic MCP-Market for seamless LLM-to-Platform connectivity.
* **Full-Snapshot DAST Reporting:** A modernized reporting logic that provides a comprehensive view of the application's security state at every scan.

---

## Introduction

Release 4.24 marks a strategic leap toward autonomous security operations. We are introducing our AI Autonomous Pentest, a powerful engine that not only identifies but validates risks through intelligent orchestration. Furthermore, we are expanding our ecosystem with the Conviso MCP Server and bringing more clarity to vulnerability report with a complete overhaul of our DAST reporting logic.

---

## 1. AI Autonomous Pentest

This release introduces the **AI Autonomous Pentest**, an autonomous offensive security engine designed to reduce manual toil and scale testing capabilities. It mimics the workflow of an pentester by combining Large Language Models (LLMs) with a suite of professional security tools.

**Key Capabilities:**
* **Tool Orchestration:** The engine automatically triggers and correlates data from tools and findings.
* **Offensive Reasoning:** Using AI, the engine decides the best attack path, identifies vulnerability chains, and executes controlled Proof of Concepts (PoCs).
* **Attack Chain Visualization:** To provide full transparency, we’ve integrated a real-time Attack Chain graph. This interactive interface allows users to watch the AI's "thought process" as it moves from reconnaissance to successful exploit validation.

---

## 2. Conviso MCP Server: AI Ecosystem Integration

We are officially launching the **Conviso MCP (Model Context Protocol) Server**, now available on the Anthropic MCP-Market. This protocol allows external AI models to interact securely with your Conviso Platform data.

**Why this matters:**
* **Integration:** Users can now use the MCP Server to query assets, vulnerability status, and project updates directly within the chat interface.
* **Contextual Security:** This integration brings Conviso’s security intelligence into the developer's AI workspace, enabling faster remediation suggestions and architectural reviews without leaving the LLM environment.

---

## 3. Comprehensive DAST Reporting (Full-Snapshot)

We have refactored our **DAST (Dynamic Application Security Testing)** reporting logic to provide better visibility and compliance readiness.

**The Update:**
* **From Delta to Snapshot:** Reports have moved from a "change-only" (delta) view to a **Full-Snapshot** format. Every DAST execution now generates a report showing the complete security posture—including all vulnerabilities.
* **Audit Readiness:** This alignment ensures that every scan provides a standalone, auditable record of the application's health, simplifying the work for security leaders and compliance officers.

Access the [Conviso Platform](https://app.convisoappsec.com/) to explore these updates.
