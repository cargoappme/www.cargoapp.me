module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Cargo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "L'application Cargo." }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2ecc71' },
  /*
  ** Global CSS
  */
  css: ['vuetify/dist/vuetify.min.css', '~assets/css/main.css'],
  /*
  ** Plugins configuration
  */
  plugins: ['~plugins/vuetify'],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vuetify'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
