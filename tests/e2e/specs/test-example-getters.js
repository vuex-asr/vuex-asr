// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
const url = process.env.VUE_APP_DEV_SERVER_URL + "#/example-getters/";

module.exports = {
  "Test for Example Getters": browser => {
    browser
      .url(url)
      .waitForElementVisible("#app", 5000)
      .assert.elementPresent(".example-component")
      .assert.containsText("p", "MESSAGE IN EXAMPLES/GETTERS/STORE.JS")
      .end();
  }
};
