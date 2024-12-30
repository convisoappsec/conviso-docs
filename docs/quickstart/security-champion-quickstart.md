---
id: security-champion-quickstart
title: First Steps with the Conviso Platform as a Security Champion
sidebar_label: Security Champion Quickstart
description:  You are about to take your first steps with the Conviso Platform and start a new experience with secure development. Let's go!
keywords:  [Quickstart, Security Champion]
image: '/static/img/quickstartseo.png'
---

## Introduction

Conviso Platform offers a practical and integrated experience to track the full application security lifecycle. From vulnerability creation to resolution, the platform streamlines continuous risk detection, tracking, and remediation. With notifications in communication tools like Slack and Teams, integration with defect tracking systems, and a detailed view of assets and the SBOM (Software Bill of Materials), developers gain full visibility and control over application vulnerabilities. This empowers development teams to work efficiently and consistently, strengthening their ability to build secure applications.

Follow the steps below to gain a practical and integrated experience with the features that will be most present in your daily workflow as a security champion.

## Who is a Security Champion?

A Security Champion is a member of a development team who is specifically trained to act as a security focal point within the team. They play a crucial role in bridging the gap between development and security, fostering better communication and helping to shift the development culture towards more secure practices. Security Champions are typically technical team members who actively contribute to coding and share their security knowledge with their peers.
Their main responsibilities include promoting secure coding practices, ensuring security is prioritized from the start of product development, and driving cultural change within the development team. They help developers adopt a security mindset, focusing on secure development throughout the entire lifecycle of the product.
Overall, a Security Champion acts as both a cultural change agent and a liaison between development and security teams, helping to mitigate conflicts and ensuring both areas are aligned.

## Onboarding

### Understanding Security Feed

The Security Feed is an essential feature of the [Conviso Platform](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826), designed to provide users with real-time AppSec insights and actionable information related to their application security.

It serves as a centralized hub of knowledge, helping users understand the current state of their company's security and guiding them on what actions to enhance to [improve their application security](https://blog.convisoappsec.com/afinal-o-que-e-seguranca-de-aplicacoes/). 

In the Security Feed, you can observe information such as the company's Risk Score, assets with the highest Risk Score, open vulnerabilities, and project statuses. This provides a quick and comprehensive view of the most critical security concerns, empowering teams to prioritize their efforts effectively and take proactive measures to reduce risk.

<div style={{textAlign: 'center'}}>

![img](../../static/img/quickstart/security-champion1.png)

</div>

### Receiving Security Notifications

To stay updated on everything happening in the Conviso Platform, you can enable notifications to be alerted as soon as a vulnerability is identified or fixed, when an Asset is created, when there is a change in an Asset's Risk Score, or when you receive a new message from the Security Expert. This can be set up through tools like Slack and Microsoft Teams, but you can also receive notifications via email or directly on the Conviso Platform.

By enabling notifications, a Security Champion can quickly respond to emerging security concerns, monitor the status of critical assets in real time, and ensure that the development team is aware of and can address security issues efficiently, fostering proactive and continuous application security.

