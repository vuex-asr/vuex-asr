# hello world example with a getter

In the [previous example (codesandbox)](./hello-world-example.html) you saw how we could bind a state variable directly to a component. We could do the same thing with a getter.

## getters

Let's bind a getter in the same example:

In the App.vue component we use to demonstrate the use of vuex-asr to bind the `message` value from the store to a component:
```vue{6}
    // src/App.vue
    
    <template>
      <div id="app">
        <example-message asr-bind-state="message"/>
        <example-message asr-bind-getters="messageCapitalized AS message"/>
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
Notice the `asr-bind-getters` property in the `<example-message>` component. This binds the `messageCapitalized` getter from the store to the component. If the store updates the state variable `message` the getter `messageCapitalized` will be updated too. And therefor the bound instance of the component will be update too.

## aliasing

Although the getter `messageCapitalized` is bound to the example component, the example-component doesn't have a variable to bind it too yet, it uses `message` instead.

```vue{4}
    // src/components/ExampleMessage.vue
    
    <template>
      <p>{{ message }}</p>
    </template>
```

To overcome this we could alias the getter to map the binding to the component, so we go back to app and use the `AS` keyword:

To alias getMessage to 'message'


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

Now we are able to reuse the component with another binding.

more on aliasing is discussed [here](./aliasing.html).

But hold on we're not completely done yet, just to show a primitive example of two-way-binding with VUEX-ASR we need to create an input so we can **mutate** the variable and see if this actually updates the variable in dependent components...
