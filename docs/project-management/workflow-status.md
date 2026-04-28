---
id: workflow-status
title: Workflow Status
sidebar_label: Workflow Status
description: Understand project statuses and allowed status transitions in the Conviso Platform.
keywords: [Projects, Conviso Platform, workflow, status, project management]
---

## Overview

Projects in the Conviso Platform follow a simple status workflow that helps teams track execution progress, pauses, completion, and discontinuation.

## Project Statuses

The platform uses the following project statuses:

* **To do**: The project has not started yet.
* **Running**: The project is currently in progress.
* **Done**: The project has been completed and its objectives have been accomplished.
* **Paused**: The project has been temporarily suspended, for example due to priority changes or lack of resources.
* **Discontinued**: The project has been suspended and is no longer moving forward.

## Allowed Status Transitions

The Conviso Platform allows the following status transitions for projects:

<div style={{display: 'ruby-text'}}>

| Current Status | Allowed Statuses                  |
| -------------- | --------------------------------- |
| To Do          | Running, Discontinued             |
| Running        | To Do, Paused, Discontinued, Done |
| Paused         | Running, Discontinued             |
| Discontinued   | To Do, Running                    |
| Done           | Running                           |

</div>

## Notes

Project status changes are recorded in the project timeline, providing traceability for operational follow-up.
