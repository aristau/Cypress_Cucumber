export class ProductDetailPage {
    elements = {
        pageTitle: () => cy.title(),
        addToCartBtn: () => cy.get('[data-test="add-to-cart"]'),
        removeBtn: () => cy.get('[data-test="remove"]')
    };

    navigate(){
        cy.visit("https://www.saucedemo.com/inventory-item.html?id=4");
    }

    clickAddToCartButton(){
        this.elements.addToCartBtn().click();
    }

    clickRemoveButton(){
        this.elements.removeBtn().click();
    }
}
