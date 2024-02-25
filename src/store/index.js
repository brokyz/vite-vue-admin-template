import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import count from './modules/count'
import user from './modules/user.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    count,
    user,
  },
  getters,
})

export default store
