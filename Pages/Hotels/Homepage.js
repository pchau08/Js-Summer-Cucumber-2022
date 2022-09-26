const Commands = require("../Commands");

class Homepage {

    commands = new Commands();

    mailErrorMsg = '//div[@id="signupFormEmailInput-error"]';
    signInContainer ='//div[@class="heading-container"]';
    goingToLocator = "//button[@aria-label='Going to']";
    toTypeInGoingToLocator = '#destination_form_field';
    destinationAutoSuggestionLocator = "//div[@class='truncate']//strong";
    calendarButtonLocator = '#date_form_field-btn';
    monthDatesLocatorStarts = '//h2[text()="'
    monthDatesLocatorEnds = '"]/following-sibling::table//button[not(@disabled)]';
    monthDatesLocatorEnds_DisableDated = '"]/following-sibling::table//button[@disabled]';
    monthHeadingLocatorStarts = 'h2='
    nextButtonOnCalendarLocator = "(//button[@data-stid='date-picker-paging'])[2]";
    previousButtonOnCalendarLocator = "(//button[@data-stid='date-picker-paging'])[1]";
    searchButton = '#submit_button';
    signinButton = "//button[contains(text(),'Sign in')]";
    signInLink = '//a[@data-stid="link-header-account-signin"]'
    goingToLocator = "//button[@aria-label='Going to']";
    toTypeInGoingToLocator = '#destination_form_field';
    destinationAutoSuggestionLocator = "//div[@class='truncate']//strong";
    calendarButtonLocator = '#date_form_field-btn';
    monthDatesLocatorStarts = '//h2[text()="'
    monthDatesLocatorEnds = '"]/following-sibling::table//button[not(@disabled)]';
    monthDatesLocatorEnds_DisableDated = '"]/following-sibling::table//button[@disabled]';
    monthHeadingLocatorStarts = 'h2='
    nextButtonOnCalendarLocator = "(//button[@data-stid='date-picker-paging'])[2]";
    previousButtonOnCalendarLocator = "(//button[@data-stid='date-picker-paging'])[1]";
    searchButton = '#submit_button';
    learnAboutRewardsButton = "//a[contains(text(),'Learn about Hotels.com Rewards')]";
    tripsButton = "//div[contains(text(),'Trips')]";
    joinNowRewardsButton = "//a[contains(text(),'JOIN NOW')]";
    feedbackButton = "//a[contains(text(),'Feedback')]";
    travelersButton = "//button[@class='uitk-menu-trigger uitk-fake-input uitk-form-field-trigger']"
    travelersAdults = '//span//*[@aria-label="Increase the number of adults in room 1"]';
    childMinus = '//span//*[@aria-label="Decrease the number of children in room 1"]'
    childPlus2 = '//span//*[@aria-label="Increase the number of children in room 1"]'
    travelersChildren = '//span//*[@aria-label="Increase the number of children in room 1"]';
    child1 = "//select[@id='age-traveler_selector_children_age_selector-0-0']"
    child2 = '//select[@id="age-traveler_selector_children_age_selector-0-1"]'
    child3 = '//select[@id="age-traveler_selector_children_age_selector-0-2"]'
    child1Age4 = '//select[@id="age-traveler_selector_children_age_selector-0-0"]//option[@value="4"]'
    child2Age1 = '//select[@id="age-traveler_selector_children_age_selector-0-1"]//option[@value="0"]'
    child3Age7 = '//select[@id="age-traveler_selector_children_age_selector-0-2"]//option[@value="7"]'
    travelersDoneButton = "#traveler_selector_done_button";
    sumOfAdultsAndChildren = "//button[contains(text(),'9 travelers, 1 room')]";
    multipleChildren = "//div[@class='uitk-layout-flex-item uitk-layout-flex-item-flex-basis-half_width uitk-spacing uitk-spacing-padding-blockstart-two uitk-spacing-padding-inlineend-two']"
    
    async signInContainerDis() {
        await this.commands.isWebElementDisplayedWithWait(this.signInContainer);
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

    //TC-18

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
    






    

}

module.exports = Homepage;