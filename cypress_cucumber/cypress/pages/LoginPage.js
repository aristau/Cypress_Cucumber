export class LoginPage {
    elements = {
        userNameInput: () => cy.get('#email'),
        passwordInput: () => cy.get('#password'),
        rememberMeChbx: () => cy.get('#rememberchb'),
        resetPasswordLnk: () => this.cy.get('[data-bs-target="#reset"]'),
        loginBtn: () => cy.get('#submitBTN'),
        singUpBtn: () => cy.contains('a', 'Signup'),
        //errorMsg: () => cy.get('[data-test="error]')
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

    }

    clickResetPasswordLink() {
        this.elements.resetPasswordLnk().click();
    }

    clickLoginButton(){
        this.elements.loginBtn().click();
    }

    clickSignUpButton(){
        this.elements.singUpBtn.click();
    }

    login(userName, password){
        this.typeUserName(userName);
        this.typePassword(password);
        this.clickLoginButton();
    }
}
