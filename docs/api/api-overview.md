---
id: api-overview
title: API Getting Started
sidebar_label: API Getting Started
description:  Conviso's API supports seamless integration with existing tools and processes, enabling developers to customize security automation to their workflows for a consistent experience. Get to know!
keywords:  [Conviso API Overview]
image: '/static/img/apioverviewseo.png'
---

## Introduction
Conviso's API supports seamless integration with existing tools and processes, enabling developers to customize security automation to their workflows for a consistent experience.

## API GraphQL
The GraphQL API offers advantages over other API options such as flexibility, reduced overfetching and underfetching, integrated documentation, and a growing ecosystem of developers and tools.

### What is GraphQL?
[GraphQL](https://graphql.org/) is a query language for APIs. It provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools..

## GraphQL Overview

One of the key features of the Conviso GraphQL API is the ability to perform actions through queries and mutations.

### Queries
[Queries](./graphql/documentation/operations/queries/allocated-analyses) allow you to retrieve data from the API, such as information about projects, vulnerabilities, and scans. You can also use queries to filter data based on specific criteria, making it easy to retrieve exactly the information you need.

### Mutations
[Mutations](./graphql/documentation/operations/mutations/create-project), on the other hand, enable you to modify data. With mutations, you can create new entities, such as projects, scans, and vulnerabilities. You can also update and delete existing entities.

The Conviso API offers diverse queries and mutations that enable you to manage projects and vulnerabilities.

## Understanding the GraphQL Schema Language  
Directives, Objects, Enums, Inputs, and Scalars are all components of the GraphQL schema language used in the Conviso API GraphQL.

### Directives
[Directives](./graphql/documentation/types/directives/deprecated) are used to control the behavior of GraphQL operations. The ```deprecated``` directive can be used to mark a field or enum value as deprecated, while ```include``` and ```skip``` directives can be used to conditionally include or skip parts of a query based on a Boolean argument. The ```specifiedBy``` directive can be used to specify a URL that provides information about the field or enum value.


### Objects
[Objects](./graphql/documentation/types/objects/activity) are complex data types that can have fields and methods. They are used to represent various entities and concepts in the system, such as ```Asset```, ```Project```, and ```Vulnerability```. These objects can be queried and mutated using GraphQL operations.


### Enums
[Enums](./graphql/documentation/types/enums/asset-arch) are used to represent a fixed set of possible values for a field. The system includes various enums such as ```AssetArch```, ```AssetAudience```, and ```AssetSeverity``` which represent different characteristics of assets.

### Inputs
[Inputs](./graphql/documentation/types/inputs/company-search) are used to pass arguments to mutation operations. These are used to create or update entities in the system, such as ```CreateProjectInput```, ```CreateAssetInput```, and ```UpdateSamlIntegrationInput```.

### Scalars
[Scalars](./graphql/documentation/types/scalars/boolean) are basic data types that represent a single value. The system includes various scalars such as ```Boolean```, ```Int```, ```String```, and ```ISO8601Date```. These are used as field types in objects and as argument types in operations.

## API access limit

As the Conviso GraphQL API is a shared service, we apply quotas and limitations to make sure it's used fairly by all users and to protect the overall health of the system.

By exceeding the quota, you'll receive a ``429: Too many requests`` HTTP status code response. If this happens, you should consider using a backoff algorithm to keep your requests within our limits and try again later.

Currently, our requests are limited to ``` 1200 requests per minute ``` to our GraphQL endpoint. 

### Dealing with time-based errors

For all time-based errors (you triggered more requests than the quota), we recommend your code to catch the exception and use a backoff algorithm to reduce the frequency of the requests until it normalizes. 

If the requests are still unsuccessful, it is important that the delay between requests increase over time until the request gets another status rather than 429.

## Generate API Key
To perform activities with Conviso CLI, Conviso Platform Integrations and also Conviso API, it is important to generate an API Key to authenticate your user. 

Follow these steps as shown in the gif:

1. Log in to Conviso Platform and go to **Security Feed**;
2. Click on **Generate API Key** button in **Quick Actions** box to create your key;
3. Click **Confirm** after generating the key for successful creation.

After clicking on **Confirm**, the confirmation of your new API Key will appear with its respective value. We recommend storing this API Key somewhere safe as a password vault.

**Note:** This key can be generated as many times as you wish. However, the previously generated key will expire.
## Getting support for the Conviso API
If you have any questions or need help using our API, please don't hesitate to contact our [support team](https://support.convisoappsec.com/tickets).