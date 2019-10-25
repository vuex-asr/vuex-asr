# advanced 2 way binding

In hello world of 2-way binding we discussed how to directly interact with a state-item using `IS v-model`. Although handy in prototyping phase, directly mutating the state is not the way to make use of a state manager, you miss out the power that comes with creating mutations.

If you wanna create a two way binding with a mutation there are two ways you could work:

::: tip
For a quick overview go to the sandbox environment to follow along:
[advanced two way binding](https://codesandbox.io/s/manual-advanced-2-way-binding-wkcny)
:::

## create a generic getter and setter in your component

```vue{8,9}
// src/App.vue

<template>
  <div id="app">
    <img width="10%" src="./assets/logo.png">

        <ExampleComponentWithGetterAndSetter 
            asr-bind-state="message"
            asr-bind-mutations="setMessage"
        />

  </div>
</template>
```

Now the component has a state binding with `message` and a mutation binding with `setMessage`

Now in the 

```vue{11,18}
<template>
  <div class="example-component-with-getter-and-setter">
    <p class="message">{{ message }}</p>
    <input v-model="message" />
  </div>
</template>

<script>
export default {
  computed: {
    message: {
      get() {
        return this.message;
      },
      set(value) {
        this.setMessage(value);
      }
    }
  }
};
</script>
```


## work with an event-handler in your component



