export class LoginPage {
    elements = {
        pageTitle: () => cy.title(),
        userNameInput: () => cy.get('[data-test="username"]'),
        passwordInput: () => cy.get('[data-test="password"]'),
        loginBtn: () => cy.get('[data-test="login-button"]'),
        errorMsg: () => cy.get('[data-test="error"]'),
    };

    navigate(){
        cy.visit("/");
    }

    typeUserName(userName){
        this.elements.userNameInput().clear().type(userName);
    }

    typePassword(password){
        this.elements.passwordInput().clear().type(password);
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
