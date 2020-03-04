import imaging_tests from "./data/imaging_tests";
import patient_condition from "./data/patient_conditions";
import tests from "./data/tests";
import specimentType from "./data/speciment_type";

const fetch = (mockData, time = 0) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockData);
    }, time);
  });
};

export default {
  fetchTests() {
    return fetch(tests, 10000); // wait 1s before returning tests
  },
  fetchSpecimentType() {
    return fetch(specimentType, 10000); // wait 1s before returning tests
  },
  fetchPatientConditions() {
    return fetch(patient_condition, 10000); // wait 1s before returning tests
  },
  fetchImagingTests() {
    return fetch(imaging_tests, 10000); // wait 1s before returning tests
  }
};
