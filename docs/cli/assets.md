---
id: assets
title: Assets
sidebar_label: Assets
---

## Usage

`conviso assets [OPTIONS] COMMAND [ARGS]`

## Description

The `conviso assets` allows you to perform operations on Assets of your account at Conviso Platform.

## Commands

## ls

`conviso assets ls [OPTIONS]`

To list all the Assets you have access on the Conviso Platform

### Options

| Option                   | Description                                           |
| ------------------------ | ----------------------------------------------------- |
| -c, --company-id INTEGER | The company ID to have its resources used. [required] |
| -p, --page INTEGER       | Page to be consulted  [default: 1]                    |
| -l, --limit INTEGER      | Items limit per page.  [default: 32]                  |


### Examples

* List the first 100 Assets found:

  ```sh
  conviso assets ls --company-id $YOUR_COMPANY_ID --limit 100
  ```

## create

`conviso assets create [OPTIONS]`

To create a new Asset on Conviso Platform

### Options

| Option                    | Description                                               |
| ------------------------- | --------------------------------------------------------- |
| -c, --company-id INTEGER  | The company ID to have its resources used. [required]     |
| -r, --repository-dir PATH | The directory path for the asset.  [default: .; required] |
| --name TEXT               | Customize the Asset name.                                 |
| --scan-type TEXT          | Customize the Asset scan type.  [default: None]           |


### Examples

* Create an Asset from git repository `/path/example` with custom name `asset-x`.

  ```sh
  conviso assets create --company-id $YOUR_COMPANY_ID --repository-dir ~/path/example --name asset-x
  ```

## References

1. [How setup apikey?](/cli/authentication)

<!-- 2. [How find company ID?](#TBD)  -->