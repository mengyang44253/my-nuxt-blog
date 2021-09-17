export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'DylanBlog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  plugins: [
    '@/plugins/element-ui'
  ],

  components: true,

  buildModules: [
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    proxy:true,
    prefix:'/api',
    credential:true
  },
  proxy:{
    "/api":{
      target:"http://localhost:8000",
      pathRewrite:{
        "^api":"",
        changeOrigin:true
      }
    }
  },

  build: {
    transpile: [/^element-ui/],
  }
}
