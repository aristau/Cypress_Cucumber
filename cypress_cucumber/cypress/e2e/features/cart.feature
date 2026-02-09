Feature: Cart

Background:
  Given user is logged in with valid credentials

Scenario: Cart page displays correct items
  Given user has added 2 products to the cart
  When user navigates to the cart
  Then the cart should contain 2 products
  And each product shows a title, price, and quantity

Scenario: User can proceed to checkout
  Given user has added 2 products to the cart
  When user navigates to the cart
  And user clicks the checkout button
  Then user is redirected to the checkout information page

Scenario: User can navigate back to product list
  Given user has added 2 products to the cart
  When user navigates to the cart
  And user clicks the continue shopping button
  Then user is redirected to the Products page 
  And user sees the products list

  Scenario: Empty cart is displayed correctly
  Given user navigates to the cart
  Then the cart should be empty

Scenario: User can remove a product from the cart
  Given user has added 2 products to the cart
  And user navigates to the cart
  When user removes 1 product from the cart
  Then the cart should contain 1 product

Scenario: Cart retains items when navigating away
  Given user has added 2 products to the cart
  And user navigates to the cart
  When user returns to inventory and then back to cart
  Then the cart should contain 2 products



