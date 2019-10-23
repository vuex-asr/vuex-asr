# binding a configuration

Since vuex-asr is intended to make building large scale applications more easy let's see how we could bind multiple objects to a component with the use of a configuration.

For a quick overview go to the sandbox environment to follow along:

[binding a configuration example](https://codesandbox.io/s/manual-bind-a-configuration-mtk1n)

## asr-bind-config

At first asr-bind-state-config was intended to replace the multiple variable declaration at component asr-bind-state property as shown in the [previous chapter](./binding-multiple-objects-to-a-component.html). But I found that both options have their own charm.

So what is this  anyway:

 `asr-bind-state-config` elevates the declaration of bindings from the Vue template to the store.

Below an example store:
```js{6-27}
export default new Vuex.Store({
...
  state: {
    message: "message in the root of the store",
    anotherMessage: "another message in the root of the store",
    messageConfig: [
      {
        binderType: "state",
        bind: "message"
      },
      {
        binderType: "actions",
        bind: "setMessageAsync",
        alias: "setMessage"
      },
      {
        binderType: "getters",
        bind: "messageCapitalized",
        alias: "anotherMessage"
      },
      {
        binderType: "state",
        namespace: "USER/SETTINGS",
        bind: "message",
        alias: "userSettingsMessage"
      }
    ]
    
    ...
  },
```
now we bind the config to a component in our App.vue file:
```vue{5}
    // src/App.vue
    
    <template>
      <div id="app">
        <message-board asr-bind-state-config="messageConfig" />
      </div>
    </template>
    ...
    </script>
```

And that's it.

Let's see what the properties of config item do:

## binderType

With the binderType property we assign what type of binding we have, the options are:

- state
- getters
- mutations
- actions

## namespace

The namespace property is by default null and defaults to the root.

In the messageConfig from above you can see that we bind a message from the namespace `USER\SETTINGS`

::: tip
The capitalization of the namespaces is just a preference.
:::  

## bind

The bind property contains the name of the variable as stored in it's namespace.

## alias

The alias property contains the name of the variable as used in the component.

::: warning
I'm looking for a nice implementation of this as an example and will post it on this page shortly.
::: 
