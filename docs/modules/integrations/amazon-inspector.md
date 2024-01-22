---
id: amazon-inspector
title: Amazon Inspector
sidebar_label: Amazon Inspector
---

<div style={{textAlign: 'center'}}>

![img](../../../static/img/amazon-inspector.png)

</div>

:::note
First time using Amazon Inspector? Please refer to the [following documentation](https://docs.aws.amazon.com/inspector/).  
:::

## Introduction

Consolidate vulnerabilities: from a single console, you can consolidate and apply vulnerabilities review identified by scan and develop action plans for vulnerabilities management.

This integration allows the import of issues (vulnerabilities) found in Amazon Inspector to Conviso Platform, allowing the user to take advantage of Conviso Platform's full potential for vulnerability management.


## Requirements

The integration between the Conviso Platform and AWS Inspector requires three essential pieces of information:

- AWS Region;
- AWS Access keys ID;
- AWS Secret key Access.

In the next section, you will be guided through AWS Console to be able to retrieve these data.

## Amazon Inspector Setup

Log on to your AWS Console as an Administrator;

On the top bar menu, click on Services and then choose IAM: 

<div style={{textAlign: 'center'}}>

![img](../../../static/img/amazon-inspector-img0.png)

</div>

On the menu to the left, click on **Users**:

<div style={{textAlign: 'center'}}>

![img](../../../static/img/amazon-inspector-img1.png)

</div>

At the right panel, click on the **Add Users** button:

<div style={{textAlign: 'center'}}>

![img](../../../static/img/amazon-inspector-img2.png)

</div>

Choose a desired label for the new user in the "User Name" field. In the "Select AWS Access Type" section, mark the checkbox adjacent to "Access Key - Programmatic Access." Once completed, proceed by clicking the "Next - Permissions" button located in the lower right corner of the form.

<div style={{textAlign: 'center'}}>

![img](../../../static/img/amazon-inspector-img3.png)

</div>

In the subsequent form, opt for the "Attach existing policies directly" choice, and then specifically choose "AmazonInspectorReadOnlyAccess." Upon completion, proceed by clicking the "Next: Tags" button located in the lower right corner of the form.


<div style={{textAlign: 'center'}}>

![img](../../../static/img/amazon-inspector-img4.png)

</div>

This step is optional. Use it if you want to associate any TAGS to the new user. When done, click on the **Next:Review** button in the lower right corner of the form:

<div style={{textAlign: 'center'}}>

![img](../../../static/img/amazon-inspector-img5.png)

</div>

Review the details of the new user and finalize the user configuration by selecting the "Create User" button situated in the lower right corner of the form.


<div style={{textAlign: 'center'}}>

![img](../../../static/img/amazon-inspector-img6.png)

</div>

:::note This is the only instance where you can retrieve your user's Secret Access Key. After this point, failure to copy the secret will result in the inability to recover it later.! :::


Copy the Access Key ID and store it in a text file, for future retrieval.. Next, click on the Show link next to the Secret Access Key to exhibit it and copy it to a safer place, you will use this data later on configuring Conviso Platform integration:


<div style={{textAlign: 'center'}}>

![img](../../../static/img/amazon-inspector-img7.png)

</div>

To identify the AWS Region where your Amazon Inspector is set up, navigate to the top menu bar and click on "Services." Select "Amazon Inspector." Then, on the top menu bar, expand the Amazon Region to reveal the AWS region string where your Amazon Inspector is configured. In our example, the AWS region is set to us-west-2. Adjust this according to your current configuration.

<div style={{textAlign: 'center'}}>

![img](../../../static/img/amazon-inspector-img8.png)

</div>

## Conviso Platform Setup

Log in to the [Conviso Platform](https://app.convisoappsec.com);

At the left menu, choose **Integrations**. At the right panel, click on **Scanners** menu option, then click on the **Integrate** button of the **Amazon Inspector** card:

<div style={{textAlign: 'center'}}>

![img](../../../static/img/amazon-inspector-img9.png)

</div>

Paste the retrieved data from AWS at the corresponding fields of the form. When done copying the data, click at the **Save** button to store your new integration configuration settings:

<div style={{textAlign: 'center'}}>

![img](../../../static/img/amazon-inspector-img10.png)

</div>

[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)