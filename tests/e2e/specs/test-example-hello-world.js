// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
  const url = process.env.VUE_APP_DEV_SERVER_URL +
              '#/example-hello-world/';

module.exports = {

  "Test for Example Hello World": browser => {
    browser
      .url(url)
      .waitForElementVisible("#app", 5000)
      .assert.elementPresent(".example-hello-world")
      .assert.containsText("p", "message in examples/hello-word/store.js")
      .end();
  }
};