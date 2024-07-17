// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2024-04-03',
//   devtools: { enabled: true }
// })
export default defineNuxtConfig({
  css: [
    '~/assets/styles/portfolio.css',
    'boxicons/css/boxicons.min.css'
  ],

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  // runtimeConfig: {
  //   public: {
  //     // Add your public runtime configurations here
  //   }
  // },

  compatibilityDate: '2024-07-17'
})