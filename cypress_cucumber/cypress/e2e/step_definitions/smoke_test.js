import { Given, Then, When, Before} from "@badeball/cypress-cucumber-preprocessor";

const { LoginPage } = require("../../pages/LoginPage")
const loginPage = new LoginPage();

Given("a user lands on the website", function() {
    loginPage.navigate();
});

When ("a standard user logs onto the website", function() {
    loginPage.login("standard_user", "secret_sauce");
});

Then("login page shows the correct title", function (){
    loginPage.elements.pageTitle().should("eq", "Swag Labs");
});