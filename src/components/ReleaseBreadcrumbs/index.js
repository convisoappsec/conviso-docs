import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// Breadcrumb trail back to the docs home and the Release Notes list.
// Uses Infima's native breadcrumb classes to match the docs look & feel.
export default function ReleaseBreadcrumbs({ current }) {
  return (
    <nav className={styles.wrapper} aria-label="Breadcrumbs">
      <ul className="breadcrumbs">
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link" href="/" aria-label="Home page">
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              className={styles.homeIcon}
              aria-hidden="true"
            >
              <path
                d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </li>
        <li
          className={clsx('breadcrumbs__item', {
            'breadcrumbs__item--active': !current,
          })}
        >
          {current ? (
            <Link className="breadcrumbs__link" href="/releases">
              Release Notes
            </Link>
          ) : (
            <span className="breadcrumbs__link">Release Notes</span>
          )}
        </li>
        {current && (
          <li className="breadcrumbs__item breadcrumbs__item--active">
            <span className="breadcrumbs__link">{current}</span>
          </li>
        )}
      </ul>
    </nav>
  );
}
