import React from 'react';
import clsx from 'clsx';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import { categorizeTag, TYPE_LABELS } from '@site/src/theme/releaseTags';
import styles from './styles.module.css';

const TYPE_CLASS = {
  'release notes': styles.badgeReleaseNotes,
  new: styles.badgeNew,
  improved: styles.badgeImproved,
  fix: styles.badgeFix,
  'end of life': styles.badgeDeprecated,
  'early access': styles.badgeEarlyAccess,
};

export default function BlogPostItemHeaderInfo() {
  const { metadata } = useBlogPost();
  const { date, tags = [] } = metadata;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });

  const typeTag = tags.find((t) => categorizeTag(t.label) === 'type');
  const type = typeTag?.label.toLowerCase();

  return (
    <div className={styles.info}>
      <time dateTime={date} className={styles.date}>
        {formattedDate}
      </time>
      {type && (
        <span className={clsx(styles.badge, TYPE_CLASS[type])}>
          {TYPE_LABELS[type]}
        </span>
      )}
    </div>
  );
}
