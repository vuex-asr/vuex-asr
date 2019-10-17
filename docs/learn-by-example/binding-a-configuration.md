# binding a configuration

This feature is in development, but it needs some refinement!

Since VUEXasr is intended to make building large scale applications more easy let's see how we could bind multiple objects to a component with the use of a configuration.

For a quick overview go to the sandbox environment to follow along:

[binding a configuration example](https://codesandbox.io/s/manual-bind-a-configuration-mtk1n)

## asr-bind-state-config

At first asr-bind-state-config was intended to replace the multiple variable declaration at component asr-bind-state property as shown in the [previous chapter](https://www.notion.so/binding-multiple-objects-to-a-component-318d2d34410248a3b3d6fd47fd797abf). But I found that both options have their own charm.

So what is this  anyway:

 `asr-bind-state-config` elevates the declaration of bindings from the Vue template to the store.

For this example I've created a new vuex module with the sole purpose of containing a configuration:
```js{6,7,8,9,10,11,12,13,14,15,16,17}
    // src/vuex/modules/module-general.js
    
    const ModuleGeneral = {
      namespaced: true,
      state: {
        messageConfig: [
          {
            bind: "anotherMessage",
            as: "message",
            vModel: true, // default: false
          },
          {
            namespace: "USER", // default: root of the store
            bind: "messageUser",
          },
        ]
      }
    };
    
    export { ModuleGeneral };
```
Notice that the properties `vModel` defaults to false, and namespace if omitted directs to the root of the store.

We need to import this module in the store:
```js{5,12}
    // src/vuex/store.js
    
    import Vue from "vue";
    import Vuex from "vuex";
    import { ModuleGeneral } from "./modules/module-general";
    import { ModuleUser } from "./modules/module-user";
    
    Vue.use(Vuex);
    
    const Store = new Vuex.Store({
      modules: {
        GENERAL: ModuleGeneral,
        USER: ModuleUser
      },
      state: {
        message: "message in Root of VUEX",
        anotherMessage: "also a message in Root of VUEX"
      }
    });
    
    export { Store };
```
now let's see if we can bind the config in our App.vue file:
```vue{5}
    // src/App.vue
    
    <template>
      <div id="app">
        <message-board asr-bind-state-config="GENERAL|messageConfig"></message-board>
      </div>
    </template>
    
    <script>
    import MessageBoard from "./components/MessageBoard";
    import TextInput from "./components/TextInput";
    
    export default {
      name: "App",
      components: {
        MessageBoard,
    		TextInput
      }
    };
    </script>
```
## reactivity of a bound config

Now some extra power comes in, we can hotswap a configuration, since the asr-bind-state-config itself is reactive too 🤘.

I'm looking for a nice implementation of this as an example and will post it on this page shortly.

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.