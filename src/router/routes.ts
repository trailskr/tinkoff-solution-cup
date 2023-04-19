import { RouteRecordRaw } from 'vue-router'

import MainLayout from '@/layouts/MainLayout.vue'

const Ui = (): Promise<typeof import('*.vue')> => import('../pages/Ui/Ui.vue')

export const routes: RouteRecordRaw[] = [{
  path: '/',
  name: 'Home',
  component: MainLayout,
  redirect: { name: 'Ui' },
  children: [
    {
      path: 'ui',
      name: 'Ui',
      component: Ui
    }
  ]
}, {
  path: '/:catchAll(.*)*',
  name: 'Error404',
  component: () => import('@/pages/Error404.vue')
}]
