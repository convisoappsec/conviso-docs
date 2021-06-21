---
id: sonarcloud
title: Sonarcloud
sidebar_label: Sonarcloud
---

![img](../../static/img/sonarcloud.png)

:::note
https://sonarcloud.io/ - Sonarcloud: Enhance Your Workflow with Continuous Code Quality & Code Security  
:::

## Introduction

Are you ready to consolidate yours results and take decisions using just one platform? 
AppSec Flow helps you solve this problem by integrating plenty of scanners and consolidate the results in order to assess, prioritize and manage everything in just a few clicks.

After this tutorial you will be able to:
- Import your Sonarcloud projects inside AppSec Flow
- Import the projects security issues 
- Keep both platforms in sync, so everytime a new scan is performed in Sonarcloud, AppSec Flow 
syncronizes the results, without the need to perform any aditional manual action. Yes, we got you covered ;)

## Requirements
- Sonarcloud Account
- Sonarcloud Token

:::note
[How to generate your Sonarcloud token?](https://sonarcloud.io/account/security/)
:::

## Authentication
First, you need to go the Integrations module and look for Sonarcloud.
To be able to communicate with your account, you need to provide a token for the communication to be established. 
After providing the token, please continue to the following step.

### 
## Configuration

Within the configuration page, now let us first select the organization and the desired projects to import to AppSec Flow. After this, press the associate button to follow to the next step.
Finally you can chose either to create or not a new asset or use an existing one in AppSec Flow.

## Webhook
:::note
[How webhooks works in Sonarcloud?](https://sonarcloud.io/documentation/project-administration/webhooks/)
:::
In order to both platforms to be synced, a webhook needs to be configured so changes in Sonarcloud like new security vulnerabilities and fixed ones are reflected and updated in AppSec Flow.

1. In Sonarcloud, go to the Organization page and after that navigate to Administration > Webhooks
2. Click on Create
3. Give a name to the Webook, for example: ```AppSec Flow```
4. In AppSec Flow please go to Integrations > SonarCloud.
5. Within Webhook information, copy the webhook url:
```Example:
    https://XXXXXX:YYYYYY@com.br/api/v1/integrations/sonarcloud/webhook?organization=Put here your organization key.
```
6. Update the last part of the url with the organization key/id that was configured (You can get this information from the Organizations info)
7. Paste the content in Sonarcloud url webhook field
8. Copy the secret generated in AppSec Flow and paste it in Sonarcloud secret field
9. Click on Create

That's it! Now everytime a new scan is performed, an event is going to be sent to AppSec Flow in order to keep the integrated projects in sync.

