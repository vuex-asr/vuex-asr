<template>
  <div class="asr-bind-state-overview">
    <p>bind the Store.state.message to the component by attribute</p>

    <example-component id="bind-state-message-example" asr-bind-state="message">
    </example-component>

    <p>
      bind the Store.state.anotherMessage to the component and alias it to keep
      generic
    </p>

    <example-component
      id="bind-state-another-message-example"
      asr-bind-state="anotherMessage AS message"
    >
    </example-component>

    <example-component-with-input
      id="bind-state-message-as-v-model-example"
      asr-bind-state="message IS v-model"
    >
    </example-component-with-input>
  </div>
</template>

<script>
// For this example and test content we use a seperate store
// for clarity.

import { AsrBindStateOverviewStore } from "./AsrBindStateOverviewStore";
import ExampleComponent from "../components/ExampleComponent";
import ExampleComponentWithInput from "../components/ExampleComponentWithInput";

export default {
  name: "Asr Bind State Overview",
  store: AsrBindStateOverviewStore,
  components: {
    ExampleComponent,
    ExampleComponentWithInput
  }
};
</script>
