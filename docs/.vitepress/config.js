import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/tohomc-webpage/',
  title: "TOHOMC Project",
  description: "A site contains everything about TOHOMC Project",
  themeConfig: {
    logo: 'https://i.ibb.co/KXt9vVp/tohomc-logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'About', link: '/' },
      { text: 'Docs', link: '/about' },
      { text: 'Specifications', link: '/guide/tohomc-build-suite/initial-setup' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Markdown Examples', link: '/toho' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ]
    },

    actionButtons: [
      { text: 'Go to repo', color: 'red', link: 'https://github.com/LiquidRekto/tohomc-build-suite'}
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LiquidRekto/tohomc-build-suite' }
    ]
  }
})
