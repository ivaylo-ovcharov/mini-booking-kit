import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#1E2E51',
        secondary: '#DD881F',
        'primary-lighter': '#59A8C7'
      }
    }
  }
})
