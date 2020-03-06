import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const labRequestModule = {
  state: {
    specimenTypes: [],
    labTests: []
  },
  mutations: mutations,
  actions: actions,
  getters: getters
};

export default labRequestModule;
