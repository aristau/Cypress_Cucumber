export class CheckoutOverviewPage {
  elements = {
    finishBtn: () => cy.get("[data-test='finish']"),
    cancelBtn: () => cy.get("[data-test='cancel']"),
  };

  clickFinishBtn() {
    this.elements.finishBtn().click();
  }

   clickCancelBtn() {
    this.elements.cancelBtn().click();
  }
}


