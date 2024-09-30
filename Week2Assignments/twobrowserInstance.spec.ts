import {chromium, firefox, test  } from "@playwright/test";
import { channel } from "diagnostics_channel";

test(` Navigation to redbus via edge browser`, async () => {

    const instance1 = await chromium.launch({channel:"msedge"});
    const broswercontext1 = await instance1.newContext();
    const browserPage1 = await broswercontext1.newPage();
    await browserPage1.goto("https://www.redbus.in/");

    const url1= browserPage1.url();
    console.log(`The url of red bus is ${url1}`);
    
    const title1 = browserPage1.title();
    console.log(`The title of red bus is ${title1}`);
    
})

test(` Navigation to Flipkart via firefox browser`, async () => {

    const instance2 = await firefox.launch({channel:"firefox"});
    const broswercontext2 = await instance2.newContext();
    const browserPage2 = await broswercontext2.newPage();
    await browserPage2.goto("https://www.flipkart.com/");

    const url1= browserPage2.url();
    console.log(`The url of flipkart is ${url1}`);
    
    const title1 = browserPage2.title();
    console.log(`The title of flipkart is ${title1}`);
    
})
