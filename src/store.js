import Vue from "vue";
import Vuex from "vuex";
import client from "api-client";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    specimen_types: [],
    tests: []
  },
  mutations: {
    setTests(state, tests) {
      state.tests = tests;
    },
    setSpecimentType(state, specimen_types) {
      state.specimen_types = specimen_types;
    }
  },
  actions: {
    fetchTests({ commit }) {
      return client.fetchTests().then(tests => commit("setTests", tests));
    },
    fetchSpecimentType({ commit }) {
      return client.fetchSpecimentType().then(specimen_types => commit("setSpecimentType", specimen_types));
    }
  }
});
