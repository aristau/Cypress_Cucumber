export class UserBookingsPage {
    elements = {
        pageTitle: () => cy.title()
    };

    navigate(){
        cy.visit("https://phptravels.net/bookings");
    }
}
