---
id: zendesk
title: Zendesk
sidebar_label: Zendesk
description: Connect Zendesk to Conviso Platform to send vulnerabilities and project requirements as tickets, and receive status changes back.
keywords: [Zendesk, Defect Tracker, Requirements Sync, Webhook, Trigger]
---

:::note
First time using Zendesk? See the [Zendesk documentation](https://support.zendesk.com/).
:::

## Introduction

The Zendesk integration turns Conviso Platform findings into Zendesk tickets. It covers both:

- **Vulnerabilities** — a ticket per vulnerability sent to Zendesk.
- **Requirements Sync** — a ticket per activity of a Conviso Platform project. See [Requirements Sync](./requirements-defect-tracker.md) for the shared model.

Both run over the same connection, and each is configured on its own tab of the integration screen. You can set up one, the other, or both.

Unlike Freshdesk, Zendesk exposes an API for webhooks: Conviso Platform creates the webhook and its trigger for you when you save a configuration. No manual step is required.

## Prerequisites

1. A Zendesk account.
2. Permissions to create tickets, webhooks, and triggers.

## Connect Zendesk

1. In the left menu, click **Integrations**.
2. Open the **Defect Tracking** tab and click **Connect** on the **Zendesk** card.
3. Authorize the connection. Credentials are held by the authorization service and are never stored by Conviso Platform; the platform keeps only a reference to the connection.

Once connected, the integration screen shows two tabs: **Vulnerabilities** and **Requirements**.

:::tip Check the connection health
The integration screen reports whether the connection is still valid. A Zendesk connection without a refresh token expires and has to be reconnected; the screen shows this as **expiring** with the date, before synchronization starts failing.
:::

## Configure vulnerabilities

On the **Vulnerabilities** tab, add a configuration:

| Field | Meaning |
|---|---|
| Default configuration | Catches every asset without a configuration of its own. One per integration. |
| Assets | Which assets this configuration covers, when it is not the default. |
| Group | Optional. Leave empty to use the account's default queue. |
| Status Mapping | Which Zendesk status each Conviso Platform vulnerability status corresponds to. |

Only the **Identified** status is required in the mapping. A vulnerability is born `identified`, so without that row no ticket is ever created.

## Configure Requirements Sync

On the **Requirements** tab, click **Add configuration** and follow the wizard.

### Step 1 — Project

Choose which Conviso Platform projects to send, and the Zendesk group the tickets should land in. The group is optional: a ticket with no group goes to the account's default queue.

Projects already synced with this integration are not listed: a project can only have one configuration per tracker.

### Step 2 — Activity status mapping

Map each Conviso Platform activity status to a Zendesk status.

The list offers your account's statuses, including [custom statuses](https://support.zendesk.com/hc/en-us/articles/4412575914522). Each status is stored by its id **and** by its name, which is what lets inbound deliveries resolve whichever form Zendesk sends.

### What Zendesk receives

A Zendesk ticket has no parent of any kind, so Requirements Sync sends **one ticket per activity**. There is no ticket for the project or for the requirement: with no nesting there would be nothing to act on them from a support queue, so they travel as context in the ticket description:

```
<the activity's detail>

Reference: <the activity's reference>

Requirement: <requirement name> — <link to the platform>

Project: <project name> — <link to the platform>
```

:::note
The links are built from the platform's public address. If it is not configured, the requirement and project **names** are still sent and only the links are omitted.
:::

## Receiving status changes from Zendesk

Conviso Platform creates a webhook and a trigger in your Zendesk account when a configuration is saved. The trigger fires when a ticket's status or custom status changes and posts the ticket id to Conviso Platform.

Deliveries are authenticated by **signature**: Zendesk signs the timestamp concatenated with the body, and Conviso Platform verifies it before accepting the event.

:::note Why the trigger sends only the ticket id
Zendesk's `{{ticket.status}}` placeholder renders the **localized label** — `Resolvido` in a Portuguese account, `Resolved` in an English one — while a status mapping holds the API value. A payload built on that placeholder would never match in a localized account, and would match only by accident in an English one.

The trigger therefore carries the ticket id, and Conviso Platform reads the current status back from the Zendesk API. This costs one extra call per event and is correct in every locale.
:::

### Verify it works

1. Move a ticket Conviso Platform created to another status.
2. Open the corresponding activity in Conviso Platform and confirm the status changed.
3. If it did not, open **Recent deliveries** on the integration screen. Every inbound event is recorded there — applied, skipped, or refused, with the reason.

## Troubleshooting

| Symptom | Cause |
|---|---|
| An activity does not change when the ticket moves | The Zendesk status is not mapped. **Recent deliveries** names the status that arrived and lists the ones that are mapped. |
| A status mapping is refused when saving | Two Conviso Platform statuses were mapped to the same Zendesk status. A tracker status can only mean one thing coming back, so leave all but one of them unmapped. |
| Synchronization stops after a while | The connection expired. The integration screen reports the connection as expiring or requiring a reconnect. |
| A ticket reaches a status and can never leave it | Zendesk's `Closed` is terminal: the ticket is frozen and even Zendesk cannot move it. Map Conviso Platform statuses to `Solved` rather than `Closed` if you expect the work to reopen. |
| Everything stops after an address change | Zendesk delivers to the address recorded when the webhook was created. If the platform's public address changes, reconnect the integration so the webhook is recreated. |

## Support

If you have questions or need help configuring this integration, contact the Conviso support team.
