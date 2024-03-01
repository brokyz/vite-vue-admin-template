import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
import router from '@/router'

// 创建一个自定义axios实例
const service = axios.create({
  baseURL: '/api', // 基础地址
  timeout: 10000,
}) // 创建一个新的axios实例
// 成功1 失败2

// 请求拦截器
service.interceptors.request.use(
  // 请求成功时执行
  (config) => {
    // 注入token
    //  this.$store.getters
    // store.getters.token => 请求头里面
    if (store.getters.token) {
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    return config
  },
  // 请求失败时执行
  (error) => {
    // 失败执行promise
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  // 响应成功时执行
  (response) => {
    // axios默认包裹了data
    // 判断是不是Blob
    if (response.data instanceof Blob) return response.data // 返回了Blob对象
    const { data, message, success } = response.data // 默认json格式
    if (success) {
      Message({ type: 'success', message })
      return data
    } else {
      Message({ type: 'error', message })
      return Promise.reject(new Error(message))
    }
  },
  // 响应失败时执行
  async (error) => {
    if (error.response.status === 401) {
      Message({ type: 'warning', message: 'token超时了' })
      // 说明token超时了
      await store.dispatch('user/logout') // 调用action 退出登录
      //  主动跳到登录页
      router.push('/login') // 跳转到登录页
      return Promise.reject(error)
    }
    // error.message
    Message({ type: 'error', message: error.message })
    return Promise.reject(error)
  }
)

export default service
