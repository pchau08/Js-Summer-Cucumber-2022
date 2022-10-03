const Commands = require("../Commands");
const moment = require("moment");

class Homepage {

    commands = new Commands();
    moment = new moment();

    
    feedBackLink = '//div[@class="uitk-list"]//a[@target="_blank"]';

    emailErrorMsg = '//div[@id="signupFormEmailInput-error"]';

    signInContainer ='//div[@class="heading-container"]';

    signInLink = '//a[@data-stid="link-header-account-signin"]';

    signInLocator = '//button[text()="Sign in"]';

    goingToLocator = "//button[@aria-label='Going to']";
    toTypeInGoingToLocator = '#destination_form_field';

    destinationAutoSuggestionLocator = "//div[@class='truncate']//strong";

    calendarButtonLocator = '#date_form_field-btn';
    calendarButtonLocator = '#date_form_field-btn';
    calendarDoneButton = "(//button[@data-stid='apply-date-picker'])[1]";
    monthDatesLocatorStarts = '//h2[text()="'
    monthDatesLocatorEnds = '"]/following-sibling::table//button[not(@disabled)]';
    monthDatesLocatorEnds_DisableDated = '"]/following-sibling::table//button[@disabled]';

    monthHeadingLocatorStarts = 'h2='
    nextButtonOnCalendarLocator = "(//button[@data-stid='date-picker-paging'])[2]";
    previousButtonOnCalendarLocator = "(//button[@data-stid='date-picker-paging'])[1]";

    learnAboutRewardsButton = "//a[contains(text(),'Learn about Hotels.com Rewards')]";

    tripsButton = "//div[contains(text(),'Trips')]";
    joinNowRewardsButton = "//a[contains(text(),'JOIN NOW')]";
    feedbackButton = "//a[contains(text(),'Feedback')]"
    travelersButton = "//button[@class='uitk-menu-trigger uitk-fake-input uitk-form-field-trigger']";
    travelersAdults = '//span//*[@aria-label="Increase the number of adults in room 1"]';
    childMinus = '//span//*[@aria-label="Decrease the number of children in room 1"]';
    childPlus2 = '//span//*[@aria-label="Increase the number of children in room 1"]';
    travelersChildren = '//span//*[@aria-label="Increase the number of children in room 1"]';
    child1 = "//select[@id='age-traveler_selector_children_age_selector-0-0']";
    child2 = '//select[@id="age-traveler_selector_children_age_selector-0-1"]';
    child3 = '//select[@id="age-traveler_selector_children_age_selector-0-2"]';
    child1Age4 = '//select[@id="age-traveler_selector_children_age_selector-0-0"]//option[@value="4"]';
    child2Age1 = '//select[@id="age-traveler_selector_children_age_selector-0-1"]//option[@value="0"]';
    child3Age7 = '//select[@id="age-traveler_selector_children_age_selector-0-2"]//option[@value="7"]';
    travelersDoneButton = "#traveler_selector_done_button";
    sumOfAdultsAndChildren = "//button[contains(text(),'9 travelers, 1 room')]";
    multipleChildren = "//div[@class='uitk-layout-flex-item uitk-layout-flex-item-flex-basis-half_width uitk-spacing uitk-spacing-padding-blockstart-two uitk-spacing-padding-inlineend-two']";
    monthOfSeptember = "//h2[contains(text(),'September 2022')]";
    fiveStarRating = "//span[contains(text(),'5★')]";
    sortByDropdown = "//select[@id='sort']";
    priceSortByDropdown = "//option[@value='PRICE_LOW_TO_HIGH']";
    allStar = "//span[contains(text(),'5.0 out of 5')]";
    allPrices = '//div[@class="uitk-text uitk-type-600 uitk-type-bold uitk-text-emphasis-theme"]'
    improveOurSiteFeedbackDisplay = "//span[contains(text(),'Tell us how we can improve our site')]";
    shareFeedback = '//a[contains(text(),"Share feedback")]';
    

    searchButton = '#submit_button';
    
    appSubmitBtn = '//button[@id="submitBtn"]';
    phoneNumBox = '//input[@id="phoneNumber"]';
    phoneNumErr = '//div[@id="phoneNumber-error"]';

