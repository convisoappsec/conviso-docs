import React from 'react';
import Link from '@docusaurus/Link';
const releaseModules = require.context(
  '@site/docs/releases',
  false,
  /^\.\/release.*\.mdx?$/,
);

function parseReleaseVersionFromFilename(filename) {
  const matchWithDot = filename.match(/release-?(\d+)\.(\d+)(?:\.(\d+))?/i);
  if (matchWithDot) {
    return {
      major: Number.parseInt(matchWithDot[1], 10),
      minor: Number.parseInt(matchWithDot[2], 10),
      patch: Number.parseInt(matchWithDot[3] ?? '0', 10),
    };
  }

  const matchNoDot = filename.match(/release-?(\d)(\d+)/i);
  if (matchNoDot) {
    return {
      major: Number.parseInt(matchNoDot[1], 10),
      minor: Number.parseInt(matchNoDot[2], 10),
      patch: 0,
    };
  }

  const matchSimple = filename.match(/release-?(\d+)/i);
  if (matchSimple) {
    return {
      major: Number.parseInt(matchSimple[1], 10),
      minor: 0,
      patch: 0,
    };
  }

  return null;
}

function compareReleaseVersions(a, b) {
  if (a.major !== b.major) return a.major - b.major;
  if (a.minor !== b.minor) return a.minor - b.minor;
  return a.patch - b.patch;
}

function getReleaseEntries() {
  return releaseModules
    .keys()
    .map((key) => {
      const filename = key.replace('./', '');
      return {
        key,
        filename,
        module: releaseModules(key),
        version: parseReleaseVersionFromFilename(filename),
      };
    })
    .filter((entry) => entry.version);
}

function getLatestRelease(entries) {
  let latest = null;
  let latestVersion = null;

  entries.forEach((entry) => {
    if (!entry.version) return;
    if (!latestVersion || compareReleaseVersions(entry.version, latestVersion) > 0) {
      latest = entry;
      latestVersion = entry.version;
    }
  });

  return latest;
}

const releaseEntries = getReleaseEntries();

export default function LatestReleaseHighlight() {
  const latestRelease = getLatestRelease(releaseEntries);
  const metadata = latestRelease?.module?.metadata ?? {};
  const frontMatter = latestRelease?.module?.frontMatter ?? {};
  const toc = latestRelease?.module?.toc ?? [];

  if (!latestRelease) {
    return null;
  }

  const title = metadata.title || frontMatter.title || 'Release notes';
  const description =
    metadata.description ||
    frontMatter.description ||
    'Confira as novidades e melhorias mais recentes da Conviso Platform.';
  const permalink = metadata.permalink || metadata.slug || '/releases/intro';
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
