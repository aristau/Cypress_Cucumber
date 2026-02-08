export class CheckoutInformationPage {
  elements = {
    firstNameInput: () => cy.get("[data-test='firstName']"),
    lastNameInput: () => cy.get("[data-test='lastName']"),
    postalCodeInput: () => cy.get("[data-test='postalCode']"),
    continueBtn: () => cy.get("[data-test='continue']"),
    cancelBtn: () => cy.get("[data-test='cancel']"),
  };

  fillCheckoutForm(first, last, zip) {
    this.elements.firstNameInput().type(first);
    this.elements.lastNameInput().type(last);
    this.elements.postalCodeInput().type(zip);
  }

  clickContinueBtn() {
    this.elements.continueBtn().click();
  }

   clickCancelBtn() {
    this.elements.cancelBtn().click();
  }
}


