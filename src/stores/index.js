import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    settings: {
      color: '#ffffff',
      backgroundImage: ''
    }
  },
  mutations: {
    SET_SETTINGS(state, settings) {
      state.settings = settings;
    }
  },
  actions: {
    updateSettings({ commit }, settings) {
      commit('SET_SETTINGS', settings);
      localStorage.setItem('site-settings', JSON.stringify(settings));
    }
  },
  getters: {
    settings: state => state.settings
  }
});
