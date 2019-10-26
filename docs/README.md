# Vuex-ASR - Automated Store Resolution for Vue | Documentation

* Version: 0.7.2
* License M.I.T.
* [Github Repository](https://github.com/vuex-asr/vuex-asr)
* author: Joris Wenting
* email: vuex.asr@gmail.com
* [linkedIn](https://www.linkedin.com/in/joriswenting/).
* [contribute](./helpers/contribute.html)

## install

You can install the package via NPM:

```bash
npm install vuex-asr
```

::: tip get started
For installation and trying out vuex-asr follow the [step by step guide](step-by-step-guide/prerequisite.html) it contains examples with codesandboxes so you could start right away with exploring the features, with no setup required.
:::

## quick summary

Vuex-asr removes the necessity to describe your vuex store bindings in the component's script [state](step-by-step-guide/hello-world-example.html), [getters](step-by-step-guide/getters-example.html), [mutations](step-by-step-guide/mutations.html) and [actions](step-by-step-guide/actions.html). 

The plugin automatically resolves  bindings and is able to map them from the component's attributes, allowing your component's code to become **generic** and **independent** from the Vuex store :sunglasses:.

vuex-asr provides full interactivity with vuex.

### generic components able to be stateful

With vuex-asr you could start developing your codebase with generic components (no bindings described in the component code) and hook them up to the vuex ecosystem, by the attribute of the component.

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