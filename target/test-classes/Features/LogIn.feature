@login
Feature: Log in
  Background:
    Given user is on homepage

  Scenario Outline: Login should not be able to log in with the invalid credentials
  neerajneeraj@neo.com password1234

    When user clicks on Log in button
    And enters invalid "<Email>" and "<Password>"
    Then user should not be able to log in with invalid credentials

    Examples:
      | Email                 | Password    |
      |ababc@yahoo.com        | password    |
      |                       |             |
      |ababc@yahoo.com        | password1234|
      |neerajneeraj@neo.com   | password    |
      |ababc@yahoo.com        |             |
      |                       | password1234|
      |                       | password    |
      |ababc@yahoo.com        |             |