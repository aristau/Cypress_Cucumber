const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const path = require("path");

async function setupNodeEvents(on, config){
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)]
    })
  );

  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    watchForFileChanges: true,
    baseUrl: "https://www.saucedemo.com",
    chromeWebSecurity: false,
    video: true,
    screenshotOnRunFailure: true,
    setupNodeEvents
  },
  env: {
    validUsername: "standard_user",
    validPassword: "secret_sauce",
    invalidUsername: "invalid_user",
    invalidPassword: "invalid_password",
    lockedOutUsername: "locked_out_user"
  },
  reporter: "mochawesome",
  reporterOptions: {
    //Output reports to analytics folder at repo root
    reportDir: path.join(__dirname, "..", "analytics", "reports"),
    overwrite: true,
    html: false,
    json: true
  }
});
