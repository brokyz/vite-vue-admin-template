import { getToken, setToken, removeToken } from '@/utils/auth.js'
import { login } from '@/api/user.js'

const state = {
  token: getToken(),
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
    setToken(token)
  },
  REMOVE_TOKEN: (state, token) => {
    state.token = null
  },
}

const actions = {
  async login(context, data) {
    const { token } = await login(data)
    context.commit('SET_TOKEN', token)
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
