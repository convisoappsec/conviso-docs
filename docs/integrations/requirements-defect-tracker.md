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

Each external provider maps this model to its own native hierarchy. For example:

| Provider | Project → | Requirement → | Activity → |
|---|---|---|---|
| Jira | Epic | Story | Sub-task |

:::note
The external tracker is the execution workspace. Conviso Platform remains the source of truth for security requirements, evidence, and Secure by Design governance regardless of the provider.
:::

## Shared Capabilities

Every Requirements Sync integration supports:

- **Outbound sync** — Conviso Platform creates and updates records in the external provider (one parent item for the project, child items for its requirements, and leaf items for the activities).
- **Inbound status sync** — Status changes in the external provider are received and applied back to Conviso Platform (via webhooks) when a matching status mapping exists.
- **Manual Sync** — Creates or refreshes the external hierarchy on demand, reconciling created, updated, and removed items.
- **Auto Sync** — Sends changes automatically when a project, requirement, or activity is created, updated, or removed.
- **Status mappings** — Link Conviso Platform statuses to the external workflow statuses, per entity type (project, requirement, activity).
- **Recent deliveries** — Integration logs that record successful syncs, skipped updates, unmapped statuses, and external errors.

## Provider Guides

Select the guide for your tool:

| Provider | Status | Guide |
|---|---|---|
| Jira | Available | [Jira Requirements Integration](./jira-requirements.md) |
| Azure Boards | Planned | — |
| ServiceNow | Planned | — |
| ClickUp | Planned | — |
| BusinessMap | Planned | — |

## Support

If you have questions or need help configuring Requirements Sync, contact the Conviso support team.
