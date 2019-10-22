<template>
  <div class="example-component-with-input">
    <p class="message">{{ message }}</p>
    <input v-bind:value="message" @keyup="setMessage">
  </div>
</template>


