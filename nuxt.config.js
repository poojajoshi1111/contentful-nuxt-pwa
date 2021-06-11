// import getConfigForKeys from './lib/config.js'
// import createClient from './plugins/contentful'

// const ctfConfig = getConfigForKeys([
//   'CTF_BLOG_POST_TYPE_ID',
//   'CTF_SPACE_ID',
//   'CTF_CDA_ACCESS_TOKEN',
// ])

// const cdaClient = createClient(ctfConfig)

export default {
  server: {
    port: 8098,
  },

  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: true,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  publicRuntimeConfig: {
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/contentful.js'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
  ],
  router: {
    middleware: ['connection'],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  serverMiddleware: [
    function (req, res, next) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
      next()
    },
  ],

  build: {},

  pwa: {
    manifest: {
      lang: 'en',
      name: 'PWATestApp',
      short_name: 'PWA/Nuxt - Test App',
      display: 'standalone',
      theme_color: '#F11010',
    },
    workbox: {
      dev: false, // or use a global variable to track the current NODE_ENV, etc to determine dev mode
    },
  },
}
