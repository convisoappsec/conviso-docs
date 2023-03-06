---
id: powerbi
title: PowerBI
sidebar_label: PowerBI
---

<div style={{textAlign: 'center'}}>

![img](../../static/img/powerbi.png)

</div>

## Introduction

Through the Business Intelligence integration, it is possible to optimize time by easily issuing customized reports, in addition to allowing data to be extracted and consumed on BI platforms using Conviso Platform Graphql API.

## Pre requisites

To use this feature you need to generate an API key following [this documentation](../../api/generate-apikey) and then explore the API Documentation in order to search for the data you are interested to bring to PowerBI.
Having this information you can proceed to create a connector within PowerBI.

## PowerBI Setup

1. Open Power BI and click on "Get Data" on the Home tab
2. In the "Get Data" window, select "Web" as the data source, and then click on "Connect".
3. In the "From Web" window, enter the Conviso GraphQL API endpoint URL in the "URL" field. You may also need to provide the required headers or authentication credentials, depending on how the API is set up.
4. Once you have successfully connected to the Conviso GraphQL API, you can use the "Transform Data" feature in Power BI to filter and manipulate the data as needed.
5. To list vulnerabilities, you can use the appropriate GraphQL query to retrieve the vulnerability data from the API. This will depend on the structure of the API and the specific data you want to retrieve.
6. Once you have retrieved the vulnerability data, you can use Power BI to create visualizations and reports based on the data.

## Examples

### Get all Vulnerabilities
TBD