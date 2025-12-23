---
id: ast
title: Scan projects using the Conviso CLI
sidebar_label: Scan projects using the CLI
description:  Protect your code from security threats with our AST (Application Security Testing) using Conviso CLI. Know more about!
keywords:  [Scan projects using the Conviso Platform CLI]
image: '/static/img/cliastseo.png'
---

### Introduction

Protect your code from security threats with our **AST (Application Security Testing)** using Conviso CLI.

The tool offers both **Static Application Security Testing (SAST)** and **Software Composition Analysis (SCA)** tools, which can be accessed through the Conviso Platform.


### Usage

To trigger this function is very simple, one of the methods is to export the settings to be used by the CLI to environment variables. Below an example:

```bash
export CONVISO_API_KEY='your-api-key'
cd your_source_code_repository
conviso ast run
```

Or if you prefer to do it in a single command, the instructions below have the same effect:

```bash
conviso --api-key 'your-api-key' ast run \
  --repository-dir 'your_source_code_repository_path'
```

**Note:** You need an API Key. Refer to the following documentation to know how to generate one [here](../platform/security-feed.md#generate-api-key).

The identified vulnerabilities will be automatically associated with the Asset in Conviso Platform. Now you can use the [Vulnerabilities](../../platform/vulnerabilities) resource to work on the correction flow.

### Available Arguments for Conviso AST

You can customize your Conviso AST scans by using several command-line arguments. Below is a list of the available options:

- `--repository-dir or -r`  
  **Specify the source code repository directory.**  
  Use this to point to the local directory containing the source code you wish to scan.

- `--current-commit or -c`  
  **Specify the commit to be analyzed.**  
  If no value is provided, the `HEAD` commit of the current branch will be used.

- `--previous-commit or -p`  
  **Specify the previous commit for comparison.**  
  If no value is provided, the value is retrieved from the latest deploy on the Conviso Platform.

- `--company-id`  
  **Specify your Company ID on the Conviso Platform.**  
This option is required if you have access to multiple companies, as it links the scan results to the appropriate company account.

- `--asset-name`  
  **Assign a custom name to your asset.**  
  This allows you to better organize and identify assets within the Conviso Platform.

- `--vulnerability-auto-close`  
  **Enable auto-fixing of vulnerabilities.**  
  This option will attempt to automatically close vulnerabilities on the Conviso Platform after the scan is completed.

### Naming an asset

When using the Conviso AST, you have the flexibility to assign custom names to your assets on the Conviso Platform. By default, Conviso AST utilizes the repository name as the asset name. However, you may prefer to use a custom name for better organization or clarity.

To set a custom name for your asset, run the command like the following:

```bash
conviso ast run --asset-name 'your custom asset name'
```

This will work on SCA and SAST too:

```bash
conviso sca run --asset-name 'your custom asset name'
```

and

```bash
conviso sast run --asset-name 'your custom asset name'
```

### Auto closing vulnerabilities

We've developed an experimental feature for automatically closing vulnerabilities in the Conviso Platform. This functionality is currently in the testing phase. If you're interested in trying it out and providing feedback, here's how you can use it:

```bash
conviso ast run --vulnerability-auto-close
```

This will work on sca and sast too:

```bash
conviso sca run --vulnerability-auto-close
```

and

```bash
conviso sast run --vulnerability-auto-close
```

This will perform the scan as it has always been done and as a last step it will validate with the Conviso Platform if any vulnerability has been fixed.

### Deploy, aka code versions

When running the AST scan using the CLI, a [Deploy](../guides/code-review-strategies) is automatically created and diff code will be sent to Conviso Platform security for later human review.

<div style={{textAlign: 'center'}}>

![img](../../static/img/cli-ast1.png 'Conviso Platform security Code Review')

</div>

It is possible to verify if the code added or changed in the commit has known security vulnerabilities and compare it with the original repository.

**Note:** This feature is essential for performing Security Code Review by the security team. Conviso offers the continuous code review service, [see more](https://bit.ly/457M2Cb).


## Run scan only with Conviso SAST or SCA

As an additional custom configuration of the Conviso CLI, it’s possible to perform SAST-only in your code using the following command:

```bash
export CONVISO_API_KEY='your-api-key'
cd your_source_code_repository
conviso sast run
# or
conviso sca run
```

The following instructions have the same effect:

```bash
cd my_source_code_repository
conviso --api-key 'your-api-key' sast run
# or
conviso --api-key 'your-api-key' sca run
```

In case of any results, they will be automatically sent to Conviso Platform for assessment.

## Support
If you have any questions or need help using Conviso CLI, please don't hesitate to contact our [support team](mailto:support@convisoappsec.com).
