/**
 * Master catalogue for business context used by generated GraphQL examples.
 *
 * The GraphQL schema defines an operation's shape, but not every scope rule
 * enforced by the API. This catalogue records the few rules that are only
 * observable in a supported client. Keep each entry traceable to conviso-cli
 * so it can be reviewed whenever that client changes.
 *
 * Do not read ../conviso-cli at documentation build time: the deployment
 * receives this repository only. The CLI is the source used to update this
 * versioned catalogue, while this file is the deployable source of truth.
 */
export const operationContexts = {
  projects: {
    source: {
      repository: 'conviso-cli',
      file: 'src/conviso/commands/projects.py',
      command: 'projects list --company-id <company_id>',
    },
    prerequisite:
      'Replace <company_id> with the company scope ID. The official CLI sends this value as params.scopeIdEq when listing projects.',
    variables: {
      page: 1,
      limit: 20,
      params: {
        scopeIdEq: '<company_id>',
      },
      descending: false,
    },
  },

  allocatedAnalyses: {
    source: {
      repository: 'conviso-cli',
      file: 'Not exposed by a CLI list command',
    },
    prerequisite:
      'The API key must belong to an analyst allocated to at least one analysis.',
    variables: {
      page: 1,
      limit: 20,
    },
  },
};
