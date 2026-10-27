---
id: linear
title: Linear
sidebar_label: Linear
description: Connect Linear to Conviso Platform to send vulnerabilities and project requirements as issues, and receive status changes back.
keywords: [Linear, Defect Tracker, Requirements Sync, Webhook, Sub-issues]
---

:::note
First time using Linear? See the [Linear documentation](https://linear.app/docs).
:::

## Introduction

The Linear integration turns Conviso Platform findings into Linear issues. It covers both:

- **Vulnerabilities** — an issue per vulnerability sent to Linear.
- **Requirements Sync** — a Linear Project with nested issues, or a flat set of issues, depending on the sync mode. See [Requirements Sync](./requirements-defect-tracker.md) for the shared model.

Both run over the same connection, and each is configured on its own tab of the integration screen. You can set up one, the other, or both.

Linear is one of two providers that support **both sync modes** — nested and flat.

## Prerequisites

1. A Linear account with access to the team you want to integrate.
2. Permissions to create issues and projects in that team.
3. For project-level inbound sync, **Projects** enabled in the OAuth application's webhook subscription — see [Receiving status changes](#receiving-status-changes-from-linear).

## Connect Linear

1. In the left menu, click **Integrations**.
2. Open the **Defect Tracking** tab and click **Connect** on the **Linear** card.
3. Authorize the connection. Credentials are held by the authorization service and are never stored by Conviso Platform; the platform keeps only a reference to the connection.

Once connected, the integration screen shows two tabs: **Vulnerabilities** and **Requirements**.

## Configure vulnerabilities

On the **Vulnerabilities** tab, add a configuration:

| Field | Meaning |
|---|---|
| Default configuration | Catches every asset without a configuration of its own. One per integration. |
| Assets | Which assets this configuration covers, when it is not the default. |
| Team | The Linear team that receives the issues. |
| State | The workflow state a new issue opens in. |
| Status Mapping | Which Linear state each Conviso Platform vulnerability status corresponds to. |

Only the **Identified** status is required in the mapping. A vulnerability is born `identified`, so without that row no issue is ever created.

:::tip
Changing the team clears a state that does not belong to it. A workflow state belongs to one team, so keeping the previous selection would let the form save a team and a state that do not belong together.
:::

## Configure Requirements Sync

On the **Requirements** tab, click **Add configuration** and follow the wizard.

### Step 1 — Project and structure

Choose which Conviso Platform projects to send, the Linear team that receives them, and the **structure**:

| Structure | What Linear receives |
|---|---|
| **Nested** | A Linear **Project** for the Conviso Platform project, an issue per requirement inside it, and a sub-issue per activity. |
| **Flat** | One issue per activity, carrying its requirement and project as context. |

Projects already synced with this integration are not listed: a project can only have one configuration per tracker.

### Step 2 and 3 — Status mappings

In **nested** structure you map two levels:

- **Project status** — which Linear **project status** the Conviso Platform project moves to. A Linear Project has its own set of statuses (Backlog, Planned, In Progress, Completed, Canceled), separate from issue workflow states.
- **Activity status** — which Linear **workflow state** an activity's sub-issue moves to.

In **flat** structure only the activity level is mapped, because the project has no card.

:::note Why there is no requirement mapping
A requirement has no status of its own in Conviso Platform: it is derived from its activities. Where a requirement issue exists, it still moves — Conviso Platform works its status out from the activities under it and reuses their mapping.
:::

## Receiving status changes from Linear

Linear's webhook belongs to the **OAuth application**, not to an individual configuration, so there is nothing to create per project.

:::caution Enable Projects in the webhook subscription
Issue events arrive by default. **Project** events do not: they have to be enabled in the OAuth application's webhook subscription in Linear.

Without it, moving a Linear Project between statuses changes nothing in Conviso Platform, while issues and sub-issues keep working — which reads as a partial failure with no error anywhere.
:::

Deliveries are authenticated by signature, verified against the raw request body before the event is accepted.

### Verify it works

1. Move an issue Conviso Platform created to another workflow state.
2. Open the corresponding activity in Conviso Platform and confirm the status changed.
3. If it did not, open **Recent deliveries** on the integration screen. Every inbound event is recorded there — applied, skipped, or refused, with the reason.

## Troubleshooting

| Symptom | Cause |
|---|---|
| Issues sync, but the Linear Project's status never reaches Conviso Platform | **Projects** is not enabled in the OAuth application's webhook subscription. |
| An activity does not change when the issue moves | The Linear state is not mapped. **Recent deliveries** names the state that arrived and lists the ones that are mapped. |
| A status mapping is refused when saving | Two Conviso Platform statuses were mapped to the same Linear state. A state can only mean one thing coming back, so leave all but one of them unmapped. |
| The project status list looks unfamiliar | Linear Projects have their own statuses, which are not the team's issue workflow states. Both are mapped, separately. |

## Support

If you have questions or need help configuring this integration, contact the Conviso support team.
