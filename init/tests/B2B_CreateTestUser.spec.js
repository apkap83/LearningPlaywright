import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Ftickets');
  await page.getByPlaceholder('User Name').click();
  await page.getByPlaceholder('User Name').fill('admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('a12345');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Users List' }).click();
  await page.getByRole('button', { name: 'Create User' }).click();
  await page.locator('select[name="company"]').selectOption('-1');
  await page.locator('input[name="first_name"]').click();
  await page.locator('input[name="first_name"]').fill('MyCreator');
  await page.locator('input[name="first_name"]').press('Tab');
  await page.locator('input[name="last_name"]').fill('MyCreator');
  await page.locator('input[name="last_name"]').press('Tab');
  await page.locator('input[name="username"]').fill('creator');
  await page.locator('input[name="username"]').press('Tab');
  await page.locator('input[name="password"]').fill('a12345678');
  await page.locator('input[name="password"]').press('Tab');
  await page.locator('input[name="email"]').fill('creator@dei.gr');
  await page.locator('select[name="company"]').selectOption('1');
  await page.locator('input[name="mobile_phone"]').click();
  await page.locator('input[name="mobile_phone"]').fill('6936934567');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
});