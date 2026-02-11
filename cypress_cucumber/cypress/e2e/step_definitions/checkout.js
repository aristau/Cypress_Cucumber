import { Given, Then, When, Before} from "@badeball/cypress-cucumber-preprocessor";
import checkoutInfo from "../../fixtures/checkout_info.json"
import { goToCheckoutInformationPage } from "../../support/helpers/checkoutHelpers";


const { HeaderPage } = require("../../pages/HeaderPage")
const headerPage = new HeaderPage();

const { CartPage } = require("../../pages/CartPage")
const cartPage = new CartPage();

const { ProductsPage } = require("../../pages/ProductsPage")
const productsPage = new ProductsPage();

const { CheckoutInformationPage } = require("../../pages/CheckoutInformationPage")
const checkoutInfoPage = new CheckoutInformationPage();

const { CheckoutOverviewPage } = require("../../pages/CheckoutOverviewPage")
const checkoutOverviewPage = new CheckoutOverviewPage();

Given("user is on the checkout information page", function(){
    goToCheckoutInformationPage(productsPage, headerPage, cartPage);
});

Given("user is on the checkout overview page", function(){
    goToCheckoutInformationPage(productsPage, headerPage, cartPage);

   checkoutInfoPage.fillCheckoutForm(checkoutInfo.validUser);
   checkoutInfoPage.clickContinueBtn();

   cy.url().should("include", "/checkout-step-two.html");
});

Then("user sees first name, last name, and postal code fields", function(){
    checkoutInfoPage.elements.firstNameInput().should("be.visible");
    checkoutInfoPage.elements.lastNameInput().should("be.visible");
    checkoutInfoPage.elements.postalCodeInput().should("be.visible");
});

Then("user sees a continue button", function(){
    checkoutInfoPage.elements.continueBtn().should("be.visible");
});

When("user enters valid checkout information", function(){
    checkoutInfoPage.fillCheckoutForm(checkoutInfo.validUser);
});

When("user continues checkout", function(){
    checkoutInfoPage.clickContinueBtn();
});

When("user cancels checkout", function(){
    checkoutInfoPage.clickCancelBtn();
});

Then("user lands on the checkout overview page", function(){
     cy.url().should("include", "/checkout-step-two.html");
     checkoutOverviewPage.elements.finishBtn().should("be.visible");
});

When("user enters checkout information {string}", (fixtureKey) => {
    checkoutInfoPage.fillCheckoutForm(checkoutInfo[fixtureKey]);
});

Then ("an error message {string} is displayed", function(message){
    checkoutInfoPage.elements.errorMsg().should("be.visible").and('contain', message);
});

Then("user is returned to the cart page", function(){
     cy.url().should("include", "/cart.html");
     cartPage.elements.checkoutBtn().should("be.visible");
});

When("user navigates back", function(){
    cy.go('back');
});

Then("the checkout overview shows {int} products", function(count){
    checkoutOverviewPage.elements.products()
    .should("have.length", count);
});


