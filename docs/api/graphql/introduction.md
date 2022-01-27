---
id: introduction
title: Introduction
sidebar_label: Introduction
---

## But... What is GraphQL?
[GraphQL] is a query language for APIs. It provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

## Vision
At Conviso, we want to use GraphQL API as the **primary** way to programatically interact with our platform. 
We are transitioning and migrating from our REST API. Nevertheless in order to achieve this vision both frontend and backend engineers should always use GraphQL instead of REST API for new features.
*There is no defined date yet to deprecate the REST API, but new features are not being developed using REST API.*

## Getting Started
- Conviso's GraphQL API endpoint is located at ```/graphql```
    - Production Environment: ```https://app.convisoappsec.com/graphql```
- You need to have an API Key and authenticate in order to interact with the api.
    - The authentication process is made through the x-api-key header, as exemplified below.
        ```console 
        x-api-key: {{API_KEY}}
        ``` 
        You can generate your API key following this [steps](../../api/generate-apikey).

## Exploring GraphQL API
There are different ways to play and explore with our GraphQL API. 
You can use a desktop application like [Insomnia] or our web GraphQL explorer <a href="/playground-graphql.html" target="_blank">here</a>, based on [GraphQL Playground].


[GraphQL]: <https://graphql.org/>
[GraphQL Playground]: <https://github.com/graphql/graphql-playground>
[Insomnia]: <https://insomnia.rest/>
