---
id: notifications-center
title: Explore the Notifications Center for Proactive AppSec Alerts
sidebar_label: Notifications Center
description: Configure and manage how you receive application security notifications in the Conviso Platform. Stay informed about risks, vulnerabilities, projects, and assets through email, in-app, and chat integrations.
keywords: [Notifications Center,Conviso Platform,AppSec notifications,application security alerts,risk management,vulnerability notifications,Slack integration,Microsoft Teams integration,ASPM]
image: '/static/img/securityfeedseo.png'

---
## Introduction

The Notifications Center allows you to control how and when you receive alerts about important Application Security (AppSec) events in the Conviso Platform.

By configuring notifications, you can:
* Stay aware of security-relevant changes in real time
* Reduce blind spots related to risk, vulnerabilities, and projects
* Keep your team aligned through email, in-app alerts, or chat tools
* Notification preferences are fully customizable per user, giving you control without adding unnecessary noise.

## Usage
To access the Notifications Center:

* Click your user menu in the top-right corner of the platform
* Select **Notifications Center**

From this page, you can manage all notification channels and event preferences.

<div style={{textAlign: 'center'}}>

![img](../../static/img/platform/notifications-center-01.png")

</div>

<div style={{textAlign: 'center'}}>

![img](../../static/img/platform/notifications-center-02.png")

</div>

## Notification Channels

The Conviso Platform supports multiple channels for receiving notifications. Each channel can be enabled or disabled independently.

**Email**

Receive notifications directly in your inbox.

Recommended for:
* Critical security alerts
* Risk acceptance expiration reminders
* Events that require follow-up outside the platform

Email notifications can be customized per event using the Settings option.

<div style={{textAlign: 'center'}}>

![img](../../static/img/platform/notifications-center-03.png")

</div>

**In-App**

Receive notifications directly inside the Conviso Platform interface.

Recommended for:

* Day-to-day operational visibility
* Real-time awareness while using the platform
* In-app notifications appear in the notification bell and can be configured per event type.

<div style={{textAlign: 'center'}}>

![img](../../static/img/platform/notifications-center-04.png")

</div>

## Chat (Integrations)

Send AppSec notifications to collaboration tools used by your team.

Supported integrations:
* Slack
* Microsoft Teams

Chat notifications help surface security events where teams already communicate.

To configure chat notifications, expand the Chat section in the Notifications Center and click Integrate for the desired tool.

<div style={{textAlign: 'center'}}>

![img](../../static/img/platform/notifications-center-05.png")

</div>

**Slack**

Slack integration allows AppSec events to be delivered directly to Slack channels, improving visibility and response time for development and security teams.

For setup instructions, refer to the official documentation:
https://docs.convisoappsec.com/integrations/slack

**Microsoft Teams**

Microsoft Teams integration enables AppSec notifications to be sent to Teams channels, ensuring visibility for teams using the Microsoft ecosystem.

For setup instructions, refer to the official documentation:
https://docs.convisoappsec.com/integrations/microsoft-teams/

## Available Notification Events

You can enable or disable notifications for the following events.

### Assets and Risk

**Asset Risk Score Decreased**
Triggered when an asset’s Risk Score decreases, indicating an improvement in security posture.

**Asset Risk Score Increased**
Triggered when an asset’s Risk Score increases, signaling elevated risk.

**Environment Compromised**
Triggered when a vulnerability compromises an asset’s environment.

**New Asset Created**
Triggered when a new asset is created in the platform.

### Projects

**New Project Created**
Triggered when a new project is created.

**Project Changed Status**
Triggered when a project’s status changes.

**Project Requirement Status Changed**
Triggered when the status of a project requirement is updated.

### Risk Acceptance

**Risk Acceptance Expires Today**
Sent on the day a risk acceptance expires.

**Risk Acceptance Reminder – 7 Days**
Sent seven days before a risk acceptance expires.

### Vulnerabilities

**Vulnerability Daily Digest**
A daily summary of vulnerabilities whose status changed on the previous day.

**Vulnerability Status Changed to Risk Accepted**
Triggered when a vulnerability’s status is changed to Risk Accepted.

## Managing Your Notification Preferences

Notification settings are configured per user
* Each channel (Email, In-App, Chat) can be managed independently
* Events can be selectively enabled per channel
* Changes take effect immediately

## Best Practices
* Use In-App notifications for continuous operational awareness
* Use Email for critical alerts and deadline-based reminders
* Use Slack or Microsoft Teams to share security events with the broader team
* Avoid enabling all events across all channels to reduce notification fatigue

## Notes and Limitations
* Notification settings are user-specific and not global
* Chat notifications require an active integration
* Notifications complement dashboards and reports but do not replace in-depth analysis


**Enhance your development lifecycle's security with the Conviso Platform. Join us today and foster a security-first culture!**

## Support

Should you have any questions or require assistance while using the Conviso Platform, feel free to reach out to our dedicated support team.


