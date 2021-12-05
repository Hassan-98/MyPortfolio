/* eslint-disable */
module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: `Hassan Ali's Website` || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
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
        href: "/css/hover-min.css"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Piedra&family=Roboto+Slab&family=Poppins&display=swap"
      }
    ],
    script: [
      {
        src: "https://kit.fontawesome.com/4a349e503a.js",
        ssr: false
      },
      {
        src: "/js/jquery-3.3.1.min.js",
        ssr: false
      },
      {
        src: "/js/popper.min.js",
        ssr: false
      },
      {
        src: "/js/bootstrap.min.js",
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
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",
    "@nuxtjs/style-resources"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://portfolio-api-hassanali.herokuapp.com'
    // baseURL: "http://localhost:4000/"
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
