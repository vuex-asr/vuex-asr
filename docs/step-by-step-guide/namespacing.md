# namespacing

Since vuex-asr is intended to make building large scale applications more easy let's see what namespacing could bring to the table.

::: tip codesandbox
[namespacing example](https://codesandbox.io/s/manual-namespacing-q71oe)
:::

## namespace convention for all binders

The examples in this chapter illustrate how you could implement namespacing with `asr-bind-state`, but the convention is the same for all of the binders:
- asr-bind-state
- asr-bind-getters
- asr-bind-mutations
- asr-bind-actions
- asr-bind-config

## code organisation

There are as many reasons as much as there are ways to organise your code. A great help in organising code is by using namespaces to address the different aspects of your application.

## vuex namespacing

Since VUEX offers you an out-of-the box solution to organise your store, vuex-asr follows those conventions and enables you to namespace your store objects as well.


## example

Let's take a look at the [previous example](./aliasing.html) and extend our store with a User Module:
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
As you can see nothing complicated going on here, we just have another variable `message`. 

The property `namespaced` set to `true` tell's vuex to use namespacing for this module, if you omit `namespaced` the variables in this module would be available at rootlevel, and in our case create a naming conflict since we already have `message` defined in the root (store.js) file.

Now we import it into the root store:

```js{5,11}
    // src/vuex/store.js
        
    import Vue from "vue";
    import Vuex from "vuex";
    import { ModuleUser } from "./modules/module-user";
    
    Vue.use(Vuex);
    
    const Store = new Vuex.Store({
      modules: {
        User: ModuleUser,
      },
      state: {
        message: "message in Root of VUEX",
        anotherMessage: "also a message in Root of VUEX"
      }
    });
    
    export { Store };
```
Notice the `modules` property added to the store. In here we've created the namespace `User` to which we assign the imported module.

::: tip TIP
The capitalization of the namespaces (e.g. USER) is just a preference.
:::  

## the App component
```vue{7,11}
    // src/App.vue
    
    <template>
      <div id="app">
        <example-message asr-bind-state="message"/>
    	<example-message asr-bind-state="anotherMessage AS message"/>
    	<example-message asr-bind-state="User/message"/>
    
        <text-input asr-bind-state="message IS v-model"/>
        <text-input asr-bind-state="anotherMessage AS message IS v-model"/>
        <text-input asr-bind-state="User/message IS v-model"/>
      </div>
    </template>
    
    ...
```
Notice the pipe `/` character in the syntax: `USER/message` separating `USER` as namespace and `message` as the variable name.

## deeper namespaces

If we have a deeper namespace we extend the namespace with the `/` character:

For example binding a message from the USER/SETTINGS namespace:
```vue{5}
    // src/App.vue
    
    <template>
      <div id="app">
        <text-input asr-bind-state="User/Settings/message IS v-model"/>
      </div>
    </template>
    
    ...
```
## next steps
In the next chapter you learn how the `asr-pass` helper function comes in handy when building more complex components that have sub-components with store dependencies.




