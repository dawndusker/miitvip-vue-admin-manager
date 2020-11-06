import { createApp } from 'vue'
import antd from './modules'
import 'makeit-admin-pro/style'
import MakeitAdminPro from 'makeit-admin-pro'
import App from './app.vue'

const app = createApp(App)
app.use(antd)
app.use(MakeitAdminPro)
app.mount('#app')