const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const nodemailer = require("nodemailer");
const { ImapFlow } = require("imapflow");
const simpleParser = require('mailparser').simpleParser;

async function setupNodeEvents(on, config){
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)]
    })
  );

  // on("task", {
  //   getTestEmailAccount() {
  //     return emailAccount;
  //   },
  //   async getLastEmail({user, pass}) {
  //     const get_Email = await getLastEmail(user, pass)
  //     return get_Email
  //   },
  //   async parseEmail({message}){
  //     const parse_Email = await parseEmail(message)
  //     return parse_Email
  //   },
  //   async convertPDFtoHTML(filePath){
  //     const html = await convertPDFtoHTML(filePath)
  //     return html
  //   }
  // });


  return config;
}


module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    watchForFileChanges: true,
    baseUrl: "https://www.saucedemo.com",
    chromeWebSecurity: false,
    setupNodeEvents
  },
});
