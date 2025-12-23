---
id: security-gate
title: CI/CD Pipeline Security Control with Security Gate
sidebar_label: CI/CD Pipeline Security Control with Security Gate
description:  With Conviso CLI's Security Gate feature, you can set vulnerability policies and check if those policies are being met, learn more!
keywords:  [CI/CD Pipeline Security Control]
image: '/static/img/securitygateseo.png'
---

## Introduction
With Conviso CLI's **Security Gate** feature you can define vulnerability policies, such as the number of vulnerabilities by severity and sources, and automatically block your CI/CD pipeline if these policies are not complied.

### Prerequisites
Set the API Key ```export CONVISO_API_KEY='your-api-key'```.

## Usage
To use this feature, follow these steps:

### 1. Defining vulnerability policies

First, you need to define the policies for the specific project. This CLI feature helps you with that, allowing you to define policies such as:

- Number of vulnerabilities by severity (Low, Medium, High, Critical)

- Number of vulnerabilities based on how long they've been open

**Note:** It's important to highlight that the definition of vulnerability policies must be defined in the vulnerability management process, considering risk appetite, team maturity and other factors.

### 2. Creating the Security Gate rules in the YAML file
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

Save the file in the repository where the CLI will run and record its name that will be used in the next step.


### 3. Running Security Gate with the CLI
After defining the vulnerability policy file, run the following command:

```
conviso vulnerability assert-security-rules --rules-file 'FILE_NAME.yml'
```

If all vulnerabilities meet the defined policies, you will receive a success response:

```
Starting vulnerabilities security rules assertion
✅ Vulnerabilities security rules assertion finished
```

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

### 4. Running Security Gate with Vulnerabilities Aging

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
If you have any questions or need help using Conviso CLI, please don't hesitate to contact our [support team](mailto:support@convisoappsec.com).
