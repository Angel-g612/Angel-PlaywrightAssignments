import { test } from "@playwright/test";

test(`To create an account in Salesforce`, async ({page}) => {

  await page.goto("https://login.salesforce.com/");
  await page.getByLabel("Username").fill("angel@testleaf.com")
  await page.getByLabel("Password").fill("Jesus_0402");
  await page.locator("//input[@id='Login']").click();
  await page.locator(".slds-icon-waffle").click();
  await page.getByText("View All").click();
  await page.getByPlaceholder("Search apps or items...").fill("Service")
  await page.locator("(//mark[text()='Service'])[1]").click();
  await page.locator("//span[text()='Accounts']").click();
  await page.locator("//div[text()='New']").click();
  await page.locator("//input[@name ='Name']").fill("Juan");
  await page.locator("//button[text() ='Save']").click();
  const toast=await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").innerText()
   console.log(toast);
   
})
  