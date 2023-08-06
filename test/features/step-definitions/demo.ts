import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";
import { Key } from "webdriverio";

Given(/^Google Homepage is open$/, async function () {
  await browser.url("https://www.google.com/");
  browser.maximizeWindow();
  await browser.pause(1000);
  // console.log(`>>>BrowserObj: ${JSON.stringify(browser)}`)
});

When(/^Search (.*) is entered$/, async function (searchItem) {
  console.log(`***SearchItem: ${searchItem}`);
  let ele = await $(`[name=q]`);
  await ele.setValue(searchItem);
  await browser.keys("Enter");
  // console.log(`<<<EleObj: ${JSON.stringify(ele)}`)
});

Then(/^Click on first search result$/, async function () {
  const fr = await $(`<h3>`);
  fr.click();
});

Then(/^URL should match with (.*)$/, async function (expectedURL) {
 
  await browser.waitUntil(async function () {
    
    return await browser.getTitle()=== "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
  },{timeout:20000, interval:500, timeoutMsg:`Failed loading WDIO webpage: ${await browser.getTitle()}`})

  let url = await browser.getUrl();
  chai.expect(url).to.equal(expectedURL);
});

Given(/^A webpage is open$/, async function () {
  await browser.url("");
  // await browser.setTimeout({implicit:30000, pageLoad:30000})

  await browser.maximizeWindow();
  await browser.pause(5000);
});

