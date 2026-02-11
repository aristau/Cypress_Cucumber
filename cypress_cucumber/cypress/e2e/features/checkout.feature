Feature: Checkout

Background:
  Given user is logged in with valid credentials

Scenario: Checkout information page shows required fields
  Given user has added 1 product to the cart
  And user is on the checkout information page
  Then user sees first name, last name, and postal code fields
  And user sees a continue button

Scenario: User can continue checkout with valid information
  Given user has added 1 product to the cart
  And user is on the checkout information page
  When user enters valid checkout information
  And user continues checkout
  Then user lands on the checkout overview page

Scenario Outline: Checkout requires all required fields
  Given user has added 1 product to the cart
  And user is on the checkout information page
  When user enters checkout information "<fixtureKey>"
  And user continues checkout
  Then an error message "<errorMessage>" is displayed

Examples:
  | fixtureKey          | errorMessage                     |
  | missingFirstName    | Error: First Name is required    |
  | missingLastName     | Error: Last Name is required     |
  | missingPostalCode   | Error: Postal Code is required   |

Scenario: User can cancel checkout
  Given user has added 1 product to the cart
  And user is on the checkout information page
  When user cancels checkout
  Then user is returned to the cart page

  Scenario: User can navigate back from checkout overview
  Given user has added 1 product to the cart
  And user is on the checkout overview page
  When user navigates back
  Then user is redirected to the checkout information page

  Scenario: Checkout overview displays selected products
  Given user has added 2 products to the cart
  And user is on the checkout overview page
  Then the checkout overview shows 2 products
  And each product shows a title, price, and quantity

  Scenario: Checkout overview shows correct totals
  Given user has added 2 products to the cart
  And user is on the checkout overview page
  Then the checkout totals should be correct

  Scenario: User can complete checkout
  Given user has added 1 product to the cart
  And user is on the checkout overview page
  When user completes checkout
  Then the checkout is successful
  And a confirmation message is displayed

  Scenario: User can return to inventory after checkout
  Given user has completed checkout
  When user navigates back to products
  Then user lands on the products page
  And the cart should be empty



