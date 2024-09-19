export class FooterPage {
    elements = {
        pageTitle: () => cy.title(),
        twitterLink: () => cy.get('[data-test="social-twitter"]'),
        facebookLink: () => cy.get('[data-test="social-facebook"]'),
        linkedinLink: () => cy.get('[data-test="social_linkedin]')
    };

    clicTwitterLink(){
        this.elements.twitterLinkLink().click();
    }

    clickFacebookLink(){
        this.elements.facebookLink().click();
    }

    clickLinkedinLink(){
        this.elements.linkedinLink().click();
    }

}
