import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/store/index'

// 按需引入vant组件
import { vantPlugins } from '@/plugins/vant.js'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)

// 注册路由
setupRouter(app)

// 注册pinia
setupStore(app)

app.use(vantPlugins)
app.mount('#app')
