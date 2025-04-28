---
id: bring-applications
title: First steps with the Conviso Platform
description:  You are about to take your first steps with the Conviso Platform and start a new experience with secure development. Let's go!
keywords:  [First steps with the Conviso Platform]
---

## Introduction

To start your experience with the Conviso Platform, you need to onboard your applications. This can be done through several approaches:

- Permorming a [Conviso AST](#performing-conviso-ast) scan;
- Integration with an [External Scanner](#integrating-with-an-external-scanner) (e.g., Checkmarx, Dependency-Track, Fortify, SonarQube, SonarCloud).

### Performing Conviso AST

One way to onboard your applications into the Conviso Platform is by executing a Conviso AST scan. This functionality enables you to create an Asset on the platform and run analyses such as SAST, SCA, IaC, secrets detection, and SBOM generation.

To perform a Conviso AST scan, you need to configure a new task in your CI/CD environment. The Conviso Platform integrates seamlessly with many CI/CD tools. The next step is to choose your CI/CD tool from the options below:

* **[AWS Codebuild](../integrations/aws-codebuild.md)**
* **[Azure Pipelines CLI Mode](../integrations/azure-pipelines-cli.md)**
* **[Azure Pipelines Graph Mode](../integrations/azure-pipelines-graph.md)**
* **[Bitbucket Pipelines](../integrations/bitbucket-pipelines.md)**
* **[CircleCI](../integrations/circleci.md)**
* **[Codefresh](../integrations/codefresh.md)**
* **[GitHub Actions](../integrations/github-actions.md)**
* **[GitLab](../integrations/gitlab.md)**
* **[Jenkins](../integrations/jenkins.md)**
* **[Jenkins Single Pipeline for Multiple Repositories using Webhooks](../integrations/jenkins-single-pipeline.md)**

Additionally, you can also bring your applications into the platform using the Conviso CLI. [Click here](../cli/ast.md) to learn how.

#### Observing Scan Execution

Whenever Conviso AST runs, you can monitor its results through the log. From there, you can see how many SAST, SCA, and IaC vulnerabilities were found in that specific scan, how many vulnerabilities have been fixed, and track how many were resolved in the current execution.
```code
Run conviso ast run --vulnerability-auto-close
✅ Asset found...
✅ AST Project found...
Creating new deploy...
warning: Creating diff comparing revision[44c391c7475fa19221ceb8362808da72fe89c1ed] and the repository beginning
warning: Creating diff stats comparing revision[44c391c7475fa19221ceb8362808da72fe89c1ed] and the repository beginning
Deploy stats:
  current_version.commit=44c391c7475fa19221ceb8362808da72fe89c1ed
  current_version.tag=None
  previous_version.commit=4b825dc642cb6eb9a060e54bf8d69288fbee4904
  previous_version.tag=None
Running SAST on deploy ID "131458"...
Checking SASTBox authorization...
Starting SAST scan diff...
[*] Preparing Codebase...
Result saved to /tmp/prepare-codebase.20241110_192606.json
[*] Running fingerprint
Result saved to /tmp/fingerprint.20241110_192606.json
[*] Technologies detected:
    javascript,unknown
[*] Installing scanners, waiting ...
[*] Running app_inspector
    Sarif result saved to /tmp/app_inspector.20241110_192634.sarif
[*] Finished app_inspector
[*] Running secrets_scanner_gitleaks
    Sarif result saved to /tmp/secrets_scanner_gitleaks.20241110_192635.sarif
[*] Finished secrets_scanner_gitleaks
[*] Running nodejs_scanner_njsscan
    Sarif result saved to /tmp/nodejs_scanner_njsscan.20241110_192635.sarif
[*] Finished nodejs_scanner_njsscan
[*] Aggregating results from scanners...
[*] Running SastBox SARIF aggregator...
    Sarif result saved to /tmp/aggregator.20241110_192637.sarif
[*] Doing postscan analysis...
[*] Starting analysis on /tmp/aggregator.20241110_192637.sarif...
[*] Stats:
    Scanner app_inspector                 :     0 issue(s) found
    Scanner nodejs_scanner_njsscan        :     1 issue(s) found
    Scanner secrets_scanner_gitleaks      :     0 issue(s) found
    Total issue(s) found                  :     1
[*] Starting dedup process...
    No duplicated entries found
SastBoxV1 compatible result saved to /tmp/output.json
Result saved to /tmp/output.sarif
Time elapsed: 00:00:31
SAST scan diff done.
💬 0 issue(s) ignored due to duplication.
/tmp/tmpkhf9g06d/tmp/output.json
Running SCA on deploy ID "131458"...
💬 Preparing Environment...
💬 Starting SCA...
   Scanner osv_scanner is running.
💬 Processing Results...
Sending data to the Conviso Platform...
💬 0 issue(s) ignored due to duplication.
✅ SCA Scan Finished.
💬 Generating SBOM file...
✅ SBOM file generated successfully!
💬 Sending SBOM to the Conviso Platform...
✅ SBOM file sent successfully!
Running IAC on deploy ID "131458"...
💬 Preparing Environment...
💬 Starting IaC...
   Scanner iac_scanner_checkov is running.
💬 Processing Results...
💬 0 Issue/Issues ignored due to duplication.
✅ IaC Scan Finished.
```

If any issues arise during the scan execution, they will also be visible in the log. Should this happen, please contact our support team to have the issue resolved.

### Integrating with an External Scanner

You can onboard your applications into the Conviso Platform by integrating with an External Scanner. This functionality allows you to import applications and vulnerabilities from other tools.

To integrate with an External Scanner, select your desired tool below:

* **[Checkmarx](../integrations/checkmarx.md)**
* **[Dependency-Track](../integrations/dependency-track.md)**
* **[Fortify](../integrations/fortify.md)**
* **[SonarCloud](../integrations/sonarcloud.md)**
* **[SonarQube](../integrations/sonarqube.md)**

Once the integration is complete, return to the [Quickstart](./developer-quickstart.md#receiving-security-notifications) to continue your journey.