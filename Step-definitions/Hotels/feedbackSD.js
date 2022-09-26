const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");

const Homepage = require("../../Pages/Hotels/homepage");
const Rewardspage = require("../../Pages/Hotels/rewardspage");
const Signuppage = require("../../Pages/Hotels/SignupPage");
const Feedbackpage = require("../../Pages/Hotels/Feedbackpage");

const homepage = new Homepage();
const rewardspage = new Rewardspage();
const signuppage = new Signuppage();
const feedbackpage = new Feedbackpage();

//TC-24

When(/^I select any star-rating$/, async function() {
    await feedbackpage.selectAnyStarRating();
});

When(/^I enter any "(.+)" comments$/, async function (textData) {
    await feedbackpage.enterTextPageCommentsBox();
});

When(/^I select any option for “How likely are you to return to Hotels.com?”$/, async function () {
    await feedbackpage.returnToHotelsDropDown()
})

When(/^I select any answer for “Prior to this visit, have you ever booked on Hotels.com?”$/, async function () {
    await feedbackpage.howLikelyToReturn();
})

When(/^I select any answer for ”Did you accomplish what you wanted to do on this page?”$/, async function () {
    await feedbackpage.didYouAccomplishSeleciton();
})

When(/^I click on Submit button$/, async function () {
    await feedbackpage.clickSubmitButton()
})

Then(/^$/, async function () {
    await feedbackpage.verifyFeedbackIsDisplayed();
})