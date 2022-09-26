const Commands = require("../Commands");

class Signuppage {


    signUpLink = '//a[@data-stid="link-header-account-signup"]';

    signUpEmail = '#loginFormEmailInput'

    signUpFirstName = '//input[@id="signupFormFirstNameInput"]';

    signUpFirstNameError = '//div[@id="signupFormFirstNameInput-error"]';

    signUpLastName = '//input[@id="signupFormLastNameInput"]';

    signUpLastNameError = '//div[@id="signupFormLastNameInput-error"]';

    signUpPassword = '//input[@id="signupFormPasswordInput"]';

    signUpCheckBox = '//input[@id="signUpFormRememberMeCheck"]';

    signUpCountineBttn = '//button[@id="signupFormSubmitButton"]';


    commands = new Commands;



    async clickSignUpBttn() {
        await this.commands.clickWebElement(this.signUpLink);
    }

    async signUpEmail(loginEmail) {
        // await this.commands.clickWebElement(this.signUpEmail);
        // await this.commands.typeInWebElement(this.signUpEmail, data);
        
        await this.commands.typeInWebElement(this.signUpEmail, loginEmail)


       


    }

    async signUpFirstName(data) {
        await this.commands.clickWebElement(this.signUpFirstName);
        await this.commands.typeInWebElement(this.signUpFirstName, data);
    }

    async signUpLastName(data) {
        await this.commands.clickWebElement(this.signUpLastName);
        await this.commands.typeInWebElement(this.signUpLastName, data);
    }

    async isFirstNameErrorDis() {
        await this.commands.isWebElementDisplayedWithWait(this.signUpFirstNameError);
    }

    async isLastNameErrorDis() {
        await this.commands.isWebElementDisplayedWithWait(this.signUpLastNameError);
    }

    async clickSignUpPassword() {
        await this.commands.clickWebElement(this.signUpPassword);
    }

    async isSignUpCheckBoxDis() {
        await this.commands.isWebElementDisplayedWithWait(this.signUpCheckBox);
    }

    async isSignUpCheckBoxEnbl() {
        await this.commands.isWebElementEnabled(this.signUpCheckBox);
    }

    async isSignUpCountineBttnDis() {
        await this.commands.isWebElementDisplayedWithWait(this.signUpCountineBttn);
    }

    async isSignUpCountineBttnEnbl() {
        await this.commands.isWebElementEnabled(this.signUpCountineBttn);
    }





}

module.exports = Signuppage;