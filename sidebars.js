const sidebarSchema = require("./docs/api/sidebar-schema");

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
      label: "Integrations",
      items: [
        {
          type: "category",
          label: "CI/CD",
          items: [
                //  'integrations/azure-devops',
                'integrations/code-review-strategies',
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
          label: "SCA",
          items: [
                  'integrations/dependency-track'
                  ]
        },
        {
          type: "category",
          label: "Scanners",
          items: [
                  'integrations/sonarcloud',
                  ]
        },
        {
          type: "category",
          label: "Defect/Bug Tracking",
          items: [
                  'integrations/jira',
                  ]
        },
      ]
    },
    {
      Onpremises: ['onpremises/overview', 'onpremises/installation', 'onpremises/configuration'],
      Plugins: [],
      
    },
    {
      GraphQL: sidebarSchema.schemaSidebar,
      Plugins: [],
      
    },
  ],
  ...require("./docs/api/sidebar-schema"),
};
