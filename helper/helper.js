
import { LoginPage } from '../pages/loginPage.js'  

export async function loginAs(page) {
  const loginPage = new LoginPage(page)
  await loginPage.goto()
  await loginPage.login('vshln4@gmail.com', 'Test@1234')
}