//Note: Only agents can view this page
export class UserReportsPage {
    elements = {
        pageTitle: () => cy.title()
    };

    navigate(){
        cy.visit("https://phptravels.net/reports");
    }
}
