Feature: Login

Background:
    Given a user lands on the website

Scenario: Login page Shows Correct Title
    Then login page shows the correct title

Scenario: A standard user logs in with valid credentials
    When user enters "${validUsername}" into the username field
    And user enters "${validPassword}" into the password field
    And user clicks the login button
    Then user is redirected to the Products page
    And user sees the products list

Scenario Outline: A user attempts login with invalid credentials
    When user enters "<username>" into the username field
    And user enters "<password>" into the password field
    And user clicks the login button
    Then an error message appears saying "<error_message>"

    Examples:
    |username            | password           | error_message                                                               |
    | ${invalidUsername} | ${validPassword}   | Epic sadface: Username and password do not match any user in this service   |
    | ${validUsername}   | ${invalidPassword} | Epic sadface: Username and password do not match any user in this service   |
    | EMPTY              | ${validPassword}   | Epic sadface: Username is required                                          |
    | ${validUsername}   | EMPTY              | Epic sadface: Password is required                                          |
    | EMPTY              | EMPTY              | Epic sadface: Username is required                                          |


# Scenario: A new user signs up on the website
#     When a user navigates to the "Signup" page
#     And user enters valid fields to create a new account

# Scenario Outline: A "<userType>" user logs into the website
#     When a "<userType>" user logs into the website
#     Then user info shows on dashboard page

# Examples:
#     | userType  | 
#     | Customer  |
#     | Agent     |


# Scenario: A user signs up for the newsletter
#     When the user signs up for the newsletter
#     Then the user is subscribed to the newsletter successfully

# @skip
# Scenario Outline: A user books a "<bookingType>" item

# Examples:
#     | bookingType |
#     | hotel |
#     | flight |
#     | tour |
#     | car |

# @skip
# Scenario: A user submits a visa

# @skip
# Scenario Outline: A user views the website in the "<language>" language
#     When a user selects to view the website in the "<language>" language
#     Then the website text is displayed in the "<language>" language

# Examples:
#     | language |
#     | English |
#     | Arabic |
#     | Turkish |
#     | Russian |
#     | French |
#     | Chinese |
#     | Germany |

# @skip
# Scenario Outline: A user views the website with the "<currency>" currency
#     When a user selects to view the website with the "<currency>" currency
#     Then the website is displayed with the "<currency>" currency

# Examples:
#     | currency |
#     | USD |
#     | GBP |
#     | SAR |
#     | EUR |

# @skip
# Scenario: A user updates their profile

# @skip
# Scenario: User Dashboard page reflects the correct data

# @skip
# Scenario: User Bookings Page reflects the correct data

# @skip
# Scenario: An agent user views a report


