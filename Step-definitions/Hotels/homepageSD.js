const { Then, When } = require("@wdio/cucumber-framework");
const Homepage = require("../../Pages/Hotels/Homepage");
const Searchpage = require("../../Pages/Hotels/Searchpage");
const { expect } = require("chai");
const MyMomentFunctions = require('../../Utils/MyMomentFunctions');

const homepage = new Homepage();


Then(/^I click on Dates button on Homepage$/, async function () {
    await homepage.clickOnCalendarButton();
});

Then(/^I verify past dates on current month are displayed$/, async function () {
    const disabledDates = await homepage.getDisableDatesForCurrentMonth();
    console.log(`\n\nabc -> ${disabledDates.length}\n\n`);
    const currentDate = MyMomentFunctions.getCurrentMomentInFormat('D');
    expect(disabledDates.length, 'Number of disabled dates are not as expected').to.equal(currentDate-1);
});

When(/^I click on Learn about Hotels.com Rewards$/, async function () {
    await homepage.clickOnHotelRewards();
})


Then(/^I verify if Hotels Rewards opened in a new window$/), async function () {
    const allHandles = await browser.getWindowHandles();
    expect(allHandles.length, 'Hotels did NOT open new window').to.equal(2);
}

Then(/^I click on Join Now$/), async function () {
    await homepage.clickOnJoinNow();
}

Then(/^I verify the form is blank$/, async function () {
    await homepage.createAccountForm();
    expect(createAccountForm.length, 'Form is filled in'.to.equal(createAccountForm));
})

Then(/^I verify that the Continue button is NOT enabled$/, async function () {
    await homepage.continueButton();
})