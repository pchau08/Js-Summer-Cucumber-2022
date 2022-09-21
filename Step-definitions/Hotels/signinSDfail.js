// const { Given, Then, When } = require("@wdio/cucumber-framework");
// const Homepage = require("../../Pages/Hotels/Homepage");
// const { expect } = require("chai");
// const Commands = require("../../Pages/Commands");

// const homepage = new Homepage();
// const commands = new Commands();

// Given(/^I am on hotels landing page$/, async function () {
//     await browser.url ('https://www.hotels.com/');
// })

// When(/^I click on Sign in link$/, async function () {
//     await homepage.clickSigninButton();

//     await homepage.clickSigninLink();
// })

// When(/^I enter invalid email address$/, async function() {
//     await commands.typeInWebElement('//input[@id="loginFormEmailInput"]','Chipanidan@gmail.com');
// })

// When(/^I enter invalid password$/, async function() {
//     await commands.typeInWebElement('//input[@id="loginFormPasswordInput"]','Hello123@');
// })

// When(/^I click on Sign in button$/, async function() {
//     await commands.clickWebElement('//button[@id="loginFormSubmitButton"]');
// })

// Then(/^I Verify Verification message is displayed$/, async function() {

//     const msgDisplay = await commands.isWebElementDisplayedWithWait('//div[@class="uitk-error-summary"]');

//     expect(msgDisplay, 'There is no error message').to.be.true
// })
