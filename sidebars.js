const sidebarSchema = require("./docs/tools/graphql/documentation/sidebar-schema")

module.exports = {
  docs: [
    'index',
    {
      type: 'doc',
      label: 'Start Here',
      id: 'start-here/start-here',
    },
    {
      type: "category",
      label: "How To",
      items: [
       // 'how to/assets_import',
        'how-to/assets_management',
        'how-to/bug_bounty',
        'how-to/email_notifications',
        'how-to/integration_policies',
        'how-to/projects_management',
        'how-to/requirements',
        'how-to/resources',
        'how-to/user_management',
        'how-to/vulnerabilities_management',
        'how-to/vulnerabilities_templates',
        'how-to/contributing',
        'how-to/generate-apikey'
      ],
    },
    {
      type: "category",
      label: "Tools",
      items: [
        'tools/api-overview',
        {
          type: "category",
          label: "GraphQL",
          items: [
            'tools/graphql/introduction',
            {
              type: "category",
              label: "References",
              items: sidebarSchema.schemaSidebar
            }
          ]
        },

        { 
          type: "category",
          label: "Conviso CLI",
          items: [
            'tools/conviso-cli/about-conviso-ast', // Adicionando a nova página aqui
            'tools/conviso-cli/installation',
            'tools/conviso-cli/ast',
            'tools/conviso-cli/security-gate',
            'tools/conviso-cli/assets',
            'tools/conviso-cli/sarif'
          ]
        },
        {
          type: "category",
          label: "Burp Extension",
          items: [
           // 'guides/code-review-strategies',
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
      ]
    },
    
    

    {
      type: "category",
      label: "Modules",
      items: [
        'modules/integrations/overview_integrations',
        {
          type: "category",
          label: "Integrations",
          items: [

            {
              type: "category",
              label: "Authentications/SSO",
              items: [

            'modules/integrations/adfs',
            'modules/integrations/azure-ad',
            'modules/integrations/google',
            'modules/integrations/ldap',
            'modules/integrations/saml'
              ]
            },

            

            {
              type: "category",
              label: "CI/CD",
              items: [
                'modules/integrations/aws-codebuild',
                'modules/integrations/azure-pipelines-cli',
                'modules/integrations/azure-pipelines-graph',
                'modules/integrations/bitbucket-pipelines',
                'modules/integrations/circleci',
                'modules/integrations/codefresh',
                'modules/integrations/github-actions',
                'modules/integrations/gitlab',
                'modules/integrations/jenkins',
                'modules/integrations/jenkins-single-pipeline'
              ]
            },

            {
              type: "category",
              label: "Container Security Platform",
              items: [
                'modules/integrations/aqua'
              ]
            },

            {
              type: "category",
              label: "Defect/Bug Tracking",
              items: [
                'modules/integrations/clickup',
                'modules/integrations/github',
                'modules/integrations/jira',
                'modules/integrations/trello'
              ]
            },
            {
              type: "category",
              label: "Data Analytics",
              items: [
                'modules/integrations/powerbi',
              ]
            },
            {
              type: "category",
              label: "SCA",
              items: [
                'modules/integrations/dependency-track',
                'modules/integrations/github-sca'
              ]
            },
            {
              type: "category",
              label: "Notifications",
              items: [
                'modules/integrations/slack'
              ]
            },
            {
              type: "category",
              label: "Scanners",
              items: [
                //'modules/integrations/amazon-inspector',
                'modules/integrations/dast',
                'modules/integrations/fortify'
                //'modules/integrations/nessus',
                //'modules/integrations/qualys',
                //'modules/integrations/sonarcloud',
                //'modules/integrations/sonarqube',
                //'modules/integrations/veracode'
              ]
            },
          ]
        },

        {
          type: "category",
          label: "Security Feed",
          items: [
          
          "modules/security-feed/overview"
          ]
          
        },
        {
          type: "category",
          label: "Project Management",
          items: [
            "modules/project/project"
          ]
        },
        {
          type: "category",
          label: "Asset Management",
          items: [
            "modules/asset_management/asset_management"
          ]
        },

        {
          type: "category",
          label: "Vulnerabilities",
          items: [
            "modules/vulnerabilities/vulnerabilities"
          ]
        },

        {
          type: "category",
          label: "People & Culture",
          items: [
            'people-and-culture/overview',
            'people-and-culture/add_user',
            'people-and-culture/solving-code-review'
            
          ],
        },
        {
          type: "category",
          label: "Secure by Design",
          items: [
            'secure-by-design/overview',
            'secure-by-design/threat-modeling'
          ],
        },

      ]
    },


    {
      type: "category",
      label: "Releases",
      items: [
        'releases/intro',
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
        'releases/release31'
       // 'releases/appsecflow305',
       // 'releases/appsecflow304',
        //'releases/appsecflow302'
      ],
    },
  ],
  ...sidebarSchema,
}
