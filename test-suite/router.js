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
      path: "/asr-bind-getters-overview",
      name: "asr-bind-getters",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./views/AsrBindGettersOverview.vue"
        )
    },
    {
      path: "/asr-bind-mutations-overview",
      name: "asr-bind-mutations",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./views/AsrBindMutationsOverview.vue"
        )
    },
    {
      path: "/asr-bind-actions-overview",
      name: "asr-bind-actions",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./views/AsrBindActionsOverview.vue"
        )
    },
    {
      path: "/asr-pass-overview",
      name: "asr-pass",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/AsrPassOverview.vue")
    },
    {
      path: "/asr-bind-config-overview",
      name: "asr-bind-config",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./views/AsrBindConfigOverview.vue"
        )
    }
  ]
});
