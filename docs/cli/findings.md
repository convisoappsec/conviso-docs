---
id: findings
title: Importing the scan results of a SARIF file
sidebar_label: Importing the scan results of a SARIF file
---

## Introduction
The Conviso CLI allows you to import results from a (SARIF)[http://docs.oasis-open.org/sarif/sarif/v2.1.0/sarif-v2.1.0.html] file, such as Trivy or Semgrep, to a project in your account on the Conviso Platform. This can be useful for tracking and managing security vulnerabilities and other issues found by scanning tools.

**Note:** This functionality is in **Pre-Release**. It is necessary that the Container image in Job `import` use the corresponding version `1.12.0-rc.2`. To learn how to do this, [read how to install the Conviso CLI in alternative methods](/installation.md/#other-installation-commands).


### Prerequisites
To successfully run  `conviso assets` command you need to [authenticate with the API Key](../cli/installation.md/#authentication).

## Usage
To perform this action, simply execute the `conviso findings import-sarif` command in the terminal:

```
conviso findings import-sarif --project-code $YOUR_PROJECT_CODE --input-file ‘SARIF FILE PATH’
```

**Note:** You will need to provide the `--project-code` option with the project code of the project you want to import the results to. You will also need to provide the `--input-file` option with the path to the SARIF file containing the results.

When everything goes well, you will receive the following message in the terminal:

```
The results were successfully imported!
```

The identified vulnerabilities will be automatically sent to your Project on Conviso Platform, now you can use the [Vulnerabilities Management](../general/vulnerabilities_management.md) resource to work on the correction flow.


## Integrate the SARIF importation with Github Actions 
In addition to using the command line interface, you can also integrate the SARIF import with Github Actions. 

To use this integration, you must set up three variables as secrets in the repository:

  * `FLOW_API_KEY` - (required) - Conviso Platform API Key 

  * `FLOW_PROJECT_CODE` - (required) - Conviso Platform project key

  * `OUTPUT_FILEPATH` - (required) - SARIF filepath outputed from scanner and consumed by Conviso CLI


### Example

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


## Video Tutorial in Portuguese
To see the tool working in practice, we recommend watching this [video](https://www.youtube.com/watch?v=ldt1gt8hPrM).

## Support​
If you have any questions or need help using our product, please don't hesitate to contact our [support team](mailto:support@convisoappsec.com).

## Resources​
By exploring our content you'll find resources to help you:

[What is SARIF and how it could revolutionize software security:](https://bit.ly/3nqqcbK) SARIF can help improve transparency and collaboration in the security software industry, allowing companies to share information and work together to identify and solve common security issues.
