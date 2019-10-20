<template>
  <div class="asr-bind-mutations-overview">
    <example-component-with-getter-and-setter
      id="bind-state-message-with-mutation-example"
      asr-bind-state="message"
      asr-bind-mutations="setMessage"
    />

    <example-component
      id="just-for-reference"
      asr-bind-getters="USER/SETTINGS|anotherMessageReversed AS message"
    />

    <example-component-with-getter-and-setter
      id="bind-state-message-with-mutation-deep-namespaced-aliased-example"
      asr-bind-state="USER/SETTINGS|anotherMessage AS message"
      asr-bind-mutations="USER/SETTINGS|setAnotherMessage AS setMessage"
    />
  </div>
</template>

<script>
import ExampleComponent from "../components/ExampleComponent";
import ExampleComponentWithGetterAndSetter from "../components/ExampleComponentWithGetterAndSetter";

export default {
  components: {
    ExampleComponent,
    ExampleComponentWithGetterAndSetter
  }
};
</script>
