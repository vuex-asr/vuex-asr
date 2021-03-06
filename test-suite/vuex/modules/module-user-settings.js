const ModuleUserSettings = {
  namespaced: true,

  state: {
    message: "This is a message in the user settings module for sure",
    anotherMessage:
      "This is another message in the user settings module for sure"
  },
  getters: {
    messageReversed: state => {
      return state.message
        .split("")
        .reverse()
        .join("");
    },
    anotherMessageReversed: state => {
      return state.anotherMessage
        .split("")
        .reverse()
        .join("");
    }
  },
  mutations: {
    setMessage(state, message) {
      // mutate state
      state.message = message;
    },
    setAnotherMessage(state, message) {
      // mutate state
      state.anotherMessage = message;
    }
  },
  actions: {
    setAnotherMessageAsync({ commit }, message) {
      setTimeout(() => {
        commit("setAnotherMessage", message);
      }, 1000);
    }
  }
};

export { ModuleUserSettings };
