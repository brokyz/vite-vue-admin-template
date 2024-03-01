import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/404'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  // console.log('beforeEach')
  NProgress.start()

  // determine whether the user has logged in
  // const hasToken = getToken()
  // console.log('token is: ', store.getters.token)

  if (store.getters.token) {
    // console.log('if has token')
    if (to.path === '/login') {
      // console.log('to path is login')
      // if is logged in, redirect to the home page
      next('/')
      NProgress.done()
    } else {
      // console.log('to path is not login')
      next()
    }
  } else {
    //  没有token
    // console.log('if no token')
    if (whiteList.indexOf(to.path) > -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      // next('/login')
      // console.log(`to.path is ${to.path}`)
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  // console.log('afterEach')
  NProgress.done()
})
