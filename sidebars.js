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
      label: "API",
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
        }
      ]
    },
    {
      type: "category",
      label: "Resources",
      items: [ 
        {
          type: "category",
          label: "CLI",
          items: [
            'tools/cli/installation',
            'tools/cli/ast',
            'tools/cli/security-gate',
            'tools/cli/assets',
            'tools/cli/findings',
          ]
        },
        {
          type: "category",
          label: "Guides",
          items: [
            'tools/guides/code-review-strategies',
            'tools/guides/integrate-asset-with-graphql',
            {
              type: "category",
              label: "Burp Extension",
              items: [
                'tools/guides/burp-extension/home',
                'tools/guides/burp-extension/add-extension-to-burp',
                'tools/guides/burp-extension/define-endpoint',
                'tools/guides/burp-extension/test-api-key',
                'tools/guides/burp-extension/issues-tab',
                'tools/guides/burp-extension/auto-fill',
                'tools/guides/burp-extension/as-new-issue',
                'tools/guides/burp-extension/as-new-issue-with-evidence',
                'tools/guides/burp-extension/as-evidence',
                'tools/guides/burp-extension/requirements-tabs',
                'tools/guides/burp-extension/finish-activity',
                'tools/guides/burp-extension/not-applicable-activity',
                'tools/guides/burp-extension/not-started',
                'tools/guides/burp-extension/restart-activity',
                'tools/guides/burp-extension/not-applicable',
                'tools/guides/burp-extension/working-analysis',
                'tools/guides/burp-extension/reload-working-analyses'
              ]
            }
          ]
        },
        {
          type: 'doc',
          label: 'Scan Application with Conviso',
          id: 'tools/conviso-ast/conviso-ast'
        },
        {
          type: 'doc',
          label: 'Scan Application with Conviso DAST',
          id: 'tools/conviso-dast/conviso-dast'
        }
      ]
    },
    {
      type: "category",
      label: "Modules",
      items: [
        'modules/asset-management',
        'modules/attachments',
        'modules/credentials',
        'modules/dashboard',
        'modules/policies',
        'modules/projects',
        'modules/requirements',
        'modules/security-expert',
        'modules/security-feed',
        'modules/threat-modeling',
        'modules/user-management',
        'modules/vulnerabilities'
      ],
    },
    {
      type: "category",
      label: "AppSec Starter Training",
      items: [
        'training/introduction',
        'training/lesson01',
        'training/lesson02',
        'training/lesson03',
        'training/lesson04',
        'training/lesson05',
        'training/lesson06',
        'training/lesson07',
        'training/lesson08',
        'training/lesson09',
        'training/lesson10',
        'training/lesson11',
        'training/lesson12',
        'training/lesson13',
        'training/lesson14',
        'training/lesson15'
      ],
    },
    {
      type: "category",
      label: "Releases",
      items: [
        'releases/intro',
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
  ...sidebarSchema,
}
