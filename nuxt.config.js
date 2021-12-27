/* eslint-disable */
module.exports = {
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: "Hassan Ali's Website",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Hassan Ali's Portfolio Website"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/logo.png" },
      {
        rel: "stylesheet",
        href: "/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        href: "/css/all.min.css"
      },
      {
        rel: "stylesheet",
        href: "/css/hover-min.css"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Piedra&family=Roboto+Slab&family=Poppins&display=swap"
      }
    ],
    script: [
      {
        src: "/js/bootstrap.bundle.min.js",
        ssr: false
      },
      {
        src: "/js/jquery-3.6.0.min.js",
        ssr: false
      },
      {
        src: "/js/jquery.countTo.js",
        ssr: false
      },
      {
        src: "/js/jquery.inview.min.js",
        ssr: false
      },
      {
        src: "https://cdn.jsdelivr.net/npm/typed.js@2.0.11",
        ssr: false
      },
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-HRSGV4Z9YH1",
        ssr: false,
        async: true
      },
      {
        src: "/js/gtag.js",
        ssr: false
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  styleResources: {
    scss: [
      "@/assets/scss/reset.scss",
      "@/assets/scss/mixins.scss",
      "@/assets/scss/variables.scss"
    ]
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "plugins/swal.js", ssr: false },
    { src: "plugins/vuecarousel.js", ssr: false },
    { src: "plugins/aos.js", ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/dotenv",
    "@nuxtjs/style-resources",
    '@nuxt/image'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // baseURL: 'https://portfolio-api-hassanali.herokuapp.com'
    baseURL: "http://localhost:4001/"
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
