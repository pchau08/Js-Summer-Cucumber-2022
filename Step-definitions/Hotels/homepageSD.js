const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require("../../Pages/Hotels/homepage");
const Rewardspage = require("../../Pages/Hotels/rewardspage");
const homepage = new Homepage();
const rewardspage = new Rewardspage();

Given(/^I am on hotels landing page$/, async function() {
    await browser.url('https://www.hotels.com/');
});

When(/^I click on Learn about Hotels.com Rewards$/, async function () {
    await homepage.clickLearnAboutRewardsButton();
});

When(/^I verify Hotels Rewards opened in a new window$/, async function () {
    const allHandles = await browser.getWindowHandles();
    expect(await allHandles.length, 'Hotel rewards DID not open new tab').to.equal(2);
});

When(/^I click on Join Now$/, async function () {
    await rewardspage.clickJoinNowButton();
});

Then(/^I verify if form is blank$/, async function () {
    expect (await rewardspage.blankFormVerification('Form is NOT blank')).to.be.empty;
});

Then(/^I verify Continue button is not enabled$/, async function () {
    expect (await rewardspage.isContinueButtonEnabled(), 'Continue button is enabled').to.be.false;
    
});