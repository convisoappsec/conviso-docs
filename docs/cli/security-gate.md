---
id: security-gate
title: CI/CD Pipeline Security Control with Security Gate
sidebar_label: CI/CD Pipeline Security Control with Security Gate
---

## Introduction
With Conviso CLI's **Security Gate** feature you can define vulnerability policies, such as the number of vulnerabilities by severity and sources, and automatically block your CI/CD pipeline if these policies are not complied, ensuring that your code is secure from potential threats.

### Prerequisites
To successfully run this command [authenticate](/cli/installation#authentication) your machine and set the project key with ```export FLOW_PROJECT_CODE='your-project-code'```. The "Project Code" is found on the specific project page.

## Usage
To use this feature, follow these steps:

### 1. Defining vulnerability policies

First, you need to define the policies for the specific project. This CLI feature helps you with that, allowing you to define policies such as:

- Vulnerability quantity by severity (Low, Medium, High, Critical)

- Vulnerability sources (for example, external integrations such as Checkmarx or Qualys, and also Conviso Platform scanners)

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

If the policy that was defined is true and the asset in fact has more than 5 high severity vulnerabilities, then the Security Gate feature will break the job execution of the pipeline.

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

## Support
If you have any questions or need help using Conviso CLI, please don't hesitate to contact our [support team](mailto:support@convisoappsec.com).

## Resources
By exploring our content you'll find resources to help you understand the benefits of the Conviso CLI:

[How Vulnerability Management Works in Conviso Platform:](https://bit.ly/3LBxR0m) Discover the key features of the platform and how it helps detect, prioritize, and remediate vulnerabilities.

[Prioritization of Vulnerabilities:](https://bit.ly/3LBxR0m) Learn best practices for prioritizing vulnerabilities and creating a strategy that works for your organization.

[Vulnerability Management Process:](https://bit.ly/3LgMDIn) Get an overview of the process and learn how to implement it in your organization.

[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)