import type { RouteRecordRaw } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import authRoutes from '@/auth/routes/authRoutes'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: { layout: DefaultLayout }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
    meta: { layout: DefaultLayout }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/views/ProjectsView.vue'),
    meta: {
      layout: DefaultLayout,
      authRequired: true
    }
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('@/views/UsersView.vue'),
    meta: {
      layout: DefaultLayout,
      authRequired: true
    }
  },

  {
    path: '/projects/:projectId/issues',
    name: 'Project',
    component: () => import('@/views/IssuesView.vue'),
    meta: {
      layout: DefaultLayout,
      authRequired: true
    }
  },

  ...authRoutes,

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { layout: DefaultLayout }
  }
]

export default routes
