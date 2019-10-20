<template>
  <div class="example-component-with-input">
    <p class="message">{{ message }}</p>
    <input v-model="message" />
  </div>
</template>

<script>
export default {
  computed: {
    message: {
      get() {
        return this.message;
      },
      set(value) {
        this.setMessage(value);
      }
    }
  }
};
</script>
