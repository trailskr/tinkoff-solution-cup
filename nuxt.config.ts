// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line import/no-default-export
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/eslint-module'
  ],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ]
    }
  },
  css: [
    '@unocss/reset/tailwind.css'
  ]
})
