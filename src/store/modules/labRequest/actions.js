import client from "api-client";

const actions = {
  fetchTests({ commit }) {
    return client.fetchTests().then(labTests => commit("setLabTests", labTests));
  },
  fetchSpecimentType({ commit }) {
    return client
      .fetchSpecimentType()
      .then(specimenTypes => commit("setSpecimentType", specimenTypes));
  }
};

export default actions;
