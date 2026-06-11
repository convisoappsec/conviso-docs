import React from 'react';
import Link from '@docusaurus/Link';

// Read migrated release notes from the unified Product Updates feed.
const releaseModules = require.context(
  '@site/product-updates',
  false,
  /\.mdx?$/,
);

function parseEntry(key) {
  const filename = key.replace('./', '');
  const match = filename.match(/^((\d{4})-(\d{2})-(\d{2})-(.+))\.mdx?$/);
  if (!match) return null;
  const module = releaseModules(key);
  // Prefer the frontmatter date (can include a time), fall back to the
  // date encoded in the filename.
  const rawDate =
    module?.frontMatter?.date || `${match[2]}-${match[3]}-${match[4]}`;
  return {
    // fullSlug = the post's flat slug (date-prefixed), matches its URL
    fullSlug: match[1],
    timestamp: new Date(rawDate).getTime(),
    module,
  };
}

// Most recent first: sort by publish timestamp; the date-prefixed slug is a
// deterministic tiebreaker when timestamps are identical.
const releaseEntries = releaseModules
  .keys()
  .map(parseEntry)
  .filter(Boolean)
  .sort((a, b) => b.timestamp - a.timestamp || b.fullSlug.localeCompare(a.fullSlug));

export default function LatestReleaseHighlight() {
  const latest = releaseEntries[0];

  if (!latest) {
    return null;
  }

  const frontMatter = latest.module?.frontMatter ?? {};
  const toc = latest.module?.toc ?? [];

  const title = frontMatter.title || 'Release notes';
  const description =
    frontMatter.description ||
    'Confira as novidades e melhorias mais recentes da Conviso Platform.';
  const permalink = `/releases/${latest.fullSlug}`;
  const highlightItems = toc
    .filter((item) => item?.value)
    .filter((item) => !/key benefits|introduction/i.test(item.value))
    .slice(0, 4)
    .map((item) => item.value);

  return (
    <div className="release-highlight">
      <div className="release-highlight__badge">Recent updates</div>
      <div className="release-highlight__title">{title}</div>
      <div className="release-highlight__summary">{description}</div>
      {highlightItems.length > 0 && (
        <ul className="release-highlight__list">
          {highlightItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      <Link className="release-highlight__cta" to={permalink}>
        Read the full release notes
      </Link>
    </div>
  );
}
