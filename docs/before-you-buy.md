---
id: before-you-buy
title: Before You Buy Conviso Platform
sidebar_label: Before You Buy
description: Evaluate Conviso Platform for your application security program, including scope, integrations, access, security, and implementation planning.
keywords: [Conviso Platform evaluation, application security platform, ASPM evaluation]
---

Conviso Platform helps security and engineering teams operate application security as one connected program. Use this guide during discovery, technical validation, and procurement to evaluate the platform against your current environment, operating model, and priorities before you purchase.

This guide is for security leaders, AppSec teams, engineering representatives, IT, procurement, and compliance stakeholders. It explains what to assess before buying; it does not replace the technical documentation for an individual integration or the commitments in your agreement with Conviso.

## What Conviso Platform is designed to do

Conviso Platform is a cloud-based application security platform. It brings assets, findings, security activities, and delivery context into a shared workflow so teams can prioritize risk, coordinate remediation, and measure program progress.

The platform can support a program that needs to:

- consolidate findings from native and external security sources;
- prioritize vulnerabilities with business and technical context;
- run code, dependency, infrastructure, container, web, and API security workflows;
- connect security work to repositories, CI/CD, defect tracking, chat, and analytics tools;
- manage security projects, requirements, evidence, threat models, and compliance activities.

Start with the workflows that address your immediate objective. Conviso Platform is modular, so the capabilities available to your company depend on the products and plan in your agreement.

## Define the outcome you need

An effective evaluation begins with a concrete outcome. Identify the first workflow your team needs to improve and the people responsible for it.

| If your priority is | Validate during your evaluation |
| --- | --- |
| Reducing a large findings backlog | Ingestion, deduplication, risk context, ownership, and the vulnerability lifecycle |
| Bringing security into delivery | Repository and CI/CD connections, pull request workflows, scan configuration, and Security Gate |
| Improving application inventory and visibility | Asset inventory, criticality, exposure, ownership, and posture dashboards |
| Establishing secure design practices | Threat modeling, security requirements, and project execution workflows |
| Coordinating pentests or audits | Projects, evidence, vulnerability tracking, reports, and compliance workflows |
| Expanding security testing coverage | The applicable AST, DAST, SBOM, container, AI Pentest, or external scanner workflows |

Choose a small, representative set of applications for the evaluation. Include at least one application with an active delivery workflow and the teams that will own remediation.

## Assess your current environment

Map the systems that will contribute data or receive actions from the platform. This makes it easier to select the right integrations and identify owners before implementation.

Consider the following areas:

- **Source control and delivery:** repositories, branches, CI/CD providers, and pull request practices.
- **Security tools:** current scanners, pentest processes, SBOM sources, and findings that need to be consolidated.
- **Engineering workflow:** defect trackers, collaboration channels, developer portals, and reporting tools.
- **Identity:** the identity provider, user groups, and the teams that should receive access.
- **Application context:** application ownership, asset inventory, criticality, internet exposure, and business context.

