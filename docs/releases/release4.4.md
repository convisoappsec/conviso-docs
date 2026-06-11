---
id: release4.4
title: Release 4.4
sidebar_label: Release 4.4
---

Release date: March 7th, 2024

## Key Benefits



*   BusinessMap Integration;
*   Conviso AST new capabilities;
*   Risk Score calculation enhancement;
*   Security Experts UX 



## What's New



**_New Feature_**

## BusinessMap Integration



<div style={{textAlign:'center'}}>

![img](../../static/img/conviso+businessMap-release-4.4.png)

</div>



We are glad to announce that a native integration with Businessmap has been released.

Integrating Businessmap in Conviso Platform will let developers gain productivity while we do all the hard work by automating the whole vulnerability management triage process.

Receive in real time new vulnerabilities identified in Conviso Platfom, directly in Businessmap lanes. With our two-way integration capability, every status update from both solutions are automatically updated in order to reduce the toil and increase developers productivity.

Check out the documentation [here](https://docs.convisoappsec.com/integrations/businessmap).



**_New Feature_**

## Conviso AST in Github Actions Marketplace

<div style={{textAlign:'center'}}>

![img](../../static/img/convisoAST-github-actions-marketplace-release-4.4.png)

</div>

For a quicker setup, you can now use our official Github Action in order to integrate Conviso AST within your workflow.

Check it out [here](https://github.com/marketplace/actions/conviso-ast).



**_New Feature_**

## Vulnerability Auto-closing



This is a new capability that automatically closes previously identified vulnerabilities in Conviso Platform when using Conviso AST.

This a huge gain in developer productivity as we continue focusing on automation and reducing manual work of developers and security professionals.

You can start using this new capability adding the parameter `--vulnerability-auto-close` :



`conviso ast run --vulnerability-auto-close`



More details in our [documentation](https://docs.convisoappsec.com/security-scans/conviso-ast#auto-closing-vulnerabilities).



**_New Feature_**

## Defining a custom Asset name



Now you can define a custom name when setting up Conviso AST within the CI/CD.

There are two ways to do this:

1. Passing the value as a parameter using the CLI:

`conviso ast run --asset-name 'your custom asset name'`

2. Passing the value as an Environment variable within the CI/CD:

`CONVISO_ASSET_NAME='your custom asset name'`



More details in our [documentation](https://docs.convisoappsec.com/security-scans/conviso-ast#naming-an-asset).





**_Enhancement_**

## Risk Score Calculation Enhancement

## ![](https://t3016679.p.clickup-attachments.com/t3016679/fb5c0895-d011-41c2-a410-b456242cf3b1/partial-risk-score-release-4.4.png)

We've made significant updates to how we calculate the risk score of assets. Here's what's changed:



*   Partial Risk Score Calculation:

Previously, certain fields such as "Business Impact," "Attack Surface," and "Data Classification" were mandatory for calculating the risk score. Now, we've introduced partial calculation, allowing the risk score to be computed even if these fields are not present or if the asset has no vulnerabilities.

*   Data Classification Impact:

We've fine-tuned how Data Classification influences the risk score, ensuring a more accurate assessment of asset risk.



**_UX Improvement_**

## Security Expert Chat Improvements:

## ![](https://t3016679.p.clickup-attachments.com/t3016679/5994f2fe-9a73-4679-a4ba-74111784c4e0/security-expert-enter-key-release-4.4.gif)

In response to user feedback, we've enhanced the user experience of the Security Expert chat feature:



*   Improved Text Input Handling:

Previously, hitting Enter would send the message. Now, pressing Enter will simply break the line, allowing users to continue typing within the chat interface seamlessly.

Also text format is preserved to have a more clear readability of messages.



### Keep updated on upcoming deliveries!

To have a better understanding about what's coming next on our platform, have a look at our [Roadmap](https://sharing.clickup.com/3016679/b/h/2w1z7-101803/0f4cd1b4e98d956).