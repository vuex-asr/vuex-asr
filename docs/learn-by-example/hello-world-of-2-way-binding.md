# hello world of 2 way binding

In the [hello world example](./hello-world-example.html) and [getters example](./getters-example.html) we saw that we can bind a variable or a getter from the store to the component with `asr-bind-state` and `asr-bind-getters`. Now let's see if we can update the variable in one component and have it being updated in the other. For this we'll extend our hello world example.

::: tip
For a quick overview go to the sandbox environment to follow along:
[hello world of 2 way binding example (codesandbox)](https://codesandbox.io/s/manual-getters-example-kfww7)
:::

## binding a model

To make the store variable `message` (as we used in our previous example) 2-way-bound, we need to tell the component that the variable is a model. (Meaning it implements both a getter and a setter).

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

So for this example we have to update our App.vue file:
```vue{6}
    // src/App.vue
    
    <template>
      <div id="app">
        <example-message asr-bind-state="message"/>
        <text-input asr-bind-state="message IS v-model"/>
      </div>
    </template>
    
    <script>
    import ExampleMessage from "./components/ExampleMessage";
    import TextInput from "./components/TextInput";
    
    export default {
      name: "App",
      components: {
        ExampleMessage,
    	TextInput
      }
    };
    </script>
```
Notice that we also use the property `asr-bind-state` but we tell that the variable message is a model: 

`asr-bind-state="message IS v-model"` 

or simpler:

`asr-bind-state="message IS model"`

## the Text Input component

Now that we have our variable message available as a model we can simply assign it to an input's v-model property:


```vue{4}
    // src/components/TextInput.vue
    
    <template>
      <input v-model="message">
    </template>
```
::: tip
For more on this see [Vue documentation on v-model](https://vuejs.org/v2/guide/forms.html?) 
::: 

If you now change the contents of the message in the input field that is rendered you'll see that also the message in the `example-message` component is updated.

::: warning
Binding a state item and being able to mutate it is called **2 way model binding**. In this example we are going to bind an item from the state directly as a model. This is quite useful in the rapid-prototyping phase of the project, but *NOT RECOMMENDED* in production. For production it is recommended to use vuex mutations for synchronous- and actions for asynchronous manipulation of state items. Read more in [advanced 2 way binding](./advanced-2-way-binding.html)
:::

## next steps

So now you now how to bind a state object as a simple model, let's take a look at how we could bind actions and mutations to take full advantage of vuex state-management. 