import { test, expect } from "@playwright/test";

test("Handle checkboxes", async ({ page }) => {
  await page.goto("https://itera-qa/azurewebsites.net/home/automation");

  // Single checkbox
  await page.locator("//input[@id='monday' and @type='checkbox']").check();
  await page.check("//input[@id='monday' and @type='checkbox']");

  expect(
    await page.locator("//input[@id='monday' and @type='checkbox']")
  ).toBeChecked();
});
