# namespacing

In the [hello world example](./hello-world-example.html) we saw that we can bind a variable from the store to the component with asr-bind-state. In the [hello world of 2 way binding example](./hello-world-of-2-way-binding.html) we saw we can bind a model that can mutate a store object And we also learned we could make use of the [alias](./aliasing.html) function to make components reusable.

Since VUEXasr is intended to make building large scale applications more easy let's see what namespacing could bring to the table.

For a quick overview go to the sandbox environment to follow along:

[namespacing example (codesandbox)](https://codesandbox.io/s/manual-namespacing-6gpkj)

## code organisation

There are many reasons as much as ways to organise your code. And I'm not here to tell you how to organise it. But in order to be able to organise it, you need at least to be able to namespace the aspects of your application.

## vuex namespacing

Since VUEX offers you an out-of-the box solution to organise your store, vuex-asr follows this and enables you to namespace your store objects as well.

Let's take a look at the [previous example](./aliasing.html) and extend our store with a User Module:
```js{5,11}
    // src/vuex/store.js
        
    import Vue from "vue";
    import Vuex from "vuex";
    import { ModuleUser } from "./modules/module-user";
    
    Vue.use(Vuex);
    
    const Store = new Vuex.Store({
      modules: {
        USER: ModuleUser,
      },
      state: {
        message: "message in Root of VUEX",
        anotherMessage: "also a message in Root of VUEX"
      }
    });
    
    export { Store };
```
Notice the `modules` property added to the store. In here we've created the namespace `USER` to which we assign the imported module.
```js{6}
    // src/vuex/modules/module-user.js
    
    const ModuleUser = {
      namespaced: true,
    	state: {
    		message: "I'm a message in the USER namespace"
      },
    };
    
    export { ModuleUser };
```
As you can see nothing complicated going on here, we just have another string as a message. But notice the property `namespaced` set to `true`. This tell's vuex to use namespacing for this module, if you omit this the variables in this module would be available at rootlevel, and in our case create a naming conflict since we already have `message` defined in the root (store.js) file.

## the App component
```vue{7,11}
    // src/App.vue
    
    <template>
      <div id="app">
        <example-message asr-bind-state="message"/>
    	<example-message asr-bind-state="anotherMessage AS message"/>
    	<example-message asr-bind-state="USER|message"/>
    
        <text-input asr-bind-state="message IS v-model"/>
        <text-input asr-bind-state="anotherMessage AS message IS v-model"/>
        <text-input asr-bind-state="USER|message IS v-model"/>
      </div>
    </template>
    
    ...
```
Notice the namespace-pipe-variable syntax: `USER|message`

This is all you need to do to tell VUEXasr to pick the message object from the user-module.

In the next chapter you can see why we choose the `|` character as this comes in handy in assigning multiple opjects to the asr-bind-state property, for even more power ⚡️.