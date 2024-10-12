import { test } from "@playwright/test";


test(`Test to create a lead`, async ({page}) => {
    //page.setDefaultTimeout(40000);
    await page.goto("http://leaftaps.com/opentaps/control/main");
     const pageTitle= await page.title();
        //Enter username
       await  page.locator("//input[@id='username']").fill("demosalesmanager");
      
    //Enter password
       await  page.locator("//input[@id='password']").fill("crmsfa");
    //click on Login
       await page.locator(".decorativeSubmit").click();

       await page.getByText('CRM/SFA').click();

        //Navigating to lead page
       await page.locator("//a[text()='Leads']").click();

       //Create a Lead
       await page.click("//a[text()='Create Lead']");

       //Fill the lead details

       await page.locator("//input[@id='createLeadForm_companyName']").fill("KPMG");
       await page.locator("//input[@id='createLeadForm_firstName']").fill("Angel");
       await page.locator("//input[@id='createLeadForm_lastName']").fill("Gracious");
       await page.locator("//input[@id='createLeadForm_personalTitle']").fill("Mrs");
       await page.selectOption("#createLeadForm_dataSourceId",{value:"LEAD_COLDCALL"});
       await page.selectOption("#createLeadForm_industryEnumId",{index:13});
       await page.selectOption("#createLeadForm_ownershipEnumId",{label:"LLC/LLP"});       
       await page.locator("//input[@name='generalProfTitle']").fill("Test Manager");
       await page.locator("//input[@id='createLeadForm_annualRevenue']").fill("4500000");
       await page.locator("//input[@id='createLeadForm_departmentName']").fill("Quality Assurance");
       await page.locator("//input[@id='createLeadForm_primaryPhoneNumber']").fill("9986000890");
       await page.locator("//select[@id='createLeadForm_currencyUomId']").selectOption('CAD - Canadian Dollar');
       await page.locator("//input[@id='createLeadForm_sicCode']").fill("524652");
       await page.locator(".smallSubmit").click();
            
       const companyName= await page.locator('#viewLead_companyName_sp').innerText();
       const firstName= await page.locator('#viewLead_firstName_sp').innerText();
       const lastName= await page.locator('#viewLead_lastName_sp').innerText();       
       const status =await page.locator("#viewLead_statusId_sp").innerText();
       test.setTimeout(600000);
       //Print the details of the lead
       console.log(`The following are the details of the lead: Company Name:${companyName},First Name:${firstName},Last Name:${lastName},Status: ${status}`);
       //Print title of the page
       console.log(('*******************************'));
       console.log(`Title of the page is ${pageTitle}`); 
       
           
        
}
)
