import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { Dialog, Loading } from 'quasar'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(Quasar, {
  plugins: {
    Dialog,
    Loading,
  }
})

app.use(createPinia())

app.mount('#app')
