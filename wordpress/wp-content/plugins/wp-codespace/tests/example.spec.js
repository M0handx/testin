// @ts-nocheck
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://earth.google.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/google earth/);
});
