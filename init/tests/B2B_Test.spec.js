import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "http://localhost:3000/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Ftickets"
  );
  await page.getByPlaceholder("User Name").click();
  await page.getByPlaceholder("User Name").fill("etzakos");
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("a12345678");
  await page.getByRole("button", { name: "Sign in" }).click();
  await page.waitForTimeout(2500);
  await page.getByRole("button", { name: "Create New Ticket" }).click();
  await page.getByLabel("Title *").click();
  await page.getByLabel("Title *").fill("My New Title");
  await page.getByPlaceholder("Description...").click();
  await page.getByPlaceholder("Description...").fill("My new Description");
  await page.getByLabel("CLI Value").click();
  await page.getByLabel("CLI Value").fill("2102012749");
  await page.getByLabel("Category").click();
  await page.getByRole("option", { name: "Category 2" }).click();
  await page.getByLabel("Service Name").click();
  await page.getByRole("option", { name: "EQUIPMENT" }).click();
  await page.getByLabel("Contact Person *").click();
  await page.getByLabel("Contact Person *").fill("Nikos Karetatos");
  await page.getByRole("button", { name: "Submit Ticket" }).click();
});
