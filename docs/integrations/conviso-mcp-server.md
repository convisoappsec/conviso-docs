---
id: conviso-mcp-server
title: Conviso MCP Server
sidebar_label: Conviso MCP Server
description: "Model Context Protocol (MCP) server that exposes Conviso Platform data (companies, projects, assets, vulnerabilities, metrics) to MCP-compatible clients."
keywords: [MCP, Conviso, "Conviso MCP Server", Claude, Cursor, "Claude Code", integration, security, vulnerabilities]
---

<div style={{textAlign: 'center'}}>

![img](../../static/img/conviso_mcp-img4.png)

</div>

## Introduction

The Conviso MCP Server is a connector that exposes Conviso Platform data and tools to an LLM via the Model Context Protocol (MCP). MCP lets external services register named capabilities (tools) so an MCP-compatible client (e.g., Claude Desktop, Claude Code CLI, or Cursor) can ask the model to fetch live, authoritative security context or perform actions instead of relying on cached knowledge.

This server provides capabilities such as listing companies, projects, assets and vulnerabilities, returning technical details, generating direct links to the platform, and retrieving security metrics. It requires a Conviso Platform API Key; data returned is limited by that key's permissions.

## Features

The connector exposes a set of tools to the MCP host:

| Tool | Description |
|------|-------------|
| `get_companies` | List companies accessible with the provided API key, with optional name search |
| `get_company_info` | Retrieve detailed company info including plan and integrations |
| `get_projects` | List active security projects for a company |
| `get_project` | Retrieve metadata for a specific project |
| `get_assets` | List assets for a company |
| `get_asset` | Fetch details for a specific asset |
| `get_issues` | List vulnerabilities for a company or project |
| `get_issue` | Fetch full technical details for a vulnerability (code snippets, raw requests/responses) |
| `get_top_vulnerabilities` | Vulnerability counts grouped by severity (risk overview) |
| `create_project_url` | Generate a direct link to a project in the Platform |
| `create_issue_url` | Generate a direct link to a specific issue |
| `get_mttr_over_time` | MTTR aggregated over a date range, with severity/status/asset filters |
| `get_overall_risk_score_history` | Historical risk scores for trend analysis and reporting |
| `get_today_date` | Utility returning the current date (useful for relative metric queries) |

## Prerequisites

- Conviso Platform API Key (create it in your Conviso account under **Profile > API Keys**).
- An MCP-compatible client: Claude Desktop, Claude Code CLI, Cursor, or any client supporting stdio/HTTP MCP servers.
- Node.js 18+ (if running locally) or Docker.

:::tip Security recommendation
Create a dedicated API key for the MCP server and set an expiration date. Never share or commit the key to version control.
:::

## Choosing your installation mode

The server supports two transport modes depending on where you want to use it:

| Mode | Transport | Works in | How to install |
|------|-----------|----------|----------------|
| **Extension** | stdio | Claude Desktop — main chat | Marketplace or manual config |
| **Connector** | HTTP | Claude Desktop — Cowork/Projects | Run as HTTP server, register URL |
| **Claude Code CLI** | stdio | Terminal / IDE | `claude mcp add` |

---

## Installation

### Claude Desktop — Marketplace (Extension mode)

This installs the server as an **Extension**. It works in the **Claude Desktop main chat only** — not in Cowork or Projects mode.

1. Create an API Key in the Conviso Platform (**Profile > API Keys**).

<div style={{textAlign: 'center'}}>

![step-1](../../static/img/screenshots/new-20260402-123925.png)

</div>

2. Open Claude Desktop → **Settings > Extensions > Explore extensions**. Search for **Conviso MCP Server** and click **Install**.

<div style={{textAlign: 'center'}}>

![step-2](../../static/img/conviso_mcp-img2.png)

</div>

3. Go to **Settings > Extensions**, find **Conviso MCP Server** and click **Configure**. Enter your Conviso API Key and click **Save**.

<div style={{textAlign: 'center'}}>

![step-3](../../static/img/conviso_mcp-img3.png)

</div>

4. Start a new chat and run a sample prompt such as "List my companies" to confirm the server is active.

:::note
The configuration dialog appears in **Settings → Extensions → Configure**, not during the install step.
:::

---

### Claude Desktop — Connector mode (Cowork / Projects)

To use the server inside **Cowork or Projects**, you need to run it as an HTTP server and register its URL as a **Connector**.

#### 1. Start the HTTP server

Clone the repository and start the server with a `PORT`:

```bash
git clone https://github.com/convisoappsec/conviso-mcp.git
cd conviso-mcp/node
npm install
PORT=3000 CONVISO_API_KEY=<your_api_key> node src/conviso_mcp/server.js
```

The server will listen on `http://localhost:3000`.

#### 2. Register as a Connector

