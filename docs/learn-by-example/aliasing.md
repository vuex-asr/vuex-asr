# aliasing

In the [hello world example](./hello-world-example.html) we saw that we can bind a variable from the store to the component with asr-bind-state. In the [hello world of 2 way binding example](./hello-world-of-2-way-binding.html) we saw we can bind a model that can mutate a store object.

Now it's time to see how we can make a component reusable by making use of the alias function of Vuex ASR.

For a quick overview go to the sandbox environment to follow along:

[aliasing example (codesandbox)](https://codesandbox.io/s/manual-aliasing-qer7w)

## reusability

A lot of programmers would say that the holy grail of programming is avoiding repetition of code. In other words make code as generic as possible to be able to reuse it. 2-way-binding up until now has been quite a pain in the ass since we need to explicitly tell a component to what store objects (a.k.a. store variables) it is bound.

::: tip
Vuex ASR hoists model binding to the attribute level of the component, meaning that the component itself could have generic names, that are independent of the name of the model to be bound.
::: 

This might sound a bit abstract, let's take a look at what this means:

## anotherMessage AS message

VuexASR is here to prevent you from doing so. Let's see how this works out. 

Let's say we have two messages in our store:
```js{8}
    // src/vuex/store
    
    ...
    
    const Store = new Vuex.Store({
      state: {
        message: "This is a message in the Root of VUEX",
        anotherMessage: "This is ANOTHER message in the Root of VUEX",
      }
    });
    
    ...
```
Now let's see if we can display them both using the same components as we used in out previous example.
```vue{6,9}
    // src/App.vue
    
    <template>
      <div id="app">
        <example-message asr-bind-state="message"/>
    	<example-message asr-bind-state="anotherMessage AS message"/>
    
        <text-input asr-bind-state="message IS v-model"/>
        <text-input asr-bind-state="anotherMessage AS message IS v-model"/>
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
Notice that we use the `AS` keyword that tells to use `anotherMessage` as `message`. So the components `<example message>` and `<text-input>` could remain using message in their template.

Also notice that (of course) we still are able to use the `IS` keyword to tell vuex asr that anotherMessage is a model that could be mutated.

For completeness:

```vue
    // src/components/ExampleMessage.vue
    
    <template>
      <p>{{ message }}</p>
    </template>
```

```vue
    // src/components/TextInput.vue
    
    <template>
      <input v-model="message">
    </template>
```

So this means a **generic** name in the component and specific names in the store. 

Here an image of something happy