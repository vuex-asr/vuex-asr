import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/asr-bind-state-overview",
      name: "asr-bind-state",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./views/AsrBindStateOverview.vue"
        )
    },
    {
      path: "/example-getters",
      name: "Getters",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./views/examples/getters/Example.vue"
        )
    }
  ]
});
