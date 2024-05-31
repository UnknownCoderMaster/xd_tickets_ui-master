import axios from "axios";
import { baseUrl } from "../BaseURL";

const state = () => ({
  calendar: [],
});
//calendar

const getters = {
  calendar(state) {
    return state.calendar;
  },
};

const mutations = {
  SET_CALENDAR(state, payload) {
    state.calendar = payload;
  },
  SET_CALENDAR_BY_QUERY(state, payload) {
    state.calendar = payload;
  },
};
const actions = {
  async getCalendar({ commit }) {
    await axios
      .get(`${baseUrl}/events/calendar/`)
      .then(response => {
        commit("SET_CALENDAR", response.data.days);
      })
      .catch(error => {
        console.log(error)
      });
  },

  async getCalendarByQuery({ commit }, payload) {
    await axios
      .get(`${baseUrl}/events/?date=${payload}`)
      .then(response => {
        console.log(response.data.results);
        commit("SET_CALENDAR_BY_QUERY", response.data.results);
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