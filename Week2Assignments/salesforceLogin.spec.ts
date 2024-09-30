import {test, chromium } from "@playwright/test";

test(`To Login to Salesforce`, async () => {
    
    const browserInstance = await chromium.launch({headless:false});
    const broswercontext = await browserInstance.newContext();
    const browserPage = await broswercontext.newPage();
    await browserPage.goto("https://login.salesforce.com/");

    const url= browserPage.url();

    //url of the page
    console.log(`The url of the page is ${url}`);

    //title of the page
     const title =browserPage.title();
     console.log(`The title of the page is ${title}`);
   
}
)
    
