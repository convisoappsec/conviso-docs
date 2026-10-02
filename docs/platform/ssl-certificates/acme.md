---
id: acme
title: Automating Certificates with ACME
sidebar_label: ACME Automation
description: Issue and renew Conviso SSL/TLS certificates automatically with certbot, cert-manager or any ACME client. Verify your domains once with a CNAME record, connect your servers and let renewals happen on their own.
keywords: [ACME, certbot, cert-manager, automatic renewal, EAB, external account binding, CNAME, domain control validation, SSL, TLS, Conviso Platform]
image: '/static/img/securityfeedseo.png'
---

:::note Draft
This page is a work in progress. Screenshots will be added once the screen design is final.
:::

## Objective

Issue and renew Conviso SSL/TLS certificates with the ACME client you already run, such as
**certbot** or **cert-manager**, without opening the platform for each certificate. You prove
control of each domain once, connect each server once, and from then on the client orders and
renews certificates on its own. Each issuance spends a credit, exactly like a certificate issued
from the portal.

## How It Works

1. **Verify the domain.** Add the domain on the ACME page and create one CNAME record in your DNS.
   It is done once and covers the domain and all of its subdomains, wildcard included.
2. **Connect the server.** Create a server credential: choose the product, optionally limit the
   domains, and copy the key into certbot or cert-manager.
3. **Certificates come out on their own.** The client orders the certificate, the platform issues
   it with your credit, and the client renews it before it expires.

No challenge is answered per order: the CNAME you created in step 1 is what proves control of the
domain for every order that follows.

## Prerequisites

