---
id: azure-devops-service-principal
title: Azure DevOps Service Principal
sidebar_label: Service Principal
description: Connect Azure DevOps to Conviso Platform with a customer-owned Microsoft Entra ID application (service principal) instead of interactive OAuth.
keywords:
  [
    Azure DevOps,
    Service Principal,
    Microsoft Entra ID,
    App registration,
    Integration,
  ]
---

# Azure DevOps Service Principal

Connect Azure DevOps using a **service principal**: an app registration in Microsoft Entra ID with a client secret, instead of signing in with OAuth.

On Login, Conviso sends the tenant ID, client ID and client secret to Microsoft Entra ID and stores them encrypted. The secret is not shown again in the UI. Azure DevOps does not list organizations for a service principal, so on Authorization you type each organization name (or paste `https://dev.azure.com/{organization}`). Conviso checks that the principal can access that organization before saving it.

For OAuth (interactive sign-in), see [Azure DevOps Integration](./azure-devops.md).

## Prerequisites

- Azure DevOps Services.
- Permission in **Microsoft Entra ID** to create an app registration and a client secret.
- Permission in each **Azure DevOps organization** to add the application as a user.
- A Conviso Platform company where the Azure DevOps integration is available.

## Part A – Microsoft Entra ID

Create the app that Conviso will use on Login. Microsoft documents the Azure DevOps side of service principals here: [Service principals and managed identities](https://learn.microsoft.com/en-us/azure/devops/integrate/get-started/authentication/service-principal-managed-identity).

### A1 – Create the app registration

1. Open the [Microsoft Entra admin center](https://entra.microsoft.com/) → **Identity** → **Applications** → **App registrations** → **New registration**.
2. Name the application.
3. Register the app. A redirect URI is not required for this Conviso flow.

*Register an application in Microsoft Entra ID.*

![Register an application](../../static/img/azure-devops/sp-a1-register-app.png)

### A2 – Copy Directory (tenant) ID and Application (client) ID

On the app’s **Overview** page, copy:

- **Directory (tenant) ID**
- **Application (client) ID**

These are the values you paste into Conviso on Login.

*Overview – copy Directory (tenant) ID and Application (client) ID.*

![App registration Overview with IDs](../../static/img/azure-devops/sp-a2-overview-ids.png)

### A3 – Create a client secret

1. Open **Certificates & secrets** → **Client secrets** → **New client secret**.
2. Create the secret and copy the **Value** immediately. You cannot view it again later.

:::warning
In Conviso paste the secret **Value**, not the **Secret ID**.
:::

*Certificates & secrets – use the Value column, not Secret ID.*

![Client secrets Value vs Secret ID](../../static/img/azure-devops/sp-a3-client-secret.png)

## Part B – Azure DevOps

The Entra app must be added to every Azure DevOps organization you will enter in Conviso.

For **each** organization (`https://dev.azure.com/{organization}`):

1. Open **Organization settings** → **Users** → **Add users**.
2. Select the application (service principal) from Entra.
3. Give it access to the projects whose repositories you will import.
4. Save.

*Organization settings → Users → Add new users (service principal).*

![Add service principal to Azure DevOps organization](../../static/img/azure-devops/sp-b1-ado-add-users.png)

Use the organization name from the URL (`{organization}`) in Conviso. You can paste the full `https://dev.azure.com/{organization}` URL; Conviso extracts the name.

## Part C – Conviso Platform

### C1 – Open the integration

1. Open **Integrations**.
2. Open **Azure DevOps** and click **Connect** (or open an existing integration to reconnect).

### C2 – Login

1. Under **Authentication**, select **Service Principal**.
2. Fill in **Directory (tenant) ID**, **Application (client) ID**, and **Client secret value**.
3. Click **Connect to Azure DevOps**.

*Login – Service Principal credentials.*

![Conviso Login with Service Principal](../../static/img/azure-devops/sp-c2-login.png)

On success, Conviso moves to **Authorization**.

If the company already had an Azure DevOps integration (for example OAuth) and you connect with a service principal, Conviso keeps only the organizations already stored that this principal can still access. Review the list on Authorization.

### C3 – Authorization

1. In **Organizations**, type the organization name or paste its Azure DevOps URL and press Enter.
2. Conviso verifies each name. Accepted names are saved; a name the principal cannot access stays on the field with an error.
3. Choose **Authorize all repositories** or select specific repositories.
4. Click **Continue**.

*Authorization – type organization names (chips).*

![Conviso Authorization organization chips](../../static/img/azure-devops/sp-c3-authorization.png)

### C4 – Configuration

On **Configuration** you can review imported assets, use **Check connection**, and **Remove integration**.

**Check connection** renews the application token with Entra and checks each configured organization. It fails if no organizations are configured.

## Rotating the client secret

1. In Entra, create a new client secret and copy the **Value**.
2. In Conviso, open the Azure DevOps integration → **Login** → **Service Principal**.
3. Paste the new secret (and the same tenant ID and client ID if needed) and connect again.
4. Confirm the organizations on **Authorization**, then use **Check connection** if you want to verify.

## Troubleshooting

| Problem | What to do |
|--------|------------|
| Connect fails / credentials rejected | Check tenant ID, client ID, and the secret **Value** (not Secret ID). Confirm the secret has not expired and the app is in the correct tenant. |
| Organization access denied when adding a name | Add the service principal to that Azure DevOps organization (Part B) and ensure it can access the organization, then try again. |
| No organization dropdown | Expected for Service Principal. Type the organization names instead. |
| Check connection fails with no organizations | Add at least one organization on Authorization. |
| After switching from OAuth, organizations disappeared | Those names were not accessible with the new principal and were removed. Fix membership in Azure DevOps, then add the names again on Authorization. |

## Related guides

- [Azure DevOps Integration](./azure-devops.md)

**[Explore other Conviso Platform integrations.](https://bit.ly/3NzvomE)**
