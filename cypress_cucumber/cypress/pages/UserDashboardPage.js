export class UserDashboardPage {
    elements = {
        pageTitle: () => cy.title()
    };

    navigate(){
        cy.visit("https://phptravels.net/dashboard");
    }
}
