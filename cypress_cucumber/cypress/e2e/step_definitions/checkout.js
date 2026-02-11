import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import checkoutInfo from "../../fixtures/checkout_info.json"
import { goToCheckoutInformationPage, goToCheckoutOverviewPage } from "../../support/helpers/checkoutHelpers";


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

const { CheckoutCompletePage } = require("../../pages/CheckoutCompletePage")
const checkoutCompletePage = new CheckoutCompletePage();

Given("user is on the checkout information page", function(){
    goToCheckoutInformationPage(headerPage, cartPage);
});

Given("user is on the checkout overview page", function(){
    goToCheckoutInformationPage(headerPage, cartPage);
    goToCheckoutOverviewPage(checkoutInfoPage, checkoutInfo);
});

Given("user has completed checkout", function(){
      goToCheckoutInformationPage(headerPage, cartPage);
      goToCheckoutOverviewPage(checkoutInfoPage, checkoutInfo);
      checkoutOverviewPage.clickFinishBtn();
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

Then("the checkout totals should be correct", function(count){
  checkoutOverviewPage.assertCheckoutTotals();
});

When("user completes checkout", function(){
    checkoutOverviewPage.clickFinishBtn();
});

Then("the checkout is successful", () => {
  cy.url().should("include", "/checkout-complete.html");
});

Then("a confirmation message is displayed", () => {
  cy.contains("Thank you for your order!").should("be.visible");
});

When("user navigates back to products", () => {
    checkoutCompletePage.clickHomeBtn();
});

