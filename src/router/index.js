import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/Layout'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/Login'),
    hidden: true,
  },
  {
    path: '/',
    component: Layout,
    // component: () => import('@/Layout'),
    hidden: true,
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true,
  },

  // 404 页面路由必须必须配置在最后
  { path: '*', redirect: '/404', hidden: true },
]

const createRouter = () =>
  new Router({
    // mode: 'history', // 需要浏览器支持
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  })

const router = createRouter()

export default router
