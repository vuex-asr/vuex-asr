import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const AsrBindStateOverviewStore = new Vuex.Store({
  state: {
    message: "message in the root of the store",
    anotherMessage: "another message in the root of the store"
  }
});

export { AsrBindStateOverviewStore };
