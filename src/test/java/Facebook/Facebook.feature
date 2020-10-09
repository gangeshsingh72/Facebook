Feature: Facbook
  Scenario: Facebook Login
    Given : I am a chrome user
    When I connect to "https://en-gb.facebook.com" page
    Then I see login Page
    And when I pass on icorrect details
    Then I see error on page

#  Scenario: Rediff Login
#    Given : I am a chrome user
#    When I connect to "https://www.rediff.com" link
#    Then I see Rediff Page
#    And when I pass on Sign-in link
#    Then I see Sign-in page

