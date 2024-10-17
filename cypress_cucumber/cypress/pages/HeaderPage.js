export class HeaderPage {
    elements = {
        homeLink: () => cy.contains('a, bengalfly'),
        hotelsLink: () => cy.contains('a','Hotels'),
        flightsLink: () => cy.contains('a','Flights'),
        toursLink: () => cy.contains('a','Tours'),
        carsLink: () => cy.contains('a','Cars'),
        visaLink: () => cy.contains('a','Visa'),
        blogsLink: () => cy.contains('a','Blogs'),
        languageDropDown: () => cy.get('[data-bs-toggle="dropdown"').eq(0),
        currencyDropDown: () => cy.get('[data-bs-toggle="dropdown"').eq(1),
        accountDropDown: () => cy.get('[data-bs-toggle="dropdown"').eq(2),
        loginLink: () => cy.contains('a', 'Login'),
        signupLink: () => cy.contains('a', 'Signup'),
        dashboardLink: () => cy.contains('a', 'Dashboard'),
        bookingsLink: () => cy.contains('a', 'Bookings'),
        reportsLink: () => cy.contains('a', 'Reports'),
        profileLink: () => cy.contains('a', 'Profile'),
        logoutLink: () => cy.contains('a', 'Logout')
    };

    clickHomeLink(){
        this.elements.homeLink().click();
    }

    clickHotelsLink(){
        this.elements.hotelsLink().click();
    }

    clickFlightsLink(){
        this.elements.flightsLink().click();
    }

    clickToursLink(){
        this.elements.toursLink().click();
    }

    clickCarsLink(){
        this.elements.carsLink().click();
    }

    clickVisaLink(){
        this.elements.vissLink().click();
    }

    clickBlogsLink(){
        this.elements.blogsLink().click();
    }

    clickLanguageDropDown(){
        this.elements.languageDropDown().click();
    }

    clickCurrencyDropDown(){
        this.elements.currencyDropDown().should('be.visible');
        this.elements.currencyDropDown().click();
    }

    chooseLanguageOption(language){
        cy.contains('a', language, {timeout: 30000}).click();
    }

    chooseCurrencyOption(currency){
        //cy.get(data-bs-popper
       // cy.contains('a', currency).should('be.visible');
        cy.get('[data-bs-popper="static"]', {timeout: 30000}).should('be.visible');
        cy.contains('a', currency, {timeout: 30000}).click({ force: true});
    }

    chooseAccountOption(){
        
    }

    clickAccountDropDown(){
        this.elements.accountDropDown().click();
    }

    clickLoginLink(){
        this.elements.loginLink().click();
    }

    clickSignupLink(){
        this.elements.signupLink().click();
    }

    clickDashboardLink(){
        this.elements.dashboardLink().click();
    }

    clickBookingsLink(){
        this.elements.bookingsLink().click();
    }

    clickReportsLink(){
        this.elements.reportsLink().click();
    }

    clickProfileLink(){
        this.elements.profileLink().click();
    }

    clickLogoutLink(){
        this.elements.logoutLink().click();
    }

    navigateToLoginPage(){
        this.clickAccountDropDown();
        cy.get('[data-bs-popper="static"]', {timeout: 30000}).should('be.visible');
        this.clickLoginLink();
    }

    navigateToSignupPage(){
        this.clickAccountDropDown();
        cy.get('[data-bs-popper="static"]', {timeout: 30000}).should('be.visible');
        this.clickSignupLink();
    }

    navigateToUserDasbhoardPage(){
        this.clickAccountDropDown();
        this.clickDashboardLink();
    }

}
