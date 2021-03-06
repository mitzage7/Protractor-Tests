// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['tests/budgeting-sample-app.spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
    onPrepare: function(){
    let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
    var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
    browser.manage().window().setSize(1920, 1080);
    browser.driver.manage().window().maximize();
    // add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({
        displayFailuresSummary: true,
        displayFailedSpec: true,
        displaySuiteNumber: true,
        displaySpecDuration: true
    }));

      jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
          takeScreenshots:true,
          fixedScreenshotName:true
    }));
  }
};
