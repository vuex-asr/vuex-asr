# bind a configuration

This feature is working, but it needs some refinement!

### What problem I'd try to solve with asr-bind-state-config

Sometimes you wanna reuse a complex component that uses multiple bindings. Although you can already do this with `asr-bind-state` there are situations you'd like to serve your configuration from the Vuex store. A reason could be that you might wanna:

- define your bindings configuration in a central place
- retrieve binding configurations via a configuration file or even an API

The latter is one of the most important reasons I think there are. 

An example I have is a situation that I'd like to render a menu with menu-items that have bindings.

In this case I need an array of items that describe the menu, such as title.inactive, title.active, icon.active, icon.inactive.

Since we have this array why not also describe the items bindings in this same array?

Why not also describe the items bindings in the same array?

Now we can create a lean configuration file that contains all the information to create menuItems and bind them to the state:

    // Show configuration file

NOTE: The configuration array is bound to the object too, and is availlable under it's bounds name.

now we can create a component that renders the menu

it will contain menuItems

<to be continued>

In the [hello world example](https://www.notion.so/hello-world-example-f301739ea9f743959fd6f741d14d3a47) we saw that we can bind a variable from the store to the component with asr-bind-state. In the [hello world of 2 way binding example](https://www.notion.so/hello-world-of-2-way-binding-0745851653ab4ac8b07e42d088961689) we saw we can bind a model that can mutate a store object. We also learned we could make use of aliases in the [aliasing example](https://www.notion.so/aliasing-1221d6b07fa1480198d8284b0743c521) to make components reusable. In the [namespacing](https://www.notion.so/namespacing-1c0724cae0ab45bf9aa8009df2b25fca) tutorial we saw how we could create our own code organisation with namespaces. And lastly we learned how to [bind multiple objects](https://www.notion.so/binding-multiple-objects-to-a-component-318d2d34410248a3b3d6fd47fd797abf) into a component including namespacing.

Since VUEXasr is intended to make building large scale applications more easy let's see how we could bind multiple objects to a component with the use of a configuration.

For a quick overview go to the sandbox environment to follow along:

[](https://codesandbox.io/s/manual-bind-a-configuration-mtk1n)

## asr-bind-state-config

At first asr-bind-state-config was intended to replace the multiple variable declaration at component asr-bind-state property as shown in the [previous chapter](https://www.notion.so/binding-multiple-objects-to-a-component-318d2d34410248a3b3d6fd47fd797abf). But I found that both options have their own charm.

So what is this  anyway:

 asr-bind-state-config elevates the declaration of bindings from the Vue template to the store.

For this example I've created a new vuex module with the sole purpose of containing a configuration:

    // src/vuex/modules/module-general.js
    
    const ModuleGeneral = {
      namespaced: true,
      state: {
        messageConfig: [
          {
            storeKey: "message"
          },
          {
            storeKey: "anotherMessage"
          },
    			{
    				namespace: "USER",
    				storeKey: "messageUser"
    			},
        ]
      }
    };
    
    export { ModuleGeneral };

We need to import this module in the store:

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

now let's see if we can bind the config in our App.vue file:

    // src/App.vue
    
    <template>
      <div id="app">
        <message-board asr-bind-state-config="GENERAL/messageConfig"></message-board>
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

## reactivity of bound config

Now some extra power comes in, we can hotswap a configuration, since the asr-bind-state-config itself is reactive too 🤘.

I'm looking for a nice implementation of this as an example and will post it on this page shortly.