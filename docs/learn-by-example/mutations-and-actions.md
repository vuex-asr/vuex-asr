# mutations and actions

Vuex offers a great way to mutate state items with the use of mutations and actions. Vuex-asr enables you to bind those actions and mutations the same way you could bind [state](./hello-world-example.html) and [getters](getters-example.html).

## vuex mutations and actions in a nutshell
### mutations

Mutations are methods used in the store to change/mutate the state and keep track of those changes/mutations. You could read more about mutations in the [vuex guide/mutations](https://vuex.vuejs.org/guide/mutations.html).

::: tip
Keeping track of mutations is very handy for debugging. It's recommended to download the [vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) for chrome. If you go to the `Vuex` tab in it you'll see your mutations and state. 
:::
### actions

Actions are methods in the store used for asynchronous interaction of data typically triggered by an event. You could use an action to do an async action like fetching data from an API and `commit` the received data as a mutation to mutate the state. You could make multiple commits in an action and you have access to all of the state and mutations in the store (and all it's namespaces).

You could read more about mutations in the [vuex guide/actions](https://vuex.vuejs.org/guide/actions.html).

### when to use a mutation or an action

The simple rule should be:
 - if you just update a **single** state item, you could use a mutation, but more elegantly it would be to create an action that commits a mutation.
 - If you have to update multiple state items in one method you should use an action.

## asr implementation

### the store
Let's take a look at the following store,

```js{11,18}
export default new Vuex.Store({
  state: {
    message: "message in the root of the store",
    anotherMessage: "another message in the root of the store"
  },
  getters: {
    messageCapitalized: state => {
      return state.message.toUpperCase();
    }
  },
  mutations: {
    setMessage(state, message) {
      // mutate state
      console.log("message was mutated");
      state.message = message;
    }
  },
  actions: {
    setMessageAsync({commit}, message) {
      // timeout used to emulate asynchronicity 
      setTimeout(() => {
        commit('setMessage', message);
      }, 1000)
    }
  }
});
```
We have a mutation `setMessage` and we have an action `setMessageAsync` 

### the example-component-with-event-handler

<template>
  <div class="example-component-with-event-handler">
    <p class="message">{{ message }}</p>
    <input v-bind:value="message" @keyup="setMessage">
  </div>
</template>

### asr-bind-mutations





### asr-bind-actions





## next steps

As already stated before vuex-asr was created with the intention of making building large-scale applications easier, we've already discussed aliasing in the 'getters' example but let's how we could use aliasing to make reusability of components a breeze in the next chapter. 