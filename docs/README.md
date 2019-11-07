# vuex-asr
## Automated Store Resolution for Vue

* Version: 0.7.44
* License M.I.T.
* [Github Repository](https://github.com/vuex-asr/vuex-asr)
* author: Joris Wenting
* email: vuex.asr@gmail.com
* [linkedIn](https://www.linkedin.com/in/joriswenting/).
* [contribute](./helpers/contribute.html)

::: tip
For a quick overview of a full implementation of vuex-asr, take a look at the codesandbox [todo-mvc-example](https://codesandbox.io/s/template-test-tdvm7?fontsize=14&module=%2Fsrc%2FApp.vue)
::: 

### what is vuex-asr?

Vuex-asr removes the necessity to describe your vuex store bindings in the component's script. With vuex-asr you're able to bind [state](step-by-step-guide/hello-world-example.html), [getters](step-by-step-guide/getters-example.html), [mutations](step-by-step-guide/mutations.html) and [actions](step-by-step-guide/actions.html) from the component's attributes\directives:

- asr-bind-state
- asr-bind-getters
- asr-bind-mutations
- asr-bind-actions

The plugin automatically resolves  bindings and is able to map them from the component's attributes, allowing your component's code to become **generic** and **independent** from the Vuex store :sunglasses:.

vuex-asr provides full interactivity with vuex.

### install

You can install the package via NPM:

```bash
npm install vuex-asr
```
#### setup

In your (typically) main.js:

```javascript{3,4,6,10}
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

### simple example

Assume you have a vuex store:

```javascript{3}
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

```vue{5}
// MessageComponent.vue

<template>    
    <div class="some-markup">
        {{ message }}
    </div>
</template>
```

::: tip about reactivity
If `User/Settings/notifyMessage` updates in the store, the `message` in `<message-component>` will update too.
:::

### a more complex implementation

We could also use it to provide more complex components with store bindings:

```vue{2,7,10,13}
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

In this case we bind [state](step-by-step-guide/hello-world-example.html), [getters](step-by-step-guide/getters-example.html), [mutations](step-by-step-guide/mutations.html) and [actions](step-by-step-guide/actions.html) items to `<some-component>`. 

::: tip get familiar with the concepts
[hello world example](step-by-step-guide/hello-world-example.html).
:::
