---
id: findings
title: Findings
sidebar_label: Findings
---

## Usage

`conviso findings [OPTIONS] COMMAND [ARGS]`

## Description

The `conviso findings` allows you to perform operations around Findings of your account at Conviso Platform.

## Commands

## import-findings

`conviso findings import-sarif [OPTIONS]`

To import results from a [SARIF][sarif] file to a project of your account in the Conviso Platform.

### Options

| Option                | Description                            |
| --------------------- | -------------------------------------- |
| --project-code TEXT   | [env var: FLOW_PROJECT_CODE; required] |
| -i, --input-file PATH | The path to SARIF file.  [required]    |

### Examples

* Importing `file.sarif` to a project in Conviso Platform:

  ```bash
  conviso findings import-sarif --project-code $YOUR_PROJECT_CODE --input-file file.sarif
  ```


<!-- 
## References

1. TBD
2. TBD
-->

[sarif]: http://docs.oasis-open.org/sarif/sarif/v2.1.0/sarif-v2.1.0.html