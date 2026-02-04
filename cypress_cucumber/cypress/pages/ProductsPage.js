export class ProductsPage {
    elements = {
        productList: () => cy.get('[data-test="inventory-list"]'),
        pageTitle: () => cy.title()
    };

    navigate(){
        cy.visit("https://www.saucedemo.com/inventory.html");
    }
}