    //TC-18
    travelsButton = '//div[@class="uitk-field has-floatedLabel-label has-icon has-placeholder"]//button[@aria-expanded="false"]'
    adultPlus = '[aria-label="Increase the number of adults in room 1"]'
    childPlus = '[aria-label="Increase the number of children in room 1"]'
    child1 = '//select[@id="age-traveler_selector_children_age_selector-0-0"]'
    child2 = '//select[@id="age-traveler_selector_children_age_selector-0-1"]'
    child3 = '//select[@id="age-traveler_selector_children_age_selector-0-2"]'
    child4 = '//select[@id="age-traveler_selector_children_age_selector-0-3"]'
    child1option4 = '//select[@id="age-traveler_selector_children_age_selector-0-0"]//option[@value="4"]'
    child2option1 = '//select[@id="age-traveler_selector_children_age_selector-0-1"]//option[@value="0"]'
    child3option7 = '//select[@id="age-traveler_selector_children_age_selector-0-2"]//option[@value="7"]'
    adultNumber = '//input[@id="traveler_selector_adult_step_input-0"]'
    childNumber = '//input[@id="traveler_selector_children_step_input-0"]'
    doneButton = '//button[@id="traveler_selector_done_button"]'

    //TC-21
    signInButton = '//button[contains(text(),"Sign in")]'
    signInButton2 = '//header/nav[@id="secondaryNav"]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/a[1]'
    emailInputBox = '//input[@id="loginFormEmailInput"]'
    passInputBox = '//input[@id="loginFormPasswordInput"]'
    errorMessage = '//h3[contains(text(),"Try again.")]'
    submitButton = '//button[@id="loginFormSubmitButton"]'

    //TC-22
    freeSignUp = '//div[@class="actions"]//a[contains(text(),"Sign up")]'
    emailInputBoxSignUp = '//input[@id="signupFormEmailInput"]'
    firstNameBox = '//input[@id="signupFormFirstNameInput"]'
    lastNameBox = '//input[@id="signupFormLastNameInput"]'
    passwordBox = '//input[@id="signupFormPasswordInput"]'
    emailError = '//div[@id="signupFormEmailInput-error"]'
    firstNameError = '//div[@id="signupFormFirstNameInput-error"]'
    lastNameError = '//div[@id="signupFormLastNameInput-error"]'
    keepMe = '//input[@id="signUpFormRememberMeCheck"]'
    keepMeText = '//label[contains(text(),"Keep me signed in")]'
    continue = '//button[@id="signupFormSubmitButton"]'

    //TC-20
    terms = '//a[contains(text(),"Terms and Conditions")]'
    privacy = '//a[contains(text(),"Privacy Statement")]'

    //TC-24
    feedback = '//header/nav[@id="secondaryNav"]/div[1]/div[4]/div[1]/div[2]/a[5]'
    feedbackSubmit = '//button[@id="submit-button"]'
    errorBorder = '//fieldset[@id="required_box_page_rating"]'
    feedbackError = '//p[contains(text(),"Please fill in the required information highlighte")]'  

    //TC-25
    fiveStar = '//label[@for="page-rating-5"]'
    commentBox = '//textarea[@id="verbatim"]'
    likelyReturn = '//select[@id="will-you-return"]'
    highlyLikely ='//option[contains(text(),"Highly likely")]'
    bookedNo = '//span[@data-localization="booked-before-no"]'
    accomplishedYes = '//label[@for="were-you-successful-yes"]'
    entireThankYou = '//div[@id="container"]'

    //TC 28
    multipleChildren = '//div[@class="uitk-layout-flex uitk-layout-flex-flex-wrap-wrap"]'
    childMinus = '[aria-label="Decrease the number of children in room 1"]'

    //TC-17
    backMonthButton = '[aria-label="Previous month"]'
    september = '//h2[contains(text(),"September")]'
    calenderButton = '//button[@id="date_form_field-btn"]'

    //TC-19
    tellUsHow = '//span[contains(text(),"Tell")]'
    hittingApply = '//button[@data-stid="apply-date-picker"]'
    hittingSearch = '//button[@id="submit_button"]'
    feedBack = '//a[contains(text(),"Share feedback")]'
    goingToLocator = "[aria-label='Going to']";
    dates = '//button[@id="date_form_field-btn"]'
    clickNextMonth = '[aria-label="Next month"]'

