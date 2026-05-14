---
id: conviso-skills
title: Conviso Skills
sidebar_label: Conviso Skills
description: "Reusable operational playbooks for LLMs to operate the Conviso Platform at scale via conviso-cli, with preview-first safety controls."
keywords: [skills, "conviso-cli", LLM, automation, vulnerabilities, assets, remediation, "Claude Code", "AI agent"]
---

## Introduction

Conviso Skills are reusable operational playbooks that let an LLM execute structured, multi-step workflows against the Conviso Platform via the `conviso-cli`. Each skill packages a defined workflow, safety rules, and helper scripts so the LLM follows a consistent and auditable process — rather than making ad-hoc decisions at each step.

**Skills vs. MCP Server:**

| | [MCP Server](./conviso-mcp-server) | Skills |
|---|---|---|
| **Best for** | Interactive queries — "show me X", "open issue Y" | Bulk operations — assign owners, triage 200 vulns, normalize assets |
| **Execution engine** | MCP tools called by the LLM client | `conviso-cli` scripts run in a shell |
| **Safety model** | Read-only by default | Preview-first; `--yes` required for mutations |
| **Artifact output** | Live API response | JSON, CSV, Markdown files in `out/` |

Use the **MCP Server** when you need fast, interactive access to live data. Use **Skills** when you need a repeatable, auditable workflow that produces reviewable artifacts before applying any change.

## Available skills

