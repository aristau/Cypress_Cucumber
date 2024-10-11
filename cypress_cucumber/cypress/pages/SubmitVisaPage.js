export class SubmitVisaPage {
    elements = {
        pageTitle: () => cy.title()
    };

    navigate(){
        cy.visit("https://phptravels.net/visa/submit");
    }
}
