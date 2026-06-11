import React from 'react';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
import ReleaseBreadcrumbs from '@site/src/components/ReleaseBreadcrumbs';

export default function BlogPostItemHeader() {
  const { metadata } = useBlogPost();
  return (
    <header>
      <ReleaseBreadcrumbs current={metadata.title} />
      <BlogPostItemHeaderTitle />
      <BlogPostItemHeaderInfo />
      <BlogPostItemHeaderAuthors />
    </header>
  );
}
