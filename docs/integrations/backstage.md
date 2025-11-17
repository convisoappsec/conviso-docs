---
id: backstage
title: Backstage Integration
sidebar_label: Backstage
description:  Backstage
keywords:  [Backstage Integration]
---

<div style={{textAlign: 'center'}}>

![img](../../static/img/backstage.svg)

</div>

:::note
First time using Backstage? Please refer to the [following documentation](https://backstage.io/docs/overview/what-is-backstage).
:::

## Introduction

Import your Backstage catalog entities as assets in Conviso Platform with the Backstage plugin.

### Features

- Project Import: Import Backstage catalog projects as assets in Conviso Platform.
- Auto-Import: Automatically sync new entities from your Backstage catalog.
- Status Tracking: View which projects are imported and their status.
- Search & Filter: Search projects by name, description, or owner.
- Performance: Multi-layer caching system for fast operations.
- Security: Secure API key authentication with Conviso Platform.
- Scalable: Handles large catalogs with efficient pagination and batch processing.

## Installation

Install the plugin package in your Backstage app:

`yarn add @conviso/backstage-plugin-conviso`

Or with npm:

`npm install @conviso/backstage-plugin-conviso`

## Setup

### Add the Frontend Plugin
1. Add the route (`packages/app/src/App.tsx`):

```js
import { BackstagePluginConvisoPage } from '@conviso/backstage-plugin-conviso';

// In your routes
<Route path="/conviso" element={<BackstagePluginConvisoPage />} />
```

2. Add sidebar navigation link (`packages/app/src/components/Root/Root.tsx`):

```js
import { SidebarItem } from '@backstage/core-components';
import SecurityIcon from '@material-ui/icons/Security';

// Inside the SidebarGroup "Menu", add:
<SidebarItem icon={SecurityIcon} to="conviso" text="Conviso" />
This adds a "Conviso" link to the sidebar menu.
```

### Add the Backend Plugin
In your `packages/backend/src/index.ts`, add the backend plugin:

```js
// Conviso backend plugin
backend.add(import('@conviso/backstage-plugin-conviso/backend.js'));
```

:::note
The plugin follows the official Backstage plugin pattern, compiling the backend to CommonJS and exporting via the exports field in package.json.
:::

### Configure the Plugin
The plugin uses environment variables with `app-config.yaml` for secure configuration.

1. Export environment variables in your shell:

```bash
export CONVISO_API_KEY="your-api-key"
export CONVISO_COMPANY_ID="your-company-id"
```

2. Add configuration to `app-config.yaml` using environment variable substitution:

```bash
# Conviso Platform configuration
conviso:
  apiKey: ${CONVISO_API_KEY}
  companyId: ${CONVISO_COMPANY_ID}
```

:::important
Always use environment variable substitution (`${VAR}`) in `app-config.yaml` to avoid committing sensitive values to Git. Never hardcode API keys or company IDs directly in the config file.
:::

3. Start Backstage:

```bash
yarn start
```

### Configuration Priority:

1. Exported environment variables (highest priority) - `export CONVISO_COMPANY_ID=0001`.
2. `app-config.yaml` (Backstage config file with variable substitution).

This ensures sensitive values are never committed to Git and remain secure.

## Quickstart

After installation and configuration:

1. Start your Backstage instance: yarn dev (or `yarn start`).
2. Navigate to `http://localhost:3000/conviso` in your browser.
3. Start importing your Backstage catalog entities!

## Usage

### Importing Projects
1. Navigate to the Conviso plugin page in Backstage (`/conviso`).
2. Browse your catalog entities in the table.
3. Select one or more projects you want to import (use checkboxes).
4. Click **Import Selected** to sync them to Conviso Platform.
5. Wait for the import to complete (you'll see a success message).

### Auto-Import
Enable auto-import to automatically sync new entities from your Backstage catalog:
1. Toggle **Auto Import** in the plugin interface.
2. New entities will be automatically imported when detected.
3. The system runs periodic checks to sync new projects.

### Refreshing Status
Use the **Refresh Status** button to update the import status of all assets, ensuring the plugin reflects the current state in Conviso Platform.

## API Endpoints

The backend plugin provides the following `REST API` endpoints:

- `GET /api/conviso/imported-assets/:companyId?` - Get list of imported assets.
- `POST /api/conviso/import-projects` - Import projects to Conviso Platform.
- `POST /api/conviso/check-imported-names` - Check which names are already imported.
- `POST /api/conviso/sync-imported-assets/:companyId?` - Sync asset cache.
- `GET /api/conviso/integration/:instanceId` - Get integration details.
- `POST /api/conviso/integration` - Create or update integration.
- `POST /api/conviso/auto-import` - Configure auto-import settings.

## Configuration Reference

### Environment Variables
- Required:

```bash
CONVISO_API_KEY - Your Conviso Platform API key
CONVISO_COMPANY_ID - Default company ID (can also be provided per integration).
```

### app-config.yaml structure
```yaml
conviso:
  apiKey: ${CONVISO_API_KEY}
  companyId: ${CONVISO_COMPANY_ID}
```

### Frontend Configuration
The frontend plugin reads configuration from:
- localStorage: Stores `companyId` and `instanceId` per instance
- Backend API: Fetches integration settings from the backend

## Development

Running the Plugin Locally:

```bash
yarn start
```

The plugin will be available at `http://localhost:3000/conviso`.

### Building

```bash
yarn build
```

### Testing

```bash
# Run all tests
yarn test

# Run tests with coverage
yarn test:coverage

# Run tests in watch mode
yarn test:watch
```

## Architecture

### Frontend

- React components with Material-UI.
- Custom hooks for state management.
- Caching layer for performance optimization.
- Real-time status updates.

### Backend

- Express.js REST API.
- GraphQL client for Conviso Platform.
- Kafka integration for async processing.
- File-based caching system.
- Background jobs for auto-import.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

- Fork the repository
- Create your feature branch (`git checkout -b feature/amazing-feature`)
- Commit your changes (`git commit -m 'Add some amazing feature'`)
- Push to the branch (`git push origin feature/amazing-feature`)
- Open a Pull Request

## License

Copyright 2025 Conviso Application Security.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at:

`http://www.apache.org/licenses/LICENSE-2.0`

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

## Support
If you have any questions or need help using our product, please don't hesitate to contact our support team.


## Resources
By exploring our content, you'll find resources to help you to understand the benefits of the Conviso Platform integrations for Secure CI/CD Pipeline:

[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)
