---
id: user_management
title: User Management
sidebar_label: User Management
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

There are more resources to come in the [following releases](../releases/intro.md) so you can make a more granular configuration of your custom profiles. 

[Learn how to create Profiles.](#creating-a-profile)

#### Default Profiles
On the Platform, there are 3 default profiles:

#### Developer Profile
Profile Developer was created with the aim of streamlining the platform for software engineers, so that they only have access to what is relevant to their work. Permissions:

- Limited vulnerability status update (False Positive and Risk Accepted are not allowed);
- Create, view, and edit Assets;
- Create, view, and edit Projects.

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
You can create a new Profile with custom permission from the **Settings>Users** option as well.
Just press on New Profile and follow the instructions to define a name an specific permissions divided by resource.

### Creating a Team
You can create a new team from the **Settings>Users** option as well.
Just press on New Team, provide a name, add the users that you want to be part of that team,select a Profile and define the Access.

### Add/Remove a User to a Team
You need to navigate to the Teams section, edit the specific Team that you want and add/remove the user from it. Simple as that.


## Support
If you have any questions or need help using our product, please don't hesitate to contact our [support team](mailto:support@convisoappsec.com).

## Resources
By exploring our content you'll find resources to help you to understand the benefits of the Conviso Platform:

[Promoting a collaborative environment between Security and Development](https://bit.ly/3I0tsSc): The security and development teams have distinct but complementary goals, and working together can result in more effective and secure solutions.

[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)