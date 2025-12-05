---
id: mobsf
title: MobSF Integration
sidebar_label: MobSF
description: MobSF Integration
keywords: [MobSF Integration, Mobile Security Framework]
---

<div style={{textAlign: 'center'}}>

![img](../../static/img/mobsf.png)

</div>

:::note
First time using MobSF? Please refer to the [following documentation](https://mobsf.github.io/docs/).
:::

## Introduction

Import your Mobile Security Framework (MobSF) security analysis reports into Conviso Platform. This integration automatically processes Android and iOS application security reports and creates security findings.

### Features

- **Report Import**: Import MobSF JSON reports via GraphQL mutation
- **Automatic Processing**: Asynchronous processing of security findings
- **Asset Management**: Automatically creates or links assets based on app name
- **SBOM Support**: Automatically imports Software Bill of Materials (SBOM) data when available
- **Finding Mapping**: Maps MobSF findings to Conviso Platform format with proper severity levels
- **Status Tracking**: Track import status and processing results
- **Multi-Platform**: Supports both Android (APK) and iOS (IPA) applications
- **Severity Mapping**: Automatically maps MobSF severity buckets (high, warning, info, secure, hotspot) to Conviso severity levels

## Prerequisites

- A Conviso Platform account
- A valid Conviso API Key
- MobSF JSON report file (generated from MobSF analysis)
- Access to the target company/scope in Conviso Platform
- Permission to create or update assets and findings

## Setup

### Authentication

The integration uses GraphQL API authentication. Ensure you have:

1. A valid Conviso API Key
2. Proper permissions to access the target company/scope
3. Asset creation/update permissions (if using automatic asset creation)

### GraphQL Endpoint

The integration uses the Conviso Platform GraphQL API endpoint:

```bash
POST /graphql
```

## Configuration

### Required Parameters

The `importMobsf` mutation accepts the following parameters:

- `file` (required): The MobSF JSON report file (Upload type)
- `asset_id` (optional): ID of an existing asset to associate the report with
- `company_id` (optional): ID of the company/scope. Required if `asset_id` is not provided

### Asset Configuration

You can configure the import in two ways:

- **Provide `company_id` only**: The system will use the `app_name` from your MobSF report to automatically find or create an asset
- **Provide `asset_id` only**: Use a specific asset that you've already created in Conviso Platform

:::important
When providing only `company_id`, your MobSF report must contain an `app_name` field. If `app_name` is missing, the import will fail.
:::

## Quickstart

### 1. Generate MobSF Report

First, analyze your mobile application with MobSF and export the JSON report.

### 2. Import via GraphQL

Use the `importMobsf` mutation to import your report:

```graphql
mutation ImportMobsf($file: Upload!, $companyId: ID) {
  importMobsf(
    input: {
      file: $file
      company_id: $companyId
    }
  ) {
    controlSyncStatus {
      id
      status
      asset {
        id
        name
      }
    }
    errors
  }
}
```

### 3. Check Import Status

Monitor the import status using the returned status information:

```graphql
query GetImportStatus($id: ID!) {
  controlSyncStatus(id: $id) {
    id
    status
    externalVulnerabilityCount
    importedVulnerabilityCount
    createdVulnerabilityCount
    successCount
    failureCount
    failureReason
    estimatedDurationInSeconds
  }
}
```

## Usage

### Importing Reports

#### Option 1: With Existing Asset

If you already have an asset created in Conviso Platform:

```graphql
mutation {
  importMobsf(
    input: {
      file: $file
      asset_id: "123"
    }
  ) {
    controlSyncStatus {
      id
      status
    }
    errors
  }
}
```

#### Option 2: With Company ID (Auto-Create Asset)

If you want the system to find or create an asset based on the app name:

```graphql
mutation {
  importMobsf(
    input: {
      file: $file
      company_id: "456"
    }
  ) {
    controlSyncStatus {
      id
      status
      asset {
        id
        name
      }
    }
    errors
  }
}
```

:::note
When using `company_id` without `asset_id`, ensure your MobSF report contains the `app_name` field. The system will:
- Search for an existing asset with that name in the company
- Create a new asset if none exists (requires asset creation permissions)
:::

### Report Structure

The MobSF JSON report should follow this structure:

```json
{
  "app_name": "MyMobileApp",
  "package_name": "com.example.myapp",
  "version_name": "1.0.0",
  "version_code": "1",
  "file_name": "myapp.apk",
  "appsec": {
    "app_name": "MyMobileApp",
    "file_name": "myapp.apk",
    "hash": "abc123...",
    "version_name": "1.0.0",
    "package_name": "com.example.myapp",
    "security_score": 75,
    "high": [
      {
        "title": "Insecure Data Storage",
        "description": "The app stores sensitive data insecurely...",
        "section": "storage"
      }
    ],
    "warning": [
      {
        "title": "Weak Cryptography",
        "description": "The app uses weak cryptographic algorithms...",
        "section": "crypto"
      }
    ],
    "info": [],
    "secure": [],
    "hotspot": []
  },
  "sbom": {
    "components": [
      {
        "name": "library-name",
        "version": "1.2.3"
      }
    ]
  }
}
```

### Severity Buckets

MobSF organizes findings into severity buckets:

- **high**: Critical security issues requiring immediate attention
- **warning**: Security concerns that should be addressed
- **info**: Informational findings
- **secure**: Secure practices detected
- **hotspot**: Security hotspots identified

The integration automatically maps these to Conviso Platform severity levels.

### SBOM Import

If your MobSF report contains SBOM (Software Bill of Materials) data in the `sbom` field, it will be automatically imported using the `Sbom::ImporterService`. The SBOM import runs before the security findings import.

## API Endpoints

The integration provides the following GraphQL mutation:

### GraphQL Mutation: `importMobsf`

#### Arguments

- `file` (required): The MobSF JSON report file (Upload type)
- `asset_id` (optional): ID of an existing asset to associate the report with
- `company_id` (optional): ID of the company/scope. Required if `asset_id` is not provided

#### Response Fields

- `controlSyncStatus`: Status tracking object with the following fields:
  - `id`: Status record ID
  - `status`: Current status (`pending`, `succeeded`, `failed`)
  - `externalVulnerabilityCount`: Total findings in the report
  - `importedVulnerabilityCount`: Successfully imported findings
  - `createdVulnerabilityCount`: New findings created
  - `successCount`: Number of successful imports
  - `failureCount`: Number of failed imports
  - `failureReason`: Error message if status is `failed`
  - `estimatedDurationInSeconds`: Processing duration
- `errors`: Array of error messages (empty if successful)

#### Error Types

- `AssetNotFoundError`: Asset not found or doesn't belong to the company
- `AppNameRequiredError`: `app_name` is required when using `company_id` without `asset_id`
- `InvalidInputError`: Invalid input parameters or JSON format

## Examples

### cURL Example

```bash
curl -X POST https://api.convisoappsec.com/graphql \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: multipart/form-data" \
  -F "operations={\"query\":\"mutation($file: Upload!) { importMobsf(input: {file: $file, company_id: \\\"123\\\"}) { controlSyncStatus { id status } errors } }\",\"variables\":{\"file\":null}}" \
  -F "map={\"0\":[\"variables.file\"]}" \
  -F "0=@mobsf_report.json"
```

### JavaScript/TypeScript Example

```js
import { gql } from '@apollo/client';

const IMPORT_MOBSF = gql`
  mutation ImportMobsf($file: Upload!, $companyId: ID) {
    importMobsf(
      input: {
        file: $file
        company_id: $companyId
      }
    ) {
      controlSyncStatus {
        id
        status
        asset {
          id
          name
        }
      }
      errors
    }
  }
`;

// Usage with Apollo Client
const [importMobsf] = useMutation(IMPORT_MOBSF);

const handleImport = async (file, companyId) => {
  try {
    const result = await importMobsf({
      variables: {
        file,
        companyId
      }
    });
    
    console.log('Status:', result.data.importMobsf.controlSyncStatus);
  } catch (error) {
    console.error('Import failed:', error);
  }
};
```

## Troubleshooting

### Common Issues

#### "You need to provide the asset_id or company_id"

**Solution**: Provide at least one of `asset_id` or `company_id` in the mutation input.

#### "App name is required when company_id is provided without asset_id"

**Solution**: Ensure your MobSF JSON report contains the `app_name` field at the root level or within the `appsec` object.

#### "User does not have access to this asset"

**Solution**: Verify that:
- The user has proper permissions to access the asset
- The asset belongs to the specified company
- The user has the necessary role/permissions in Conviso Platform

#### "Invalid JSON file"

**Solution**: Ensure your MobSF report is valid JSON. Validate it using a JSON validator before importing.

#### "Asset not found"

**Solution**:
- Verify the `asset_id` is correct
- If using `company_id` only, ensure the `app_name` in the report matches an existing asset name, or ensure you have permissions to create new assets

### Status Monitoring

Monitor the import progress by querying the import status:

```graphql
query {
  controlSyncStatus(id: "status_id") {
    status
    externalVulnerabilityCount
    importedVulnerabilityCount
    createdVulnerabilityCount
    failureCount
    failureReason
  }
}
```

Status values:
- `pending`: Import is being processed
- `succeeded`: Import completed successfully
- `failed`: Import failed (check `failureReason` for details)

## Best Practices

1. Validate JSON Before Import: Always validate your MobSF JSON report before importing to catch format errors early
2. Monitor Import Status: Use the returned `controlSyncStatus` ID to monitor the import progress
3. Handle Errors Gracefully: Check the `errors` array in the response and handle errors appropriately
4. Use Asset IDs When Possible: If you know the asset ID, use it directly for faster processing
5. Batch Processing: For multiple reports, process them sequentially and monitor each import status
6. SBOM Data: Include SBOM data in your MobSF reports when available for comprehensive component tracking

## Support

If you have any questions or need help using the MobSF integration, please don't hesitate to contact our support team.

## Resources

By exploring our content, you'll find resources to help you to understand the benefits of the Conviso Platform integrations for Secure CI/CD Pipeline:

[![Discover Conviso Platform!](https://no-cache.hubspot.com/cta/default/5613826/interactive-125788977029.png)](https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKtcWzoFbzpyImNNQsXC9S54LjJuklwM39zNd7hvSoR%2FVTX%2FXjNdqdcIIDaZwGiNwYii5hXwRR06puch8xINMyL3EXxTMuSG8Le9if9juV3u%2F%2BX%2FCKsCZN1tLpW39gGnNpiLedq%2BrrfmYxgh8G%2BTcRBEWaKasQ%3D&webInteractiveContentId=125788977029&portalId=5613826)

