import client from "api-client";

const actions = {
  fetchPatientCondition({ commit }) {
    return client
      .fetchPatientConditions()
      .then(conditions => commit("setPatientConditions", conditions));
  },
  fetchImagingTest({ commit }) {
    return client
      .fetchImagingTests()
      .then(imagingTest => commit("setImagingTests", imagingTest));
  }
};

export default actions;
