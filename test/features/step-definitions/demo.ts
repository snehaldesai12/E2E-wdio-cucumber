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


Given(/^A webpage is open$/, async function(){
    await browser.url("/inputs")
    // await browser.setTimeout({implicit:30000, pageLoad:30000})
    
    await browser.maximizeWindow()
    await browser.pause(5000)
})

When(/^Perform Web Interaction$/, async function(){
    /***
     * 1. Input box
     * Actions:
     * 1. Type into input box
     * 2. Clear the field and type or just add value
     * 3. Click and type 
     * 4. Slow typing
     * 
     */ 

    
    // await $(`a[href="/inputs"]`).click()
    // await browser.pause(5000)

    let num = "12345"
    let val=await $(`[type="number"]`)
    // await val.setValue(num)
    // await browser.pause(2000)

    // Slow Typing
    for(let i=0; i<num.length; i++)
    {
        let num1 = num.charAt(i)
        await val.addValue(num1)
        await browser.pause(2000)
    }

    await val.clearValue()
    await browser.pause(5000)
})

