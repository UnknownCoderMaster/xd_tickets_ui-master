import Vue from 'vue'
import Vuex from 'vuex'
import events from './modules/events'
import eventDetail from './modules/eventDetail'
import numbers from '../store/modules/dialog'
import login from '../store/modules/login'
import artists from '../store/modules/artists'
import calendar from '../store/modules/calendar'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { events, eventDetail, numbers, login, artists, calendar },
  strict: true,
});