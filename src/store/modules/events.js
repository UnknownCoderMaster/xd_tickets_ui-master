import axios from "axios";
import { baseUrl } from "../BaseURL";

const state = () => ({
  events: [],
});

const getters = {
  events(state) {
    return state.events;
  },
};

const mutations = {
  SET_EVENTS(state, payload) {
    state.events = payload;
  },
  ADD_EVENT(state, data) {
    state.events.push(data);
  },
  DELETE_EVENT(state, id) {
    state.events = state.events.filter((x) => x.id != id);
  },
  UPDATE_EVENT(state, payload) {
    state.events = state.events.map((x) => {
        if(x.id == payload.id) return payload;
         else return x;
    });
  },
};

const actions = {
  async getEventsWithoutArchive({ commit }) {
    await axios
      .get(`${baseUrl}/events/`)
      .then((response) => {
        console.log(response.data.results);
        commit("SET_EVENTS", response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async getEvents({ commit }) {
    await axios
      .get(`${baseUrl}/events/?archive=true`)
      .then((response) => {
        console.log(response.data.results);
        commit("SET_EVENTS", response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  async addEvent({ commit }, data) {
    await axios
      .post(`${baseUrl}/events/`, data)
      .then((response) => {
        commit("ADD_EVENT", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  async deleteEvent({ commit }, id) {
    await axios
      .delete(`${baseUrl}/events/${id}/`)
      .then((response) => {
        console.log(response);
        commit("DELETE_EVENT", id);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  async updateEvent({commit}, payload) {
    await axios
      .patch(`${baseUrl}/events/${payload.id}/`, payload.data)
      .then((response) => {
        commit("UPDATE_EVENT", response.data);
      })
      .catch((error) => {
        console.log(error);
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
