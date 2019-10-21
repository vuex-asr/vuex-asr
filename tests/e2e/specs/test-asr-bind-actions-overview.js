// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
const url = process.env.VUE_APP_DEV_SERVER_URL + "#/asr-bind-actions-overview/";

/**
 * A better `clearValue` for inputs having a more complex interaction.
 *
 * @export
 * @param {string} selector
 * @returns
 */
function betterClearValue(selector) {
  const { RIGHT_ARROW, BACK_SPACE } = this.api.Keys;
  return this.getValue(selector, result => {
    const chars = result.value.split("");
    // Make sure we are at the end of the input
    chars.forEach(() => this.setValue(selector, RIGHT_ARROW));
    // Delete all the existing characters
    chars.forEach(() => this.setValue(selector, BACK_SPACE));
  });
}

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
      // .betterClearValue("#bind-state-message-with-action-example")
      .setValue(
        "#bind-state-message-with-action-example > input",
        "changed by user input"
      )
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
      .assert.containsText(
        "#bind-state-message-with-action-deep-namespaced-aliased-example > p",
        "changed by user input"
      );

    browser.end();
  }
};
