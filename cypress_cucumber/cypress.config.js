const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const nodemailer = require("nodemailer");

async function setupNodeEvents(on, config){
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  const emailAccount = await createTestEmailAccount();
  
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  on("task", {
    getTestEmailAccount() {
      return emailAccount;
    }
  });


  return config;
}

//Create an ethereal test email account
async function createTestEmailAccount() {
  let testAccount
  testAccount = await nodemailer.createTestAccount()
  return testAccount
}

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    chromeWebSecurity: false,
    setupNodeEvents
  },
});
