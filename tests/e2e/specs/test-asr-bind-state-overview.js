// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
const url = process.env.VUE_APP_DEV_SERVER_URL + "#/asr-bind-state-overview/";

module.exports = {
  "Test for asr-bind-state-overview": browser => {
    browser
      .url(url)
      .waitForElementVisible("#app", 5000)
      .assert.elementPresent(".example-component")
      .assert.containsText(
        "#bind-state-simple-message-example > p",
        "message in the root of the store"
      )
      .assert.containsText(
        "#bind-state-another-message-example > p",
        "another message in the root of the store"
      )
      .assert.containsText(
        "#bind-state-message-as-v-model-example > p",
        "message in the root of the store"
      )
      .assert.value(
        "#bind-state-message-as-v-model-example > input",
        "message in the root of the store"
      )
      .setValue(
        "#bind-state-message-as-v-model-example > input",
        "changed by user input"
      )
      .assert.containsText(
        "#bind-state-simple-message-example > p",
        "changed by user input"
      )
      .assert.containsText(
        "#bind-state-message-as-v-model-example > p",
        "changed by user input"
      )
      .setValue(
        "#bind-state-another-message-as-v-model-example > input",
        "changed by user input"
      )
      .assert.containsText(
        "#bind-state-another-message-example > p",
        "changed by user input"
      )
      .assert.containsText(
        "#bind-state-another-message-as-v-model-example > p",
        "changed by user input"
      );

    browser.end();
  }
};
