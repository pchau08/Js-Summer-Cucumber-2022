const { Then, When , Given,  } = require("@wdio/cucumber-framework");
const Homepage = require("../../Pages/Hotels/Homepage");
const { expect } = require("chai");

const homepage = new Homepage();



Given(/^I am on hotels landing page$/, async function () {
    await browser.url ('https://www.hotels.com/');
})

When(/^I Scroll to “Get the app“ button$/, async function () {
    await homepage.scrollToAppBttn();
})

When(/^I Enter "0000000000" in Phone number$/, async function () {
    await homepage.typePhoneNum();
})

When(/^I Click on “Get the app“ button$/, async function () {
    await homepage.clickAppBtn();
})

Then(/^I Verify “Please enter a valid phone number.“ error is displayed$/, async function () {

    expect(await homepage.phoneErrorDis(), 'Phone Number Error NOT displayed').to.be.true;
})
