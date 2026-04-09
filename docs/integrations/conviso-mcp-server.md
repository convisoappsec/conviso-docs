---
id: conviso-mcp-server
title: Conviso MCP Server
sidebar_label: Conviso MCP Server
description: "Model Context Protocol (MCP) server that exposes Conviso Platform data (companies, projects, assets, vulnerabilities, metrics) to MCP-compatible clients."
keywords: [MCP, Conviso, "Conviso MCP Server", Claude, Cursor, integration, security, vulnerabilities]
---

<div style={{textAlign: 'center'}}>

![img](../../static/img/conviso_mcp-img4.png)

</div>

## Introduction

The Conviso MCP Server is a connector that exposes Conviso Platform data and tools to an LLM chatbot via the Model Context Protocol (MCP). MCP lets external services register named capabilities (tools) so an MCP-compatible client (e.g., Claude or Cursor) can ask the model to fetch live, authoritative context or perform actions instead of relying on cached knowledge.

This server provides capabilities such as listing companies, projects, assets and vulnerabilities, returning technical details and generating direct links to the platform. It requires a Conviso Platform API Key; data returned is limited by that key's permissions.

## Features

The connector exposes a set of tools to the MCP host. Highlights:

- List companies and retrieve company info and plan details.
- List projects and individual project details.
- List assets and retrieve asset details.
- Query vulnerabilities and retrieve full technical details (including code snippets and raw requests/responses when available).
- Generate direct links to issues and projects in Conviso Platform.
- Retrieve metrics such as MTTR and risk score history.

(For a complete list of endpoints and tools, see the project's [README](https://github.com/convisoappsec/conviso-mcp/blob/main/README.md).)

## Prerequisites

- Conviso Platform API Key (create it in your Conviso account under **Profile > API Keys**).
- An MCP-compatible client (for example, Claude Desktop or Cursor).
- Python 3.10+ (if using the Python server) or Node.js (if using the Node.js server), or Docker.

## Source repository

The Conviso MCP Server source code is hosted on GitHub: https://github.com/convisoappsec/conviso-mcp

Clone the repository to get the examples, Dockerfiles and both Python and Node.js implementations used in this documentation:

```bash
git clone https://github.com/convisoappsec/conviso-mcp.git
```

Many examples below assume you have the repository checked out locally.

## Quick install — Claude Marketplace

Below is a short, step-by-step flow to install and configure the Conviso MCP Server from the Claude Marketplace.

1. Create an API Key in the Conviso Platform (**Profile > API Keys**).

<div style={{textAlign: 'center'}}>

![step-1](../../static/img/screenshots/new-20260402-123925.png)

</div>

2. Open Claude Desktop and go to **Settings > Extensions > Explore extensions**. Search for **Conviso MCP Server** and click **Install**.

<div style={{textAlign: 'center'}}>

![step-2](../../static/img/conviso_mcp-img2.png)

</div>

3. After installation, open **Extensions > Configure**. Insert your Conviso API Key and optionally enable **Staging** (if you want the server to point to a staging Conviso instance).

<div style={{textAlign: 'center'}}>

![step-3](../../static/img/conviso_mcp-img3.png)

</div>

4. Test the integration by creating a new chat and checking the MCP server availability (the extension should be listed and active). Use a sample prompt like "List projects for my company" to validate connectivity.

:::note
If you are not installing via the Marketplace, you can run the server locally (Python/Node) or via Docker and then register it in your client's MCP configuration.
:::

## Configuration on other clients

Add an MCP server entry in your MCP-compatible client configuration. Below are example snippets you can adapt — keep absolute paths for commands and arguments.

#### Local Python

```json
{
  "mcpServers": {
    "conviso-mcp": {
      "command": "/ABS/PATH/TO/venv/bin/python",
      "args": ["/ABS/PATH/TO/conviso-mcp/python/src/conviso_mcp/server.py"],
      "env": { "CONVISO_API_KEY": "your_api_key_here", "STAGING" : "false" }
    }
  }
}
```

#### Local Node

```json
{
  "mcpServers": {
    "conviso-mcp": {
      "command": "node",
      "args": ["/ABS/PATH/TO/conviso-mcp/node/src/conviso_mcp/server.js"],
      "env": { "CONVISO_API_KEY": "your_api_key_here", "STAGING" : "false" }
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
        "run",
        "-i",
        "--rm",
        "-e",
        "CONVISO_API_KEY=your_api_key_here",
        "-e",
        "STAGING=false",
        "conviso-mcp"
      ]
    }
  }
}
```

## Verification

1. Restart or reload your MCP client (if necessary) after adding the server entry.
2. Ensure the extension/server is installed.
3. Run a simple query such as "List projects for company &lt;your-company-id&gt;" and verify the server returns results from Conviso Platform.

## Usage examples

- "List projects for company with ID 1234"
- "Show top vulnerabilities for company X"
- "Open issue 5678 and return the code snippet where it was detected"

Adapt prompts according to the client UX and the server capabilities.

## Security

The server uses the permissions of the provided API Key. Keep your API keys private and follow your organization policies. The `get_issue` tool may return code snippets and technical details when requested; handle them with care. Additionally, for security reasons, it is recommended to create a separate API key for the MCP server and set an expiration date.

## Support

If you need help, contact Conviso support: [support@convisoappsec.com](mailto:support@convisoappsec.com).

[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)
