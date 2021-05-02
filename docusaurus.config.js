module.exports = {
  title: 'AppSec Flow Docs',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'convisoappsec', // Usually your GitHub org/user name.
  projectName: 'flow-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'AppSec Flow Docs',
      logo: {
        alt: 'AppSec Flow Docs Logo',
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
              label: 'Flow CLI',
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
};
