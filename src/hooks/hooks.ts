import { Before,After, BeforeAll ,AfterAll, AfterStep, Status} from "@cucumber/cucumber";
import { chromium,Browser,Page,BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { getEnvironmet } from "../helper/env/env";
import { invokeBrowser } from "../helper/browsers/browsermanager";
let browser:Browser;
let page:Page;
let context:BrowserContext;

// Function to generate date and timestamp
function getDateTime() {
    const now = new Date();
    const date = now.toISOString().split('T')[0]; // YYYY-MM-DD
    const time = now.toTimeString().split(' ')[0].replace(/:/g, '-'); // HH-MM-SS
    return `${date}_${time}`;
  }

BeforeAll(async function () {
    getEnvironmet();
    browser=await invokeBrowser();
})

Before(async function () {
    
    context= await browser.newContext();
    page=await browser.newPage();
    pageFixture.page=page;

})

After(async function () {
    
    await pageFixture.page.close();
    await context.close();
  
})
AfterStep( async function ({result,pickle}) {
    const dateTime = getDateTime();
     if (result.status === Status.FAILED) 
      {
        const img= await this.page.screenshot({path: `./test-results/screenshots/${pickle.name}_${dateTime}.png`, type:"png"}); // we are getting the screenshot here
        await this.attach(img,"image/png");
      }
     });

AfterAll(async function () {
    await browser.close();  
    
})