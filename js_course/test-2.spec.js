import { test, expect } from '@playwright/test';

test('test-2', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
  await page.locator('[data-test="shopping-cart-link"]').click();
  
  await expect(page.locator('[data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
 
});