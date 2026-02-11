export class CheckoutOverviewPage {
  elements = {
    finishBtn: () => cy.get("[data-test='finish']"),
    cancelBtn: () => cy.get("[data-test='cancel']"),
    products: () => cy.get("[data-test='inventory-item']")
  };

  clickFinishBtn() {
    this.elements.finishBtn().click();
  }

   clickCancelBtn() {
    this.elements.cancelBtn().click();
  }
}


