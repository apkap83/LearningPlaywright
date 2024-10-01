import { test, expect } from "@playwright/test";

test("Hard Assertions Test", async ({ page }) => {
  // Open app URL
  await page.goto("https://demo.nopcommerce.com/register");

  // Expect To Have Correct URL
  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

  // Expect to Have Correct Title
  await expect(page).toHaveTitle("nopCommerce demo store. Register");

  // Expect to Be Visible
  const logoElement = await page.locator(".header-logo");
  await expect(logoElement).toBeVisible();

  // Check if control is enabled
  const searchStoreBox = page.locator("#small-searchterms");
  await expect(searchStoreBox).toBeEnabled();

  // Is Checkbox checked?
  const mailRadioButton = await page.locator("#gender-male");
  await mailRadioButton.click();
  await expect(mailRadioButton).toBeChecked();

  // Check if Checkbox is checked
  const newsLetterCheckBox = await page.locator("#Newsletter");
  await expect(newsLetterCheckBox).toBeChecked();

  // Check if element has a specific attribute
  const regButton = await page.locator("#register-button");
  expect(regButton).toHaveAttribute("type", "submit"); // attr key, attr value

  // Check if element has specific text (exact match)
  await expect(await page.locator(".page-title h1")).toHaveText("Register");

  // Check if element has specific text (partial match)
  await expect(await page.locator(".page-title h1")).toContainText("Reg");

  // Check if input has value
  const emailInput = await page.locator("#Email");
  await emailInput.fill("test@demo.com");
  await expect(emailInput).toHaveValue("test@demo.com");

  // Check if List of elements has the given length
  const options = await page.locator('select[name="DateOfBirthMonth"] option');
  await expect(options).toHaveCount(13);
});
