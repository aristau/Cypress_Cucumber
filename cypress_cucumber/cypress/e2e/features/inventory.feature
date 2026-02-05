Feature: Inventory

Background:
  Given user is logged in with valid credentials

Scenario: Products list is visible
  Then user sees the products list
  And each product has a title, price, and image

# Scenario: User can add a product to the cart
#   When user adds the first product to the cart
#   Then the cart badge should display "1"

# Scenario: User can remove a product from the cart
#   Given user has added a product to the cart
#   When user removes the product from the cart
#   Then the cart badge should display "0"