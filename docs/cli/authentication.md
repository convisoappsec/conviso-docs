---
id: authentication
title: Authentication
sidebar_label: Authentication
---

## Authentication
In order to start using the CLI you will need to provide your API Key for your Conviso Platform account.  When retrieving it, you can export the key as system environment variable:

```sh
$ export CONVISO_API_KEY='you-api-key'
```

Also the API Key can be set as option argument:
```sh
$ conviso --api-key 'you-api-key' [SOME COMMAND]
```
>*This is not recommended for production environments*
