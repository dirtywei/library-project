import { createApp } from 'vue'
import App from './app.vue'
import dyest from '@dyest/components'
const app = createApp(App)
app.use(dyest)
app.mount('#app')
