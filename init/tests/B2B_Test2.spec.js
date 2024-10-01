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
  await page.getByRole("link", { name: "CUST1000085" }).click();
  await page.getByRole("button", { name: "Add New Comment" }).click();
  await page.getByPlaceholder("Add your comment here...").click();
  await page
    .getByPlaceholder("Add your comment here...")
    .fill("My New Comment");
  await page.getByRole("button", { name: "Submit Comment" }).click();
  await page.getByRole("button", { name: "Add New Comment" }).click();
  await page.getByPlaceholder("Add your comment here...").click();
  await page
    .getByPlaceholder("Add your comment here...")
    .fill("My New Comment 2");
  await page.getByRole("button", { name: "Submit Comment" }).click();
});
