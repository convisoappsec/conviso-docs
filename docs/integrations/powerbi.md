---
id: powerbi
title: PowerBI
sidebar_label: PowerBI
---

<div style={{textAlign: 'center'}}>

![img](../../static/img/powerbi.png)

</div>

## Introduction

Through the Business Intelligence integration, it is possible to optimize time by easily issuing customized reports, in addition to allowing data to be extracted and consumed on BI platforms.

## Endpoints

To use this feature, access the menu **Integrations** and then **Business Intelligence** at the right panel and click at the **Integrate** button:

<div style={{textAlign: 'center'}}>

![img](../../static/img/bi-img1.png)

</div>

To analyze data on your BI platform, there are 4 types of endpoints that allow the user to generate .JSON file and feed the BI tool: 

- Deploys

- Projects

- Assets

- Users

<div style={{textAlign: 'center'}}>

![img](../../static/img/bi-img2.png)

</div>

To create a connector with the BI tool, just copy the **Conviso Platform URL** (https://app.convisoappsec.com/), the **Endpoint**, and your **x-api-key** (you can generate your x-api-key by following the instructions [here](../../api/generate-apikey)) and insert the parameters at the BI tool you are using.

## PowerBI Setup

Open PowerBI Desktop. Click on the **Get Data** button and then on **Web** menu option:

<div style={{textAlign: 'center'}}>

![img](../../static/img/powerbi-img1.png)

</div>

At the **Web** floating window, choose the **Advanced** option:

<div style={{textAlign: 'center'}}>

![img](../../static/img/powerbi-img2.png)

</div>

Fill the form with proper data.

1. At the **URL Parts**, paste the URL ```https://app.convisoappsec.com/api/v2/projects```;

2. At the **HTTP Request Header Parameters**, choose **Accept** for the first field and click on **Add Header** button;

3. At the new field, type ```x-api-key``` and paste your API Key at the blank field to the right.

4. Click on **OK** button to save.

<div style={{textAlign: 'center'}}>

![img](../../static/img/powerbi-img3.png)

</div>

After the configuration is stored, we are able to connect Conviso Platform to PowerBI. This allows creating dashboards of projects, where the dashboard model varies according to the user's need.

<div style={{textAlign: 'center'}}>

![img](../../static/img/powerbi-img4.png)

</div>

### Using pagination

Add `?page=1` part in your URL as part when adding the Power Query

<div style={{textAlign: 'center'}}>
  <img href="../../static/img/powerbi/powerbi-img1.png"/>
  <img href="../../static/img/powerbi/powerbi-img2.png" />
  <img href="../../static/img/powerbi/powerbi-img3.png" />
</div>

Edit the first and second lines of code by creating a function that takes "`page`" as a parameter

<div style={{textAlign: 'center'}}>
  <img href="../../static/img/powerbi/powerbi-img4.png" />
</div>

Below is an example of how it should look

<div style={{textAlign: 'center'}}>
  <img href="../../static/img/powerbi/powerbi-img5.png" />
</div>

It is now possible to perform pagination via function

<div style={{textAlign: 'center'}}>
  <img href="../../static/img/powerbi/powerbi-img6.png" />
</div>

### Paginating multiple pages to a table

After previous steps made in "[Using pagination](#using-pagination)", select the option "Enter Data"

<div style={{textAlign: 'center'}}>
  <img href="../../static/img/powerbi/powerbi-img7.png" />
</div>

Configure the open table as shown below. Notice in the image that it is set to capture 10 pages using the "`page`" variable

<div style={{textAlign: 'center'}}>
  <img href="../../static/img/powerbi/powerbi-img8.png" />
</div>

After confirmation, the table below will appear. You need to change your "type" to text, as shown in the sequence below

<div style={{textAlign: 'center'}}>
  <img href="../../static/img/powerbi/powerbi-img9.png" />
  <img href="../../static/img/powerbi/powerbi-img10.png" />
  <img href="../../static/img/powerbi/powerbi-img11.png" />
</div>

Setup "Invoke Custom Function" to the table

<div style={{textAlign: 'center'}}>
  <img href="../../static/img/powerbi/powerbi-img12.png" />
</div>

The fields filled in will be similar to the ones below

<div style={{textAlign: 'center'}}>
  <img href="../../static/img/powerbi/powerbi-img13.png" />
</div>

One more table will appear, choose which attributes you want to bring from the API and confirm

<div style={{textAlign: 'center'}}>
  <img href="../../static/img/powerbi/powerbi-img14.png" />
</div>

Done! With this we perform the pagination of the 10 pages (as we configured) of the API in a table!

<div style={{textAlign: 'center'}}>
<img href="../../static/img/powerbi/powerbi-img15.png" />
</div>

> **Further details in de original documentation, example: [Table.GenerateByPage](https://docs.microsoft.com/en-us/power-query/helperfunctions#tablegeneratebypage)**
