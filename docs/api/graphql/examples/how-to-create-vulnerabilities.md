---
id: how-to-create-vulnerabilities
title: How to Create Vulnerabilities
sidebar_label: How to Create Vulnerabilities
description: Here you will find how to create vulnerabilities
keywords: [Create Issues, Create Vulnerabilities, API, Vulnerabilities, Issues, GraphQL, Findings]
---

## How to Create a SAST Vulnerability

### GraphQL Query

The following GraphQL query can be used to create a SAST vulnerability:

```graphql
mutation {
  createOrUpdateSastFinding(
    input: {
      assetId: <YOUR_ASSET_ID>
      title: "AWS Access Key"
      description: "An AWS access keywas found hardcoded in the Terraform configuration file. Hardcoding sensitive credentials in source code poses a significant security risk, as it can be exposed through code repositories or logs. This allows unauthorized access to AWS services, potentially leading to data breaches, resource abuse, or compliance violations. It is recommended to remove the credentials from the code and leverage environment variables or secure secrets management solutions such as AWS Secrets Manager or HashiCorp Vault to securely handle sensitive information."
      codeSnippet: "}\n\nprovider \"aws\" {\n  alias      = \"plain_text_access_keys_provider\"\n  region     = \"us-west-1\"\n  access_key = \"AKIAIOSFODNN7EXAMPLE\"\n  secret_key = \"wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\"\n}\n\nterraform {\n  backend \"s3\" {\n    encrypt = true\n"
      vulnerableLine: 10
      firstLine: 5
      fileName: "terraform/aws/providers.tf"
      severity: MEDIUM
    }
  ) {
    clientMutationId
    issue {
      asset {
        name
      }
      id
    }
  }
}
```

### Response Example

```json
{
  "data": {
    "createOrUpdateSastFinding": {
      "clientMutationId": null,
      "issue": {
        "asset": {
          "name": "My-Vulnerable-App"
        },
        "id": "3395817"
      }
    }
  }
}
```

## How to Create an SCA Vulnerability

### GraphQL Query

The following GraphQL query can be used to create an SCA vulnerability:

```graphql
mutation {
  createOrUpdateScaFinding(
    input: {
      assetId: <ASSET_ID>
      title: "Sequelize vulnerable to SQL Injection via replacements"
      description: "### Impact\n\nThe SQL injection exploit is related to replacements. Here is such an example: \n\nIn the following query, some parameters are passed through replacements, and some are passed directly through the `where` option.\n\n```typescript\nUser.findAll({\n  where: or(\n    literal('soundex(\"firstName\") = soundex(:firstName)'),\n    { lastName: lastName },\n  ),\n  replacements: { firstName },\n})\n```\n\nThis is a very legitimate use case, but this query was vulnerable to SQL injection due to how Sequelize processed the query: Sequelize built a first query using the `where` option, then passed it over to `sequelize.query` which parsed the resulting SQL to inject all `:replacements`.\n\nIf the user passed values such as\n\n```json\n{\n  \"firstName\": \"OR true; DROP TABLE users;\",\n  \"lastName\": \":firstName\"\n}\n```\n\nSequelize would first generate this query:\n\n```sql\nSELECT * FROM users WHERE soundex(\"firstName\") = soundex(:firstName) OR \"lastName\" = ':firstName'\n```\n\nThen would inject replacements in it, which resulted in this:\n\n```sql\nSELECT * FROM users WHERE soundex(\"firstName\") = soundex('OR true; DROP TABLE users;') OR \"lastName\" = ''OR true; DROP TABLE users;''\n```\n\nAs you can see this resulted in arbitrary user-provided SQL being executed.\n\n### Patches\n\nThe issue was fixed in Sequelize 6.19.1\n\n### Workarounds\n\nDo not use the `replacements` and the `where` option in the same query if you are not using Sequelize \u003e= 6.19.1 \n\n### References\n\nSee this thread for more information: https://github.com/sequelize/sequelize/issues/14519\n\nSnyk: https://security.snyk.io/vuln/SNYK-JS-SEQUELIZE-2932027",
      solution: "Update to the latest stable version or apply patches."
      severity: CRITICAL
      package: "sequelize"
      affectedVersion: "6.3.5"
      patchedVersion: "6.19.1"
      fileName: "package-lock.json"
    }
  ) {
    issue {
      asset {
        name
      }
      id
    }
  }
}
```

### Response Example

```json
{
  "data": {
    "createOrUpdateScaFinding": {
      "issue": {
        "asset": {
          "name": "My-Vulnerable-App"
        },
        "id": "3396555"
      }
    }
  }
}
```