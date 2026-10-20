---
id: requirements-defect-tracker
title: Requirements Sync
sidebar_label: Overview
description: Understand how Conviso Platform synchronizes project requirements and activities with external defect tracker tools.
keywords: [Requirements, Defect Tracker, Requirements Sync, Secure by Design, Jira]
---

## Introduction

**Requirements Sync** connects the **Requirements** of your Conviso Platform projects with the external backlog tools used by development teams. It lets AppSec teams turn Secure by Design work into actionable items in the engineering workflow, while keeping traceability between Conviso Platform and the external tracker.

While the standard defect tracker integrations (such as the [Jira Integration](./jira.md)) focus on **vulnerability management**, Requirements Sync focuses on **project requirements and activities**: it mirrors your project's action plan into the external tool and keeps statuses aligned in both directions.

This section is organized in two layers:

| Layer | Purpose |
|---|---|
| Requirements Sync overview (this page) | Explains the behavior shared by every Requirements Sync provider. |
| Provider guides | Explain provider-specific setup, hierarchy mapping, permissions, and troubleshooting. |

## Shared Model

Every Requirements Sync provider starts from the same Conviso Platform model:

| Conviso Platform entity | Purpose |
|---|---|
| Project | Groups the Secure by Design work for an application, product, or initiative. |
| Requirement | Represents a security requirement that should be planned and tracked. |
| Activity | Represents the execution tasks or checks linked to a requirement. |

To learn how Projects, Requirements, and Activities work in Conviso Platform, see [Requirements](../platform/requirements.md).

Each external provider maps this model to its own native hierarchy — when it has one:

| Provider | Structure | Project → | Requirement → | Activity → |
|---|---|---|---|---|
| Jira | Nested or flat | Epic | Story | Sub-task |
| Linear | Nested or flat | Project | Issue | Sub-issue |
| Asana | Flat only | — | — | Task |
| Zendesk | Flat only | — | — | Ticket |
| Freshdesk | Flat only | — | — | Ticket |

In **flat** structure, Linear, Asana, Zendesk and Freshdesk send only the activities. A tracker with no hierarchy has nowhere to hang a project or a requirement card, and a card nobody can act on only raises the question of what it is for — so the project and the requirement travel as context in the activity's description, each with a link back to Conviso Platform.

Jira's flat structure is its **Metadata** mode, which still creates the project, each requirement and each activity as independent top-level issues, related by reference labels — see [Sync modes](./jira-requirements.md#sync-modes).

:::note
The external tracker is the execution workspace. Conviso Platform remains the source of truth for security requirements, evidence, and Secure by Design governance regardless of the provider.
:::

## Shared Capabilities

Every Requirements Sync integration supports:

- **Outbound sync** — Conviso Platform creates and updates records in the external provider. In **nested** structure that is one item for the project, its requirements, and its activities, as a parent/child hierarchy. In **flat** structure it is one item per activity, carrying the requirement and project as context — except on Jira, where Metadata mode keeps one top-level item for each of the three. See the provider guide (for Jira, [Sync modes](./jira-requirements.md#sync-modes)).
- **Inbound status sync** — Status changes in the external provider are received and applied back to Conviso Platform (via webhooks) when a matching status mapping exists.
- **Manual Sync** — Creates or refreshes the external hierarchy on demand, reconciling created, updated, and removed items.
- **Auto Sync** — Sends changes automatically when a project, requirement, or activity is created, updated, or removed.
- **Status mappings** — Link Conviso Platform statuses to the external workflow statuses, per level.
  - **Linear, Asana, Zendesk and Freshdesk** never ask for a requirement mapping: a requirement has no status of its own in Conviso Platform, so where a requirement card exists its status is derived from the activities under it and placed with the activity mapping. A given external status may be claimed by only one Conviso Platform status per level — two would be undecidable when the change comes back from the tracker, so the configuration is refused.
  - **Jira** maps requirement statuses in its own wizard step and uses them as configured; a status left unmapped there is not moved. Only a configuration that maps no requirement status at all falls back to the activity mapping. Jira also accepts two Conviso Platform statuses on the same Jira status.
- **Recent deliveries** — Integration logs that record successful syncs, skipped updates, unmapped statuses, and external errors.

## Provider Guides

Select the guide for your tool:

| Provider | Status | Guide |
|---|---|---|
| Jira | Available | [Jira Requirements Integration](./jira-requirements.md) |
| Linear | Available | [Linear](./linear.md) |
| Asana | Available | [Asana](./asana.md) |
| Zendesk | Available | [Zendesk](./zendesk.md) |
| Freshdesk | Available | [Freshdesk](./freshdesk.md) |
| Azure Boards | Planned | — |
| ServiceNow | Planned | — |
| ClickUp | Planned | — |
| BusinessMap | Planned | — |

:::caution Receiving status changes requires a reachable address
Inbound sync arrives by webhook, so the external tracker has to be able to reach Conviso Platform. Freshdesk additionally needs an automation rule created by hand, because it has no API for webhooks — see [Freshdesk](./freshdesk.md#receiving-status-changes-from-freshdesk).
:::

## Support

If you have questions or need help configuring Requirements Sync, contact the Conviso support team.
