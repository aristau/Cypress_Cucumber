Feature: Inventory

Background:
  Given user is logged in with valid credentials

Scenario: Products list is visible
  Then user sees the products list
  And each product has a title, price, and image

Scenario: User can add a product to the cart
  When user adds 1 product to the cart
  Then the cart should contain 1 product

# Scenario: User can remove a product from the cart
#   Given user has added 1 product to the cart
#   When user removes the product from the cart
#   Then the cart should be empty