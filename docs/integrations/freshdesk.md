---
id: freshdesk
title: Freshdesk
sidebar_label: Freshdesk
description: Connect Freshdesk to Conviso Platform to send vulnerabilities and project requirements as tickets, and receive status changes back.
keywords: [Freshdesk, Defect Tracker, Requirements Sync, Webhook, Automation]
---

:::note
First time using Freshdesk? See the [Freshdesk documentation](https://support.freshdesk.com/).
:::

## Introduction

The Freshdesk integration turns Conviso Platform findings into Freshdesk tickets. It covers both:

- **Vulnerabilities** — a ticket per vulnerability sent to Freshdesk.
- **Requirements Sync** — a ticket per activity of a Conviso Platform project. See [Requirements Sync](./requirements-defect-tracker.md) for the shared model.

Both run over the same connection, and each is configured on its own tab of the integration screen. You can set up one, the other, or both.

:::caution Freshdesk needs one manual step
Freshdesk is the only supported tracker with **no API for creating webhooks**. Conviso Platform can send tickets to Freshdesk as soon as you connect, but to receive status changes **back** you must create an automation rule by hand in the Freshdesk admin. Until you do, synchronization works in one direction only, and nothing on either screen will say so.

See [Receiving status changes from Freshdesk](#receiving-status-changes-from-freshdesk).
:::

## Prerequisites

1. A Freshdesk account, with an agent user able to create tickets.
2. Administrator access to Freshdesk, to create the automation rule.
3. A **contact in Freshdesk** to own the tickets Conviso Platform opens — see [Requester](#requester-required).

## Connect Freshdesk

1. In the left menu, click **Integrations**.
2. Open the **Defect Tracking** tab and click **Connect** on the **Freshdesk** card.
3. Authorize the connection. Credentials are held by the authorization service and are never stored by Conviso Platform; the platform keeps only a reference to the connection.

Once connected, the integration screen shows two tabs: **Vulnerabilities** and **Requirements**.

## Requester (required)

Freshdesk **refuses to create a ticket with no requester**, and the error it returns does not say that the configuration is incomplete. Because of this, the requester email is part of the configuration rather than something Conviso Platform derives.

Use an address that exists as a contact in your Freshdesk account — for example an automation mailbox such as `automations@yourcompany.com`. Every ticket Conviso Platform opens is created on behalf of that contact.

This is also what lets you scope the automation rule to the integration's tickets instead of your whole helpdesk — see [Condition](#condition).

:::tip
Priority is set to **Medium** on every ticket Conviso Platform creates through Requirements Sync. Freshdesk requires a priority on create, and a requirement has no severity to derive one from. The card mirrors planned work, not an incident.
:::

## Configure vulnerabilities

On the **Vulnerabilities** tab, add a configuration:

| Field | Meaning |
|---|---|
| Default configuration | Catches every asset without a configuration of its own. One per integration. |
| Assets | Which assets this configuration covers, when it is not the default. |
| Requester e-mail | The contact that owns the tickets. Required — see [Requester](#requester-required). |
| Group | Optional. Leave empty to use the account's default queue. |
| Status Mapping | Which Freshdesk status each Conviso Platform vulnerability status corresponds to. |

Only the **Identified** status is required in the mapping. A vulnerability is born `identified`, so without that row no ticket is ever created.

## Configure Requirements Sync

On the **Requirements** tab, click **Add configuration** and follow the wizard.

### Step 1 — Project

Choose which Conviso Platform projects to send, and the Freshdesk fields the tickets will carry (requester and group).

Projects already synced with this integration are not listed: a project can only have one configuration per tracker.

### Step 2 — Activity status mapping

Map each Conviso Platform activity status to a Freshdesk status.

### What Freshdesk receives

Freshdesk has no three-level hierarchy, so Requirements Sync sends **one ticket per activity**. There is no ticket for the project or for the requirement: with no nesting there would be nothing to act on them from a support queue, so they travel as context in the ticket description:

```
<the activity's detail>

Reference: <the activity's reference>

Requirement: <requirement name> — <link to the platform>

Project: <project name> — <link to the platform>
```

:::note
The links are built from the platform's public address. If it is not configured, the requirement and project **names** are still sent and only the links are omitted.
:::

## Receiving status changes from Freshdesk

This is the manual step. Without it, tickets are created and updated in Freshdesk, but moving a ticket between statuses changes nothing in Conviso Platform.

### Where to find the webhook address

Open the Freshdesk integration in Conviso Platform. The webhook URL is shown on the integration screen and has this shape:

```
https://<your-conviso-platform-address>/api/v3/integrations/freshdesk/webhook?company_id=<id>&webhook_token=<token>
```

:::danger Treat this URL as a secret
Unlike Linear, Asana, and Zendesk, Freshdesk does not sign its deliveries. **The token in the URL is the only thing authenticating them.** Anyone holding this URL can post status changes into your account. Do not share it, and do not paste it into tickets or chats.
:::

### Create the automation rule

In Freshdesk, go to **Admin → Workflows → Automations → Ticket Updates** and create a rule.

#### Event

**Status is changed** — from any status, to any status.

#### Condition

Freshdesk requires at least one condition before the action.

| Recommended | Condition |
|---|---|
| ✅ | **Requester** `is` the address you configured (for example `automations@yourcompany.com`) |
| Fallback | **Status** `is any of` Open, Pending, Resolved, Closed |

Prefer the requester condition. It scopes the rule to the tickets this integration created.

The fallback matches every ticket in the helpdesk, which works but means **every** ticket update — including tickets from real customers, with their subjects and ids — is sent to the Conviso Platform endpoint. Conviso Platform ignores what it does not recognize, but the data still leaves Freshdesk.

#### Action

**Trigger Webhook**, configured as:

| Setting | Value |
|---|---|
| Request type | `POST` |
| Callback URL | the webhook address above, including `company_id` and `webhook_token` |
| Encoding | `JSON` |
| Content | Advanced / custom, with the body below |

```json
{"freshdesk_webhook": {"ticket_id": "{{ticket.id}}", "ticket_status": "{{ticket.status}}"}}
```

:::note Why the body matters
`{{ticket.status}}` renders the **label** (`Open`, `Pending`, `Resolved`), not the numeric id Freshdesk uses in its API. Conviso Platform matches the value it receives against both the id and the name recorded in your status mapping, so either form resolves correctly.

If the rule sends only the ticket id, Conviso Platform reads the current status back from the Freshdesk API instead. The status field is therefore recommended, not mandatory.
:::

### Verify it works

1. Move a ticket Conviso Platform created to another status.
2. Open the corresponding activity in Conviso Platform and confirm the status changed.
3. If it did not, open **Recent deliveries** on the integration screen. Every inbound event is recorded there — applied, skipped, or refused, with the reason.

## Troubleshooting

| Symptom | Cause |
|---|---|
| Tickets are created, but status changes never reach Conviso Platform | The automation rule is missing, disabled, or its condition does not match the ticket. |
| The ticket is created with no requester error | The requester address is not a contact in Freshdesk, or the field is empty in the configuration. |
| An activity does not change when the ticket moves | The Freshdesk status is not mapped. **Recent deliveries** names the status that arrived and lists the ones that are mapped. |
| A status mapping is refused when saving | Two Conviso Platform statuses were mapped to the same Freshdesk status. A tracker status can only mean one thing coming back, so leave all but one of them unmapped. |
| Everything stops after an address change | The callback URL in the automation rule is fixed text. If the platform's public address changes, the rule keeps posting to the old one and fails silently. Update the rule. |

## Support

If you have questions or need help configuring this integration, contact the Conviso support team.
