import React from 'react';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import { categorizeTag } from '@site/src/theme/releaseTags';
import styles from './styles.module.css';

export default function BlogPostItemFooter() {
  const { metadata } = useBlogPost();
  const tags = metadata.tags ?? [];

  const products = tags.filter((t) => categorizeTag(t.label) === 'product');
  const modules = tags.filter((t) => categorizeTag(t.label) === 'module');

  if (products.length === 0 && modules.length === 0) {
    return null;
  }

  return (
    <footer className={styles.footer}>
      {products.length > 0 && (
        <div className={styles.tagList}>
          <strong className={styles.tagsLabel}>Products:</strong>
          {products.map((tag) => (
            <span key={tag.label} className={styles.tag}>
              {tag.label}
            </span>
          ))}
        </div>
      )}
      {modules.length > 0 && (
        <div className={styles.tagList}>
          <strong className={styles.tagsLabel}>Modules:</strong>
          {modules.map((tag) => (
            <span key={tag.label} className={styles.tag}>
              {tag.label}
            </span>
          ))}
        </div>
      )}
    </footer>
  );
}
