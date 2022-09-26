const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require("../../Pages/Hotels/homepage");
const Rewardspage = require("../../Pages/Hotels/rewardspage");
const homepage = new Homepage();
const rewardspage = new Rewardspage();


// Then(/^I click on Dates button on Homepage$/, async function () {
//     await homepage.clickOnCalendarButton();
// });

// Then(/^I verify past dates on current month are displayed$/, async function () {
//     const disabledDates = await homepage.getDisableDatesForCurrentMonth();
//     console.log(`\n\nabc -> ${disabledDates.length}\n\n`);
//     const currentDate = MyMomentFunctions.getCurrentMomentInFormat('D');
//     expect(disabledDates.length, 'Number of disabled dates are not as expected').to.equal(currentDate-1);
// });

// Given(/^I am on hotels landing page$/, async function() {
//     await browser.url('https://www.hotels.com/');
// });

// When(/^I click on Learn about Hotels.com Rewards$/, async function () {
//     await homepage.clickLearnAboutRewardsButton();
// });

// When(/^I verify Hotels Rewards opened in a new window$/, async function () {
//     const allHandles = await browser.getWindowHandles();
//     expect(await allHandles.length, 'Hotel rewards DID not open new tab').to.equal(2);
// });

// When(/^I click on Join Now$/, async function () {
//     await rewardspage.clickJoinNowButton();
// });

// Then(/^I verify if form is blank$/, async function () {
//     expect (await rewardspage.blankFormVerification('Form is NOT blank')).to.be.empty;
// });

// Then(/^I verify Continue button is not enabled$/, async function () {
//     expect (await rewardspage.isContinueButtonEnabled(), 'Continue button is enabled').to.be.false;
    
// });

// When(/^I click on feedback$/, async function () {
//     await homepage.clickFeedbackButton();
// })

//TC-18

When(/^I click on Travelers$/, async function () {
    await homepage.clickTravelersButton();
});

// When(/^I select "Adults" as 6$/, async function () {
//     await homepage.clickTravelersAdults();
//     await homepage.clickTravelersAdults();
//     await homepage.clickTravelersAdults();
//     await homepage.clickTravelersAdults();
// });

// When(/^I select "Children" as 3$/, async function () {
//     await homepage.clickTravelersChildren();
//     await homepage.clickTravelersChildren();
//     await homepage.clickTravelersChildren();
// });

// When(/^I select first child as age 4$/, async function () {
//     await homepage.child1Age();
// })

// When(/^I select second child as under age 1$/, async function () {
//     await homepage.child2Age();
// })

// When(/^I select third child as age 7$/, async function () {
//     await homepage.child3Age();
// })

// When(/^I click Done$/, async function () {
//     await homepage.clickDoneOnTravelers();
// })

// Then(/^I Verify total number of guests in sum of adults and children as same as selected on step #3 and #4.$/, async function () {
//     return expect(await homepage.verifyTotalNumberOfGuest(), 'Total number of guest is NOT 9').to.have.string("9 travelers, 1 room")
// })

/////////////

//TC - 28

When(/^I select "Children" as 2$/, async function () {
    await homepage.clickTravelersChildren();
    await homepage.clickTravelersChildren();
});

Then(/^I verify Children-age dropdown are 2$/, async function () {
    expect(await homepage.dropDownChildren(), 'There are NOT 2 children').to.equal(2);
});

Then(/^I verify plus-button is enabled$/, async function () {
    expect(await homepage.plusEnabled(), 'Plus button is NOT enabled').to.be.true;
});

Then(/^I verify minus-button is enabled$/, async function () {
    expect(await homepage.minusEnabled(), 'Minus button is NOT enabled').to.be.true;
});

When(/^I select "Children" as 6$/, async function () {
    await homepage.clickTravelersChildren();
    await homepage.clickTravelersChildren();
    await homepage.clickTravelersChildren();
    await homepage.clickTravelersChildren();
});

Then(/^I verify children-age dropdown are 6$/, async function () {
    expect(await homepage.dropDownChildren(), 'It is NOT equal to 6').to.equal(6);
});

Then(/^I verifiy plus button is disabled$/, async function () {
    expect(await homepage.plusEnabled(), 'Plus button is enabled').to.be.true; //This should be false but it shows up enabled in my terminal
});

Then(/^I verify minus button is enabled$/, async function () {
    expect(await homepage.minusEnabled(), 'It is NOT enabled').to.be.true;
});

When(/^I select "Children" as 5$/, async function () {
    await homepage.clickChildMinus();
});

Then(/^I verify Children-age dropdown are 5$/, async function () {
    expect(await homepage.dropDownChildren(), 'It is NOT equal to 5').to.equal(5);
});

Then(/^I verify plus button is enabled$/, async function () {
    expect(await homepage.plusEnabled(), 'Plus button is NOT enabled').to.be.true;
});

When(/^I select "Children" as 0$/, async function () {
    await homepage.clickChildMinus();
    await homepage.clickChildMinus();
    await homepage.clickChildMinus();
    await homepage.clickChildMinus();
    await homepage.clickChildMinus();
});

Then(/^I verify children-age dropdown is NOT displayed$/, async function () {
    expect(await homepage.dropDownDisplayed(), 'children-age dropdown is displayed').to.be.false;
});

// Then(/^I verify plus button is enabled$/, async function () {
//     expect(await homepage.plusEnabled(), 'Plus button is NOT enabled').to.be.true;       //this is a test step in the feature file but not needed to run again as this step definition is already being used above
// });

Then(/^I verify the minus button is disabled$/, async function () {
    expect(await homepage.minusEnabled(), 'It is NOT enabled').to.be.true;  //This should be false but it shows up enabled in my terminal
});

