# hello world example with a getter

In the [previous example (codesandbox)](./hello-world-example.html) you saw how we could bind a state variable directly to a component. We could do the same thing with a getter.

## getters

Let's bind a getter in the same example, with the following store:

```js{13-15}
    // src/vuex/store.js
    
    import Vue from "vue";
    import Vuex from "vuex";
    
    Vue.use(Vuex);
    
    const Store = new Vuex.Store({
      state: {
        message: "This is a message in the Root of VUEX",
      },
      getters: {
        messageCapitalized: state => {
          return state.message.toUpperCase();
        }
    },
    });
    
    export { Store };
```



In the App.vue component we use vuex-asr to bind the `messageCapitalized` value from the store to a component:
```vue{6}
    // src/App.vue
    
    <template>
      <div id="app">
        <example-message asr-bind-state="message"/>
        <example-message-getter asr-bind-getters="messageCapitalized"/>
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
Notice the `asr-bind-getters` property in the `<example-message>` component. This binds the `messageCapitalized` getter from the store to the component. If the store updates the state variable `message` the value of the getter `messageCapitalized` will be updated too.

But since the `example component` uses the variable name `message` we have to alias `messageCapitalized.

## aliasing

If we wanna use `messageCapitalized` in the example-component:
 
 ```vue{4}
     // src/components/ExampleMessage.vue
     
     <template>
       <p>{{ message }}</p>
     </template>
 ```
 
We could make use of the alias function with the keyword `AS`
to map the getter to the variable name `message`:

```vue{6}
    // src/App.vue
    
    <template>
      <div id="app">
        <example-message asr-bind-state="message"/>
        <example-message asr-bind-getters="messageCapitalized AS message"/>
      </div>
    </template>
    ...
```

More on aliasing is discussed [here](./aliasing.html).

## next steps

We're not completely done yet, just to show a primitive example of two-way-binding with vuex-asr we need to create an input so we can **mutate** the variable and see if this actually updates the variable in dependent components.