When(/^Perform Web Interaction$/, async function () {
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

  // let num = "12345"
  // let val=await $(`[type="number"]`)
  // await val.setValue(num)
  // await browser.pause(2000)

  // Slow Typing
  // for(let i=0; i<num.length; i++)
  // {
  //     let num1 = num.charAt(i)
  //     await val.addValue(num1)
  //     await browser.pause(2000)
  // }

  // await val.clearValue()
  // await browser.pause(5000)

  /***
   * 2. Dropdown
   * Actions:
   * 1. Assert default option is selected
   * 2. Select by attribute, text, index
   * 3. Get list of options
   *
   */

  //  let elem = await $(`[selected="selected"]`)
  //  let val1 = await elem.getText()
  //  chai.expect(val1).to.equal("Please select an option")
  //  browser.pause(5000)

  //select specific option
  //  let dropel = await $(`#dropdown`)
  //  await dropel.selectByAttribute("value","1")
  //  await  $(`//select/option[@value="1"]`).click

  // Get list of options
  //     let dropel = await $$(`select>option`)
  //     let arr = []

  //    for(let i=0; i < dropel.length; i++)
  //    {
  //     let ele = dropel[i]
  //     let txt = ele.getText()
  //     arr.push(txt)
  //     console.log(txt)
  //    }

  //    console.log(`### Array:  $(arr)` )

  /***
   * 3. Checkbox
   * Actions:
   * 1. Select an option
   * 2. Unselect option(if selected)
   * 3. Assert if option is selected
   * 4. Select all options
   */

  //   let ele = await $(`//*[@id="checkboxes"]/input[2]`);

  //   if (await ele.isSelected()) {
  //     await ele.click();
  //   }

  // let eleArr = await $$(`//*[@id="checkboxes"]/input`);

  // for(let i=0;i< eleArr.length;i++)
  // {
  //     let ele = eleArr[i]

  //     if(!await ele.isSelected())
  //     {
  //         ele.click();
  //     }
  // }

  /***
   * 4. Windows Handling
   * Steps:
   * 1. Launch the browser
   * 2. Open another window
   * 3. Switch to the window based on title
   * 4. Switch back to main window
   * 
   
   * Actions:
   * 1. getTitle()
   * 2. getWindowHandle()
   * 3. getWindowHandles()
   * 4. switchToWindow()
   */

  // await $(`//a[contains(text(),"Click Here")]`).click()
  // await (await $(`=Elemental Selenium`)).click()
  // let currenttitlee = await browser.getTitle();
  // let parentWindowHandle = await browser.getWindowHandle()
  // console.log(`hellllloo: ${currenttitlee}`)

  // //Switch to specific window
  // let windowHandles = await browser.getWindowHandles()

  // for(let i=0;i<windowHandles.length;i++)
  // {
  //     console.log(`!!!!!WinHandles: ${windowHandles}`)
  //     await browser.switchToWindow(windowHandles[i])
  //     let currtitle = await browser.getTitle()
  //     if(currtitle === "Elemental Selenium | Elemental Selenium")
  //     {
  //         await browser.switchToWindow(windowHandles[i])
  //         let headtxt = await (await $(`<h1>`)).getText()
  //         console.log(`!!!! headtext: ${headtxt}`)
  //         break
  //     }
  // }

  // //Switch back to parent window
  // await browser.switchToWindow(parentWindowHandle)
  // let parenthead = await (await $(`<h3>`)).getText()
  // console.log(`!!!!Parenthead: ${parenthead}`)

  /***
   * 4. Handling Alerts
   * Methods used:
   * 1. isAlertOpen()
   * 2. acceptAlert()
   * 3. dismissAlert()
   * 4. sendAlertText()
   */

  //   await $(`button=Click for JS Prompt`).click()
  //   if(await browser.isAlertOpen()){
  //     let txt = await browser.getAlertText()
  //     console.log(`!!!!alerttxt: ${txt}`)
  //     await browser.sendAlertText("Hello successful")
  //     await browser.acceptAlert()
  //   }

  /***
   * 5. File Upload
   */

  //    console.log(process.cwd())     gets the current working directory
  // await $(`#file-upload`).addValue(`${process.cwd()}/data/fileUpload/dummydata.txt`)
  // await $(`#file-submit`).click()

  /***
   * 6. Frames
   * Methods used:
   * 1. switchToFrame()
   * 2. switchToParentFrame()
   */

  //    await $(`=iFrame`).click()
  //    let ele = await $(`#mce_0_ifr`)
  //    await browser.switchToFrame(ele)
  //    await (await $(`#tinymce`)).click()
  //    await browser.keys([ Key.Ctrl, "A"])
  //    await browser.pause(2000)
  //    await browser.keys("Delete")
  //    await (await $(`#tinymce`)).addValue(`Typing into the frame....`)
  //    await browser.switchToParentFrame()

  /***
   * 7. Scroll
   * Methods used:
   * 1. scrollIntoView()
   */

  // await $(`h2=Starting ₹129 | Monitors, storage, accessories & more`).scrollIntoView(false)

  //  * 8. Web Table
  //  * 1. Check number of rows & columns
  // let rowcount = await $$(`//table[@id="table1"]/tbody/tr`).length;
  // chai.expect(rowcount).to.equal(4);
  // console.log(`>>>>Row count: ${rowcount}`);
  // let colcount = await $$(`//table[@id="table1"]/thead/tr/th`).length;
  // chai.expect(colcount).to.equal(6);
  // console.log(`>>>>Col count: ${colcount}`);

  //  * 2. Get whole table data
  // let arr = [];
  // for (let i = 0; i < rowcount; i++) {
  //   let personObj = {
  //     lastname: "",
  //     firstName: "",
  //     email: "",
  //     due: "",
  //     web: "",
  //   };

  //   for (let j = 0; j < colcount; j++) {
  //     let cellval = await (
  //       await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[${j + 1}]`)
  //     ).getText();
  //     //  console.log(`>>>>Cellvalue: ${cellval}`);
  //     if (j === 0) personObj.lastname = cellval;
  //     if (j === 1) personObj.firstName = cellval;
  //     if (j === 2) personObj.email = cellval;
  //     if (j === 3) personObj.due = cellval;
  //     if (j === 4) personObj.web = cellval;
  //   }
  //   arr.push(personObj);
  // }
  // console.log(`Whole table : ${JSON.stringify(arr)}`);

  //  * 3. Get single row based on condition
  // let arr = [];
  // for (let i = 0; i < rowcount; i++) {
  //   let personObj = {
  //     lastname: "",
  //     firstName: "",
  //     email: "",
  //     due: "",
  //     web: "",
  //   };

  //   for (let j = 0; j < colcount; j++) {
  //     let cellval = await (
  //       await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[${j + 1}]`)
  //     ).getText();
  //     let firstName = await (await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[2]`)).getText()
  //     //  console.log(`>>>>Cellvalue: ${cellval}`);
  //     if(firstName === "Jason"){
  //       if (j === 0) personObj.lastname = cellval;
  //       if (j === 1) personObj.firstName = cellval;
  //       if (j === 2) personObj.email = cellval;
  //       if (j === 3) personObj.due = cellval;
  //       if (j === 4) personObj.web = cellval;
  //     }
  //   }
  //   if(personObj.firstName){
  //   arr.push(personObj);
  //   }
  // }
  // console.log(`Whole table : ${JSON.stringify(arr)}`);

  //  * 4. Get single column
  // let arr = [];
  // for (let i = 0; i < rowcount; i++) {
  //   let cellval = await ( await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[4]`)).getText();
  //   arr.push(cellval)
  // }
  // console.log(`Single column : ${JSON.stringify(arr)}`);

  //  * 5. Get single cell value based on another cell
  // let arr = [];
  // for (let i = 0; i < rowcount; i++) {
  //   // let cellval = await ( await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[4]`)).getText();
  //   let price = await ( await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[4]`)).getText();
  //   let firstName = await ( await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[2]`)).getText();

  //    if(+(price.replace("$","")) > 50)      /* Unary + will convert string to number */

  //    arr.push(firstName)

  // }
  // console.log(`Single col value : ${JSON.stringify(arr)}`);

  /***
   * 9. Scrolling
   * Visible Portion
   * windows object:
   * 1. scrollBy
   * Y -> -window.innerHTML
   */

  //Scroll down
  await browser.execute(() => {
    window.scrollBy(0, window.innerHeight);
  });

  await browser.pause(2000);

  //Scroll top
  await browser.execute(() => {
    window.scrollBy(0, -window.innerHeight);
  });

  /***
   *  Invisible Portion
   * windows object:
   * 1. scrollTo
   * Y -> document.body.scrollTop(scrollHeight)
   */

  await browser.pause(2000);
  await browser.execute(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  await browser.pause(2000);
  await browser.execute(() => {
    window.scrollTo(0, document.body.scrollTop);
  });

  await browser.debug();
});
