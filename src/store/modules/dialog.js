const state = {
  numbers: null,
};
const getters = {
  numbers(state) {
    return state.numbers;
  },
};
const mutations = {
  SET_NUMBER(state, payload) {
    console.log(payload);
    state.numbers = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};