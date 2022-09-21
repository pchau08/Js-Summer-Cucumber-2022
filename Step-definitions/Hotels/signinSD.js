const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require("../../Pages/Hotels/homepage");
const Rewardspage = require("../../Pages/Hotels/rewardspage");
const homepage = new Homepage();
const rewardspage = new Rewardspage();



Given(/^I am on hotels landing page$/, async function() {
    await browser.url('https://www.hotels.com/');
});


When(/^I click on Sign in link$/, async function () {
    await homepage.clickSigninButton();
    await homepage.clickSigninPopUp();
})

