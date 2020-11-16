import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    alarm: 'alarm1.mp3'
  },
  mutations: {
    selectAlarm (state, data) {
      state.alarm = data
    }
  },
  actions: {
  },
  modules: {
  }
})
