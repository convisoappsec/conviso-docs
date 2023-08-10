---
id: findings
title: Importing the scan results of a SARIF file
sidebar_label: Importing the scan results of a SARIF file
description:  The Conviso platform CLI allows importing results from a SARIF file. This can be useful for tracking and managing security vulnerabilities and other issues. Know more!
keywords:  [Sarif]
---

## Introduction
The Conviso CLI allows you to import results from a [SARIF](http://docs.oasis-open.org/sarif/sarif/v2.1.0/sarif-v2.1.0.html) file, such as Trivy or Semgrep, to a project in your account on the Conviso Platform. This can be useful for tracking and managing security vulnerabilities and other issues found by scanning tools.

### Prerequisites
To successfully run  `conviso assets` command you need to [authenticate with the API Key](../cli/installation.md/#authentication).

## Usage
To perform this action, simply execute the `conviso findings import-sarif` command in the terminal:

```
conviso findings import-sarif --project-code $YOUR_PROJECT_CODE --input-file ‘SARIF FILE PATH’
```

### Options 
| Option                | Description                            |
| --------------------- | -------------------------------------- |
| --project-code TEXT   | env var: FLOW_PROJECT_CODE (required)  |
| -i, --input-file PATH | The path to SARIF file.    (required)  |

When everything goes well, you will receive the following message in the terminal:

```
The results were successfully imported!
```

The identified vulnerabilities will be automatically sent to your Project on Conviso Platform, now you can use the [Vulnerabilities Management](../general/vulnerabilities_management.md) resource to work on the correction flow.


## Integrate the SARIF importation with Github Actions 
In addition to using the command line interface, you can also integrate the SARIF import with Github Actions. 

To use this integration, you must set up three variables as secrets in the repository:

| Secrets              | Description                                                                      |
| -------------------- | -------------------------------------------------------------------------------- |
| `FLOW_API_KEY`       | Conviso Platform API Key (required)                                              |
| `FLOW_PROJECT_CODE`  | Conviso Platform project key (required)                                          |
| `OUTPUT_FILEPATH`    | SARIF filepath outputed from scanner and consumed by Conviso CLI  (required)     |



### Sample YAML file for Security Scan and Conviso Importation Workflow.
Here is an example of a yml file to use:
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
To see the tool working in practice, we recommend watching this video:

<div style={{textAlign: 'center'}}>

<iframe width="800" height="450" src="https://www.youtube.com/embed/ldt1gt8hPrM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

## Support​
If you have any questions or need help using our product, please don't hesitate to contact our [support team](mailto:support@convisoappsec.com).

## Resources​
By exploring our content you'll find resources to help you:

[What is SARIF and how it could revolutionize software security:](https://bit.ly/3nqqcbK) SARIF can help improve transparency and collaboration in the security software industry, allowing companies to share information and work together to identify and solve common security issues.

[![Discover Conviso Platform, a solution for ASPM!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)
