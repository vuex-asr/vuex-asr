// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
const url = process.env.VUE_APP_DEV_SERVER_URL + "#/asr-pass-overview/";

module.exports = {
  "Test for asr-pass-overview": browser => {
    browser
      .url(url)
      .waitForElementVisible("#app", 5000)
      .assert.elementPresent(".example-component-with-input")
      .assert.containsText(
        ".example-component-with-input > p",
        "message in the root of the store"
      )
      .assert.value(
        ".example-component-with-input > input",
        "message in the root of the store"
      )
      .setValue(
        ".example-component-with-input > input",
        "changed by user input"
      )
      .assert.containsText(
        ".example-component-with-input > p",
        "changed by user input"
      );

    browser.end();
  }
};
