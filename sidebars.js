const sidebarSchema = require("./docs/api/graphql/documentation/sidebar-schema")

module.exports = {
  docs: [
    'index',
    {
      type: "category",
      label: "API",
      items: [
        'api/generate-apikey',
        {
          type: "category",
          label: "GraphQL",
          items: [
            'api/graphql/introduction',
            {
              type: "category",
              label: "References",
              items: sidebarSchema.schemaSidebar
            }
          ]
        },
        'api/rest/index'
      ]
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
      CLI: [
        'cli/installation',
        'cli/authentication',
        'cli/ast',
        'cli/sast',
        'cli/security-gate'
      ]
    },
    {
      type: "category",
      label: "Guides",
      items: [
        'guides/code-review-strategies',
        {
          type: "category",
          label: "Burp Extension",
          items: [
            'guides/burp-extension/home',
            'guides/burp-extension/add-extension-to-burp',
            'guides/burp-extension/define-endpoint',
            'guides/burp-extension/test-api-key',
            'guides/burp-extension/issues-tab',
            'guides/burp-extension/auto-fill',
            'guides/burp-extension/as-new-issue',
            'guides/burp-extension/as-new-issue-with-evidence',
            'guides/burp-extension/as-evidence',
            'guides/burp-extension/requirements-tabs',
            'guides/burp-extension/finish-activity',
            'guides/burp-extension/not-applicable-activity',
            'guides/burp-extension/not-started',
            'guides/burp-extension/restart-activity',
            'guides/burp-extension/not-applicable',
            'guides/burp-extension/working-analysis',
            'guides/burp-extension/reload-working-analyses'
          ]
        },

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
            'integrations/azure-ad',
            'integrations/google',
            'integrations/ldap',
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
          label: "Container Security Platform",
          items: [
            'integrations/aqua'
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
            'integrations/bitbucket',
            'integrations/clickup',
            'integrations/github',
            'integrations/jira',
            'integrations/redmine',
            'integrations/servicenow',
            'integrations/trello'
          ]
        },
        {
          type: "category",
          label: "Notifications",
          items: [
            'integrations/slack'
          ]
        },
        {
          type: "category",
          label: "SCA",
          items: [
            'integrations/dependency-track',
            'integrations/github-sca'
          ]
        },
        {
          type: "category",
          label: "Scanners",
          items: [
            'integrations/amazon-inspector',
            'integrations/checkmarx',
            'integrations/dast',
            'integrations/fortify',
            'integrations/nessus',
            'integrations/qualys',
            'integrations/sonarcloud',
            'integrations/sonarqube',
            'integrations/veracode'
          ]
        },
      ]
    },
    {
      type: "category",
      label: "Onpremises",
      items: [
        'onpremises/overview',
        //'onpremises/installation',
        //'onpremises/configuration'
      ],
    },
    {
      type: "category",
      label: "Releases",
      items: [
        'releases/intro',
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
    },
    {
      type: "category",
      label: "User Manual",
      items: [
        'general/assets_import',
        'general/assets_management',
        'general/bug_bounty',
        'general/email_notifications',
        'general/estimate',
        'general/integration_policies',
        'general/projects_management',
        'general/requirements',
        'general/resources',
        'general/user_management',
        'general/vulnerabilities_management',
        'general/vulnerabilities_templates'
      ],
    },
  ],
  ...require("./docs/api/graphql/documentation/sidebar-schema"),
}
