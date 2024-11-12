const sidebarSchema = require("./docs/api/graphql/documentation/sidebar-schema")

module.exports = {
  docs: [
    'index',
    {
      type: 'doc',
      label: 'Quickstart',
      id: 'quickstart/quickstart',
    },
    {
      type: "category",
      label: "Security Suite",
      items: [
        {
          type: 'doc',
          label: 'Scan Application with Conviso',
          id: 'security-suite/conviso-ast/conviso-ast'
        },
        {
          type: 'doc',
          label: 'Scan Application with Conviso DAST',
          id: 'security-suite/conviso-dast/conviso-dast'
        },
        {
          type: 'doc',
          label: 'Software Bill of Materials (SBOM)',
          id: 'security-suite/conviso-sbom/conviso-sbom'
        }, 
        {
          type: "category",
          label: "Guides",
          items: [
            'security-suite/guides/code-review-strategies',
            'security-suite/guides/integrate-asset-with-graphql',
            {
              type: "category",
              label: "Burp Extension",
              items: [
                'security-suite/guides/burp-extension/home',
                'security-suite/guides/burp-extension/add-extension-to-burp',
                'security-suite/guides/burp-extension/define-endpoint',
                'security-suite/guides/burp-extension/test-api-key',
                'security-suite/guides/burp-extension/issues-tab',
                'security-suite/guides/burp-extension/auto-fill',
                'security-suite/guides/burp-extension/as-new-issue',
                'security-suite/guides/burp-extension/as-new-issue-with-evidence',
                'security-suite/guides/burp-extension/as-evidence',
                'security-suite/guides/burp-extension/requirements-tabs',
                'security-suite/guides/burp-extension/finish-activity',
                'security-suite/guides/burp-extension/not-applicable-activity',
                'security-suite/guides/burp-extension/not-started',
                'security-suite/guides/burp-extension/restart-activity',
                'security-suite/guides/burp-extension/not-applicable',
                'security-suite/guides/burp-extension/working-analysis',
                'security-suite/guides/burp-extension/reload-working-analyses'
              ]
            }
          ]
        }
      ]
    },
    {
      type: "category",
      label: "CLI",
      items: [
          'cli/installation',
          'cli/ast',
          'cli/security-gate',
          'cli/assets',
          'cli/findings'
      ]
    },
    {
      type: "category",
      label: "Integrations",
      items: [
        'integrations/integrations_intro',
        {
          type: "category",
          label: "Authentication/SSO",
          items: [
            'integrations/adfs',
            'integrations/google',
            'integrations/ldap',
            'integrations/microsoft-entra-id',
            'integrations/saml'
          ]
        },
        {
          type: "category",
          label: "CI/CD",
          items: [
            'integrations/aws-codebuild',
            'integrations/azure-pipelines-cli',
            'integrations/azure-pipelines-graph',
            'integrations/bitbucket-pipelines',
            'integrations/circleci',
            'integrations/codefresh',
            'integrations/github-actions',
            'integrations/gitlab',
            'integrations/jenkins',
            'integrations/jenkins-single-pipeline'
          ]
        },
        {
          type: "category",
          label: "Data Analytics",
          items: [
            'integrations/datastudio',
            'integrations/powerbi'
          ]
        },
        {
          type: "category",
          label: "Defect/Bug Tracking",
          items: [
            'integrations/azure-boards',
            'integrations/businessmap',
            'integrations/clickup',
            'integrations/jira'
          ]
        },
        {
          type: "category",
          label: "Notifications",
          items: [
            'integrations/microsoft-teams',
            'integrations/slack'
          ]
        },
        {
          type: "category",
          label: "Scanners",
          items: [
            'integrations/checkmarx',
            'integrations/dependency-track',
            'integrations/fortify',
            'integrations/sonarcloud',
            'integrations/sonarqube',
          ]
        },
      ]
    },
    {
      type: "category",
      label: "Platform",
      items: [
        'platform/asset-management',
        'platform/attachments',
        'platform/credentials',
        'platform/dashboard',
        'platform/policies',
        'platform/projects',
        'platform/requirements',
        'platform/security-expert',
        'platform/security-feed',
        'platform/threat-modeling',
        'platform/user-management',
        'platform/vulnerabilities'
      ],
    },
    {
      type: "category",
      label: "Releases 🚀",
      items: [
        'releases/intro',
        'releases/release4.9',
        'releases/release4.8',
        'releases/release4.7',
        'releases/release4.6',
        'releases/release4.5',
        'releases/release4.4',
        'releases/release4.3',
        'releases/release4.2',
        'releases/release4.1',
        'releases/release4.0',
        'releases/release3.9',
        'releases/release3.8',
        'releases/release3.7',
        'releases/release3.6',
        'releases/release35',
        'releases/release34',
        'releases/release33',
        'releases/release32',
        'releases/release31',
        'releases/appsecflow305',
        'releases/appsecflow304',
        'releases/appsecflow302'
      ],
    }
  ],
  apiSidebar: [
    {
      type: "category",
      label: "API",
      collapsible: false,
      collapsed: false,
      items: [
        'api/api-overview',
        'api/generate-apikey',
        {
          type: "category",
          label: "GraphQL",
          items: [
            'api/graphql/introduction',
            'api/graphql/limit',
            {
              type: "category",
              label: "References",
              items: sidebarSchema.schemaSidebar
            }
          ]
        },
      ]
    },
  ],
  ...sidebarSchema,
}
