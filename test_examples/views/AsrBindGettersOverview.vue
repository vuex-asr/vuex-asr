<template>
  <div class="asr-bind-getters-overview">
    <example-component
      id="bind-getters-messageCapitalized-example"
      asr-bind-getters="messageCapitalized AS message"
      asr-debug
    />


  </div>
</template>

<script>
// For this example and test content we use a seperate store
// for clarity.

// import { AsrBindStateOverviewStore } from "./AsrBindStateOverviewStore";
import ExampleComponent from "../components/ExampleComponent";
// import ExampleComponentWithInput from "../components/ExampleComponentWithInput";

export default {
  components: {
    ExampleComponent,
    // ExampleComponentWithInput
  }
};
</script>
