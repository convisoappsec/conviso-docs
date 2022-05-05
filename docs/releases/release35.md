---
id: release35
title: Release 3.5
sidebar_label: Release 3.5
---

## New ClickUp Integration

In this release you will be able to easily integrate ClickUp as an Issue Tracking tool and gain automation as well as productivity for your developer's team. With this integration you will be able to connect a ClickUp workspace and lists, including the ability to configure custom attribute mapping and achieve a two-way integration with Conviso Platform. This two-way integration feature allows information, for example like status updates to be sent back and forth between ClickUp and Conviso Platform. This enables automation, saving time by reducing manual interaction on your behalf.

With this integration, your developers will gain productivity by getting notified with new ClickUp tasks when vulnerabilities are identified.

<div style={{textAlign: 'center'}}>

![img](../../static/img/release35-gif1.gif)

</div>

## New Chat Experience

Conviso Platform brings a new messaging experience:
Communication with the Support team, to report bugs and/or ask questions regarding the use of Conviso products and services, is now found in the side menu as Help Desk, as a sub-item of the Support icon. This will trigger the chat in the lower right corner of the screen.
Communication with Conviso Security Experts to talk about a particular Vulnerability or Project. This is where, for example you can ask for help understanding a vulnerability or even ask about the deadline of a specific project. This also can be found as a sub-item in the Support menu as Security Expert option.

<div style={{textAlign: 'center'}}>

![img](../../static/img/release35-gif2.gif)

</div>

## End of life (EOL) of a deploying endpoint

The endpoint POST /api/v2/deploys is no longer valid for creating deploys within the platform. In order to create deploys for code-review purposes, please refer to the specific documentation of the CI/CD your company is using. Here is an example of [GitHub Actions](../integrations/github-actions).

## Bug Fixes:

We take bugs seriously. In order to make Conviso Platform a more reliable product, these are some of the most important bugs that were fixed in this latest release.

### Vulnerabilities Fixes:

Vulnerability groupings issues;
Findings status update failure in deleted projects;
Bulk Change publishing vulnerabilities issues.

### Asset Management Fixes:

Asset synchronization failures.

### Integrations Fixes:

Settings errors in Jira integration;
Error sending Vulnerabilities to Jira board;
Settings and synchronization errors in Fortify integration;
Errors in SonarQube integration.

### Others:

Issues getting metrics from Bitbucket repositories;
Problems with document attachments as evidence;
DAST resource issues.