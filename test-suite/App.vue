<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Vuex ASR</router-link> |
      <router-link to="/asr-bind-state-overview">asr-bind-state</router-link> |
      <router-link to="/asr-bind-getters-overview">asr-bind-getters</router-link> |
      <router-link to="/asr-bind-mutations-overview">asr-bind-mutations</router-link> |
      <router-link to="/asr-bind-actions-overview">asr-bind-actions</router-link> |
      <router-link to="/asr-bind-config-overview">asr-bind-config</router-link>
    </div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

input {
  width: 60%;
  background-color: #42b983;
  color: lightcyan;
  text-align: center;
  font-size: 1.1em;
  font-weight: 500;
  padding: 8px 10px;
  margin: 2px 0;
  border: none;
  border-radius: 2px;
  cursor: pointer;
}
p.help-text {
  width: 60%;
  font-size: 1em;
  margin: 10px auto;
}

div.example-component,
div.example-component-with-input,
div.example-component-bind-config {
  width: 60%;
  font-size: 1.1em;
  font-weight: 300;
  margin: 10px auto 10px auto;
  border: 1px solid #2c3e50;
  padding: 8px;
}

div.home,
div.asr-bind-state-overview {
  align-text: center;
  width: 100%;
}
</style>
