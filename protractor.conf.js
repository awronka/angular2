exports.config = {
  framework: 'jasmine2',
  onPrepare: function() {
      var SpecReporter = require('jasmine-spec-reporter');
      // add jasmine spec reporter
      jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
   },
  jasmineNodeOpts: {
            // If true, print colors to the terminal.
            showColors: true,
            print: function() {},
        },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test-browser/browser/angularSpec.js'],
  capabilities: {
        'browserName': 'chrome'
    }
}