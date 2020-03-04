import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const imagingRequestModule = {
  state: {
    patientConditions: [],
    imagingTests: []
  },
  mutations: mutations,
  actions: actions,
  getters: getters
};

export default imagingRequestModule;
