<template>
  <div class="asr-bind-state-overview">
    <example-component
      id="bind-state-simple-message-example"
      asr-bind-state="message"
    />

    <example-component
      id="bind-state-another-message-example"
      asr-bind-state="anotherMessage AS message"
    />

    <example-component
      id="bind-state-namespace-example"
      asr-bind-state="USER|message"
    />

    <example-component
      id="bind-state-namespace-alias-example"
      asr-bind-state="USER|anotherMessage AS message"
    />

    <example-component-with-input
      id="bind-state-message-as-v-model-example"
      asr-bind-state="message IS v-model"
    />

    <example-component-with-input
      id="bind-state-another-message-as-v-model-example"
      asr-bind-state="anotherMessage AS message IS v-model"
    />
  </div>
</template>

<script>
// For this example and test content we use a seperate store
// for clarity.

// import { AsrBindStateOverviewStore } from "./AsrBindStateOverviewStore";
import ExampleComponent from "../components/ExampleComponent";
import ExampleComponentWithInput from "../components/ExampleComponentWithInput";

export default {
  name: "Asr Bind State Overview",
  // store: AsrBindStateOverviewStore,
  components: {
    ExampleComponent,
    ExampleComponentWithInput
  }
};
</script>
