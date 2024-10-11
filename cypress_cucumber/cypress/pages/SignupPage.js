export class SignupPage {
    elements = {
        firstNameInput: () => cy.get('#first_name'),
        lastNameInput: () => cy.get('#last_name'),
        countrySelect: () => cy.get('[title="Select Country"]'),
        phoneInput: () => cy.get('#phone'),
        emailInput: () => cy.get('#user_email'),
        passwordInput: () => this.cy.get('#password'),
        captchaChbx: () => this.cy.get('#recaptcha-anchor'),
        signUpBtn: () => cy.get('#submitBTN')
    };

    navigate(){
        cy.visit("https://phptravels.net/signup");
    }

    typeFirstName(firstName){
        this.elements.firstNameInput().type(firstName);
    }

    typeLastName(lastName){
        this.elements.lastNameInput().type(lastName);
    }

    selectCountry(){
       //TODO
    }

    typePhoneNumber(phoneNumber) {
        this.elements.phoneInput().type(phoneNumber);
    }

    typeEmail(email) {
        this.elements.emailInput().type(email);
    }

    typePassword(password) {
        this.elements.passwordInput().type(password);
    }

    toggleCaptchaCheckbox(){
        this.elements.captchaChbx().check();
    }
   
    clickSignUpButton(){
        this.elements.signUpBtn.click();
    }

   signUp(userDetails){
        this.typeFirstName(userDetails.first_name);
        this.typeLastName(userDetails.last_name);
        this.selectCountry(userDetails.country);
        this.typePhoneNumber(userDetails.phone);
        this.typeEmail(userDetails.email);
        this.typePassword(userDetails.password);
        this.toggleCaptchaCheckbox();
        this.clickSignUpButton();
    }
}
