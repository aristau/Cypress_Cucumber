export class LoginPage {
    elements = {
        pageTitle: () => cy.title(),
        userNameInput: () => cy.get('[data-test="username"]'),
        passwordInput: () => cy.get('[data-test="password"]'),
        loginBtn: () => cy.get('[data-test="login-button"]'),
    };

    navigate(){
        cy.visit("https://www.saucedemo.com/");
    }

    typeUserName(userName){
        this.elements.userNameInput().type(userName);
    }

    typePassword(password){
        this.elements.passwordInput().type(password);
    }

    clickLoginButton(){
        this.elements.loginBtn().click();
    }

    login(userName, password){
        this.typeUserName(userName);
        this.typePassword(password);
        this.clickLoginButton();
    }
}
