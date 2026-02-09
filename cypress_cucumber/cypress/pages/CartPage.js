export class CartPage {
    elements = {
    products: () => cy.get("[data-test='inventory-item']"),
    productTitle: (product) => cy.wrap(product).find("[data-test='inventory-item-name']"),
    productPrice: (product) => cy.wrap(product).find("[data-test='inventory-item-price']"),
    productQty: (product) => cy.wrap(product).find("[data-test='item-quantity']"),
    removeBtn: (product) => cy.wrap(product).find("button"),
    checkoutBtn: () => cy.get("[data-test='checkout']"),
    continueShoppingBtn: () => cy.get("[data-test='continue-shopping']"),
  };


  removeProduct(index = 0) {
    this.elements.products().eq(index).then(($product) => {
      this.elements.removeBtn($product).click();
    });
  }

  clickCheckoutBtn() {
    this.elements.checkoutBtn().click();
  }

  clickContinueShoppingBtn() {
    this.elements.continueShoppingBtn().click();
  }

}
