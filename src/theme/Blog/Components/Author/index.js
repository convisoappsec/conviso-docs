import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import AuthorSocials from '@theme/Blog/Components/Author/Socials';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

function MaybeLink(props) {
  if (props.href) {
    return <Link {...props} />;
  }
  return <>{props.children}</>;
}

function AuthorTitle({ title }) {
  return (
    <small className={styles.authorTitle} title={title}>
      {title}
    </small>
  );
}

function AuthorName({ name, as }) {
  if (!as) {
    return (
      <span className={styles.authorName} translate="no">
        {name}
      </span>
    );
  }
  return (
    <Heading as={as} className={styles.authorName} translate="no">
      {name}
    </Heading>
  );
}

function AuthorBlogPostCount({ count }) {
  return <span className={clsx(styles.authorBlogPostCount)}>{count}</span>;
}

function getInitials(name) {
  if (!name) return '?';
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function BlogAuthor({ as, author, className, count }) {
  const { name, title, url, imageURL, email, page } = author;
  const link =
    page?.permalink || url || (email && `mailto:${email}`) || undefined;

  const [imgFailed, setImgFailed] = useState(false);
  const showImage = imageURL && !imgFailed;

  return (
    <div
      className={clsx(
        'avatar margin-bottom--sm',
        className,
        styles[`author-as-${as}`],
      )}
    >
      <MaybeLink href={link} className="avatar__photo-link">
        {showImage ? (
          <img
            className={clsx('avatar__photo', styles.authorImage)}
            src={imageURL}
            alt={name}
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div
            className={clsx('avatar__photo', styles.authorImage, styles.fallback)}
            aria-hidden="true"
          >
            {getInitials(name)}
          </div>
        )}
      </MaybeLink>

      {(name || title) && (
        <div className={clsx('avatar__intro', styles.authorDetails)}>
          <div className="avatar__name">
            {name && (
              <MaybeLink href={link}>
                <AuthorName name={name} as={as} />
              </MaybeLink>
            )}
            {count !== undefined && <AuthorBlogPostCount count={count} />}
          </div>
          {!!title && <AuthorTitle title={title} />}
          <AuthorSocials author={author} />
        </div>
      )}
    </div>
  );
}
