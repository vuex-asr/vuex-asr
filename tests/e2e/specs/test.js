// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  "example-test": browser => {
    browser
      .url(process.env.VUE_APP_DEV_SERVER_URL)
      .waitForElementVisible("#app", 5000)
      .assert.elementCount("img", 1)
      .end();
  }
};