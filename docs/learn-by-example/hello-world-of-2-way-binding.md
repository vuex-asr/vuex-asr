# hello world of 2 way binding

In the [hello world example](./hello-world-example.html) we saw that we can bind a variable from the store to the component with asr-bind-state. Now let's see if we can update the variable in one component and see it being updated in the other. For this we'll extend our hello world example.

For a quick overview go to the sandbox environment to follow along:

[hello world of 2 way binding example (codesandbox)](https://codesandbox.io/s/manual-hello-world-of-2-way-binding-lcjpx)

## binding a model

To make the store variable `message` (as we used in our previous example) 2-way-bound, we need to tell the component that the variable is a model. (Meaning it implements both a getter and a setter).

::: tip
Binding a state item and being able to mutate it is called model binding. In this example we are going to bind an item from the state directly as a model. This is quite useful in the rapid-prototyping phase of the project, but **NOT RECOMMEND** in production. For production it is recommended to use vuex mutations for synchronous and actions for asynchronous mutations of (multiple) state items. Read more in [advanced 2 way binding](./advanced-2-way-binding.html)
::: 

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

Now that we have our variable message availlable as a model we can simply assign it to an input's v-model property:
```vue{4}
    // src/components/TextInput.vue
    
    <template>
      <input v-model="message">
    </template>
```
and that's all.

If you now change the contents of the message in the input field that is rendered you'll see that also the message in the `example-message` component is updated.

As already stated before vuex-asr was created with the intention of making building large-scale applications easier, we've already discussed aliasing in the 'getters' example but let's how we could use aliasing to make reusability of components a breeze in the next chapter.