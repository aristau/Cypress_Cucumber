export class CarsPage {
    elements = {
        pageTitle: () => cy.title()
    };

    navigate(){
        cy.visit("https://phptravels.net/cars");
    }
}
