// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
const url = process.env.VUE_APP_DEV_SERVER_URL + "#/asr-bind-getters-overview/";

module.exports = {
  "Test for asr-bind-getters-overview": browser => {
    browser
      .url(url)
      .waitForElementVisible("#app", 5000)
      .assert.elementPresent(".example-component")
      .assert.containsText(
        "#bind-getters-messageCapitalized-example > p",
        "MESSAGE IN THE ROOT OF THE STORE"
      )
      .assert.containsText(
        "#bind-getters-namespaced-example > p",
        "This-is-a-message-in-the-USER-module"
      );

    browser.end();
  }
};
