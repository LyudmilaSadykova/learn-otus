import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { createApp } from 'vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, md } from 'vuetify/iconsets/md'

import App from './App.vue'
import router from './router'
//import store from './store'
import { createPinia } from 'pinia'

const pinia = createPinia()

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'light',
    },
    icons: {
        defaultSet: 'md',
        aliases,
        sets: {
          md,
        },
      }
  })
  
createApp(App).use(vuetify).use(router)/*.use(store)*/.use(pinia).mount('#app')