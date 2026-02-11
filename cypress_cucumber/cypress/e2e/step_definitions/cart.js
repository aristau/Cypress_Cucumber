import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { productList } from "../../support/ui/productList";

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

When("user returns to inventory and then back to cart", function(){
    cartPage.clickContinueShoppingBtn();
    headerPage.clickShoppingCartLink();
});

Then("each product shows a title, price, and quantity", function (){
    productList.products().each(($product) => {
    productList.title($product).should("exist").and('not.be.empty');
    productList.price($product).should('exist').and('not.be.empty');;
    productList.quantity($product).should('exist').and('not.be.empty');
  });
});
