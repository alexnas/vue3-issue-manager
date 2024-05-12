import type { RouteRecordRaw } from 'vue-router'
import AuthLayout from '@/layouts/AuthLayout.vue'

const authRoutes: Array<RouteRecordRaw> = [
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/auth/views/AuthView.vue'),
    meta: { layout: AuthLayout }
  }
]

export default authRoutes
