module.exports = {
  title: 'Conviso Platform Docs',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'convisoappsec', // Usually your GitHub org/user name..
  projectName: 'flow-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Conviso Platform Docs',
      logo: {
        alt: 'Conviso Platform Docs Logo',
        src: 'img/favicon.ico',
      },
      items: [
        /* {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        }, 
        {to: 'blog', label: 'Blog', position: 'left'}, */
        
      ],
    },
    footer: {
      
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'CLI',
              to: 'cli/installation',
            },
            {
              label: 'Github Actions',
              to: 'integrations/github-actions',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/convisoappsec/',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/convisoappsec/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://blog.convisoappsec.com/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/convisoappsec',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Conviso Application Security. Built with Docusaurus.`,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve("@edno/docusaurus2-graphql-doc-generator"),
      {
        schema: "./static/schema.graphql",
        rootPath: "./docs", // docs will be generated under './docs/swapi' (rootPath/baseURL)
        baseURL: "api/graphql/documentation",
      },
    ],
    /*[
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: './docs/api/graphql/documentation',
        routeBasePath: './docs',
        sidebarPath: require.resolve('./docs/api/graphql/documentation/sidebar-schema.js'),
        // ... other options
      },
    ],*/
  ],

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        indexBlog: false,
        indexDocs: true,
        indexPages: true,
        docsDir: "docs",
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 25,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
  ],


};
