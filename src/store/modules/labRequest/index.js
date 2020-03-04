import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const labRequestModule = {
  state: {
    specimen_types: [],
    tests: []
  },
  mutations: mutations,
  actions: actions,
  getters: getters
};

export default labRequestModule;
