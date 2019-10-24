# aliasing

It's time to see how we can make a component reusable by making use of the aliasing functionality of vuex-asr.

For a quick overview go to the sandbox environment to follow along:

::: tip
For a quick overview go to the sandbox environment to follow along:
[aliasing example (codesandbox)](https://codesandbox.io/s/manual-hello-world-example-3tx2w)
:::

## alias convention for all binders

The examples in this chapter illustrate how you could implement aliasing with `asr-bind-state`, but the convention is the same for all of the binders:
- asr-bind-state
- asr-bind-getters
- asr-bind-mutations
- asr-bind-actions
- asr-bind-config
- asr-pass (you could also alias a pass variable!)

## reusability

A lot of programmers would say that the holy grail of programming is avoiding repetition of code. In other words making code as generic as possible to be able to reuse it. Two-way-binding up until now has been quite a pain in the ass since we need to explicitly tell a component to what store items (state, getters, mutations and actions) it is bound.

This might sound a bit abstract, let's take a look at what this means:

## anotherMessage AS message

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
Notice that we use the `AS` keyword to map `anotherMessage` to `message`. So the components `<example message>` and `<text-input>` can remain using the variable `message` in their template.

Also notice that we are still able to use the `IS` keyword to tell vuex-asr that `anotherMessage` is a model.

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

So this means a **generic** name in the component and specific names in the store correctly mapped in the component's attribute offering a lot of flexibility :nerd_face:. 

## next steps

In the next chapter we go deeper into [namespacing](./namespacing.html) and how this feature could help us to further improve the organisation of our front-end codebase. 