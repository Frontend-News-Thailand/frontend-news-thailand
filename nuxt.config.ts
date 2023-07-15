import { globSync } from 'glob'

const routes = globSync('./content/**/*.md')
  .map(path => path.slice(7, -3))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxtjs/google-fonts'],
  css: ['@/assets/content.css'],
  components: true,
  tailwindcss: {
    exposeConfig: true,
  },
  pages: true,
  content: {},
  googleFonts: {
    families: {
      Sarabun: [300, 400],
    },
    display: 'swap',
  },
  generate: {
    routes,
  },
})
