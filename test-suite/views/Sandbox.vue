<template>
  <div id="asr-pass-overview">
    <some-component
      asr-bind-state="
                anotherMessage AS message IS v-model,
    			USER|first AS firstName,
    			USER|last AS lastName"
      asr-debug
    />
  </div>
</template>

<script>
import SomeComponent from "../components/SomeComponent";

export default {
  components: {
    SomeComponent
  }
};
</script>
