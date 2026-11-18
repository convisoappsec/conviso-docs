/**
 * Curated navigation for the GraphQL API.
 *
 * The GraphQL schema remains the source of truth for fields, arguments and
 * types. This catalogue only supplies product context: which operations form
 * a useful customer workflow and which domain should own the remaining
 * operations in the generated reference.
 *
 * Keep `primaryOperations` intentionally short. They are the operations that
 * will become the guided examples for a resource. `matches` classifies the
 * rest of the schema so every operation remains discoverable in the complete
 * reference. An operation may belong to more than one guide when that is
 * helpful (for example, a project-related issue operation).
 */
export const apiResourceCatalog = [
  {
    id: 'projects',
    title: 'Projects',
    description: 'Create, find, organise and track security projects.',
    prerequisites: ['company_id'],
    primaryOperations: [
      'projects',
      'project',
      'createProject',
      'updateProject',
      'updateProjectStatus',
    ],
    guideOperations: [
      {
        operation: 'projects',
        type: 'query',
        title: 'List projects',
        description: 'Start here to find the project ID within a company.',
      },
      {
        operation: 'project',
        type: 'query',
        title: 'Get a project',
        description: 'Retrieve the fields needed for a single project.',
      },
      {
        operation: 'createProject',
        type: 'mutation',
        title: 'Create a project',
        description: 'Create a new project after selecting its company scope.',
      },
      {
        operation: 'updateProject',
        type: 'mutation',
        title: 'Update a project',
        description: 'Change project information with its ID.',
      },
      {
        operation: 'updateProjectStatus',
        type: 'mutation',
        title: 'Update project status',
        description: 'Move a project through its workflow without changing unrelated data.',
      },
    ],
    matches: [/^projects?/, /^project[A-Z]/, /^createProject/, /^updateProject/, /^bulk.*Project/],
  },
  {
    id: 'assets-and-applications',
    title: 'Assets and applications',
    description: 'Manage the applications, assets, repositories and branches in scope.',
    prerequisites: ['company_id'],
    primaryOperations: ['applications', 'assets', 'asset', 'createAsset', 'updateAsset', 'archiveAssets'],
    guideOperations: [
      {
        operation: 'applications',
        type: 'query',
        title: 'List applications',
        description: 'Find the application that contains the assets you want to manage.',
      },
      {
        operation: 'assets',
        type: 'query',
        title: 'List assets',
        description: 'Filter the asset inventory and retain the asset ID for later actions.',
      },
      {
        operation: 'asset',
        type: 'query',
        title: 'Get an asset',
        description: 'Inspect a single asset before making a change.',
      },
      {
        operation: 'createAsset',
        type: 'mutation',
        title: 'Create an asset',
        description: 'Add an asset to the selected application and company scope.',
      },
      {
        operation: 'updateAsset',
        type: 'mutation',
        title: 'Update an asset',
        description: 'Change an existing asset using the ID returned by a query.',
      },
      {
        operation: 'archiveAssets',
        type: 'mutation',
        title: 'Archive assets',
        description: 'Remove assets from active use while retaining their history.',
      },
    ],
    matches: [
      /^(applications?|assets?|branches?|repositories?)/,
      /^(create|update|delete|archive|unarchive|link|unlink|split|promote|merge|change|sync|import|remove).*Asset/,
      /^(create|update|delete|remove).*Application/,
      /^(create|update|delete|rename|change).*Branch/,
    ],
  },
  {
    id: 'vulnerabilities-and-findings',
    title: 'Vulnerabilities and findings',
    description: 'Find, triage, assign and remediate vulnerabilities.',
    prerequisites: ['company_id'],
    primaryOperations: ['issues', 'issue', 'changeIssueStatus', 'updateIssueAssignee', 'bulkChangeIssueStatus'],
    guideOperations: [
      {
        operation: 'issues',
        type: 'query',
        title: 'List vulnerabilities',
        description: 'Filter the vulnerability backlog and identify the issue to act on.',
      },
      {
        operation: 'issue',
        type: 'query',
        title: 'Get vulnerability details',
        description: 'Inspect a single issue before assigning, triaging or changing its status.',
      },
      {
        operation: 'updateIssueAssignee',
        type: 'mutation',
        title: 'Assign an owner',
        description: 'Set the person responsible for the vulnerability.',
      },
      {
        operation: 'changeIssueStatus',
        type: 'mutation',
        title: 'Change status',
        description: 'Move one vulnerability through the remediation workflow.',
      },
      {
        operation: 'bulkChangeIssueStatus',
        type: 'mutation',
        title: 'Change status in bulk',
        description: 'Apply the same workflow transition to several vulnerabilities.',
      },
    ],
    matches: [
      /^(issues?|findings?|vulnerabilit|cves|cwes|capecs)/i,
      /^(change|bulkChange|bulkDelete|mark|increase|update).*Issue/,
      /^(create|update|delete|batch).*Finding/,
      /^(create|update|delete).*Vulnerabilit/,
      /^syncVulnerability/,
    ],
  },
  {
    id: 'scans-and-scanners',
    title: 'Scans and scanner configuration',
    description: 'Configure scan sources, start runs and inspect their results.',
    prerequisites: ['company_id'],
    primaryOperations: ['scanConfigs', 'scanConfig', 'createScanRun', 'updateScanRun', 'triggerAstScan'],
    matches: [
      /^(scan|scanner|ast|dast|sbom|pullRequestScan|importedScan)/,
      /^(create|update|delete|trigger|start|retry|generate|import).*?(Scan|Scanner|Ast|Dast|Sbom)/,
      /^logAstError/,
    ],
  },
  {
    id: 'pentests',
    title: 'Pentests',
    description: 'Create, run and review pentest executions and artifacts.',
    prerequisites: ['project_id'],
    primaryOperations: ['pentestExecution', 'pentestArtifacts', 'createPentestExecution', 'createPentestArtifact', 'submitPentestRetestResult'],
    matches: [/^pentest/i, /^(create|update|delete|cancel|control|decide|ingest|submit|upsert).*Pentest/],
  },
  {
    id: 'requirements-and-threat-modeling',
    title: 'Requirements and threat modeling',
    description: 'Manage requirements, synchronisation and threat-model artifacts.',
    prerequisites: ['project_id'],
    primaryOperations: ['requirements', 'requirement', 'createOrUpdateRequirement', 'projectRequirements', 'createThreatModelArtifact'],
    matches: [/^(requirements?|requirementSync|projectRequirement|threatModel)/, /^(create|update|delete|remove|sync).*?(Requirement|ThreatModel)/],
  },
  {
    id: 'integrations',
    title: 'Integrations',
    description: 'Connect and operate source control, defect tracker and scanner integrations.',
    prerequisites: ['company_id'],
    primaryOperations: ['integrations', 'integration', 'createOrUpdateGithubIntegration', 'syncIntegration', 'deleteIntegration'],
    matches: [
      /^(integrations?|integration|defectTracker|mappedFields?|externalProjects?)/,
      /^(github|gitlab|bitbucket|azure|jira|asana|clickup|linear|businessmap|checkmarx|fortify|freshdesk|microsoftTeams|nango|saltSecurity|servicenow|snyk|sonar|tenable|veracode|zendesk)/,
      /^(create|update|delete|connect|initialize|load|check|sync|import).*?(Integration|Configuration|Oauth)/,
    ],
  },
  {
    id: 'tickets',
    title: 'Tickets and defect tracking',
    description: 'Create, update and collaborate on remediation tickets.',
    prerequisites: ['company_id'],
    primaryOperations: ['tickets', 'ticket', 'createTicket', 'addTicketMessage', 'bulkDeleteTickets'],
    matches: [/^tickets?/, /^(create|update|delete|bulkDelete|add|remove|toggle).*Ticket/],
  },
  {
    id: 'governance-and-risk',
    title: 'Governance, risk and security gates',
    description: 'Configure policies, risk scoring and security-gate controls.',
    prerequisites: ['company_id'],
    primaryOperations: ['riskScorePolicies', 'createRiskScorePolicy', 'securityGateExecutions', 'createOrUpdateSecurityGateConfiguration', 'policyControls'],
    matches: [/^(risk|securityGate|policy|guardrail)/i, /^(create|update|delete|upsert).*?(Risk|SecurityGate|Policy)/],
  },
  {
    id: 'dashboards-and-reports',
    title: 'Dashboards and reports',
    description: 'Create dashboards and generate operational or executive reports.',
    prerequisites: ['company_id'],
    primaryOperations: ['customDashboards', 'customDashboard', 'createCustomDashboard', 'updateCustomDashboard', 'generateExecutiveDashboardReport'],
    matches: [/^(customDashboard|dashboard|generate.*Report|companyReport|projectReport)/, /^(create|update|delete|duplicate|import|export|install|share|preview|execute).*Dashboard/],
  },
  {
    id: 'programs-and-compliance',
    title: 'Programs and compliance',
    description: 'Manage AppSec programs, assessments and PCI work.',
    prerequisites: ['company_id'],
    primaryOperations: ['program', 'programAssessments', 'createProgramAssessment', 'pciAssessments', 'createPciAssessment'],
    matches: [/^(program|pci|compliance)/i, /^(create|update|delete|import|transition|link|upload).*?(Program|Pci)/],
  },
  {
    id: 'identity-and-access',
    title: 'Organisation, identity and access',
    description: 'Manage companies, teams, users, profiles and API keys.',
    prerequisites: ['company_id'],
    primaryOperations: ['company', 'companies', 'teamsByScope', 'apiKeys', 'createApiKey'],
    guideOperations: [
      {
        operation: 'portalUserAccessProfiles',
        type: 'query',
        title: 'List access profiles',
        description: 'Find the profile to grant to a user.',
      },
      {
        operation: 'portalUserByCompany',
        type: 'query',
        title: 'List users',
        description: 'Find the user whose access needs to change.',
      },
      {
        operation: 'createInviteUser',
        type: 'mutation',
        title: 'Invite a user',
        description: 'Invite a user with an access profile in the company scope.',
      },
      {
        operation: 'updatePortalUserAccess',
        type: 'mutation',
        title: 'Change user access',
        description: 'Assign a different profile to an existing user.',
      },
    ],
    matches: [/^(companies?|teams?|apiKeys?|access|portalUser|currentUser|identityProvider|notification)/, /^(create|update|delete|remove|resend|revoke|regenerate).*?(Company|Team|User|Profile|ApiKey|Access)/],
  },
  {
    id: 'trust-and-disclosure',
    title: 'Trust Center and vulnerability disclosure',
    description: 'Publish trust information and manage incoming disclosures.',
    prerequisites: ['company_id'],
    primaryOperations: ['trustCenters', 'trustCenter', 'publishTrustCenter', 'vulnerabilityDisclosureSubmissions', 'startDisclosureTriage'],
    matches: [/^(trustCenter|vulnerabilityDisclosure)/, /^(accept|reply|start|transition|publish|unpublish|set).*?(Disclosure|TrustCenter)/],
  },
  {
    id: 'ssl-certificates',
    title: 'SSL certificates',
    description: 'Issue and manage SSL certificates and ACME identities.',
    prerequisites: ['company_id'],
    primaryOperations: ['sslCertificates', 'sslCertificate', 'sslCreateCertificate', 'sslAcmeCreateDomain', 'sslReissueCertificate'],
    matches: [/^ssl/i],
  },
  {
    id: 'credentials-and-cloud',
    title: 'Credentials and cloud accounts',
    description: 'Manage credentials, cloud accounts and CSPM integrations.',
    prerequisites: ['company_id'],
    primaryOperations: ['credentials', 'createCredential', 'createCloudAccount', 'cspmIntegrations', 'triggerCspmSync'],
    matches: [/^(credentials?|cloud|cspm)/i, /^(create|update|delete|trigger).*?(Credential|CloudAccount|Cspm)/],
  },
];

export const otherApiOperationsCatalogue = {
  id: 'other-api-operations',
  title: 'Other API operations',
  description:
    'Specialised or platform-internal operations that remain available in the complete reference.',
  prerequisites: [],
  primaryOperations: [],
  matches: [],
};

/**
 * Returns every catalogue that intentionally includes an operation. The
 * fallback is handled by the reference generator, not by this catalogue: an
 * unmatched operation must remain visible under "Other API operations".
 */
export function findCataloguesForOperation(operationName) {
  const catalogues = apiResourceCatalog.filter(
    ({ primaryOperations, matches }) =>
      primaryOperations.includes(operationName) || matches.some((pattern) => pattern.test(operationName)),
  );

  return catalogues.length > 0 ? catalogues : [otherApiOperationsCatalogue];
}
