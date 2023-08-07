import { Given } from "@wdio/cucumber-framework";
import chai = require("chai");

Given(/^Login to inventory web app$/, async function () {
  // 1. *** Go to the inventory app
  // const testUsername = process.env.TEST_STD_USERNAME;
  console.log(`<<TestUsername: ${process.env.TEST_STD_USERNAME}`)
  await browser.url("https://www.saucedemo.com");

   // 2. *** Login to the inventory app
  try {   
    await browser.maximizeWindow();
    await (await $(`//*[@id="user-nme"]`)).setValue(process.env.TEST_STD_USERNAME);
    await (await $(`//*[@id="password"]`)).setValue(process.env.TEST_STD_PASSWORD);
    await (await $(`//*[@id="login-button"]`)).click();
  } catch (err) {
    console.log(`Error in first login. Retrying...`);
    await browser.refresh()
    await browser.pause(2000)
    await (await $(`//*[@id="user-name"]`)).setValue(`$(process.env.TEST_STD_USERNAME)`);
    await (await $(`//*[@id="password"]`)).setValue(`$(process.env.TEST_STD_PASSWORD)`);
    await (await $(`//*[@id="login-button"]`)).click();
  }

  //Login with another user
  // await browser.pause(2000)
  // await browser.reloadSession()
  // await browser.url("https://www.saucedemo.com");
  // await browser.maximizeWindow();
  // await (await $(`//*[@id="user-name"]`)).setValue("problem_user");
  // await (await $(`//*[@id="password"]`)).setValue("secret_sauce");
  // await (await $(`//*[@id="login-button"]`)).click();

  await browser.back()
  browser.pause(2000)
  await browser.forward();
  await browser.debug();
});
