// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
const url = process.env.VUE_APP_DEV_SERVER_URL + "#/asr-bind-mutations-overview/";

module.exports = {
  "Test for asr-bind-mutations-overview": browser => {
    browser
      .url(url)
      .waitForElementVisible("#app", 5000)
      .assert.elementPresent(".example-component")
      .assert.containsText(
        "#bind-state-message-with-mutation-example > p",
        "message in the root of the store"
      )
      .setValue(
        "#bind-state-message-with-mutation-example > input",
        "changed by user input"
      )
      .assert.containsText(
        "#bind-state-message-with-mutation-example > p",
        "changed by user input"
      )
      .assert.value(
        "#bind-state-message-with-mutation-deep-namespaced-aliased-example > input",
        "This is another message in the user settings module for sure"
      )
      .setValue(
        "#bind-state-message-with-mutation-deep-namespaced-aliased-example > input",
        "changed by user input"
      )
      .assert.containsText(
        "#bind-state-message-with-mutation-deep-namespaced-aliased-example > p",
        "changed by user input"
      );

    browser.end();
  }
};
