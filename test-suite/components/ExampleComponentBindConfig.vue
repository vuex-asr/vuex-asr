<template>
  <div class="example-component-bind-config">
    <p>message:</p>
    <p>{{ message }}</p>
    <p>message as a model:</p>
    <input v-bind:value="message" @keyup="setMessage" />
    <p>anotherMessage (alias from messageCapitalized)</p>
    <p>{{ anotherMessage }}</p>
    <p>userSettingsMessage (alias from message in USER/settings namespace)</p>
    <p>{{ userSettingsMessage }}</p>
  </div>
</template>
