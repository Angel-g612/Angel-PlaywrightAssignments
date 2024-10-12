import { test } from "@playwright/test";

test(`To edit a Lead`,async ({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
         //Enter username
    await  page.locator("//input[@id='username']").fill("demosalesmanager");
      
         //Enter password
    await  page.locator("//input[@id='password']").fill("crmsfa");
         //click on Login
    await page.locator(".decorativeSubmit").click();
     
    await page.getByText('CRM/SFA').click();
     
        //Navigating to lead page
    await page.locator("//a[text()='Leads']").click();
    await page.locator("//a[text()='Find Leads']").click();
    //await page.getByLabel("First name").fill("Angel");
    await page.locator("(//input[@name='firstName'])[3]").fill("Angel");
    await page.locator("//button[text()='Find Leads']").click();
    await page.locator("//a[text()='12388']").click();
    await page.locator("//a[text()='Edit']").click();
    await page.locator("//input[@id='updateLeadForm_companyName']").fill("Deloitte");
    await page.locator("//input[@id='updateLeadForm_annualRevenue']").fill("6500000");
    await page.locator("//input[@id='updateLeadForm_departmentName']").fill("Testing Practice");  
    await page.locator("//textarea[@id='updateLeadForm_description']").fill("Changed the company, revenue and department name"); 
    await page.locator("//input[@value='Update']").click();
    const companyName= await page.locator('#viewLead_companyName_sp').innerText();
    const annualRevenue= await page.locator('#viewLead_annualRevenue_sp').innerText();
    const departmentName= await page.locator('#viewLead_departmentName_sp').innerText();       
    const descritpion =await page.locator("#viewLead_description_sp").innerText();
       //Print the details of the lead
    console.log(`The edited details of the lead: Company Name:${companyName},revenue:${annualRevenue},DepartmentName:${departmentName},Description: ${descritpion}`);
     
})