import Vue from "vue";
import Vuex from "vuex";
import labRequestModule from "./modules/labRequest";
import imagingRequestModule from "./modules/imagingRequest";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLoading: false,
    notification: {
      message: null,
      title: null
    }
  },
  mutations: {
    START_LOADING: state => state.isLoading++,
    FINISH_LOADING: state => state.isLoading--,
    SET_NOTIFICATION: (state, payload) => (state.notification = payload)
  },
  modules: {
    labRequestModule,
    imagingRequestModule
  }
});

export default store;
