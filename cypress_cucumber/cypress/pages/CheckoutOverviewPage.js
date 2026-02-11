export class CheckoutOverviewPage {
  elements = {
    finishBtn: () => cy.get("[data-test='finish']"),
    cancelBtn: () => cy.get("[data-test='cancel']"),
    products: () => cy.get("[data-test='inventory-item']"),
    productPrice: (product) => cy.wrap(product).find("[data-test='inventory-item-price']"),
    summaryInfo: () => cy.get(".summary_info"),
    itemTotalLabel: () => cy.get("[data-test='subtotal-label']"),
    taxLabel: () => cy.get("[data-test='tax-label']"),
    totalLabel: () => cy.get("[data-test='total-label']"),
  };

  clickFinishBtn() {
    this.elements.finishBtn().click();
  }

   clickCancelBtn() {
    this.elements.cancelBtn().click();
  }

  getProductPrices() {
    const prices = [];

    return this.elements.products()
      .each(($product) => {
        this.elements.productPrice($product)
          .invoke("text")
          .then((text) => {
            const price = parseFloat(text.replace("$", ""));
            prices.push(price);
          });
      })
      .then(() => prices);
  }

  getDisplayedItemTotal() {
    return this.elements.itemTotalLabel()
      .invoke("text")
      .then((text) =>
        parseFloat(text.replace("Item total: $", ""))
      );
  }

  getDisplayedTax() {
    return this.elements.taxLabel()
      .invoke("text")
      .then((text) =>
        parseFloat(text.replace("Tax: $", ""))
      );
  }

  getDisplayedTotal() {
    return this.elements.totalLabel()
      .invoke("text")
      .then((text) =>
        parseFloat(text.replace("Total: $", ""))
      );
  }

  assertCheckoutTotals() {
    this.getProductPrices().then((prices) => {
      const itemTotal = prices.reduce((sum, price) => sum + price, 0);
      const tax = parseFloat((itemTotal * 0.08).toFixed(2));
      const total = parseFloat((itemTotal + tax).toFixed(2));

      this.getDisplayedItemTotal().should("eq", itemTotal);
      this.getDisplayedTax().should("eq", tax);
      this.getDisplayedTotal().should("eq", total);
  });
}

}


