---
title: Data Retention
---

## Overview

This Data Retention Policy explains how Conviso retains and deletes customer data processed through the Conviso Platform.

The policy is designed to support secure operations, customer transparency, and compliance with our information security practices, including controls aligned with our ISO/IEC 27001-certified information security management system.

This policy applies to customer data stored or processed in the Conviso Platform, including platform records, security findings, configuration data, support interactions, and related operational logs.

## Principles

Conviso applies the following principles to data retention:

- retain data only for as long as it is needed to deliver the service, maintain security, support audits, or meet legal and contractual obligations;
- limit retention periods where practical and review them periodically;
- delete or anonymize data when retention is no longer required;
- restrict access to retained data according to least-privilege and security-need principles.

## Data Categories and Retention Periods

The standard retention periods below apply unless a longer period is required by law, contract, dispute handling, fraud prevention, or active security investigations.

| Data category | Examples in Conviso Platform | Standard retention period |
| --- | --- | --- |
| Account and workspace data | user profiles, company/workspace records, teams, roles, notification preferences | Retained while the subscription or service relationship is active and for up to 60 days after termination or expiration |
| Security program data | assets, projects, vulnerabilities, risk scores, findings status, timelines, comments, requirements, threat modeling records | Retained while the subscription or service relationship is active and for up to 60 days after termination or expiration |
| Scan and analysis data | scan histories, scanner findings, SBOM records, container scan data, DAST execution results, related analysis metadata | Retained while the subscription or service relationship is active and for up to 60 days after termination or expiration |
| Evidence and generated artifacts | file attachments, remediation evidence, exported reports, generated CSV files, supporting documents uploaded by customers | Retained while needed for service delivery and for up to 60 days after termination or expiration |
| Integration configuration data | integration settings for SSO, defect trackers, CI/CD, chat, scanners, orchestration settings, webhooks, delivery settings | Retained while the integration is active and for up to 60 days after termination or expiration |
| Operational and delivery logs | integration delivery logs, execution logs, notification events, troubleshooting records, platform diagnostic logs | Typically retained for up to 180 days |
| Audit and security records | security-relevant access records, status-change history, administrative actions, auditability metadata | Typically retained for up to 12 months |
| Support records | support requests, troubleshooting information, support attachments, service communications | Typically retained for up to 24 months after ticket closure |
| Backups | encrypted operational backups required for business continuity and disaster recovery | Typically retained for up to 35 days in rolling backup cycles |

## Contract Expiration and Service Termination

If a customer subscription, contract, proof of concept, or other service relationship ends, customer data is generally retained for up to 60 days after the effective end date, unless otherwise agreed in writing.

During this retention window, Conviso may preserve customer data to:

- support renewal or reactivation requests;
- complete customer-requested exports;
- perform administrative closure activities;
- satisfy security, legal, tax, contractual, or dispute-related obligations.

After this period, Conviso will delete or anonymize the relevant customer data from active systems, except where longer retention is required for the reasons described in this policy.

## Customer-Initiated Deletion Requests

Customers may request deletion of their workspace data through Conviso Support.

Once a deletion request is validated:

- data in active systems will be scheduled for deletion;
- access to the affected workspace may be restricted or removed;
- some residual copies may remain temporarily in secured backups until the normal backup rotation cycle ends.

If a deletion request conflicts with legal, regulatory, contractual, fraud-prevention, or information-security obligations, Conviso may retain the minimum necessary data for the required period.

## Data Exports

Customers are responsible for exporting any data they need before the end of the applicable retention window.

This includes, when applicable:

- asset and project inventories;
- vulnerability and scan records;
- generated reports and CSV exports;
- evidence files and other uploaded artifacts.

## Security and Compliance

Conviso applies administrative, technical, and organizational safeguards to protect retained data throughout its lifecycle.

These controls include, as applicable:

- access restriction based on business need;
- logging and auditability of relevant actions;
- secure deletion processes for active systems;
- backup protection and controlled retention;
- periodic review of retention practices within our security management processes.

Our retention approach is aligned with the governance and risk-management principles of ISO/IEC 27001, supporting confidentiality, integrity, and availability throughout the data lifecycle.

## Exceptions

Conviso may retain data for longer than the standard periods listed above when necessary to:

- comply with legal, regulatory, or tax obligations;
- investigate security events, abuse, or fraud;
- enforce contractual rights;
- preserve evidence related to disputes or claims;
- fulfill customer-specific contractual commitments.

Where possible, any extended retention will be limited to the minimum scope and duration necessary.

## Changes to This Policy

Conviso may update this policy from time to time to reflect changes in legal requirements, contractual commitments, platform capabilities, or security practices.

The latest version published in the documentation will supersede previous versions.
