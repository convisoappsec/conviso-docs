---
id: findings
title: Importing the scan results of a SARIF file
sidebar_label: Importing the scan results of a SARIF file
description:  The Conviso platform CLI allows importing results from a SARIF file. This can be useful for tracking and managing security vulnerabilities and other issues. Know more!
keywords:  [Sarif]
#image: '/static/img/clisarifseo.png'
---

## Introduction
The Conviso CLI allows you to import results from a [SARIF](http://docs.oasis-open.org/sarif/sarif/v2.1.0/sarif-v2.1.0.html) file, such as Trivy or Semgrep, to a project in your account on the Conviso Platform. This can be useful for tracking and managing security vulnerabilities and other issues found by scanning tools.

### Prerequisites
To successfully run  `conviso findings` command you need to [authenticate with the API Key](../cli/installation/#authentication). You can export it as shown below:

```bash
export CONVISO_API_KEY='<YOUR_CONVISO_API_KEY>'
```

## Usage
To perform this action, simply execute the `conviso findings import-sarif` command in the terminal:

```bash
conviso findings import-sarif --input-file {path/to/file.sarif} --company-id {companyId} --asset-name {assetName}
```

### Options 
| Option                | Description                            |
| --------------------- | -------------------------------------- |
| -i, --input-file PATH | The path to SARIF file.    (required)  |
| -c, --company-id      | Your Conviso Company ID.   (required)  |
| --asset-name          | Your Conviso Asset Name.   (required)  |

:::note
If an asset with the specified asset name already exists in the Conviso Platform, the vulnerabilities from the SARIF file will be assigned to that asset. If it does not exist, a new asset will be created with the given asset name, and the vulnerabilities will be associated with it.
:::

When everything goes well, you will receive the following message in the terminal:

```
The results were successfully imported!
```

The identified vulnerabilities will be automatically sent to your Project on Conviso Platform, now you can use the [Vulnerabilities Management](../../general/vulnerabilities_management.md) resource to work on the correction flow.

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
