const ModuleGeneralSettings = {
  namespaced: true,

  state: {
    message: "message in StateGeneral Deeper",
    anotherMessage: "another message in StateGeneral Deeper"
  },
  getters: {
    getMessage: state => {
      return state.message + " this message was bound via a getter";
    }
  },
  mutations: {
    setMessage(state, message) {
      // mutate state
      console.log("message was mutated");
      state.message = message;
    },
    setAnotherMessage(state) {
      // mutate state
      console.log("Anything happening?");
      state.anotherMessage = "Just changed to another message";
    }
  },
  actions: {
    setMessageAsync({ commit }, message) {
      setTimeout(() => {
        commit("setMessage", message);
        commit("CAROUSEL/updateShowControls", true, { root: true });

        commit("GENERAL/setMessage", message, { root: true });
      }, 1000);
    },
    setAnotherMessageAsync({ commit }, message) {
      setTimeout(() => {
        commit("setAnotherMessage", message);
      }, 1000);
    }
  }
};

export { ModuleGeneralSettings };
