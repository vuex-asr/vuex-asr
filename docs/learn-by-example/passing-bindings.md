# passing a binding to a child component

An important feature of the vuex-asr plugin is the ability to pass model-bindings to a child component.

This means that a model that has already been bound to the component, either via vuex-asr or conventionally in the component itself, can also be passed to a child component. Giving you ultimate flexibility in organising and generalising your codebase.


::: tip
You could use `asr-pass` in existing vue projects without using other vuex-asr functionality, to pass a binding from a parent- to a child-component.
:::

::: tip
For a quick overview go to the sandbox environment to follow along:
[asr-pass](https://codesandbox.io/s/manual-asr-pass-nvcd5)
:::


## example

So let's say we bind a model in our App file to a component `<pass-example-component>`:
```vue{5}
    // src/App.vue
    
    <template>
      <div id="app">
        <pass-example-component asr-bind-state="message IS v-model"/>
      </div>
    </template>
    
    ...
```
And pass it inside `<pass-example-component>` to `<text-input>`:
```vue{8}
    // src/components/ExampleMessage.vue
    
    <template>
      <div class="pass-example-component">
        <p>Print it in this component</p>
        {{ message }}
        <p>And pass it from here to a child component</p>
        <text-input asr-pass="message"/>
      </div>
    </template>
    
    ...
```
Notice the `asr-pass` attribute, since message was bound to this component it is available to be passed to a child component.
```vue{6,7}
    // src/components/TextInput.vue
    
    <template>
        <div class="text-input">
            <h1>This is the child with the variable "message" passed:</h1>
            <p>{{ message }}</p>
            <input v-model="message"/>
        </div>
    </template>
```
There's nothing more to it.

## next steps

In the next chapter we take a look at how to bind multiple state items.
