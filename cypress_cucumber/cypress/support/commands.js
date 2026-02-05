const { LoginPage } = require("../pages/LoginPage");
const loginPage = new LoginPage();


Cypress.Commands.add('login', () => {
    const username = Cypress.env("validUsername");
    const password = Cypress.env("validPassword");
    loginPage.navigate();
    loginPage.login(username, password);
})







