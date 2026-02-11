export class CheckoutCompletePage {
  elements = {
    homeBtn: () => cy.get("[data-test='back-to-products']"),
  };

  clickHomeBtn() {
    this.elements.homeBtn().click();
  }

}