* The SSL Certificates module enabled for your account and permission to manage certificates. See
  [Before You Start](./ssl-certificates.md#before-you-start).
* Credits for a **DV** product (SSL DV, SSL Wildcard DV, SSL MDC DV, SSL MDC Wildcard DV, SSL SAN DV
  or SSL SAN Wildcard DV). OV and EV are not issued through ACME. See
  [Certificate Credits](./ssl-certificates.md#certificate-credits).
* Access to create records in the DNS of the domain.
* An ACME client that supports External Account Binding (EAB), such as certbot or cert-manager.

## The ACME Page {#the-acme-page}

The ACME page is under **Inventory > Assets > Certificates**: click **Configure ACME** in the
certificate list toolbar. The page follows the order of the setup, top to bottom:

1. **Domains:** the domains of your company and the CNAME record each one needs.
2. **Server credentials:** the servers and clusters connected to ACME, with their situation.

Each section is a list with its own search and its own action: **New domain** in the first,
**Connect server** in the second. While no domain is verified, the second section warns that
servers only issue after a domain is verified. The **ACME documentation** link at the top of the
page opens this guide.

{/* Screenshot: the ACME page with both sections. */}

## Add a Domain {#add-a-domain}

1. In the **Domains** section, click **New domain**.
2. Enter the registered domain, for example `example.com`. Adding `example.com` already covers
   `www.example.com`, `app.example.com` and `*.example.com`; there is no need to add subdomains
   one by one.
3. Click **Create**. The domain appears as **Pending**, with the CNAME record to create.

{/* Screenshot: new domain panel. */}

## Create the CNAME Record {#create-the-cname-record}

Each domain shows the record to create in your DNS:

| Field | Value |
|---|---|
| Type | `CNAME` |
| Name | `_pki-validation.<your domain>`, for example `_pki-validation.example.com` |
| Target | `d48e2ff2023f18696cb8f0a0ff9c4635.dcv.acme.conviso.com.br` (example; copy the value shown on the page, unique for each domain) |

{/* TODO: confirm the production zone (dcv.acme.conviso.com.br is a placeholder until infra
defines it). */}

After creating the record, click **Check now**. When the platform finds the CNAME, the domain turns
**Active** and servers can issue for it.

Keep the record in place. The platform checks every active domain once a day; if the record is
removed or changed, the domain turns **Needs attention**, new orders for it are refused, and the
users who can see certificates are notified.

If the domain has CAA records, they must allow Sectigo (`sectigo.com`), the certificate authority
that issues Conviso certificates.

{/* Screenshot: domain row with the record name and target. */}

### Common DNS Providers {#dns-providers}

Most providers ask for the name **without** the domain at the end. For `example.com`, type
`_pki-validation` in the name field and paste the target as the value.

{/* TODO: short notes per provider (Route 53, Cloudflare, registro.br, GoDaddy) after checking
each provider's current screen. */}

## CNAME Troubleshooting {#cname-troubleshooting}

When **Check now** does not find the record, the reason appears under the domain name. The usual
causes:

* **Record created under the wrong name.** Some providers append the domain automatically, which
  produces `_pki-validation.example.com.example.com`. Use only `_pki-validation` in the name field.
* **Record not propagated yet.** DNS changes can take a few minutes to become visible, depending on
  the TTL. Wait and click **Check now** again.
* **Proxy enabled.** In providers that offer a proxy (such as Cloudflare), the CNAME must be
  **DNS only**.
* **CAA does not allow Sectigo.** Add a CAA record with `0 issue "sectigo.com"`, or
  `0 issuewild "sectigo.com"` for wildcard certificates, next to your existing ones.
* **Domain marked as Needs attention after working.** The daily check stopped finding the CNAME or
  the CAA now refuses Sectigo. Fix the record and click **Check now**.

## Connect a Server {#connect-a-server}

A **server credential** connects one server or cluster. Create one per server so you can follow
and switch off each of them on its own.

1. In the **Server credentials** section, click **Connect server**.
2. **What to issue:** name the credential (the hostname or the cluster, for example) and choose
   the product. The product decides the certificate type; each issuance spends one credit of it.
3. **For which domains:** optionally limit the domains this server may order. With none selected,
   it covers every verified domain of the company, including domains verified later. You can
   change it later with **Edit domains**.
4. **Install on the server:** copy the **Directory URL**, the **EAB Key ID** and the
   **EAB HMAC Key**, and use them in the client as shown below.

:::danger The key is shown only once
The EAB HMAC Key cannot be displayed again after the panel is closed. It works for **one**
registration and expires after **7 days**. If it is lost or expires, use **Generate new EAB** on
the server credential.
:::

The panel waits for the server and shows when it connects; you can also close it and follow the
situation in the list. The credential shows **Waiting for connection** until the client
registers with the key, and **Connected** after that. A link to this guide sits right below the
key warning, for the step-by-step setup.

{/* Screenshot: the three steps of the Connect server panel. */}

### certbot {#certbot}

Request the first certificate with the values copied from the panel:

```bash
certbot certonly --standalone \
  --server <Directory URL> \
  --eab-kid <EAB Key ID> \
  --eab-hmac-key <EAB HMAC Key> \
  --issuance-timeout 300 \
  -d example.com
```

* Issuance is asynchronous and can take a few minutes. certbot waits 90 seconds by default;
  `--issuance-timeout 300` gives it more room.
* For a wildcard, quote the name: `-d '*.example.com'`.
* certbot registers the account on this first run. Later runs on the same server reuse it, so the
  EAB key is not needed again.
* Renewal uses certbot's own scheduler (systemd timer or cron, installed with certbot). Check it
  with `certbot renew --dry-run`.

### cert-manager {#cert-manager}

Store the HMAC key in a Secret and create a `ClusterIssuer` pointing to the Directory URL. The
issuer needs **no solvers**, because orders come back already authorized:

```bash
kubectl -n cert-manager create secret generic conviso-acme-eab \
  --from-literal=hmac=<EAB HMAC Key>
```

```yaml
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: conviso-acme
spec:
  acme:
    server: <Directory URL>
    privateKeySecretRef:
      name: conviso-acme-account
    externalAccountBinding:
      keyID: <EAB Key ID>
      keySecretRef:
        name: conviso-acme-eab
        key: hmac
```

Then request certificates as usual:

```yaml
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: app
spec:
  secretName: app-tls
  dnsNames:
    - app.example.com
  issuerRef:
    name: conviso-acme
    kind: ClusterIssuer
```

The product is set by the server credential, so a cluster that needs two products (for example
SSL DV and SSL Wildcard DV) uses two server credentials and two `ClusterIssuer` resources.
cert-manager renews the certificate on its own before it expires.

### Other ACME Clients {#other-clients}

Any client with External Account Binding support works with the same three values: the Directory
URL as the ACME server, the EAB Key ID and the EAB HMAC Key.

{/* TODO: tested examples for acme.sh, Caddy, Traefik and win-acme. */}

## Renewal {#renewal}

The client renews on its own; nothing is done in the platform. A renewal of the same names reuses
the credit of the original certificate while that credit's term lasts. After the term ends, or
when the names change, the next issuance spends a new credit. Without an available credit for the
server credential's product, the order is refused and the client reports an authorization error.

## Revoking a Certificate {#revoking}

Revoke from the client that issued the certificate, for example:

```bash
certbot revoke --cert-name example.com --reason superseded
```

The accepted reasons are `unspecified`, `keycompromise`, `affiliationchanged`, `superseded` and
`cessationofoperation`.

## Managing Server Credentials {#managing-server-credentials}

The **Server credentials** list shows, for each credential: the product, the domains it may
order (**All domains** when not limited), the situation, the number of **Active accounts**, the
number of **Unused EABs** and the **Last issuance**. Click the active accounts count to see the
accounts. The actions of each row:

* **Generate new EAB:** a new key for a server that lost the previous one, or for a new
  installation.
* **Edit domains:** change which domains the server may order. Renewals for domains removed from
  the list are refused from the next order on.
* **Accounts:** each installation that registered with a key creates an ACME account. Deactivate an
  account to switch off one installation without touching the others.
* **Deactivate:** switches the server credential off for good. Its accounts stop on their next
  request and its unused keys stop working. Certificates already issued stay valid until they
  expire.

Deactivating a **domain** refuses new orders for it; certificates already issued stay valid.

## FAQ {#faq}

{/* TODO: questions collected from the team and from support. */}