    //TC-29
    propertyListBtn = '//a[@id="listYourProperty"]'; 
    wouldYouLikeText = '//p[contains(text(),"What would you like to list?")]';
    privateText = '//p[contains(text(),"Private residence")]';
    lodgingText = '//p[contains(text(),"Lodging")]';
    stepText1of3 = '//div[contains(text(),"Step 1 of 3")]';
    stepText2of3 = '//div[contains(text(),"Step 2 of 3")]';
    couldEarnText = '//h1[contains(text(),"See how much you could earn!")]';
    plusBedBtn = '//button[@aria-label="Increase bedrooms"]'
    plusBathBtn= '//button[@aria-label="Increase bathrooms"]'
    nextButton ='//button[@id="propertyInfoNextBtn"]'
    propertyLocator = '//h1[contains(text(),"Where is your property located?")]'
    enterAddressBox = '//input[@id="locationTypeAhead"]'
    graphLocator = '//div[@data-wdio="google-map-component"]'
    pinGraphlocator = '//body/form[1]/div[1]/div[1]/div[2]/div[2]/div[2]/section[1]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[4]/div[2]'
    pinUnderGraph = '//span[contains(text(),"Move the pin to adjust the location of your proper")]'
    insideTheAutoSug = '//ul[@class="typeahead-prediction-list fds-field-select"]'

    //TC-23
    star5 = '//span[contains(text(),"5★")]'
    sortBy = '//select[@id="sort"]'
    optionPrice ='//option[@value="PRICE_LOW_TO_HIGH"]'
    firstStarRating = '//body/div[@id="app-shopping-pwa"]/div[@id="app-layer-manager"]/div[@id="app-layer-base"]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[1]/div[2]/section[2]/ol[1]/li[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]'
    secondStarRating = '//body/div[@id="app-shopping-pwa"]/div[@id="app-layer-manager"]/div[@id="app-layer-base"]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[1]/div[2]/section[2]/ol[1]/li[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]'
    thirdStarRating ='//body/div[@id="app-shopping-pwa"]/div[@id="app-layer-manager"]/div[@id="app-layer-base"]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[1]/div[2]/section[2]/ol[1]/li[4]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]'
    allPrices = '//div[@class="uitk-text uitk-type-600 uitk-type-bold uitk-text-emphasis-theme"]'
    allStar = '//div[@class="uitk-rating"]'

    //TC-31
    englishBtn ='//div[contains(text(),"English")]'
    langInput = '//select[@id="language-selector"]'
    spanishSelect = '//option[contains(text(),"Español (Estados Unidos)")]'
    saveBtn ='//button[contains(text(),"Save")]'
    espanoltext = '//div[contains(text(),"Español")]'
    englishSelect =  '//option[contains(text(),"English (United States)")]'
    spanishSaveBtn = "//button[contains(text(),'Guardar')]"

    commands = new Commands;
    moment = new moment();

    async signInContainerDis() {
        await this.commands.isWebElementDisplayedWithWait(this.signInContainer);
    }

    async verifyAllHotelsAre5Star() {
        await this.commands.scrollAndGetTextWebElement(this.allStar);
    }

    async isEmailErrorDis() {
        await this.commands.isWebElementDisplayedWithWait(this.emailErrorMsg);
    }

    async clickSigninLink() {
        await this.commands.clickWebElement(this.signInLink);
    }

    async clickSigninButton() {
        await this.commands.clickWebElement(this.signInLocator);
    }


    async clickSearchButton() {
        await this.commands.clickWebElement(this.searchButton);
    }

    async enterDestination(destination) {
        await this.commands.clickWebElement(this.goingToLocator);
        await this.commands.typeInWebElement(this.toTypeInGoingToLocator, destination)
    }

    async selectDestinationFromAutoSuggestion(selectThis) {
        await this.commands.selectFromAutoSuggestions(this.destinationAutoSuggestionLocator, selectThis);
    }

    async clickOnCalendarButton() {
        await this.commands.clickWebElement(this.calendarButtonLocator);
    }

