# Vuex-ASR - Automated Store Resolution for Vue | Documentation

* Version: 0.7 Beta RC
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


## quick summary

Vuex-asr removes the necessity to describe your vuex store bindings in the component's script [state](./vuex-asr/learn-by-example/hello-world-example.html), [getters](./vuex-asr/learn-by-example/getters-example.html), [mutations](./vuex-asr/learn-by-example/mutations.html) and [actions](./vuex-asr/learn-by-example/actions.html). 

The plugin automatically resolves  bindings and is able to map them from the component's attributes, allowing your component's code to become **generic** and **independent** from the Vuex store :sunglasses:.

vuex-asr provides full interactivity with vuex.

::: tip
Follow the [step by step manual](./vuex-asr/learn-by-example/hello-world-example.html) to get started.
:::

## tl;dr

### generic components able to be stateful

With vuex-asr you could start developing your codebase with generic components (no bindings described in the component code) and hook them up to the vuex ecosystem, by the attribute of the component.

### simple example
You could do something like this:

```vue
<message-component asr-bind-state="User/Settings/notifyMessage AS message"/>
```

Which will bind the the state item `notifyMessage`, living in the namespace `User/Settings`, AS `message` to the `<message-component>`. 

```vue{5}
// MessageComponent.vue

<template>    
    <div class="some-markup">
        {{ message }}
    </div>
</template>
    >
```

::: tip
about reactivity: If `User/Settings/notifyMessage` updates in the store, the `message` in `<message-component>` will update too.
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

In this case we bind [state](./vuex-asr/learn-by-example/hello-world-example.html), [getters](./vuex-asr/learn-by-example/getters-example.html), [mutations](./vuex-asr/learn-by-example/mutations.html) and [actions](./vuex-asr/learn-by-example/actions.html) items to `<some-component>`. 

