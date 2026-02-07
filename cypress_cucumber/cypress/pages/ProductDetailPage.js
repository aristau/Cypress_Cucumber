
export class ProductDetailPage {
    elements = {
        pageTitle: () => cy.title(),
        productTitle:() => cy.get('[data-test="inventory-item-name"]'),
        productPrice:() => cy.get('[data-test="inventory-item-price"]'),
        productImg:() => cy.get('.inventory_details_img'),
        productDescription:() => cy.get('[data-test="inventory-item-desc"]'),
        backButton:() => cy.get('[data-test="back-to-products"]')
    };

     assertProductDetail() {
        this.elements.productTitle().should("exist").and("not.be.empty");
        this.elements.productDescription().should("exist").and("not.be.empty");
        this.elements.productPrice().should("exist").and("not.be.empty");
        this.elements.productImg().should("exist");
    }

    goBackToInventory() {
        this.elements.backButton().click();
    }
}




