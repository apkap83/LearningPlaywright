import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Ftickets');
  await page.getByPlaceholder('User Name').click();
  await page.getByPlaceholder('User Name').fill('admin');
  await page.getByPlaceholder('User Name').press('Tab');
  await page.getByPlaceholder('Password').fill('a12345');
  await page.getByPlaceholder('Password').press('Enter');
  await page.getByRole('button', { name: 'Users List' }).click();
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('row', { name: '5 MyCreator MyCreator creator' }).getByRole('button').nth(4).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
});