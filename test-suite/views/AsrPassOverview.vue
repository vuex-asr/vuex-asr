<template>
  <div id="asr-pass-overview">
    <pass-example-component
      asr-bind-state="message IS v-model"
      asr-debug
    ></pass-example-component>
  </div>
</template>

<script>
import PassExampleComponent from "../components/PassExampleComponent";

export default {
  components: {
    PassExampleComponent
  }
};
</script>
