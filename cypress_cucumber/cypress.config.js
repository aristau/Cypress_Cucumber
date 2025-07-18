const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const nodemailer = require("nodemailer");
const { ImapFlow } = require("imapflow");
const simpleParser = require('mailparser').simpleParser;

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
    },
    async getLastEmail({user, pass}) {
      const get_Email = await getLastEmail(user, pass)
      return get_Email
    },
    async parseEmail({message}){
      const parse_Email = await parseEmail(message)
      return parse_Email
    },
    async convertPDFtoHTML(filePath){
      const html = await convertPDFtoHTML(filePath)
      return html
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

//Return last received email from an ethereal test email inbox
async function getLastEmail(user, pass) {
  let client = new ImapFlow({
    host: "ethereal.email",
    port: 993,
    secure: true,
    auth: {
      user: user,
      pass: pass
    }
  })
  await client.connect()
  let message
  // Select and lock a mailbox. Throws if mailbox does not exist
  let lock = await client.getMailboxLock("INBOX")
  try {
    message = await client.fetchOne(client.mailbox.exists, { source: true })
    // list subjects for all messages
    // uid value is always included in FETCH response, envelope strings are in unicode.
    // for await (let message of client.fetch("1:*", { envelope: true })) {
    //     console.log(`${message.uid}: ${message.envelope.subject}`)
    // }
  } finally {
    // Make sure lock is released, otherwise next `getMailboxLock()` never returns
    await client.messageFlagsAdd({ seen: false }, ["\\Seen"])
    lock.release()
  }
  await client.logout()
  //If no message was received (message = false) then return message, to ensure that the task will retry
  //If a message is received return the source in order to parse its content
  if (!message)
    return message
  else
    return message.source
}

//Parse an email from an ethereal test email inbox
async function parseEmail(message){
  const source = Buffer.from(message)
  const mail = await simpleParser(
      source
  )
  return {
    subject: mail.subject,
    text: mail.text,
    html: mail.html,
    attachments: mail.attachments
  }
}

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    chromeWebSecurity: false,
    setupNodeEvents
  },
});
