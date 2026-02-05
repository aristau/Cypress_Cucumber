Feature: Authentication

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

Scenario: A user logs out
    Given user is logged in with valid credentials
    When user logs out
    Then user is redirected to the login page



