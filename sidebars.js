const sidebarSchema = require("./docs/api/graphql/documentation/sidebar-schema");

module.exports = {
  docs: [
    'index',
    {
      CLI: ['cli/installation',
             'cli/authentication',
             'cli/sast',
             'cli/security-gate'
            ]
    },
    {
      type: "category",
      label: "API",
      items: [
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
      label: "Integrations",
      items: [
        {
          type: "category",
          label: "CI/CD",
          items: [
                //  'integrations/azure-devops',
                'integrations/aws-codebuild',
                'integrations/azure-pipelines-cli',
                'integrations/azure-pipelines-graph',
                'integrations/bitbucket-pipelines',
                'integrations/circleci',
                'integrations/codefresh',
                'integrations/dependency-track',
                'integrations/github-actions',
                'integrations/gitlab',
                'integrations/jenkins',
                'integrations/jenkins-single-pipeline'                  
                  ]
        },
        {
          type: "category",
          label: "Scanners",
          items: [
                  'integrations/sonarcloud',
                  ]
        },
      /*  {
          type: "category",
          label: "Defect/Bug Tracking",
          items: [
                  'integrations/jira',
                  ]
        },
      */
      ]
    },
    {
      Onpremises: ['onpremises/overview', 'onpremises/installation', 'onpremises/configuration'],
      Plugins: [],
      
    },
  ],
  ...require("./docs/api/graphql/documentation/sidebar-schema"),
};
