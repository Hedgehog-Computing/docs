// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hedgehog Book',
  tagline: 'The official documentation for Hedgehog Lab',
  url: 'https://hlab.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/hedgehog_1f994.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Hedgehog Computing', // Usually your GitHub org/user name.
  projectName: 'Hedgehog Book', // Usually your repo name.

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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'Hedgehog Book',
        logo: {
          alt: 'My Site Logo',
          src: 'img/hedgehog_1f994.png',
        },
        items: [

          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Overview',
          },

          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Overview',
          },



          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/hedgehog-computing',
            label: 'GitHub',
            position: 'right',
          },
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
                label: 'Discord',
                href: 'https://discord.com/invite/kmuBw8pRFf',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/hedgehoglabhq',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Hedgehog Lab',
                href: 'https:hlab.app/',
              },
              {
                label: 'Github: Hedgehog Lab',
                href: 'https://github.com/Hedgehog-Computing/hedgehog-lab',
              },
              {
                label: 'GitHub: Hedgehog Computing',
                href: 'https://github.com/Hedgehog-Computing',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hedgehog Computing Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
