---
id: conviso-ast
title: Conviso AST
sidebar_label: Conviso AST
---

## Introduction

Scan and protect your codebase with Conviso AST, a security scanner focused on SAST.

**[At Conviso, we believe that AppSec goes beyond security tools, and we offer a comprehensive approach that includes consulting, training, and support services.](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)**

## Objective


With Conviso AST, you can analyze your source code and consolidate the results in Conviso Platform Vulnerability management module.
We utilize a unified security engine featuring Semgrep with Conviso-managed rules, this engine aggregates and deduplicates scan results.

## SAST
Currently we support the following languages using Semgrep with Conviso managed rules:

- C#
- Go
- Java
- JavaScript
- Kotlin
- Python
- Typescript
- C / C++
- JSX
- Ruby
- Scala
- Swift
- Rust
- PHP
- Generic
- JSON

:::note
Elixir is not yet supported by Semgrep. We use Sobelow, enhanced with Conviso-managed generic Semgrep rules, for Elixir security scans.
:::

## How to use Conviso AST?

Scan directly from your terminal with [**New CLI**](../../new-cli) and combine other capabilities such as: 

- Set policies to block the pipeline depending on different criteria;
- Send diff versions of your source code application to later be reviewed by your own security team or - Conviso's (when subscribed to our professional services license).
- Auto-close open vulnerabilities on the platform that are no longer identified during its execution, and can reopen them if they were closed but identified later.

**Conviso AST integrates with all the major CI/CD tools in the market**, whether on Github Actions, Gitlab, Jenkins, and many others; **discover[ our integrations here](../../integrations/integrations_intro)**.

The analysis results are sent to Conviso Platform, where you can view, prioritize and fix the vulnerabilities found using our **[Vulnerabilities](../../platform/vulnerabilities)** feature.

## How to automatically close resolved vulnerabilities with Conviso AST?

Conviso AST does not fix vulnerabilities in your code. Instead, it can automatically close vulnerabilities in Conviso Platform when they are no longer detected in a new scan.

After fixing the code in your repository, rerun the scan with:

```bash
conviso ast run --vulnerability-auto-close
```

With this option enabled, vulnerabilities not found anymore are automatically moved to a closed status in Conviso Platform. You will see a message indicating that the issue was auto-closed after validation in the new scan.

<div style={{textAlign: 'center' , maxWidth: '60%'}}>

![img](../../../static/img/tools/conviso-ast/conviso-ast-img1.png 'Conviso AST')

</div>

## Support

Should you have any questions or require assistance while using the Conviso Application Security Testing, feel free to contact our dedicated support team.
