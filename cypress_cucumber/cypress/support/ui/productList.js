export const productList = {
  products: () => cy.get("[data-test='inventory-item']"),
  title: (product) =>
    cy.wrap(product).find("[data-test='inventory-item-name']"),
  price: (product) =>
    cy.wrap(product).find("[data-test='inventory-item-price']"),
  quantity: (product) =>
    cy.wrap(product).find("[data-test='item-quantity']")
};