import { test, expect } from "@playwright/test";

test("Locators", async ({ page }) => {
  await page.goto("https://demoblaze.com");

  // Click on Login Button
  await page.locator("id=login2").click();

  // Provide user name - CSS
  await page.fill("#loginusername", "pavanol");

  // Provide Password
  await page.fill("input[id='loginpassword']", "test@123");

  // Click Login
  await page.click("button[onclick='logIn()']");

  // Check Logout link presence
  const logoutLink = await page.locator("#logout2");
  await expect(logoutLink).toBeVisible();
});
