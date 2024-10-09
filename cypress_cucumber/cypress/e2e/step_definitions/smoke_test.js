import { Given, Then, When, Before} from "@badeball/cypress-cucumber-preprocessor";

const { LoginPage } = require("../../pages/LoginPage")
const loginPage = new LoginPage();

const { HomePage } = require("../../pages/HomePage")
const homePage = new HomePage();

const { HeaderPage } = require("../../pages/HeaderPage")
const headerPage = new HeaderPage();

Given("a user lands on the website", function() {
    homePage.navigate();
});

When ("a standard user logs onto the website", function() {
    headerPage.navigateToLoginPage();
    loginPage.login("user@phptravels.com", "demouser");
});

Then("home page shows the correct title", function (){
    homePage.elements.pageTitle().should("eq", "PHPTRAVELS");
});