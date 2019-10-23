# namespacing

In the [hello world example](./hello-world-example.html) we saw that we can bind a variable from the store to the component with asr-bind-state. In the [hello world of 2 way binding example](./hello-world-of-2-way-binding.html) we saw we can bind a model that can mutate a store object And we also learned we could make use of the [alias](./aliasing.html) function to make components reusable.

Since VUEXasr is intended to make building large scale applications more easy let's see what namespacing could bring to the table.

For a quick overview go to the sandbox environment to follow along:

[namespacing example (codesandbox)](https://codesandbox.io/s/manual-namespacing-6gpkj)

## code organisation

There are many reasons as much as ways to organise your code. And I'm not here to tell you how to organise it. A great help in organising code is by using namespaces to address the different aspects of your application.

## vuex namespacing

Since VUEX offers you an out-of-the box solution to organise your store, vuex-asr follows this and enables you to namespace your store objects as well.

## namespace convention for all binders

The examples in this chapter illustrate how you could implement namespacing with `asr-bind-state`, but the convention is the same for all of the binders:
- asr-bind-state
- asr-bind-getters
- asr-bind-mutations
- asr-bind-actions
- asr-bind-config

## example

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
```js{4,6}
    // src/vuex/modules/module-user.js
    
    const ModuleUser = {
      namespaced: true,
    	state: {
    		message: "I'm a message in the USER namespace"
      },
    };
    
    export { ModuleUser };
```
As you can see nothing complicated going on here, we just have another string as a message. The property `namespaced` set to `true` tell's vuex to use namespacing for this module, if you omit this the variables in this module would be available at rootlevel, and in our case create a naming conflict since we already have `message` defined in the root (store.js) file.

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
Notice the namespace-pipe-variable syntax: `USER|message` In the chapter [binding multiple objects to a component](./binding-multiple-objects-to-a-component.html) you can see the `|` character as this comes in handy in assigning multiple objects to the asr-bind-state property.

## deeper namespaces

If we have a deeper namespace we extend the namespace with the `/` character:

For example binding a message from the USER/SETTINGS namespace:
```vue
    // src/App.vue
    
    <template>
      <div id="app">
        <text-input asr-bind-state="USER/SETTINGS|message IS v-model"/>
      </div>
    </template>
    
    ...
```
## next steps
In the next chapter you learn how the `asr-pass` helper function comes in handy when building more complex components that have sub-components with store dependencies.




