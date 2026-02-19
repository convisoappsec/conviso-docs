---
id: microsoft-entra-id
title: Microsoft Entra ID SSO
sidebar_label: Microsoft Entra ID SSO
description:  The Microsoft Entra ID integration in the Conviso Platform simplifies user management for enterprise customers. Know more!
keywords: [Entra ID]
image: '/static/img/azureadseo.png'
---

## Introduction
In this tutorial, you'll learn how to integrate Conviso Platform SSO with Microsoft Entra ID. When you integrate Conviso Platform SSO with Microsoft Entra ID, you can:
- Control in Microsoft Entra ID who has access to Conviso Platform SSO.
- Enable your users to be automatically signed-in to Conviso Platform SSO with their Microsoft Entra accounts.
- Manage your accounts in one central location.

### Prerequisites
To get started, you need the following items:
- A Microsoft Entra subscription. If you don't have a subscription, you can get a [free account](https://azure.microsoft.com/free/).
- Conviso Platform SSO single sign-on (SSO) enabled subscription.


## Usage
This section provides a comprehensive guide on using the Conviso Platform SSO Application, covering installation and assigning user permissions. 

- [Introduction](#introduction)
  - [Prerequisites](#prerequisites)
- [Usage](#usage)
- [Installing the Conviso Platform SSO Application](#installing-the-conviso-platform-sso-application)
- [Performing Conviso Platform setup](#performing-conviso-platform-setup)
- [Test in Microsoft Entra ID](#test-in-microsoft-entra-id)
- [Assigning users to the Conviso Platform SSO Application](#assigning-users-to-the-conviso-platform-sso-application)
- [Setup Group Mapping Integration](#setup-group-mapping-integration)
- [Email Field Mapping in SAML 2.0 for Microsoft Entra ID](#email-field-mapping-in-saml-20-for-microsoft-entra-id)
  - [How this works:](#how-this-works)
- [Support](#support)
- [Resources](#resources)

Following these steps, you can efficiently configure and manage user access to the Conviso Platform, ensuring a streamlined and secure experience for your enterprise customers.

## Installing the Conviso Platform SSO Application[](https://docs.convisoappsec.com/integrations/microsoft-entra-id/#installing-conviso-platform-sso-application)
To install the Conviso Platform SSO application, follow these steps:

1. Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/) as at least a [Cloud Application Administrator](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#cloud-application-administrator).

2. Browse to **Identity** > **Applications** > **Enterprise applications** > **New application**:

<div style={{textAlign: 'center'}}>

![img](../../static/img/entra-id-img1.png)

</div>

3. In the **Add from the gallery** section, type **Conviso Platform SSO** in the search box.

4. Select **Conviso Platform SSO** from results panel and then add the app, clicking on **Create**. Wait a few seconds while the app is added to your tenant.

<div style={{textAlign: 'center'}}>

![img](../../static/img/entra-id-img2.png)

</div>

5. You will be redirected to Conviso Platform SSO application's **Overview** page.

6. In the left navigation pane, select **Single Sign-On**.

7. On the **Select a single sign-on method** page, choose **SAML**.

<div style={{textAlign: 'center'}}>

![img](../../static/img/entra-id-img3.png)

</div>

8. The **Basic SAML Configuration** must be edited as it is a requirement by Microsoft. Select **Edit**, then **Save** with the following data:
   - **Identifier (Entity ID)**: `https://auth.app.convisoappsec.com/realms/conviso-platform`
   - **Reply URL (Assertion Consumer Service URL)**: `https://auth.app.convisoappsec.com/realms/conviso-platform/broker/azure_{YOUR_COMPANY_ID}/endpoint`
   - **Sign on URL**: `https://app.convisoappsec.com/spa/auth/login`
 - Close the pop-up window.

:::note
Replace `{YOUR_COMPANY_ID}` in the Reply URL with your actual company identifier.
:::

<div style={{textAlign: 'center'}}>

![img](../../static/img/entra-id-img4.png)

</div>

1. In the **Attributes & Claims** section, make sure that the `name` (http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name) is mapped to the attribute corresponding to the email the user uses to log in:

<div style={{textAlign: 'center', maxWidth: '80%' }}>

![img](../../static/img/entra-id-img16.png)

</div>

:::note
The `user.userprincipalname` attribute is not mandatory. Just make sure you're using the email the user uses to log in.
:::

10.  Now, find the **Certificate (Base64)** and download it.

<div style={{textAlign: 'center', maxWidth: '80%' }}>

![img](../../static/img/entra-id-img5.png)

</div>

11. Along with the certificate, you need the **Login URL** and the **Microsoft Entra Identifier**.

<div style={{textAlign: 'center', maxWidth: '80%'}}>

![img](../../static/img/entra-id-img6.png)

</div>

12. Conviso Platform uses the **Certificate (Base64)**, **Login URL**, and **Microsoft Entra Identifier** as credentials to communicate with Microsoft Entra.

## Performing Conviso Platform setup[](https://docs.convisoappsec.com/integrations/microsoft-entra-id/#conviso-platform-setup)
To set up the Conviso Platform, follow these steps:

1. Log in to the Conviso Platform.

2. In the left navigation pane, click on **Integrations**.

3. From the Integrations panel, select **Authentication**, and choose **Azure**. Click the **Integrate** button.

<div style={{textAlign: 'center'}}>

![img](../../static/img/entra-id-img7.png "Conviso Platform integrations.")

</div>

4. Fill out the form with the corresponding information obtained previously. Enter the domain name and all domain aliases used by your organization to log in at the **Authorized Domains** field. Click the Save button after completing the form to save your SSO configuration.
- **Authorized Domains example: company.com**

<div style={{textAlign: 'center'}}>

![img](../../static/img/entra-id-img8.png "Conviso Platform integrations.")

</div>

The next step is to assign which Microsoft Entra users will use SSO to access the Conviso Platform.

## Test in Microsoft Entra ID[](https://docs.convisoappsec.com/integrations/microsoft-entra-id/#test-in-microsoft-entra-id)

Before testing the SSO integration, ensure you are logged out of the Conviso Platform.

The SSO test process is mandatory in the Microsoft Entra ID provider. Follow these steps to test the integration:

1. In the **Single sign-on** page, click **Test this application**.

<div style={{textAlign: 'center'}}>

![img](../../static/img/entra-id-img17.png "Conviso Platform integrations.")

</div>

2. Click **Test sign in**.

<div style={{textAlign: 'center'}}>

![img](../../static/img/entra-id-img18.png "Conviso Platform integrations.")

</div>

3. You will be redirected to the new Conviso login page. Click **SSO access**.

<div style={{textAlign: 'center'}}>

![img](../../static/img/new-page-login-img1.png "Conviso Platform integrations.")

</div>

4. Enter your provider email and click **Log in**.

<div style={{textAlign: 'center'}}>

![img](../../static/img/new-page-login-img2.png "Conviso Platform integrations.")

</div>

The test will verify that the SSO configuration is working correctly between Microsoft Entra ID and the Conviso Platform.

## Assigning users to the Conviso Platform SSO Application[](https://docs.convisoappsec.com/integrations/microsoft-entra-id/#assigning-users)
To assign users to the Conviso Platform SSO application, follow these steps:

1. After configuring the Microsoft Entra ID in the Conviso Platform, you must permit users to use the SSO. Go back to your Microsoft Entra Portal. In the **Enterprise Applications | All applications page**, select your recently configured Conviso Platform SSO application. If it doesn't show your new application, refresh the page.

<div style={{textAlign: 'center'}}>

![img](../../static/img/entra-id-img9.png "Microsoft Entra platform - enterprise applications.")

</div>

2. In the left navigation pane within the application's page, select **Users and Groups**.

<div style={{textAlign: 'center', maxWidth: '50%'}}>

![img](../../static/img/entra-id-img10.png "Microsoft Entra platform - overview.")

</div>

3. Search for and click the **Add user/group** button.

<div style={{textAlign: 'center', maxWidth: '50%'}}>

![img](../../static/img/entra-id-img11.png "Microsoft Entra - SSO.")

</div>

4. Under **Users**, click **None Selected**. A window will appear displaying all your Microsoft Entra users. Select the desired users by checking the boxes next to their names.

<div style={{textAlign: 'center'}}>

![img](../../static/img/entra-id-img12.png "Microsot Entra platform.")

</div>

5. After selecting the users, click **Select** and then **Assign**.

<div style={{textAlign: 'center'}}>

![img](../../static/img/entra-id-img13.png "Microsot Entra platform.")

</div>

Finally, you can view the Microsoft Entra ID users with access to the Conviso Platform.

:::note
Users must be invited to the Conviso Platform beforehand to be able to log in.
:::

## Setup Group Mapping Integration

To enable integration with group mapping support in Entra ID, follow the steps below:

1. Within the Conviso Platform SSO application, ensure that the fields highlighted below are created.

<div style={{textAlign: 'center'}}>

![img](../../static/img/entra-id-img14.png)

</div>

:::note
Make sure that the claim `name` is mapped to the attribute corresponding to the email the user uses to log in.
:::

2. Assign users to the Entra ID group.

3. [Create a Team](../platform/user-management.md) in the Conviso Platform, specifying the desired Profile and Access Type for the group's users.

4. Retrieve the Entra ID group ID.

5. In the Entra ID integration page within the Conviso Platform, select the Team you created and associate it with the Entra ID group ID.

<div style={{textAlign: 'center'}}>

![img](../../static/img/entra-id-img15.png)

</div>

6. Click **Save**.

This setup simplifies user management, as permissions and access will be managed through the Team, while users are managed via Entra ID.

:::note
Users must be invited to the Conviso Platform beforehand to be able to log in.
:::

You are now ready to go. To log in again with an email from the domain specified in the integration, use the **SSO Access** option on the [Conviso Platform website](https://app.convisoappsec.com/).

Note: Also consult the [Microsoft Documentation](https://learn.microsoft.com/en-us/entra/identity/saas-apps/appsec-flow-sso-tutorial) for further guidance. There you will find a similar tutorial to help you.

## Email Field Mapping in SAML 2.0 for Microsoft Entra ID
When configuring the Microsoft Entra ID SSO integration via SAML, it's essential to ensure that the email field is correctly mapped. The email configured in your Microsoft Entra ID identity provider must match the email of the logged-in user on the Conviso Platform to ensure proper authentication.

To do this, in the **Attributes & Claims** section, make sure that the `name` (http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name) is mapped to the attribute corresponding to the email the user uses to log in:

<div style={{textAlign: 'center', maxWidth: '80%' }}>

![img](../../static/img/entra-id-img16.png)

</div>

:::note
The `user.userprincipalname` attribute is not mandatory. Just make sure you're using the email the user uses to log in.
:::

### How this works:
During the SSO authentication process, the email is used as the primary identifier to map the user's identity in the Conviso Platform. This means the email value provided by the Microsoft Entra ID identity provider in the SAML Assertion must match exactly with the user's email in Conviso. If it doesn't match, login may fail.

Therefore, when configuring Microsoft Entra ID as the identity provider, make sure the email field is mapped correctly and matches the email associated with the user's account in the Conviso Platform.

## Support
If you have any questions or need help using our product, please don't hesitate to contact our [support team](mailto:support@convisoappsec.com).

## Resources

- [Microsoft Entra SSO tutorial](https://learn.microsoft.com/en-us/entra/identity/saas-apps/appsec-flow-sso-tutorial)
- [Conviso Platform](https://app.convisoappsec.com/)
