import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js'


test.describe('Login Page Tests', () => {
       let loginPage

  test.beforeEach(async ({ page }) => {
  loginPage =new LoginPage(page)
    await loginPage.goto();
  });

    test('TC_01 Valid login',async ({page}) =>{
      await loginPage.login('vshln4@gmail.com', 'Test@1234')
      await expect(loginPage.urlLink).toBeVisible()

})
    test('TC_02 Wrong Password', async ({page})=>{
      await loginPage.login('vshln4@gmail.com', 'Test@1')
      await expect(loginPage.errorMessage).toBeVisible()

})
     test('TC_03 Wrong Email', async ({page})=>{
      await loginPage.login('vshl4@gmail.com', 'Test@1234')
      await expect(loginPage.errorMessage).toBeVisible()

})
test('TC_04 Blank Email', async ({page})=>{
  await loginPage.login('','Test@1234')
  await expect(page).toHaveURL('https://automationexercise.com/login')

})
test('TC_05 Blank Password', async ({page})=>{
    await loginPage.login('vshln4@gmail.com','')
  await expect(page).toHaveURL('https://automationexercise.com/login')
})
})
