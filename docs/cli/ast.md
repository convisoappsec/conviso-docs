---
id: ast
title: AST
sidebar_label: AST
---

## Application Security Testing (AST)

### Introduction

Using the CLI is very simple to execute an AST at your source code repository. The results will be sent to your Conviso Platform application by using the _project code identifier_. See [usage](#usage) to further details.

This command unifies three operations in a single and simple interface associated by the deploy ID. These operations are:

1. [Deploy][deploydoc] creation to send diff code to Conviso Platform security Code Review.
2. [SAST][sastdoc]
3. [SCA][scadoc]

### Usage

To trigger this function is very simple, one of the methods is to export the settings to be used by the CLI to environment variables. Below an example.

```bash
export CONVISO_API_KEY='your-api-key'
export CONVISO_PROJECT_CODE='your-project-code'

cd your_source_code_repository

conviso ast run
```

The following instructions have the same effect.

```bash
conviso --api-key 'your-api-key' ast run \
  --project-code 'your-project-code' \
  --repository-dir 'your_source_code_repository_path'
```

[deploydoc]: ../guides/code-review-strategies.md
[sastdoc]: ./sast.md
[scadoc]: ../integrations/gitlab.md#sca