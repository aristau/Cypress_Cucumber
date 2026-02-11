/**
 * Sets up state needed to go to the checkout info page
 */
function goToCheckoutInformationPage(productsPage, headerPage, cartPage) {
  headerPage.clickShoppingCartLink();
  cartPage.clickCheckoutBtn();

  cy.url().should("include", "/checkout-step-one.html");
}

module.exports = { goToCheckoutInformationPage };
