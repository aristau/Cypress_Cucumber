/**
 * Sets up state needed to go to the checkout info page
 */
function goToCheckoutInformationPage(headerPage, cartPage) {
  headerPage.clickShoppingCartLink();
  cartPage.clickCheckoutBtn();

  cy.url().should("include", "/checkout-step-one.html");
}

/**
 * Sets up state needed to go to the checkout overview page
 */
function goToCheckoutOverviewPage(checkoutInfoPage, checkoutInfo) {
    checkoutInfoPage.fillCheckoutForm(checkoutInfo.validUser);
    checkoutInfoPage.clickContinueBtn();
    cy.url().should("include", "/checkout-step-two.html");
}

module.exports = { goToCheckoutInformationPage, goToCheckoutOverviewPage };
