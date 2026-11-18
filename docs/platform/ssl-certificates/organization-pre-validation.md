---
id: organization-pre-validation
title: Organization Pre-Validation
sidebar_label: Organization Pre-Validation
description: Validate your organization once with the certificate authority and choose the pre-validation when issuing OV and EV certificates in Conviso Platform. Request, follow, use, request again, reject and revoke a pre-validation, and understand its statuses and the e-mails the certificate authority sends.
keywords: [pre-validation, organization validation, OV, EV, extended validation, CNPJ, certificate authority, SSL, TLS, Conviso Platform]
image: '/static/img/securityfeedseo.png'
---

## Objective

OV and EV certificates assert who owns the domain, so the certificate authority validates your
organization before issuing them: the agreement, the representative, the company registry and, for
EV, a final approval. A **pre-validation** runs that validation once, ahead of any certificate.

Once it is active, choose it when you issue an OV or EV certificate: the order uses the validated
organization and only waits for
[domain control validation](./managing-certificates.md#domain-control-validation).

## How It Works

1. **Request it.** Choose the type (OV or EV) and fill in the organization and its representative.
2. **The certificate authority validates the organization.** The representative accepts the
   agreement by e-mail and answers the certificate authority contact. Follow each step in the
   platform; our support team follows it with the certificate authority.
3. **It becomes active.** From then on, choose it in the issuance wizard, in the
   **Organization** step. See [Using It When Issuing a Certificate](#using-at-issuance).

## Where to Find It {#where-to-find-it}

Go to **Inventory > Assets > Certificates** and select **Organizations**. The **Pre-validated
organizations** page lists every pre-validation of your company:

| Column | Content |
| --- | --- |
| **ID** | The pre-validation's identifier in the platform |
| **Organization** | The legal name sent to the certificate authority |
| **CNPJ** | The registration number. It is what tells two organizations apart |
| **Type** | `OV` or `EV` |
| **Status** | The current state, see [Statuses](#statuses) |
| **Expires on** | When an active pre-validation stops being offered at issuance |

Search by name or CNPJ, use the **Active** and **Pending Validation** shortcuts, or open
**Filters** for status and type. Select a row to open its details.

A company may have several organizations, each identified by its CNPJ, and each with its own OV and
EV pre-validations.

## Who Can Do What {#who-can-do-what}

| Action | Who |
| --- | --- |
| See the list and the details | Users who can view certificates |
| Request, **Check now**, **Request again**, **Reject** and **Revoke** | Users who can manage certificates |

Requesting, rejecting and revoking also require being signed in to the portal with two-factor authentication
(or through your company's single sign-on). They are not available through an API key.

## Choosing the Type {#choose-the-type}

| | OV | EV |
| --- | --- | --- |
| **Used for** | OV certificates | EV and OV certificates |
| **You provide** | Organization, CNPJ and representative | Organization, CNPJ, registration details (category, date of incorporation and jurisdiction) and representative |
| **Validation steps** | Agreement, order authorization and organization validation | Agreement, representative verification, organization validation and final approval |

An active EV pre-validation also serves OV certificates, so a company that issues both only needs
the EV one.

## Requesting a Pre-Validation {#requesting}

Select **Request pre-validation**. The request goes in steps, shown at the top of the panel:

1. **Type**: OV or EV, see [Choosing the Type](#choose-the-type).
2. **Organization**: legal name, CNPJ and address **exactly as in the official registry** (CNPJ
   card). A name, address or CNPJ that differs from the registry, or an inactive CNPJ, gets the
   request rejected.
3. **Registration** (EV only): organization category, date of incorporation, trade name if the
   company uses one, and the city, state and country where it was registered.
4. **Contacts**:
   * **Representative**: job title, name, e-mail and phone of a person with authority to represent
     the organization. Use a person's name, never a department, and prefer an e-mail on the company
     domain.
   * **Someone else signs the agreement** (optional): when another person has the legal power to
     accept the agreement, they receive it instead of the representative.
5. **Review**: check the summary (select **Edit** on a section to change it), confirm that the
   representative has authority to represent the organization, and select **Send request**.

Each organization can have only one pre-validation **in progress** per type. Another one of the same
type can be requested while the current one is active, rejected or expired.

### The Support Ticket {#support-ticket}

When the certificate authority takes the request, the platform opens a support ticket in your name,
titled with the type and the organization. Our support team uses it to follow the validation with the
certificate authority; reply there if the certificate authority asks for something you cannot solve.

## Following the Validation {#following-the-validation}

The details show the steps of the validation, each as **Done**, **In progress** or **Waiting**:

| Step | OV | EV |
| --- | --- | --- |
| **Agreement accepted** | ✓ | ✓ |
| **Order authorization** (OV) / **Representative verification** (EV) | ✓ | ✓ |
| **Organization validation** | ✓ | ✓ |
| **Final approval** | | ✓ |

The platform checks the certificate authority automatically. To check right away, select **Check
now**, at most once a minute.

Ask the representative to watch their e-mail and answer calls from the certificate authority. What
they should expect:

* **The agreement**, by e-mail, with a verification code. Only the person who receives it can accept
  it.
* **A contact from the certificate authority**, through the phone and the corporate e-mail it finds
  in a verified source, which may not be the representative's. Whoever receives it must answer. For
  EV, this comes as a **Verify SSL Agreement** e-mail asking for written confirmation of who signed
  the agreement.
* **Document requests**, answered only through the certificate authority tracking page, never as an
  e-mail attachment. They usually ask for the CNPJ card and the commercial registry certificate; for
  OV, an official photo ID of the representative; for EV, a proof of address and, for companies under
  3 years old, a bank letter.

For OV, if the phone the certificate authority found is no longer valid, its page offers other ways:
a PDF of the organization profile in a trusted directory, a letter from a lawyer or accountant, or a
code sent to the phone.

Once the pre-validation is active, each certificate issued with it sends the representative an
e-mail from the certificate authority. Its cancel link cancels the company's pre-validation; see
[The E-mail Sent at Each Certificate](#certificate-email).

## Statuses {#statuses}

| Status | Meaning |
| --- | --- |
| **Submission unconfirmed** | The certificate authority did not confirm the request. The platform keeps checking. Do not send it again; if it stays like this, contact support |
| **Pending Validation** | The certificate authority is validating the organization. Follow the steps in the details |
| **Active** | Validated. It can be chosen when issuing certificates of the types it serves |
| **Rejected** | The certificate authority refused it, or it was rejected in the platform. When the certificate authority already holds a pre-validation for these details, the details say so |
| **Revoked** | It was withdrawn after becoming active, in the platform or by the certificate authority. It is no longer offered at issuance |
| **Expired** | The validity has ended. It is no longer offered at issuance; to keep using one, request a new pre-validation |

The company administrators, and whoever requested the pre-validation, are notified when it becomes
active, when the certificate authority rejects or revokes it, and 30, 15 and 7 days before it expires and on
the day it does.

## Using It When Issuing a Certificate {#using-at-issuance}

The pre-validation is chosen at each OV or EV order in the
[issuance wizard](./issuing-a-certificate.md#step-3-organization-details):

1. In **Product**, pick an OV or EV credit. The wizard tells you whether the company has an active
   pre-validation, or links to the **Pre-validated organizations** page if it has none.
2. In **Organization**, select **Use a pre-validated organization**. With more than one, choose it in
   **Pre-validated organization** (search by organization or CNPJ); with only one, it is already
   chosen. An OV credit offers the active OV and EV pre-validations; an EV
   credit offers only the EV ones.
3. The organization and representative details come from the pre-validation and are not typed
   again. If the CSR names another organization, the wizard warns you: the order uses the
   pre-validated organization.

After the order, issuance only waits for domain control validation. To validate the organization
in the order itself instead, select **Enter the organization**.

## Requesting Again {#requesting-again}

On an **Active**, **Rejected**, **Revoked** or **Expired** pre-validation, the details and the row's **⋮** menu
offer **Request again**. It opens the request of the same type, filled in with what the previous
request sent: the organization, the representative, who signs the agreement and, on EV, the
registration details. Review each step before sending.

Sending it creates a **new** pre-validation, with its own order at the certificate authority, and the
validation starts over. The previous one stays in the list as it was; an active one keeps being
offered at issuance until it expires. Use it to have a new pre-validation ready before the current
one expires.

The option is not offered while the organization has another pre-validation of the same type in
progress.

## Rejecting or Revoking a Pre-Validation {#rejecting}

Both withdraw the pre-validation at the certificate authority. Which action you get depends on its
state, as with certificates: a pre-validation still **Pending Validation** is **rejected**, and an
**Active** one is **revoked**.

1. In the row's **⋮** menu, select **Reject** or **Revoke**.
2. Check the type and the organization shown, type `REJECT` or `REVOKE` and confirm.

:::warning
Rejecting or revoking cannot be undone. The pre-validation is no longer offered at issuance, and using one again
means requesting a new pre-validation and going through the whole organization validation again.
:::

## The E-mail Sent at Each Certificate {#certificate-email}

Each OV or EV certificate issued with the pre-validation sends the representative an e-mail from the
certificate authority (`noreply@sectigo.com`), with a subject like `ORDER #<order> - Instant
Organization Validation Based On EV Pre-Validation ID <pre-validation>`. It is expected and asks for
no action: it states that the organization is already validated and that the certificate is issued
as soon as domain control validation completes, and it repeats the company and requester details for
review.

:::danger
The **To cancel the pre-validation** link in that e-mail cancels the **company's pre-validation**,
not the certificate order. After that, it is no longer offered at issuance. Do not select it unless
that is what you want.
:::

## Troubleshooting {#troubleshooting}

| Situation | What to do |
| --- | --- |
| The request is refused because one is already in progress | The organization already has a pre-validation of that type being validated. Wait for it to finish or follow it in the details. |
| The request is refused because a pre-validation already exists for these details | The certificate authority already holds one for this organization. Contact support before requesting again. |
| **Continue** does not move to the next step | A field is missing or invalid; the message under it says why. |
| Requesting, rejecting or revoking asks for two-factor authentication | Sign in to the portal with two-factor authentication (or single sign-on) and try again. |
| A step stays **Waiting** for days | Check that the representative accepted the agreement and answered the certificate authority's e-mail or call, and that any requested document was sent through its tracking page. |
| The pre-validation is not offered in the issuance wizard | It must be **Active** and not expired, and of a type that serves the credit: an EV credit only accepts an EV pre-validation. |

## Related Areas

* [SSL Certificates](./ssl-certificates.md): certificate types, permissions and credits.
* [Issuing a Certificate](./issuing-a-certificate.md): the issuance wizard, step by step.
* [Managing Certificates](./managing-certificates.md): statuses, domain control validation and
  revocation.

## Support

Should you have any questions or require assistance while using the Conviso Platform, feel free to reach out to our dedicated support team.
