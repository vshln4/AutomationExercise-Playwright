export class products{
    constructor(page){
        this.page = page
        this.productsUrl =page.getByRole('link',{name:'Products'})
    }
    async goto(){
        await this.page.goto('https://automationexercise.com/login')
    }
    async prods(){
        await this.productsUrl.click()
    }
}