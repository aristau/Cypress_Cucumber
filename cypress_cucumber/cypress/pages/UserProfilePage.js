export class UserProfilePage {
    elements = {
        pageTitle: () => cy.title()
    };

    navigate(){
        cy.visit("https://phptravels.net/profile");
    }
}
