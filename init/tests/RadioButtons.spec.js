import { test, expect } from "@playwright/test";

test("Handle Readio Buttons", async ({ page }) => {
  await page.goto("https://itera-qa.azurewebsites.net/home/automation");

  // Radio Buttons
  await page.locator("//input[@value='option2']").check();

  await expect(await page.locator("//input[@value='option2']")).toBeChecked();
  await expect(
    await page.locator("//input[@value='option2']").isChecked()
  ).toBeTruthy();

  await expect(
    await page.locator("//input[@value='option1']").isChecked()
  ).toBeFalsy();

  await page.waitForTimeout(5000); //pausing code
});
