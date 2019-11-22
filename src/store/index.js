import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    imgData: ""
  },
  mutations: {
    updateImgData(state, data) {
      state.imgData = data;
    }
  },
  actions: {
    setImg({ commit }, img) {
      window.localStorage.setItem('agr_tech_imageToCheck', img);
      commit('updateImgData', img);
    }
  }
});
