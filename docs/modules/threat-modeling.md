---
id: threat-modeling
title: Threat Modeling
sidebar_label: Threat Modeling
description: Performing Threat Modeling allows organizations to proactively address security risks and create robust application architectures. 
keywords: [Threat Modeling, threat modeling, secure by design, Conviso Platform, projects, application security proactive risk management]
image: '/static/img/securityfeedseo.png'
---
## Introduction

Performing [Threat Modeling](https://bit.ly/3q8JlQw) in Secure by Design allows organizations to proactively address security risks and create robust application architectures. 

In addition to Conviso Platform, organizations can foster a culture of secure coding practices from the initial stages of development, leading to enhanced application security and a stronger defense against potential threats.

### About Threat Modeling
The purpose of Threat Modeling, on which the Secure by Design product is based, is to identify threat scenarios and create security requirements based on them. It is a collaborative process that requires the collective experience of the group of participants. 

It's an essential approach for developers, as it helps to develop more secure applications, reducing rework and avoiding errors in the code.

## Usage
To access, click on the "Secure by Design" option in the left menu. In this first moment, let's get to know the Threat Modeling process by clicking on the "Threat Modeling" suboption:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/modules/threat-modeling-img1.png "Threat Modeling.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

On the product's home page, you have access to create a new Threat Modeling project or see all projects of the type already created:

### Start new Threat Modeling project​

To create a new Threat Modeling project in Secure by Design, follow these steps:

1. Click on the **Start new project** button:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/modules/threat-modeling-img2.png "Threat Modeling.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

2. Add a new **Architecture Item**:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/modules/threat-modeling-img3.png "Threat Modeling.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

You can add more than one architecture item to Threat Modeling. The term "architecture item" refers to the relevant architectural components or elements of a system or application.

These items can include modules, layers, services, APIs, databases, user interfaces, and more. When performing Threat Modeling, it is important to identify and list all architectural items that make up the system under analysis.

3. Identify and select the attack patterns:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/modules/threat-modeling-img4.png "Threat Modeling.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

These attack patterns serve as predefined templates or standardized representations of known attack techniques. In our solution, the attack patterns are based on CAPEC (Common Attack Pattern Enumeration and Classification) from MITRE, a widely recognized and comprehensive catalog of attack patterns.

4. Confirm security requirements:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/modules/threat-modeling-img5.png "Threat Modeling.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

Once the attack patterns for the specific architecture item have been identified and selected, the platform provides guidance on the main security requirements.

These recommendations are based on the [OWASP Application Security Verification Standard (ASVS)](https://owasp.org/www-project-application-security-verification-standard/), ensuring comprehensive coverage of security aspects. By leveraging this automated process, organizations can efficiently identify potential attack vectors and establish the necessary security measures to mitigate risks. 

To proceed to the next step, click **Save**.

5. Save the security requirements in a new project:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/modules/threat-modeling-img6.png "Threat Modeling.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

After clicking **Save**, a new window will open for you to register the Threat Modeling information in a new project on the Conviso Platform.

- Project name: Enter a descriptive name for the project.
- Estimated hours: Provide an estimation of the total hours required for the Threat Modeling process.
- Goal: Define the objective or purpose of the Threat Modeling project.
- Scope and limitation: Specify the scope of the project and any limitations or boundaries that should be considered.
- Team: Identify the team who will be involved in the Threat Modeling activities.
- Tags: Assign relevant tags to categorize and organize the project.
- Assets: List the assets related in the Threat Modeling process.

Once saved, access the project to manage and continuously monitor the implementation of security requirements.

### See all Threat Modeling Projects

To view all the Threat Modeling projects, simply click on the **See all threat modeling projects** option:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/modules/threat-modeling-img7.png "Threat Modeling.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

This will give you an overview of all the existing projects of this type that have been created:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/modules/threat-modeling-img8.png "Threat Modeling.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

You can browse through the list and select a specific project to view its details, progress and status. This feature allows easy management and tracking of Threat Modeling activities, being able to identify in which stage each project is at.

If you want to better understand how **Project Management** works, we recommend referring to this [documentation](./projects).

### Monitoring the implementation of requirements through the Project Management feature​

On this screen, in Projects, you can continuously manage these processes in order to identify their progress. By clicking on our created project, you can understand at which stage you are in modeling:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/modules/threat-modeling-img9.png "Threat Modeling.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

You already identified right away that it is in the **Planned** phase, looking at its status.

To point out that you've started working on the security requirements generated by modeling, update the status to **Running**:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/modules/threat-modeling-img10.png "Threat Modeling.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

After accessing the **Requirements tab**, an overview of all the security requirements generated by the platform is shown, based on OWASP’s ASVS from the indicated threats:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/modules/threat-modeling-img11.png "Threat Modeling.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

On this screen, a **Progress Status** bar allows you to track the implementation progress of the requirements.. In addition, there is also a button to **Download Attachments**.
They are categorized into **statuses** according to their current situation: **Not Started**, **In Progress**, **Not Applicable** and **Completed**.

### Implementing a Requirement

:::note
Before you start working on the security requirements, it's important to review them to understand if they are all within the scope of your application.
:::

To indicate that you will start implementing a requirement, click the "Start" button under Actions:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/modules/threat-modeling-img12.png "Threat Modeling.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

<div style={{textAlign: 'center'}}>

[![img](../../static/img/modules/threat-modeling-img13.png "Threat Modeling.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

Now, you indicate that this requirement is in the implementation phase, that is, you are creating secure code according to its guidance, when clicking on its title:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/modules/threat-modeling-img14.png "Threat Modeling.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

If, after refining the requirement, you identified that it does not apply to the scope of your application, you can discard it by clicking **Not apply**:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/modules/threat-modeling-img15.png "Threat Modeling.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

It is important to clarify why this requirement does not need to be implemented:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/modules/threat-modeling-img16.png "Threat Modeling.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

It is crucial to provide a clear justification for excluding the requirement, explaining why it does not need to be implemented in your specific context. This step ensures transparency and facilitates effective decision-making regarding the inclusion or exclusion of security requirements.
If the requirement is necessary, after its implementation, click on **Finish**. It is required to attach the code evidence for analysis by the security team.

<div style={{textAlign: 'center'}}>

[![img](../../static/img/modules/threat-modeling-img17.png "Threat Modeling.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

A window will open so you can attach the file:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/modules/threat-modeling-img18.png "Threat Modeling.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

You can put the evidence of the implementation of the requirement in text or attach it in a file, we suggest images to facilitate the analysis of the security team. The platform supports .rar .pdf .zip .jpg .png .txt. pptx .xlsx .docx and .apk files.

The status will be updated to **Done**:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/modules/threat-modeling-img19.png "Threat Modeling.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

After completing the implementation of the security requirements, the next step is to await the analysis and testing of the implemented code by the security team.

### Indicating the Assessment to the Security Team​

This phase ensures that the security measures are effectively integrated into the application and provides an opportunity to identify and address any potential vulnerabilities.
Update the status of the project to **Fixing**, so you can no longer change the requirements:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/modules/threat-modeling-img20.png "Threat Modeling.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

Now, wait for the security team to analyze and test the implemented code.
Finishing the project, go back to its status and then signal that it is finished with **Done**:

<div style={{textAlign: 'center'}}>

[![img](../../static/img/modules/threat-modeling-img21.png "Threat Modeling.")](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

</div>

After performing this process, you will then be taking the initial steps towards building a secure application.

:::note
After implementing security controls, it is important to establish a continuous monitoring process to identify new threats through the Conviso Platform.
By following this process, performing Threat Modeling and building secure code become much simpler and faster.
:::

**Enhance your development lifecycle's security with the Conviso Platform. Join us today and foster a security-first culture!**

## Support

Should you have any questions or require assistance while using the Conviso Platform, feel free to reach out to our dedicated support team.

## Resources

By exploring our comprehensive content, you’ll discover resources that will enhance your understanding of AppSec.

[Conviso Blog](https://bit.ly/3JtXM8A): Access a wealth of informative videos covering various topics related to AppSec. Please note that the content is primarily in Portuguese.

[Conviso's YouTube Channel](https://bit.ly/3NIbbfM): Engage with our informative podcast, where we discuss AppSec-related subjects, providing valuable insights and discussions. The podcast is conducted in Portuguese.

[AppSec to Go - Conviso's Podcast on AppSec](https://spoti.fi/43UJQwN): Explore our blog, which offers a collection of articles and posts covering a wide range of AppSec topics. The content on the blog is primarily written in English.

[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)