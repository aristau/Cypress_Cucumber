export class CartPage {
    elements = {
        pageTitle: () => cy.title(),
        continueShoppingBtn: () => cy.get('[data-test="continue-shopping]'),
        checkoutBtn: () => cy.get('[data-test="checkout"]')
    };

    navigate(){
        cy.visit("https://www.saucedemo.com/cart.html");
    }

    clickContinueShoppingBtn(){
        this.elements.continueShoppingBtn.click();
    }

    clickCheckoutBtn(){
        this.elements.checkoutBtn().click();
    }
}
