---
id: new-cli
title: New CLI
sidebar_label: New CLI
description: Learn how to install, configure, and use the Conviso CLI to interact with Conviso Platform through GraphQL.
keywords: [Conviso CLI, GraphQL, CLI, automation, AppSec]
image: '/static/img/cli-overview.png'
---

## Overview

The **Conviso CLI** is a command-line interface for interacting with the **Conviso Platform** through GraphQL.

It is designed for:

* local operational workflows;
* security automation;
* CI/CD execution;
* bulk import and export tasks.

Repository:

* [convisolabs/conviso-cli](https://github.com/convisolabs/conviso-cli)

## Requirements

According to the current CLI repository README, the CLI requires:

* Python **3.10+**
* `CONVISO_API_KEY` configured in your shell or `.env`
* Optional: `CONVISO_API_TIMEOUT` in seconds, defaulting to `30`

## Installation and Setup

Choose the installation approach that best matches your use case.

### Development Setup

Use this method if you want to run the CLI from source or contribute to the project.

```bash
git clone https://github.com/convisolabs/conviso-cli.git
cd conviso-cli
python3 -m venv .venv
source .venv/bin/activate
pip install -e .
```

To verify the installation:

```bash
conviso --help
```

### Build and Install from Source

Use this approach if you want to install the CLI as a regular package from a built artifact.

```bash
git clone https://github.com/convisolabs/conviso-cli.git
cd conviso-cli
python3 -m venv .venv
source .venv/bin/activate
pip install build
python -m build
pip install dist/conviso_cli-*-py3-none-any.whl --force-reinstall
```

To verify the installation:

```bash
conviso --help
```

## Authentication

Set your API key before running commands:

```bash
export CONVISO_API_KEY="<your_api_key>"
```

You can also define the variable in a local `.env` file used by your runtime.

Optional timeout override:

```bash
export CONVISO_API_TIMEOUT=60
```

## Command Pattern

Most commands follow this structure:

```bash
python -m conviso.app <group> <action> [options]
```

Common command groups currently documented in the CLI repository include:

* `projects`
* `assets`
* `requirements`
* `tasks`
* `vulns`
* `sbom`
* `bulk`
* `accesscontrol`

The top-level CLI also exposes:

* `upgrade`

## Output and Pagination

Many list commands support options such as:

* `--all` to fetch all pages
* `--page` and `--per-page` or `--limit` for pagination control
* `--format table|json|csv`
* `--output <file>` for file export

Some commands support additional output formats depending on the resource, such as `sarif` or `cyclonedx`.

## Usage Examples

The examples below reflect the current usage examples documented in the CLI repository README together with the command tree currently registered in the CLI source code.

## Command Catalog

The currently available command groups and actions are:

* `projects`: `list`, `requirements`, `create`, `update`, `status`, `delete`
* `assets`: `list`, `create`, `update`, `delete`
* `requirements`: `list`, `project`, `activities`, `create`, `update`, `delete`
* `tasks`: `create`, `list`, `run`
* `tasks approvals`: `list`, `clear`, `remove`
* `vulns`: `list`, `timeline`, `create`, `update`, `check-sca-patches`
* `sbom`: `list`, `import`, `check-vulns`
* `bulk`: `assets`, `requirements`, `vulns`
* `accesscontrol`: `user-profile`, `user-teams`, `bulk-users`
* top-level: `upgrade`

### Projects

List all projects:

```bash
python -m conviso.app projects list --company-id 443 --all
```

List projects filtered by assignee:

```bash
python -m conviso.app projects list \
  --company-id 443 \
  --filter assignee=analyst@company.com \
  --all
```

List project requirements and activities:

```bash
python -m conviso.app projects requirements --project-id 12345
```

Create a project:

```bash
python -m conviso.app projects create \
  --company-id 443 \
  --name "Platform Pentest" \
  --goal "Validate critical attack paths" \
  --scope "Main platform" \
  --type-id 1 \
  --start-date YYYY-MM-DD \
  --end-date YYYY-MM-DD \
  --assets 100,101,102
```

Update a project:

```bash
python -m conviso.app projects update \
  --id 12345 \
  --company-id 443 \
  --name "Platform Pentest Q3" \
  --add-tags pentest,critical \
  --add-assets 100,101
```

Update only the project status:

```bash
python -m conviso.app projects status ANALYSIS --id 12345
```

Delete one or more projects:

```bash
python -m conviso.app projects delete \
  --company-id 443 \
  --ids 12345,12346 \
  --force
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

Update an asset:

```bash
python -m conviso.app assets update \
  --id 321 \
  --company-id 443 \
  --name "api-prod-main" \
  --business-impact HIGH \
  --tags "prod,api,critical"
```

Delete one or more assets:

```bash
python -m conviso.app assets delete \
  --company-id 443 \
  --ids 321,322 \
  --force
```

### Requirements

List requirements:

```bash
python -m conviso.app requirements list \
  --company-id 443 \
  --format table
```

Create a requirement:

```bash
python -m conviso.app requirements create \
  --company-id 443 \
  --label "Req" \
  --description "Desc" \
  --activity "Login|Check login|REF-123"
```

List project requirements:

```bash
python -m conviso.app requirements project \
  --company-id 443 \
  --project-id 26102
```

List requirement activities:

```bash
python -m conviso.app requirements activities \
  --company-id 443 \
  --requirement-id 1503
```

List activities directly from a project:

```bash
python -m conviso.app requirements activities \
  --company-id 443 \
  --project-id 26102
```

Update a requirement:

```bash
python -m conviso.app requirements update \
  --id 1503 \
  --company-id 443 \
  --label "Authentication checks" \
  --description "Validate login, session, and token controls"
```

Delete a requirement:

```bash
python -m conviso.app requirements delete \
  --id 1503 \
  --force
```

### Tasks

Create a task from a YAML file:

```bash
python -m conviso.app tasks create \
  --company-id 443 \
  --project-id 26102 \
  --label "Nuclei Scan" \
  --yaml-file samples/task-nuclei.yaml
```

Append a task to a requirement:

```bash
python -m conviso.app tasks create \
  --company-id 443 \
  --requirement-id 2174 \
  --label "Nuclei Scan" \
  --yaml-file samples/task-nuclei.yaml
```

Run YAML-defined tasks from project requirements:

```bash
python -m conviso.app tasks run \
  --company-id 443 \
  --project-id 26102
```

List tasks for a project:

```bash
python -m conviso.app tasks list \
  --company-id 443 \
  --project-id 26102
```

List only tasks with valid YAML:

```bash
python -m conviso.app tasks list \
  --company-id 443 \
  --project-id 26102 \
  --only-valid
```

Create a task with inline YAML:

```bash
python -m conviso.app tasks create \
  --company-id 443 \
  --label "Quick Task" \
  --yaml "name: quick\nsteps:\n - action: echo\n message: ok"
```

List locally approved task commands:

```bash
python -m conviso.app tasks approvals list
```

Remove a single approved command:

```bash
python -m conviso.app tasks approvals remove --hash <approval_hash>
```

Clear all approved task commands:

```bash
python -m conviso.app tasks approvals clear
```

### Vulnerabilities

List vulnerabilities by severity and asset tag:

```bash
python -m conviso.app vulns list \
  --company-id 443 \
  --severities HIGH,CRITICAL \
  --asset-tags cloud \
  --all
```

List recent vulnerabilities from the last 7 days:

```bash
python -m conviso.app vulns list \
  --company-id 443 \
  --days-back 7 \
  --severities HIGH,CRITICAL \
  --all
```

Filter vulnerabilities by author:

```bash
python -m conviso.app vulns list \
  --company-id 443 \
  --author "Fernando" \
  --all
```

Run a local free-text search over the returned results:

```bash
python -m conviso.app vulns list \
  --company-id 443 \
  --all \
  --grep "jwt"
```

Filter vulnerabilities by local field matching:

```bash
python -m conviso.app vulns list \
  --company-id 443 \
  --all \
  --contains codeSnippet=eval( \
  --contains fileName=app.py
```

Search DAST and Web vulnerability request and response fields:

```bash
python -m conviso.app vulns list \
  --company-id 443 \
  --types DAST_FINDING,WEB_VULNERABILITY \
  --all \
  --contains request=Authorization \
  --contains response=stacktrace
```

Show the timeline of a single vulnerability:

```bash
python -m conviso.app vulns timeline --id 98765
```

Show vulnerability timelines aggregated from a project:

```bash
python -m conviso.app vulns timeline \
  --company-id 443 \
  --project-id 26102 \
  --last-status-change-only
```

Create a vulnerability:

```bash
python -m conviso.app vulns create \
  --type SOURCE \
  --asset-id 123 \
  --title "Hardcoded secret" \
  --description "Secret found in source code" \
  --solution "Move secret to a secure vault" \
  --impact-level HIGH \
  --probability-level MEDIUM \
  --severity HIGH \
  --file-name app.py \
  --vulnerable-line 42 \
  --code-snippet "API_KEY = 'secret'"
```

Update a vulnerability and assignees:

```bash
python -m conviso.app vulns update \
  --id 98765 \
  --type SOURCE \
  --status IN_PROGRESS \
  --assignees analyst@company.com,dev@company.com
```

Check patch availability for SCA vulnerabilities:

```bash
python -m conviso.app vulns check-sca-patches \
  --company-id 443 \
  --severities HIGH,CRITICAL \
  --all
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

Import an SBOM file for an asset:

```bash
python -m conviso.app sbom import \
  --company-id 443 \
  --file bom.cdx \
  --asset-id 123
```

Check vulnerabilities from the OSV API using platform assets:

```bash
python -m conviso.app sbom check-vulns \
  --company-id 443 \
  --asset-ids 123 \
  --tags foo \
  --format json \
  --output osv.json
```

Check vulnerabilities from a local CycloneDX file:

```bash
python -m conviso.app sbom check-vulns \
  --file bom.cdx \
  --format json \
  --output osv.json
```

## Bulk Operations

### Assets CSV

Create assets from CSV:

```bash
python -m conviso.app bulk assets \
  --company-id 443 \
  --file assets.csv \
  --op create
```

Preview an update without applying it:

```bash
python -m conviso.app bulk assets \
  --company-id 443 \
  --file assets.csv \
  --op update \
  --preview-only
```

Show the bulk assets template:

```bash
python -m conviso.app bulk assets --show-template
```

Repository sample:

* `samples/assets_sample.csv`

### Requirements CSV

Create requirements from CSV:

```bash
python -m conviso.app bulk requirements \
  --company-id 443 \
  --file reqs.csv \
  --op create
```

Show the bulk requirements template:

```bash
python -m conviso.app bulk requirements --show-template
```

Repository sample:

* `samples/requirements_sample.csv`

### Vulnerabilities CSV or SARIF

Create vulnerabilities from CSV:

```bash
python -m conviso.app bulk vulns \
  --company-id 443 \
  --file vulns.csv \
  --op create
```

Create vulnerabilities from SARIF:

```bash
python -m conviso.app bulk vulns \
  --company-id 443 \
  --file vulns.sarif \
  --op create \
  --sarif
```

Show the bulk vulnerabilities template:

```bash
python -m conviso.app bulk vulns --show-template
```

Repository samples:

* `samples/vulns_sample.csv`
* `vulns.sarif`

## Access Control

Update the access profile of a user:

```bash
python -m conviso.app accesscontrol user-profile \
  --company-id 443 \
  --user-id 123 \
  --profile-id 7
```

Update the teams associated with a user:

```bash
python -m conviso.app accesscontrol user-teams \
  --company-id 443 \
  --user-id 123 \
  --team-ids 10,11
```

Remove all teams from a user:

```bash
python -m conviso.app accesscontrol user-teams \
  --company-id 443 \
  --user-id 123 \
  --clear
```

Bulk update user access from CSV:

```bash
python -m conviso.app accesscontrol bulk-users --file users.csv
```

The access control bulk template uses the following columns:

* `company_id`
* `user_id`
* `profile_id`
* `team_ids`
* `clear_teams`

## Operational Notes

According to the repository README:

* API and GraphQL errors exit with code `1`
* `--quiet` suppresses informational logs
* `--verbose` shows more request and pagination details
* the CLI checks for updates at startup

You can disable the update check with:

```bash
export CONVISO_CLI_SKIP_UPDATE_CHECK=1
```

You can also override the remote version when needed:

```bash
export CONVISO_CLI_REMOTE_VERSION="0.0.0"
```

## Help and Discovery

Use built-in help at any level:

```bash
python -m conviso.app --help
python -m conviso.app projects --help
python -m conviso.app accesscontrol --help
python -m conviso.app tasks approvals --help
python -m conviso.app vulns list --help
```

## Reference

This documentation was updated based on the current `README.md` in the official repository:

* https://github.com/convisolabs/conviso-cli
