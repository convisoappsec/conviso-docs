---
id: sonarqube
title: Sonarqube
sidebar_label: Sonarqube
---

<div style={{textAlign: 'center'}}>

![img](../../static/img/sonarqube.png)

</div>

:::note
First time using Sonarqube? Please refer to the [following documentation](https://docs.sonarqube.org/latest/)
:::

## Introduction

Consolidate vulnerabilities: From a single console you can consolidate and apply analysis of vulnerabilities identified by scan, develop action plans for the treatment of vulnerabilities.

The integration allows the import of issues (vulnerabilities) found in Sonarqube to Conviso Platform, allowing the user to take advantage of Conviso Platform full potential for vulnerability management.

## Requirements

- Sonarqube Username;

- Sonarqube Password;

- Sonarqube URL;

- Project Key (optional).

## Configuring Sonarqube

Login to Sonarqube. Please write down the Sonarqube **URL**, **Username** and **Password**;

From the top menu bar, select **Projects** and create a **New Project**. Label the **Project Key** with an unique name (remember to write down this key, you will need it later), label the **Display Name** as you wish and then click on the **Set Up** button:

<div style={{textAlign: 'center'}}>

![img](../../static/img/sonarqube-img1.png)

</div>

Label your new token as you wish and then click on the **Generate** button to create it:

<div style={{textAlign: 'center'}}>

![img](../../static/img/sonarqube-img2.png)

</div>

Choose your **Language**, **OS** type and then click on the **Copy** button at the text box labeled **Execute the Scanner from your computer**:

<div style={{textAlign: 'center'}}>

![img](../../static/img/sonarqube-img3.png)

</div>

## Conviso Platform Setup

Log in to the [Conviso Platform](https://app.convisoappsec.com);

On the main menu to the left, click on **Integrations**. At the panel to the right, click on the **Scanners** option, then click on the **Integrate** button on the **Sonarqube** card:

<div style={{textAlign: 'center'}}>

![img](../../static/img/sonarqube-img4.png)

</div>

Fill the form with the data retrieved from Sonarqube. Note that if you not fill the **Project Key**, all of your Sonarqube Projects will be imported to Conviso Platform. When done, click on the **Save** button to store your integration configuration settings:

<div style={{textAlign: 'center'}}>

![img](../../static/img/sonarqube-img5.png)

</div>

## Connecting Conviso Platform Assets to Sonarqube

On the main menu to the left, click on **Assets Management**. Then, on the asset you want to integrate with Sonarqube, select the **Edit** icon to its right: 

<div style={{textAlign: 'center'}}>

![img](../../static/img/sonarqube-img6.png)

</div>

Click on the **Advanced Options** button to expand the asset's properties:

<div style={{textAlign: 'center'}}>

![img](../../static/img/sonarqube-img7.png)

</div>

On the **Integrations** section of the asset's properties, type ```SONAR``` to narrow your search and then select the Sonarqube integration you just created in the preceeding section:

<div style={{textAlign: 'center'}}>

![img](../../static/img/sonarqube-img8.png)

</div>

After selecting the Sonarqube Integration for your asset, scroll down to the end of the form and click on the **Save** button, to store your new configuration settings for the asset:

<div style={{textAlign: 'center'}}>

![img](../../static/img/sonarqube-img9.png)

</div>

## Importing Sonarqube Issues

On the **Assets Management**, click on the asset you want to import issues from Sonarqube:

<div style={{textAlign: 'center'}}>

![img](../../static/img/sonarqube-img10.png)

</div>

On the asset panel, click on the **Actions** button, then select **Import Sonarqube Issues**:

<div style={{textAlign: 'center'}}>

![img](../../static/img/sonarqube-img11.png)

</div>

The imported issues will be found on the **Findings** Menu.