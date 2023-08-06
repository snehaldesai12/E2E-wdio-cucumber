// import { Then } from "@wdio/cucumber-framework";
// import chai from 'chai'

// Then(/^Inventory page should list (.*)$/, async function (NoOfProducts) {
//     if(!NoOfProducts) throw Error(`Invalid product count provided: ${NoOfProducts}`)

//     let eleArray = await $$(`//div[@class="inventory_item_name"]`)

//     console.log(`>>>>>>: ${eleArray}`)
//     chai.expect(eleArray.length).to.equal(parseInt(NoOfProducts))

//     await browser.debug()
//   });

import { Then } from "@wdio/cucumber-framework";

import chai from "chai";

Then(/^Inventory page should list (.*)$/, async function (NumberOfProducts) {
  if (!NumberOfProducts)
    throw Error(`Invalid number provided: ${NumberOfProducts}`);

  let eleArr = await $$(`.inventory_item_name`);

  chai.expect(eleArr.length).to.equal(parseInt(NumberOfProducts));
});
