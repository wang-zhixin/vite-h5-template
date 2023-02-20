import type { NavigationGuardNext, RouteLocationNormalized, RouteLocationRaw } from 'vue-router'
import setTitle from '@/utils/setTitle'

interface RouteToType {
  meta: {
    title?: string
  }
}

export const routerBeforeEach = async (to: RouteLocationRaw & RouteToType, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  /* 设置标题 */
  if (to.meta.title) setTitle(to.meta.title)
  next()
}
