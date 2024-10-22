export class SignupPage {
    elements = {
        firstNameInput: () => cy.get('#firstname'),
        lastNameInput: () => cy.get('#last_name'),
        countrySelect: () => cy.get('[title="Select Country"]'),
        countrySelectInput: () => cy.get('[aria-label="Search"]'),
        phoneInput: () => cy.get('#phone'),
        emailInput: () => cy.get('#user_email'),
        passwordInput: () => cy.get('#password'),
        captchaiFrame: () => cy.get('[title="reCAPTCHA"]'),
        //captchaIframe: () => cy.get('iframe'),
        captchaChbx: () => cy.get('.recaptcha-checkbox-checkmark'),
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

    clickCountryDropDown(){
        this.elements.countrySelect().should('be.visible');
        this.elements.countrySelect().click();
    }

    typeCountry(country){
        this.elements.countrySelectInput().type(country);
    }

    selectCountry(country){
       //cy.contains('a', country, {timeout: 30000}).click({ force: true});
       cy.get('[role="option"]').contains('a', country).click();
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
        cy.get('[title="reCAPTCHA"]');
        //cy.get('iframe');
       // this.elements.captchaChbx().check();
    }
   
    clickSignUpButton(){
        this.elements.signUpBtn.click();
    }

   signUp(userDetails){
        this.typeFirstName(userDetails.first_name);
        this.typeLastName(userDetails.last_name);
        this.clickCountryDropDown();
        this.typeCountry(userDetails.country);
        this.selectCountry(userDetails.country);
        this.typePhoneNumber(userDetails.phone);
        this.typeEmail(userDetails.email);
        this.typePassword(userDetails.password);
        this.toggleCaptchaCheckbox();
        //this.clickSignUpButton();
    }
}
