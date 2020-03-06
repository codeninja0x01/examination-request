import Vue from "vue";
import Vuex from "vuex";
import labRequestModule from "./modules/labRequest";
import imagingRequestModule from "./modules/imagingRequest";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false
  },
  mutations: {
    START_LOADING: state => (state.isLoading = true),
    FINISH_LOADING: state => (state.isLoading = false)
  },
  modules: {
    labRequestModule,
    imagingRequestModule
  }
});
