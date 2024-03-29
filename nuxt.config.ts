import { globSync } from 'glob'

const routes = globSync('./content/**/*.md')
  .map(path => path.slice(7, -3))

const isGenerateMode = process.argv.includes('generate')

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxt/image',
    ['nuxt-gtag', {
      id: process.env.GOOGLE_ANALYTICS_ID,
      config: {
        page_title: 'Frontend News Thailand',
      },
    }],
  ],
  css: ['@/assets/content.css', '@/assets/global.css'],
  components: true,
  runtimeConfig: {
    public: {
      baseUrl: process.env.URL || '',
    },
  },
  tailwindcss: {
    exposeConfig: true,
    config: {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            'primary': '#41B883',
            'light-base-bg': 'white',
            'light-base-text': '#1e1e1e',
            'dark-base-bg': '#1e1e1e',
            'dark-base-text': 'white',
          },
        },
      },
    },
  },
  pages: true,
  content: {
    highlight: {
      theme: {
        default: 'vitesse-light',
        dark: 'vitesse-dark',
      },
    },
  },
  googleFonts: {
    families: {
      'Sarabun': [300, 400, 500],
      'Noto+Sans+Thai': [500],
    },
    download: true,
    display: 'swap',
  },
  ignore: isGenerateMode ? ['pages/generate-og.vue', 'template/*'] : ['template/*'],
  nitro: {
    prerender: {
      routes,
    },
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },
})
