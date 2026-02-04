// before(function(){
//     //Load fixture files so Cypress tests can use them later
//     cy.fixture('user.json').then(function (data) {
//         this.user = data;
//     })

//     cy.fixture('single_tourist_visa.json').then(function (data) {
//         this.single_tourist_visa = data;
//     })

//     //Generate an ethereal email test account so can Cypress tests can use it later
//     cy.task('getTestEmailAccount').then((account) => {
//         expect(account.user).to.be.a('string');
//         this.user.email = account.user;
//         this.user.password = account.pass;
//     })
//  })