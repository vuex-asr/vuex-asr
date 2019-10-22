<template>
  <div class="asr-bind-config-overview">
    <example-component-bind-config asr-bind-config="messageConfig" asr-debug/>
  </div>
</template>

<script>
import ExampleComponentBindConfig from "../components/ExampleComponentBindConfig";

export default {
  components: {
    ExampleComponentBindConfig
  }
};
</script>
