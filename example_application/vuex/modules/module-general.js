import { ModuleGeneralSettings } from "./module-general-deeper";

const ModuleGeneral = {
  namespaced: true,

  modules: {
    Settings: ModuleGeneralSettings
  },
  state: {
    message: "message in State GENERAL Settinqs",
    anotherMessage: "another message in State GENERAL Settings"
  },
  getters: {},
  mutations: {},
  actions: {}
};

export { ModuleGeneral };
