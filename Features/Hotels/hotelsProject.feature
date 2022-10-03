@HotelsProject
Feature: Hotels Test Cases 
    
    @SignUp-1 @sprint-1
    Scenario: Verify error message for invalid data in SignUp form
        Given I am on hotels landing page 
        When I click on SignIn link
        And I click on SignUp link
        And I enter invalid email address
        Then I Verify error is displayed for email
        And I enter invalid first name
        Then I Verify error is displayed for first name
        And I enter invalid last name 
        Then I Verify error is displayed for last name
        When I enter password 
        Then I Verify “Keep me signed in” checkbox is displayed and enabled
        Then I  Verify “Continue” button is displayed but NOT enabled


        
    @SignUp-2 @sprint-1
    Scenario: Verify TermsAndConditions link and PrivacyStatements link open correct page on new tab
        Given I am on hotels landing page
        When I click on SignIn link
        And I click on SignUp link
        And I click on “Terms and Conditions” link
        Then I Verify “Terms and Conditions” page opens in new tab
        And I Click “Privacy Statement” link
        Then I Verify “Privacy Statement” page opens in new tab


    
    @SignIn-1 @sprint-1
    Scenario: Verify Verification message for invalid sign in credentials
        Given I am on hotels landing page
        When I click on Sign in link
        And I enter invalid email address
        And I enter invalid password
        And I click on Sign in button
        Then I Verify Verification message is displayed    



    @FeedBack-1 @sprint-1
    Scenario: Verify error is displayed when user submits the empty feedback form
        Given I am on hotels landing page 
        When I click on SignIn link
        And I Click “Feedback”
        And I Click on Submit button
        Then I Verify error message is displayed
        Then I Verify star boxes section is in a red dotted box



    @Guests-1 @sprint-1
    Scenario: Verify user can update number of guests on Home page
      Given I am on hotels landing page 
      When I click on Travelers
      And I select "Adults" as 6
      And I select "Children" as 3
      And I select first child as age 4
      And I select second child as under age 1
      And I select third child as age 7
      And I click Done
      Then I Verify total number of guests in sum of adults and children as same as selected on step #3 and #4.


    @FeedBack-2 @sprint-1
    Scenario: Verify user can submit feedback after completing the feedback form
       Given I am on hotels landing page 
       When I click on Sign in link
       And I click on feedback
       And I select any star-rating
       And I enter any comments
       And I select any option for “How likely are you to return to Hotels.com?”
       And I select any answer for “Prior to this visit, have you ever booked on Hotels.com?”
       And I select any answer for ”Did you accomplish what you wanted to do on this page?”
       And I click on Submit button
       Then I Verify “THANK YOU FOR YOUR FEEDBACK.“ is displayed

       
   @Child-dropdown @sprint-1
   Scenario: Verify Child-age dropdowns are same as number of Children selected
      Given I am on hotels landing page 
      When I click on Travelers
      And I select "Children" as 2
      Then I verify Children-age dropdown are 2
      Then I verify plus-button is enabled
      Then I verify minus-button is enabled
      And I select "Children" as 6
      Then I verify children-age dropdown are 6
      Then I verifiy plus button is disabled
      Then I verify minus button is enabled
      And I select "Children" as 5
      Then I verify Children-age dropdown are 5
      Then I verify plus button is enabled
      Then I verify minus button is enabled
      And I select "Children" as 0
      Then I verify children-age dropdown is NOT displayed
      Then I verify plus button is enabled
      Then I verify the minus button is disabled 

   @Phone-number @sprint-2 
   Scenario: Verify invalid phone number error
    Given I am on hotels landing page
    When I Scroll to “Get the app“ button
    And I Enter “0000000000” in Phone number
    When I Click on “Get the app“ button
    Then I Verify “Please enter a valid phone number.“ error is displayed
    
   @Property-flow @sprint-2
   Scenario: Verify "List your Property" flow
    Given I am on hotels landing page
    When I Click on “List your property”
    And I Verify “What would you like to list?” is displayed
    Then I Verify “Lodging“ and “Private residence“ options are displayed
    When I Click on “Private residence“
    And I Verify ”Step 1 of 3” is displayed
    Then I Verify “See how much you could earn!” is displayed
    And I Enter “4“ as bedroom
    And I Enter “2.5“ as bathroom
    When I Click on “Next” button
    And I Verify ”Step 2 of 3” is displayed
    Then I Verify “Where is your property located?” is displayed
    When I Enter “121” in address
    And I Select “1211 6th Avenue, New York, NY, USA” from auto-suggestion
    And I Verify graph is displayed
    And I Verify pin in graph is displayed
    Then I Verify “Pin location may not be exact.“ is displayed below graph

    @hotels-language @sprint-2
    Scenario: Verify language can be changed successfully
      Given I am on hotels landing page
      When I Click on “English“ language
      And I Select “Español (Estados Unidos)” in Language dropdown
      And I Click on “Save“ button
      Then I Verify “Español” is displayed
      When I Click on “Español“ language
      And I Select “English (United States)” in Language dropdown
      And I Click on “Guardar“ button
      Then I Verify “English” is displayed

     @sprint-2 
    Scenario: Verify past dates and back button on Current month's calendar is disabled
         Given I am on hotels landing page
         When I click on "Dates"
         And I go to current month if not displayed
         Then I verify for the current month 
         And I verify past dates (if any) are disabled
         And I verify if back button on current month is disabled

    @sprint-2
    Scenario: Verify filter-by and sort-by functionality works as expected
        Given I am on hotels landing page
        When I search for "Manhattan, NY"
        And I enter Check-in date as Jan-10-2023
        And I enter Check-in date as Jan-23-2023
        And I click on the Search button
        And I click on 5 star from star-rating filter
        And I select “Price” from sort-by dropdown
        Then I Verify all hotels in search results are 5 star-rated as selected in above step
        And I Verify all hotels are listed in increasing order (price)

    @sprint-2
    Scenario: Verify Share feedback button is displayed at the end of search results
         Given I am on hotels landing page
         When I enter "bora" in destination
         And I select "Bora Bora, Leeward Islands, French Polynesia" from auto suggestion
         And I select Select Dec 1, 2022 as Check-in
         And I Select Dec 10, 2022 as Check-out
         And I Click Apply
         And I click "Search" button
         Then I verify search results will show the following text: Tell us how we can improve our site is displayed
         And I verify that the Button Share feedback is displayed and enabled



