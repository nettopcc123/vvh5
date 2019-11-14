import Vue from 'vue';
import Vuex from 'vuex';
import homeStore from '@/store/modules/Home.module.js';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '', /// 权限token
    homeUrl: 'https://h5.raygaming.co/'
  },
  getters: {
    token: state => state.token,
    homeUrl: state => state.homeUrl
  },
  mutations: {
    SET_TOKEN: (state, data) => {
      state.token = data
    },
    SET_HOMEURL: (state, data) => {
      state.homeUrl = data
    }
  },
  actions: {

  },
  modules: {
    homeStore
  }
});