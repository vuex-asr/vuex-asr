# Vuex-ASR - Automated Store Resolution for Vue | Documentation

* Version: 0.7.2
* License M.I.T.
* [Github Repository](https://github.com/vuex-asr/vuex-asr)
* author: Joris Wenting
* email: vuex.asr@gmail.com
* [linkedIn](https://www.linkedin.com/in/joriswenting/).
* [contribute](https://vuex-asr.github.io/vuex-asr/vuex-asr/helpers/contribute.html)

## install

You can install the package via NPM:

```bash
npm install vuex-asr
```


## quick summary

Vuex-asr removes the necessity to describe your vuex store bindings in the component's script [state](https://vuex-asr.github.io/vuex-asr/vuex-asr/learn-by-example/hello-world-example.html), [getters](https://vuex-asr.github.io/vuex-asr/vuex-asr/learn-by-example/getters-example.html), [mutations](https://vuex-asr.github.io/vuex-asr/vuex-asr/learn-by-example/mutations.html) and [actions](https://vuex-asr.github.io/vuex-asr/vuex-asr/learn-by-example/actions.html). 

The plugin automatically resolves  bindings and is able to map them from the component's attributes, allowing your component's code to become **generic** and **independent** from the Vuex store :sunglasses:.

vuex-asr provides full interactivity with vuex.

Follow the [step by step manual](https://vuex-asr.github.io/vuex-asr/vuex-asr/learn-by-example/hello-world-example.html) to get started.

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

::: tip about reactivity
If `User/Settings/notifyMessage` updates in the store, the `message` in `<message-component>` will update too.
:::

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

In this case we bind [state](https://vuex-asr.github.io/vuex-asr/vuex-asr/learn-by-example/hello-world-example.html), [getters](https://vuex-asr.github.io/vuex-asr/vuex-asr/learn-by-example/getters-example.html), [mutations](https://vuex-asr.github.io/vuex-asr/vuex-asr/learn-by-example/mutations.html) and [actions](https://vuex-asr.github.io/vuex-asr/vuex-asr/learn-by-example/actions.html) items to `<some-component>`. 

### Contribution guidelines ###

#### Writing tests
create a test file in
./tests/NameOfYourTest.vue
and see
./tests/ExampleTest.vue
for conventions.

On a more general level, try to be concise in formulating the objective of your test.

And please also share work in progress if you get stuck, include a link to a codesandbox or scrimble.

#### Code review

I solo started this project and I'm looking for help, so please contact me if you are interested.

This also means that at the moment I cannot promise other than that I will do my best to keep up with requests for code review. 