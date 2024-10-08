import { test, expect } from "@playwright/test";

test("Handle Input Box", async ({ page }) => {
  page.goto("https://itera-qa.azurewebsites.net/home/automation");

  // Inputbox - firstname
  await expect(await page.locator("//input[@id='name']")).toBeVisible();
  await expect(await page.locator("//input[@id='name'")).toBeEmpty();
  await expect(await page.locator("//input[@id='name'")).toBeEditable();
  await expect(await page.locator("//input[@id='name']")).toBeEnabled();

  await page.locator("//input[@id='name']").fill("John");

  await page.waitForTimeout(5000); //pausing time
});
