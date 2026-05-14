---
id: process
title: Process
sidebar_label: Process
description: Learn how to access, manage, and follow project execution in the Conviso Platform.
keywords: [Projects, Conviso Platform, process, project management, requirements]
---

## Overview

The **Projects** area is the central workspace for organizing security projects, tracking execution, managing participants, and following project outputs such as vulnerabilities, requirements, attachments, and reports.

This process page covers how teams typically work in that view:

* access and filter the project list;
* create, edit, and delete projects;
* review project details and timeline;
* change project statuses;
* manage users, assets, vulnerabilities, attachments, and requirements.

## Access the Project List

To access the project dashboard, navigate to **Projects** in the left-hand menu:

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects4.png "Projects.")

</div>

> ⚠️ **Important:** Tags are automatically deleted from the system when they are no longer associated with any project.

On this screen, you can review project volume by status and quickly filter by clicking the corresponding status name:

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects45.png "Projects.")

</div>

You can also filter projects by name or ID:

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects46.png "Projects.")

</div>

For more advanced filtering options, click **More filters**:

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects47.png "Projects.")

</div>

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects48.png "Projects.")

</div>

You can export a CSV report of your projects by clicking **Export**:

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects49.png "Projects.")

</div>

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects50.png "Projects.")

</div>

You can also customize the project list by selecting which columns to display:

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects51.png "Projects.")

</div>

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects52.png "Projects.")

</div>

## Create, Edit, and Delete Projects

### Create a Project

To create a new project, click **Create project**, fill in the required details, and then click **Create a new project**:

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects1.png "Projects.")

</div>

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects2.png "Projects.")

</div>

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects3.png "Projects.")

</div>

### Edit a Project

To edit an existing project, locate it in the list and click the corresponding edit button:

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects10.png "Projects.")

</div>

Next, update the necessary information and click **Save**.

### Delete Projects

To delete one or multiple projects, locate them in the list and use the highlighted actions below:

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects13.png "Projects.")

</div>

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects14.png "Projects.")

</div>

## Review Project Details

After selecting a project, the default **Details** screen is displayed. There you can review project properties, edit them, or delete the project:

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects15.png "Projects.")

</div>

## Update Project Status

You can update the project status by clicking its current status and selecting a new one:

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects16.png "Projects.")

</div>

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects17.png "Projects.")

</div>

### Bulk Status Change

To update the status of multiple projects at once, select the checkboxes of the projects you want to update:

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects41.png "Projects.")

</div>

Then choose the new status, provide a reason, and click **Confirm**:

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects42.png "Projects.")

</div>

If any selected project cannot be transitioned to the chosen status, the platform displays a notification:

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects43.png "Projects.")

</div>

For status meanings and transition rules, see [Workflow Status](./workflow-status.md).

## Follow Project Activity

### Timeline

Use the **Timeline** section to monitor project progress and review the history of actions taken within the project:

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects45.png "Projects.")

</div>

### Accesses

In the **Accesses** section, you can manage project-level access and invite users who need visibility into the project:

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects19.png "Projects.")

</div>

For more information, refer to the [User Management guide](../platform/user-management.md).

### Assigned Users

**Assigned Users** are the users responsible for executing the project. To associate a user with the project, ensure they have the necessary access permissions:

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects20.png "Projects.")

</div>

## Generate a Technical Report

The **Technical Report** feature allows you to generate a report for projects conducted within the platform.

Its purpose is to document technical aspects of the project, highlight detected security risks, and include project information provided by the assigned users.

By clicking **Customize project report**, you can add an Executive Summary and Final Considerations:

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects21.png "Projects.")

</div>

Once customization is complete, click **Save**:

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects22.png "Projects.")

</div>

To generate the report, click **Generate Technical Report**, fill in the required details, and click **Save**:

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects23.png "Projects.")

</div>

:::note
Only projects of the following types can have a Technical Report: Assessment, Code Review, Penetration Testing, Reverse Engineering, Social Engineering, and Vulnerability Retest.
:::

## Work with Related Items

### Assets

Projects represent a set of activities carried out over a specific period on one or more assets to achieve a defined objective. In the **Assets** section, you can review associated assets:

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects24.png "Projects.")

</div>

:::note
Only the following project types support association with Assets: Code Review, Reverse Engineering, AI Penetration Testing, API Penetration Testing, IoT Penetration Testing, Mobile Penetration Testing, Network Penetration Testing, Web Penetration Testing, Threat Modeling, and Consulting.
:::

### Vulnerabilities

Some project types lead to the identification and creation of vulnerabilities in the Conviso Platform. In this section, you can create a new vulnerability with **New Vulnerability** or review existing vulnerabilities with **View All**:

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects25.png "Projects.")

</div>

:::note
To add a new vulnerability using **New Vulnerability**, your user must be assigned to the project and the project status must be **Running**.
:::

### Attachments

The platform allows you to associate attachments with projects so files can be shared and downloaded from the project view:

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects28.png "Projects.")

</div>

To add an attachment, edit the project.

## Manage Requirements

In the **Requirements** tab, you can create an action plan based on the tasks that need to be completed.

Requirements are categorized by status according to their progress: **To do**, **Running**, **Not According**, **Not Applicable**, and **Done**.

Each requirement can have multiple activities, which must be completed or dismissed for the project to be finalized.

To view the tasks associated with an activity, click its title:

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects29.png "Projects.")

</div>

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects30.png "Projects.")

</div>

To change an activity status, click its current status and select the desired one:

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects31.png "Projects.")

</div>

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects32.png "Projects.")

</div>

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects33.png "Projects.")

</div>

When updating an activity to **Not according**, add a reason and/or evidence:

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects35.png "Projects.")

</div>

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects37.png "Projects.")

</div>

When updating an activity to **Not applicable**, provide a reason:

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects34.png "Projects.")

</div>

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects38.png "Projects.")

</div>

When updating an activity to **Done**, add a reason and/or evidence:

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects36.png "Projects.")

</div>

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects39.png "Projects.")

</div>

After an activity status is updated, you can review who made the change in the Analyst column and when it was updated in the **Last updated** column.

If an activity is completed and has an attachment linked to it, you can download it using the **Download** icon:

<div style={{textAlign: 'center'}}>

![img](../../static/img/projects/projects40.png "Projects.")

</div>
