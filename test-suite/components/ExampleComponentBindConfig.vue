<template>
  <div class="example-component-bind-config">
    <p>message:</p>
    <p class="message-p">{{ message }}</p>
    <p>message as a model:</p>
    <input class="message-v-model" v-bind:value="message" @keyup="setMessage" />
    <p>anotherMessage (alias from messageCapitalized)</p>
    <p class="message-capitalized">{{ anotherMessage }}</p>
    <p>userSettingsMessage (alias from message in USER/settings namespace)</p>
    <p class="user-settings-message">{{ userSettingsMessage }}</p>
  </div>
</template>
