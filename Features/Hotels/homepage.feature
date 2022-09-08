Feature: Homepage


    Scenario: Verify user can learn about Hotels.com rewards
        Given I am on hotels landing page
        When I click on Learn about Hotels.com Rewards
        Then I verify if Hotels Rewards opened in a new window 
        And I click on Join Now
        And I verify the form is blank
        And I verify that the Continue button is NOT enabled