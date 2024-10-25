import { Given, Then, When, Before} from "@badeball/cypress-cucumber-preprocessor";

const { HomePage } = require("../../pages/HomePage")
const homePage = new HomePage();

const { HeaderPage } = require("../../pages/HeaderPage")
const headerPage = new HeaderPage();

const { UserDashboardPage } = require("../../pages/UserDashboardPage")
const userDashboardPage = new UserDashboardPage();

const { SignupPage } = require("../../pages/SignupPage")
const signupPage = new SignupPage();

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

When ("a user selects to view the website in the {string} language", function(language){
    headerPage.clickLanguageDropDown();
    headerPage.chooseLanguageOption(language);
});

When ("a user selects to view the website with the {string} currency", function(currency){
    headerPage.clickCurrencyDropDown();
    headerPage.chooseCurrencyOption(currency);
});

When ("a user navigates to the \"Signup\" page", function(){
    cy.visit("https://phptravels.net/signup");
});

When ("user enters valid fields to create a new account", function(){
    console.log("inside function");
    this.user.email = "test@domain.com";
    this.user.password = "testpassword123";

//     cy.intercept('POST', '/users', { fixture: 'user' }).as('userSuccess')
// cy.get('form').submit()

    signupPage.signUp(this.user);
});

Then ("user info shows on dashboard page", function(){
    cy.url().should('include', '/dashboard');
    userDashboardPage.elements.profileIcon().should('be.visible');
});

Then("home page shows the correct title", function (){
    homePage.elements.pageTitle().should("eq", "PHPTRAVELS");
});

Then ("the website text is displayed in the {string} language", function(language){
    const languageMap = new Map([
        ["English", "Your Trip Starts Here!"],
        ["Arabic", "رحلتك تبدأ هنا!"],
        ["Turkish", "Seyahatiniz Burada Başlıyor!"],
        ["Russian", "Ваше путешествие начинается здесь!"],
        ["French", "Votre voyage commence ici !"],
        ["Chinese", "主标题1"],
        ["Germany", "Ihre Reise beginnt hier!"],
      ]);
    homePage.elements.yourTripStartsHereDiv().should('contain', languageMap.get(language));
});

Then("the website is displayed with the {string} currency", function(currency){
    homePage.elements.featuredHotesDiv().should('contain', currency);
});
