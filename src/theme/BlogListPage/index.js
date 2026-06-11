import React, { useState, useMemo } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import {
  TYPE_TAGS,
  TYPE_LABELS,
  PRODUCTS,
  MODULES,
  categorizeTag,
} from '@site/src/theme/releaseTags';
import ReleaseBreadcrumbs from '@site/src/components/ReleaseBreadcrumbs';
import styles from './styles.module.css';

// Maps each release type to its badge color class.
const TYPE_CLASS = {
  'release notes': styles.badgeReleaseNotes,
  new: styles.badgeNew,
  improved: styles.badgeImproved,
  fix: styles.badgeFix,
  'end of life': styles.badgeDeprecated,
  'early access': styles.badgeEarlyAccess,
};

function Badge({ type }) {
  const label = TYPE_LABELS[type];
  if (!label) return null;
  return <span className={clsx(styles.badge, TYPE_CLASS[type])}>{label}</span>;
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function AuthorInfo({ author }) {
  const [imgFailed, setImgFailed] = useState(false);
  const initials = author.name
    ? author.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : '?';

  return (
    <div className={styles.author}>
      {author.imageURL && !imgFailed ? (
        <img
          src={author.imageURL}
          alt={author.name}
          className={styles.authorAvatar}
          onError={() => setImgFailed(true)}
        />
      ) : (
        <div className={styles.authorAvatarFallback}>{initials}</div>
      )}
      <span className={styles.authorName}>
        <strong>{author.name}</strong>
        {author.title && (
          <span className={styles.authorTitle}> | {author.title}</span>
        )}
      </span>
    </div>
  );
}

function UpdateCard({ content: BlogPostContent }) {
  const { metadata } = BlogPostContent;
  const typeTag = metadata.tags.find(
    (t) => categorizeTag(t.label) === 'type'
  );
  const type = typeTag?.label.toLowerCase();
  const productTags = metadata.tags.filter(
    (t) => categorizeTag(t.label) === 'product'
  );
  const moduleTags = metadata.tags.filter(
    (t) => categorizeTag(t.label) === 'module'
  );

  return (
    <article className={styles.card}>
      <time className={styles.cardDate} dateTime={metadata.date}>
        {formatDate(metadata.date)}
      </time>
      <div className={styles.cardContent}>
        <a href={metadata.permalink} className={styles.cardTitleLink}>
          <h2 className={styles.cardTitle}>{metadata.title}</h2>
        </a>
        {type && <Badge type={type} />}
        <div className={styles.cardBody}>
          <BlogPostContent />
        </div>
        {productTags.length > 0 && (
          <div className={styles.tagList}>
            <strong className={styles.tagsLabel}>Products:</strong>
            {productTags.map((tag) => (
              <span key={tag.label} className={styles.tag}>
                {tag.label}
              </span>
            ))}
          </div>
        )}
        {moduleTags.length > 0 && (
          <div className={styles.tagList}>
            <strong className={styles.tagsLabel}>Modules:</strong>
            {moduleTags.map((tag) => (
              <span key={tag.label} className={styles.tag}>
                {tag.label}
              </span>
            ))}
          </div>
        )}
        {metadata.authors.length > 0 && (
          <div className={styles.authors}>
            {metadata.authors.map((author, i) => (
              <AuthorInfo key={i} author={author} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function FilterGroup({ title, options, selected, onToggle, renderLabel }) {
  if (options.length === 0) return null;
  return (
    <div className={styles.filterGroup}>
      <h4 className={styles.filterGroupTitle}>{title}</h4>
      {options.map((option) => (
        <label key={option} className={styles.filterLabel}>
          <input
            type="checkbox"
            className={styles.filterCheckbox}
            checked={selected.includes(option)}
            onChange={() => onToggle(option)}
          />
          {renderLabel ? renderLabel(option) : option}
        </label>
      ))}
    </div>
  );
}

export default function BlogListPage({ items }) {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedModules, setSelectedModules] = useState([]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Always show the full official taxonomy in the filters, not only the
  // tags currently in use by posts.
  const allTypes = TYPE_TAGS;
  const allProducts = PRODUCTS;
  const allModules = MODULES;

  const filteredItems = useMemo(() => {
    return items.filter(({ content }) => {
      const labels = content.metadata.tags.map((t) => t.label.toLowerCase());
      if (
        selectedTypes.length > 0 &&
        !selectedTypes.some((t) => labels.includes(t))
      ) {
        return false;
      }
      if (
        selectedProducts.length > 0 &&
        !selectedProducts.some((p) => labels.includes(p.toLowerCase()))
      ) {
        return false;
      }
      if (
        selectedModules.length > 0 &&
        !selectedModules.some((m) => labels.includes(m.toLowerCase()))
      ) {
        return false;
      }
      return true;
    });
  }, [items, selectedTypes, selectedProducts, selectedModules]);

  const makeToggle = (setter) => (value) =>
    setter((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );

  const toggleType = makeToggle(setSelectedTypes);
  const toggleProduct = makeToggle(setSelectedProducts);
  const toggleModule = makeToggle(setSelectedModules);

  const clearFilters = () => {
    setSelectedTypes([]);
    setSelectedProducts([]);
    setSelectedModules([]);
  };

  const activeCount =
    selectedTypes.length + selectedProducts.length + selectedModules.length;
  const hasActiveFilters = activeCount > 0;

  return (
    <Layout
      title="Release Notes"
      description="Latest Conviso Platform release notes and product updates"
    >
      <div className={styles.page}>
        <ReleaseBreadcrumbs />
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Release Notes</h1>
          <p className={styles.pageDescription}>
            Release notes provide technical documentation produced and
            distributed alongside the launch of a new product or a product
            update — recent changes, feature enhancements, and bug fixes. Use
            the filters to narrow updates by type, product, or module, and
            select the <strong>Release Notes</strong> type to browse every
            release published so far. Learn more in the{' '}
            <a href="/releases/intro">introduction</a>.
          </p>
        </div>
        <div className={styles.layout}>
          {/* Mobile filter toggle */}
          <button
            className={styles.mobileFilterToggle}
            onClick={() => setFiltersOpen(!filtersOpen)}
          >
            {filtersOpen ? 'Hide Filters' : 'Show Filters'}
            {hasActiveFilters && (
              <span className={styles.activeFilterCount}>{activeCount}</span>
            )}
          </button>

          {/* Sidebar */}
          <aside
            className={clsx(styles.sidebar, {
              [styles.sidebarOpen]: filtersOpen,
            })}
          >
            <div className={styles.sidebarHeader}>
              <h3 className={styles.sidebarTitle}>Filters</h3>
              {hasActiveFilters && (
                <button onClick={clearFilters} className={styles.clearBtn}>
                  Reset
                </button>
              )}
            </div>
            <FilterGroup
              title="Types"
              options={allTypes}
              selected={selectedTypes}
              onToggle={toggleType}
              renderLabel={(t) => TYPE_LABELS[t] || t}
            />
            <FilterGroup
              title="Products"
              options={allProducts}
              selected={selectedProducts}
              onToggle={toggleProduct}
            />
            <FilterGroup
              title="Modules"
              options={allModules}
              selected={selectedModules}
              onToggle={toggleModule}
            />
          </aside>

          {/* Main content */}
          <main className={styles.main}>
            <p className={styles.resultCount}>
              Showing {filteredItems.length} of {items.length} updates
            </p>
            {filteredItems.length === 0 ? (
              <div className={styles.empty}>
                No updates match the selected filters.{' '}
                <button onClick={clearFilters} className={styles.clearBtn}>
                  Reset filters
                </button>
              </div>
            ) : (
              <div className={styles.updatesList}>
                {filteredItems.map(({ content }) => (
                  <UpdateCard
                    key={content.metadata.permalink}
                    content={content}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </Layout>
  );
}
