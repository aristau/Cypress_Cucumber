before(function(){
    //Load fixture files so Cypress tests can use them later
    cy.fixture('user.json').then(function (data) {
        this.user = data;
    })

    // //Generate an ethereal email test account so can Cypress tests can use it later
    // cy.task('getTestEmailAccount').then((account) => {
    //     expect(account.user).to.be.a('string');
    //     this.user.email = account.user;
    //     this.user.password = account.pass;
    // })
 })