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
        homeLink: () => cy.get('.foot__logo waves-effect').eq(0),
        emailUsLink: () => cy.contains('a', 'email@agency.com'),
        newsletterNameInput: () => cy.get('.newsletter_name'),
        newsletterEmailInput: () => cy.get('.newsletter_email'),
        newsletterSignUpBtn: () => cy.get('.subscribe'),
        facebookLink: () => cy.get('.rounded-5 waves-effect').eq(0),
        twitterLink: () => cy.get('.rounded-5 waves-effect').eq(1),
        linkedInLink: () => cy.get('.rounded-5 waves-effect').eq(2),
        googleLink: () => cy.get('.rounded-5 waves-effect').eq(3),
        youtubeLink: () => cy.get('.rounded-5 waves-effect').eq(4),
        whatsappLink: () => cy.get('.rounded-5 waves-effect').eq(5),
        instagramLink: () => cy.get('.rounded-5 waves-effect').eq(6)
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
        this.elements.homeLink().click();
    }

    clickEmaillUsLink(){
        this.elements.emailUsLink().click();
    }

    typeNewsletterSignUpName(name){
        this.elements.newsletterNameInput().type(name);
    }

    typeNewsletterSignUpEmail(email){
        this.elements.newsletterEmailInput().type(email);
    }

    clickNewsletterSignupBtn(){
        this.elements.newsletterSignUpBtn().click();
    }

    signUpForNewsletter(name, email){
        this.typeNewsletterSignUpName(name);
        this.typeNewsletterSignUpEmail(email);
        this.clickNewsletterSignupBtn();
    }

    clickFacebookLink(){
        this.elements.facebookLink().click();
    }

    clickTwitterLink(){
        this.elements.twitterLink().click();
    }

    clickLinkedInLink(){
        this.elements.linkedInLink().click();
    }

    clickGoogleLink(){
        this.elements.googleLink().click();
    }

    clickYoutubeLink(){
        this.elements.youtubeLink().click();
    }

    clickWhatsAppLink(){
        this.elements.whatsappLink().click();
    }

    clickInstagramLink(){
        this.elements.instagramLink().click();
    }

}
