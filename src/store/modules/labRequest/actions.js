import client from "api-client";

const actions = {
  fetchTests({ commit }) {
    return client.fetchTests().then(tests => commit("setTests", tests));
  },
  fetchSpecimentType({ commit }) {
    return client
      .fetchSpecimentType()
      .then(specimen_types => commit("setSpecimentType", specimen_types));
  }
};

export default actions;
