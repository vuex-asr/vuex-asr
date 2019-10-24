<template>
  <div class="asr-bind-actions-overview">
    <example-component-with-event-handler
      id="bind-state-message-with-mutation-from-event-handler"
      asr-bind-state="message"
      asr-bind-actions="setMessageAsync AS setMessage"
    />

    <example-component
      id="just-for-reference"
      asr-bind-getters="USER/SETTINGS/anotherMessageReversed AS message"
    />

    <example-component-with-getter-and-setter
      id="bind-state-message-with-action-deep-namespaced-aliased-example"
      asr-bind-state="USER/SETTINGS/anotherMessage AS message"
      asr-bind-actions="USER/SETTINGS/setAnotherMessageAsync AS setMessage"
    />
  </div>
</template>

<script>
import ExampleComponent from "../components/ExampleComponent";
import ExampleComponentWithEventHandler from "../components/ExampleComponentWithEventHandler";
import ExampleComponentWithGetterAndSetter from "../components/ExampleComponentWithGetterAndSetter";

export default {
  components: {
    ExampleComponent,
    ExampleComponentWithEventHandler,
    ExampleComponentWithGetterAndSetter
  }
};
</script>
