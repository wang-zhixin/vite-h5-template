import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routerBeforeEach } from './permission'
import { routes } from './routes/index'
const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(routerBeforeEach)

// config router
// 配置路由器
export function setupRouter(app: App<Element>) {
  app.use(router)
}
