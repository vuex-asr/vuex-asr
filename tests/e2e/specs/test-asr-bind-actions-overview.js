// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
const url = process.env.VUE_APP_DEV_SERVER_URL + "#/asr-bind-actions-overview/";

module.exports = {
  "Test for asr-bind-actions-overview": browser => {
    browser
      .url(url)
      .waitForElementVisible("#app", 5000)
      .assert.elementPresent(".example-component")
      .assert.containsText(
        "#bind-state-message-with-action-example > p",
        "message in the root of the store"
      )
      .setValue(
        "#bind-state-message-with-action-example > input",
        "changed by user input"
      )
      .pause(1000)
      .assert.containsText(
        "#bind-state-message-with-action-example > p",
        "changed by user input"
      )
      .assert.value(
        "#bind-state-message-with-action-deep-namespaced-aliased-example > input",
        "This is another message in the user settings module for sure"
      )
      .setValue(
        "#bind-state-message-with-action-deep-namespaced-aliased-example > input",
        "changed by user input"
      )
      .pause(1000)
      .assert.containsText(
        "#bind-state-message-with-action-deep-namespaced-aliased-example > p",
        "changed by user input"
      );

    browser.end();
  }
};
