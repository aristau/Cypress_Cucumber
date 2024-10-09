export class FooterPage {
    elements = {
        androidAppBtn: () => cy.contains('a', 'PLAYSTORE'),
        iPhoneAppBtn: () => cy.contains('a', 'APP STORE'),
        aboutUsLink: () => cy.contains('a', 'About Us'),
        contactUsLink: () => cy.contains('a', 'Contact Us'),
        termsOfUseLink: () => cy.contains('a', 'Terms of Use'),
        cookiesPolicyLink: () => cy.contains('a', 'Cookies Policy'),
        privacyPolicyLink: () => cy.contains('a', 'Privacy Policy'),
        becomeASupplierLink: () => cy.contains('a', 'Become A Supplier'),
        faqLink: () => cy.contains('a', 'Faq'),
        bokingTipsLink: () => cy.contains('a', 'Booking Tips'),
        fileAClaimLink: () => cy.contains('a', 'File A Claim'),
        careersAndJobsLink: () => cy.contains('a', 'Careers and Jobs'),
        howToBookLink: () => cy.contains('a', 'How To Book'),
        //homeLink: () 
        //emailUsLink: (),
        contactUsLink: () => cy.contains('a', 'Contact Us'),
        //newsletterNameInput: ()
        //newsletterEmailInput: (),
        //mewsletterSignUpBtn: ()
        // facebookLink,
        // twitterLink,
        // linkedInLink,
        // googleLink,
        // youtubeLink,
        // whatsappLink,
        // instagramLink
    };

    clickAndroidAppBtn(){
        this.elements.androidAppBtn().click();
    }

    clickiPhoneAppBtn(){
        this.elements.iPhoneAppBtn().click();
    }

    clickAboutUsLink(){
        this.elements.aboutUsLink().click();
    }

    clickContactUsLink(){
        this.elements.contactUsLink().click();
    }

    clickTermsOfUseLink(){
        this.elements.termsOfUseLink().click();
    }

    clickCookiesPolicyLink(){
        this.elements.cookiesPolicyLink().click();
    }

    clickPrivacyPolicyLink(){
        this.elements.privacyPolicyLink().click();
    }

    clickBecomeASupplierLink(){
        this.elements.becomeASupplierLink().click();
    }

    clickFaqLink(){
        this.elements.faqLink().click();
    }

    clickBookingTipsLink(){
        this.elements.bokingTipsLink().click();
    }

    clickFileAClaimLink(){
        this.elements.fileAClaimLink().click();
    }

    clickCareersAndJobsLink(){
        this.elements.careersAndJobsLink().click();
    }

    clickHowToBookLink(){
        this.elements.howToBookLink().click();
    }

    clickHomeLink(){

    }

    clickEmaillUsLink(){

    }

    clickContactUsLink(){
        this.elements.contactUsLink().click();
    }

    typeNewsletteSignUpName(name){
        
    }

    typeNewsletteSignUpEmail(email){
        
    }

    clickNewsletterSignupBtn(){
        
    }

    signUpForNewsletter(name, email){
        this.typeNewsletteSignUpName(name);
        this.typeNewsletteSignUpEmail(email);
        this.clickNewsletterSignupBtn();
    }

    clickFacebookLink(){

    }

    clickTwitterLink(){

    }

    clickLinkedInLink(){

    }

    clickGoogleLink(){

    }

    clickYoutubeLink(){

    }

    clickWhatsAppLink(){

    }

    clickInstagramLink(){

    }

}
