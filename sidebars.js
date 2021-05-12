module.exports = {
  docs: [
    'index',
    {
      CLI: ['cli/installation', 'cli/usage']
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
                //  'integrations/circleci',
                  'integrations/github-actions',
                //  'integrations/gitlab',
                //  'integrations/jenkins',
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
  ...require("./docs/api/sidebar-schema"),
};
