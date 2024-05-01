---
id: limit
title: Rate limit of the API
sidebar_label: Rate limit of the API
description:  Check our limits regarding our Conviso GraphQL API
keywords:   [Conviso API GraphQL]
image: '/static/img/apigraphqlseo.png'

---

## Introduction
As the Conviso GraphQL API is a shared service, we apply quotas and limitations to make sure it's used fairly by all users and to protect the overall health of the system.

By exceeding the quota, you'll receive a ``429: Too many requests`` HTTP status code response. If this happens, you should consider using a backoff algorithm to keep your requests within our limits and try again later.


## API access limit

Currently, our requests are limited to ``` 1200 requests per minute ``` to our GraphQL endpoint. 

### Dealing with time-based errors

For all time-based errors (you triggered more requests than the quota), we recommend your code to catch the exception and use a backoff algorithm to reduce the frequency of the requests until it normalizes. 
If the requests are still unsuccessful, it is important that the delay between requests increase over time until the request gets another status rather than 429.
