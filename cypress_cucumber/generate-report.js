const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonDir: 'cypress/cucumber-json', // Directory where JSON files are stored
  reportPath: 'cypress/cucumber-htmlreport', // Directory for the output HTML report
  reportName: 'SauceDemo Test Report',
  pageTitle: 'Cypress Cucumber Execution Report',

  //Display test duration in seconds on report
  displayDuration: true,
  durationInMS: false,
  openReportInBrowser: false, //Do not automatically open report

  //Device / Browser / Platform data to display on report
  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest'
    },
    device: 'MacBook Pro 14 inch',
    platform: {
      name: 'osx'
    }
  },

  //Data for test run to display at top of report
  customData: {
  title: 'Execution Info',
  data: [
    { label: 'Project', value: 'SauceDemo Cypress Cucumber Framework' },
    { label: 'Execution Environment', value: process.env.GITHUB_ACTIONS ? 'GitHub Actions' : 'Local' },
    { label: 'Execution Time', value: new Date().toLocaleString() }
  ]
  }
});