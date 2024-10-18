import{ expect, test } from '@playwright/test';

test('To test the button',async({page})=>{

    await page.goto("https://leafground.com/button.xhtml");

    await page.locator(".card").filter({hasText:'Click and Confirm title'})
    .getByRole("button").filter({hasText:"Click"}).click();
    await expect(page.locator("//div[@class='overview-title' and text()='LEARNERS']")).toBeVisible({timeout:2000});
    page.goBack();

    page.locator(".card").filter({hasText:'Confirm if the button is disabled'})
    .getByRole("button").filter({hasText:"Disabled"});

    await expect(page.locator(".card").filter({hasText:'Confirm if the button is disabled'})
    .getByRole("button").filter({hasText:"Disabled"})).toBeDisabled({timeout:1000});

    await page.locator(".card").filter({hasText:'Click Image Button and Click on any hidden button'})
    .getByRole("button").filter({hasText:"Image"}).click();
    await page.locator(".card").filter({hasText:'Click Image Button and Click on any hidden button'})
    .getByRole("button").filter({hasText:"Image"}).click();

    const buttonCount= page.locator(".card").filter({hasText:"How many rounded buttons are there"})
    .getByRole("button");
    console.log(buttonCount.count());    

})


