const state = {
  num: 0,
};

const mutations = {
  SET_NUM: (state, num) => {
    state.num = state.num + 1;
    console.log("muations SET_NUM runed");
  },
};

const actions = {
  numAdd: (context, data) => {
    context.commit("SET_NUM");
    console.log("action numAdd runed");
  },
};

const getters = {
  doubleNum: (state) => state.num * 2,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
