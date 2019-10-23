// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
const url = process.env.VUE_APP_DEV_SERVER_URL + "#/asr-bind-config-overview/";

module.exports = {
  "Test for asr-bind-config-overview": browser => {
    browser
      .url(url)
      .waitForElementVisible("#app", 5000)
      .assert.containsText(".message-p", "message in the root of the store")
      .assert.value(".message-v-model", "message in the root of the store")
      .assert.containsText(
        ".message-capitalized",
        "MESSAGE IN THE ROOT OF THE STORE"
      )
      .assert.containsText(
        ".user-settings-message",
        "This is a message in the user settings module for sure"
      )
      .setValue(".message-v-model", "changed by user input")
      .pause(1000)
      .assert.containsText(".message-p", "changed by user input");

    browser.end();
  }
};
