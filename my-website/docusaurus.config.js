// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/Quickbook/intro-quickbook',    // ./math/intro.md
            label: 'Quickbook',
            position: 'left',
            activeBaseRegex: `/Quickbook/`,
            docsPluginId: 'Quickbook' // related the plugin id in this file.
          },
          {
            to: '/Hedgehog-Lab/intro-hedgehog-lab',    // ./math/intro.md
            label: 'Hedgehog Lab',
            position: 'left',
            activeBaseRegex: `/Hedgehog-Lab/`,
            docsPluginId: 'Hedgehog-Lab' // related the plugin id in this file.
          },
          {
            to: '/Hedgehog-Script/intro-hedgehog-script',    // ./math/intro.md
            label: 'Hedgehog Script',
            position: 'left',
            activeBaseRegex: `/Hedgehog-Script/`,
            docsPluginId: 'Hedgehog-Script' // related the plugin id in this file.
          },
          {
            to: '/math/intro-math',    // ./math/intro.md
            label: 'Math',
            position: 'left',
            activeBaseRegex: `/math/`,
            docsPluginId: 'math' // related the plugin id in this file.
          },
          {
            to: '/Plot/intro-plot',  // ./docs-system/Intro.md
            label: 'Plot',
            position: 'left',
            activeBaseRegex: `/Plot/`,
            docsPluginId: 'Plot'
          },
          /*{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },*/
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    /**
     * Define the multiple docs.
     * Example:
     *  the math docs folder is "projectRoot/math"
     *  so you just follow the under code.
     */
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'math',
        path: 'math',
        routeBasePath: 'math',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
    '@docusaurus/plugin-content-docs',
     {
        id: 'plot',
        path: 'plot',
        routeBasePath: 'plot',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'Hedgehog-Script',
        path: 'Hedgehog-Script',
        routeBasePath: 'Hedgehog-Script',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'Hedgehog-Lab',
        path: 'Hedgehog-Lab',
        routeBasePath: 'Hedgehog-Lab',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'Quickbook',
        path: 'Quickbook',
        routeBasePath: 'Quickbook',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],
};

module.exports = config;
