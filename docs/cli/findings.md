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

The identified vulnerabilities will be automatically sent to your Project on Conviso Platform, now you can use the [Vulnerabilities](../../platform/vulnerabilities) resource to work on the correction flow.

## Video Tutorial in Portuguese
To see the tool working in practice, we recommend watching this video:

<div style={{textAlign: 'center'}}>

<iframe width="800" height="450" src="https://www.youtube.com/embed/ldt1gt8hPrM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

## Support​
If you have any questions or need help using our product, please don't hesitate to contact our [support team](mailto:support@convisoappsec.com).
