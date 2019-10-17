import Vue from "vue";
import VuexAsr from "../src/vuex-asr";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;
Vue.use(VuexAsr);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
