import { ModuleUserSettings } from "./module-user-settings";

const ModuleUser = {
  namespaced: true,

  modules: {
    SETTINGS: ModuleUserSettings
  },
  state: {
    message: "This is a message in the USER module",
    anotherMessage: "This is another message in the USER module",
    user: {
      first: "Joris",
      last: "Wenting",
      gender: "male",
      isActive: true
    },
    users: []
  },
  getters: {
    messageKebabCase: state => {
      return state.message.replace(/ /g, "-");
    }
  },
  mutations: {},
  actions: {}
};

export { ModuleUser };
