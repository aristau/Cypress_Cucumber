export class UserDashboardPage {
    elements = {
        pageTitle: () => cy.title(),
        profileIcon: () => cy.get('.author-content')
    };

    navigate(){
        cy.visit("https://phptravels.net/dashboard");
    }
}
