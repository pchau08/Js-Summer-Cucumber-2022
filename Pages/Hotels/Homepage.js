const Commands = require("../Commands");

class Homepage {

    commands = new Commands();

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

}

module.exports = Homepage;