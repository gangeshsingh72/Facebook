Feature: Facbook
  Scenario: Facebook Login
    Given : I am a chrome user
    When I connect to "https://en-gb.facebook.com" page
    Then I see login Page
    And when I pass on icorrect details
    Then I see error on page



