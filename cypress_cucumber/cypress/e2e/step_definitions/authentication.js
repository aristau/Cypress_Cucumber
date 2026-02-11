import { Given, Then, When, Before} from "@badeball/cypress-cucumber-preprocessor";
//import { LoginPage } from "../../pages/LoginPage";

const { LoginPage } = require("../../pages/LoginPage")
const loginPage = new LoginPage();

const { ProductsPage } = require("../../pages/ProductsPage")
const productsPage = new ProductsPage();

const { HeaderPage } = require("../../pages/HeaderPage")
const headerPage = new HeaderPage();


Given("a user lands on the website", function() {
    loginPage.navigate();
});

Then("login page shows the correct title", function (){
    loginPage.elements.pageTitle().should("eq", "Swag Labs");
});

When("user enters {string} into the username field", function(username){
    //Simulating leaving the username field blank
    if(username === 'EMPTY'){
        return;
    }
    //Using an environment variable for the username
    else{
        const key = username.replace(/[${}"]/g, '');
        username = Cypress.env(key);
        loginPage.typeUserName(username);
    }
});

When("user enters {string} into the password field", function(password){
    //Simulating leaving the password field blank
    if(password === 'EMPTY'){
        return;
    }
    //Using an environment variable for the password
    else{
        const key = password.replace(/[${}"]/g, '');
        password = Cypress.env(key);
        loginPage.typePassword(password);
    }
});

When("user clicks the login button", function(){
    loginPage.clickLoginButton();
});

Then ("user lands on the products page", function(){
    cy.url().should('include', '/inventory.html');
});

Then ("user sees the products list", function(){
    productsPage.elements.productList().should("be.visible");
});

Then ("an error message appears saying {string}", function(message){
    loginPage.elements.errorMsg().should("be.visible").and('contain', message);
});

Given ("user is logged in with valid credentials", function(){
    cy.login();
    cy.url().should("include", "/inventory.html");
});

When ("user logs out", function(){
    headerPage.logout();
});

Then ("user is redirected to the login page", function(){
   loginPage.elements.loginBtn().should("be.visible");
});


