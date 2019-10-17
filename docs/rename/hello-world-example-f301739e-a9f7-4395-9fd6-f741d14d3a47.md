# hello world example

In the example below I'll give you an example of the most basic implementation of VUEX-ASR.

For a quick overview go to the sandbox environment to follow along:

[](https://codesandbox.io/s/manual-hello-world-example-3tx2w)

# preamble

The setup assumes having a component based VUE setup implementing VUEX, you could checkout the basic configuration of this in the [sandbox environment](https://www.notion.so/hello-world-example-f301739ea9f743959fd6f741d14d3a47#d37790323d1d4b788fba3adb5c20e041).

## the store

Now the store is the central place where to put all the variables used throughout your application front end:

    // src/vuex/store.js
    
    import Vue from "vue";
    import Vuex from "vuex";
    
    Vue.use(Vuex);
    
    const Store = new Vuex.Store({
      state: {
        message: "This is a message in the Root of VUEX",
      }
    });
    
    export { Store };

As you can see, we've created a variable `message` in the state section of the store.

## the application file main.js

In the main.js file we implement the store we've created in `src/vuex/store.js` 

    // src/main.js
    
    import Vue from "vue";
    import App from "./App.vue";
    import { Store } from "./vuex/store";
    import VuexASR from "./plugins/vuex-asr/vuex-asr";
    
    Vue.use(VuexASR);
    
    new Vue({
      render: h => h(App),
      store: Store
    }).$mount("#app");

And actually this is all we have to do to start making use of the VuexASR functionality.

## the App component

In the App.vue component we use to demonstrate the use of vuex-asr to bind the `message` value from the store to a component:

    // src/App.vue
    
    <template>
      <div id="app">
        <example-message asr-bind-state="message"/>
      </div>
    </template>
    
    <script>
    import ExampleMessage from "./components/ExampleMessage";
    
    export default {
      name: "App",
      components: {
        ExampleMessage,
      }
    };
    </script>

Notice the `asr-bind-state` property in the `<example-message>` component. This binds the `message` variable from the store to the component. If the store updates the message variable the component that it's bound to will update automatically.

## the Example Message component

In the example component we now just can use the variable `message`

    // src/components/ExampleMessage.vue
    
    <template>
      <p>{{ message }}</p>
    </template>

This is the simplest implementation of VUEX-ASR.

But hold on we're not completely done yet, just to show a primitive example of two-way-binding with VUEX-ASR we need to create an input so we can **mutate** the variable and see if this actually updates the variable in dependent components...