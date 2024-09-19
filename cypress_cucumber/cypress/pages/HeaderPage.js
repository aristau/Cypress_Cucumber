export class HeaderPage {
    elements = {
        pageTitle: () => cy.title(),
        hamburgerMenu: () => cy.get('#react-burger-menu-btn'),
        cartLink: () => cy.get('[data-test="shopping-cart-link"]'),
        productsPageLink: () => cy.get('[data-test="inventory-sidebar-link"]'),
    };

    clickCartLink(){
        this.elements.cartLink().click();
    }

    clickHamburgerMenu(){
        this.elements.hamburgerMenu().click();
    }

    clickProductsPageLink(){
        this.elements.productsPageLink().click();
    }

}