    async selectCheckInDate(monthName, year, checkInDate) {
        const monthHeadingLocator = this.monthHeadingLocatorStarts + monthName + ' ' + year;
        const monthDatesLocator = this.monthDatesLocatorStarts + monthName + ' ' + year + this.monthDatesLocatorEnds
        await this.commands.selectDateFromCalendar(monthHeadingLocator, this.nextButtonOnCalendarLocator, monthDatesLocator, checkInDate)
    }


    async selectCheckOutDate(monthName, year, checkOutDate) {
        const monthHeadingLocator = this.monthHeadingLocatorStarts + monthName + ' ' + year;
        const monthDatesLocator = this.monthDatesLocatorStarts + monthName + ' ' + year + this.monthDatesLocatorEnds
        await this.commands.selectDateFromCalendar(monthHeadingLocator, this.nextButtonOnCalendarLocator, monthDatesLocator, checkOutDate)
    }

    async getDisableDatesForCurrentMonth() {
        const currentMonthHeading = MyMomentFunctions.getCurrentMomentInFormat('MMMM YYYY');
        const monthName = currentMonthHeading.split(' ')[0];
        const year = currentMonthHeading.split(' ')[1];
        const monthHeadingLocator = this.monthHeadingLocatorStarts + monthName + ' ' + year;
        const isCurrentMonthSeen = await this.commands.isWebElementDisplayed(monthHeadingLocator);
        if (!isCurrentMonthSeen) {
            await this.commands.clickWebElement(this.previousButtonOnCalendarLocator);
        }
        const disabledDatesLocator = this.monthDatesLocatorStarts + monthName + ' ' + year + this.monthDatesLocatorEnds_DisableDated;
        return await this.commands.findWebElements(disabledDatesLocator);
    }

    async clickSigninButton() {
        await this.commands.clickWebElement(this.signinButton);
    }

    async clickSigninPopUp() {
        await this.commands.clickWebElement(this.signInLink);
    }

    async clickFeedBackLink() {
        await this.commands.clickWebElement(this.feedBackLink);
    }

    async clickTripsButton() {
        await this.commands.clickWebElement(this.clickTripsButton)
    }


    async clickLearnAboutRewardsButton() {
        await this.commands.clickWebElement(this.learnAboutRewardsButton);
    }

    async clickJoinNowRewardsButton() {
        await this.commands.clickWebElement(this.learnAboutRewardsButton);
    }

    async clickFeedbackButton() {
        await this.commands.clickWebElement(this.feedbackButton);
    }

    async clickTravel(){
        await commands.clickWebElement(this.travelsButton)
    } 
    async clickAdultPlus(){
        await commands.clickWebElement(this.adultPlus)
    }
    async clickChildPlus(){
        await commands.clickWebElement(this.childPlus)
    }

    async child1age(){
        await commands.clickWebElement(this.child1)
        await commands.clickWebElement(this.child1option4)
    }
    async child2age(){
        await commands.clickWebElement(this.child2)
        await commands.clickWebElement(this.child2option1)
    }
    async child3age(){
        await commands.clickWebElement(this.child3)
        await commands.clickWebElement(this.child3option7)
    }
    async clickDone (){
        await commands.clickWebElement(this.doneButton)
    }
    async travelersText (){
        let text = await this.commands.getTextFromWebElement(this.travelsButton)
        console.log('RIGHT HERE' + text);
        let index = text.search(/[0-9]/);
        let firstNum = Number(text[index]);
        return firstNum;
    }
    
        async adultPlusChild (){
            let text = await this.commands.findWebElement(this.adultNumber)
            let text2 = await this.commands.findWebElement(this.childNumber)
            let text3 = await text.getAttribute('value')
            let text4 = await text2.getAttribute('value')
            let text5 = parseInt(text3)
            let text6 = parseInt(text4)
            return text5 + text6
        }

    async clickTravelersButton() {
        await this.commands.clickWebElement(this.travelersButton);
    }

    async clickTravelersAdults() {
        await this.commands.clickWebElement(this.travelersAdults)
    }

    async clickTravelersChildren() {
        await this.commands.clickWebElement(this.travelersChildren)
    }

    async child1Age() {
        await this.commands.clickWebElement(this.child1);
        await this.commands.scrollAndClickWebElement(this.child1Age4);
        // await $('#age-traveler_selector_children_age_selector-0-0').selectByIndex(5);
    }

