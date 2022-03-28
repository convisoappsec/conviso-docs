---
id: security-gate
title: Security Gate
sidebar_label: Security Gate
---

## Overview

Imagine that you want to validate your opened vulnerabilities for an specific project and block your [CI/CD] pipeline depending on pre defined vulnerability policies.
The Security Gate feature helps you with that by letting you define policies such as:
- Vulnerability Quantity by severity (Low, Medium, High, Critical)
- Vulnerability sources (For example, external integrations such as Checkmarx or Qualys, and also [Conviso Platform] scanners)

## How does it work?

First, you need to define the policies for the specific project.
Let us define for this example that a [CI/CD] pipeline needs to be blocked when there is more than 5 high severity vulnerabilities.
If the policy that was defined is true and the asset in fact has more that 5 high severity vulnerabilities, then the Security Gate feature will break the job execution of the pipeline indicating the cause with the details of why it did not passed through.

## Policy File Structure

For the previous example it can be used the following policy rules:

```yml
rules:
- from: any
  severity:
    critical:
      maximum: 0
    high:
      maximum: 5
    medium:
      maximum: 0
    low:
      maximum: 0
```

## Usage
```
conviso vulnerability assert-security-rules --rules-file rules.yml
```

Success Response:
```
Starting vulnerabilities security rules assertion
✅ Vulnerabilities security rules assertion finished
```

Failed Response:
```
Starting vulnerabilities security rules assertion
💬 Vulnerabilities summary
[
    {
        "from": "any",
        "severity": {
            "high": {
                "quantity": 7
            }
        }
    }
]
Error: Vulnerabilities quantity offending security rules
```


[CI/CD]: <https://en.wikipedia.org/wiki/CI/CD>
[Conviso Platform]: <https://app.convisoappsec.com/>