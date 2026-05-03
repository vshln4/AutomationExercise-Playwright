export class products{
    constructor(page){
        this.page = page
    
        this.prodsearch =page.getByPlaceholder('Search Product')
        this.searchButton =page.locator('#submit_search' )
    }
    async goto() {
    await this.page.goto('https://automationexercise.com/products') 
  }
async searchProduct(productName) {
    await this.prodsearch.fill(productName)
    await this.searchButton.click({ force: true })
  }
}
 
        
    
    
