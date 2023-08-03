import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TOHOMC Project",
  description: "A site contains everything about TOHOMC Project",
  themeConfig: {
    logo: '/assets/tohomc_logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Docs', link: '/guide/tohomc-build-suite/initial-setup' },
      { text: 'Design Specification', link: '/markdown-examples' }
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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LiquidRekto/tohomc-build-suite' }
    ]
  }
})
