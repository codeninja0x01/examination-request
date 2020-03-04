const mutations = {
  setPatientConditions(state, patientConditions) {
    state.patientConditions = patientConditions;
  },
  setImagingTests(state, imagingTests) {
    state.imagingTests = imagingTests;
  }
};

export default mutations;
