---
title: Security Gate — Blocking Vulnerability Details
date: 2026-06-22
slug: 2026-06-22-security-gate-blocking-details
authors: [daniel_guedes]
tags: ["Improved", "AI Secure Code", "Security Analysis", "Developer Experience"]
---

Improved the **Security Gate** output to give you more visibility into why a build was blocked.

- The Security Gate now reports **how many** and **which** vulnerabilities triggered the block.
- Surfaced directly in the **AST** output, so developers can see the exact findings to address without leaving the pipeline.
- Faster triage and remediation, with clear, actionable feedback at the moment the gate fails.
