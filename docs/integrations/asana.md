---
id: asana
title: Asana
sidebar_label: Asana
description: Connect Asana to Conviso Platform to send vulnerabilities and project requirements as tasks, and receive status changes back.
keywords: [Asana, Defect Tracker, Requirements Sync, Webhook, Sections]
---

:::note
First time using Asana? See the [Asana documentation](https://help.asana.com/).
:::

## Introduction

The Asana integration turns Conviso Platform findings into Asana tasks. It covers both:

- **Vulnerabilities** — a task per vulnerability sent to Asana.
- **Requirements Sync** — a task per activity of a Conviso Platform project. See [Requirements Sync](./requirements-defect-tracker.md) for the shared model.

Both run over the same connection, and each is configured on its own tab of the integration screen. You can set up one, the other, or both.

## Prerequisites

1. An Asana account with access to the workspace you want to integrate.
2. An existing Asana **project** whose sections represent your workflow statuses — see [Status is a section](#status-is-a-section).
3. Permissions to create tasks and webhooks in that project.

## Status is a section

This is the one thing that shapes everything else about this integration.

In Asana, a task's status is **not a field**. It is the **section** the task sits in. Conviso Platform therefore moves tasks between sections rather than writing a status value, and the status mapping offers your project's sections rather than a list of states.

Two consequences:

- You must point the integration at an **existing** Asana project whose sections are the statuses you want to map. Conviso Platform does not create a project: a new one would come with Asana's default sections and your mapping would have nothing to point at.
- A project with no sections — a plain list-view project — has nothing to map. The screen says so rather than showing an empty selector.

:::note
Asana returns a task with no section as belonging to `(no section)`. Conviso Platform filters that entry out of the mapping options, since it is not a status anyone chose.
:::

## Connect Asana

1. In the left menu, click **Integrations**.
2. Open the **Defect Tracking** tab and click **Connect** on the **Asana** card.
3. Authorize the connection. Credentials are held by the authorization service and are never stored by Conviso Platform; the platform keeps only a reference to the connection.

Once connected, the integration screen shows two tabs: **Vulnerabilities** and **Requirements**.

## Configure vulnerabilities

On the **Vulnerabilities** tab, add a configuration:

| Field | Meaning |
|---|---|
| Default configuration | Catches every asset without a configuration of its own. One per integration. |
| Assets | Which assets this configuration covers, when it is not the default. |
| Workspace | The Asana workspace. |
| Project | The Asana project whose sections are the statuses. |
| Status Mapping | Which section each Conviso Platform vulnerability status corresponds to. |

Only the **Identified** status is required in the mapping. A vulnerability is born `identified`, so without that row no task is ever created.

:::tip
Changing the workspace clears the project, its sections, and the mapping. A project belongs to one workspace, so keeping the previous selection would let the form save a workspace and a project that do not belong together.
:::

## Configure Requirements Sync

On the **Requirements** tab, click **Add configuration** and follow the wizard.

### Step 1 — Project

Choose which Conviso Platform projects to send, then the Asana workspace and project that will receive the tasks.

Projects already synced with this integration are not listed: a project can only have one configuration per tracker.

### Step 2 — Activity status mapping

Map each Conviso Platform activity status to a section of the chosen Asana project.

### What Asana receives

Requirements Sync sends **one task per activity**, as a direct member of the configured project. There is no task for the project or for the requirement: a section applies to a task that is a direct member of the project, so a nested card would have no status to move through. They travel as context in the task notes instead:

```
<the activity's detail>

Reference: <the activity's reference>

Requirement: <requirement name> — <link to the platform>

Project: <project name> — <link to the platform>
```

:::note
The links are built from the platform's public address. If it is not configured, the requirement and project **names** are still sent and only the links are omitted.
:::

## Receiving status changes from Asana

Conviso Platform creates a webhook in your Asana project when a configuration is saved. Asana confirms the webhook with a handshake, and Conviso Platform keeps the signing secret it returns; every later delivery is verified against that signature.

One webhook is kept **per Asana project**. Several Conviso Platform configurations — different assets, different branches, the requirements configuration — can point at the same Asana project and share it. Repointing one configuration therefore does not remove the webhook: only disconnecting the integration does.

:::note Why a move arrives as `added`
Moving a task between sections reaches Conviso Platform as an `added` event, not `changed`: Asana removes the task from one section and adds it to another. Conviso Platform reads the task's current section back before applying anything, because the event says a task changed, not what it changed to.
:::

### Verify it works

1. Move a task Conviso Platform created to another section.
2. Open the corresponding activity in Conviso Platform and confirm the status changed.
3. If it did not, open **Recent deliveries** on the integration screen. Every inbound event is recorded there — applied, skipped, or refused, with the reason.

## Troubleshooting

| Symptom | Cause |
|---|---|
| The configuration cannot be saved without a project | Asana refuses a task with no project, and the error it returns does not say the configuration is incomplete. The project is required. |
| An activity does not change when the task moves | The section is not mapped. **Recent deliveries** names the section that arrived and lists the ones that are mapped. |
| A status mapping is refused when saving | Two Conviso Platform statuses were mapped to the same section. A section can only mean one thing coming back, so leave all but one of them unmapped. |
| No sections appear in the mapping | The Asana project has none. Add sections in Asana, or choose a project that has them. |
| Nothing arrives after changing the platform's address | Asana delivers to the address recorded when the webhook was created. Reconnect the integration so the webhook is recreated. |

## Support

If you have questions or need help configuring this integration, contact the Conviso support team.