Review the [Integrations overview](./integrations/integrations_intro.md) and the [integration catalog](https://www.convisoappsec.com/platform/integrations) to identify the connections relevant to your environment. If a required tool is not listed, evaluate whether the [GraphQL API](./api/api-overview.md) can support the workflow.

## Plan access and operating ownership

Decide who will administer the platform and who will act on its data. A typical initial group includes an AppSec owner, platform administrators, engineering representatives, and people responsible for triage or remediation.

Before rollout, define:

- which teams and users need access;
- which people can configure integrations, policies, and scan settings;
- who owns applications and approves risk decisions;
- which accounts or service API keys will run automated workflows;
- whether single sign-on and group mapping are required.

Conviso Platform supports profiles, teams, access scopes, and service API keys. See [User Management](./platform/user-management.md) and the [Authentication and SSO guides](./integrations/integrations_intro.md#authentication--sso) for the implementation details.

## Confirm the technical prerequisites

Each workflow has its own requirements. Confirm them for the products and integrations in your proposed scope instead of treating every feature as a platform-wide prerequisite.

For example:

- AST workflows need a supported execution environment, source access, and a way to associate findings with the correct asset and branch.
- DAST workflows need a reachable target, a defined scope, and credentials when the application requires authentication.
- Repository and CI/CD integrations need an administrator or service identity with the permissions documented for that integration.
- AI Pentest needs the relevant plan permissions, available credits, an application with FQDN assets, and any required test credentials.

Use the documentation for the scanners, integrations, and AI capabilities in your scope to validate permissions, network access, credentials, and test data before starting implementation.

### Conviso AST language support

For source-code scanning, Conviso AST SAST provides Conviso-managed rules for **Apex, Bash / Shell, C, C#, Clojure, Go, HTML, Java, JavaScript, Kotlin, OCaml, PHP, Python, Ruby, Rust, Scala, Solidity, TypeScript, VB6,** and **YAML**. Language-agnostic rules also inspect files outside this list.

Validate a representative repository during evaluation, especially when your organization depends on a specific framework, build pattern, or custom rule. See [Conviso AST](./security-scans/conviso-ast/conviso-ast.md#supported-languages-sast) for the current supported-language list and scanner prerequisites.

## Review security and data handling

Include your security, privacy, and procurement stakeholders early when their review is required. Conviso Platform documentation covers data retention, access controls, auditability, and the operational security practices relevant to use of the service.

Review these resources with the stakeholders who own your security and compliance requirements:

- [Data Retention](./data-retention.md), including standard retention periods, deletion requests, and backup rotation.
- [User Management](./platform/user-management.md), including profiles, teams, access scopes, and service API keys.
- [Information Security and Services](https://www.convisoappsec.com/information-security-and-services) for Conviso's security management information.
- [Conviso Status Page](https://status.convisoappsec.com) for service availability information.

Raise any contractual, regional, data-processing, or compliance requirements with your Conviso contact before finalizing the scope.

### FIPS requirements

If your organization requires FIPS 140-2 or FIPS 140-3 validation, include that requirement in the security and procurement review from the beginning. FIPS validation applies to specific cryptographic modules and operational environments; it should not be inferred from general encryption practices or other certifications.

Ask your Conviso contact for the current documentation needed to assess your requirement, including the applicable scope, cryptographic-module validation evidence, and responsibility boundaries. Record the outcome in your evaluation criteria and, when required, in the agreement.

## Validate the commercial scope

The platform is modular. Confirm which products, plan permissions, usage-based capabilities, and support arrangements are included in your agreement.

Discuss these points with your Conviso contact:

- products and workflows included in the initial scope;
- the applications, assets, repositories, or environments that will be covered;
- availability of AI Pentest credits or other usage-based capabilities when applicable;
- required integrations and any implementation dependencies;
- expected users, administrators, and service accounts;
- onboarding, success criteria, and the stakeholders involved in the rollout.

See [Conviso Platform pricing](https://www.convisoappsec.com/platform/pricing) for public plan information.

## Prepare an evaluation plan

Define success before connecting production systems. A focused evaluation typically includes the following steps:

1. Select the applications, repositories, and teams that represent your intended rollout.
2. Connect one identity provider or create the initial administrators and access model.
3. Configure the priority integration or security workflow.
4. Import or generate a realistic set of findings.
5. Validate triage, ownership, remediation, and reporting with the people who will use the workflow.
6. Review results against agreed success criteria, implementation effort, and expansion priorities.

The [Role Based Guides](./general/role-based-guides-intro.md) can help each participant follow the workflows most relevant to their role.

## Next steps

- Explore the [Conviso Platform documentation home](./index.md) for product areas and workflows.
- Review the [latest release notes](/releases) for recent capabilities and improvements.
- Contact your Conviso representative to align the evaluation scope with your security program and commercial requirements.
