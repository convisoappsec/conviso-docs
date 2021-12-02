module.exports = {
  schemaSidebar: [
    { type: "doc", id: "api/graphql/documentation/schema" },
    {
      type: "category",
      label: "Queries",
      items: [
        "api/graphql/documentation/queries/allocated-projects",
        "api/graphql/documentation/queries/assets-by-company-id",
        "api/graphql/documentation/queries/companies",
        "api/graphql/documentation/queries/company",
        "api/graphql/documentation/queries/contact",
        "api/graphql/documentation/queries/contract",
        "api/graphql/documentation/queries/contracts",
        "api/graphql/documentation/queries/credentials-by-company-id",
        "api/graphql/documentation/queries/deploys-by-company-id",
        "api/graphql/documentation/queries/deploys-by-project-id",
        "api/graphql/documentation/queries/findings-by-commit",
        "api/graphql/documentation/queries/notifications",
        "api/graphql/documentation/queries/pending-deploys",
        "api/graphql/documentation/queries/portal-user-profile",
        "api/graphql/documentation/queries/project",
        "api/graphql/documentation/queries/projects",
        "api/graphql/documentation/queries/service-type",
        "api/graphql/documentation/queries/service-types",
        "api/graphql/documentation/queries/vulnerabilities",
        "api/graphql/documentation/queries/vulnerabilities-templates-by-company-id",
        "api/graphql/documentation/queries/vulnerability",
        "api/graphql/documentation/queries/web-vulnerabilities",
      ],
    },
    {
      type: "category",
      label: "Mutations",
      items: [
        "api/graphql/documentation/mutations/create-code-review-vulnerability",
        "api/graphql/documentation/mutations/create-contract",
        "api/graphql/documentation/mutations/create-credential",
        "api/graphql/documentation/mutations/create-finding-dast",
        "api/graphql/documentation/mutations/create-notification",
        "api/graphql/documentation/mutations/create-other-vulnerability",
        "api/graphql/documentation/mutations/create-web-vulnerability",
        "api/graphql/documentation/mutations/delete-contact",
        "api/graphql/documentation/mutations/delete-contract",
        "api/graphql/documentation/mutations/update-activity-status-to-finish",
        "api/graphql/documentation/mutations/update-activity-status-to-not-apply",
        "api/graphql/documentation/mutations/update-activity-status-to-restart",
        "api/graphql/documentation/mutations/update-activity-status-to-start",
        "api/graphql/documentation/mutations/update-contract",
      ],
    },
    {
      type: "category",
      label: "Directives",
      items: [
        "api/graphql/documentation/directives/deprecated",
        "api/graphql/documentation/directives/include",
        "api/graphql/documentation/directives/skip",
        "api/graphql/documentation/directives/specified-by",
      ],
    },
    {
      type: "category",
      label: "Objects",
      items: [
        "api/graphql/documentation/objects/activity",
        "api/graphql/documentation/objects/analysis-history",
        "api/graphql/documentation/objects/analyst-allocations",
        "api/graphql/documentation/objects/asset",
        "api/graphql/documentation/objects/asset-collection",
        "api/graphql/documentation/objects/collection-metadata",
        "api/graphql/documentation/objects/company",
        "api/graphql/documentation/objects/company-collection",
        "api/graphql/documentation/objects/contact",
        "api/graphql/documentation/objects/contract",
        "api/graphql/documentation/objects/contract-collection",
        "api/graphql/documentation/objects/contract-meta",
        "api/graphql/documentation/objects/contract-service",
        "api/graphql/documentation/objects/create-code-review-vulnerability-payload",
        "api/graphql/documentation/objects/create-contract-payload",
        "api/graphql/documentation/objects/create-credential-payload",
        "api/graphql/documentation/objects/create-finding-dast-payload",
        "api/graphql/documentation/objects/create-notification-payload",
        "api/graphql/documentation/objects/create-other-vulnerability-payload",
        "api/graphql/documentation/objects/create-web-vulnerability-payload",
        "api/graphql/documentation/objects/credential",
        "api/graphql/documentation/objects/credential-collection",
        "api/graphql/documentation/objects/delete-contact-payload",
        "api/graphql/documentation/objects/delete-contract-payload",
        "api/graphql/documentation/objects/deploy",
        "api/graphql/documentation/objects/deploy-collection",
        "api/graphql/documentation/objects/finding",
        "api/graphql/documentation/objects/finding-collection",
        "api/graphql/documentation/objects/notification",
        "api/graphql/documentation/objects/notification-collection",
        "api/graphql/documentation/objects/occurrence-meta",
        "api/graphql/documentation/objects/playbook",
        "api/graphql/documentation/objects/portal-user",
        "api/graphql/documentation/objects/project",
        "api/graphql/documentation/objects/project-collection",
        "api/graphql/documentation/objects/project-meta",
        "api/graphql/documentation/objects/project-type",
        "api/graphql/documentation/objects/service-type",
        "api/graphql/documentation/objects/service-type-collection",
        "api/graphql/documentation/objects/tag",
        "api/graphql/documentation/objects/team",
        "api/graphql/documentation/objects/update-activity-status-to-finish-payload",
        "api/graphql/documentation/objects/update-activity-status-to-not-apply-payload",
        "api/graphql/documentation/objects/update-activity-status-to-restart-payload",
        "api/graphql/documentation/objects/update-activity-status-to-start-payload",
        "api/graphql/documentation/objects/update-contract-payload",
        "api/graphql/documentation/objects/vulnerability",
        "api/graphql/documentation/objects/vulnerability-archive",
        "api/graphql/documentation/objects/vulnerability-collection",
        "api/graphql/documentation/objects/vulnerability-history",
        "api/graphql/documentation/objects/vulnerability-template",
        "api/graphql/documentation/objects/vulnerability-template-collection",
      ],
    },
    {
      type: "category",
      label: "Enums",
      items: [
        "api/graphql/documentation/enums/order-occurrences-params",
        "api/graphql/documentation/enums/order-params",
        "api/graphql/documentation/enums/order-projects-params",
      ],
    },
    {
      type: "category",
      label: "Inputs",
      items: [
        "api/graphql/documentation/inputs/company-search",
        "api/graphql/documentation/inputs/contact-type-input",
        "api/graphql/documentation/inputs/contract-search",
        "api/graphql/documentation/inputs/create-code-review-vulnerability-input",
        "api/graphql/documentation/inputs/create-contract-input",
        "api/graphql/documentation/inputs/create-credential-input",
        "api/graphql/documentation/inputs/create-finding-dast-input",
        "api/graphql/documentation/inputs/create-notification-input",
        "api/graphql/documentation/inputs/create-other-vulnerability-input",
        "api/graphql/documentation/inputs/create-web-vulnerability-input",
        "api/graphql/documentation/inputs/delete-contact-input",
        "api/graphql/documentation/inputs/delete-contract-input",
        "api/graphql/documentation/inputs/issue-type-dast-input",
        "api/graphql/documentation/inputs/project-search",
        "api/graphql/documentation/inputs/service-type-input",
        "api/graphql/documentation/inputs/service-type-search",
        "api/graphql/documentation/inputs/update-activity-status-to-finish-input",
        "api/graphql/documentation/inputs/update-activity-status-to-not-apply-input",
        "api/graphql/documentation/inputs/update-activity-status-to-restart-input",
        "api/graphql/documentation/inputs/update-activity-status-to-start-input",
        "api/graphql/documentation/inputs/update-contract-input",
        "api/graphql/documentation/inputs/vulnerability-search",
      ],
    },
    {
      type: "category",
      label: "Scalars",
      items: [
        "api/graphql/documentation/scalars/boolean",
        "api/graphql/documentation/scalars/id",
        "api/graphql/documentation/scalars/int",
        "api/graphql/documentation/scalars/iso-8601-date",
        "api/graphql/documentation/scalars/iso-8601-date-time",
        "api/graphql/documentation/scalars/string",
        "api/graphql/documentation/scalars/upload",
      ],
    },
  ],
};