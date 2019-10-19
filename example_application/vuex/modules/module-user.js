import { ModuleUserSettings } from "./module-user-settings";

const ModuleUser = {
  namespaced: true,

  modules: {
    SETTINGS: ModuleUserSettings
  },
  state: {
    message: "This is a message in the usermodule",
    user: {},
    users: []
  },
  mutations: {},
  actions: {},
};

export { ModuleUser };
