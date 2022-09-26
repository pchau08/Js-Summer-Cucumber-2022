const Commands = require("../commands");

class Feedbackpage {

    commands = new Commands();

    overallSatisfactionScore = "//input[@name='page-rating']";
    pageRatingEqualsThree = "//span[contains(text(),'3')]";
    pageCommentsTextBox = "#verbatim";
    likelyToReturnDropDown = "#will-you-return";
    yesButtonHotelVisit = "#booked-here-before-yes";
    noButtonHotelVisit = "#booked-here-before-no";
    yesButtonDidYouAccomplish = "#were-you-successful-yes";
    noButtonDidYouAccomplish = "#were-you-successful-no";
    emailFieldBox = "#email_address";
    submitButton = "#submit-button";
    thankYouForFeedbackDisplay = "//h5[contains(text(),'THANK YOU FOR YOUR FEEDBACK.')]";
    

    async selectAnyStarRating() {
        await this.commands.clickWebElement(this.pageRatingEqualsThree);
    };

    async enterTextPageCommentsBox(textData) {
        await this.commands.typeInWebElement(this.pageCommentsTextBox, textData);
    };

    async returnToHotelsDropDown() {
        await this.commands.selectFromDropdown(this.likelyToReturnDropDown)
    }

    async howLikelyToReturn() {
        await this.commands.selectFromDropdown(this.noButtonHotelVisit);
    }

    async didYouAccomplishSeleciton() {
        await this.commands.clickWebElement(this.noButtonDidYouAccomplish);
    }

    async clickSubmitButton() {
        await this.commands.clickWebElement(this.submitButton);
    }

    async verifyFeedbackIsDisplayed() {
        await this.commands.isWebElementDisplayed(this.thankYouForFeedbackDisplay)
    }


























}

module.exports = Feedbackpage;