    async child2Age() {
        await this.commands.clickWebElement(this.child2);
        await this.commands.scrollAndClickWebElement(this.child2Age1)
    }

    async child3Age() {
        await this.commands.clickWebElement(this.child3);
        await this.commands.scrollAndClickWebElement(this.child3Age7);
    }

    async clickDoneOnTravelers() {
        await this.commands.clickWebElement(this.travelersDoneButton);
    }

    async verifyTotalNumberOfGuest() {
        await this.commands.getTextFromWebElement(this.sumOfAdultsAndChildren)
    }

    //TC-28

    async dropDownChildren (){
        let Array = []
        let i = 0;
        let timeline =  await $$(this.multipleChildren)
        for (const time of timeline){
            Array[i] = await time.getText()
            i++;
       }
       let Arraylength = Array.length
       return Arraylength
    }

    async plusEnabled (){
        return await this.commands.isWebElementEnabled(this.childPlus2)
    }

    async plusDisplayed (){
        return await this.commands.isWebElementEnabled(this.childPlus2)
    }

    async minusEnabled (){
        return await this.commands.isWebElementEnabled(this.childMinus)
    }

    async minusDisabled (){
        let disabled = await this.commands.isWebElementEnabled(this.childMinus)
        if (disabled === true )
        return disabled = false
    }

    async clickChildMinus(){
        await this.commands.clickWebElement(this.childMinus)
       
    }

    async dropDownDisplayed(){
        return await this.commands.isWebElementDisplayed(this.child1)
    }

    //TC-17

    async currentMonth() {
        return this.commands.format('MMMM');
    }

    async goToMonthBackwards(month, year){
        while(await this.commands.isWebElementDisplayed('//h2[text()="'+month+' '+year+'"]') == false){
            await this.commands.clickWebElement(this.previousButtonOnCalendarLocator);
        }
    }

    async septemberText(){
        return await this.commands.getTextFromWebElement(this.monthOfSeptember);
    }

    async backMonthButtonDisabled(){
        return await this.commands.isWebElementEnabled(this.previousButtonOnCalendarLocator)
    }
    async september2022FromTodayEnabled(data) {
        await $$(
          '//h2[text()="September 2022"]/following-sibling::table//button[not(@disabled)]'
        );
        let newNumber = now.date() + data;
        let enabled = await $("//button[@data-day=" + newNumber + "]");
        return enabled.isEnabled();
      }

    //TC-23

    async clickDoneAfterTravelDates() {
        await this.commands.clickWebElement(this.calendarDoneButton);
    }
    
    async clickOn5StarRating() {
        await this.commands.scrollAndClickWebElement(this.fiveStarRating);
    }
    
    async clickOnPriceFromSortByDropdown() {
        await this.commands.clickWebElement(this.sortByDropdown);
        await this.commands.scrollAndClickWebElement(this.priceSortByDropdown);
    }
    
    async starsArray(){
        let Array = []
        let i = 0;
        let stars =  await $$(this.allStar)
        for (const star of stars){
            let newArray = await star.getText()
            let newestArray = newArray.substring(0,1)
            Array[i] = parseInt(newestArray)
            i++;
       } 
    }
    
    
    async pricesArray(){
        let Array = []
        let i = 0;
        let prices =  await $$(this.allPrices)
        for (const price of prices){
            let newArray = await price.getText()
            let newestArray = newArray.substring(1)
            Array[i] = parseInt(newestArray)
            i++;
            for (let t = 0; t < Array.length-2; t++){
                if(!(Array[t+1] - Array[i] >= 0)){
                } else {
                    return false
                }
            }
       } return true
    }

    //TC-19

    async VerifyTellUsHowDisplayed(){
        await this.commands.scrollAndGetTextWebElement(this.improveOurSiteFeedbackDisplay)
        return await this.commands.isWebElementDisplayed(this.improveOurSiteFeedbackDisplay)
      }
    
    async verifyFeedbackIsDisplayed() {
        if (await this.commands.isWebElementEnabled(this.shareFeedback) === true)
        {
        return await this.commands.isWebElementDisplayed(this.shareFeedback)};
    }

