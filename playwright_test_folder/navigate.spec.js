import { test, expect } from "@playwright/test";

test.describe("navigating home, click first item and assert heading text", () => {
  test("venue details in heading", async ({ page }) => {
    await page.goto("/");

    await page.waitForSelector("#venue-container", { state: "visible" });

    await page.locator("#venue-container > a").first().click();

    await expect(page.locator("h1")).toContainText("Venue details");
  });
});
