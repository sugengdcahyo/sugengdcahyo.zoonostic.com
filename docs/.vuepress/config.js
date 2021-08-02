module.exports = {
  title: "Zoonostic",
  base: '',
  // base: './',
  description: '...',
  // description: 'Blog example for Mediumish theme with VuePress',
  logo: './assets/img/logo.png',
  theme: require.resolve('../../'),
  themeConfig: {
    authors: [
      {
        name: 'Sal',
        avatar: '/assets/img/sal.jpg',
        link: 'https://wowthemes.net/donate',
        linktext: 'Follow',
      },
      {
        name: 'Sugeng D. Cahyo',
        avatar: '/assets/img/avatar.svg',
        link: 'https://www.linkedin.com/in/sugengdcahyo/',
        linktext: 'Follow',
        summary: 'Author of Mediumish, a Bootstrap Medium styled template available for WordPress, HTML, Ghost and Jekyll. You are currently previewing Jekyll template demo.Indonesian ordinary people'
      },
    ],
    footer: {
      contact: [
        {
          type: 'codepen',
          link: '#',
        },
        {
          type: 'facebook',
          link: 'https://facebook.com',
        },
        {
          type: 'github',
          link: 'https://github.com/sugengdcahyo',
        },
        {
          type: 'gitlab',
          link: '#',
        },
        {
          type: 'instagram',
          link: '#',
        },
        {
          type: 'linkedin',
          link: 'https://www.linkedin.com/in/sugengdcahyo/',
        },
        {
          type: 'mail',
          link: 'mailto:sugengdcahyo@zoonostic.com',
        },
        {
          type: 'messenger',
          link: '#',
        },
        {
          type: 'phone',
          link: '#',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/sugengdcahyo',
        },
        {
          type: 'web',
          link: '#',
        }
      ],
      copyright: [
        {
          text: 'Licensed MIT.',
          link: 'https://bootstrapstarter.com/license/',
        },
        {
          text: 'Vuepress',
          link: 'https://vuepress.vuejs.org/guide/',
        },
      ],
    },

    sitemap: {
      hostname: 'https://github.com/sugengdcahyo'
    },
    comment: {
      service: 'disqus',
      shortname: 'demowebsite',
    },
    newsletter: {
      endpoint: 'https://wowthemes.us11.list-manage.com/subscribe/post?u=8aeb20a530e124561927d3bd8&id=8c3d2d214b'
    },
    feed: {
      canonical_base: 'https://github.com/wowthemesnet/vuepress-theme-mediumish/',
    },
    smoothScroll: true
  },
}
