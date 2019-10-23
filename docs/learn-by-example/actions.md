# actions

Vuex offers a great way to mutate state items with the use of mutations and actions. Vuex-asr enables you to bind those actions and mutations the same way you could bind [state](./hello-world-example.html) and [getters](getters-example.html). In this chapter we discuss the use of actions.

## vuex actions in a nutshell

Actions are methods in the store used for asynchronous interaction of data typically triggered by an event. You could use an action to do an async action like fetching data from an API and `commit` the received data as a mutation to mutate the state. You could make multiple commits in an action and you have access to all of the state and mutations in the store (and it's namespaces).
::: tip
Keeping track of mutations (e.g. triggered by actions) is very handy for debugging. It's recommended to download the [vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) for chrome. If you go to the `Vuex` tab in it you'll see your mutations and state. 
:::

You could read more about actions in the [vuex guide/actions](https://vuex.vuejs.org/guide/actions.html).

## when to use a mutation or an action

This convention could help you to decide to use mutations or actions:
 - if you just update a **single** state item, you could use a mutation, but more elegantly it would be to create an action that commits a mutation.
 - If you have to update **multiple** state items in one method you should use an action.

## the store
Let's take a look at the following store,

```js{5,8-11,14-17}
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
  },
  actions: {
    setMessageAsync({ commit }, event) {
      setTimeout(() => {
        commit("setMessage", event.target.value);
      }, 1000);
    }
  }
});
```
We have an action `setMessageAsync` that delays 1 sec (to simulate async behaviour) before committing the mutation `setMessage`.

## creating a two way binding with a state item and an action

We bind a state item and an action to a component

```vue{6,7}
 // src/App.vue
 
 <template> 
 
  <example-component-with-event-handler
    asr-bind-state="message"
    asr-bind-action="setMessageAsync AS setMessage"
  />

</template>
  
  ...
```
The component now has state item `message` and method `setMessage` available: 
(note that the component below is still the same component we used in the mutations example..)

```vue{5}
// src/components/ExampleMessageWithEventHandler.vue

<template>
    <p class="message">{{ message }}</p>
    <input v-bind:value="message" @keyup="setMessage">
  </div>
</template>
```
Notice we bind the `message` to the value attribute of of the `input` element and an event-handler `setMessage` that get's triggered at the keyup event.

And voila we have a nice two way binding at our hands.

## aliasing

Since we are also able to alias our actions we could easily reuse this component to create an instance with other store bindings:

Let's say we have:
```js{3,6-9,12-15}
export default new Vuex.Store({
  state: {
    anotherMessage: "another message in the root of the store"
  },
  mutations: {
    setAnotherMessage(state, message) {
      console.log("anotherMessage was mutated with: ", message);
      state.anotherMessage = message;
    }
  },
  actions: {
    setAnotherMessageAsync({ commit }, event) {
    setTimeout(() => {
      commit("setAnotherMessage", event.target.value);
    }, 1000);
  }
});
```
now we could bind the component like this (and reuse it):

```vue{7,8}

 // src/App.vue
 
 <template> 
 
  <example-component-with-event-handler
    asr-bind-state="anotherMessage AS message"
    asr-bind-actions="setAnotherMessageAsync AS setMessage"
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
    asr-bind-actions="GENERAL|setAnotherMessageAsync AS setMessage"
  />. 

  </template>
  
  ...
```
## next steps

In the next chapter we go deeper into [namespacing](./namespacing.html) and how it could help us to organise our front-
end codebase. 
