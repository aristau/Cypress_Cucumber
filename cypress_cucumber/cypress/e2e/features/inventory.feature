Feature: Inventory

Background:
  Given user is logged in with valid credentials

Scenario: Products list is visible
  Then user sees the products list
  And each product has a title, price, and image

Scenario: User can add a product to the cart
  When user adds 1 product to the cart
  Then the cart should contain 1 product

Scenario: User can remove a product from the cart
  Given user has added 1 product to the cart
  When user removes 1 product from the cart
  Then the cart should be empty

Scenario: User can add multiple products to the cart
  When user adds 3 products to the cart
  Then the cart should contain 3 products

Scenario: User can remove multiple products from the cart
  Given user has added 3 products to the cart
  When user removes 2 products from the cart
  Then the cart should contain 1 product

Scenario: User can sort products by price (low to high)
  When user sorts products by "Price (low to high)"
  Then products should be displayed in ascending price order

Scenario: User can sort products by price (high to low)
  When user sorts products by "Price (high to low)"
  Then products should be displayed in descending price order

Scenario: User can sort products alphabetically (A to Z)
  When user sorts products by "Name (A to Z)"
  Then products should be displayed in alphabetical order

Scenario: User can sort products alphabetically (Z to A)
  When user sorts products by "Name (Z to A)"
  Then products should be displayed in reverse alphabetical order

Scenario: Cart retains items while browsing inventory
  Given user has added 1 product to the cart
  When user navigates through the inventory
  Then the cart should contain 1 product

Scenario Outline: User can view product detail page by clicking an element
  When user clicks the "<element>" of a product
  Then the product detail page shows a title, description, price, and image
  And user can navigate back to inventory

Examples:
  | element       |
  | title         |
  | image         |