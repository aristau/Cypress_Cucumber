const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonDir: 'cypress/cucumber-json', // Directory where JSON files are stored
  reportPath: 'cypress/cucumber-htmlreport' // Directory for the output HTML report
});