const { Then, When , Given,  } = require("@wdio/cucumber-framework");
const Homepage = require("../../Pages/Hotels/Homepage");
const { expect } = require("chai");

const homepage = new Homepage();



Given(/^I am on hotels landing page$/, async function () {
    await browser.url ('https://www.hotels.com/');
})

When(/^I Click on “List your property”$/, async function () {
    await homepage.clickPropertyLink();
})

Then(/^I Verify “What would you like to list?” is displayed$/, async function () {
    await homepage.switchToTab('Property Info')
    expect(await homepage.wouldYouLikeDis(), 'Text Not Displayed').to.be.true;
})

Then(/^I Verify “Lodging“ and “Private residence“ options are displayed$/, async function() {
    expect(await homepage.privateTextDis() && await homepage.lodgingTextDis(), 'Options NOT displayed' ).to.be.true;
})

When(/^I Click on “Private residence“$/, async function () {
    await homepage.clickPrivateBtn();
})

Then(/^I Verify ”Step 1 of 3” is displayed$/, async function() {
    expect(await homepage.step1Of3Displayed(), 'Step NOT displayed').to.be.true;
})

Then(/^I Verify “See how much you could earn!” is displayed$/, async function() {
    expect(await homepage.couldEarnDisplayed(), 'Earn is NOT displayed').to.be.true;
})

When(/^I Enter “4“ as bedroom$/, async function() {
    await homepage.clickPlusBed();
    await homepage.clickPlusBed();
    await homepage.clickPlusBed();
    await homepage.clickPlusBed();
})

When(/^I Enter “2.5“ as bathroom$/, async function() {
    await homepage.clickPlusBath();
    await homepage.clickPlusBath();
    await homepage.clickPlusBath();
})

When(/^I Click on “Next” button$/, async function() {
    await homepage.clickNextBtn();
})

Then(/^I Verify ”Step 2 of 3” is displayed$/, async function() {
    expect(await homepage.step2Of3Displayed(), 'Step NOT displayed').to.be.true;
})

Then(/^I Verify “Where is your property located?” is displayed$/, async function() {
    expect(await homepage.propertyLocatedDis(), 'property NOT displayed').to.be.true;
})

When(/^I Enter “121” in address$/, async function () {
    await homepage.enterAddressInput();
})

When(/^I Select “1211 6th Avenue, New York, NY, USA” from auto-suggestion$/, async function() {
    await browser.pause(2000);
    await homepage.goingToAddress('1211 6th Avenue, New York, NY, USA');
    await browser.pause(2000);
})

Then(/^I Verify graph is displayed$/, async function() {
    expect(await homepage.isGraphDisplayed(), 'Map is NOT Displayed').to.be.true;
})

Then(/^I Verify pin in graph is displayed$/, async function() {
    expect(await homepage.isGraphPinDis(), 'map pin NOT displayed').to.be.true;
})

Then(/^I Verify “Pin location may not be exact.“ is displayed below graph$/, async function() {
    expect(await homepage.isGraphPinErrDis(), 'map error NOT displayed').to.be.true;
})


