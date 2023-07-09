// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
})
