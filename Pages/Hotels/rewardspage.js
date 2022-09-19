const Commands = require("../Commands");

class Rewardspage {

    commands = new Commands();

    joinNowButton = "//a[contains(text(),'JOIN NOW')]";
    signUpFormEmail = "#signupFormEmailInput";
    signUpFormFirstName = "#signupFormFirstNameInput";
    signUpFormLastName = "#signupFormLastNameInput";
    signUpFormPassword = "#signupFormPasswordInput";
    signUpFormContinueButton = "#signupFormSubmitButton";



    async clickJoinNowButton() {
       await this.commands.clickWebElement(this.joinNowButton);
    }

    async blankFormVerification() {
        return await this.commands.getTextFromWebElement(this.signUpFormEmail);
        return await this.commands.getTextFromWebElement(this.signUpFormFirstName);
        return await this.commands.getTextFromWebElement(this.signUpFormLastName);
        return await this.commands.getTextFromWebElement(this.signUpFormPassword);
    }

    async isContinueButtonEnabled() {
        return await this.commands.isWebElementEnabled(this.signUpFormContinueButton);

    }






}

module.exports = Rewardspage;