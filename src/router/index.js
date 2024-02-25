import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/Index'

// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location, onResolve, onReject) {
//   debugger
//   if (onResolve || onReject)
//     return originalPush.call(this, location, onResolve, onReject)
//   return originalPush.call(this, location).catch(err => console.log(new Error(err)))
// }

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/Login'),
    hidden: true,
  },
  {
    path: '/',
    // component: Index,
    component: () => import('@/views/Index'),
    hidden: true,
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true,
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true },
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  })

const router = createRouter()

export default router
