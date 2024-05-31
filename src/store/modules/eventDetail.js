import axios from "axios";
import { baseUrl } from "../BaseURL";

const state = () => ({
  eventDetail: [],
});

const getters = {
  eventDetail(state) {
    return state.eventDetail;
  },
};

const mutations = {
  SET_SINGLE_EVENT(state, payload) {
    state.eventDetail = payload;
  },
  SET_SINGLE_EVENT_BY_SEARCH(state, payload) {
    state.eventDetail = payload;
  }
};
const actions = {
  async getSingleEvent({ commit }, id) {
    await axios
      .get(`${baseUrl}/events/${id}/`)
      .then(response => {
        commit("SET_SINGLE_EVENT", response.data);
      })
      .catch(error => {
        console.log(error)
      });
  },
  async getSingleEventBySearch({ commit }, payload) {
    await axios
      .get(`${baseUrl}/events/?search=${payload}`)
      .then(response => {
        commit("SET_SINGLE_EVENT_BY_SEARCH", response.data);
      })
      .catch(error => {
        console.log(error)
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