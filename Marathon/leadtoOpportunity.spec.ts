import { expect, test } from "@playwright/test";
test(`To convert lead to an opportunity`, async ({page}) => {

  await page.goto("https://login.salesforce.com/");
  await page.getByLabel("Username").fill("angel@testleaf.com")
  await page.getByLabel("Password").fill("Jesus_0402");
  await page.locator("//input[@id='Login']").click();
  await page.locator(".slds-icon-waffle").click();
  await page.getByText("View All").click();
  await page.getByPlaceholder("Search apps or items...").fill("Marketing");
  await page.getByText("ng CRM Classic").click();
  await page.locator("//span[text()='Leads']").click();
  await page.locator("//button[text()='New']").click();
  await page.getByRole('combobox',{name:'salutation'}).click();
  await page.locator("//span[@title='Mrs.']").click();
  await page.locator("//input[@name='firstName']").fill("Hannah");
  await page.locator("//input[@name='lastName']").fill("Catelyn");
  await page.locator("//input[@name='Company']").fill("KPMG");
  await page.locator("//button[@name='SaveEdit']").click();
  await page.locator("//span[text()='Lead'][2]").isVisible();

  //await page.waitForTimeout(1000);
  await page.getByRole('button',{name:'Show more actions'}).click();
  await page.locator("//span[text()='Convert']").click();

  page.locator(".modal-header slds-modal__header").filter({hasText:"Convert Lead"}).isVisible({timeout:1000});
   await page.locator("(//div[@class='uiInput uiInputText uiInput--default uiInput--input']/input)[4]").click();

   
 
}
)