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
      CLI: [
            'cli/installation',
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
        //{
        //  type: "category",
        //  label: "SCA",
        //  items: [
        //          'integrations/dependency-track',
        //          'integrations/github-sca'
        //         ]
        // }, 
        {
          type: "category",
          label: "Scanners",
          items: [
                  'integrations/amazon-inspector',
                  //'integrations/checkmarx',
                  'integrations/dast',
                  'integrations/fortify',
                  //'integrations/nessus',
                  'integrations/qualys',
                  'integrations/sonarcloud',
                  'integrations/sonarqube',
                  //'integrations/veracode'           
                  ]
        },
      ]
    },
    {
      Onpremises: [ 
                    'onpremises/overview', 
                    'onpremises/installation',
                    'onpremises/configuration'
                  ],
      Plugins: [],
      
    },
    {
      Releases: [
                  'releases/release32',
                  'releases/release31',
                  'releases/appsecflow305',
                  'releases/appsecflow304',
                  'releases/appsecflow302',
                ],
      Plugins: [],
    },
    {
      Training: [
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
      Plugins: [],
    },
  ],
  ...require("./docs/api/graphql/documentation/sidebar-schema"),
};
