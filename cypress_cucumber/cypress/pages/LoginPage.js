export class LoginPage {
    elements = {
        userNameInput: () => cy.get('#email'),
        passwordInput: () => cy.get('#password'),
        rememberMeChbx: () => cy.get('#rememberchb'),
        resetPasswordLnk: () => this.cy.get('[data-bs-target="#reset"]'),
        loginBtn: () => cy.get('#submitBTN'),
        signUpBtn: () => cy.contains('a', 'Signup')
    };

    navigate(){
        cy.visit("https://phptravels.net/login");
    }

    typeUserName(userName){
        this.elements.userNameInput().type(userName);
    }

    typePassword(password){
        this.elements.passwordInput().type(password);
    }

    toggleRememberMeCheckbox(){
        this.elements.rememberMeChbx().check();
    }

    clickResetPasswordLink() {
        this.elements.resetPasswordLnk().click();
    }

    clickLoginButton(){
        this.elements.loginBtn().click();
    }

    clickSignUpButton(){
        this.elements.signUpBtn.click();
    }

    login(userName, password){
        this.typeUserName(userName);
        this.typePassword(password);
        this.clickLoginButton();
    }
}
