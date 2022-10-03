Feature: Sprint 2

    # Scenario: TC-17 Verify past dates and back button on Current month's calendar is disabled
    #     Given I am on hotels landing page
    #     When I click on "Dates"
    #     And I go to current month if not displayed
    #     Then I verify for the current month 
    #     And I verify past dates (if any) are disabled
    #     And I verify if back button on current month is disabled 

    Scenario: TC-23 Hotels: Verify filter-by and sort-by functionality works as expected
        Given I am on hotels landing page
        When I search for "Manhattan, NY"
        And I enter Check-in date as Jan-10-2023
        And I enter Check-in date as Jan-23-2023
        And I click on the Search button
        And I click on 5 star from star-rating filter
        And I select “Price” from sort-by dropdown
        Then I Verify all hotels in search results are 5 star-rated as selected in above step
        # And I Verify all hotels are listed in increasing order (price)

    # Scenario: TC-19 Verify Share feedback button is displayed at the end of search results
    #     Given I am on hotels landing page
    #     When I enter "bora" in destination
    #     And I select "Bora Bora, Leeward Islands, French Polynesia" from auto suggestion
    #     And I select Select Dec 1, 2022 as Check-in
    #     And I Select Dec 10, 2022 as Check-out
    #     And I Click Apply
    #     And I click "Search" button
    #     Then I verify search results will show the following text: Tell us how we can improve our site is displayed
    #     And I verify that the Button Share feedback is displayed and enabled

        











