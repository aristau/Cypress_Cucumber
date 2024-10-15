const { LoginPage } = require("../pages/LoginPage");
const loginPage = new LoginPage();

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (username, password) => {
    loginPage.login(username, password);
  })

  //Errors on session creation in the examples below

// Cypress.Commands.add('login', (username, password) => {
//     cy.session([username, password], () => {
//         loginPage.login(username, password);
//     })
//   })



// Cypress.Commands.add('login', (username, password) => {
//     cy.session(
//       [username, password],
//       () => {
//         loginPage.login(username, password)
//       },
//       {
//         validate() {
//             cy.getCookie('PHPSESSID').should('exist')
//         },
//       }
//     )
//   })




