import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google Homepage is open$/, async function(){
    await browser.url("https://www.google.com/")
    browser.maximizeWindow()
    await browser.pause(1000)
})

When(/^Search (.*) is entered$/, async function(searchItem){

    console.log(`***SearchItem: ${searchItem}`)
    let ele = await $(`[name=q]`)
    await ele.setValue(searchItem)
    await browser.keys("Enter")
})

Then(/^Click on first search result$/, async function(){
    const fr = await $(`<h3>`)
    fr.click();
})

Then(/^URL should match with (.*)$/, async function(expectedURL){

    let url = await browser.getUrl()
    chai.expect(url).to.equal(expectedURL);
    
    
})

