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

When("user returns to inventory and then back to cart", function(){
    cartPage.clickContinueShoppingBtn();
    headerPage.clickShoppingCartLink();
});

Then("each product shows a title, price, and quantity", function (){
       cartPage.elements.products().each(($product) => {
       cartPage.elements.productTitle($product).should('exist').and('not.be.empty');
       cartPage.elements.productPrice($product).should('exist').and('not.be.empty');
       cartPage.elements.productQty($product).should('exist').and('not.be.empty');
  });
});
