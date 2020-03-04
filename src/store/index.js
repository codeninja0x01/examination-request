import Vue from "vue";
import Vuex from "vuex";
import labRequestModule from "./modules/labRequest";
import imagingRequestModule from "./modules/imagingRequest";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    labRequestModule,
    imagingRequestModule
  }
});
