const { LoginPage } = require("../pages/LoginPage");
const loginPage = new LoginPage();


Cypress.Commands.add('login', (username, password) => {
    loginPage.login(username, password);
  })







