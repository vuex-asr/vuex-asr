<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/asr-bind-state-overview">asr-bind-state</router-link> |
      <router-link to="/example-getters">Getters</router-link> |
      <router-link to="/about">About</router-link>
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
  font-size: 1.1em;
  text-align: center;
  padding: 8px 10px;
  margin: 2px 0;
  border: none;
  border-radius: 2px;
  cursor: pointer;
}
p.help-text {
  font-size: 1em;
}

div.example-component,
div.example-component-with-input {
  width: 60%;
  font-size: 1.1em;
  margin: 1px auto 1px auto;
  border: 1px solid #2C3E50;
  padding: 8px;
}

div.asr-bind-state-overview {
  align-text: center;
}
</style>
