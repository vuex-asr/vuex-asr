# installation

vuex-asr is not difficult to install and implement, below a guide for manual installation.

For convenience all the sandboxes used in this section have a simple but extendable setup, you could fork them and start fiddling around or base a new project on it.

## Manual installation

To install the plugin just run:

```bash
npm install vuex-asr
```

In the main.js file `import` and `use` it: 

```js{6,8,12}
    // src/main.js
    
    import Vue from "vue";
    import App from "./App.vue";
    import { Store } from "./vuex/store";
    import VuexASR from "./vuex-asr/vuex-asr";
    
    Vue.use(VuexASR);
    
    new Vue({
      render: h => h(App),
      store: Store
    }).$mount("#app");
```
And actually this is all we have to do to start making use of the vuex-asr functionality.

## next steps

Follow the [hello world example](./hello-world-example.html) in the section Learn by Example to see how to do a simple implementation.
