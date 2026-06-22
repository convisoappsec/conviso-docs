// Shared release-notes taxonomy used by both the list page (BlogListPage)
// and the post detail footer (BlogPostItem/Footer).

export const TYPE_TAGS = [
  'release notes',
  'new',
  'improved',
  'fix',
  'end of life',
  'early access',
];

export const TYPE_LABELS = {
  'release notes': 'Release Notes',
  new: 'New',
  improved: 'Improvement',
  fix: 'Fix',
  'end of life': 'End of life',
  'early access': 'Early Access',
};

export const PRODUCTS = [
  'Risk insight',
  'Vuln Intelligence',
  'AI Secure Code',
  'Web and API Scan',
  'Offensive & Audit Manager',
  'AI Pentest',
];

export const MODULES = [
  'Security Analysis',
  'Supply Chain Security',
  'Inteligência Artificial',
  'Data Ingestion',
  'Risk-Based Vulnerability Management',
  'Developer Experience',
  'Analytics',
  'Automations',
  'Cloud Native',
  'Compliance & Governance',
  'Threat Intelligence',
  'Gamification',
];

const PRODUCT_LABELS = PRODUCTS.map((p) => p.toLowerCase());
const MODULE_LABELS = MODULES.map((m) => m.toLowerCase());

export function categorizeTag(label) {
  const lower = label.toLowerCase();
  if (TYPE_TAGS.includes(lower)) return 'type';
  if (PRODUCT_LABELS.includes(lower)) return 'product';
  if (MODULE_LABELS.includes(lower)) return 'module';
  return 'other';
}
