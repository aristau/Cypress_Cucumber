export class ProductsPage {
    elements = {
        productList: () => cy.get('[data-test="inventory-list"]'),
        products: () => cy.get('[data-test="inventory-item"]'),
        pageTitle: () => cy.title()
    };

    navigate(){
        cy.visit("https://www.saucedemo.com/inventory.html");
    }

    getProductTitle(product) {
        return cy.wrap(product).find('[data-test="inventory-item-name"]');
    }

    getProductPrice(product) {
        return cy.wrap(product).find('[data-test="inventory-item-price"]');
    }
    
    getProductImage(product) {
        return cy.wrap(product).find(".inventory_item_img img");
    }
}
