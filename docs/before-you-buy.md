---
id: before-you-buy
title: Conviso Platform Evaluation Guide
sidebar_label: Evaluate Conviso
description: Plan a Conviso Platform proof of concept with clear security goals, technical validation, success criteria, and rollout decisions.
keywords: [Conviso Platform evaluation, proof of concept, AppSec POC, application security platform, ASPM evaluation]
---

Use this guide to plan a Conviso Platform proof of concept (PoC). Your Conviso Forward Deployed Engineer (FDE) conducts the PoC with your team, using representative applications and workflows from your environment to validate the outcomes that matter to your program.

This guide supports a focused, FDE-led evaluation for security leaders, AppSec teams, engineering representatives, IT, procurement, and compliance stakeholders. It helps the group align on scope, evidence, and a decision before rollout.

## Plan your evaluation

### Define your evaluation goals

Start with a concrete security or delivery outcome. Identify the first workflow your team needs to improve and the people responsible for assessing it.

| If your priority is | Validate during the PoC | Evidence of success |
| --- | --- | --- |
| Reducing a large findings backlog | Ingestion, deduplication, risk context, ownership, and the vulnerability lifecycle | Findings are consolidated, assigned, and prioritized with useful context |
| Bringing security into delivery | Repository and CI/CD connections, pull request workflows, scan configuration, and Security Gate | Developers receive actionable feedback in their existing delivery workflow |
| Improving application inventory and visibility | Asset inventory, criticality, exposure, ownership, and posture dashboards | Teams can identify owned assets and focus on the risk that matters most |
| Establishing secure design practices | Threat modeling, security requirements, and project execution workflows | Security requirements are traceable from design through execution |
| Coordinating pentests or audits | Projects, evidence, vulnerability tracking, reports, and compliance workflows | Stakeholders can follow findings, evidence, and remediation in one workflow |
| Expanding security testing coverage | The applicable AST, DAST, SBOM, container, AI Pentest, or external scanner workflows | The selected security workflow produces useful, actionable results |

### Define success criteria

Agree on how the team will assess each goal before the PoC starts. Keep the scorecard small and use evidence that the people who own the rollout can review together.

| Goal | Test | Evidence to review | Decision owner |
| --- | --- | --- | --- |
| Prioritize risk | Import or generate representative findings | Risk context, ownership, and triage outcome | AppSec owner |
| Fit security into delivery | Connect one repository and delivery workflow | Pull request or pipeline feedback and remediation flow | Engineering representative |
| Confirm operational fit | Use the relevant integrations and access model | Access, notification, and workflow behavior | Platform administrator |
| Validate program value | Review posture or program results | Dashboard, report, and stakeholder feedback | Security leader |

### Assemble your evaluation team

Include the people who will operate the workflow and approve its rollout. Your Conviso FDE works with this group to turn the agreed goals into the PoC plan.

| Role | Contribution to the PoC |
| --- | --- |
| AppSec owner | Defines risk goals, evaluates findings, and approves security outcomes |
| Engineering representative | Selects a representative application and validates developer workflow fit |
| Platform administrator | Configures access, integrations, and service identities |
| Security or program leader | Confirms program value, priorities, and rollout decision |
| Procurement or compliance stakeholder | Reviews commercial, data-handling, and contractual requirements when applicable |

### Select representative applications and workflows

Choose a small set of real applications rather than an artificial test project. Include at least one application with an active delivery workflow, a clear owner, and the integrations you expect to use after rollout.

For each application, identify:

- the repository, branch, CI/CD provider, and pull request practice;
- the security workflow to validate, such as AST, DAST, SBOM, Security Gate, AI Pentest, or external finding ingestion;
- the people who own triage and remediation;
- the application criticality, exposure, and business context needed to assess prioritization.

## Validate the platform

### Assess your environment and integrations

Map the systems that will contribute data or receive actions from the platform. This makes it easier to select the right integrations and identify owners before the PoC begins.

