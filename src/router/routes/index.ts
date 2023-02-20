import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layouts/index.vue'),
    redirect: '/Home',
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {
          title: '视频医生',
          tabbar: false,
        },
        component: () => import('@/pages/home/index.vue'),
      },
    ],
  },
]
