import { Given, Then, When, Before} from "@badeball/cypress-cucumber-preprocessor";
import checkoutInfo from "../../fixtures/checkout_info.json"

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
  // Ensure cart has at least one product
  productsPage.addProductToCart();

  // Go to cart
  headerPage.clickShoppingCartLink();

  // Start checkout
  cartPage.clickCheckoutBtn();

  // Assert navigation
  cy.url().should("include", "/checkout-step-one.html");
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

Then("user is on the checkout overview page", function(){
     cy.url().should("include", "/checkout-step-two.html");
     checkoutOverviewPage.elements.finishBtn().should("be.visible");
});

When("user enters checkout information {string}", (fixtureKey) => {
    checkoutInfoPage.fillCheckoutForm(checkoutInfo[fixtureKey]);
});

Then ("an error message {string} is displayed", function(message){
    checkoutInfoPage.elements.errorMsg().should("be.visible").and('contain', message);
});
