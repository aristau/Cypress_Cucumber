export class CheckoutInformationPage {
  elements = {
    firstNameInput: () => cy.get("[data-test='firstName']"),
    lastNameInput: () => cy.get("[data-test='lastName']"),
    postalCodeInput: () => cy.get("[data-test='postalCode']"),
    continueBtn: () => cy.get("[data-test='continue']"),
    cancelBtn: () => cy.get("[data-test='cancel']"),
    errorMsg: () => cy.get("[data-test='error']"),
  };

  typeFirstName(firstName){
    if(firstName != ""){
      this.elements.firstNameInput().clear().type(firstName);
    }
  }

  typeLastName(lastName){
    if(lastName != ""){
      this.elements.lastNameInput().clear().type(lastName);
    }
  }

  typePostalCode(postalCode){
    if(postalCode != ""){
      this.elements.postalCodeInput().clear().type(postalCode);
    }
  }

  fillCheckoutForm(userData) {
    this.typeFirstName(userData.firstName);
    this.typeLastName(userData.lastName);
    this.typePostalCode(userData.postalCode);
  }

  clickContinueBtn() {
    this.elements.continueBtn().click();
  }

   clickCancelBtn() {
    this.elements.cancelBtn().click();
  }
}


