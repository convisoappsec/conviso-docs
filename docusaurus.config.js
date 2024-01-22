module.exports = {
  title: 'Conviso Platform Docs',
  tagline: 'The tagline of my site',
  url: 'https://docs.convisoappsec.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'convisoappsec',
  projectName: 'flow-docs',

  themeConfig: {
    navbar: {
      title: 'Conviso Platform Docs',
      logo: {
        alt: 'Conviso Platform Docs Logo',
        src: 'img/favicon.ico',
      },
      items: [],
    },
    image: 'img/indexseo.png',

    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Conviso CLI',
              to: 'tools/conviso-cli/installation',
            },
            {
              label: 'Github Actions',
              to: 'modules/integrations/github-actions',
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

    imageZoom: {
      selector: '.markdown img',
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          editUrl: ({ versionDocsDirPath, docPath }) =>
            `https://github.com/convisoappsec/conviso-docs/edit/main/${versionDocsDirPath}/${docPath}`,
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [
    [
      // https://github.com/flexanalytics/plugin-image-zoom
      require.resolve('plugin-image-zoom'), {}
    ],
    [
      //https://github.com/graphql-markdown/graphql-markdown
      require.resolve("@graphql-markdown/docusaurus"),
      {
        schema: "./static/schema.graphql",
        rootPath: "./docs", // docs will be generated under './docs/swapi' (rootPath/baseURL)
        baseURL: "api/graphql/documentation",
        homepage: "./docs/api/graphql/introduction.md"
      }
    ],
    [
      // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-ideal-image
      require.resolve('@docusaurus/plugin-ideal-image'),
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
    [
      require.resolve('docusaurus-gtm-plugin'),
      {
        id: 'GTM-NZ832PZ', // GTM Container ID
      }
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexBlog: false,
        indexDocs: true,
        indexPages: true,
        docsDir: "docs",
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 25,
      },
    ],
  ],

}
