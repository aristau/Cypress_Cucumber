import { Given, Then, When, Before} from "@badeball/cypress-cucumber-preprocessor";

const { HeaderPage } = require("../../pages/HeaderPage")
const headerPage = new HeaderPage();

const { CartPage } = require("../../pages/CartPage")
const cartPage = new CartPage();

const { CheckoutInformationPage } = require("../../pages/CheckoutInformationPage")
const checkoutInfoPage = new CheckoutInformationPage();

When("user navigates to the cart", function (){
    headerPage.clickShoppingCartLink();
});

When("user clicks the checkout button", function (){
    cartPage.clickCheckoutBtn();
});

Then("user is redirected to the checkout information page", function (){
    cy.url().should("include", "/checkout-step-one.html");
    checkoutInfoPage.elements.firstNameInput().should("be.visible");
});

When("user clicks the continue shopping button", function (){
    cartPage.clickContinueShoppingBtn();
});

