---
id: github
title: GitHub Integration
sidebar_label: GitHub
description: You can inspect Code Insights with the Conviso Platform integrated into your GitHub. Learn more!
keywords: [GitHub Integration]
---

<div style={{textAlign: 'center'}}>

<!-- FIXME: @dsmlucas use image for GitHub -->

[![img](../../static/img/gitlab.png "Image for GitHub")](https://bit.ly/3JyRdl8)

</div>

## Introduction

The **Conviso Platform** integration with [GitHub](https://github.com/) enables seamless integration of security checks into your development workflow. By connecting your GitHub repositories to the Conviso Platform, you can easily monitor and analyze code insights directly from within a secure virtual environment. This integration ensures continuous code inspection, identifying vulnerabilities, insecure coding practices, and other potential risks without disrupting your development process.

### Prerequisites

Before you can use Conviso Platform with GitHub, ensure that:

- You have **administrator access** to your GitHub organization or repositories.

This permission allows you to grant Conviso the necessary access to the desired repositories.

## Configuring the Integration Between Conviso Platform and GitHub

Follow these steps to configure the GitHub integration with Conviso Platform.

### Step 1 - Select the Integration

Navigate to the integrations page, search for **GitHub**, and click **Connect**.

![img](../../static/img/github/github-01.png)

### Step 2 - Authorize GitHub App

Click **Authorize GitHub App**, which will redirect you to GitHub's authorization page where you can grant the required permissions.

![img](../../static/img/github/github-02.png)

### Step 3 - Select the Organization or Account

You will be presented with a list of organizations you have access to. Select the desired organization to proceed with the integration.

![img](../../static/img/github/github-03.png)

### Step 4 - Grant Access to Repositories

You can now choose whether to grant access to **All repositories** or manually select specific repositories by choosing **Only select repositories**.

![img](../../static/img/github/github-04.png)

After granting access, you will be redirected to the **Conviso Platform**.

![img](../../static/img/github/github-05.png)

Once redirected, click **Continue** to save the integration and proceed.

:::info
A success message, "Integration saved successfully," will confirm the integration is complete.
:::

### Step 5 - Configure Asset Mapping

Click **Add** to map a **Conviso Platform** asset to a **GitHub** repository.

![img](../../static/img/github/github-06.png)

Select the asset and the corresponding repository:

![img](../../static/img/github/github-07.png)

### Step 6 - Verify Configuration Mappings

After completing the previous steps, you can view your configured assets:

![img](../../static/img/github/github-08.png)

## Usage

The GitHub integration provides the following key resources:

- [Code Insights](#code-insights)

### Code Insights

The **Code Insights** module offers a comprehensive analysis of your entire codebase, focusing on the mapped assets in a secure virtual environment. This module provides deep insights into your code, identifying potential vulnerabilities, unsafe coding patterns, and areas for improvement. By using this feature, you ensure that your application maintains high security standards throughout its development lifecycle.

### Locate the Configured Asset

To access the **Code Insights**, first locate the configured asset and navigate to **More Details > Code Insights**. Then click **View**.

![img](../../static/img/github/github-09.png)

After clicking **View**, a dialog box will appear where you can initiate the process by clicking **Start a virtual environment**:

![img](../../static/img/github/github-10.png)

Wait until the virtual environment is provisioned:

![img](../../static/img/github/github-11.png)

### Accessing Code Insights

Once the environment is ready, you will receive a **link** and **password** to access it:

![img](../../static/img/github/github-12.png)

After accessing the link, a new tab will open, displaying the following:

![img](../../static/img/github/github-13.png)

Enter the **password** provided in the previous dialog, and your repository will be fully accessible in the virtual environment:

![img](../../static/img/github/github-14.png)

## Support

If you have any questions or need assistance using our product, feel free to contact our support team.

**[Unlock the full potential of your Application Program with Conviso Platform integrations. Visit our Integration page now to get started.](https://bit.ly/3NzvomE)**