    //TC-30
    
    async scrollToAppBttn(){
        const element = this.commands.findClickableWebElement(this.appSubmitBtn);
        await element.scrollIntoView(); 
    }

    async typePhoneNum() {
        await this.commands.clickWebElement(this.phoneNumBox);
        await this.commands.typeInWebElement(this.phoneNumBox, '0000000000');
    }

    async clickAppBtn(){
        await this.commands.clickWebElement(this.appSubmitBtn)
       
    }

    async phoneErrorDis(){
        return await this.commands.isWebElementDisplayed(this.phoneNumErr)
    }

    //TC-29
    
    async clickPropertyLink() {
        await this.commands.clickWebElement(this.propertyListBtn);
    }

    async switchToTab() {
    
        const allHandles = await browser.getWindowHandles();
        let titleContains = 'Rewards';
        let handle = ''
        for (handle of allHandles) {
            await browser.switchToWindow(handle);
            const pageTitle = await browser.getTitle();
            if (!pageTitle.includes(titleContains)) {
                await browser.closeWindow();
            }
        }
     }

     async wouldYouLikeDis() {
        await this.commands.isWebElementDisplayedWithWait(this.wouldYouLikeText);
    }

    async privateTextDis() {
        await this.commands.isWebElementDisplayedWithWait(this.privateText);
    }

    async lodgingTextDis() {
        await this.commands.isWebElementDisplayedWithWait(this.lodgingText);
    }

    async clickPrivateBtn() {
        await this.commands.clickWebElement(this.privateText);
    }

    async step1Of3Displayed(){
        return await this.commands.isWebElementDisplayed(this.stepText1of3);
    }

    async step2Of3Displayed(){
        return await this.commands.isWebElementDisplayed(this.stepText2of3);
    }

    async couldEarnDisplayed(){
        return await this.commands.isWebElementDisplayed(this.couldEarnText);
    }

    async clickPlusBed() {
        await this.commands.clickWebElement(this.plusBedBtn);
    }

    async clickPlusBath() {
        await this.commands.clickWebElement(this.plusBathBtn);
    }

    async clickNextBtn() {
        await this.commands.clickWebElement(this.nextButton);
    }

    async propertyLocatedDis(){
        return await this.commands.isWebElementDisplayed(this.propertyLocator);
    }

    async enterAddressInput() {
        await this.commands.clickWebElement(this.enterAddressBox);
        await this.commands.typeInWebElement(this.enterAddressBox, 121);
    }

    async goingToAddress(text) {
        const autoSuggestionElements = await $$('//li[@class="typeahead-prediction-item fds-list-item"]');
        for (const autoSuggestionElement of autoSuggestionElements) {
          const suggestionText = await autoSuggestionElement.getText();
          if (
            suggestionText.toLowerCase().localeCompare(text.toLowerCase()) === 0
          ) {
            await autoSuggestionElement.click();
            break
          }
        }
      }

    async isGraphDisplayed(){
        return await this.commands.isWebElementDisplayed(this.graphLocator);
    }

    async isGraphPinDis(){
        return await this.commands.isWebElementDisplayed(this.pinGraphlocator);
    }

    async isGraphPinErrDis(){
        return await this.commands.isWebElementDisplayed(this.pinUnderGraph);
    }

    async clickEnglishBtn() {
        await this.commands.clickWebElement(this.englishBtn);
    }

    async clickLangBox() {
        await this.commands.clickWebElement(this.langInput);
    }

    async clickSpanishOpt() {
        await this.commands.clickWebElement(this.spanishSelect);
    }

    async clickSaveBtn() {
        await this.commands.clickWebElement(this.saveBtn);
    }
    
    async getSpanishText() {
        await this.commands.getTextFunction(this.espanoltext);
    }

    async clickEspanolBtn() {
        await this.commands.clickWebElement(this.espanoltext);
    }

    async clickEnglishOpt() {
        await this.commands.clickWebElement(this.englishSelect);
    }

    async clickSpanishSave() {
        await this.commands.clickWebElement(this.spanishSaveBtn);
    }

    async getEnglishText() {
        await this.commands.getTextFunction(this.englishBtn);
    }






    

    

}

module.exports = Homepage;