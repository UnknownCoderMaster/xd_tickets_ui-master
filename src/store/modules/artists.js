import axios from "axios";
import { baseUrl } from "../BaseURL";

const state = () => ({
  artists: [],
});

const getters = {
    artists(state) {
    return state.artists;
  },
};

const mutations = {
  SET_ARTISTS(state, payload){
    state.artists = payload;
  },
  ADD_ARTIST(state, data) {
    state.artists.push(data);
  },
  DELETE_ARTIST(state, id) {
    state.artists = state.artists.filter((x) => x.id != id);
  },
  UPDATE_ARTIST(state, payload) {
    state.artists = state.artists.map((x) => {
        if(x.id == payload.id) return payload;
         else return x;
    });
  },
};
const actions = {
  async getArtists({ commit }) {
    await axios
      .get(`${baseUrl}/events/artists/`)
      .then(response => {
        commit("SET_ARTISTS", response.data.results);
      })
      .catch(error => {
        console.log(error)
      });
  },

  async addArtist({ commit }, data) {
    await axios
      .post(`${baseUrl}/events/artists/`, data)
      .then((response) => {
        commit("ADD_ARTIST", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async deleteArtist({ commit }, id) {
    await axios
      .delete(`${baseUrl}/events/artists/${id}/`)
      .then((response) => {
        console.log(response);
        commit("DELETE_ARTIST", id);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  
  async updateArtist({commit}, payload) {
    await axios
      .put(`${baseUrl}/events/artists/${payload.id}/`, payload.data)
      .then((response) => {
        commit("UPDATE_ARTIST", response.data);
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