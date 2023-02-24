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

* Integrate SARIF importation with Github Actions through the workflow below. To use it you must setup 3 variables as secrets in the repository. They are listed here:

  * `FLOW_API_KEY` - required - Conviso Platform apikey 
  * `FLOW_PROJECT_CODE` - required - Conviso Platform project to receive the findings
  * `OUTPUT_FILEPATH` - required - SARIF filepath outputed from scanner and consumed by Conviso CLI

  <>
    <br/>
    <details>
    <summary>file: .github/workflows/sample.yml</summary>

    ```yaml 
    name: Security Scan + Conviso importation

    on:
      workflow_dispatch:
      push:
        branches:
          - main

    jobs:
      # You can change the Scanner here to any who performs SARIF output
      scan:
        name: Security Scan
        runs-on: ubuntu-20.04
        container:
          image: returntocorp/semgrep
        steps:
          - name: Checkout code
            uses: actions/checkout@v3

          - name: Semgrep scan
            id: scan
            run: semgrep --config=auto --sarif -o ${{secrets.OUTPUT_FILEPATH}}

          - name: Upload results
            uses: actions/upload-artifact@v3
            with:
              name: ${{secrets.OUTPUT_FILEPATH}}
              path: ${{secrets.OUTPUT_FILEPATH}}

      import:
        name: Conviso Findings Importation
        needs: scan
        runs-on: ubuntu-20.04
        container:
          image: convisoappsec/flowcli:1.12.0-rc.2
          env:
            FLOW_API_KEY: ${{secrets.FLOW_API_KEY}}
            FLOW_PROJECT_CODE: ${{secrets.FLOW_PROJECT_CODE}}
        steps:
          - name: Checkout code
            uses: actions/checkout@v3

          - name: Download result from previous scan
            uses: actions/download-artifact@v3
            with:
              name: ${{secrets.OUTPUT_FILEPATH}}

          - name: SARIF Importation
            run: |
              conviso findings import-sarif --input-file ${{secrets.OUTPUT_FILEPATH}}

    ```

    </details>
  </>

  :warning: Note that the functionality is in pre-release. It is necessary that the Container image in Job `import` use the corresponding version `1.12.0-rc.2`.

<!-- 
## References

1. TBD
2. TBD
-->

[sarif]: http://docs.oasis-open.org/sarif/sarif/v2.1.0/sarif-v2.1.0.html
<!-- TODO: update container image version when pre-release "1.12.0-rc.2" get stable -->