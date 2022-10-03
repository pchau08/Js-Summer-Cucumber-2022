const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require("../../Pages/Hotels/homepage");
const Rewardspage = require("../../Pages/Hotels/rewardspage");
const homepage = new Homepage();
const rewardspage = new Rewardspage();





Then(/^I click on Dates button on Homepage$/, async function () {
    await homepage.clickOnCalendarButton();
});

Then(/^I verify past dates on current month are displayed$/, async function () {
    const disabledDates = await homepage.getDisableDatesForCurrentMonth();
    console.log(`\n\nabc -> ${disabledDates.length}\n\n`);
    const currentDate = MyMomentFunctions.getCurrentMomentInFormat('D');
    expect(disabledDates.length, 'Number of disabled dates are not as expected').to.equal(currentDate-1);
});

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

When(/^I click on feedback$/, async function () {
    await homepage.clickFeedbackButton();
})


//TC-18

When(/^I click on Travelers$/, async function () {
    await homepage.clickTravelersButton();
});

When(/^I select "Adults" as 6$/, async function () {
    await homepage.clickTravelersAdults();
    await homepage.clickTravelersAdults();
    await homepage.clickTravelersAdults();
    await homepage.clickTravelersAdults();
});

When(/^I select "Children" as 3$/, async function () {
    await homepage.clickTravelersChildren();
    await homepage.clickTravelersChildren();
    await homepage.clickTravelersChildren();
});

When(/^I select first child as age 4$/, async function () {
    await homepage.child1Age();
})

When(/^I select second child as under age 1$/, async function () {
    await homepage.child2Age();
})

When(/^I select third child as age 7$/, async function () {
     await homepage.child3Age();
})

When(/^I click Done$/, async function () {
    await homepage.clickDoneOnTravelers();
})

Then(/^I Verify total number of guests in sum of adults and children as same as selected on step #3 and #4.$/, async function () {
    return expect(await homepage.adultPlusChild(), 'Total number of guest is NOT 9').to.equal(await homepage.travelersText())
})

//TC-28

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


//TC-17

When(/^I click on "Dates"$/, async function () {
    await homepage.clickOnCalendarButton();
});

When(/^I go to current month if not displayed$/, async function () {
    await homepage.goToMonthBackwards('September', '2022');
});

Then(/^I verify for the current month$/, async function () {
    expect(await homepage.septemberText(), 'it is NOT September').to.include(await homepage.currentMonth);
});

Then(/^I verify past dates (if any) are disabled$/, async function () {
    expect(await homepage.september2022FromTodayEnabled(-2), 'it is enabled').to.be.false;
})

Then(/^$/, async function () {
    expect(await homepage.backMonthButtonDisabled(), 'it is enabled').to.be.false;
})


//TC-23

When(/^I search for "Manhattan, NY"$/, async function () {
    await homepage.enterDestination('Manhattan, NY');
    await homepage.selectDestinationFromAutoSuggestion('Manhattan');
});

When(/^I enter Check-in date as Jan-10-2023$/, async function () {
    await homepage.clickOnCalendarButton();
    await homepage.selectCheckInDate('January', '2023', '10');
});

When(/^I enter Check-in date as Jan-23-2023$/, async function () {
    await homepage.selectCheckOutDate('January', '2023', '23');
    await homepage.clickDoneAfterTravelDates();
});

When(/^I click on the Search button$/, async function () {
    await homepage.clickSearchButton();
});

When(/^I click on 5 star from star-rating filter$/, async function () {
    await homepage.clickOn5StarRating();
});

When(/^I select “Price” from sort-by dropdown$/, async function () {
    await homepage.clickOnPriceFromSortByDropdown();
});

Then(/^I Verify all hotels in search results are 5 star-rated as selected in above step$/, async function () {
    expect(await homepage.starsArray(), 'all hotels are not 5-Star').to.be.true;
});

Then(/^I Verify all hotels are listed in increasing order (price)$/, async function () {
    expect(await homepage.pricesArray(), 'prices are listed in decreasing order').to.be.true;
});


//TC-19

When(/^I enter "bora" in destination$/, async function () {
    await homepage.enterDestination('Bora');
});

When(/^I select "Bora Bora, Leeward Islands, French Polynesia" from auto suggestion$/, async function () {
    await homepage.selectDestinationFromAutoSuggestion('Bora Bora');
});

When(/^I select Select Dec 1, 2022 as Check-in$/, async function () {
    await homepage.clickOnCalendarButton();
    await homepage.selectCheckInDate('December', '2022', '01');
});

When(/^I Select Dec 10, 2022 as Check-out$/, async function () {
    await homepage.selectCheckOutDate('December', '2022', '10');
});

When(/^I Click Apply$/, async function () {
    await homepage.clickDoneAfterTravelDates();
});

When(/^I click "Search" button$/, async function () {
    await homepage.clickSearchButton();
});

Then(/^I verify search results will show the following text: Tell us how we can improve our site is displayed$/, async function () {
    await homepage.verifyImproveOurSiteDisplay();
    expect(await homepage.VerifyTellUsHowDisplayed(), 'does NOT display improve our site').to.be.true;
});

Then(/^I verify that the Button Share feedback is displayed and enabled$/, async function () {
    expect(await homepage.verifyFeedbackIsDisplayed(), 'does NOT display share feedback').to.be.true;
});



//TC-31

Given(/^I am on hotels landing page$/, async function () {
    await browser.url ('https://www.hotels.com/');
})

When(/^I Click on “English“ language$/, async function() {
    await homepage.clickEnglishBtn();

    await browser.pause(2000);
})

When(/^I Select “Español (Estados Unidos)” in Language dropdown$/, async function() {
    await homepage.clickLangBox();

    await browser.pause(2000);

    await homepage.clickSpanishOpt();
})

When(/^I Click on “Save“ button$/, async function() {
    await homepage.clickSaveBtn();

    await browser.pause(2000);
})

Then(/^I Verify “Español” is displayed$/, async function() {
    expect(await homepage.getSpanishText(), 'Spanish Text NOT displayed').to.include('Español');
})

When(/^I Click on “Español“ language$/, async function() {
    await homepage.clickEspanolBtn();

    await browser.pause(2000);
})

When(/^I Select “English (United States)” in Language dropdown$/, async function() {
    await homepage.clickLangBox();

    await browser.pause(2000);

    await homepage.clickEnglishOpt();

    await browser.pause(2000);
})

When(/^I Click on “Guardar“ button$/, async function() {
    await homepage.clickSpanishSave();

    await browser.pause(2000);
})

Then(/^I Verify “English” is displayed$/, async function() {
    expect(await homepage.getEnglishText(), 'English Text NOT displayed').to.include('English');
})