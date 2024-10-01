import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "http://localhost:3000/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Ftickets"
  );
  await page.getByPlaceholder("User Name").click();
  await page.getByPlaceholder("User Name").fill("creator");
  await page.getByPlaceholder("User Name").press("Tab");
  await page.getByPlaceholder("Password").fill("a12345678");
  await page.getByRole("button", { name: "Sign in" }).click();
  await page.waitForTimeout(2000);
  await page.getByRole("button", { name: "Create New Ticket" }).click();
  await page.getByLabel("Title *").click();
  await page.getByLabel("Title *").fill("My Title");
  await page.getByLabel("Title *").press("Tab");
  await page.getByPlaceholder("Description...").fill("My Description");
  await page.getByLabel("CLI Value").click();
  await page.getByLabel("CLI Value").fill("2102012749");
  await page.getByLabel("Category").click();
  await page.getByRole("option", { name: "Category 3" }).click();
  await page.getByLabel("Service Name").click();
  await page.getByRole("option", { name: "MOBILE", exact: true }).click();
  await page.getByLabel("Contact Person *").click();
  await page.getByLabel("Contact Person *").fill("Nikos Karetatos");
  await page.getByRole("button", { name: "Submit Ticket" }).click();

  await page.waitForTimeout(5000);
});
