Feature: Smoke Test

Background:
    Given a user lands on the website

Scenario: Home page Shows Correct Title
    Then home page shows the correct title

Scenario: A user logs into the website
    When a standard user logs onto the website