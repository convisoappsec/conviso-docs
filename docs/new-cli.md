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

**Compatibility Note:** All examples below use `cvs` (the recommended short alias). You can also use `conviso` instead — both commands work identically:
```bash
cvs projects list          # Recommended (shorter)
conviso projects list      # Also works (fully compatible)
```

Repository:

* [convisolabs/conviso-cli](https://github.com/convisolabs/conviso-cli)

## Requirements

- Python 3.10+
- API Key from Conviso Platform (get at: https://app.convisoappsec.com/spa/company/[COMPANY_ID]/api-keys)
- Optional: `CONVISO_API_TIMEOUT` (seconds, default `30`)

## Install

### Option 1: From PyPI (Recommended)

```bash
pip install conviso-cli
cvs --version
```

### Option 2: From Source (Development)

```bash
git clone https://github.com/convisolabs/conviso-cli.git
cd conviso-cli
pip install -e .
cvs --version
```

## Authentication

### Secure Credential Storage (Recommended)

```bash
cvs auth login
```

This will prompt for your API key and save it securely to `~/.config/cvs/credentials`.

### Using Environment Variables

Alternatively, set your API key in your shell or `.env` file:

```bash
export CONVISO_API_KEY="<your_api_key>"
```

Or in a local `.env` file:

```bash
echo "CONVISO_API_KEY=<your_api_key>" > .env
```

### Priority Order

The CLI looks for API key in this order:
1. `CONVISO_API_KEY` environment variable
2. `.env` file in current directory
3. `~/.config/cvs/credentials` (saved by `cvs auth login`)

### Check Login Status

```bash
cvs auth whoami
```

## Update CLI

```bash
pip install --upgrade conviso-cli
```

Built-in upgrade command (for development installations):

```bash
cvs upgrade
```

## Command Pattern

Most commands follow:

```bash
cvs <group> <action> [options]
```

Or use the shorter alias:

```bash
cvs <group> <action> [options]
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
cvs projects list --company-id 443 --all
```

List projects filtered by assignee:

```bash
cvs projects list \
  --company-id 443 \
  --filter assignee=analyst@company.com \
  --all
```

List project requirements and activities:

```bash
cvs projects requirements --project-id 12345
```

Create a project:

```bash
cvs projects create \
 --company-id 443 \
 --name "New Project" \
 --goal "Validate scope" \
 --scope "External perimeter" \
 --type-id 14 \
 --start-date 2026-05-19 \
 --estimated-hours 2 \
 --assign user@conviso.com.br \
 --assets 40641
```

Update a project:

```bash
cvs projects update \
  --id 12345 \
  --company-id 443 \
  --name "Platform Pentest Q3" \
  --add-tags pentest,critical \
  --add-assets 100,101
```

Update only the project status:

```bash
cvs projects status ANALYSIS --id 12345
```

Delete one or more projects:

```bash
cvs projects delete \
  --company-id 443 \
  --ids 12345,12346 \
  --force
```

### Assets

List assets with filters:

```bash
cvs assets list \
  --company-id 443 \
  --tags cloud \
  --attack-surface INTERNET_FACING \
  --all
```

Create an asset:

```bash
cvs assets create \
  --company-id 443 \
  --name "api-prod" \
  --business-impact HIGH \
  --data-classification NON_SENSITIVE \
  --tags "prod,api"
```

Update an asset:

```bash
cvs assets update \
  --id 321 \
  --company-id 443 \
  --name "api-prod-main" \
  --business-impact HIGH \
  --tags "prod,api,critical"
```

Delete one or more assets:

```bash
cvs assets delete \
  --company-id 443 \
  --ids 321,322 \
  --force
```

### Requirements

List requirements:

```bash
cvs requirements list \
  --company-id 443 \
  --format table
```

Create a requirement:

```bash
cvs requirements create \
  --company-id 443 \
  --label "Req" \
  --description "Desc" \
  --activity "Login|Check login|REF-123"
```

List project requirements:

```bash
cvs requirements project \
  --company-id 443 \
  --project-id 26102
```

List requirement activities:

```bash
cvs requirements activities \
  --company-id 443 \
  --requirement-id 1503
```

Upload one or more files as evidences to a requirement activity:

```bash
cvs requirements attach \
  --activity-id 123456 \
  --reason "Evidence for validation"
  --file ./evidence.png
```

List activities directly from a project:

```bash
cvs requirements activities \
  --company-id 443 \
  --project-id 26102
```

Update a requirement:

```bash
cvs requirements update \
  --id 1503 \
  --company-id 443 \
  --label "Authentication checks" \
  --description "Validate login, session, and token controls"
```

Delete a requirement:

```bash
cvs requirements delete \
  --id 1503 \
  --force
```

### Tasks

Create a task from a YAML file:

```bash
cvs tasks create \
  --company-id 443 \
  --project-id 26102 \
  --label "Nuclei Scan" \
  --yaml-file samples/task-nuclei.yaml
```

Append a task to a requirement:

```bash
cvs tasks create \
  --company-id 443 \
  --requirement-id 2174 \
  --label "Nuclei Scan" \
  --yaml-file samples/task-nuclei.yaml
```

Run YAML-defined tasks from project requirements:

```bash
cvs tasks run \
  --company-id 443 \
  --project-id 26102
```

List tasks for a project:

```bash
cvs tasks list \
  --company-id 443 \
  --project-id 26102
```

List only tasks with valid YAML:

```bash
cvs tasks list \
  --company-id 443 \
  --project-id 26102 \
  --only-valid
```

Create a task with inline YAML:

```bash
cvs tasks create \
  --company-id 443 \
  --label "Quick Task" \
  --yaml "name: quick\nsteps:\n - action: echo\n message: ok"
```

List locally approved task commands:

```bash
cvs tasks approvals list
```

Remove a single approved command:

```bash
cvs tasks approvals remove --hash <approval_hash>
```

Clear all approved task commands:

```bash
cvs tasks approvals clear
```

### Vulnerabilities

List vulnerabilities by severity and asset tag:

```bash
cvs vulns list \
  --company-id 443 \
  --severities HIGH,CRITICAL \
  --asset-tags cloud \
  --all
```

List recent vulnerabilities from the last 7 days:

```bash
cvs vulns list \
  --company-id 443 \
  --days-back 7 \
  --severities HIGH,CRITICAL \
  --all
```

Filter vulnerabilities by author:

```bash
cvs vulns list \
  --company-id 443 \
  --author "Fernando" \
  --all
```

Run a local free-text search over the returned results:

```bash
cvs vulns list \
  --company-id 443 \
  --all \
  --grep "jwt"
```

Filter vulnerabilities by local field matching:

```bash
cvs vulns list \
  --company-id 443 \
  --all \
  --contains codeSnippet=eval( \
  --contains fileName=app.py
```

Search DAST and Web vulnerability request and response fields:

```bash
cvs vulns list \
  --company-id 443 \
  --types DAST_FINDING,WEB_VULNERABILITY \
  --all \
  --contains request=Authorization \
  --contains response=stacktrace
```

Show the timeline of a single vulnerability:

```bash
cvs vulns timeline --id 98765
```

Show vulnerability timelines aggregated from a project:

```bash
cvs vulns timeline \
  --company-id 443 \
  --project-id 26102 \
  --last-status-change-only
```

Create a vulnerability:

```bash
cvs vulns create \
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
cvs vulns update \
  --id 98765 \
  --type SOURCE \
  --status IN_PROGRESS \
  --assignees analyst@company.com,dev@company.com
```

Check patch availability for SCA vulnerabilities:

```bash
cvs vulns check-sca-patches \
  --company-id 443 \
  --severities HIGH,CRITICAL \
  --all
```

#### Batch Import Findings

Import multiple findings (SAST, SCA, DAST, Container, IaC, Secret, API) for an asset in a single atomic operation:

Preview before import:

```bash
cvs vulns batch \
  --asset-id 27516 \
  --file findings.json \
  --dry-run
```

Import findings:

```bash
cvs vulns batch \
  --asset-id 27516 \
  --file findings.json
```

Upsert mode (update existing findings if ID present, create if not):

```bash
cvs vulns batch \
  --asset-id 27516 \
  --file findings.json \
  --upsert
```

Example JSON format (SAST):

```json
[
  {
    "assetId": 27516,
    "sast": {
      "assetId": 27516,
      "title": "SQL Injection",
      "description": "User input concatenated into SQL query",
      "severity": "CRITICAL",
      "fileName": "app.py",
      "vulnerableLine": 42,
      "firstLine": 40,
      "codeSnippet": "query = f'SELECT * FROM users WHERE id = {user_id}'",
      "solution": "Use parameterized queries",
      "impactLevel": "HIGH",
      "probabilityLevel": "HIGH"
    }
  }
]
```

Supported finding types: SAST, SCA, DAST, Container, IaC, Secret, API

### SBOM

List SBOM components:

```bash
cvs sbom list \
  --company-id 443 \
  --name log4j \
  --all \
  --format csv \
  --output sbom.csv
```

Import an SBOM file for an asset:

```bash
cvs sbom import \
  --company-id 443 \
  --file bom.cdx \
  --asset-id 123
```

Check vulnerabilities from the OSV API using platform assets:

```bash
cvs sbom check-vulns \
  --company-id 443 \
  --asset-ids 123 \
  --tags foo \
  --format json \
  --output osv.json
```

Check vulnerabilities from a local CycloneDX file:

```bash
cvs sbom check-vulns \
  --file bom.cdx \
  --format json \
  --output osv.json
```

## Bulk Operations

### Assets CSV

Create assets from CSV:

```bash
cvs bulk assets \
  --company-id 443 \
  --file assets.csv \
  --op create
```

Preview an update without applying it:

```bash
cvs bulk assets \
  --company-id 443 \
  --file assets.csv \
  --op update \
  --preview-only
```

Show the bulk assets template:

```bash
cvs bulk assets --show-template
```

Repository sample:

* `samples/assets_sample.csv`

### Requirements CSV

Create requirements from CSV:

```bash
cvs bulk requirements \
  --company-id 443 \
  --file reqs.csv \
  --op create
```

Show the bulk requirements template:

```bash
cvs bulk requirements --show-template
```

Repository sample:

* `samples/requirements_sample.csv`

### Vulnerabilities CSV or SARIF

Create vulnerabilities from CSV:

```bash
cvs bulk vulns \
  --company-id 443 \
  --file vulns.csv \
  --op create
```

Create vulnerabilities from SARIF:

```bash
cvs bulk vulns \
  --company-id 443 \
  --file vulns.sarif \
  --op create \
  --sarif
```

Show the bulk vulnerabilities template:

```bash
cvs bulk vulns --show-template
```

Repository samples:

* `samples/vulns_sample.csv`
* `vulns.sarif`

## Access Control

Update the access profile of a user:

```bash
cvs accesscontrol user-profile \
  --company-id 443 \
  --user-id 123 \
  --profile-id 7
```

Update the teams associated with a user:

```bash
cvs accesscontrol user-teams \
  --company-id 443 \
  --user-id 123 \
  --team-ids 10,11
```

Remove all teams from a user:

```bash
cvs accesscontrol user-teams \
  --company-id 443 \
  --user-id 123 \
  --clear
```

Bulk update user access from CSV:

```bash
cvs accesscontrol bulk-users --file users.csv
```

The access control bulk template uses the following columns:

* `company_id`
* `user_id`
* `profile_id`
* `team_ids`
* `clear_teams`

## Authentication Commands

### Login

Save API key securely to `~/.config/cvs/credentials`:

```bash
cvs auth login
```

You will be prompted to enter your API key. The CLI will show you where to get it:

```
📚 Where to get your API key:
  1. Go to: https://app.convisoappsec.com/spa/company/[COMPANY_ID]/api-keys
  2. Click 'Generate New Key'
  3. Copy the key and paste it below
```

### Check Login Status

```bash
cvs auth whoami
```

Example output:

```
✅ You are logged in
ℹ️  API Key: LwYrO_7AT3...Pcps
ℹ️  Credentials location: /Users/you/.config/cvs/credentials
```

### Logout

Remove stored credentials:

```bash
cvs auth logout
```

## CI/CD Behavior Notes

- GraphQL/API errors return exit code `1`.
- `--quiet` silences informational logs.
- `--verbose` shows detailed request flow on paginated operations.
- The CLI checks for updates at startup.
  - Disable check with `CONVISO_CLI_SKIP_UPDATE_CHECK=1`.
  - Override remote version with `CONVISO_CLI_REMOTE_VERSION` when needed.

## Help and Discovery

Use built-in help at any level:

```bash
cvs --help
cvs projects --help
cvs vulns list --help
cvs auth login --help
```

Or use the shorter alias:

```bash
cvs vulns list --help
cvs auth whoami
```

## Reference

This documentation was updated based on the current `README.md` in the official repository:

* https://github.com/convisolabs/conviso-cli
