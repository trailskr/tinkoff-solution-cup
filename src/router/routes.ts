import MainLayout from 'src/layouts/MainLayout.vue'
import { RouteRecordRaw } from 'vue-router'

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
  component: () => import('src/pages/Error404.vue')
}]
