Feature: Smoke Test

Background:
    Given a user lands on the website

Scenario: Home page Shows Correct Title
    Then home page shows the correct title

@skip
Scenario: A new user signs up on the website
    When a user navigates to the "Signup" page
    And user enters valid fields to create a new account

@skip
Scenario Outline: A "<userType>" user logs into the website
    When a "<userType>" user logs into the website
    Then user info shows on dashboard page

Examples:
    | userType  | 
    | Customer  |
    | Agent     |


@skip
Scenario: A user resets their password

@skip
Scenario: A user signs up for the newsletter

@skip
Scenario Outline: A user books a "<bookingType>" item

Examples:
    | bookingType |
    | hotel |
    | flight |
    | tour |
    | car |

@skip
Scenario: A user submits a visa

@skip
Scenario Outline: A user views the website in the "<language>" language
    When a user selects to view the website in the "<language>" language
    Then the website text is displayed in the "<language>" language

Examples:
    | language |
    | English |
    | Arabic |
    | Turkish |
    | Russian |
    | French |
    | Chinese |
    | Germany |

@skip
Scenario Outline: A user views the website with the "<currency>" currency
    When a user selects to view the website with the "<currency>" currency
    Then the website is displayed with the "<currency>" currency

Examples:
    | currency |
    | USD |
    | GBP |
    | SAR |
    | EUR |

@skip
Scenario: A user updates their profile

@skip
Scenario: User Dashboard page reflects the correct data

@skip
Scenario: User Bookings Page reflects the correct data

@skip
Scenario: An agent user views a report


