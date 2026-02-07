import { Given, Then, When, Before} from "@badeball/cypress-cucumber-preprocessor";

const { ProductsPage } = require("../../pages/ProductsPage")
const productsPage = new ProductsPage();

const { HeaderPage } = require("../../pages/HeaderPage")
const headerPage = new HeaderPage();


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

When("user adds {int} product(s) to the cart", (count) => {
  addProductsToCart(count);
});

Then("the cart should contain {int} product(s)", (count) => {
  headerPage.elements.shoppingCartBadge().should("be.visible").and('contain', count);
});

Given("user has added {int} product(s) to the cart", (count) => {
  addProductsToCart(count);
});

//Helper function to add multiple products to the cart
function addProductsToCart(count) {
  for (let i = 0; i < count; i++) {
    productsPage.addProductToCart(i);
  }
}