[Click here](../../integrations/integrations_intro#communication-and-notification) to enable notifications through integrations or [click here](https://app.convisoappsec.com/spa/user/notifications-center) to activate email/in-app notifications.

## How to Bring your Applications into the Conviso Platform

To begin using the Conviso Platform effectively, you’ll need to onboard your applications. Here are two main approaches, tailored to your requirements:

- Execution of [Conviso AST](./bring-applications#performing-conviso-ast);
- Integration with an [External Scanner](./bring-applications#integrating-with-an-external-scanner) (e.g., Checkmarx, Dependency-Track, Fortify, SonarQube, SonarCloud).

### What is an Asset?

An Asset refers to any entity that can be evaluated for security purposes. This includes applications, microservices, repositories, or any software component that is subject to security analysis. Assets serve as the foundational elements within the platform, linking scan results, vulnerabilities, risk scores, and related security data. By managing assets effectively, users can track and prioritize security efforts based on factors such as business impact, attack surface, and data classification.

All scan information is linked to Assets in Conviso Platform. To view your Assets, click on "Asset Management" in the sidebar. By default, the Assets are listed from highest to lowest Risk Score.

:::note
Risk Score provides a holistic view of an asset's risk based on factors such as open vulnerabilities, attack surface, business impact, and data classification. Understanding the real risk of each asset is crucial for informed decision-making and prioritizing security efforts.
:::

<div style={{textAlign: 'center'}}>

![img](../../static/img/quickstart/developer3.png)

</div>

To see more details about an Asset, simply click on its name.

From the Asset details page, you can [schedule a DAST execution](../security-scans/conviso-dast/conviso-dast.md), view the [vulnerabilities](../platform/vulnerabilities.md), the [SBOM](../security-scans/conviso-sbom/conviso-sbom.md), the [Risk Score](#understanding-risk-score), and various other information.

### Understanding Risk Score

The Risk Score on Conviso Platform is a crucial metric that enables Security Champions to prioritize and address potential security issues effectively. It evaluates the risk of each Asset by analyzing key factors: Business Impact, Threats, Attack Surface, and Data Classification.
- Business Impact reflects the criticality of an Asset, determined by indicators such as developer activity.
- Threats represent the active vulnerabilities associated with the Asset.
- Attack Surface assesses the exposure level, considering if the Asset is accessible over the internet.
- Data Classification identifies whether the Asset handles sensitive data, like PII.

With this comprehensive view, Security Champions can understand the overall security posture, track changes over time, and focus on actions to mitigate risks. The visibility of top high-risk and improving Assets, along with guidance on how to reduce risk, supports efficient and informed decision-making.

### View SBOM Information

An SBOM (Software Bill of Materials) is a detailed list of all components, libraries, and dependencies used in an application. It is crucial for building secure applications as it helps identify potential vulnerabilities and ensures transparency in software composition.

When accessing an Asset, you can view its SBOM by clicking the View all button:

<div style={{textAlign: 'center'}}>

![img](../../static/img/quickstart/developer6.png)

</div>

Here, you can explore your Asset’s dependencies, including details like component version, technology, license, package manager, associated CVEs, and open vulnerabilities for each component.

<div style={{textAlign: 'center'}}>

![img](../../static/img/quickstart/developer7.png)

</div>

To learn more about Conviso SBOM, click [here](../security-suite/conviso-sbom/conviso-sbom.md).

### View Vulnerability Information on the Platform

Finally, the details of vulnerabilities can also be viewed directly on Conviso Platform. There are two main ways to access this information:

- Viewing from an Asset's detail page;
- Viewing from the sidebar menu.

#### Viewing from an Asset's Detail Page

On the Asset detail page, simply click on the "Open Vulnerabilities" button, as highlighted in the image below:

<div style={{textAlign: 'center'}}>

![img](../../static/img/quickstart/developer4.png)

</div>

This action will filter for all Asset vulnerabilities with the status Identified, In Progress, or Awaiting Validation. From there, locate the relevant vulnerability and click on its title.

#### Viewing from the Sidebar Menu

Alternatively, you can navigate via the sidebar by clicking on "Vulnerabilities," as shown in the image below:

<div style={{textAlign: 'center'}}>

![img](../../static/img/quickstart/developer5.png)

</div>

This will display all vulnerabilities with the status Identified, In Progress, or Awaiting Validation. Locate the relevant vulnerability and click on its title. To simplify your search, filters are available for creation date, asset name, asset tags, vulnerability type, and many other options.

### Risk Context Prioritization Funnel

With the vulnerabilities identified and the Risk Score information configured, the Risk Context Prioritization Funnel can assist you in prioritizing which vulnerabilities to remediate first. It considers Open Vulnerabilities and narrows them down through a series of criteria that increase the risk these vulnerabilities pose to your company. This includes filtering for assets with High Business Impact, those exposed to the internet, and those that handle or store sensitive data. 

In the example below, 1,552 vulnerabilities were initially considered. After applying the funnel, only 167 vulnerabilities matched the filters. Finally, the remaining vulnerabilities are sorted by severity, from highest to lowest.

<div style={{textAlign: 'center'}}>

![img](../../static/img/quickstart/developer9.png)

</div>

This way, you can easily prioritize which vulnerabilities should be fixed. To do this, simply click on the line related to **Sensitive Data**, as indicated below:

<div style={{textAlign: 'center'}}>

![img](../../static/img/quickstart/developer10.png)

</div>

Once you've accessed the vulnerability, you can view general information such as description, solution, and references. Depending on the vulnerability type, you may also find the vulnerable code snippet, file name, and line number. Other types of vulnerabilities may display different details, like the request made to exploit the vulnerability and the server's response, for example.

The Risk Context Prioritization Funnel provides Security Champions with a clear, data-driven approach to focus their efforts on the most critical vulnerabilities. By highlighting issues that have the highest impact on business and security, this feature enables more effective risk mitigation, ensuring that the most pressing threats are addressed first and that resources are used efficiently to strengthen the organization's security posture.

### View Vulnerability Information in a Defect Tracker Tool

Conviso Platform integrates with various Defect Tracking tools so that developers can access vulnerability details without disrupting their usual workflow. This allows for the automatic transfer of vulnerabilities from Conviso Platform to tools like Jira, Azure Boards, or Businessmap, ensuring seamless integration.

Once a vulnerability is created in the Defect Tracking tool via Conviso Platform, a bidirectional communication system comes into play. If the status of the vulnerability is updated on Conviso Platform, the change will be reflected in the external tool immediately. Likewise, if the status is first modified in the external tool, the update will be promptly synchronized back to Conviso Platform.

The image below shows an example of a Conviso Platform vulnerability sent to Jira: 

<div style={{textAlign: 'center'}}>

![img](../../static/img/quickstart/developer2.png)

</div>

[Click here](../integrations/integrations_intro.md#defectbug-tracking-integration) to integrate the Conviso Platform with a Defect Tracker tool.

### Understanding the Dashboard
The Conviso Platform Dashboard offers three distinct views:
- AppSec Posture;
- AppSec KPIs;
- Secure Code Metrics.

#### AppSec Posture
This dashboard displays information about the Risk Score and MTTR (Mean Time to Remediate). It shows the company’s current status and tracks changes over time, based on the applied filters. With this data, you can monitor the overall health of your organization’s application security and identify trends or areas requiring immediate attention.

This view enables Security Champions to gain insights into how risk is evolving across the organization and helps them advocate for improvements. By understanding both the current security posture and historical performance, they can prioritize efforts and guide their teams in reducing risk efficiently.

#### AppSec KPIs
This dashboard provides information on:
- Open vulnerabilities;
- Fixed vulnerabilities;
- Vulnerabilities Over Time by Status;
- Vulnerabilities Over Time by Severity;
- Vulnerability by Severity;
- Project by status.

With this information, you can measure your team’s progress in resolving vulnerabilities and understand where to focus remediation efforts.

The AppSec KPIs view empowers Security Champions by providing concrete metrics that help track the effectiveness of security initiatives. It offers visibility into how well vulnerabilities are being managed and resolved, helping Champions to drive accountability and improvement in secure development practices.

#### Secure Code Metrics
If you have Secure Code licenses, this dashboard helps you understand how developers are leveraging the feature. It displays information such as:
- Prevented Vulnerabilities;
- Developer Engagement;
- Top Prevented Vulnerability;
- Top 3 Users;
- Top 5 Prevented Vulnerabilities;
- Prevented Vulnerabilities Over Time.

With this data, you can measure developer engagement and the impact of secure coding practices.

This view provides Security Champions with insights into the effectiveness of secure coding efforts within the team. It highlights proactive measures taken by developers and celebrates key contributors, encouraging a culture of security awareness and continuous improvement. This helps Champions support and guide developers in building secure software from the ground up.

[Click here](../platform/dashboard.md) to view more information about the Conviso Platform Dashboard.

## Conviso Secure Code

Conviso Secure Code is an AI-powered IDE plugin designed to identify and suggest fixes for insecure code while providing contextual explanations for vulnerabilities. Beyond correcting issues, it acts as a learning tool, helping developers understand the "why" and "how" behind each fix. This unique approach promotes skill development and safer coding practices directly within the developer's workflow.

With seamless integration into the Conviso Platform, Conviso Secure Code tracks performance metrics, ranks common vulnerabilities, and empowers developers to learn in real-time. By ensuring an optimal balance between security and productivity, it supports efficient, secure development while safeguarding your data and intellectual property.

To use Conviso Secure Code, ensure that your Company Administrator has enabled a valid license for you. After that, **generate an API Key from the Security Feed**:

<div style={{textAlign: 'center'}}>

![img](../../static/img/quickstart/developer11.png)

</div>

Next, install the **Conviso Secure Code** extension in VS Code:

<div style={{textAlign: 'center'}}>

![img](../../static/img/quickstart/developer12.png)

</div>

Press **Ctrl + Shift + P** and select the option Conviso: **Add API Key**. Enter your **API Key** and press **Enter**.

<div style={{textAlign: 'center'}}>

![img](../../static/img/quickstart/developer13.gif)

</div>

Now, open any file and **select a snippet of code you want to check for vulnerabilities**. Press **Ctrl + L** to analyze it. The results will then be displayed:

If you want to apply the suggested fix, confirm the correction, copy the updated code snippet, and replace the vulnerable code segment:

<div style={{textAlign: 'center'}}>

![img](../../static/img/quickstart/developer14.gif)

</div>

With Conviso Secure Code, you'll gain valuable insights and practical knowledge on how to write safer code. This not only strengthens your skills but also ensures the development of secure and reliable applications.

### Next Steps
Congratulations on taking your first steps with the Conviso Platform! By following the guide above, you have gained insight into some of the core features that empower you to maintain a strong and proactive security posture in your development workflow.

Remember, application security is an ongoing process, and Conviso Platform is here to support you every step of the way. From tracking vulnerabilities to leveraging SBOM insights and integrating seamlessly with your preferred development and communication tools, you now have the resources to build and maintain secure applications effectively.

We encourage you to continue exploring the platform, integrating it deeper into your CI/CD pipeline, and leveraging its full potential to enhance your security practices. For more advanced guides and best practices, be sure to check out our [Getting Started page](../index.md) and [join our community of security-conscious developers](https://discord.gg/En3KyvB9).

Stay secure, and happy coding!