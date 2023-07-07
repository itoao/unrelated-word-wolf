const srcDir = 'src/'

export default defineNuxtConfig({
  ssr: false,
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.css'
  ],
  build: {
    transpile: ['vuetify']
  },
  srcDir,
  vite: {
    define: {
      'window.global': {}
    },
    // https://stackoverflow.com/questions/70938763/build-problem-with-react-vitejs-and-was-amplify
    resolve: {
      alias: {
        './runtimeConfig': './runtimeConfig.browser'
      }
    }
  },
  runtimeConfig: {
    public: {
      API_KEY: process.env.API_KEY
    }
  }
})
