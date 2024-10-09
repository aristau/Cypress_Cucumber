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
        signupLink: () => cy.contains('a', 'Signup')
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
        this.elements.currencyDropDown().click();
    }

    chooseLanguageOption(){

    }

    chooseCurrencyOption(){
        
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

    navigateToLoginPage(){
        this.clickAccountDropDown();
        this.clickLoginLink();
    }

    navigateToSignupPage(){
        this.clickAccountDropDown();
        this.clickSignupLink();
    }

}
