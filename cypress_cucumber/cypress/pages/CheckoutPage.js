export class CheckoutPage {
    elements = {
        pageTitle: () => cy.title(),
        firstNameInput: () => cy.get('[data-test="firstName]'),
        lastNameInput: () => cy.get('[data-test="lastName"]'),
        zipCodeInput: () => cy.get('[data-test="postalCode]'),
        cancelBtn: () => cy.get('[data-test="cancel]'),
        continueBtn: () => cy.get('[data-test="continue"]')
    };

    navigate(){
        cy.visit("https://www.saucedemo.com/checkout-step-one.html");
    }

    clickCancelButton(){
        this.elements.cancelBtn().click();
    }

    clickContinueButton(){
        this.elements.continueBtn.click();
    }
}
