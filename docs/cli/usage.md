---
id: usage
title: Usage
sidebar_label: Usage
---

## Authentication
In order to start using the CLI you will need to provide your API Key for your AppSec Flow account.  When retrieving it, you can export the key as system environment variable:

```sh
$ export FLOW_API_KEY='you-api-key'
```

Also the API Key can be set as option argument:
```sh
$ flow --api-key 'you-api-key' [SOME COMMAND]
```
>*This is not recommended for production environments*

## Static Application Security Testing (SAST)
Using the CLI is very simple to execute a SAST at your source code repository.
The results will be sent to your AppSec Flow application by using the *project code identifier*.

Assuming that my_source_code_repository is a git repository, you can:

```sh
$ export FLOW_API_KEY='your-api-key'
$ export FLOW_PROJECT_CODE='your-project-code'
$ cd my_source_code_repository
$ flow sast run
```

The following instructions has the same effect.

```sh
$ cd my_source_code_repository
$ flow --api-key 'your-api-key' sast run --project-code 'your-project-code'
```
