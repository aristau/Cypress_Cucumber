export class ToursPage {
    elements = {
        pageTitle: () => cy.title()
    };

    navigate(){
        cy.visit("https://phptravels.net/tours");
    }
}
