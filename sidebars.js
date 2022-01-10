const sidebarSchema = require("./docs/api/graphql/documentation/sidebar-schema");

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
      CLI: ['cli/installation',
             'cli/authentication',
             'cli/sast',
             'cli/security-gate'
            ]
    },
    {Guides: ['guides/code-review-strategies'],
     Plugins:[],
    },
    {
      type: "category",
      label: "Integrations",
      items: [
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
                  'integrations/github',
                  'integrations/jira',
                  'integrations/redmine',
                  'integrations/servicenow',
                  'integrations/trello'
                 ]
        },
        // {
        //  type: "category",
        //  label: "SCA",
        //  items: [
        //          'integrations/dependency-track'
        //         ]
        // },
        {
          type: "category",
          label: "Notifications",
          items: [          
            'integrations/slack'
                 ]
        }, 
        {
          type: "category",
          label: "Scanners",
          items: [
                  'integrations/sonarcloud',
                 ]
        },
            ]
    },
    {
      Onpremises: ['onpremises/overview', 'onpremises/installation', 'onpremises/configuration'],
      Plugins: [],
      
    },
  ],
  ...require("./docs/api/graphql/documentation/sidebar-schema"),
};
