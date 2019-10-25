# hello world example

In the example below you find an example of the most basic implementation of vuex-asr. All the examples in this tutorial have sandbox environments in codesandbox, open them in another tab and follow along.

::: tip codesandbox
[hello world example](https://codesandbox.io/s/manual-hello-world-example-3tx2w)
:::

## the store

Now the store is the central place where we put variables used throughout our application front end:
```js{10}
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
```
As you can see, we've created a variable `message` in the state section of the store.

## the application file main.js

In the main.js file we implement the store we've created in `src/vuex/store.js` and `use` our plugin.

```js{5,6,8,12}
    // src/main.js
    
    import Vue from "vue";
    import App from "./App.vue";
    import { Store } from "./vuex/store";
    import VuexASR from "vuex-asr";
    
    Vue.use(VuexASR);
    
    new Vue({
      render: h => h(App),
      store: Store
    }).$mount("#app");
```
And actually this is all we have to do to start making use of the vuex-asr functionality.

## the App component

In the App.vue component we use vuex-asr to bind the `message` value from the store to a component:
```vue{5}
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
```
Notice the `asr-bind-state` property in the `<example-message>` component. This binds the `message` variable from the store to the component. If the store updates the message variable all components that it's bound to will update automatically.

## the Example Message component

In the example component we now just can use the variable `message`
```vue{4}
    // src/components/ExampleMessage.vue
    
    <template>
      <p>{{ message }}</p>
    </template>
```

## aliasing

Aliasing gives you the ability to map your bindings.

Let's say we have a store:
```javascript{6}
...

const Store = new Vuex.Store({
  state: {
    message: "message in Root of VUEX",
    anotherMessage: "another message!"
  }
});
```
...

Now we wanna reuse the component `<example-message>`, but this component has `message` as local variable. Now the helper aliasing could do that trick and reuse (re-instantiate) the component `<example-message>` with other bindings with the help of the `AS` keyword:

```vue{6}
// src/App.vue

<template>
  <div id="app">
    <example-message asr-bind-state="message"/>
    <example-message asr-bind-state="anotherMessage AS message"/>
  </div>
</template>

...  
```
Notice the `AS` syntax: the state item `anotherMessage` is now bound under the name `message` so the component can make use of it under that name: `message`. 

And for reference:

```vue{4}
    // src/components/ExampleMessage.vue
    
    <template>
      <p>{{ message }}</p>
    </template>
```

::: tip TIP
This works the same for [getters](./getters-example.html), [mutations](./mutations.html) and [actions](./actions.html) as discussed in the next chapters.
:::


## next steps

This is the simplest implementation of vuex-asr. In the next chapter you'll see how you could also bind a getter.
