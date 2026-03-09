---
id: release4.21
title: Release 4.21
sidebar_label: Release 4.21
date: 2026-03-09
---

## Key benefits

- Security Gate management now available directly in the platform
- Dark Mode support across the Conviso interface
- Improved navigation for evidence attachments within activities

---

## Introduction

This release introduces improvements focused on visibility, usability, and governance of security workflows within the Conviso Platform.

The main highlight of this release is the introduction of **Security Gate management directly within the platform interface**, allowing teams to configure and monitor security validation policies without relying on CLI configuration. This change gives organizations greater visibility and control over how security policies are enforced across their development pipelines.

In addition, the platform now supports **Dark Mode** to improve the user experience during extended usage, and **activity evidence navigation** has been improved to make reviewing attachments faster and more intuitive.

Together, these updates help security and engineering teams work more efficiently while maintaining clear visibility over security policies, validation workflows, and supporting evidence across the software delivery lifecycle.

---

## Security Gate: Policy enforcement for secure software delivery

Modern software delivery requires teams to move quickly while maintaining control over security risks. **Security Gates** help organizations achieve that balance by ensuring that security validation happens automatically as part of the development workflow. Until now, Security Gates have been available in the Conviso ecosystem through CLI-based configuration, allowing teams to enforce security policies during CI/CD pipeline executions. With this release, Security Gate configuration and monitoring are now available directly inside the Conviso Platform interface, making it significantly easier to manage and understand how these policies affect the delivery process.

By bringing Security Gate management into the platform, security and engineering teams gain clearer visibility into how policies are applied and how vulnerability findings influence pipeline validations. Teams can configure rules directly from the interface, define risk thresholds, and review policy behavior without needing to manage configurations outside the platform. Policies can now also be managed at the asset level, allowing organizations to override global company policies when needed and apply more granular controls based on the specific risk profile of each application. The platform also introduces improved visibility into scan executions and validation outcomes, helping teams quickly understand why a security gate failed and what conditions need to be addressed before the pipeline can proceed.

This release introduces several improvements to Security Gate management:

- Security Gate configuration directly within the **CI/CD section of assets**
- Support for **multiple vulnerability sources**, including Conviso AST, Dependency Track, Fortify, SonarQube, SonarCloud, Checkmarx, GitHub, Snyk, Veracode, and MobSF
- Ability to define **severity thresholds** for each vulnerability source
- Optional configuration of **maximum days to remediate vulnerabilities**
- Support for **asset-specific policies** that override global company rules

By making Security Gate management available directly in the platform, organizations gain a clearer and more accessible way to enforce security standards across their development pipelines while maintaining the speed and flexibility required for modern software delivery.

Learn more in the documentation: [Security Gate](https://docs.convisoappsec.com/platform/security-gate)

---

## Dark Mode is now available

The Conviso Platform now supports Dark Mode across the interface. This new visual theme improves usability for users who spend extended periods working within the platform and prefer a darker interface for reduced eye strain and improved visual comfort.

Dark Mode has been implemented across platform components to ensure a consistent experience throughout the interface while maintaining full compatibility with existing workflows and navigation patterns.

Users can now interact with dashboards, assets, vulnerability views, and other platform features using the Dark Mode theme without any functional changes to their security workflows.

This update focuses on improving the overall user experience while preserving the familiar structure of the Conviso Platform.

---

## Improved navigation for activity evidence attachments

This release also improves the experience of reviewing attachments associated with activities.

Security validation and remediation workflows often require supporting evidence such as screenshots, documents, and additional files attached to activity records. Navigating these attachments is now more intuitive, allowing users to access and review evidence more easily while analyzing activity history.

The improved navigation experience reduces friction during validation processes and helps teams quickly locate the files needed to confirm remediation or compliance steps.

These improvements make it easier for security teams to review supporting artifacts and maintain visibility into the evidence associated with security activities.
