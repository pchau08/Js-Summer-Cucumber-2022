Feature: Sign in
@HotelsProject
Feature: Hotels Test Cases 
    
    @SignUp-1 @project
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


        
    @SignUp-2 @project
    Scenario: Verify TermsAndConditions link and PrivacyStatements link open correct page on new tab
        Given I am on hotels landing page
        When I click on SignIn link
        And I click on SignUp link
        And I click on “Terms and Conditions” link
        Then I Verify “Terms and Conditions” page opens in new tab
        And I Click “Privacy Statement” link
        Then I Verify “Privacy Statement” page opens in new tab


    
    @SignIn-1 @project
    Scenario: Verify Verification message for invalid sign in credentials
        Given I am on hotels landing page
        When I click on Sign in link
        And I enter invalid email address
        And I enter invalid password
        And I click on Sign in button
        Then I Verify Verification message is displayed    



    @FeedBack-1 @project
    Scenario: Verify error is displayed when user submits the empty feedback form
        Given I am on hotels landing page 
        When I click on SignIn link
        And I Click “Feedback”
        And I Click on Submit button
        Then I Verify error message is displayed
        Then I Verify star boxes section is in a red dotted box



    @Guests-1 @project
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


    @FeedBack-2 @project
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

       
   @Child-dropdown @project 
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


