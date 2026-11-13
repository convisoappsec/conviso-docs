---
id: organization-pre-validation
title: Organization Pre-Validation
sidebar_label: Organization Pre-Validation
description: Validate your organization once with the certificate authority for OV and EV certificates in Conviso Platform. Request, follow, reject and request again a pre-validation, and understand its statuses and the e-mails the certificate authority sends.
keywords: [pre-validation, organization validation, OV, EV, extended validation, CNPJ, certificate authority, SSL, TLS, Conviso Platform]
image: '/static/img/securityfeedseo.png'
---

## Objective

OV and EV certificates assert who owns the domain, so the certificate authority validates your
organization before issuing them: the agreement, the representative, the company registry and, for
EV, a final approval. A **pre-validation** runs that validation once, ahead of any certificate.
While it is active, the next OV or EV certificates for that organization skip the organization
validation, and issuance only waits for [domain control validation](./managing-certificates.md#domain-control-validation).

## How It Works

1. **Request it.** Fill in the organization and its representative, once per organization and type
   (OV or EV).
2. **The certificate authority validates the organization.** The representative accepts the
   agreement by e-mail and answers the certificate authority contact. Follow each step in the
   platform.
3. **It becomes active.** From then on, the organization's OV or EV certificates skip the
   organization validation, until the pre-validation expires.

## Where to Find It

Go to **Inventory > Assets > Certificates** and select **Organizations**. The **Pre-validated
organizations** page lists every pre-validation of your company:

| Column | Content |
| --- | --- |
| **ID** | The pre-validation's identifier in the platform |
| **Organization** | The legal name sent to the certificate authority |
| **CNPJ** | The registration number. It is what tells two organizations apart |
| **Type** | `OV` or `EV` |
| **Status** | The current state, see [Statuses](#statuses) |
| **Expires on** | When an active pre-validation stops applying |

Search by organization, CNPJ or order, use the **Active** and **In validation** shortcuts, or open
**Filters** for status and type. Select a row to open its details.

A company may have several organizations, each identified by its CNPJ, and each with its own OV and
EV pre-validation.

## Who Can Do What

| Action | Who |
| --- | --- |
| See the list and the details | Users who can view certificates |
| Request, **Check now**, **Reject** and **Request again** | Users who can manage certificates |

Requesting and rejecting also require being signed in to the portal with two-factor authentication
(or through your company's single sign-on). They are not available through an API key.

## Requesting a Pre-Validation

1. Select **Request OV pre-validation** or **Request EV pre-validation**.
2. Fill in the form:
   * **Organization**: legal name, CNPJ and address **exactly as in the official registry** (CNPJ
     card). A name, address or CNPJ that differs from the registry, or an inactive CNPJ, gets the
     request rejected.
   * **Registration and jurisdiction** (EV only): organization category, date of incorporation,
     trade name if the company uses one, and the city, state and country where it was registered.
   * **Representative**: job title, name, e-mail and phone of a person with authority to represent
     the organization. Prefer an e-mail on the company domain.
   * **Someone else signs the agreement** (optional): when another person has the legal power to
     accept the agreement, they receive it instead of the representative.
3. Select **Review**, check the summary, confirm that the representative has authority to represent
   the organization, and select **Send request**.

Only one pre-validation of each type can be in progress or active for the same organization. Another
one of the same type can be requested once it is rejected or expired.

## Following the Validation

The details show the steps of the validation, each as **Done**, **In progress** or **Waiting**:

| Step | OV | EV |
| --- | --- | --- |
| **Agreement accepted** | ✓ | ✓ |
| **Order authorization** (OV) / **Representative verification** (EV) | ✓ | ✓ |
| **Organization validation** | ✓ | ✓ |
| **Final approval** | | ✓ |

The platform checks the certificate authority automatically. To check right away, select **Check
now**, at most once a minute.

What the representative should expect:

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

## Statuses

| Status | Meaning |
| --- | --- |
| **Sending** | The request is on its way to the certificate authority |
| **Submission unconfirmed** | The certificate authority did not confirm the request. The platform keeps checking. Do not send it again; if it stays like this, contact support |
| **In validation** | The certificate authority is validating the organization. Follow the steps in the details |
| **Active** | Validated. The organization's next certificates of this type skip the organization validation |
| `Expires in {n} days` | Active, with 30 days or less left |
| **Rejected** | The certificate authority refused it, or it was rejected in the platform. The details show the reason, when there is one |
| **Expired** | The validity has ended. New certificates of this type go back to validating the organization |

The company administrators, and whoever requested the pre-validation, are notified when it becomes
active, when the certificate authority rejects it, and 30, 15 and 7 days before it expires and on
the day it does.

## Rejecting a Pre-Validation

Rejecting withdraws the pre-validation at the certificate authority. It is available while the
pre-validation is **In validation** or **Active**.

1. In the row's **⋮** menu, select **Reject**.
2. Check the organization and the certificate authority order shown, type `REJECT` and confirm.

:::warning
Rejecting cannot be undone. The pre-validation stops applying to new certificates, and using one
again means requesting a new pre-validation and going through the whole organization validation
again.
:::

## Requesting Again

On a **Rejected** or **Expired** pre-validation, the **⋮** menu offers **Request again** (or
**Request a new pre-validation**, on an expired one). It opens the request form of the same type,
filled in with the organization's details: legal name, CNPJ and address. The representative, the
signer and the EV registration details start blank.

Sending it creates a **new** pre-validation, with its own order at the certificate authority, and the
validation starts over. The rejected or expired one stays in the list as it was.

The option is only offered when the organization has no other pre-validation of the same type in
progress or active.

## The E-mail Sent at Each Certificate

Each OV or EV certificate issued with the pre-validation sends the representative an e-mail from the
certificate authority (`noreply@sectigo.com`), with a subject like `ORDER #<order> - Instant
Organization Validation Based On EV Pre-Validation ID <pre-validation>`. It is expected and asks for no action: it states that the organization is already validated and that
the certificate is issued as soon as domain control validation completes, and it repeats the
company and requester details for review.

:::danger
The **To cancel the pre-validation** link in that e-mail cancels the **company's pre-validation**,
not the certificate order. After that, the next OV and EV certificates go back to the full
organization validation. Do not select it unless that is what you want.
:::

## Troubleshooting

| Situation | What to do |
| --- | --- |
| The request is refused because one is already in progress or active | The organization already has a pre-validation of that type in progress or active. Only one per organization and type is allowed. |
| The request is refused because a pre-validation already exists for these details | The certificate authority already holds one for this organization. Contact support before requesting again. |
| Requesting or rejecting asks for two-factor authentication | Sign in to the portal with two-factor authentication (or single sign-on) and try again. |
| A step stays **Waiting** for days | Check that the representative accepted the agreement and answered the certificate authority's e-mail or call, and that any requested document was sent through its tracking page. |
| **The last check could not reach the certificate authority** | Temporary. Select **Check now** again later; the automatic check also continues. |

## Related Areas

* [SSL Certificates](./ssl-certificates.md): certificate types, permissions and credits.
* [Issuing a Certificate](./issuing-a-certificate.md): the issuance wizard, step by step.
* [Managing Certificates](./managing-certificates.md): statuses, domain control validation and
  revocation.

## Support

Should you have any questions or require assistance while using the Conviso Platform, feel free to reach out to our dedicated support team.
