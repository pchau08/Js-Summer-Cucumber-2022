const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require("../../Pages/Darksky/homepage");
const homepage = new Homepage();

Given(/^I am on Darksky home page$/, async function () {
    await browser.url('https://darksky.net/');
});

Then(/^I verify timeline has 12-data points with 2 hours gap from current hour$/, async function () {

   //expect(await homepage.checkTimeLineArray(), 'All temperature values are not displayed').to.contain('°');

   //const timeLine = await $$(homepage.allTemperatureElements);

   await homepage.checkTimeLineArray();
   
  

})