---
id: ast
title: AST
sidebar_label: AST
---

## Application Security Testing (AST)

### Introduction

Using the CLI is very simple to execute an AST at your source code repository. The results will be sent to your Conviso Platform application by using the *project code identifier*. See [usage][#usage] to further details.

This command unifies three operations in a single and simple interface. These operations are:

1. [Deploy][deployDoc] creation to send diff code to Conviso Platform security Code Review. 
2. [SAST][sastDoc] and 3. [SCA][scaDoc] execution associated by the deploy ID. 


### Usage

To trigger this function is very simple, one of the methods below is to export to environment variables used for the shell.

```bash
export FLOW_API_KEY='your-api-key'
export FLOW_PROJECT_CODE='your-project-code'

cd your_source_code_repository

conviso sast run
```

The following instructions have the same effect.

```bash
conviso --api-key 'your-api-key' ast run
  --project-code 'your-project-code' \
  --repository-dir 'your_source_code_repository_path'
```


[deployDoc]: ../guides/code-review-strategies.md
[sastDoc]: ./sast.md
[scaDoc]: ../integrations/gitlab.md#sca
