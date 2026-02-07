export class HeaderPage {
    elements = {
        menuBtn: () => cy.get('#react-burger-menu-btn'),
        closeMenuBtn: () => cy.gt('#react-burger-cross-btn'),
        allItemsLink: () => cy.get('[data-test="inventory-sidebar-link"]'),
        aboutLink: () => cy.get('[data-test="about-sidebar-link"]'),
        logoutLink: () => cy.get('[data-test="logout-sidebar-link"]'),
        resetAppLink: () => cy.get('[data-test="reset-sidebar-link"]'),
        shoppingCartLink: () => cy.get('[data-test="shopping-cart-link"]'),
        shoppingCartBadge: () => cy.get('[data-test="shopping-cart-badge"]')
    };

    clickMenuButton(){
        this.elements.menuBtn().click();
    }

    clickCloseMenuButton(){
        this.elements.closeMenuBtn().click();
    }

    clickAllItemsLink(){
        this.elements.allItemsLink().click();
    }

    clickAboutLink(){
        this.elements.aboutLink().click();
    }

    clickLogoutLink(){
        this.elements.logoutLink().click();
    }

    clickResetAppLink(){
        this.elements.resetAppLink().click();
    }

    clickShoppingCartLink(){
        this.elements.shoppingCartLink().click();
    }

    logout(){
        this.elements.menuBtn().click();
        this.elements.logoutLink().click();
    }

}
