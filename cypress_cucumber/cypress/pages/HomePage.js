export class HomePage {
    elements = {
        pageTitle: () => cy.title(),
        yourTripStartsHereDiv: () => cy.get('.homepage'),
        featuredHotesDiv: () => cy.get('.hotel-card-wrap')
    };

    navigate(){
        cy.visit("https://phptravels.net/");
    }
}
