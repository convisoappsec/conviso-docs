---
id: security-gate
title: CI/CD Pipeline Security Control with Security Gate
sidebar_label: CI/CD Pipeline Security Control with Security Gate
description:  With Conviso AST's Security Gate feature, you can set vulnerability policies and check if those policies are being met, learn more!
keywords:  [CI/CD Pipeline Security Control]
image: '/static/img/securitygateseo.png'
---

## Introduction
With Conviso AST's **Security Gate** feature you can define vulnerability policies, such as the number of vulnerabilities by severity and sources, and automatically block your CI/CD pipeline if these policies are not complied.

### Prerequisites
Set the API Key ```export CONVISO_API_KEY='your-api-key'```.

## Usage
To use this feature, follow these steps:

### 1. Defining vulnerability policies

First, you need to define the policies for the specific asset. This AST feature helps you with that, allowing you to define policies such as:

**Option A: Platform-based configuration (Recommended)**
- Configure policies through the [Conviso Platform Security Gate](/platform/security-gate).
- Policies are managed directly in the Platform and take effect instantly.
- No YAML file needed in your repository.
- Supports both global and asset-specific rules.

**Option B: YAML file configuration**
- Define policies as code in your repository - [See YAML configuration guide](#creating-the-security-gate-rules-in-the-yaml-file).
- Policies are committed alongside your code.

### 2. Running Security Gate with the AST
After defining your vulnerability policies (either in a YAML file or in the Platform), run the Security Gate command in your CI/CD pipeline:

**Option A: Using Platform-based configuration:**
```bash
conviso vulnerability assert-security-rules
```

**Option B: Using YAML file configuration:**
```bash
conviso vulnerability assert-security-rules --rules-file 'FILE_NAME.yml'
```

### Understanding Security Gate Results

After running the Security Gate command, you'll receive one of two possible responses:


#### Success Response

If all vulnerabilities meet the defined policies, you will receive a success response:
```
Starting vulnerabilities security rules assertion
✅ Vulnerabilities security rules assertion finished
```

#### Failure Response

However, if any vulnerability does not meet the defined policies, you will receive a failure response:
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

---

### Creating the Security Gate rules in the YAML file

:::tip
**Prefer managing policies in the Platform?** You can skip the YAML configuration entirely and [configure Security Gate policies directly in the Platform UI](/platform/security-gate) instead.
:::

If you chose to use YAML file configuration, you'll need to create a policy file in your repository.

The policy file structure is based on YAML format and can be defined with rules. 

For example, you can define a policy that will block your CI/CD pipeline if there are more than 5 high severity vulnerabilities from any scanners:

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

If the policy that was defined is true and the Asset in fact has more than 5 high severity vulnerabilities, then the Security Gate feature will break the job execution of the pipeline.

To avoid validating a specific severity value, just remove it from the rules content. 

For example, in case you want to validate only critical and high severity:

```yml
rules:
- from: any
  severity:
    critical:
      maximum: 0
    high:
      maximum: 5
```

Save the file in the repository where the AST will run and record its name that will be used in the next step.

#### Running Security Gate with Vulnerabilities Aging

Vulnerabilities aging allows you to configure how many days vulnerabilities of certain severities can remain open before they are considered for blocking the pipeline, effectively serving as an SLA definition for fixing vulnerabilities. You can apply this to all severities or just to specific ones, as shown in the example below:

```yml
rules:
- from: any
  severity:
    critical:
      # Will block the pipeline if there is at least one critical vulnerability open, 
      # regardless of how long it has been open.
      maximum: 0
    high:
      # Will block the pipeline if there is at least one high vulnerability open for more than 10 days.
      maximum: 0
      max_days_to_fix: 10
    medium:
      # Will block the pipeline if there are at least two medium vulnerabilities open for more than 30 days.
      maximum: 1
      max_days_to_fix: 30
    low:
      # Will block the pipeline if there are at least six low vulnerabilities open for more than 90 days.
      maximum: 5
      max_days_to_fix: 90
```

If the rules are not followed, the pipeline will be blocked as well.

## Support
If you have any questions or need help using Conviso AST, please don't hesitate to contact our [support team](mailto:support@convisoappsec.com).
