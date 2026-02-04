import { Given, Then, When, Before} from "@badeball/cypress-cucumber-preprocessor";
//import { LoginPage } from "../../pages/LoginPage";

const { LoginPage } = require("../../pages/LoginPage")
const loginPage = new LoginPage();

const { ProductsPage } = require("../../pages/ProductsPage")
const productsPage = new ProductsPage();


Given("a user lands on the website", function() {
    loginPage.navigate();
});

Then("login page shows the correct title", function (){
    loginPage.elements.pageTitle().should("eq", "Swag Labs");
});

When ("a {string} user logs into the website with valid credentials", function(userType) {
    loginPage.navigate();

    if(userType == "Standard"){
        cy.login("standard_user", "secret_sauce");
    }
    else if(userType == "Visual"){
        cy.login("visual_user", "secret_sauce");
    }
});

Then ("user is redirected to the Products page", function(){
    cy.url().should('include', '/inventory.html');
});

Then ("user sees the products list", function(){
    productsPage.elements.productList().should("be.visible");
});

// When ("a user selects to view the website in the {string} language", function(language){
//     headerPage.clickLanguageDropDown();
//     headerPage.chooseLanguageOption(language);
// });

// When ("a user selects to view the website with the {string} currency", function(currency){
//     headerPage.clickCurrencyDropDown();
//     headerPage.chooseCurrencyOption(currency);
// });

// When ("a user navigates to the \"Signup\" page", function(){
//     signupPage.navigate();
// });

// When ("user enters valid fields to create a new account", function(){
//     signupPage.signUp(this.user);
// });

// When ("the user signs up for the newsletter", function() {
//     let name = this.user.first_name + " " + this.user.last_name;
//     let email = this.user.email;
//     const apiUrl = "https://phptravels.net/api/newsletter-subscribe";
//     cy.intercept(apiUrl).as("newsletterSubscribeRequest");
//     footerPage.signUpForNewsletter(name, email);
// });

// Then ("the user is subscribed to the newsletter successfully", function(apiResponse) {
//     cy.wait("@newsletterSubscribeRequest").its('response.statusCode').should('equal', 200);
// });

// Then ("user info shows on dashboard page", function(){
//     cy.url().should('include', '/dashboard');
//     //userDashboardPage.elements.profileIcon().should('be.visible');
// });



// Then ("the website text is displayed in the {string} language", function(language){
//     const languageMap = new Map([
//         ["English", "Your Trip Starts Here!"],
//         ["Arabic", "رحلتك تبدأ هنا!"],
//         ["Turkish", "Seyahatiniz Burada Başlıyor!"],
//         ["Russian", "Ваше путешествие начинается здесь!"],
//         ["French", "Votre voyage commence ici !"],
//         ["Chinese", "主标题1"],
//         ["Germany", "Ihre Reise beginnt hier!"],
//       ]);
//     homePage.elements.yourTripStartsHereDiv().should('contain', languageMap.get(language));
// });

// Then("the website is displayed with the {string} currency", function(currency){
//     homePage.elements.featuredHotesDiv().should('contain', currency);
// });
