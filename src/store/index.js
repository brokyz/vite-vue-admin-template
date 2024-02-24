import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import count from "./modules/count";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    count,
  },
  getters,
});

export default store;
