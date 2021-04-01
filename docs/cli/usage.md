---
id: usage
title: Usage
sidebar_label: Usage
---

## Authentication
To start with flowcli an [appsec flow] api key(See [generating api key]) will be necessary. After you got it you can export the key as system environment variable
and use the flowcli.

```sh
$ export FLOW_API_KEY='you-api-key'
```
or the api key can be set as option argument
```sh
$ flow --api-key 'you-api-key' [SOME COMMAND]
```

## Static Application Security Testing (SAST)
With the flowcli is very simple to perform a SAST at your source code repository.
To report the SAST results to Flow a project code will be required. The project is created at [Flow AppSec](https://app.conviso.com.br).

Assuming that my_source_code_repository is a git repository, so:

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
