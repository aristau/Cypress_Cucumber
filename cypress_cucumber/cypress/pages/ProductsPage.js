const { assertSorted } = require("../support/helpers/assertHelpers");

export class ProductsPage {
    elements = {
        productList: () => cy.get('[data-test="inventory-list"]'),
        products: () => cy.get('[data-test="inventory-item"]'),
        pageTitle: () => cy.title(),
        productTitle: '[data-test="inventory-item-name"]',
        productPrice: '[data-test="inventory-item-price"]',
        productImg: '.inventory_item_img img',
        addButton: 'button:contains("Add to cart")',
        removeButton: 'button:contains("Remove")',
        sortDropDown: () => cy.get('[data-test="product-sort-container"]')  
    };

    navigate(){
        cy.visit("/inventory.html");
    }

    getProductTitle(product) {
        return cy.wrap(product).find(this.elements.productTitle);
    }

    getProductPrice(product) {
        return cy.wrap(product).find(this.elements.productPrice);
    }
    
    getProductImage(product) {
        return cy.wrap(product).find(this.elements.productImg);
    }

    getAddToCartButton(product) {
        return cy.wrap(product).find(this.elements.addButton);
    }

    getRemoveButton(product) {
        return cy.wrap(product).find(this.elements.removeButton);
    }

    addProductToCart(index = 0) {
        this.elements.products()
        .eq(index)
        .within(() => {
            cy.get(this.elements.addButton).click();
        });
    }

    removeProductFromCart(index = 0) {
        this.elements.products()
        .eq(index)
        .within(() => {
            cy.get(this.elements.removeButton).click();
        });
   }

   addProductsToCart(count) {
        for (let i = 0; i < count; i++) {
            this.addProductToCart(i);
        }
   }
 
    removeProductsFromCart(count) {
        for (let i = 0; i < count; i++) {
            this.removeProductFromCart(i);
        }
   }

   selectSortOption(option){
        this.elements.sortDropDown().select(option);
   }

   //Assert that prices are sorted in ascending order
   assertPricesSorted(order = "ascending") {
    const prices = [];

    this.elements.products().each(($product) => {
      this.getProductPrice($product)
        .invoke("text")
        .then((text) => prices.push(parseFloat(text.replace("$", ""))));
    }).then(() => {
      assertSorted(prices, order);
    });
  }   

}
