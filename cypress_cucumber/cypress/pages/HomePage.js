export class HomePage {
    elements = {
        pageTitle: () => cy.title(),
        yourTripStartsHereDiv: () => cy.get('.homepage')
    };

    navigate(){
        cy.visit("https://phptravels.net/");
    }
}
