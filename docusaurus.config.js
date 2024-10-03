module.exports = () => {
    require('dotenv').config()
    return {
        title: 'Conviso Platform Docs',
        tagline: 'Check the documentation of Conviso Platform',
        url: 'https://docs.convisoappsec.com/',
        baseUrl: '/',
        onBrokenLinks: 'throw',
        onBrokenMarkdownLinks: 'warn',
        favicon: 'img/favicon.ico',
        organizationName: 'convisoappsec',
        projectName: 'conviso-docs',
        themeConfig: {
            navbar: {
                title: 'Conviso Platform Docs',
                logo: {
                    alt: 'Conviso Platform Docs Logo',
                    src: 'img/favicon.ico',
                },
                items: [
                    
                    {
                        to: 'api/api-overview',
                        label: 'API',
                        position: 'left', // or 'right' depending on where you want the link
                        },
                ],
            },
            image: 'img/indexseo.png',

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
                        editUrl: ({versionDocsDirPath, docPath}) =>
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
                'docusaurus2-dotenv',
                {
                    path: "./.env",
                    systemvars: true, // Set to true if you would rather load all system variables as well (useful for CI purposes)support for dotenv-defaults. If set to true, uses ./.env.defaults
                }
            ],
            [
                // https://github.com/flexanalytics/plugin-image-zoom
                require.resolve('plugin-image-zoom'), {}
            ],
            [
                "@graphql-markdown/docusaurus",
                {
                    schema: "https://app.convisoappsec.com/graphql",
                    rootPath: "./docs", // docs will be generated under './docs/swapi' (rootPath/baseURL)
                    baseURL: "api/graphql/documentation",
                    homepage: "./docs/api/graphql/introduction.md",
                    loaders: {
                        UrlLoader: {
                            module: "@graphql-tools/url-loader",
                            options: {
                                headers: {
                                    'x-api-key': process.env.CONVISO_API_KEY
                                }
                            }
                        }
                    }
                },
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
}
