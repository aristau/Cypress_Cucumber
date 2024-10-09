export class HeaderPage {
    elements = {
        pageTitle: () => cy.title(),
        accountDropDown: () => cy.get('[data-bs-toggle="dropdown"').eq(2),
        loginLink: () => cy.contains('a', 'Login')
    };

    clickAccountDropDown(){
        this.elements.accountDropDown().click();
    }

    clickLoginLink(){
        this.elements.loginLink().click();
    }

    navigateToLoginPage(){
        this.clickAccountDropDown();
        this.clickLoginLink();
    }

}
