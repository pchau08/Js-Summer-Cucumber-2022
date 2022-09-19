const Commands = require("../Commands");

class Homepage {

    commands = new Commands();

    learnAboutRewardsButton = "//a[contains(text(),'Learn about Hotels.com Rewards')]";



    async clickLearnAboutRewardsButton() {
        await this.commands.clickWebElement(this.learnAboutRewardsButton);
        
    }

}

module.exports = Homepage;