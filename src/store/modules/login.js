import axios from "axios";
import { baseUrl } from "../BaseURL";
import router from "@/router";
const state = {
  login: localStorage.getItem("token") || null,
};

const getters = {
  login(state) {
    return state.login;
  },
};

const mutations = {
  SET_TOKEN(state, data) {
    state.login = data;
  },
};

const actions = {
  async postLogin({ commit, state }, data) {
    await axios
      .post(`${baseUrl}/token`, data)
      .then((response) => {
        localStorage.setItem("token", "Bearer " + response.data.access);
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.access;
        commit("SET_TOKEN", response.data.access);
        router.push("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
