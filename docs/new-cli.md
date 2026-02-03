---
id: new-cli
title: New CLI
sidebar_label: New CLI
description: Documentation for the new Conviso CLI that interacts with the platform via GraphQL.
keywords: [Conviso CLI, GraphQL, New CLI]
image: '/static/img/cli-overview.png'
---

## Overview

The New Conviso CLI is a command-line interface to interact with the Conviso Platform via GraphQL. It is designed for local use and CI/CD workflows.

## Requirements

- Python 3.9+
- Environment variable `CONVISO_API_KEY` (shell or `.env`)
- Optional: `CONVISO_API_TIMEOUT` (seconds, default 30)

## Project structure

- `conviso/app.py`: Typer entrypoint; registers subcommands.
- `conviso/commands/`: CLI commands (`projects`, `assets`, `requirements`, `vulnerabilities`).
- `conviso/clients/`: API clients (GraphQL).
- `conviso/core/`: shared utilities (logging, notifications, output manager).
- `conviso/schemas/`: table schemas/headers for consistent output.

## Clone repository

```bash
git clone https://github.com/convisolabs/conviso-cli.git
cd conviso-cli
```

## Install (local)

```bash
pip install -r requirements.txt
```

Or run the module directly:

```bash
python -m conviso.app --help
```
## Update CLI

The Conviso CLI is updated via the Git repository.

To update your local copy to the latest version:

```bash
git pull origin main
```
If dependencies change, reinstall them using:

```bash
pip install -r requirements.txt
```

## Usage examples

- Projects:
  ```bash
  python -m conviso.app projects list --company-id 443 --all
  ```
- Assets:
  ```bash
  python -m conviso.app assets list --company-id 443 --tags cloud --attack-surface INTERNET_FACING --all
  ```
- Requirements:
  ```bash
  python -m conviso.app requirements create --company-id 443 --label "Req" --description "Desc" --activity "Login|Check login"
  ```
- Vulnerabilities:
  ```bash
  python -m conviso.app vulns list --company-id 443 --severities HIGH,CRITICAL --asset-tags cloud --all
  ```

Output options: `--format table|json|csv`, `--output <path>` to save JSON/CSV.

## Behavior and notes

- GraphQL errors return exit code 1.
- Use `--all` on list commands to fetch every page.
- `--quiet` silences info logs; `--verbose` shows per-page requests when paginating.
- On startup, the CLI checks for a newer version via the repository `VERSION` file.
  - Set `CONVISO_CLI_SKIP_UPDATE_CHECK=1` to skip.
  - Without network access, the check warns; you can override with `CONVISO_CLI_REMOTE_VERSION`.
- Upgrade: `python -m conviso.app upgrade` (equivalent to `conviso upgrade`) runs `git pull --ff-only` in the repo directory.
  - If installed via pip, run `pip install .` after the pull.

## SBOM

- List:
  ```bash
  python -m conviso.app sbom list --company-id 443 --name log4j --all --format csv --output sbom.csv
  ```
- Filters: `--name`, `--vulnerable-only`, `--asset-ids`, `--tags`, `--sort-by`, `--order`, pagination (`--page/--per-page/--all`).
- Import:
  ```bash
  python -m conviso.app sbom import --company-id 443 --file bom.cdx --asset-id 123
  ```
  `--asset-id` is required and the backend infers format.
- Formats: table/CSV/JSON/CycloneDX for list (`--format cyclonedx`).
- Check vulnerabilities (OSV):
  - Using API:
    ```bash
    python -m conviso.app sbom check-vulns --company-id 443 --asset-ids 123 --tags foo --format json --output osv.json
    ```
  - Using CycloneDX file:
    ```bash
    python -m conviso.app sbom check-vulns --file bom.cdx --format json --output osv.json
    ```
  - Defaults to table output; use `--format json` for JSON (with or without `--output`).

## Bulk CSV (assets)

Command:

```bash
python -m conviso.app bulk assets --company-id 443 --file assets.csv --op create|update|delete [--force] [--preview-only]
```

Headers (CSV columns):

| Column             | Required           | Values / Format                                        |
| ------------------ | ------------------ | ------------------------------------------------------ |
| id                 | update/delete only | Integer ID (column name configurable via `--id-column`) |
| name               | create/update      | Text                                                   |
| businessImpact     | optional           | LOW, MEDIUM, HIGH, NOT_DEFINED                         |
| dataClassification | optional           | PII, PAYMENT_CARD_INDUSTRY, NON_SENSITIVE, NOT_DEFINED |
| tags               | optional           | Comma-separated, e.g. `tag1,tag2`                      |
| attackSurface      | optional           | INTERNET_FACING, INTERNAL, NOT_DEFINED                 |

Examples:

Create:

