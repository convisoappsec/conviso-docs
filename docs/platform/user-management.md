---
id: user-management
title: User Management
sidebar_label: User Management
description: Manage users, teams, profiles, permissions, and access scopes in Conviso Platform.
---

## Introduction
Conviso Platform allows you to manage users, groups and roles to ensure the proper information and authorization is given for the right people.

## Description
There are types of **Users** that are categorized according to the type of permission, called **Profiles** and it is possible to group them into **Teams**.

### About Users
Conviso Platform users are all those who have access to the platform and are linked to an email and one or more companies. They are created through the [Invite New Users](#inviting-a-user) action and can be managed in [Access Control](#usage).

Users have different levels of permissions, and are defined in Profiles.

### About Profiles
Profiles are predefined sets of permissions that determine what a user can do on the system. Each profile is created for a specific role or function within the organization and is composed of a set of permissions that define which features and functionality of the system the user will have access to.

#### Custom profiles  

Custom profiles are created by administrators and allow you to define access permissions according to the organization's needs. 

There are more resources to come in the [following releases](/releases) so you can make a more granular configuration of your custom profiles. 

[Learn how to create Profiles.](#creating-a-profile)

#### Default Profiles
Default profiles are maintained by Conviso and available to every company. They can't be edited or deleted. To adjust one to your needs, [create a custom profile that starts from it](#creating-a-profile).

On the Platform, there are 8 default profiles:

| Profile | Use it for |
| --- | --- |
| [Admin](#admin-profile) | Full access, including Access Control. |
| [Developer](#developer-profile) | Software engineers working on assets and projects. |
| [Viewer-only](#viewer-only) | Viewing what was assigned, without changing anything. |
| [Pentester](#pentester) | Running pentests: recording vulnerabilities with evidence and using AI Pentest. |
| [Security Analyst](#security-analyst) | Triaging vulnerabilities, including false positives, and exporting data. |
| [AppSec Manager](#appsec-manager) | Running the AppSec program: accepting risk, requirements, compliance and threat modeling. |
| [Business Owner](#business-owner) | Business people who decide whether to accept the risk of their assets' vulnerabilities. |
| [Service Account (CI/CD)](#service-account-cicd) | Service API keys used by CI/CD pipelines. |

A profile defines what a user can do. Which assets they can do it on is set by the Access of the user, team, or API key. Some modules also depend on your company's plan: a profile with AI Pentest permissions only reaches AI Pentest if the plan includes it.

#### Conviso AST permissions
When your plan includes Conviso AST, profiles have a **Conviso AST** section with two permissions:

| Permission | Allows |
| --- | --- |
| **Run** | Running [Conviso AST](../security-scans/conviso-ast/conviso-ast.md) in Dry-Run mode, which sends nothing to the Platform. |
| **Write results to the platform** | Running Conviso AST and sending its results to the Platform. It turns **Run** on with it, and turning **Run** off turns it off. |

Every default profile has **Run**. **Write results to the platform** is on for Admin and Service Account (CI/CD), and an Admin can always run Conviso AST and send its results. A new profile starts with **Run** on and **Write results to the platform** off.

#### Developer Profile
Profile Developer was created with the aim of streamlining the platform for software engineers, so that they only have access to what is relevant to their work. Permissions:

- Limited vulnerability status update (False Positive and Risk Accepted are not allowed);
- Create, view, and edit Assets;
- Create, view, and edit Projects.

For the meaning of these vulnerability statuses, see [Workflow Status](../vulnerability-management/workflow-status.md).

To add new users with Developer Profile roles, [see here how to invite new users.](#inviting-a-user)

#### Admin Profile
The Admin profile is designed to provide full access to all the functionalities of the company's platform to which they belong, in addition to the following exclusive accesses:

- Full access to Access Control:
- Management of users in their account;
- Profile management;
- Team management ;
- Business unit management.

#### Viewer-only
The Viewer-Only profile,  a global Profile, refers to users who only have permission to view what was assigned to them on the platform by the administrator.  

#### Pentester
The Pentester profile is for pentesters testing the assets they were given access to. Permissions:

- View assets and projects, and update projects, including their checklist;
- View the secrets linked to a project;
- Create, view, and edit vulnerabilities, and attach evidence to them;
- Create, edit, and run AI Pentest, and view its results;
- Manage their own notifications and tickets.

The Pentester can't mark vulnerabilities as False Positive or Risk Accepted, export data, or delete anything.

#### Security Analyst
The Security Analyst profile is for analysts who triage vulnerabilities. Permissions:

- View everything the Viewer-only profile can view;
- Edit vulnerabilities and change their status, including to False Positive;
- Export vulnerabilities, assets, and projects to CSV.

The Security Analyst can't create or delete vulnerabilities, or mark them as Risk Accepted.

#### AppSec Manager
The AppSec Manager profile is for whoever runs the application security program. Permissions:

- Everything the Security Analyst can do;
- Mark vulnerabilities as Risk Accepted;
- Create vulnerabilities;
- Create, edit, and delete requirements and compliance items;
- Edit the AppSec Program, and create and delete its assessments;
- Create and edit threat models.

The AppSec Manager can't delete vulnerabilities, projects, assets, or threat models, and has no access to Access Control.

#### Business Owner
The Business Owner profile is for the business person responsible for an asset, who decides whether to accept its risks. Permissions:

- View everything the Viewer-only profile can view;
- Mark vulnerabilities as Risk Accepted.

The Business Owner can't change vulnerabilities to any other status, edit them, or export data. Moving a vulnerability out of Risk Accepted requires editing it, so a Business Owner can't undo an acceptance either.

#### Service Account (CI/CD)
The Service Account (CI/CD) profile is for Service API keys used by CI/CD pipelines, such as the ones that run Conviso CLI. Permissions:

- Create, view, and edit assets;
- Create, view, and edit vulnerabilities;
- Send scan results to the Platform, including [Conviso AST](#conviso-ast-permissions) results.

To use it, an Admin creates the key in **Settings > API Keys > New API Key > Service API** and selects this profile. The key only reaches the assets in its Access.

### About Teams
You can create Teams to represent different types of users within your organization.
A Team in Conviso Platform let you organize users but also manage permissions and accesses for a more efficiente user management.
For example, you can create a team called Squad A, associate to it a Profile and also define the Access the users of thar team will have. Instead of configuring every user one by one, you can just add a user to their specific team and inherit the permissions and accesses of that team.

[See how to create a team.](#creating-a-team)

## Usage

### Inviting a User
You can invite a user from the Security Feed or through the **Settings>Users** option within the left menu.
From there you need to provide the email or emails (comma-separated), select a Profile and define the Access that User will have.

### Creating a Profile
Go to **Settings > Access Control > Profiles** and click **New Profile**. Give the profile a name and choose its permissions for each resource.

To build on an existing profile, select it in **Start from**. Its permissions are filled in on the form, and you can change them before saving. The new profile is independent: later changes to either profile don't affect the other.

Some permissions can't be set on custom profiles yet, such as the ones for AI Pentest and Compliance. When you start from a default profile, those permissions aren't copied and the form shows a warning. Users with the new profile won't reach those modules.

### Creating a Team
You can create a new team from the **Settings>Users** option as well.
Just press on New Team, provide a name, add the users that you want to be part of that team,select a Profile and define the Access.

### Add/Remove a User to a Team
You need to navigate to the Teams section, edit the specific Team that you want and add/remove the user from it. Simple as that.


## Support
If you have any questions or need help using our product, please don't hesitate to contact our [support team](mailto:support@convisoappsec.com).
