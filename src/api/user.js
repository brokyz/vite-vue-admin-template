import request from '@/utils/request.js'

export function login(params) {
  return request({
    method: 'post',
    url: '/sys/login',
    params,
  })
}
