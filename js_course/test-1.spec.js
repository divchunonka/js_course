import { test, expect } from '@playwright/test';

test('test-1', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  
  await expect(page.locator('.title')).toHaveText('Products');
  await expect (page.locator('.shopping_cart_link')).toBeVisible();
  await expect(await page.locator('.inventory_list .inventory_item').count()).toBeGreaterThan(3);
});