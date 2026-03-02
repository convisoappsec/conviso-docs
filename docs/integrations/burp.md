---
id: burp
title: Burp Integration
sidebar_label: Burp
description: Connect Burp Suite to Conviso Platform to register and track pentest findings.
keywords: [Burp, Burp Suite, Pentest, Conviso Platform]
---

## Overview

The Burp extension for Conviso Platform lets pentest teams send findings directly from Burp Suite to Conviso Platform and keep vulnerability tracking centralized.

- Repository: [convisolabs/Burp-ConvisoPlatform](https://github.com/convisolabs/Burp-ConvisoPlatform)
- Releases: [Burp-ConvisoPlatform Releases](https://github.com/convisolabs/Burp-ConvisoPlatform/releases)

## Prerequisites

- Burp Suite
- A Conviso Platform account
- A Conviso API key
- Extension `.jar` file from the latest release

## Install in Burp Suite

1. Open Burp Suite and go to **Extensions**.
2. Click **Add**.
3. Select:
   - **Extension type**: `Java`
   - **Extension file**: the downloaded `jar-with-dependencies`
   - **Output**: `Show in UI`
4. Click **Next** and confirm the extension is loaded.

## Configure the Extension

After loading the extension:

1. Open the Conviso extension tab in Burp.
2. Configure your Conviso Platform access (API key and workspace/project context).
3. Validate the connection before sending findings.

## Build from Source (Optional)

```bash
git clone https://github.com/convisolabs/Burp-ConvisoPlatform.git
cd Burp-ConvisoPlatform
mvn -DskipTests package
```

Generated file:

```text
target/Burp-ConvisoPlatform-<version>-jar-with-dependencies.jar
```

## Support

- Project issues: [Burp-ConvisoPlatform Issues](https://github.com/convisolabs/Burp-ConvisoPlatform/issues)
- Conviso documentation: [docs.convisoappsec.com](https://docs.convisoappsec.com/)
