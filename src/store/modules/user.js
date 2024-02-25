import { getToken, setToken, removeToken } from '@/utils/auth.js'

const state = {
  token: getToken(),
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
    console.log('token setted')
    setToken(token)
  },
  REMOVE_TOKEN: (state, token) => {
    state.token = null
  },
}

const actions = {
  login: (context, data) => {
    context.commit('SET_TOKEN', '123456')
  },
  logout: (context, data) => {
    removeToken()
    context.commit('REMOVE_TOKEN', null)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
