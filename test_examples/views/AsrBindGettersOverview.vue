<template>
  <div class="asr-bind-getters-overview">
    <example-component
      id="bind-getters-messageCapitalized-example"
      asr-bind-getters="messageCapitalized AS message"
      asr-debug
    />

    <example-component
      id="bind-getters-namespaced-example"
      asr-bind-getters="USER|messageKebabCase AS message"
      asr-debug
    />
  </div>
</template>

<script>
import ExampleComponent from "../components/ExampleComponent";

export default {
  components: {
    ExampleComponent
  }
};
</script>
