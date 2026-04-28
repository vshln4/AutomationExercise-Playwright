import { test, expect } from '@playwright/test';

test.describe('Login Page Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
  });

    test('TC_01 Valid login',async ({page}) =>{
    await page.getByRole('link',{name :  'Signup / Login'}).click()

    await page.locator('[data-qa="login-email"]').fill('vshln4@gmail.com')
    await page.locator('[data-qa="login-password"]').fill('Test@1234')
    await page.locator('[data-qa="login-button"]').click()
    await expect(page.getByRole('link',{name:'logout'})).toBeVisible()
})
    test('TC_02 Wrong Password', async ({page})=>{
        await page.locator('[data-qa="login-email"]').fill('vshln4@gmail.com')
        await page.locator('[data-qa="login-password"]').fill('Test@1')
        await page.locator('[data-qa="login-button"]').click()
      await expect (page.getByText('Your email or password is incorrect!')).toBeVisible()
})
     test.only('TC_03 Wrong Email', async ({page})=>{
        await page.locator('[data-qa="login-email"]').fill('vshln@gmail.com')
        await page.locator('[data-qa="login-password"]').fill('Test@1234')
        await page.locator('[data-qa="login-button"]').click()
      await expect (page.getByText('Your email or password is incorrect!')).toBeVisible()
})
// test.only('TC_04 Blank Email', async ({page})=>{
//         // await page.locator('[data-qa="login-email"]').fill('vshln@gmail.com')
//         await page.locator('[data-qa="login-password"]').fill('Test@1234')
//         await page.locator('[data-qa="login-button"]').click()
//       await expect (page.getByText('Your email or password is incorrect!')).toBeVisible()
// })
})
