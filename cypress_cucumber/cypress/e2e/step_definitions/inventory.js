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
  productsPage.addProductsToCart(count);
});

Then("the cart should contain {int} product(s)", (count) => {
  headerPage.elements.shoppingCartBadge().should("be.visible").and('contain', count);
});

Given("user has added {int} product(s) to the cart", (count) => {
  productsPage.addProductsToCart(count);
  headerPage.elements.shoppingCartBadge().should("be.visible").and('contain', count);

});

When("user removes {int} product(s) from the cart", (count) => {
  productsPage.removeProductsFromCart(count);
});

Then("the cart should be empty", () => {
  headerPage.elements.shoppingCartBadge().should("not.exist");
});

When("user sorts products by {string}", (option) => {
  console.log(option);
  productsPage.selectSortOption(option);
});

Then("products should be displayed in ascending price order", () => {
  productsPage.assertPricesSorted("ascending");
});

// Then("products should be displayed in descending price order", () => {
//   productsPage.assertPricesSortedDescending();
// });

// Then("products should be displayed in alphabetical order", () => {
//   productsPage.assertNamesSortedAscending();
// });

// Then("products should be displayed in reverse alphabetical order", () => {
//   productsPage.assertNamesSortedDescending();
// });

// /*HELPER FUNCTIONS*/
// function addProductsToCart(count) {
//   for (let i = 0; i < count; i++) {
//     productsPage.addProductToCart(i);
//   }
// }

// function removeProductsFromCart(count) {
//   for (let i = 0; i < count; i++) {
//     productsPage.removeProductFromCart(i);
//   }
// }







