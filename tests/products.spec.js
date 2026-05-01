import {test,expect} from '@playwright/test'
import { loginAs } from '../helper/helper'
import { products } from '../pages/products'

test.describe('Products',async () => {
let productspage

test.beforeEach(async ({page}) => {
    await loginAs(page)
    productspage = new products(page)
   await productspage.goto()
})
test('TC_01 Product page', async({page}) => {
    await productspage.prods()
    await expect(page).toHaveURL('https://automationexercise.com/products')
})
})