Consider source control and delivery, existing security tools, defect trackers, collaboration channels, identity providers, and the application context that informs prioritization. Review the [Integrations overview](./integrations/integrations_intro.md) and the [integration catalog](https://www.convisoappsec.com/platform/integrations). If a required tool is not listed, assess whether the [GraphQL API](./api/api-overview.md) supports the workflow.

### Plan access and operating ownership

Decide who administers the platform and who acts on its data. Define the teams and users who need access, who can configure integrations and policies, who approves risk decisions, and which service accounts or API keys run automated workflows.

Conviso Platform supports profiles, teams, access scopes, and service API keys. See [User Management](./platform/user-management.md) and the [Authentication and SSO guides](./integrations/integrations_intro.md#authentication--sso) for implementation details.

### Confirm technical prerequisites

Each workflow has its own requirements. Confirm them for the products and integrations in the PoC scope instead of treating every feature as a platform-wide prerequisite.

- AST workflows need a supported execution environment, source access, and a way to associate findings with the correct asset and branch.
- DAST workflows need a reachable target, a defined scope, and credentials when the application requires authentication.
- Repository and CI/CD integrations need an administrator or service identity with the permissions documented for that integration.
- AI Pentest needs the relevant plan permissions, available credits, an application with FQDN assets, and any required test credentials.

### Conviso AST language support

For source-code scanning, Conviso AST SAST uses the OpenGrep engine. It supports **Apex, Bash / Shell, C, C++, C#, Clojure, Crystal, Dart, Dockerfile, Elixir, Go, HTML, Java, JavaScript, JSON, Jsonnet, JSX, Julia, Kotlin, Lisp, Lua, OCaml, PHP, Python, R, Ruby, Rust, Scala, Scheme, Solidity, Swift, Terraform, TSX, TypeScript, Visual Basic, XML,** and **YAML**. OpenGrep's generic mode also supports language-agnostic rules for formats such as ERB and Jinja.

See [Conviso AST](./security-scans/conviso-ast/conviso-ast.md#supported-languages-sast) for the current language list and scanner prerequisites.

### FIPS-enabled environments

The Conviso AST agent is compatible with environments where the FIPS policy is enabled. You can install and run Conviso AST scans in these environments using the standard scanner prerequisites.

### Review security and data handling

Include security, privacy, and procurement stakeholders early when their review is required. Review these resources with the people who own your security and compliance requirements:

- [Data Retention](./data-retention.md), including standard retention periods, deletion requests, and backup rotation.
- [User Management](./platform/user-management.md), including profiles, teams, access scopes, and service API keys.
- [Information Security and Services](https://www.convisoappsec.com/information-security-and-services) for Conviso's security management information.
- [Conviso Status Page](https://status.convisoappsec.com) for service availability information.

## Decide and plan rollout

### Confirm commercial scope

The platform is modular. Confirm the products, plan permissions, usage-based capabilities, support arrangements, applications, assets, repositories, and environments included in the intended rollout.

Discuss availability of AI Pentest credits or other usage-based capabilities when applicable, the integrations and implementation dependencies required, expected users and service accounts, and onboarding responsibilities. See [Conviso Platform pricing](https://www.convisoappsec.com/platform/pricing) for public plan information.

### Review the PoC and prepare rollout

At the end of the PoC, review the scorecard with the decision owners. Use the agreed evidence to confirm whether Conviso Platform meets the evaluation goals, what configuration or implementation work remains, and which applications and teams should join the first rollout phase.

The [Role Based Guides](./general/role-based-guides-intro.md) can help each participant prepare for the workflows most relevant to their role.

## Plan a proof of concept with Conviso

Bring your evaluation goals, representative applications, and intended stakeholders to your Conviso contact. A Conviso FDE will help define the PoC scope, conduct the technical validation, and review the results with your team.

- Explore the [Conviso Platform documentation home](./index.md) for product areas and workflows.
- Review the [latest release notes](/releases) for recent capabilities and improvements.
- [Contact Conviso](https://www.convisoappsec.com/contact) to plan an evaluation.
