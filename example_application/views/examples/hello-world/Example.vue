<template>
  <div class="example-hello-world">
    <example-component asr-bind-state="message"></example-component>
  </div>
</template>

<script>
// @ is an alias to /src
import ExampleComponent from "../../../components/ExampleComponent.vue";
import { Store } from "./store";

export default {
  name: "Hello World Example",
  store: Store,
  components: {
    ExampleComponent
  }
};
</script>
