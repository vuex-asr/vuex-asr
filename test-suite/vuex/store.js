import Vue from "vue";
import Vuex from "vuex";
import { ModuleGeneral } from "./modules/module-general";
import { ModuleUser } from "./modules/module-user";
import { ModulePhotos } from "./modules/module-photos";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    GENERAL: ModuleGeneral,
    USER: ModuleUser,
    PHOTOS: ModulePhotos
  },
  state: {
    message: "message in the root of the store",
    anotherMessage: "another message in the root of the store",
    messageConfig: [
      {
        binderType: "state",
        bind: "message"
      },
      {
        binderType: "actions",
        bind: "setMessageAsync",
        alias: "setMessage"
      },
      {
        binderType: "getters",
        bind: "messageCapitalized",
        alias: "anotherMessage"
      },
      {
        binderType: "state",
        namespace: "USER/SETTINGS",
        bind: "message",
        alias: "userSettingsMessage"
      }
    ]
  },
  getters: {
    messageCapitalized: state => {
      return state.message.toUpperCase();
    }
  },
  mutations: {
    setMessage(state, message) {
      console.log("message was mutated with", message);
      state.message = message;
    }
  },
  actions: {
    setMessageAsync({ commit }, event) {
      setTimeout(() => {
        commit("setMessage", event.target.value);
      }, 100);
    }
  }
});
