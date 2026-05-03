import {test,expect} from '@playwright/test'
import { loginAs } from '../helper/helper'
import { products } from '../pages/products'

test.describe('Products', () => {
let productspage

test.beforeEach(async ({page}) => {
    await loginAs(page)
    productspage = new products(page)
   await productspage.goto()
})
test('TC_01 Product page', async({page}) => {
    
    await expect(page.getByText('All Products')).toBeVisible()

})
test('TC02 Search', async({page})=> {
    
    await productspage.searchProduct('Top')
    await expect(page.getByText('Searched Products')).toBeVisible()
})
})