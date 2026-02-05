import { Given, Then, When, Before} from "@badeball/cypress-cucumber-preprocessor";

const { ProductsPage } = require("../../pages/ProductsPage")
const productsPage = new ProductsPage();


Then("each product has a title, price, and image", function (){
    productsPage.elements.products().each(($product) => {
        //console.log($product);
       productsPage.getProductTitle($product).should('exist').and('not.be.empty');
       productsPage.getProductPrice($product).should('exist').and('not.be.empty');
       productsPage.getProductImage($product).should('exist').and(($img) => {
         expect($img).to.have.attr('src').not.empty;
    });
  });
});



