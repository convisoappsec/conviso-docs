const Dotenv = require('dotenv-webpack');

// Plugin de proxy para evitar CORS
async function proxyPlugin() {
    return {
      name: 'proxy-graphql',
      configureWebpack() {
        return {
          devServer: {
            proxy: [
              {
                context: ['/graphql'],
                target: 'https://api.convisoappsec.com',
                changeOrigin: true,
                pathRewrite: { '^/graphql': '/graphql' },
              },
            ],
          },
        };
      },
    };
  }
  
  
  module.exports = async () => {
    require('dotenv').config();
    const proxy = await proxyPlugin();

    const dotenvPlugin = {
      name: 'custom-dotenv',
      configureWebpack() {
        return {
          plugins: [
            new Dotenv({
              path: './.env',
              systemvars: true,
            }),
          ],
        };
      },
    };
  
    const enableGraphqlDocs = process.env.ENABLE_GRAPHQL_DOCS === 'true';
    let graphqlDocsPlugin = [];

    if (enableGraphqlDocs) {
      graphqlDocsPlugin = [
        [
          '@graphql-markdown/docusaurus',
          {
            schema: 'https://app.convisoappsec.com/graphql',
            rootPath: './docs',
            baseURL: 'api/graphql/documentation',
            loaders: {
              UrlLoader: {
                module: '@graphql-tools/url-loader',
                options: {
                  headers: {
                    'x-api-key': process.env.CONVISO_API_KEY,
                  },
                },
              },
            },
          },
        ],
      ];
    } else {
      console.warn(
        '[GraphQL Docs Plugin] Skipping remote schema loading. Set ENABLE_GRAPHQL_DOCS=true to regenerate GraphQL docs.'
      );
    }
    
    return {
      title: 'Conviso Platform Docs',
      tagline: 'Check the documentation of Conviso Platform',
      url: 'https://docs.convisoappsec.com',
      baseUrl: '/',
      onBrokenLinks: 'throw',
      favicon: 'img/favicon.ico',
      organizationName: 'convisoappsec',
      projectName: 'conviso-docs',
      markdown: {
        hooks: {
          onBrokenMarkdownLinks: 'warn',
        },
      },
      themeConfig: {
        navbar: {
          title: 'Conviso Platform Docs',
          logo: {
            alt: 'Conviso Platform Docs Logo',
            src: 'img/favicon.ico',
          },
          items: [
            {
              to: 'releases/intro',
              label: 'Release Notes 🚀',
              position: 'right',
            },
            {
              to: 'support',
              label: 'Support',
              position: 'right',
              className: 'navbar-support-link',
            },
 
          ],
        },
        image: 'img/indexseo.png',
        footer: {
          links: [
            {
              title: 'Resources',
              items: [
                {
                  label: 'Open ticket',
                  href: 'https://support.convisoappsec.com/tickets',
                },
                {
                  label: 'Data Retention',
                  to: 'data-rentention',
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
          copyright: `Copyright © ${new Date().getFullYear()} Conviso Application Security.`,
        },
        colorMode: {
          defaultMode: 'light',
          disableSwitch: false,
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
        () => ({
          name: 'custom-dotenv',
          configureWebpack() {
            return {
              plugins: [
                new Dotenv({
                  path: './.env',
                  systemvars: true,
                }),
              ],
            };
          },
        }),
        [
          require.resolve('plugin-image-zoom'),
          {},
        ],
        
        ...graphqlDocsPlugin,

        [
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
            id: 'GTM-NZ832PZ',
          },
        ],
        proxyPlugin,
      ],
  
      themes: [
        [
          require.resolve('@easyops-cn/docusaurus-search-local'),
          {
            indexBlog: false,
            indexDocs: true,
            indexPages: true,
            docsDir: 'docs',
            hashed: true,
            highlightSearchTermsOnTargetPage: true,
            searchResultLimits: 25,
            searchContextByPaths: [
              { label: 'API Reference', path: 'api' },
              { label: 'CLI', path: 'new-cli' },
            ],
            useAllContextsWithNoSearchContext: false,
          },
        ],
      ],
    };
  };  
