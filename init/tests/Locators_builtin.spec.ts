/*
    page.getByAltText() - to locate an element, usually image, by its text alternative
    page.getByPlaceholder() - to locate an input by placeholder.
    page.getByRole() to locate by explicit and implicit accessibilility attributes.
    page.getByText() to locate by text content.

    page.getByLabel() to locate a form control by associated label's text.
    page.getByTitle() to locate an element by its title attribute.
    page.getByTestId() to locate an element based on its data-testid attribute

*/

import { test, expect } from "@playwright/test";

test("Built in Locators", async ({ page }) => {
  await page.goto("https://www.insomnia.gr");

  const logo = await page.locator("img").getByAltText("Αλέξης Σολωμός");
  //   await expect(logo).toBeVisible();

  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");

  await page.getByRole("button", { type: "submit" }).click();

  const name = await page
    .locator('//p[@class="oxd-userdropdown-name"]')
    .textContent();
  await expect(await page.getByText(name)).toBeVisible();
});