| Skill | Purpose |
|-------|---------|
| [`conviso-vuln-remediator`](#conviso-vuln-remediator) | Triage recent vulnerabilities and prepare a bulk remediation queue |
| [`conviso-vuln-assignee-manager`](#conviso-vuln-assignee-manager) | Assign vulnerability owners in bulk using mapping rules |
| [`conviso-asset-risk-parametrizer`](#conviso-asset-risk-parametrizer) | Normalize asset metadata that influences risk scoring |

## Prerequisites

- **Conviso Platform API Key** — create under **Profile > API Keys**.
- **`conviso-cli`** installed and accessible in your shell.
- Environment variables: `CONVISO_API_KEY` (required), `CONVISO_API_URL` (optional, for non-default environments).
- An LLM agent capable of running shell commands (e.g., Claude Code CLI with `Bash` tool enabled).

## Installation

Install all skills from the repository at once:

```bash
npx skills add convisolabs/conviso-skills
```

Or install a single skill:

```bash
npx skills add https://github.com/convisolabs/conviso-skills --skill conviso-vuln-remediator
npx skills add https://github.com/convisolabs/conviso-skills --skill conviso-vuln-assignee-manager
npx skills add https://github.com/convisolabs/conviso-skills --skill conviso-asset-risk-parametrizer
```

## Safety model

All skills follow the same safety pattern:

1. **Preflight** — validates CLI access and authentication before doing anything.
2. **Collect** — reads data from the Platform (read-only).
3. **Plan/Generate** — produces a reviewable artifact (CSV or JSON).
4. **Validate** — checks the plan before any mutation.
5. **Preview** — dry-run showing exactly what would change (no writes).
6. **Apply** — executes changes only when `--yes` is passed explicitly.

Never skip the preview step. The LLM must present the preview output to the operator and wait for explicit approval before calling an apply script.

---

## conviso-vuln-remediator

Triage recent vulnerabilities and build a prioritized remediation queue, with a review-ready bulk CSV and a controlled apply step.

### Inputs

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `COMPANY_ID` | ✅ | — | Target company ID |
| `DAYS_BACK` | | `7` | Look-back window in days |
| `TOP_N` | | `25` | Max vulnerabilities to process |
| `CONVISO_CLI_BIN` | | `conviso` | Path to CLI binary |

### Workflow

**Step 1 — Preflight**
```bash
./scripts/00_preflight.sh --company-id "$COMPANY_ID"
```
Validates CLI access and authentication.

**Step 2 — Collect recent vulnerabilities**
```bash
./scripts/10_collect_recent_vulns.sh \
  --company-id "$COMPANY_ID" \
  --days-back "${DAYS_BACK:-7}"
```
Output: `out/recent_vulns.json`

**Step 3 — Prioritize (HIGH/CRITICAL)**
```bash
./scripts/20_prioritize_vulns.sh \
  --input out/recent_vulns.json \
  --top "${TOP_N:-25}"
```
Outputs: `out/prioritized_vulns.json`, `out/prioritized_vulns.md`

**Step 4 — Generate & validate bulk CSV**
```bash
./scripts/30_generate_bulk_update_csv.sh --input out/prioritized_vulns.json
./scripts/35_validate_bulk_csv.sh --file out/vulns_update_template.csv
```
Output: `out/vulns_update_template.csv`

**Step 5 — Preview (required)**
```bash
./scripts/40_bulk_preview.sh \
  --company-id "$COMPANY_ID" \
  --file out/vulns_update_template.csv
```
No mutations. Present output to operator for review.

**Step 6 — Apply (explicit approval required)**
```bash
./scripts/50_bulk_apply.sh \
  --company-id "$COMPANY_ID" \
  --file out/vulns_update_template.csv \
  --yes
```

### Expected outcome

- Prioritized remediation queue (`out/prioritized_vulns.md`)
- Review-ready bulk CSV (`out/vulns_update_template.csv`)
- Preview evidence before any write
- Controlled apply with explicit acknowledgment

---

## conviso-vuln-assignee-manager

Assign responsible owners to vulnerabilities at scale using deterministic mapping rules from a CSV file.

### Inputs

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `COMPANY_ID` | ✅ | — | Target company ID |
| `DAYS_BACK` | | `30` | Look-back window in days |
| `SEVERITIES` | | `HIGH,CRITICAL` | Comma-separated severity filter |
| `TOP_N` | | `200` | Max vulnerabilities to process |

### Workflow

**Step 1 — Preflight**
```bash
./scripts/00_preflight.sh --company-id "$COMPANY_ID"
```

**Step 2 — Collect candidate vulnerabilities**
```bash
./scripts/10_collect_candidates.sh \
  --company-id "$COMPANY_ID" \
  --days-back "${DAYS_BACK:-30}" \
  --severities "${SEVERITIES:-HIGH,CRITICAL}"
```
Output: `out/candidate_vulns.json`

**Step 3 — Generate assignment plan**
```bash
./scripts/20_generate_assignment_plan.sh \
  --input out/candidate_vulns.json \
  --map-file assets/assignee_map.csv \
  --top "${TOP_N:-200}"
```
Output: `out/assignment_plan.csv`

**Step 4 — Validate plan**
```bash
./scripts/30_validate_assignment_plan.sh --file out/assignment_plan.csv
```

**Step 5 — Preview (no mutations)**
```bash
./scripts/40_apply_assignments.sh --file out/assignment_plan.csv
```

**Step 6 — Apply (explicit approval required)**
```bash
./scripts/40_apply_assignments.sh --file out/assignment_plan.csv --yes
```

### Mapping file

The skill uses `assets/assignee_map.csv` to map vulnerability attributes (e.g., asset tag, project, severity) to owner email addresses. Edit this file before running the workflow to reflect your team's ownership model.

---

## conviso-asset-risk-parametrizer

Standardize asset metadata (business impact, data classification, tags) used by the Platform's risk scoring engine.

### Inputs

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `COMPANY_ID` | ✅ | — | Target company ID |
| `TOP_N` | | `500` | Max assets to process |

### Workflow

**Step 1 — Preflight**
```bash
./scripts/00_preflight.sh --company-id "$COMPANY_ID"
```

**Step 2 — Collect assets**
```bash
./scripts/10_collect_assets.sh --company-id "$COMPANY_ID"
```
Output: `out/assets.json`

**Step 3 — Generate risk parameterization plan**
```bash
./scripts/20_generate_risk_plan.sh \
  --input out/assets.json \
  --policy-file assets/risk_policy.csv \
  --top "${TOP_N:-500}"
```
Output: `out/asset_risk_plan.csv`

**Step 4 — Validate plan**
```bash
./scripts/30_validate_risk_plan.sh --file out/asset_risk_plan.csv
```

**Step 5 — Preview (no mutations)**
```bash
./scripts/40_apply_risk_plan.sh \
  --company-id "$COMPANY_ID" \
  --file out/asset_risk_plan.csv
```

**Step 6 — Apply (explicit approval required)**
```bash
./scripts/40_apply_risk_plan.sh \
  --company-id "$COMPANY_ID" \
  --file out/asset_risk_plan.csv \
  --yes
```

### Policy file

The skill uses `assets/risk_policy.csv` to define how asset attributes map to risk parameters. Review and adapt this file to your organization's classification standards before running.

---

## Source repository

[github.com/convisolabs/conviso-skills](https://github.com/convisolabs/conviso-skills)

Contributions are welcome. See `CONTRIBUTING.md` for contribution rules and validation requirements.

## See also

- [Conviso MCP Server](./conviso-mcp-server) — interactive, real-time queries from any MCP-compatible LLM client
- [Conviso Platform Vulnerabilities](https://docs.convisoappsec.com/platform/vulnerabilities)
- [Conviso Platform Risk Score](https://docs.convisoappsec.com/platform/risk-score)

## Support

[support@convisoappsec.com](mailto:support@convisoappsec.com)
