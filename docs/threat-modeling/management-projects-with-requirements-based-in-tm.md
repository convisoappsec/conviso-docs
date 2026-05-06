---
id: management-projects-with-requirements-based-in-tm
title: Management Projects with Requirements Based in TM
sidebar_label: Management Projects with Requirements Based in TM
description: Manage threat-modeling-based projects and follow the implementation of generated requirements in Project Management.
keywords: [Threat Modeling, projects, requirements, Project Management, Conviso Platform]
image: '/static/img/securityfeedseo.png'
---

## Overview

After creating a threat modeling artifact and turning it into a project, the implementation work is managed through the project workflow and its generated requirements.

This is the operational bridge between:

* the threat model;
* the generated security requirements;
* the execution and validation work performed by the team.

## Access the Project

After the threat modeling project is created, open it in **Projects** to monitor the implementation lifecycle.

At the beginning of the execution, the project may still be in the **To do** phase.
For project status definitions, see [Workflow Status](../project-management/workflow-status.md).

To indicate that work has started, update the project status to **Running**.

## Review Generated Requirements

Inside the project, open the **Requirements** tab to review the requirements generated from the threat modeling process.

These requirements are based on the identified threats and the underlying requirement model used by the platform.

In this view, you can:

* review all generated requirements;
* track implementation progress;
* access history and attachments;
* update requirement and activity statuses.

The requirements are categorized by execution statuses such as:

* `To do`
* `Running`
* `Not According`
* `Not Applicable`
* `Done`

## Implement a Requirement

Before implementation starts, review the requirement to confirm whether it is applicable to the application scope.

Typical flow:

1. Move the requirement or activity from `To do` to `Running`.
2. Open the requirement details and execute the necessary implementation work.
3. If the requirement does not apply, mark it as `Not Applicable` and provide justification.
4. If the requirement is implemented, mark it as `Done` and attach evidence for the security team review.

Evidence can be provided as text or file attachments, depending on the implementation context.

## Move Toward Final Validation

After the implementation of the generated security requirements is completed, the next step is to move the project toward final validation by the security team.

At that point, the team can:

* finish implementation work in requirements;
* update the project status as needed;
* wait for the security review and testing cycle.

## Related Pages

For the broader workflows behind this execution model, see:

* [Project Management / Process](../project-management/process.md)
* [Requirements](../platform/requirements.md)
