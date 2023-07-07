import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
  const uwwTheme: ThemeDefinition = {
    dark: false,
    colors: {
      primary: '#312EAF',
      secondary: '#FF7816',
      error: '#FF3939',
      info: '#15ABFF',
      success: '#445EB9',
      warning: '#FF9E2D'
    }
  }

  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'uwwTheme',
      themes: {
        uwwTheme
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
