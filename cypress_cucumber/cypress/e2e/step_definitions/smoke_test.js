import { Given, Then, When, Before} from "@badeball/cypress-cucumber-preprocessor";

const { HomePage } = require("../../pages/HomePage")
const homePage = new HomePage();

const { HeaderPage } = require("../../pages/HeaderPage")
const headerPage = new HeaderPage();

const { UserDashboardPage } = require("../../pages/UserDashboardPage")
const userDashboardPage = new UserDashboardPage();

Given("a user lands on the website", function() {
    homePage.navigate();
});

When ("a {string} user logs into the website", function(userType) {
    headerPage.navigateToLoginPage();

    if(userType == "Customer"){
        cy.login("user@phptravels.com", "demouser");
    }
    else if(userType == "Agent"){
        cy.login("agent@phptravels.com", "demoagent");
        headerPage.navigateToUserDasbhoardPage();
    }
});

Then ("user info shows on dashboard page", function(){
    cy.url().should('include', '/dashboard');
    userDashboardPage.elements.profileIcon().should('be.visible');
});

Then("home page shows the correct title", function (){
    homePage.elements.pageTitle().should("eq", "PHPTRAVELS");
});