In Claude Desktop, go to **Settings → Connectors → Add Connector** and enter:

```
http://localhost:3000
```

#### 3. Use it in Cowork

Open Cowork or a Project and the Conviso tools will be available automatically.

:::tip Running in production
For persistent use, run the server as a background process or system service. You can also host it on any server and register its public URL as a Connector.
:::

---

### Claude Code CLI (recommended for developers)

Claude Code is the AI coding assistant CLI from Anthropic. It supports MCP servers natively — no desktop app required.

#### 1. Register the server

```bash
claude mcp add -e "CONVISO_API_KEY=<your_api_key>" -s user conviso-mcp -- \
  npx -y @convisoappsec/mcp
```

- `-s user` makes the server available in all your projects. Use `-s project` to limit it to the current project (stored in `.mcp.json`).
- `npx` downloads and runs the package automatically — no clone or install required.

#### 2. Verify the connection

```bash
claude mcp list
# conviso-mcp: node .../server.js - ✓ Connected
```

Or inside a Claude Code session, run `/mcp` to see server status and available tools.

#### 3. Use it

Start Claude Code in any project directory and interact naturally:

```
> List projects for my company
> Show the top vulnerabilities — what's the breakdown by severity?
> Get details on issue 5678, including the vulnerable code snippet
```

---

### Other clients — manual configuration

Add an entry in your MCP client's configuration file.

#### Via npx (stdio, no install required)

```json
{
  "mcpServers": {
    "conviso-mcp": {
      "command": "npx",
      "args": ["-y", "@convisoappsec/mcp"],
      "env": { "CONVISO_API_KEY": "your_api_key_here" }
    }
  }
}
```

#### Local Python (clone required)

Clone the repository first: `git clone https://github.com/convisoappsec/conviso-mcp.git`

```json
{
  "mcpServers": {
    "conviso-mcp": {
      "command": "/absolute/path/to/venv/bin/python",
      "args": ["/absolute/path/to/conviso-mcp/python/src/conviso_mcp/server.py"],
      "env": { "CONVISO_API_KEY": "your_api_key_here" }
    }
  }
}
```

#### Docker (recommended for isolation)

```json
{
  "mcpServers": {
    "conviso-mcp-docker": {
      "command": "docker",
      "args": [
        "run", "-i", "--rm",
        "-e", "CONVISO_API_KEY=your_api_key_here",

        "conviso-mcp"
      ]
    }
  }
}
```

Restart or reload your MCP client after adding the entry.

---

## Usage examples

The following prompts illustrate what you can ask once the server is connected. Adapt them to your client's UX.

### Company & project overview

```
List my companies.
Show details for company 1234 — what plan are they on?
List all active projects for company 1234.
Get the details for project 789.
```

### Vulnerability triage

```
List the open vulnerabilities for company 1234.
Show me the top 10 critical issues for company 1234.
Get full details for issue 5678, including the vulnerable code snippet.
What's the severity breakdown for company 1234? How many criticals vs highs?
```

### Asset inventory

```
List all assets for company 1234.
Show details for asset 42 — what technology does it use?
```

### Security metrics & reporting

```
What's the MTTR for company 1234 between 2024-01-01 and 2024-12-31?
Show me the MTTR for critical vulnerabilities only, filtered to the last quarter.
Get the risk score history for company 1234 — are we improving?
```

### Navigation shortcuts

```
Give me a direct link to project 789 for company 1234.
Open issue 5678 — give me the platform URL.
```

### Combining tools (agentic workflows)

Claude Code can chain multiple tools in a single request:

```
For company 1234, list the top vulnerabilities by severity, then open the most
critical one and show me the vulnerable code. Also give me a direct link to it.
```

```
Analyse the security posture of company 1234: show the risk score trend for the
last 6 months, the current severity breakdown, and the MTTR for critical issues.
Summarise the findings in a table.
```

---

## Security

- The server only has the permissions of the provided API Key.
- `get_issue` with `return_vulnerable_data=true` may return exploit code, raw HTTP requests/responses, or secrets — use with care.
- Create a dedicated key with an expiration date; do not reuse your personal API key.
- Keep your API key out of version control. Use environment variables or a secrets manager.

## Open source

The Conviso MCP Server is open source and available at [github.com/convisoappsec/conviso-mcp](https://github.com/convisoappsec/conviso-mcp). Contributions are welcome — bug reports, new tools, and improvements to existing capabilities. See the repository's `CONTRIBUTING.md` to get started.

## See also

- [Conviso Skills](./conviso-skills) — reusable operational playbooks for bulk actions (vulnerability triage, owner assignment, asset risk normalization) via `conviso-cli`, with preview-first safety controls.

## Support

If you need help, contact Conviso support: [support@convisoappsec.com](mailto:support@convisoappsec.com).

[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)
