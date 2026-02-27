---
id: new-cli
title: New CLI
sidebar_label: New CLI
description: Documentation for the Conviso CLI that interacts with the platform via GraphQL.
keywords: [Conviso CLI, GraphQL, New CLI]
image: '/static/img/cli-overview.png'
---

## Overview

Conviso CLI is a command-line interface to interact with the Conviso Platform via GraphQL. It is designed for local workflows and CI/CD automation.

Repository: [convisolabs/conviso-cli](https://github.com/convisolabs/conviso-cli)

## Requirements

- Python 3.9+
- `CONVISO_API_KEY` in your shell or `.env`
- Optional: `CONVISO_API_TIMEOUT` (seconds, default `30`)

## Install

Clone and run locally:

```bash
git clone https://github.com/convisolabs/conviso-cli.git
cd conviso-cli
pip install -r requirements.txt
python -m conviso.app --help
```

## Update CLI

```bash
git pull origin main
pip install -r requirements.txt
```

Built-in upgrade command:

```bash
python -m conviso.app upgrade
```

## Authentication

Set your API key before running commands:

```bash
export CONVISO_API_KEY="<your_api_key>"
```

You can also store it in a local `.env` file used by your shell/runtime.

## Command pattern

Most commands follow:

```bash
python -m conviso.app <group> <action> [options]
```

Examples of groups:

- `projects`
- `assets`
- `requirements`
- `vulns`
- `sbom`
- `bulk`

## Output and pagination

Common options used by list commands:

- `--format table|json|csv` (some commands also support `sarif` or `cyclonedx`)
- `--output <file>` for JSON/CSV exports
- `--all` to fetch all pages
- `--page` and `--per-page`/`--limit` for manual pagination

## Usage examples

### Projects

List all projects:

```bash
python -m conviso.app projects list --company-id 443 --all
```

Create a project:

```bash
python -m conviso.app projects create \
  --company-id 443 \
  --name "Platform Pentest" \
  --goal "Validate critical attack paths" \
  --scope "Main platform" \
  --type-id 1
```

### Assets

List assets with filters:

```bash
python -m conviso.app assets list \
  --company-id 443 \
  --tags cloud \
  --attack-surface INTERNET_FACING \
  --all
```

Create an asset:

```bash
python -m conviso.app assets create \
  --company-id 443 \
  --name "api-prod" \
  --business-impact HIGH \
  --data-classification NON_SENSITIVE \
  --tags "prod,api"
```

### Requirements

Create a requirement:

```bash
python -m conviso.app requirements create \
  --company-id 443 \
  --label "Authentication checks" \
  --description "Validate login and session controls" \
  --activity "Login|Check login"
```

List requirements:

```bash
python -m conviso.app requirements list --company-id 443 --format table
```

### Vulnerabilities

List vulnerabilities with severity and tag filters:

```bash
python -m conviso.app vulns list \
  --company-id 443 \
  --severities HIGH,CRITICAL \
  --asset-tags cloud \
  --all
```

Export vulnerabilities in SARIF:

```bash
python -m conviso.app vulns list \
  --company-id 443 \
  --format sarif \
  --output vulns.sarif
```

### SBOM

List SBOM components:

```bash
python -m conviso.app sbom list \
  --company-id 443 \
  --name log4j \
  --all \
  --format csv \
  --output sbom.csv
```

Import SBOM file for an asset:

```bash
python -m conviso.app sbom import \
  --company-id 443 \
  --file bom.cdx \
  --asset-id 123
```

Check vulnerabilities (OSV) from API source:

```bash
python -m conviso.app sbom check-vulns \
  --company-id 443 \
  --asset-ids 123 \
  --tags foo \
  --format json \
  --output osv.json
```

Check vulnerabilities (OSV) from local CycloneDX file:

```bash
python -m conviso.app sbom check-vulns \
  --file bom.cdx \
  --format json \
  --output osv.json
```

## Bulk operations

### Assets CSV

```bash
python -m conviso.app bulk assets --company-id 443 --file assets.csv --op create
```

Preview only:

```bash
python -m conviso.app bulk assets --company-id 443 --file assets.csv --op update --preview-only
```

Template/examples:

```bash
python -m conviso.app bulk assets --show-template
```

Sample file in repository:

- `samples/assets_sample.csv`

### Requirements CSV

```bash
python -m conviso.app bulk requirements --company-id 443 --file reqs.csv --op create
```

Template/examples:

```bash
python -m conviso.app bulk requirements --show-template
```

Sample file in repository:

- `samples/requirements_sample.csv`

### Vulnerabilities CSV or SARIF

CSV mode:

```bash
python -m conviso.app bulk vulns --company-id 443 --file vulns.csv --op create
```

SARIF mode:

```bash
python -m conviso.app bulk vulns --company-id 443 --file vulns.sarif --op create --sarif
```

Template/examples:

```bash
python -m conviso.app bulk vulns --show-template
```

Sample files in repository:

- `samples/vulns_sample.csv`
- `vulns.sarif`

## CI/CD behavior notes

- GraphQL/API errors return exit code `1`.
- `--quiet` silences informational logs.
- `--verbose` shows detailed request flow on paginated operations.
- The CLI checks for updates at startup.
  - Disable check with `CONVISO_CLI_SKIP_UPDATE_CHECK=1`.
  - Override remote version with `CONVISO_CLI_REMOTE_VERSION` when needed.

## Help and discovery

Use built-in help at any level:

```bash
python -m conviso.app --help
python -m conviso.app projects --help
python -m conviso.app vulns list --help
```
