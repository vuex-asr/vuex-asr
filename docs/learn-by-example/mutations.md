# mutations

Vuex offers a great way to mutate state items with the use of mutations and actions. Vuex-asr enables you to bind those actions and mutations the same way you could bind [state](./hello-world-example.html) and [getters](getters-example.html). In this chapter we discuss the use of mutations.

## vuex mutations in a nutshell

Mutations are methods used in the store to change/mutate the state and keep track of those changes/mutations. You could read more about mutations in the [vuex guide/mutations](https://vuex.vuejs.org/guide/mutations.html).

::: tip
Keeping track of mutations is very handy for debugging. It's recommended to download the [vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) for chrome. If you go to the `Vuex` tab in it you'll see your mutations and state. 
:::

## the store

Let's take a look at the following store,

```js{5,8,9,10}
// src/vuex/store.js

export default new Vuex.Store({
  state: {
    message: "message in the root of the store",
  },
  mutations: {
    setMessage(state, message) {
      console.log("message was mutated with: ", message);
      state.message = message;
    }
  }
});
```

## Creating a two way binding with a state item and a mutation

We bind a state item and a mutation to a component

```vue{7,8}
 // src/App.vue
 
 <template> 
 
  <example-component-with-event-handler
    asr-bind-state="message"
    asr-bind-mutations="setMessage"
  />. 

  </template>
  
  ...
```

The component now has state item 'message' and method 'setMessage' available:

```vue{6}
// src/components/ExampleMessageWithEventHandler.vue

<template>
  <div class="example-component-with-event-handler">
    <p class="message">{{ message }}</p>
    <input v-bind:value="message" @keyup="setMessage">
  </div>
</template>
```
Notice we bind the message to the value of the input and an event-handler that get's triggered at keyup.

And voila we have a nice two way binding at our hands.

## aliasing

Since we are also able to alias our mutations we could easily reuse this component to create an instance with other store bindings:

asume we have:
```js{6,13-16}
// src/vuex/store.js

export default new Vuex.Store({
  state: {
    message: "message in the root of the store",
    anotherMessage: "another message in the root of the store"
  },
  mutations: {
    setMessage(state, message) {
      console.log("message was mutated with: ", message);
      state.message = message;
    },
    setAnotherMessage(state, message) {
      console.log("anotherMessage was mutated with: ", message);
      state.anotherMessage = message;
    }
  }
});

```

now we could bind the component like this with our `alias syntax`:

```vue{7,8}

 // src/App.vue
 
 <template> 
 
  <example-component-with-event-handler
    asr-bind-state="anotherMessage AS message"
    asr-bind-mutations="setAnotherMessage AS setMessage"
  />. 

  </template>
  
  ...
```

## namespacing

As [namespacing](./namespacing.html) is a generic feature of vuex-asr could work like this:

```vue{6,7}
 // src/App.vue
 
 <template> 
 
  <example-component-with-event-handler
    asr-bind-state="GENERAL|anotherMessage AS message"
    asr-bind-mutations="GENERAL|setAnotherMessage AS setMessage"
  />. 

  </template>
  
  ...
```

::: tip
read more about [namespacing](./namespacing.html)
::: 

### next step

When we need multiple mutations to happen or do asynchronous actions, we use actions, read all about it in the next chapter.