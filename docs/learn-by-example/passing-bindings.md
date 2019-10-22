# passing bindings

For a quick overview go to the sandbox environment to follow along:

[asr pass example (codesandbox)](https://codesandbox.io/s/manual-asr-pass-zl2o9)

## passing a binding to a child component

This is in my opinion one of the most important features of the vuex-asr plugin. It gives you the ability to pass model-bindings to a child component.

This means that a model that has already been bound to the component, either via vuex-asr or conventionally in the component itself will be `passable` to a child component. Giving you ultimate flexibility in organising and generalising your codebase.

You could use asr-pass also in conventional Vue (or Vuex) projects, it instantly gives you the flexibility from being able to omit direct bindings in your child templates 😎

## example

So let's say we bind a model in our App file to a component `<example-message>`:
```vue{6}
    // src/App.vue
    
    <template>
      <div id="app">
        <p>In this example we will bind a store model here:</p>
        <example-message asr-bind-state="message IS v-model"/>
      </div>
    </template>
    
    ...
```
And pass it inside `<example-message>` to `<example-pass-child>`:
```vue{8}
    // src/components/ExampleMessage.vue
    
    <template>
      <div id="exampleMessage">
        <p>Print it in this component</p>
        {{ message }}
        <p>And pass it from here to a child component</p>
        <example-pass-child asr-pass="message"/>
      </div>
    </template>
    
    ...
```
note the `asr-pass` attribute, since message was bound to this component it is available to be passed to a child component.
```vue{6,7}
    // src/components/ExamplePassChild.vue
    
    <template>
        <div id="asrPassChild">
            <h1>This is the child with the variable "message" passed:</h1>
            <p>{{ message }}</p>
            <input v-model="message"/>
        </div>
    </template>
```
There's nothing more to it to start using it. 

[About generalisation](https://www.notion.so/660be4a3581f40d8a70cc0c4f471eb41)