export class ProductsPage {
    elements = {
        pageTitle: () => cy.title(),
        productSortSelect: () => cy.get('[data-test="product-sort-container"]')
    };

    navigate(){
        cy.visit("https://www.saucedemo.com/inventory.html");
    }
}
