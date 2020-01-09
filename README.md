# Vuex-ASR - Automated Store Resolution for Vue

* Version: 0.7.50
* License M.I.T.
* [Online Documentation](https://vuex-asr.github.io/vuex-asr/)
* author: Joris Wenting
* email: vuex.asr@gmail.com
* [linkedIn](https://www.linkedin.com/in/joriswenting/).
* [contribute](https://vuex-asr.github.io/vuex-asr/helpers/contribute.html)

## Update
30-12-2019: overwrite local variables with store bindings! Documentation will be updated soon with examples.
9-1-2019: fix broken asr-pass functionality

## Example TodoMVC app
For a quick overview of a full implementation of vuex-asr, take a look at the codesandbox [todo-mvc-example](https://codesandbox.io/s/template-test-tdvm7?fontsize=14&module=%2Fsrc%2FApp.vue) or visit the [git-repository](https://github.com/vuex-asr/todo-mvc-vuex-asr).

## install

You can install the package via NPM:

```bash
npm install vuex-asr
```
## setup

In your (typically) main.js:

```javascript
import Vue from "vue";
import App from "./App.vue";
import { Store } from "./vuex/store";
import VuexASR from "vuex-asr";

Vue.use(VuexASR);

new Vue({
  render: h => h(App),
  store: Store
}).$mount("#app");
```
and you're ready to use vuex-asr.

## what is vuex-asr?

Vuex-asr removes the necessity to describe your vuex store bindings in the component's script. With vuex-asr you're able to bind [state](step-by-step-guide/hello-world-example.html), [getters](step-by-step-guide/getters-example.html), [mutations](step-by-step-guide/mutations.html) and [actions](step-by-step-guide/actions.html) from the component's attributes\directives:

- asr-bind-state
- asr-bind-getters
- asr-bind-mutations
- asr-bind-actions

The plugin automatically resolves  bindings and is able to map them from the component's attributes, allowing your component's code to become **generic** and **independent** from the Vuex store :sunglasses:.

vuex-asr provides full interactivity with vuex.

## codesandbox examples
The [step by step guide](https://vuex-asr.github.io/vuex-asr/step-by-step-guide/prerequisite.html) contains examples with codesandboxes so you could start right away with exploring the features, with no setup required.

## tl;dr

### generic components able to be stateful

With vuex-asr you could start developing your codebase with generic components (no bindings described in the component code) and hook them up to the vuex ecosystem, by the attribute of the component.

### simple example
Assume you have a vuex store:

```javascript
const Store = new Vuex.Store({
  state: {
    message: "This is a message in the Root of VUEX",
  }
});
```

With `asr-bind-state` you could bind the state item `message` like this:

```vue
<message-component asr-bind-state="message"/>
```

If you have your state item in a `namespace` you could bind it like this:

```vue
<message-component asr-bind-state="User/Settings/message"/>
```

If you have to `alias` your state item to match components name convention:

```vue
<message-component asr-bind-state="User/Settings/notifyMessage AS message"/>
```

This will bind the the state item `notifyMessage`, living in the namespace `User/Settings`, AS `message` to the `<message-component>`. 

```vue
// MessageComponent.vue

<template>    
    <div class="some-markup">
        {{ message }}
    </div>
</template>
```

### about reactivity
If `User/Settings/notifyMessage` updates in the store, the `message` in `<message-component>` will update too.

### a more complex implementation

We could also use it to provide more complex components with store bindings:

```vue
    <some-component
      asr-bind-state="
        message, 
        USER/userObject AS user,
        PHOTOS/recentPhotos
        PHOTOS/likedPhotos"
      asr-bind-getters="
        PHOTOS/recentPhotos
        PHOTOS/likedPhotos"
      asr-bind-mutations="
        USER/setMessageUser
        PHOTOS/addNewPhoto"
      asr-bind-actions="
        PHOTOS/fetchNewPhotos"
    ></some-component>
```

In this case we bind [state](https://vuex-asr.github.io/vuex-asr/step-by-step-guide/hello-world-example.html), [getters](https://vuex-asr.github.io/vuex-asr/step-by-step-guide/getters-example.html), [mutations](https://vuex-asr.github.io/vuex-asr/step-by-step-guide/mutations.html) and [actions](https://vuex-asr.github.io/vuex-asr/step-by-step-guide/actions.html) items to `<some-component>`. 

Follow the [step by step manual](https://vuex-asr.github.io/vuex-asr/step-by-step-guide/hello-world-example.html) to get started it contains sandboxes, so no setup is required to try out all of the examples and fiddle around.
