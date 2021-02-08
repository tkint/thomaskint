const { description } = require('../../package');

module.exports = {
  title: 'Thomas Kint',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],
  theme: '@vuepress/theme-blog',
  themeConfig: {
    dateFormat: 'DD-MM-YYYY',
    nav: [
      {
        text: 'Portfolio',
        link: '/portfolio/',
      },
      {
        text: 'Blog',
        link: '/blog/',
      },
      {
        text: 'Présentations',
        link: '/slides/',
      },
      {
        text: 'Contact',
        link: '/contact/',
      },
      {
        text: 'Sources',
        link: 'https://gitlab.com/tkint/thomaskint',
      },
    ],
    footer: {
      contact: [
        {
          type: 'mail',
          link: 'mailto:thomaskint.pro@gmail.com',
        },
        {
          type: 'linkedin',
          link: 'https://linkedin.com/in/tkint',
        },
        {
          type: 'gitlab',
          link: 'https://gitlab.com/tkint',
        },
      ],
    },
    directories: [
      {
        id: 'blog',
        dirname: '_posts',
        path: '/blog/',
        itemPermalink: '/blog/:year/:month/:day/:slug',
      },
    ],
    frontmatters: [
      {
        id: 'tag',
        keys: ['tag', 'tags'],
        path: '/tag/',
      },
    ],
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
};
