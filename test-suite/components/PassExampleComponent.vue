<template>
  <div class="pass-example-component">
    <example-component-with-input asr-pass="message" asr-debug/>
  </div>
</template>

<script>
import ExampleComponentWithInput from "../components/ExampleComponentWithInput";

export default {
  components: {
    ExampleComponentWithInput
  }
};
</script>
