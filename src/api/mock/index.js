import { ApiClient } from "../httpService";
let client = new ApiClient();

export default {
  fetchTests() {
    return client.get("/data/tests.json"); 
  },
  fetchSpecimentType() {
    return client.get("/data/speciment_type.json"); 
  },
  fetchPatientConditions() {
    return client.get("/data/patient_conditions.json"); 
  },
  fetchImagingTests() {
    return client.get("/data/imaging_tests.json"); 
  }
};
