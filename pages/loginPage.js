export class LoginPage {
    constructor(page){
      this.page =page
      this.loginemail=page.locator('[data-qa="login-email"]')
      this.loginpassword =page.locator('[data-qa="login-password"]')
      this.loginButton =page.locator('[data-qa="login-button"]')
      this.errorMessage = page.getByText('Your email or password is incorrect!')
      this.urlLink =page.getByRole('link',{name:'logout'})
    
    }
     async goto(){
      await this.page.goto('https://automationexercise.com/login')
    }
    async login(email,password){
        await this.loginemail.fill(email)
        await this.loginpassword.fill(password)
        await this.loginButton.click()
    }
}