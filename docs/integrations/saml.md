---
id: saml
title: SAML 2.0
sidebar_label: SAML 2.0
---

<div style={{textAlign: 'center'}}>

![img](../../static/img/saml.png)

</div>

This document was written to assist you when configuring any SSO Authentication Provider to use the SAML 2.0 Protocol.

In order to retrieve the required information to configure SAML 2.0 integration at Conviso Platform, you will need:

- **SSO URL**;

- **Entity ID**;

- **Certificate**;

- **Authorized Domains and aliases**.

As these datum are retrieved from different locations depending on the SSO implementation being used, a solid knowledge of the SSO platform and the necessary administrative privileges are required too.

## Oracle Authentication Manager

If you want to integrate Conviso Platform to your Oracle Authentication Manager, you can use [this video](https://www.youtube.com/watch?v=7ybg7pQyIS0) from Official Oracle Youtube Channel to help you on configuring your OAM Platform and finding the required Conviso Platform datum to create this SSO integration.

## Conviso Platform SAML 2.0 SSO integration

Log in to Conviso Platform. At the left-side menu, click at **Integrations**. Then, at the left panel shown, choose **Authentication**. Choose the **SAML** card and click on the **Integrate** button, as shown below:

<div style={{textAlign: 'center'}}>

![img](../../static/img/saml-img1.png)

</div>

After retrieving the necessary datum from your SSO platform, paste the to their correspondent fields at Conviso Platform. Remember to specify all of your configured Authentication Domains and their aliases at the **Authorized Domains** field. After pasting the retrieved datum and configuring your authorized domains, click at the **Save** button, in order to finish and store the SAML SSO configuration:

<div style={{textAlign: 'center'}}>

![img](../../static/img/saml-img2.png)

</div>