```csv
name,businessImpact,dataClassification,tags,attackSurface
Asset A,HIGH,NON_SENSITIVE,"tag1,tag2",INTERNET_FACING
```

Update/Delete:

```csv
id,name,businessImpact
123,Asset A Updated,MEDIUM
```

Behavior:

- Always runs a dry-run first and shows a report.
- Use `--force` to apply without confirmation; otherwise you will be prompted after dry-run.
- Use `--preview-only` to exit after dry-run without applying.

## Bulk CSV (requirements)

Command:

```bash
python -m conviso.app bulk requirements --company-id 443 --file reqs.csv --op create|update|delete [--force] [--preview-only]
```

Headers (CSV columns):

| Column      | Required           | Values / Format                                                     |
| ----------- | ------------------ | ------------------------------------------------------------------- |
| id          | update/delete only | Integer ID (column name configurable via `--id-column`)             |
| label       | create/update      | Text                                                                |
| description | create/update      | Text                                                                |
| global      | optional           | true/false                                                          |
| activities  | optional           | Semicolon-separated, each activity uses `label|description|typeId|reference|item|category|actionPlan|templateId|sort` |

Examples:

Create:

```csv
label,description,global,activities
Requirement A,Do X,true,"Login|Check login|1|REF||Category||123|1;Logout|Check logout|1"
```

Update/Delete:

```csv
id,label,description
123,Requirement A Updated,Do Y
```

## Bulk CSV/SARIF (vulnerabilities)

Command:

```bash
python -m conviso.app bulk vulns --company-id 443 --file vulns.csv --op create|update|delete [--force] [--preview-only] [--sarif]
```

Types: WEB, NETWORK, SOURCE. CSV by default; use `--sarif` to import from SARIF (fields compatible with the table). `--sarif-asset-field <field>` sets where to read the asset (name or id). If the asset does not exist, the CLI creates it automatically for the company.

Template helper: `python -m conviso.app bulk vulns --show-template`

Headers (CSV columns):

| Column                 | Required          | Values / Format                           |
| ---------------------- | ----------------- | ----------------------------------------- |
| type                   | create            | WEB, NETWORK, SOURCE                      |
| assetId                | create            | Int                                       |
| title                  | create            | Text                                      |
| description            | create            | Text                                      |
| solution               | create            | Text                                      |
| impactLevel            | create            | ImpactLevelCategory (e.g., HIGH)          |
| probabilityLevel       | create            | ProbabilityLevelCategory (e.g., MEDIUM)   |
| severity               | create            | NOTIFICATION, LOW, MEDIUM, HIGH, CRITICAL |
| summary                | create            | Text                                      |
| impactDescription      | create            | Text                                      |
| stepsToReproduce       | create            | Text                                      |
| reference              | optional          | Text/URL                                  |
| category               | optional          | Text                                      |
| projectId              | optional          | Int                                       |
| status                 | optional          | IssueStatusLabel                          |
| compromisedEnvironment | optional          | true/false                                |
| method (WEB)           | WEB               | HTTPMethod (GET, POST, ...)               |
| scheme (WEB)           | WEB               | SchemeCategory (HTTP, HTTPS)              |
| url (WEB)              | WEB               | String                                    |
| port (WEB/NETWORK)     | WEB/NETWORK       | Int                                       |
| request (WEB)          | WEB               | String                                    |
| response (WEB)         | WEB               | String                                    |
| parameters (WEB)       | WEB optional      | String                                    |
| address (NETWORK)      | NETWORK           | String (host/IP)                          |
| protocol (NETWORK)     | NETWORK           | String                                    |
| attackVector (NETWORK) | NETWORK           | String                                    |
| fileName (SOURCE)      | SOURCE            | String                                    |
| vulnerableLine         | SOURCE            | Int                                       |
| firstLine              | SOURCE            | Int                                       |
| codeSnippet            | SOURCE            | String                                    |
| source                 | SOURCE optional   | String                                    |
| sink                   | SOURCE optional   | String                                    |
| commitRef              | SOURCE optional   | String                                    |
| deployId               | SOURCE optional   | String                                    |

Example (WEB create):

```csv
type,assetId,title,description,solution,impactLevel,probabilityLevel,severity,summary,impactDescription,stepsToReproduce,method,scheme,url,port,request,response
WEB,12345,XSS,"desc","fix",HIGH,MEDIUM,HIGH,"summary","impact","steps",GET,HTTPS,https://app/login,443,"GET /login","HTTP/1.1 200"
```

Example (update/delete):

CSV export from `vulns list --format csv` can be used for update/delete. Use column `id` or `issueId`. Types are inferred. `--sarif-asset-field` controls where to read the asset in SARIF; if the asset does not exist, the CLI creates it automatically.
